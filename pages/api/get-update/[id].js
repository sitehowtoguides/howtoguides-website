import fs from 'fs/promises';
import path from 'path';

// Path to the data file for storing pending updates
const PENDING_UPDATES_PATH = path.join('/tmp', 'pending-updates.json'); // Use /tmp directory

export default async function handler(req, res) {
  const { id } = req.query; // Get the ID from the dynamic route parameter

  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  if (!id) {
    return res.status(400).json({ message: 'Update ID is required.' });
  }

  console.log(`API route /api/get-update/${id} called.`);

  try {
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

    // Find the specific update by ID
    const update = updates.find(u => u.id === id);

    if (!update) {
      return res.status(404).json({ message: `Update with ID ${id} not found.` });
    }

    res.status(200).json({ update });

  } catch (error) {
    console.error(`Error in /api/get-update/${id}:`, error);
    res.status(500).json({ message: 'Error fetching update details', error: error.message });
  }
}
