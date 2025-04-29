/*
 * OpenAI API Integration Service
 * 
 * This service uses the OpenAI API to analyze relevant RSS feed updates
 * and generate draft updates for the guides.
 */

// NOTE: Use the official OpenAI Node.js library
// Needs installation: npm install openai
const OpenAI = require("openai");

// Placeholder for the API key - User must provide this during integration
const OPENAI_API_KEY = process.env.OPENAI_API_KEY || "YOUR_API_KEY_HERE"; 

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
});

// Function to generate a draft update based on an RSS item and existing guide content
async function generateUpdateDraft(rssItem, existingGuideContent) {
  console.log(`Generating draft update for: ${rssItem.title}`);

  if (!OPENAI_API_KEY || OPENAI_API_KEY === "YOUR_API_KEY_HERE") {
    console.warn("OpenAI API key not configured. Skipping draft generation.");
    return {
      success: false,
      error: "OpenAI API key not configured.",
      draft: null,
    };
  }

  // Construct the prompt for the AI
  const prompt = `
Analyze the following new information from an RSS feed item and compare it with the existing guide content. 
Suggest specific updates or additions needed for the guide based *only* on this new information. 
Focus on factual changes, new features, or significant updates mentioned in the RSS item.
If the new information is minor, irrelevant, or already covered, state that no update is needed.

**New Information (from ${rssItem.sourceFeed}):**
Title: ${rssItem.title}
Link: ${rssItem.link}
Published Date: ${rssItem.pubDate}
Summary: 
${rssItem.summary}

**Existing Guide Content (Relevant Section):**
${existingGuideContent.substring(0, 3000)}...

**Suggested Update/Analysis:**
(Provide a concise summary of necessary changes or state "No update needed")
`;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4-turbo-preview", // Or another suitable model
      messages: [
        { role: "system", content: "You are an expert content assistant helping to keep technical guides up-to-date. Analyze the provided information and suggest concise, factual updates." },
        { role: "user", content: prompt },
      ],
      max_tokens: 500,
      temperature: 0.3, // Lower temperature for more factual responses
    });

    const draft = completion.choices[0]?.message?.content?.trim();
    console.log(`Draft generated successfully.`);
    return {
      success: true,
      draft: draft,
      error: null,
    };

  } catch (error) {
    console.error("Error calling OpenAI API:", error);
    return {
      success: false,
      error: error.message || "Unknown OpenAI API error",
      draft: null,
    };
  }
}

// Example Usage (requires actual guide content)
/*
const sampleRssItem = {
  guideId: 'chatgpt',
  title: 'OpenAI introduces new feature X for ChatGPT',
  link: 'http://example.com/new-feature-x',
  pubDate: new Date().toISOString(),
  summary: 'A detailed summary of the new feature X, explaining how it works and its benefits.',
  sourceFeed: 'OpenAI Blog'
};
const sampleGuideContent = "This is the existing section about ChatGPT features...";

generateUpdateDraft(sampleRssItem, sampleGuideContent).then(result => {
  if (result.success) {
    console.log("Suggested Draft:", result.draft);
  } else {
    console.error("Draft Generation Failed:", result.error);
  }
});
*/

module.exports = { generateUpdateDraft };

