/*
 * RSS Feed Monitoring Service
 * 
 * This service monitors specified RSS feeds for updates relevant to the guides.
 */

const Parser = require("rss-parser");

// Define RSS feeds to monitor (Updated URLs based on research)
const FEEDS = [
  // Using an alternative feed for OpenAI due to persistent 403 errors on the official one
  { name: "OpenAI Blog (Alternative Feed)", url: "https://jamesg.blog/openai.xml", keywords: ["chatgpt", "gpt-4", "dall-e", "openai"] }, 
  // Updated URL for the official Google AI Blog feed
  { name: "Google AI Blog", url: "https://blog.google/technology/ai/rss/", keywords: ["gemini", "google ai"] }, 
  // Add more feeds (e.g., Midjourney announcements if available)
];

// Keywords related to guides
const GUIDE_KEYWORDS = {
  "chatgpt": ["chatgpt", "gpt-4", "gpt-3", "openai"],
  "midjourney": ["midjourney"],
  "dalle": ["dall-e", "openai"],
  "gemini": ["gemini", "google ai"],
  "ai-content-creation": ["ai content creation", "content generation"],
  "ai-prompts": ["prompt engineering", "ai prompts"],
  "chatgpt-longer-responses": ["chatgpt", "longer responses"],
};

// Initialize Parser with User-Agent
const parser = new Parser({
  requestOptions: {
    headers: {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36", // Add a common browser User-Agent
    },
  },
  // Add any other customFields you might have had before, e.g.:
  // customFields: { item: [["media:content", "mediaContent"]] }
});

async function checkFeeds() {
  console.log("Checking RSS feeds for updates...");
  let relevantUpdates = [];

  for (const feed of FEEDS) {
    try {
      console.log(`Fetching feed: ${feed.name} from ${feed.url}`);
      // The parser instance now includes the User-Agent header in its requests
      const feedData = await parser.parseURL(feed.url);
      
      feedData.items.forEach(item => {
        const itemTitle = item.title?.toLowerCase() || "";
        const itemContent = item.contentSnippet?.toLowerCase() || item.content?.toLowerCase() || "";
        const combinedText = itemTitle + " " + itemContent;

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
      // Log the specific feed URL that failed
      console.error(`Error fetching or parsing feed ${feed.name} (${feed.url}):`, error);
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

