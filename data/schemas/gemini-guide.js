/**
 * Gemini AI Guide Schema Data
 * 
 * This file contains the structured data for the Gemini AI guide.
 * It uses the template functions from schemaTemplates.js to create the schemas.
 */

import { createGuideSchemas } from '../../utils/schemaTemplates';

/**
 * Complete schema data for the Gemini AI guide
 */
const geminiGuideSchemas = createGuideSchemas({
  // Basic guide information
  title: "How to Use Gemini AI: Complete 2025 Guide",
  description: "Learn how to use Google's powerful Gemini AI with our comprehensive guide, from setting up your account to mastering advanced multimodal features.",
  slug: "how-to-use-gemini-ai", // Standardized URL
  mainImage: "/images/gemini-guide-2025.jpg",
  datePublished: "2025-03-20T08:00:00+00:00",
  dateModified: "2025-04-26T10:30:00+00:00",
  
  // Author and publisher information
  authorName: "How-To Guides Team",
  
  // HowTo specific information
  steps: [
    {
      name: "Creating a Google Account",
      text: "Visit accounts.google.com/signup, enter your personal information, provide verification and recovery options, agree to Google's terms, complete the verification process, and set up account preferences.",
      slug: "how-to-use-gemini-ai",
      image: "/images/gemini-google-account.jpg"
    },
    {
      name: "Accessing Gemini AI",
      text: "Visit gemini.google.com in your web browser, sign in with your Google account, accept the terms of service if this is your first time, and begin interacting with Gemini through the chat interface.",
      slug: "how-to-use-gemini-ai",
      image: "/images/gemini-access.jpg"
    },
    {
      name: "Using the Gemini Mobile App",
      text: "Download the Gemini app from the Google Play Store or Apple App Store, install and open it, sign in with your Google account, grant necessary permissions, and begin interacting with Gemini.",
      slug: "how-to-use-gemini-ai",
      image: "/images/gemini-mobile-app.jpg"
    },
    {
      name: "Understanding Gemini's Capabilities",
      text: "Learn about Gemini's multimodal capabilities, including text generation, image analysis, code assistance, mathematical problem-solving, and integration with Google services.",
      slug: "how-to-use-gemini-ai",
      image: "/images/gemini-capabilities.jpg"
    },
    {
      name: "Crafting Effective Prompts",
      text: "Create effective prompts by being specific, providing context, using clear instructions, and understanding how to leverage Gemini's multimodal capabilities.",
      slug: "how-to-use-gemini-ai",
      image: "/images/gemini-prompts.jpg"
    },
    {
      name: "Using Gemini Extensions",
      text: "Enhance Gemini's capabilities by enabling extensions for Google services, third-party applications, and specialized tools to accomplish more complex tasks.",
      slug: "how-to-use-gemini-ai",
      image: "/images/gemini-extensions.jpg"
    },
    {
      name: "Troubleshooting Common Issues",
      text: "Learn how to resolve common Gemini issues like connectivity problems, response limitations, and understanding error messages.",
      slug: "how-to-use-gemini-ai",
      image: "/images/gemini-troubleshooting.jpg"
    }
  ],
  
  tools: [
    "Web browser",
    "Internet connection",
    "Google account",
    "Mobile device (optional for app access)"
  ],
  
  supplies: [],
  
  totalTime: "25", // in minutes, matching the guide's estimated reading time
  
  // FAQ specific information
  questions: [
    {
      question: "What is Gemini AI?",
      answer: "Gemini AI is Google's most capable and general AI model, designed to understand and process multiple types of information simultaneously. It's a multimodal AI assistant that can seamlessly work with text, code, audio, images, and video to help with a wide range of tasks from creative writing to complex problem-solving."
    },
    {
      question: "How much does Gemini AI cost?",
      answer: "Gemini AI offers both free and paid versions. The free version provides access to the Gemini Pro model with basic multimodal capabilities, web search integration, and standard usage limits. Gemini Advanced, available through Google One AI Premium subscription ($19.99/month as of 2025), provides access to the more powerful Gemini Ultra model with enhanced capabilities and higher usage limits."
    },
    {
      question: "What are the different versions of Gemini?",
      answer: "Google offers three main versions of Gemini: Gemini Ultra (the largest and most capable model, powers Gemini Advanced), Gemini Pro (balanced model for a wide range of tasks, powers the free tier), and Gemini Nano (efficient model optimized for on-device tasks on smartphones). As of 2025, Google has continued to evolve the Gemini family with newer versions like Gemini 2.0."
    },
    {
      question: "How do I access Gemini AI?",
      answer: "You can access Gemini AI through multiple platforms: the Gemini website (gemini.google.com), the Gemini mobile app (available on Android and iOS), Google Chrome (by typing @gemini followed by your query in the address bar), Google AI Studio (ai.google.dev), or through Google Assistant on supported devices."
    },
    {
      question: "What can I do with Gemini AI?",
      answer: "Gemini AI offers a wide range of capabilities including multimodal understanding, advanced reasoning, creative assistance, research and information synthesis, code generation and debugging, language translation, mathematical problem-solving, and integration with Google services. You can use it for tasks like writing, editing, generating ideas, analyzing images, solving complex problems, and much more."
    },
    {
      question: "What's the difference between Gemini and ChatGPT?",
      answer: "While both are powerful AI assistants, Gemini was built from the ground up to be multimodal, allowing it to natively process text, images, audio, and video simultaneously. Gemini also features deep integration with Google services and search capabilities. ChatGPT has added multimodal capabilities over time but started primarily as a text-based model. Both offer free and paid tiers with different capabilities and pricing structures."
    },
    {
      question: "Can Gemini AI access the internet?",
      answer: "Yes, Gemini AI can access the internet to provide up-to-date information through Google Search integration. This allows it to answer questions about current events, retrieve recent information, and provide more accurate and timely responses compared to models limited to their training data."
    },
    {
      question: "How do I get the best results from Gemini AI?",
      answer: "To get the best results from Gemini AI, be specific in your prompts, provide clear context, break complex tasks into smaller steps, use Gemini's multimodal capabilities by including images when relevant, leverage extensions for specialized tasks, experiment with different approaches, and provide feedback to help Gemini understand your needs better."
    }
  ],
  
  // Article specific information
  category: "AI Assistants"
});

// Export individual schemas
export const geminiHowToSchema = geminiGuideSchemas.howToSchema;
export const geminiFAQSchema = geminiGuideSchemas.faqSchema;
export const geminiArticleSchema = geminiGuideSchemas.articleSchema;

// Export all schemas as default
export default geminiGuideSchemas;
