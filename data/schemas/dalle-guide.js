/**
 * DALL-E Guide Schema Data
 * 
 * This file contains the structured data for the DALL-E guide.
 * It uses the template functions from schemaTemplates.js to create the schemas.
 */

import { createGuideSchemas } from '../../utils/schemaTemplates';

/**
 * Complete schema data for the DALL-E guide
 */
const dalleGuideSchemas = createGuideSchemas({
  // Basic guide information
  title: "How to Use DALL-E: Complete 2025 Tutorial",
  description: "Learn how to use DALL-E to create amazing AI-generated images with our comprehensive tutorial, from setting up your account to mastering advanced features.",
  slug: "how-to-use-dall-e", // Standardized URL
  mainImage: "/images/dalle-guide-2025.jpg",
  datePublished: "2025-03-18T08:00:00+00:00",
  dateModified: "2025-04-21T10:30:00+00:00",
  
  // Author and publisher information
  authorName: "How-To Guides Team",
  
  // HowTo specific information
  steps: [
    {
      name: "Creating an OpenAI Account",
      text: "Visit openai.com, click 'Sign Up', enter your email address or continue with Google, Microsoft, or Apple account, follow the prompts to complete your account setup, and verify your email address.",
      slug: "how-to-use-dall-e",
      image: "/images/dalle-signup.jpg"
    },
    {
      name: "Accessing DALL-E",
      text: "Log in to your OpenAI account, navigate to the DALL-E section by clicking on 'Products' and selecting 'DALL-E', or access DALL-E directly at labs.openai.com.",
      slug: "how-to-use-dall-e",
      image: "/images/dalle-access.jpg"
    },
    {
      name: "Understanding Credits and Subscriptions",
      text: "Learn about DALL-E's credit system and subscription options, including the free tier, credit purchases, and ChatGPT Plus subscription benefits.",
      slug: "how-to-use-dall-e",
      image: "/images/dalle-credits.jpg"
    },
    {
      name: "Navigating the DALL-E Interface",
      text: "Explore the DALL-E interface, including the prompt input field, generation options, image gallery, and editing tools.",
      slug: "how-to-use-dall-e",
      image: "/images/dalle-interface.jpg"
    },
    {
      name: "Creating Your First Image",
      text: "Generate your first image by entering a descriptive prompt in the input field and clicking the 'Generate' button.",
      slug: "how-to-use-dall-e",
      image: "/images/dalle-first-image.jpg"
    },
    {
      name: "Crafting Effective Prompts",
      text: "Learn to write effective prompts by being specific about subject, style, lighting, composition, and other details to get the best results from DALL-E.",
      slug: "how-to-use-dall-e",
      image: "/images/dalle-prompts.jpg"
    },
    {
      name: "Using Advanced Features",
      text: "Explore DALL-E's advanced features like image editing, variations, outpainting, and inpainting to refine and expand your generated images.",
      slug: "how-to-use-dall-e",
      image: "/images/dalle-advanced.jpg"
    }
  ],
  
  tools: [
    "Web browser",
    "Internet connection",
    "OpenAI account",
    "Credit card or PayPal (for paid features)"
  ],
  
  supplies: [],
  
  totalTime: "20", // in minutes, matching the guide's estimated reading time
  
  // FAQ specific information
  questions: [
    {
      question: "What is DALL-E?",
      answer: "DALL-E is an AI image generation system developed by OpenAI that creates images based on text descriptions (prompts) provided by users. It uses artificial intelligence to interpret your text prompts and generate corresponding visuals, often with stunning and unexpected results."
    },
    {
      question: "How much does DALL-E cost?",
      answer: "DALL-E offers a free tier with limited credits for new users. Additional credits can be purchased starting at $15 for 115 credits (as of 2025). ChatGPT Plus subscribers ($20/month) also get a monthly allocation of DALL-E generations included with their subscription."
    },
    {
      question: "What is the current version of DALL-E?",
      answer: "As of 2025, the current flagship model is DALL-E 3, which offers dramatically improved photorealism, better text rendering, more accurate prompt following, and enhanced compositional understanding compared to earlier versions."
    },
    {
      question: "Do I need artistic skills to use DALL-E?",
      answer: "No, you don't need artistic skills to use DALL-E. The AI does the artistic work based on your text descriptions. However, learning to write effective prompts will help you get better results, and this is a skill that improves with practice."
    },
    {
      question: "How do I access DALL-E?",
      answer: "You can access DALL-E through the OpenAI website (openai.com) by navigating to the DALL-E section under Products, or directly at labs.openai.com. ChatGPT Plus subscribers can also access DALL-E through the ChatGPT interface."
    },
    {
      question: "What's the difference between DALL-E and other AI image generators?",
      answer: "Compared to other AI image generators like Midjourney or Stable Diffusion, DALL-E offers a unique balance of accessibility and quality, with particular strengths in following detailed instructions and creating coherent scenes. DALL-E also has a simple web interface and tight integration with ChatGPT."
    },
    {
      question: "Can I use DALL-E images commercially?",
      answer: "Yes, OpenAI grants users full usage rights to commercialize the images they create with DALL-E, including the right to reprint, sell, and merchandise. However, you should review the most current terms of service for any updates to this policy."
    },
    {
      question: "How do I improve my DALL-E prompts?",
      answer: "To improve your DALL-E prompts, be specific about subject matter, artistic style, lighting, composition, and mood. Use descriptive adjectives, reference specific artists or styles, and experiment with different approaches. Study effective prompts from the community and practice regularly."
    }
  ],
  
  // Article specific information
  category: "AI Image Generation"
});

// Export individual schemas
export const dalleHowToSchema = dalleGuideSchemas.howToSchema;
export const dalleFAQSchema = dalleGuideSchemas.faqSchema;
export const dalleArticleSchema = dalleGuideSchemas.articleSchema;

// Export all schemas as default
export default dalleGuideSchemas;
