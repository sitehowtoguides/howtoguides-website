/**
 * ChatGPT Guide Schema Data
 * 
 * This file contains the structured data for the ChatGPT guide.
 * It uses the utility functions from schemaUtils.js to create the schemas.
 */

import { createHowToSchema, createFAQSchema, createArticleSchema } from '../../utils/schemaUtils';

/**
 * HowTo schema for the ChatGPT guide
 */
export const chatGPTHowToSchema = createHowToSchema({
  title: "How to Use ChatGPT for Beginners: Complete 2025 Guide",
  description: "Learn how to use ChatGPT effectively in 2025, from creating your account to writing effective prompts and exploring advanced features like GPT-4o and o3 models.",
  mainImage: "/images/chatgpt-beginners-guide-2025.jpg",
  totalTime: "20",
  tools: [
    "Internet connection",
    "Web browser or mobile device",
    "Email account (for registration)"
  ],
  supplies: [
    "Valid phone number (for verification)"
  ],
  steps: [
    {
      name: "Creating Your ChatGPT Account",
      instructions: [
        "Visit chat.openai.com in your web browser. This is the official website for ChatGPT.",
        "Click on the 'Sign up' button and choose your preferred signup method: Email, Google, Microsoft, or Apple account.",
        "Verify your phone number by entering the code sent via SMS.",
        "Complete your profile by providing your name, preferred language, and intended use.",
        "Verify your email address by clicking the link sent to your inbox."
      ],
      image: "/images/chatgpt-signup-process.jpg",
      url: "/how-to-use-chatgpt-for-beginners#creating-your-chatgpt-account"
    },
    {
      name: "Navigating the ChatGPT Interface",
      instructions: [
        "Familiarize yourself with the main dashboard components: chat area, message input box, new chat button, model selector, and conversation history.",
        "Start a new conversation by clicking the 'New chat' button in the top-left corner.",
        "Explore the sidebar to access conversation history, folders, settings, and the new memory section.",
        "Customize your experience using dark/light mode toggle, notification settings, privacy options, and custom instructions."
      ],
      image: "/images/chatgpt-interface-annotated.jpg",
      url: "/how-to-use-chatgpt-for-beginners#navigating-the-chatgpt-interface"
    },
    {
      name: "Writing Your First Prompts",
      instructions: [
        "Understand prompt basics: clear, specific, focused instructions that guide the AI.",
        "Craft effective questions by being specific, providing context, and specifying your desired format.",
        "Give clear instructions using action verbs, output format specifications, and parameters like length and tone.",
        "Refine and iterate on responses by providing feedback and asking for revisions or expansions."
      ],
      image: "/images/chatgpt-prompt-examples.jpg",
      url: "/how-to-use-chatgpt-for-beginners#writing-your-first-prompts"
    },
    {
      name: "Understanding Different ChatGPT Models",
      instructions: [
        "Learn about GPT-4o, OpenAI's flagship model with multimodal capabilities for text and images.",
        "Explore o3, the advanced reasoning model designed for complex problem-solving and tool usage.",
        "Understand o4-mini, the smaller, faster model optimized for quick responses and mobile devices.",
        "Switch between models using the model selector dropdown above the message input box."
      ],
      image: "/images/chatgpt-model-comparison.jpg",
      url: "/how-to-use-chatgpt-for-beginners#understanding-different-chatgpt-models"
    },
    {
      name: "Choosing Between Free and Paid Options",
      instructions: [
        "Understand the free tier features: limited access to GPT-4o and o4-mini, basic web browsing, and standard response speeds.",
        "Learn about ChatGPT Plus benefits: priority access to all models, higher usage limits, faster responses, and advanced features for $20/month.",
        "Consider team and enterprise options for organizational use with enhanced security and administrative controls."
      ],
      image: "/images/chatgpt-subscription-comparison.jpg",
      url: "/how-to-use-chatgpt-for-beginners#free-vs-paid-chatgpt-subscription-options"
    },
    {
      name: "Exploring Practical Applications",
      instructions: [
        "Use ChatGPT for writing assistance with emails, content creation, and editing.",
        "Leverage ChatGPT for learning and education through concept explanations and study guides.",
        "Get programming help with code explanations, debugging, and learning new languages.",
        "Apply ChatGPT to various tasks including research, language translation, business applications, and personal organization."
      ],
      image: "/images/chatgpt-use-cases-infographic.jpg",
      url: "/how-to-use-chatgpt-for-beginners#10-practical-ways-to-use-chatgpt"
    },
    {
      name: "Troubleshooting Common Issues",
      instructions: [
        "Handle capacity errors by waiting, trying during off-peak hours, or upgrading to ChatGPT Plus.",
        "Resolve network errors by checking your connection, refreshing the page, or clearing browser cache.",
        "Address incomplete responses by asking ChatGPT to continue or breaking requests into smaller parts.",
        "Verify information accuracy using web browsing capabilities and authoritative sources."
      ],
      image: "/images/chatgpt-troubleshooting-guide.jpg",
      url: "/how-to-use-chatgpt-for-beginners#troubleshooting-common-issues"
    }
  ]
});

/**
 * FAQ schema for the ChatGPT guide
 */
export const chatGPTFAQSchema = createFAQSchema({
  questions: [
    {
      question: "Is ChatGPT completely free to use?",
      answer: "Yes, ChatGPT offers a free tier that provides access to GPT-4o and o4-mini models with usage limits. This free version is sufficient for casual users and those exploring the platform. For more intensive use, ChatGPT Plus is available for $20 per month (as of April 2025) and offers priority access, higher usage limits, faster response times, and access to advanced features and models like o3."
    },
    {
      question: "Does ChatGPT have access to the internet?",
      answer: "Yes, ChatGPT has web browsing capabilities that allow it to search for and retrieve current information from the internet. This feature is available to both free and Plus users, though Plus subscribers get enhanced browsing capabilities. When you ask ChatGPT to search for something, it uses third-party search providers to find relevant information and can summarize or analyze what it finds."
    },
    {
      question: "Can ChatGPT write code for me?",
      answer: "Yes, ChatGPT is quite capable at writing code across many programming languages, including Python, JavaScript, HTML/CSS, Java, C++, and more. It can generate complete functions, debug existing code, explain how code works, and help you learn programming concepts. However, you should always review and test AI-generated code before using it in production environments, as it may contain errors or security vulnerabilities."
    },
    {
      question: "How accurate is the information from ChatGPT?",
      answer: "ChatGPT's accuracy varies depending on the topic and the model's training data. While it's generally reliable for common knowledge, conceptual explanations, and creative content, it may provide outdated or incorrect information, especially for recent events or highly specialized topics. Always verify critical information from ChatGPT with authoritative sources, particularly for health, legal, financial, or technical matters."
    },
    {
      question: "Can ChatGPT remember our previous conversations?",
      answer: "Yes, ChatGPT maintains conversation history within a single chat session and, as of 2025, has enhanced memory features that can reference your past conversations across different chat sessions. This allows for more personalized and contextually relevant responses over time. You can manage this feature in your privacy settings if you prefer to limit what ChatGPT remembers about your interactions."
    }
  ]
});

/**
 * Article schema for the ChatGPT guide
 */
export const chatGPTArticleSchema = createArticleSchema({
  title: "How to Use ChatGPT for Beginners: Complete 2025 Guide",
  description: "Learn how to use ChatGPT effectively in 2025, from creating your account to writing effective prompts and exploring advanced features like GPT-4o and o3 models.",
  mainImage: "/images/chatgpt-beginners-guide-2025.jpg",
  authorName: "How-ToGuides Team",
  publishDate: "2025-04-19T08:00:00+00:00",
  modifyDate: "2025-04-27T10:00:00+00:00",
  category: "AI Tools"
});
