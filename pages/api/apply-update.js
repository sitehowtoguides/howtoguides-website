// pages/api/apply-update.js
import { Octokit } from "@octokit/rest";
import fs from "fs/promises";
import path from "path";

// Path to the temporary data file for storing pending updates
const PENDING_UPDATES_PATH = path.join("/tmp", "pending-updates.json");
const GUIDE_DATA_PATH_IN_REPO = "guideData.js"; // Path to guideData.js in your repo root

// GitHub configuration - Ensure these are set in Vercel Environment Variables
const GITHUB_OWNER = process.env.GITHUB_OWNER;
const GITHUB_REPO = process.env.GITHUB_REPO;
const GITHUB_PAT = process.env.GITHUB_PAT;

// Initialize Octokit
const octokit = new Octokit({
  auth: GITHUB_PAT,
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { id, action, finalUpdateText } = req.body;

  if (!id || !action) {
    return res.status(400).json({ message: "Missing required fields: id, action" });
  }

  if (action === "approve" && !finalUpdateText) {
    return res.status(400).json({ message: "Missing finalUpdateText for approval" });
  }

  console.log(`API route /api/apply-update called for ID: ${id}, Action: ${action}`);

  try {
    // 1. Read pending updates
    let pendingUpdates = [];
    try {
      const fileContent = await fs.readFile(PENDING_UPDATES_PATH, "utf-8");
      pendingUpdates = JSON.parse(fileContent);
    } catch (readError) {
      if (readError.code === "ENOENT") {
        console.log("pending-updates.json not found, assuming no pending updates.");
      } else {
        throw readError; // Rethrow other read errors
      }
    }

    const updateIndex = pendingUpdates.findIndex((update) => update.id === id);

    if (updateIndex === -1) {
      return res.status(404).json({ message: "Update not found" });
    }

    const updateToProcess = pendingUpdates[updateIndex];

    if (action === "approve") {
      // --- GitHub Interaction --- 
      if (!GITHUB_OWNER || !GITHUB_REPO || !GITHUB_PAT) {
        console.error("GitHub environment variables (OWNER, REPO, PAT) are not fully configured.");
        return res.status(500).json({ message: "Server configuration error: GitHub credentials missing." });
      }

      try {
        console.log(`Attempting to update ${GUIDE_DATA_PATH_IN_REPO} in ${GITHUB_OWNER}/${GITHUB_REPO}`);

        // a. Get the current file content and SHA from GitHub
        const { data: fileData } = await octokit.repos.getContent({
          owner: GITHUB_OWNER,
          repo: GITHUB_REPO,
          path: GUIDE_DATA_PATH_IN_REPO,
        });

        if (fileData.type !== "file" || !fileData.content) {
          throw new Error(`${GUIDE_DATA_PATH_IN_REPO} is not a file or content is missing.`);
        }

        const currentContent = Buffer.from(fileData.content, "base64").toString("utf-8");
        const currentSha = fileData.sha;

        // b. Modify the content (This is a simplified example - needs robust parsing/modification)
        // WARNING: This simple string replacement is FRAGILE. A better approach would be to:
        // 1. Parse the JS code into an AST (Abstract Syntax Tree) using a library like Babel or Acorn.
        // 2. Find the specific guide object within the AST.
        // 3. Modify the updateNotes property in the AST.
        // 4. Generate the updated JS code from the modified AST.
        // For now, we use a less robust string manipulation approach.
        
        const guideIdRegex = new RegExp(`id:\s*["\"\"]${updateToProcess.guideId}["\"\"]`, "s");
        const guideMatch = currentContent.match(guideIdRegex);

        if (!guideMatch) {
          throw new Error(`Could not find guide with id: ${updateToProcess.guideId} in ${GUIDE_DATA_PATH_IN_REPO}`);
        }

        // Find the updateNotes line for the specific guide
        const guideStartIndex = guideMatch.index;
        // CORRECTED: Regex on a single line
        const updateNotesRegex = /updateNotes:\s*["\"\`]/s; 
        const updateNotesMatch = currentContent.substring(guideStartIndex).match(updateNotesRegex);

        if (!updateNotesMatch) {
          throw new Error(`Could not find updateNotes for guide id: ${updateToProcess.guideId}`);
        }

        const updateNotesStartIndex = guideStartIndex + updateNotesMatch.index + updateNotesMatch[0].length;
        const closingQuoteChar = updateNotesMatch[0].slice(-1); // Get the quote type (", ", `)
        
        // Construct the new note with date
        const today = new Date().toLocaleDateString("en-CA"); // YYYY-MM-DD format
        const newNote = `${finalUpdateText} (${today})`;
        
        // Prepend the new note (add \n for newline)
        const updatedContent = 
            currentContent.substring(0, updateNotesStartIndex) + 
            newNote + "\n" + // Add the new note and a newline
            currentContent.substring(updateNotesStartIndex);

        // c. Commit the updated content back to GitHub
        console.log(`Committing update for guide ${updateToProcess.guideId} to GitHub...`);
        await octokit.repos.createOrUpdateFileContents({
          owner: GITHUB_OWNER,
          repo: GITHUB_REPO,
          path: GUIDE_DATA_PATH_IN_REPO,
          message: `Update guideData.js: Add note for ${updateToProcess.guideId}`, // Commit message
          content: Buffer.from(updatedContent).toString("base64"),
          sha: currentSha, // Required for updating existing files
          branch: "main", // Or your default branch name
        });
        console.log("Successfully committed update to GitHub.");

      } catch (githubError) {
        console.error(`Error updating ${GUIDE_DATA_PATH_IN_REPO} via GitHub:`, githubError);
        // Return a server error but don"t reveal too much detail
        return res.status(500).json({ message: "Error updating guide data on server." });
      }
      // --- End GitHub Interaction --- 

      // Update status in the local pending list (will be saved below)
      updateToProcess.status = "Approved";
      updateToProcess.reviewDate = new Date().toISOString();
      updateToProcess.finalUpdateText = finalUpdateText;
      console.log(`Marked update ${id} as Approved.`);

    } else if (action === "reject") {
      // Update status in the local pending list (will be saved below)
      updateToProcess.status = "Rejected";
      updateToProcess.reviewDate = new Date().toISOString();
      console.log(`Marked update ${id} as Rejected.`);
    } else {
      return res.status(400).json({ message: "Invalid action specified" });
    }

    // 2. Update the pending updates file (remove processed item or update status)
    // For simplicity, we remove approved/rejected items. Alternatively, keep them with updated status.
    const updatedPendingList = pendingUpdates.filter((update) => update.id !== id);
    await fs.writeFile(PENDING_UPDATES_PATH, JSON.stringify(updatedPendingList, null, 2));
    console.log(`Updated status for ${id} to ${updateToProcess.status} in pending-updates.json.`);

    res.status(200).json({ message: `Update successfully ${action === "approve" ? "approved" : "rejected"}.` });

  } catch (error) {
    console.error("Error in /api/apply-update:", error);
    res.status(500).json({ message: "Error processing update", error: error.message });
  }
}

