// guideData.js
import { ROUTES } from './routes';

// Get today's date in YYYY-MM-DD format
const today = new Date().toISOString().split('T')[0];

export const GUIDES = [
  {
    id: 'chatgpt',
    title: 'How to Use ChatGPT: Complete 2025 Guide',
    description: 'Master ChatGPT from scratch with our step-by-step tutorial',
    url: ROUTES.guides.chatgpt,
    schemaFile: 'chatgpt-guide',
    category: ['chatgpt', 'text-generation'],
    featured: true,
    image: '/images/logos/chatgpt-logo.png',
    color: '#74aa9c',
    lastUpdated: '2025-04-19', // Keep specific date if known
    updateNotes: 'Updated with GPT-4o information',
  },
  {
    id: 'chatgptLongerResponses',
    title: 'How to Make ChatGPT Write Longer Responses: Complete 2025 Guide',
    description: 'Learn techniques to get more detailed and comprehensive responses from ChatGPT',
    url: ROUTES.guides.chatgptLongerResponses,
    schemaFile: 'chatgpt-longer-responses-guide',
    category: ['chatgpt', 'text-generation'],
    featured: false,
    image: '/images/logos/chatgpt-logo.png',
    color: '#74aa9c',
    lastUpdated: today,
    updateNotes: 'Initial version published',
  },
  {
    id: 'dalle',
    title: 'How to Use DALL-E: Complete 2025 Tutorial',
    description: 'Learn how to create amazing AI-generated images with OpenAI\'s DALL-E',
    url: ROUTES.guides.dalle,
    schemaFile: 'dalle-guide',
    category: ['dalle', 'image-generation'],
    featured: true,
    image: '/images/logos/dalle-logo.png',
    color: '#e74c3c',
    lastUpdated: today,
    updateNotes: 'Initial version published',
  },
  {
    id: 'midjourney',
    title: 'How to Use Midjourney: Step-by-Step Guide',
    description: 'Learn how to create stunning AI-generated images with Midjourney',
    url: ROUTES.guides.midjourney,
    schemaFile: 'midjourney-guide',
    category: ['midjourney', 'image-generation'],
    featured: true,
    image: '/images/logos/midjourney-logo.png',
    color: '#3498db',
    lastUpdated: '2025-03-28', // Keep specific date if known
    updateNotes: 'Updated with v6 features',
  },
  {
    id: 'gemini',
    title: 'How to Use Gemini AI: Complete 2025 Guide',
    description: 'Master Google\'s powerful multimodal AI assistant with our comprehensive guide',
    url: ROUTES.guides.gemini,
    schemaFile: 'gemini-guide',
    category: ['gemini', 'multimodal-ai'],
    featured: true,
    image: '/images/logos/gemini-logo.png',
    color: '#8e44ad',
    lastUpdated: '2025-04-10', // Keep specific date if known
    updateNotes: 'Updated with v6 features',
  },
  {
    id: 'aiContentCreation',
    title: 'How to Use AI for Content Creation: Complete 2025 Guide',
    description: 'Master AI-powered content creation to produce high-quality blogs, social media, videos, and more',
    url: ROUTES.guides.aiContentCreation,
    schemaFile: 'ai-content-creation-guide',
    category: ['content-creation', 'productivity'],
    featured: false,
    image: '/images/logos/content-creation-logo.png',
    color: '#2ecc71',
    lastUpdated: today,
    updateNotes: 'Initial version published',
  },
  {
    id: 'aiPrompts',
    title: 'How to Write Effective AI Prompts: Complete 2025 Guide',
    description: 'Techniques for crafting prompts that get better results from AI tools',
    url: ROUTES.guides.aiPrompts,
    schemaFile: 'ai-prompts-guide',
    category: ['prompt-engineering', 'productivity'],
    featured: false,
    image: '/images/logos/content-creation-logo.png', // Consider a dedicated prompt engineering logo
    color: '#2ecc71',
    lastUpdated: today,
    updateNotes: 'Initial version published',
  },
];

// Helper functions
export const getGuideById = (id) => GUIDES.find(guide => guide.id === id);
export const getGuidesByCategory = (category) => GUIDES.filter(guide => guide.category.includes(category));
export const getFeaturedGuides = () => GUIDES.filter(guide => guide.featured);

// Get guides for a specific category page
export const getCategoryGuides = (categoryId) => {
  switch(categoryId) {
    case 'chatgpt':
      return GUIDES.filter(guide => guide.category.includes('chatgpt'));
    case 'gemini':
      return GUIDES.filter(guide => guide.category.includes('gemini'));
    case 'midjourney':
      return GUIDES.filter(guide => guide.category.includes('midjourney'));
    case 'dalle':
      return GUIDES.filter(guide => guide.category.includes('dalle'));
    case 'content-creation':
      return GUIDES.filter(guide => guide.category.includes('content-creation'));
    case 'image-generation':
      return GUIDES.filter(guide => guide.category.includes('image-generation'));
    case 'coding-assistant':
      return GUIDES.filter(guide => guide.category.includes('coding-assistant'));
    default:
      return [];
  }
};

// Helper function to get the latest updates (sorted by lastUpdated date)
export const getLatestUpdates = (count = 3) => {
  return GUIDES
    .filter(guide => guide.lastUpdated) // Ensure guide has an update date
    .sort((a, b) => new Date(b.lastUpdated) - new Date(a.lastUpdated))
    .slice(0, count);
};

