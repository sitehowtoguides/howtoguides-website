// guideData.js
import { ROUTES } from './routes';

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
  },
  {
    id: 'aiPrompts',
    title: 'How to Write Effective AI Prompts: Complete 2025 Guide',
    description: 'Techniques for crafting prompts that get better results from AI tools',
    url: ROUTES.guides.aiPrompts,
    schemaFile: 'ai-prompts-guide',
    category: ['prompt-engineering', 'productivity'],
    featured: false,
    image: '/images/logos/content-creation-logo.png',
    color: '#2ecc71',
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
