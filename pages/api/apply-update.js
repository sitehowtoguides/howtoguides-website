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
    // If file doesn't exist or is empty, return empty array
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

    // 2. Find the correct guide object and insert the new note
    const idLineRegex = new RegExp(`id:\s*['"]${guideId}['"]`);
    const idMatch = fileContent.match(idLineRegex);

    if (!idMatch || idMatch.index === undefined) {
      throw new Error(`Could not find line with id: ${guideId} in guideData.js`);
    }

    const searchStartIndex = idMatch.index;

    // Find the *next* updateNotes line after the id line
    const updateNotesLineRegex = /updateNotes:\s*['"`]/;
    const updateNotesMatch = fileContent.substring(searchStartIndex).match(updateNotesLineRegex);

    if (!updateNotesMatch || updateNotesMatch.index === undefined) {
      throw new Error(`Could not find updateNotes field after id: ${guideId}`);
    }

    // Calculate the precise insertion point: start index of the file content after the id + index of updateNotes within that substring + length of the matched 'updateNotes: "' part
    const insertionPoint = searchStartIndex + updateNotesMatch.index + updateNotesMatch[0].length;

    // Check if the updateNotes string is empty or just contains the initial quote
    const closingQuoteChar = updateNotesMatch[0].slice(-1); // Get the quote character (' or " or `)
    const closingQuoteIndex = fileContent.indexOf(closingQuoteChar, insertionPoint);
    if (closingQuoteIndex === -1) {
        throw new Error(`Could not find closing quote for updateNotes for guide id: ${guideId}`);
    }
    const existingNotes = fileContent.substring(insertionPoint, closingQuoteIndex).trim();

    let newNoteString;
    const formattedDate = new Date().toISOString().split('T')[0];
    // Escape single quotes in the final text
    const escapedFinalUpdateText = finalUpdateText.replace(/'/g, "\\'");

    if (existingNotes) {
      // If notes exist, add a newline and indentation before the new note
      newNoteString = `\n    * ${formattedDate}: ${escapedFinalUpdateText}`;
    } else {
      // If no notes exist (string is empty), just add the new note without leading newline/indentation
      newNoteString = `* ${formattedDate}: ${escapedFinalUpdateText}`;
    }

    const updatedContent = fileContent.slice(0, insertionPoint) + newNoteString + fileContent.slice(insertionPoint);

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
    // Re-throw a more generic error to the client
    throw new Error('Error updating guide data on server.');
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { id, action, finalUpdateText } = req.body;

  // Basic validation
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
      // --- Approval Logic --- 
      console.log(`Approving update ${id} for guide ${updateToProcess.guideId}`);
      
      // 1. Update guideData.js on GitHub
      await updateGuideDataOnGitHub(updateToProcess.guideId, finalUpdateText);

      // 2. Update status in pending list (or remove)
      // For simplicity, we remove it. Alternatively, update status to 'Approved'.
      pendingUpdates.splice(updateIndex, 1);
      await writePendingUpdates(pendingUpdates);

      console.log(`Update ${id} approved and removed from pending list.`);
      res.status(200).json({ success: true, message: 'Update approved successfully.' });

    } else if (action === 'reject') {
      // --- Rejection Logic --- 
      console.log(`Rejecting update ${id}`);
      
      // Remove from pending list
      pendingUpdates.splice(updateIndex, 1);
      await writePendingUpdates(pendingUpdates);

      console.log(`Update ${id} rejected and removed from pending list.`);
      res.status(200).json({ success: true, message: 'Update rejected successfully.' });

    } else {
      return res.status(400).json({ message: 'Invalid action specified.' });
    }

  } catch (error) {
    console.error('Error processing update action:', error);
    // Use the specific error message if available, otherwise a generic one
    res.status(500).json({ success: false, message: error.message || 'An internal server error occurred.' });
  }
}

