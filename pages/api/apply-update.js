import fs from 'fs/promises';
import path from 'path';

// Path to the data file for storing pending updates
const PENDING_UPDATES_PATH = path.join('/tmp', 'pending-updates.json'); // Use /tmp directory
// Path to the guide data file
const GUIDE_DATA_PATH = path.resolve(process.cwd(), 'guideData.js'); // Assuming guideData.js is in the root

// Helper function to escape strings for regex
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { updateId, action, finalText } = req.body; // action: 'approve' or 'reject'

  if (!updateId || !action || (action === 'approve' && typeof finalText === 'undefined')) {
    return res.status(400).json({ message: 'Missing required fields: updateId, action, and finalText (if approving)' });
  }

  console.log(`API route /api/apply-update called for ID: ${updateId}, Action: ${action}`);

  try {
    // 1. Read pending updates
    let updates = [];
    try {
      const fileContent = await fs.readFile(PENDING_UPDATES_PATH, 'utf-8');
      updates = JSON.parse(fileContent);
    } catch (readError) {
      if (readError.code === 'ENOENT') {
        return res.status(404).json({ message: 'Pending updates file not found.' });
      }
      throw readError;
    }

    // 2. Find the update
    const updateIndex = updates.findIndex(u => u.id === updateId);
    if (updateIndex === -1) {
      return res.status(404).json({ message: `Update with ID ${updateId} not found.` });
    }

    const updateToModify = updates[updateIndex];

    if (updateToModify.status !== 'Pending Review') {
        return res.status(400).json({ message: `Update ${updateId} is already processed (Status: ${updateToModify.status}).` });
    }

    // 3. Update the status in pending-updates.json
    updateToModify.status = action === 'approve' ? 'Approved' : 'Rejected';
    updateToModify.reviewDate = new Date().toISOString();
    if (action === 'approve') {
      updateToModify.finalUpdateText = finalText;
    }

    await fs.writeFile(PENDING_UPDATES_PATH, JSON.stringify(updates, null, 2));
    console.log(`Updated status for ${updateId} to ${updateToModify.status} in pending-updates.json.`);

    // 4. If approved, update guideData.js
    if (action === 'approve') {
      try {
        let guideDataContent = await fs.readFile(GUIDE_DATA_PATH, 'utf-8');
        const guideId = updateToModify.guideId;
        // Escape potential special characters in the final text for JSON string representation within JS code
        const escapedFinalText = JSON.stringify(finalText || 'Guide updated based on recent information.').slice(1, -1); // Get content without outer quotes
        const newLastUpdated = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format

        // Regex to find the specific guide object and update its fields
        // Looks for id: 'guideId', then captures until lastUpdated:, replaces lastUpdated value, captures until updateNotes:, replaces updateNotes value.
        const guideRegex = new RegExp(`(id:\s*['"]${escapeRegExp(guideId)}['"],[\s\S]*?lastUpdated:\s*)['"].*?['"](,[\s\S]*?updateNotes:\s*)['"].*?['"]`, 'm');
        
        const replacementString = `$1'${newLastUpdated}'$2'${escapedFinalText}'`;

        if (guideDataContent.match(guideRegex)) {
            guideDataContent = guideDataContent.replace(guideRegex, replacementString);
            await fs.writeFile(GUIDE_DATA_PATH, guideDataContent, 'utf-8');
            console.log(`Updated lastUpdated and updateNotes for guide ${guideId} in guideData.js.`);
        } else {
            console.warn(`Could not find guide ${guideId} in guideData.js using regex. File not updated.`);
            // Optionally, return a warning in the response
        }
      } catch (fileError) {
        console.error(`Error updating guideData.js for guide ${updateToModify.guideId}:`, fileError);
        // Don't fail the whole request, but log the error. The status in pending-updates.json is already updated.
        return res.status(200).json({ 
            message: `Update ${updateId} status set to ${updateToModify.status}. Error updating guideData.js: ${fileError.message}` 
        });
      }
    }

    res.status(200).json({ message: `Update ${updateId} status set to ${updateToModify.status}.` });

  } catch (error) {
    console.error('Error in /api/apply-update:', error);
    res.status(500).json({ message: 'Error processing update', error: error.message });
  }
}

