/**
 * Midjourney Guide Schema Data
 * 
 * This file contains the structured data for the Midjourney guide.
 * It uses the template functions from schemaTemplates.js to create the schemas.
 */

import { createGuideSchemas } from '../../utils/schemaTemplates';

/**
 * Complete schema data for the Midjourney guide
 */
const midjourneyGuideSchemas = createGuideSchemas({
  // Basic guide information
  title: "How to Use Midjourney: Step-by-Step Guide",
  description: "Learn how to use Midjourney to create stunning AI-generated images with our comprehensive step-by-step guide, from setting up your account to mastering advanced features.",
  slug: "how-to-use-midjourney", // Standardized URL
  mainImage: "/images/midjourney-guide-2025.jpg",
  datePublished: "2025-03-15T08:00:00+00:00",
  dateModified: "2025-04-20T10:30:00+00:00",
  
  // Author and publisher information
  authorName: "How-To Guides Team",
  
  // HowTo specific information
  steps: [
    {
      name: "Creating a Discord Account",
      text: "Sign up for Discord by visiting discord.com, clicking 'Register', entering your email, username, password, and date of birth, then verifying your email address.",
      slug: "how-to-use-midjourney",
      image: "/images/midjourney-discord-signup.jpg"
    },
    {
      name: "Joining the Midjourney Discord Server",
      text: "Visit midjourney.com, click 'Join the Beta' or 'Join Discord', accept the invitation to join the server, and agree to the server rules when prompted.",
      slug: "how-to-use-midjourney",
      image: "/images/midjourney-server-join.jpg"
    },
    {
      name: "Starting Your Midjourney Subscription",
      text: "In the Midjourney Discord server, navigate to any 'newbies' channel, type /subscribe, follow the link provided to choose your preferred plan, and complete the subscription process.",
      slug: "how-to-use-midjourney",
      image: "/images/midjourney-subscription.jpg"
    },
    {
      name: "Navigating the Discord Interface",
      text: "Learn to navigate Discord's interface, including channels, direct messages, and the Midjourney bot commands for generating images.",
      slug: "how-to-use-midjourney",
      image: "/images/midjourney-discord-interface.jpg"
    },
    {
      name: "Creating Your First Image",
      text: "Generate your first image by typing /imagine followed by your prompt description in a Midjourney channel or in a direct message to the Midjourney Bot.",
      slug: "how-to-use-midjourney",
      image: "/images/midjourney-first-image.jpg"
    },
    {
      name: "Understanding Midjourney Commands",
      text: "Learn essential Midjourney commands like /imagine, /info, /help, /subscribe, and /settings to control your image generation experience.",
      slug: "how-to-use-midjourney",
      image: "/images/midjourney-commands.jpg"
    },
    {
      name: "Crafting Effective Prompts",
      text: "Create effective prompts by being specific about subject, style, lighting, composition, and other details to get the best results from Midjourney.",
      slug: "how-to-use-midjourney",
      image: "/images/midjourney-prompts.jpg"
    },
    {
      name: "Using Parameters to Control Output",
      text: "Control your image output by adding parameters like --ar (aspect ratio), --stylize, --chaos, and --version to your prompts.",
      slug: "how-to-use-midjourney",
      image: "/images/midjourney-parameters.jpg"
    }
  ],
  
  tools: [
    "Web browser",
    "Internet connection",
    "Discord account",
    "Midjourney subscription"
  ],
  
  supplies: [],
  
  totalTime: "25", // in minutes, matching the guide's estimated reading time
  
  // FAQ specific information
  questions: [
    {
      question: "What is Midjourney?",
      answer: "Midjourney is an AI image generation tool that creates images based on text descriptions (prompts) provided by users. It uses artificial intelligence to interpret your text prompts and generate corresponding visuals, often with stunning and unexpected results."
    },
    {
      question: "How much does Midjourney cost?",
      answer: "Midjourney offers several subscription plans with different pricing tiers. As of 2025, plans include Basic ($10/month), Standard ($30/month), Pro ($60/month), and Mega ($120/month). Each plan offers different amounts of GPU time and features. Midjourney no longer offers a free trial as of April 2025."
    },
    {
      question: "What is the current version of Midjourney?",
      answer: "As of 2025, the current flagship model is Midjourney Version 6, which offers dramatically improved photorealism, better text rendering, more accurate prompt following, and enhanced compositional understanding compared to earlier versions."
    },
    {
      question: "Do I need artistic skills to use Midjourney?",
      answer: "No, you don't need artistic skills to use Midjourney. The AI does the artistic work based on your text descriptions. However, learning to write effective prompts will help you get better results, and this is a skill that improves with practice."
    },
    {
      question: "How do I access Midjourney?",
      answer: "Midjourney is accessed through Discord. You need to create a Discord account, join the Midjourney Discord server, subscribe to a Midjourney plan, and then you can use the Midjourney Bot to generate images either in the Midjourney Discord channels or via direct message to the bot."
    },
    {
      question: "What command do I use to generate an image in Midjourney?",
      answer: "To generate an image in Midjourney, use the /imagine command followed by your prompt description. For example: /imagine a futuristic city with flying cars and neon lights"
    },
    {
      question: "Can I use Midjourney images commercially?",
      answer: "Yes, Midjourney images can be used commercially depending on your subscription plan. The Standard, Pro, and Mega plans include commercial usage rights for individuals and small businesses (under $1 million in revenue). The Pro and Mega plans also include commercial usage rights for larger businesses."
    },
    {
      question: "How do I improve my Midjourney prompts?",
      answer: "To improve your Midjourney prompts, be specific about subject matter, artistic style, lighting, composition, and mood. Use descriptive adjectives, reference specific artists or styles, and experiment with parameters like --stylize and --chaos to control the output. Study effective prompts from the community and practice regularly."
    }
  ],
  
  // Article specific information
  category: "AI Image Generation"
});

// Export individual schemas
export const midjourneyHowToSchema = midjourneyGuideSchemas.howToSchema;
export const midjourneyFAQSchema = midjourneyGuideSchemas.faqSchema;
export const midjourneyArticleSchema = midjourneyGuideSchemas.articleSchema;

// Export all schemas as default
export default midjourneyGuideSchemas;
