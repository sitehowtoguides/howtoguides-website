import { checkFeeds } from '../../services/rss-monitor';
import { generateUpdateDraft } from '../../services/openai-integration';
import { GUIDES } from '../../guideData'; // Assuming guideData.js is in the root
import fs from 'fs/promises';
import path from 'path';

// Path to the data file for storing pending updates
const PENDING_UPDATES_PATH = path.resolve(process.cwd(), 'data/pending-updates.json');

// Helper function to get guide content (simplified - needs actual implementation)
// In a real app, this might fetch content from a CMS or file system based on guideId
async function getGuideContentSnippet(guideId) {
  const guide = GUIDES.find(g => g.id === guideId);
  // Placeholder: In a real scenario, load the actual guide content file.
  // For now, just return the description as a stand-in for content.
  // We might need to read the actual guide file later for better context.
  console.log(`Fetching content snippet for guide: ${guideId}`);
  return guide ? guide.description : 'Guide content not found.'; 
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  console.log('API route /api/check-feeds called.');

  // Check for OpenAI API Key configuration
  if (!process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY === 'YOUR_API_KEY_HERE') {
    console.warn('OpenAI API key is not configured in .env.local. AI draft generation will be skipped.');
    // Optionally return an error or proceed without AI analysis
    // return res.status(400).json({ message: 'OpenAI API key not configured.' });
  }

  try {
    // 1. Run the RSS feed check
    const relevantUpdates = await checkFeeds();
    let updatesProcessed = 0;
    const newPendingUpdates = [];

    console.log(`Found ${relevantUpdates.length} relevant items. Starting AI analysis...`);

    // 2. Process each relevant update with AI
    for (const item of relevantUpdates) {
      try {
        // Fetch a snippet of the existing guide content
        const existingContent = await getGuideContentSnippet(item.guideId);
        
        // Generate draft update using OpenAI
        const aiResult = await generateUpdateDraft(item, existingContent);
        
        // Prepare the data to be saved
        const pendingUpdate = {
          id: Date.now().toString() + Math.random().toString(36).substring(2, 9), // Simple unique ID
          guideId: item.guideId,
          rssItemDetails: {
            title: item.title,
            link: item.link,
            pubDate: item.pubDate,
            summary: item.summary,
            sourceFeed: item.sourceFeed,
          },
          aiDraft: aiResult.success ? aiResult.draft : `AI Error: ${aiResult.error}`,
          aiAnalysisSuccess: aiResult.success,
          status: 'Pending Review',
          creationDate: new Date().toISOString(),
          reviewDate: null,
          finalUpdateText: null,
        };
        newPendingUpdates.push(pendingUpdate);
        updatesProcessed++;
      } catch (aiError) {
        console.error(`Error processing item for guide ${item.guideId} (${item.title}) with AI:`, aiError);
        // Optionally save with an error status
      }
    }

    console.log(`AI analysis complete. ${updatesProcessed} items processed.`);

    // 3. Store results in pending-updates.json
    if (newPendingUpdates.length > 0) {
      let existingUpdates = [];
      try {
        const fileContent = await fs.readFile(PENDING_UPDATES_PATH, 'utf-8');
        existingUpdates = JSON.parse(fileContent);
      } catch (readError) {
        // File might not exist yet, which is fine
        if (readError.code !== 'ENOENT') {
          console.error('Error reading pending updates file:', readError);
        }
      }
      
      const allUpdates = [...existingUpdates, ...newPendingUpdates];
      await fs.writeFile(PENDING_UPDATES_PATH, JSON.stringify(allUpdates, null, 2));
      console.log(`Saved ${newPendingUpdates.length} new items to pending-updates.json.`);
    }

    res.status(200).json({ 
      message: `Feed check and AI analysis complete. Processed ${updatesProcessed} items.`, 
      newUpdatesAdded: newPendingUpdates.length 
    });

  } catch (error) {
    console.error('Error in /api/check-feeds:', error);
    res.status(500).json({ message: 'Error checking feeds or processing with AI', error: error.message });
  }
}

