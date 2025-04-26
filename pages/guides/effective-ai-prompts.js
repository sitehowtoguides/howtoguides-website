import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ModuleNavigation from '../../components/ModuleNavigation';
import ExpandableSection from '../../components/ExpandableSection';
import KnowledgeCheck from '../../components/KnowledgeCheck';
import LeadCaptureForm from '../../components/LeadCaptureForm';
import LeadCapturePopup from '../../components/LeadCapturePopup';
import Link from 'next/link';

export default function EffectiveAIPromptsGuide() {
  const [showPopup, setShowPopup] = useState(false);
  const [currentModule, setCurrentModule] = useState(0);
  
  // Define modules for the guide
  const modules = [
    { title: 'Introduction' },
    { title: 'Understanding AI Prompt Engineering' },
    { title: 'Basic Prompt Structure' },
    { title: 'Crafting Prompts for Text Generation' },
    { title: 'Crafting Prompts for Image Generation' },
    { title: 'Crafting Prompts for Code Generation' },
    { title: 'Advanced Prompt Techniques' },
    { title: 'Platform-Specific Strategies' },
    { title: 'Troubleshooting Common Issues' },
    { title: 'Ethical Considerations' },
    { title: 'Frequently Asked Questions' }
  ];
  
  // Calculate progress percentage
  const progress = (currentModule / modules.length) * 100;
  
  // Define benefits for lead generation
  const kitBenefits = [
    'Full PDF Guide',
    'Prompt Templates Library',
    'AI Tools Comparison Chart',
    'Prompt Engineering Cheat Sheet',
    'Case Studies Collection'
  ];
  
  // Show popup after 30 seconds
  useState(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 30000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div>
      <Header />
      
      <div className="container">
        <div className="hero">
          <h1>How to Write Effective AI Prompts: The Ultimate Guide</h1>
          <p>Master the art and science of prompt engineering to get better results from AI tools</p>
          <p><strong>Last Updated:</strong> April 21, 2025</p>
        </div>
        
        <div className="guide-overview">
          <div className="card">
            <h2>Guide Overview</h2>
            <p>
              This comprehensive guide will teach you everything you need to know about
              writing effective prompts for any AI tool in 2025.
            </p>
            <ul>
              <li>Learn the fundamentals of prompt engineering</li>
              <li>Master techniques for text, image, and code generation</li>
              <li>Discover advanced strategies like chain-of-thought prompting</li>
              <li>Get platform-specific tips for ChatGPT, DALL-E, Midjourney, and more</li>
              <li>Troubleshoot common prompt issues and optimize your results</li>
            </ul>
            <p>Estimated reading time: 30 minutes</p>
          </div>
          
          <LeadCaptureForm 
            title="Download Complete Prompt Engineering Kit"
            description="Get the complete guide plus bonus materials:"
            benefits={kitBenefits}
            buttonText="GET FREE KIT"
          />
        </div>
        
        <h2>Guide Modules</h2>
        <div className="module-container">
          <ModuleNavigation 
            modules={modules} 
            currentModule={currentModule} 
            progress={progress} 
          />
          
          <div className="module-content">
            <h2>{modules[currentModule].title}</h2>
            
            {currentModule === 0 && (
              <div>
                <h3>The Power of Effective Prompts</h3>
                <p>
                  The ability to write effective AI prompts has quickly become one of the most valuable skills in today's digital landscape. Whether you're using ChatGPT for writing, DALL-E for image creation, or any other AI tool, the quality of your results depends significantly on how well you communicate with the AI—but crafting the perfect prompt can be challenging for beginners and experienced users alike.
                </p>
                
                <p>
                  Many users struggle with getting AI to produce exactly what they want. Their prompts may be too vague, leading to generic results, or too complex, causing the AI to miss key elements. Some find themselves frustrated when the AI misinterprets their intentions or focuses on the wrong aspects of their request. The good news? These challenges can be overcome with the right prompt engineering techniques.
                </p>
                
                <p>
                  In this comprehensive guide, you'll learn the art and science of prompt engineering across various AI platforms. We'll cover everything from basic prompt structures to advanced techniques like chain-of-thought prompting and few-shot learning. You'll discover how to craft prompts that generate exceptional content, images, code, and more—regardless of which AI tool you're using.
                </p>
                
                <ExpandableSection title="The Evolution of Prompt Engineering">
                  <p>
                    Prompt engineering has evolved significantly since the early days of AI assistants. What started as simple keyword inputs has developed into a sophisticated discipline with established patterns, best practices, and even specialized roles in many organizations. This guide reflects the latest techniques as of 2025, incorporating insights from leading AI researchers and practitioners.
                  </p>
                  
                  <p>
                    The field has progressed through several distinct phases:
                  </p>
                  <ul>
                    <li><strong>2020-2021: Basic Prompting</strong> - Simple questions and commands with limited control over outputs</li>
                    <li><strong>2022: Structured Prompting</strong> - More detailed instructions with specific formatting requests</li>
                    <li><strong>2023: Context-Enhanced Prompting</strong> - Providing examples and additional context to guide responses</li>
                    <li><strong>2024-2025: Multimodal and Hybrid Prompting</strong> - Combining text with images, code, and other elements for more precise control</li>
                  </ul>
                </ExpandableSection>
                
                <h3>What You'll Learn</h3>
                <p>
                  All you need to follow along is access to at least one AI tool (like ChatGPT, DALL-E, Midjourney, or Gemini) and a willingness to experiment with different prompt approaches. No technical background or programming knowledge is required. This guide takes about 30 minutes to read through, but you'll be able to start improving your prompts within the first 5 minutes.
                </p>
                
                <KnowledgeCheck 
                  question="Why is prompt engineering important when working with AI tools?"
                  options={[
                    "It's only important for programming tasks",
                    "It's only needed for image generation",
                    "It significantly impacts the quality of AI outputs across all tools",
                    "It's only relevant for advanced users"
                  ]}
                  correctAnswer={2}
                />
                
                <div className="module-navigation">
                  <button 
                    className="btn"
                    onClick={() => setCurrentModule(currentModule + 1)}
                  >
                    Next: Understanding AI Prompt Engineering
                  </button>
                </div>
              </div>
            )}
            
            {currentModule === 1 && (
              <div>
                <h3>What Is a Prompt?</h3>
                <p>
                  At its core, a prompt is the input you provide to an AI system. This can be:
                </p>
                <ul>
                  <li>A question ("What are the benefits of meditation?")</li>
                  <li>A command ("Write a poem about autumn")</li>
                  <li>A description ("A serene lake at sunset with mountains in the background")</li>
                  <li>A partial completion for the AI to continue ("The three most important factors in real estate are...")</li>
                  <li>A complex instruction set with examples and constraints</li>
                </ul>
                
                <p>
                  The prompt serves as the primary interface between human intention and AI capability. It's your way of guiding the AI toward producing the specific output you want.
                </p>
                
                <h3>How AI Interprets Prompts</h3>
                <p>
                  Modern AI systems like GPT-4, DALL-E 3, and Gemini process prompts through complex neural networks trained on vast datasets of text, images, and other content. When you enter a prompt, the AI:
                </p>
                
                <ol>
                  <li><strong>Analyzes the text</strong> to understand the semantic meaning</li>
                  <li><strong>Identifies key elements</strong> like subjects, actions, and modifiers</li>
                  <li><strong>Recognizes patterns</strong> similar to those in its training data</li>
                  <li><strong>Generates a response</strong> based on statistical predictions about what should come next</li>
                </ol>
                
                <p>
                  The AI doesn't truly "understand" your prompt the way a human would. Instead, it makes sophisticated statistical predictions based on patterns it has learned. This is why the specific wording, structure, and context you provide are so important.
                </p>
                
                <ExpandableSection title="Why Prompt Engineering Matters">
                  <p>Effective prompt engineering can:</p>
                  
                  <ul>
                    <li><strong>Improve output quality</strong> by 50-300% according to recent studies</li>
                    <li><strong>Save time and resources</strong> by getting usable results in fewer attempts</li>
                    <li><strong>Unlock capabilities</strong> that aren't apparent with basic prompting</li>
                    <li><strong>Reduce hallucinations and errors</strong> in AI-generated content</li>
                    <li><strong>Ensure consistency</strong> across multiple generations</li>
                    <li><strong>Customize outputs</strong> to specific needs and preferences</li>
                  </ul>
                  
                  <p>
                    As AI systems become more powerful, the difference between basic and advanced prompting grows even more significant. Mastering prompt engineering allows you to harness the full potential of these tools.
                  </p>
                </ExpandableSection>
                
                <KnowledgeCheck 
                  question="How do modern AI systems process prompts?"
                  options={[
                    "By directly understanding human intentions",
                    "Through simple keyword matching",
                    "By making statistical predictions based on patterns in training data",
                    "By following explicit programming rules"
                  ]}
                  correctAnswer={2}
                />
                
                <div className="module-navigation">
                  <button 
                    className="btn btn-outline"
                    onClick={() => setCurrentModule(currentModule - 1)}
                  >
                    Previous: Introduction
                  </button>
                  <button 
                    className="btn"
                    onClick={() => setCurrentModule(currentModule + 1)}
                  >
                    Next: Basic Prompt Structure
                  </button>
                </div>
              </div>
            )}
            
            {currentModule === 2 && (
              <div>
                <h3>The Anatomy of an Effective Prompt</h3>
                <p>
                  Before diving into specific applications, let's explore the fundamental elements that make up an effective prompt. Understanding these building blocks will help you construct better prompts for any AI system.
                </p>
                
                <p>
                  A well-crafted prompt typically includes several key components:
                </p>
                
                <ol>
                  <li><strong>Clear Instruction</strong> - What you want the AI to do</li>
                  <li><strong>Relevant Context</strong> - Background information the AI needs</li>
                  <li><strong>Input Data</strong> - Specific information to work with</li>
                  <li><strong>Output Format</strong> - How you want the response structured</li>
                  <li><strong>Constraints</strong> - Limitations or requirements</li>
                  <li><strong>Examples</strong> - Demonstrations of desired outputs (optional)</li>
                  <li><strong>Persona</strong> - The role you want the AI to adopt (optional)</li>
                </ol>
                
                <p>
                  Not every prompt needs all these elements, but including the relevant ones will significantly improve your results.
                </p>
                
                <ExpandableSection title="Basic Prompt Templates">
                  <p>Here are some versatile templates you can adapt for different purposes:</p>
                  
                  <h4>Simple Question Template</h4>
                  <pre>[Question]?</pre>
                  <p>Example: "What are the health benefits of drinking green tea?"</p>
                  
                  <h4>Basic Instruction Template</h4>
                  <pre>[Action verb] [subject] [details].</pre>
                  <p>Example: "Explain quantum computing in simple terms."</p>
                  
                  <h4>Context-Rich Template</h4>
                  <pre>[Context or background information]

[Specific instruction]</pre>
                  <p>Example: "I'm planning a dinner party for 8 people, including two vegetarians and one person with a gluten allergy.

Suggest a three-course menu that would accommodate these dietary restrictions."</p>
                  
                  <h4>Role-Based Template</h4>
                  <pre>Act as [persona]. [Instruction]</pre>
                  <p>Example: "Act as an experienced financial advisor. What investment strategies would you recommend for a 35-year-old looking to retire by age 55?"</p>
                  
                  <h4>Format-Specific Template</h4>
                  <pre>[Instruction]

Format the response as [format details].</pre>
                  <p>Example: "Compare the benefits of electric vehicles versus gasoline vehicles.

Format the response as a table with categories for cost, environmental impact, maintenance, and performance."</p>
                </ExpandableSection>
                
                <h3>Clarity and Specificity</h3>
                <p>
                  The most common prompt engineering mistake is being too vague. Consider these examples:
                </p>
                
                <p>
                  <strong>Vague prompt:</strong> "Tell me about dogs."<br />
                  <strong>Specific prompt:</strong> "Explain the behavioral differences between Border Collies and Golden Retrievers, focusing on trainability, energy levels, and social characteristics."
                </p>
                
                <p>
                  <strong>Vague prompt:</strong> "Write a story."<br />
                  <strong>Specific prompt:</strong> "Write a 500-word science fiction story about a botanist who discovers a plant with unexpected properties on a space station. Include elements of mystery and focus on the scientific implications of the discovery."
                </p>
                
                <p>
                  Specific prompts provide clear direction and constraints that help the AI generate more relevant and useful responses.
                </p>
                
                <KnowledgeCheck 
                  question="Which of the following is NOT typically a component of a well-crafted prompt?"
                  options={[
                    "Clear instruction",
                    "Relevant context",
                    "Output format",
                    "Payment information"
                  ]}
                  correctAnswer={3}
                />
                
                <div className="module-navigation">
                  <button 
                    className="btn btn-outline"
                    onClick={() => setCurrentModule(currentModule - 1)}
                  >
                    Previous: Understanding AI Prompt Engineering
                  </button>
                  <button 
                    className="btn"
                    onClick={() => setCurrentModule(currentModule + 1)}
                  >
                    Next: Crafting Prompts for Text Generation
                  </button>
                </div>
              </div>
            )}
            
            {currentModule >= 3 && (
              <div className="locked-content">
                <h3>Unlock the Complete Guide</h3>
                <p>
                  To access the remaining modules and get the complete Prompt Engineering Kit,
                  please enter your email below.
                </p>
                
                <p>
                  You'll get immediate access to all modules including:
                </p>
                
                <ul>
                  <li>Crafting Prompts for Text Generation</li>
                  <li>Crafting Prompts for Image Generation</li>
                  <li>Crafting Prompts for Code Generation</li>
                  <li>Advanced Prompt Techniques</li>
                  <li>Platform-Specific Strategies</li>
                  <li>Troubleshooting Common Issues</li>
                  <li>Ethical Considerations</li>
                  <li>Frequently Asked Questions</li>
                </ul>
                
                <LeadCaptureForm 
                  title="Unlock All Modules"
                  description="Get immediate access to all modules plus the complete Prompt Engineering Kit"
                  benefits={kitBenefits}
                  buttonText="UNLOCK FULL GUIDE"
                />
                
                <div className="module-navigation">
                  <button 
                    className="btn btn-outline"
                    onClick={() => setCurrentModule(currentModule - 1)}
                  >
                    Return to Previous Module
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        
        <div className="related-guides">
          <h2>Related Guides</h2>
          <div className="guide-cards">
            <div className="related-guide-card">
              <h3>How to Use ChatGPT for Beginners</h3>
              <p>Master ChatGPT from scratch with our step-by-step tutorial</p>
              <Link href="/guides/chatgpt-for-beginners" className="btn">
                Read Guide
              </Link>
            </div>
            
            <div className="related-guide-card">
              <h3>How to Use DALL-E: Complete Tutorial</h3>
              <p>Learn to create amazing AI-generated images with OpenAI's DALL-E</p>
              <Link href="/guides/dalle-tutorial" className="btn">
                Read Guide
              </Link>
            </div>
            
            <div className="related-guide-card">
              <h3>How to Use Midjourney: Step-by-Step</h3>
              <p>Learn to create stunning AI-generated images with Midjourney</p>
              <Link href="/guides/midjourney-tutorial" className="btn">
                Read Guide
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {showPopup && (
        <LeadCapturePopup 
          title="Master Prompt Engineering"
          description="Get our complete guide with templates, examples, and expert techniques!"
          buttonText="Get Free Access"
          onClose={() => setShowPopup(false)}
        />
      )}
      
      <Footer />
    </div>
  );
}
