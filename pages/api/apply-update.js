import { Octokit } from '@octokit/rest';
import path from 'path';
import fs from 'fs/promises';

// Path to the temporary file storing pending updates (Vercel writable path)
const PENDING_UPDATES_PATH = path.join('/tmp', 'pending-updates.json');

// GitHub configuration from environment variables
const GITHUB_OWNER = process.env.GITHUB_OWNER;
const GITHUB_REPO = process.env.GITHUB_REPO;
const GITHUB_PAT = process.env.GITHUB_PAT;
const GITHUB_BRANCH = process.env.GITHUB_BRANCH || 'main'; // Default to 'main' branch
const GUIDE_DATA_PATH = 'guideData.js'; // Path to guideData.js in the repository

// Initialize Octokit
const octokit = new Octokit({ auth: GITHUB_PAT });

// Helper function to read pending updates
async function readPendingUpdates() {
  try {
    const data = await fs.readFile(PENDING_UPDATES_PATH, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    if (error.code === 'ENOENT') {
      return [];
    }
    console.error('Error reading pending updates file:', error);
    throw new Error('Could not read pending updates.');
  }
}

// Helper function to write pending updates
async function writePendingUpdates(updates) {
  try {
    await fs.writeFile(PENDING_UPDATES_PATH, JSON.stringify(updates, null, 2), 'utf-8');
  } catch (error) {
    console.error('Error writing pending updates file:', error);
    throw new Error('Could not save pending updates.');
  }
}

// Helper function to update guideData.js on GitHub
async function updateGuideDataOnGitHub(guideId, finalUpdateText) {
  if (!GITHUB_OWNER || !GITHUB_REPO || !GITHUB_PAT) {
    throw new Error('Missing GitHub configuration environment variables (OWNER, REPO, PAT).');
  }

  try {
    // 1. Get the current content and SHA of guideData.js
    const getFileResponse = await octokit.repos.getContent({
      owner: GITHUB_OWNER,
      repo: GITHUB_REPO,
      path: GUIDE_DATA_PATH,
      ref: GITHUB_BRANCH,
    });

    if (getFileResponse.status !== 200 || !getFileResponse.data || !getFileResponse.data.content) {
      throw new Error('Failed to fetch guideData.js from GitHub.');
    }

    const fileContent = Buffer.from(getFileResponse.data.content, 'base64').toString('utf-8');
    const sha = getFileResponse.data.sha;

    // 2. Find the correct guide object and insert the new note (Line-based approach)
    const lines = fileContent.split('\n');
    let guideStartIndex = -1;
    let updateNotesLineIndex = -1;

    // Find the line index containing the guide ID
    for (let i = 0; i < lines.length; i++) {
        const trimmedLine = lines[i].trim();
        if (trimmedLine.startsWith(`id: '${guideId}'`) || trimmedLine.startsWith(`id: "${guideId}"`) ) {
            guideStartIndex = i;
            break;
        }
    }

    if (guideStartIndex === -1) {
        throw new Error(`Could not find line starting with id: '${guideId}' in guideData.js`);
    }

    // Find the *next* line containing 'updateNotes:' starting from after the guide ID line
    for (let i = guideStartIndex + 1; i < lines.length; i++) {
        if (lines[i].trim().startsWith('updateNotes:')) {
            updateNotesLineIndex = i;
            break;
        }
        if (lines[i].trim() === '}') {
            break;
        }
    }

    if (updateNotesLineIndex === -1) {
        throw new Error(`Could not find updateNotes line after id: '${guideId}'`);
    }

    // Prepare the new note content
    const formattedDate = new Date().toISOString().split('T')[0];
    // Escape backticks and the quote character used in the updateNotes string
    const originalUpdateNotesLine = lines[updateNotesLineIndex];
    const quoteCharMatch = originalUpdateNotesLine.match(/updateNotes:\s*(['"`])/);
    const quoteChar = quoteCharMatch ? quoteCharMatch[1] : "'"; // Default to single quote
    const escapeRegex = new RegExp(`[\\${quoteChar}\\]`, 'g'); // Escape backslash and the specific quote char
    const escapedFinalUpdateText = finalUpdateText.replace(escapeRegex, "\\$&");
    const newNoteString = `* ${formattedDate}: ${escapedFinalUpdateText}`; // Content of the new note

    // Get the current content of the updateNotes string
    const currentNotesContentMatch = originalUpdateNotesLine.match(/updateNotes:\s*['"`](.*)['"`],?/);
    const currentNotesContent = currentNotesContentMatch ? currentNotesContentMatch[1].trim() : '';

    let updatedNotesContent;
    if (currentNotesContent) {
        // If notes exist, add the new note with a newline separator
        updatedNotesContent = `${currentNotesContent}\n    ${newNoteString}`; // Add newline and indentation
    } else {
        // If no notes exist, just use the new note
        updatedNotesContent = newNoteString;
    }

    // Reconstruct the updateNotes line
    const indentationMatch = originalUpdateNotesLine.match(/^(\s*)/);
    const indentation = indentationMatch ? indentationMatch[1] : '  '; // Default indentation
    const endsWithComma = originalUpdateNotesLine.trim().endsWith(',');
    lines[updateNotesLineIndex] = `${indentation}updateNotes: ${quoteChar}${updatedNotesContent}${quoteChar}${endsWithComma ? ',' : ''}`;

    const updatedContent = lines.join('\n');

    // 3. Commit the updated content back to GitHub
    const commitMessage = `Update guideData.js: Add note for ${guideId}`;
    const commitResponse = await octokit.repos.createOrUpdateFileContents({
      owner: GITHUB_OWNER,
      repo: GITHUB_REPO,
      path: GUIDE_DATA_PATH,
      message: commitMessage,
      content: Buffer.from(updatedContent).toString('base64'),
      sha: sha,
      branch: GITHUB_BRANCH,
    });

    if (commitResponse.status !== 200 && commitResponse.status !== 201) {
      throw new Error(`GitHub commit failed with status: ${commitResponse.status}`);
    }

    console.log('Successfully updated guideData.js on GitHub.');

  } catch (error) {
    console.error('Error updating guideData.js via GitHub:', error);
    throw new Error(error.message || 'Error updating guide data on server.');
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { id, action, finalUpdateText } = req.body;

  if (!id || !action) {
    return res.status(400).json({ message: 'Missing required fields: id, action' });
  }
  if (action === 'approve' && !finalUpdateText) {
    return res.status(400).json({ message: 'Missing finalUpdateText for approval' });
  }

  try {
    let pendingUpdates = await readPendingUpdates();
    const updateIndex = pendingUpdates.findIndex(update => update.id === id);

    if (updateIndex === -1) {
      return res.status(404).json({ message: `Update with id ${id} not found.` });
    }

    const updateToProcess = pendingUpdates[updateIndex];

    if (action === 'approve') {
      console.log(`Approving update ${id} for guide ${updateToProcess.guideId}`);
      await updateGuideDataOnGitHub(updateToProcess.guideId, finalUpdateText);
      pendingUpdates.splice(updateIndex, 1);
      await writePendingUpdates(pendingUpdates);
      console.log(`Update ${id} approved and removed from pending list.`);
      res.status(200).json({ success: true, message: 'Update approved successfully.' });

    } else if (action === 'reject') {
      console.log(`Rejecting update ${id}`);
      pendingUpdates.splice(updateIndex, 1);
      await writePendingUpdates(pendingUpdates);
      console.log(`Update ${id} rejected and removed from pending list.`);
      res.status(200).json({ success: true, message: 'Update rejected successfully.' });

    } else {
      return res.status(400).json({ message: 'Invalid action specified.' });
    }

  } catch (error) {
    console.error('Error processing update action:', error);
    res.status(500).json({ success: false, message: error.message || 'An internal server error occurred.' });
  }
}
