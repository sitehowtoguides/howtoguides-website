/*
 * RSS Feed Monitoring Service
 * 
 * This service monitors specified RSS feeds for updates relevant to the guides.
 */

const Parser = require('rss-parser');
const parser = new Parser();

// Define RSS feeds to monitor (example)
const FEEDS = [
  { name: 'OpenAI Blog', url: 'https://openai.com/blog/rss.xml', keywords: ['chatgpt', 'gpt-4', 'dall-e'] },
  { name: 'Google AI Blog', url: 'https://ai.googleblog.com/feeds/posts/default', keywords: ['gemini', 'google ai'] },
  // Add more feeds (e.g., Midjourney announcements if available)
];

// Keywords related to guides
const GUIDE_KEYWORDS = {
  'chatgpt': ['chatgpt', 'gpt-4', 'gpt-3', 'openai'],
  'midjourney': ['midjourney'],
  'dalle': ['dall-e', 'openai'],
  'gemini': ['gemini', 'google ai'],
  'ai-content-creation': ['ai content creation', 'content generation'],
  'ai-prompts': ['prompt engineering', 'ai prompts'],
  'chatgpt-longer-responses': ['chatgpt', 'longer responses'],
};

async function checkFeeds() {
  console.log('Checking RSS feeds for updates...');
  let relevantUpdates = [];

  for (const feed of FEEDS) {
    try {
      console.log(`Fetching feed: ${feed.name}`);
      const feedData = await parser.parseURL(feed.url);
      
      feedData.items.forEach(item => {
        const itemTitle = item.title?.toLowerCase() || '';
        const itemContent = item.contentSnippet?.toLowerCase() || item.content?.toLowerCase() || '';
        const combinedText = itemTitle + ' ' + itemContent;

        // Check if the item is relevant to any guide based on keywords
        for (const guideId in GUIDE_KEYWORDS) {
          const keywords = GUIDE_KEYWORDS[guideId];
          if (keywords.some(keyword => combinedText.includes(keyword))) {
            // Basic check to avoid duplicates (can be improved with date/ID tracking)
            if (!relevantUpdates.some(update => update.link === item.link)) {
              console.log(`Found relevant item for ${guideId}: ${item.title}`);
              relevantUpdates.push({
                guideId: guideId,
                title: item.title,
                link: item.link,
                pubDate: item.pubDate,
                summary: item.contentSnippet || item.content,
                sourceFeed: feed.name,
              });
            }
            break; // Stop checking keywords for this item once a match is found
          }
        }
      });
    } catch (error) {
      console.error(`Error fetching or parsing feed ${feed.name}:`, error);
    }
  }

  console.log(`Found ${relevantUpdates.length} potentially relevant updates.`);
  // In a full implementation, store these updates (e.g., in a file or database)
  // and trigger the AI analysis.
  return relevantUpdates;
}

// Example usage (in a real scenario, this would run on a schedule)
// checkFeeds();

module.exports = { checkFeeds, FEEDS, GUIDE_KEYWORDS };

