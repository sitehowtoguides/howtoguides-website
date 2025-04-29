import fs from 'fs/promises';
import path from 'path';

// Path to the data file for storing pending updates
const PENDING_UPDATES_PATH = path.join('/tmp', 'pending-updates.json'); // Use /tmp directory

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  console.log('API route /api/get-updates called.');

  try {
    let updates = [];
    try {
      const fileContent = await fs.readFile(PENDING_UPDATES_PATH, 'utf-8');
      updates = JSON.parse(fileContent);
    } catch (readError) {
      // File might not exist yet, return empty array
      if (readError.code !== 'ENOENT') {
        console.error('Error reading pending updates file:', readError);
        throw readError; // Rethrow if it's not a file-not-found error
      }
      console.log('pending-updates.json not found, returning empty list.');
    }

    // Sort updates by creation date, newest first
    updates.sort((a, b) => new Date(b.creationDate) - new Date(a.creationDate));

    res.status(200).json({ updates });

  } catch (error) {
    console.error('Error in /api/get-updates:', error);
    res.status(500).json({ message: 'Error fetching updates', error: error.message });
  }
}

