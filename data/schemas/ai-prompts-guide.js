/**
 * AI Prompts Guide Schema Data
 * 
 * This file contains the structured data for the AI Prompts guide.
 * It uses the template functions from schemaTemplates.js to create the schemas.
 */

import { createGuideSchemas } from '../../utils/schemaTemplates';

/**
 * Complete schema data for the AI Prompts guide
 */
const aiPromptsGuideSchemas = createGuideSchemas({
  // Basic guide information
  title: "How to Write Effective AI Prompts: Complete 2025 Guide",
  description: "Learn how to write effective AI prompts with our comprehensive guide, from understanding prompt engineering to mastering advanced techniques for better AI results.",
  slug: "how-to-write-effective-ai-prompts", // Standardized URL
  mainImage: "/images/ai-prompts-guide-2025.jpg",
  datePublished: "2025-03-22T08:00:00+00:00",
  dateModified: "2025-04-24T10:30:00+00:00",
  
  // Author and publisher information
  authorName: "How-To Guides Team",
  
  // HowTo specific information
  steps: [
    {
      name: "Understanding Prompt Engineering",
      text: "Learn the fundamentals of prompt engineering, including what makes a good prompt, how AI models interpret prompts, and the impact of prompt structure on results.",
      slug: "how-to-write-effective-ai-prompts",
      image: "/images/prompt-engineering-basics.jpg"
    },
    {
      name: "Structuring Your Prompts",
      text: "Master the art of structuring prompts with clear instructions, context, examples, and constraints to guide the AI toward your desired output.",
      slug: "how-to-write-effective-ai-prompts",
      image: "/images/prompt-structure.jpg"
    },
    {
      name: "Using Role-Based Prompting",
      text: "Learn how to use role assignments in your prompts to influence the AI's perspective, expertise level, and communication style.",
      slug: "how-to-write-effective-ai-prompts",
      image: "/images/role-based-prompting.jpg"
    },
    {
      name: "Implementing Few-Shot Learning",
      text: "Provide examples within your prompts to teach the AI the pattern you want it to follow, improving consistency and accuracy of responses.",
      slug: "how-to-write-effective-ai-prompts",
      image: "/images/few-shot-learning.jpg"
    },
    {
      name: "Applying Chain-of-Thought Techniques",
      text: "Guide the AI through a step-by-step reasoning process to improve the quality of complex responses requiring logical thinking.",
      slug: "how-to-write-effective-ai-prompts",
      image: "/images/chain-of-thought.jpg"
    },
    {
      name: "Optimizing Prompts for Different AI Models",
      text: "Adapt your prompting techniques for different AI models like GPT-4o, Claude, and Gemini to leverage their unique strengths and capabilities.",
      slug: "how-to-write-effective-ai-prompts",
      image: "/images/model-specific-prompting.jpg"
    },
    {
      name: "Refining Prompts Through Iteration",
      text: "Learn the process of prompt iteration, analyzing AI responses, and making targeted improvements to achieve better results over time.",
      slug: "how-to-write-effective-ai-prompts",
      image: "/images/prompt-iteration.jpg"
    }
  ],
  
  tools: [
    "Web browser",
    "Internet connection",
    "Access to AI models (ChatGPT, Claude, Gemini, etc.)",
    "Text editor for prompt drafting"
  ],
  
  supplies: [],
  
  totalTime: "25", // in minutes, matching the guide's estimated reading time
  
  // FAQ specific information
  questions: [
    {
      question: "What is prompt engineering?",
      answer: "Prompt engineering is the practice of crafting effective inputs for AI models to generate desired outputs. It involves designing, refining, and optimizing the text instructions (prompts) given to AI systems to improve the quality, relevance, and usefulness of their responses. Effective prompt engineering requires understanding how AI models interpret language, their capabilities and limitations, and various techniques to guide their outputs."
    },
    {
      question: "Why are effective prompts important when using AI?",
      answer: "Effective prompts are crucial when using AI because they directly determine the quality and usefulness of the AI's output. Well-crafted prompts help AI models understand your exact needs, provide more accurate and relevant responses, reduce hallucinations or fabricated information, save time by getting better results on the first try, unlock the AI's full capabilities, and ensure consistency across multiple interactions. The prompt is essentially your interface for communicating with and directing the AI, making it the most important factor in getting valuable results."
    },
    {
      question: "What are the key elements of an effective AI prompt?",
      answer: "An effective AI prompt typically includes clear instructions about the task and desired output format, relevant context and background information, specific examples when helpful, constraints or limitations to guide the response, the appropriate tone and style requirements, and a well-defined role for the AI to assume. The most effective prompts are specific rather than vague, provide sufficient context without being overly verbose, and clearly communicate expectations while allowing the AI to leverage its capabilities."
    },
    {
      question: "What is role-based prompting?",
      answer: "Role-based prompting is a technique where you assign a specific role or persona to the AI in your prompt, such as 'Act as a marketing expert' or 'Respond as a physics professor.' This technique helps frame the AI's perspective, knowledge base, and communication style to match your needs. By establishing a role, you provide the AI with context about the expertise level, terminology, and approach you expect in its response, often resulting in more specialized and appropriate outputs."
    },
    {
      question: "What is few-shot learning in prompt engineering?",
      answer: "Few-shot learning in prompt engineering involves providing the AI with a small number of examples that demonstrate the pattern, format, or style you want it to follow in its response. Instead of just describing what you want, you show the AI through examples. For instance, if you want the AI to generate product descriptions in a specific format, you might include 2-3 example descriptions in your prompt. This technique helps the AI understand your expectations more precisely and produce more consistent results."
    },
    {
      question: "How do I optimize prompts for different AI models?",
      answer: "To optimize prompts for different AI models, first understand each model's unique strengths and limitations. For GPT-4o, leverage its strong reasoning and multimodal capabilities with detailed prompts. For Claude, use its thoughtful analysis abilities with clear context and ethical considerations. For Gemini, take advantage of its Google integration and multimodal strengths. Generally, newer models handle longer, more complex prompts better than older ones. Test your prompts across models when possible, and adjust based on the results each model produces. Some models respond better to different prompting techniques like chain-of-thought or role-based prompting."
    },
    {
      question: "What is chain-of-thought prompting?",
      answer: "Chain-of-thought prompting is a technique that guides the AI to break down complex problems into a series of intermediate steps before reaching a final answer. By instructing the AI to 'think step by step' or by demonstrating a reasoning process in your prompt, you encourage the model to show its work and follow a logical sequence. This approach significantly improves results for tasks requiring reasoning, problem-solving, or multi-step analysis, as it helps the AI avoid logical errors and provides you with insight into how it reached its conclusions."
    },
    {
      question: "How do I refine my prompts to get better results?",
      answer: "To refine your prompts for better results, adopt an iterative approach: start with a basic prompt, analyze the response for gaps or issues, then make targeted improvements. Be more specific about your requirements, add relevant context, include examples of desired outputs, specify format requirements, and assign appropriate roles to the AI. Break complex requests into smaller parts, use system prompts when available, and experiment with different prompting techniques like chain-of-thought or few-shot learning. Keep a record of effective prompts for future reference, and remember that prompt refinement is an ongoing process of experimentation and learning."
    }
  ],
  
  // Article specific information
  category: "AI Tools"
});

// Export individual schemas
export const aiPromptsHowToSchema = aiPromptsGuideSchemas.howToSchema;
export const aiPromptsFAQSchema = aiPromptsGuideSchemas.faqSchema;
export const aiPromptsArticleSchema = aiPromptsGuideSchemas.articleSchema;

// Export all schemas as default
export default aiPromptsGuideSchemas;
