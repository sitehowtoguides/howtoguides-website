/**
 * ChatGPT Guide Schema Data
 * 
 * This file contains the structured data for the ChatGPT guide.
 * It uses the template functions from schemaTemplates.js to create the schemas.
 */

import { createGuideSchemas } from '../../utils/schemaTemplates';

/**
 * Complete schema data for the ChatGPT guide
 */
const chatGPTGuideSchemas = createGuideSchemas({
  // Basic guide information
  title: "How to Use ChatGPT: Complete 2025 Guide",
  description: "Learn how to use ChatGPT effectively in 2025, from creating your account to writing effective prompts and exploring advanced features like GPT-4o.",
  slug: "how-to-use-chatgpt", // Updated to match new standardized URL
  mainImage: "/images/chatgpt-guide-2025.jpg",
  datePublished: "2025-03-10T08:00:00+00:00",
  dateModified: "2025-04-19T10:30:00+00:00",
  
  // Author and publisher information
  authorName: "How-To Guides Team",
  
  // HowTo specific information
  steps: [
    {
      name: "Creating Your ChatGPT Account",
      text: "Sign up for ChatGPT by visiting chat.openai.com, clicking 'Sign up', choosing your preferred signup method, and following the prompts to create your account.",
      slug: "how-to-use-chatgpt", // Updated to match new standardized URL
      image: "/images/chatgpt-signup.jpg"
    },
    {
      name: "Navigating the ChatGPT Interface",
      text: "Learn to navigate the ChatGPT dashboard, including the chat area, message input box, new chat button, model selector, and conversation history.",
      slug: "how-to-use-chatgpt", // Updated to match new standardized URL
      image: "/images/chatgpt-interface.jpg"
    },
    {
      name: "Writing Your First Prompts",
      text: "Create effective prompts by being clear, specific, and providing context to get the best responses from ChatGPT.",
      slug: "how-to-use-chatgpt", // Updated to match new standardized URL
      image: "/images/chatgpt-prompts.jpg"
    },
    {
      name: "Understanding Different ChatGPT Models",
      text: "Learn about the different ChatGPT models available in 2025, including GPT-3.5, GPT-4o, and their capabilities and limitations.",
      slug: "how-to-use-chatgpt", // Updated to match new standardized URL
      image: "/images/chatgpt-models.jpg"
    },
    {
      name: "Exploring Practical Applications",
      text: "Discover practical ways to use ChatGPT for content creation, research, coding assistance, learning, and more.",
      slug: "how-to-use-chatgpt", // Updated to match new standardized URL
      image: "/images/chatgpt-applications.jpg"
    },
    {
      name: "Troubleshooting Common Issues",
      text: "Learn how to resolve common ChatGPT issues like server errors, unclear responses, and content limitations.",
      slug: "how-to-use-chatgpt", // Updated to match new standardized URL
      image: "/images/chatgpt-troubleshooting.jpg"
    }
  ],
  
  tools: [
    "Web browser",
    "Internet connection",
    "Email account (for signup)"
  ],
  
  supplies: [],
  
  totalTime: "20", // in minutes, matching the guide's estimated reading time
  
  // FAQ specific information
  questions: [
    {
      question: "Is ChatGPT free to use?",
      answer: "ChatGPT offers both free and paid options. The free version gives you access to the GPT-3.5 model with standard response speed and basic features. Paid subscriptions (ChatGPT Plus at $20/month and ChatGPT Team at $30/user/month) offer access to more advanced models like GPT-4o, faster response times, and additional features."
    },
    {
      question: "What is the primary purpose of ChatGPT?",
      answer: "The primary purpose of ChatGPT is to understand and generate human-like text. It's designed to have conversations, answer questions, write content, and assist with various text-based tasks."
    },
    {
      question: "Which ChatGPT subscription gives you access to GPT-4o?",
      answer: "ChatGPT Plus ($20/month) and ChatGPT Team ($30/user/month) subscriptions give you access to GPT-4o. The free version only provides access to GPT-3.5."
    },
    {
      question: "Where is the model selector located in the ChatGPT interface?",
      answer: "The model selector is located above the message input box at the bottom of the screen. It allows you to choose which ChatGPT model to use for your conversation."
    },
    {
      question: "How do I start a new conversation in ChatGPT?",
      answer: "To start a new conversation in ChatGPT, click the 'New chat' button in the top-left corner of the screen. The chat area will clear, and you'll see a welcome message. Then type your question or prompt in the message input box at the bottom and press Enter or click the send button."
    },
    {
      question: "Can ChatGPT write code?",
      answer: "Yes, ChatGPT can write code in various programming languages, explain code functionality, debug issues, and provide coding tutorials. It's particularly useful for generating code snippets, explaining programming concepts, and helping with debugging."
    },
    {
      question: "How accurate is ChatGPT?",
      answer: "ChatGPT's accuracy varies depending on the topic and how recent its training data is. While it's generally reliable for many topics, it can sometimes provide incorrect information (hallucinations), especially about very recent events or highly specialized topics. Always verify critical information from authoritative sources."
    },
    {
      question: "What's the difference between GPT-3.5 and GPT-4o?",
      answer: "GPT-4o is more advanced than GPT-3.5, offering better reasoning capabilities, more accurate responses, improved context understanding, and the ability to handle more complex tasks. GPT-4o also has multimodal capabilities, allowing it to process and generate text based on image inputs, which GPT-3.5 cannot do."
    }
  ],
  
  // Article specific information
  category: "AI Assistants"
});

// Export individual schemas
export const chatGPTHowToSchema = chatGPTGuideSchemas.howToSchema;
export const chatGPTFAQSchema = chatGPTGuideSchemas.faqSchema;
export const chatGPTArticleSchema = chatGPTGuideSchemas.articleSchema;

// Export all schemas as default
export default chatGPTGuideSchemas;
