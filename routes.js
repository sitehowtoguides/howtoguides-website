// routes.js
export const ROUTES = {
  guides: {
    chatgpt: '/guides/how-to-use-chatgpt',
    chatgptLongerResponses: '/guides/how-to-make-chatgpt-write-longer-responses',
    dalle: '/guides/how-to-use-dall-e',
    midjourney: '/guides/how-to-use-midjourney',
    gemini: '/guides/how-to-use-gemini-ai',
    aiContentCreation: '/guides/how-to-use-ai-for-content-creation',
    aiPrompts: '/guides/how-to-write-effective-ai-prompts',
    // Add new guides here
  },
  blog: {
    // Future blog routes
    index: '/blog',
    // Individual blog posts will go here
  },
  // Other site sections
  home: '/',
  about: '/about',
  contact: '/contact',
};

// Helper function to get guide URL by ID
export const getGuideUrl = (guideId) => {
  return ROUTES.guides[guideId] || '/guides'; // Fallback to guides index
};

// Helper function to get blog URL by ID
export const getBlogUrl = (blogId) => {
  return ROUTES.blog[blogId] || '/blog'; // Fallback to blog index
};
