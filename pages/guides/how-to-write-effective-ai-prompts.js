import { useState } from 'react';
import ModuleNavigation from '../../components/ModuleNavigation';
import ExpandableSection from '../../components/ExpandableSection';
import KnowledgeCheck from '../../components/KnowledgeCheck';
import LeadCaptureForm from '../../components/LeadCaptureForm';
import LeadCapturePopup from '../../components/LeadCapturePopup';
import Link from 'next/link';
import StructuredData from '../../components/StructuredData';
import { aiPromptsHowToSchema, aiPromptsFAQSchema, aiPromptsArticleSchema } from '../../data/schemas/ai-prompts-guide';

export default function AIPromptsGuide() {
  const [showPopup, setShowPopup] = useState(false);
  const [currentModule, setCurrentModule] = useState(0);
  
  // Define modules for the guide
  const modules = [
    { title: 'Introduction' },
    { title: 'Understanding Prompt Engineering' },
    { title: 'Structuring Your Prompts' },
    { title: 'Role-Based Prompting' },
    { title: 'Few-Shot Learning' },
    { title: 'Chain-of-Thought Techniques' },
    { title: 'Model-Specific Prompting' },
    { title: 'Prompt Iteration' },
    { title: 'Frequently Asked Questions' }
  ];
  
  // Calculate progress percentage
  const progress = (currentModule / modules.length) * 100;
  
  // Define benefits for lead generation
  const kitBenefits = [
    'Full PDF Guide',
    'AI Prompt Templates Library',
    'Prompt Engineering Cheat Sheet',
    'Model-Specific Prompt Examples',
    'Advanced Techniques Reference'
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
      <StructuredData data={aiPromptsHowToSchema} />
      <StructuredData data={aiPromptsFAQSchema} />
      <StructuredData data={aiPromptsArticleSchema} />
      
      <div className="container">
        <div className="hero">
          <h1>How to Write Effective AI Prompts: Complete 2025 Guide</h1>
          <p>Master the art of prompt engineering to get better results from AI models</p>
          <p><strong>Last Updated:</strong> April 24, 2025</p>
        </div>
        
        <div className="guide-overview">
          <div className="card">
            <h2>Guide Overview</h2>
            <p>
              This comprehensive guide will teach you everything you need to know about
              writing effective prompts for AI models in 2025.
            </p>
            <ul>
              <li>Learn the fundamentals of prompt engineering</li>
              <li>Master techniques for structuring effective prompts</li>
              <li>Discover advanced methods like role-based prompting</li>
              <li>Optimize prompts for different AI models</li>
              <li>Implement iterative refinement for better results</li>
            </ul>
            <p>Estimated reading time: 25 minutes</p>
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
                <h3>The Art and Science of AI Prompting</h3>
                <p>
                  The quality of results you get from AI models like ChatGPT, Claude, or Gemini depends significantly on how you communicate with them. Prompt engineering—the practice of crafting effective inputs for AI models—has emerged as a crucial skill in the AI era. A well-crafted prompt can be the difference between a generic, unhelpful response and a precise, valuable output that perfectly meets your needs.
                </p>
                
                <p>
                  In this comprehensive guide, you'll learn how to write effective AI prompts that get better results across various AI models and use cases. Whether you're using AI for content creation, coding assistance, data analysis, creative work, or business applications, mastering prompt engineering will dramatically improve your outcomes and efficiency.
                </p>
                
                <h3>Why Prompt Engineering Matters</h3>
                <p>
                  As AI models have become more powerful, the way we interact with them has evolved. Consider these compelling reasons why prompt engineering has become essential:
                </p>
                
                <ul>
                  <li><strong>Quality Control</strong>: Well-crafted prompts lead to higher-quality, more accurate outputs</li>
                  <li><strong>Efficiency</strong>: Get better results on the first try, reducing back-and-forth iterations</li>
                  <li><strong>Consistency</strong>: Create reliable, repeatable results for similar tasks</li>
                  <li><strong>Capability Unlocking</strong>: Access the full potential of AI models that might be hidden behind poor prompting</li>
                  <li><strong>Cost Optimization</strong>: Reduce token usage and API costs with more efficient prompts</li>
                  <li><strong>Reduced Hallucinations</strong>: Minimize AI fabrications and inaccuracies through proper guidance</li>
                </ul>
                
                <ExpandableSection title="The Evolution of Prompt Engineering">
                  <p>
                    Prompt engineering has evolved significantly since the early days of large language models. What began as simple text inputs has developed into a sophisticated discipline with established techniques, patterns, and best practices.
                  </p>
                  
                  <p>
                    In 2023, basic prompting techniques like role-based prompting and few-shot learning gained popularity. By 2024, more advanced methods emerged, including chain-of-thought prompting, tree-of-thought approaches, and ReAct (Reasoning + Acting) frameworks.
                  </p>
                  
                  <p>
                    Now in 2025, prompt engineering has matured further with the rise of multimodal prompting (combining text, images, and other media), model-specific optimization techniques, and even automated prompt optimization tools. As AI models have become more capable, the art of prompting has become both more powerful and more nuanced.
                  </p>
                </ExpandableSection>
                
                <h3>What You'll Learn in This Guide</h3>
                <p>
                  By the end of this comprehensive guide, you will:
                </p>
                <ol>
                  <li>Understand the fundamental principles of effective prompt engineering</li>
                  <li>Master techniques for structuring clear, specific prompts that get better results</li>
                  <li>Learn how to use role-based prompting to influence AI perspective and expertise</li>
                  <li>Implement few-shot learning to teach AI models through examples</li>
                  <li>Apply chain-of-thought techniques for complex reasoning tasks</li>
                  <li>Optimize your prompts for different AI models (GPT-4o, Claude, Gemini, etc.)</li>
                  <li>Develop a systematic approach to refining prompts through iteration</li>
                  <li>Build a personal library of effective prompt templates for common tasks</li>
                </ol>
                
                <KnowledgeCheck 
                  question="Why is prompt engineering important when using AI models?"
                  options={[
                    "It's only important for coding tasks",
                    "It helps get higher-quality, more accurate outputs from AI",
                    "It's only necessary for older AI models",
                    "It only matters when using paid AI services"
                  ]}
                  correctAnswer={1}
                />
                
                <div className="module-navigation">
                  <button 
                    className="btn"
                    onClick={() => setCurrentModule(currentModule + 1)}
                  >
                    Next: Understanding Prompt Engineering
                  </button>
                </div>
              </div>
            )}
            
            {currentModule === 1 && (
              <div>
                <h3>The Fundamentals of Prompt Engineering</h3>
                <p>
                  Before diving into specific techniques, it's essential to understand how AI models interpret and respond to prompts. Large language models (LLMs) like GPT-4o, Claude, and Gemini are trained to predict the most likely continuation of text based on patterns they've learned from vast datasets. Your prompt serves as the initial text that the model will continue.
                </p>
                
                <p>
                  This fundamental mechanism has important implications for prompt engineering:
                </p>
                
                <ul>
                  <li><strong>Context Matters</strong>: The model only has access to the information you provide in your prompt</li>
                  <li><strong>Recency Bias</strong>: Information at the end of your prompt often has more influence than information at the beginning</li>
                  <li><strong>Pattern Recognition</strong>: Models will try to continue patterns they detect in your prompt</li>
                  <li><strong>Instruction Following</strong>: Modern models are trained to follow instructions, but clarity is crucial</li>
                  <li><strong>Token Limitations</strong>: All models have context window limits that constrain prompt length</li>
                </ul>
                
                <h3>Key Elements of Effective Prompts</h3>
                <p>
                  Regardless of the specific technique you're using, all effective prompts share certain key elements:
                </p>
                
                <ExpandableSection title="Clear Instructions">
                  <p>
                    Explicitly state what you want the AI to do. Be direct and specific about the task, avoiding vague or ambiguous language. For example, instead of asking "Can you help with my essay?", say "Please provide feedback on the following essay, focusing on argument structure and evidence use."
                  </p>
                  
                  <p>
                    When appropriate, specify the format you want for the response (bullet points, paragraphs, table, etc.) and any other output requirements. For instance: "Format your response as a markdown table with three columns: Feature, Benefit, and Example."
                  </p>
                </ExpandableSection>
                
                <ExpandableSection title="Relevant Context">
                  <p>
                    Provide background information that helps the AI understand the task and generate an appropriate response. This might include:
                  </p>
                  <ul>
                    <li>Subject matter details</li>
                    <li>Audience information</li>
                    <li>Purpose of the request</li>
                    <li>Relevant constraints or requirements</li>
                    <li>Previous attempts or approaches</li>
                  </ul>
                  <p>
                    For example: "I'm preparing a presentation for senior executives with limited technical background. The purpose is to explain blockchain technology in simple terms that highlight business applications."
                  </p>
                </ExpandableSection>
                
                <ExpandableSection title="Examples (When Helpful)">
                  <p>
                    Including examples in your prompt can significantly improve results by showing the AI exactly what you're looking for. Examples are particularly useful when:
                  </p>
                  <ul>
                    <li>You want a specific format or style</li>
                    <li>You're asking for something unusual or complex</li>
                    <li>You want to ensure consistency with existing content</li>
                  </ul>
                  <p>
                    For instance: "Please generate three product descriptions in the same style as this example: 'Our ergonomic desk chair combines sleek design with all-day comfort. The breathable mesh back provides support while keeping you cool, and the adjustable height and armrests let you customize your perfect position.'"
                  </p>
                </ExpandableSection>
                
                <ExpandableSection title="Constraints and Limitations">
                  <p>
                    Setting boundaries helps guide the AI toward more useful responses. Common constraints include:
                  </p>
                  <ul>
                    <li>Length requirements (word count, paragraph count)</li>
                    <li>Tone and style specifications</li>
                    <li>Complexity level (technical vs. simplified)</li>
                    <li>Specific elements to include or exclude</li>
                    <li>Perspective or viewpoint to adopt</li>
                  </ul>
                  <p>
                    Example: "Write a 300-400 word blog introduction about renewable energy. Use an optimistic but factual tone, avoid political statements, and include at least three specific statistics from the last two years."
                  </p>
                </ExpandableSection>
                
                <KnowledgeCheck 
                  question="Which of the following is a key element of effective prompts?"
                  options={[
                    "Using as few words as possible",
                    "Always including code examples",
                    "Providing clear instructions about what you want",
                    "Using technical jargon to impress the AI"
                  ]}
                  correctAnswer={2}
                />
                
                <div className="module-navigation">
                  <div className="nav-buttons">
                    <button 
                      className="btn secondary"
                      onClick={() => setCurrentModule(currentModule - 1)}
                    >
                      Previous: Introduction
                    </button>
                    <button 
                      className="btn"
                      onClick={() => setCurrentModule(currentModule + 1)}
                    >
                      Next: Structuring Your Prompts
                    </button>
                  </div>
                </div>
              </div>
            )}
            
            {currentModule > 1 && (
              <div className="locked-content">
                <h3>Unlock the Complete Guide</h3>
                <p>
                  The remaining sections of this guide are available when you sign up for our newsletter.
                  Get instant access to all modules including:
                </p>
                
                <ul>
                  <li>Structuring Your Prompts</li>
                  <li>Role-Based Prompting</li>
                  <li>Few-Shot Learning</li>
                  <li>Chain-of-Thought Techniques</li>
                  <li>Model-Specific Prompting</li>
                  <li>Prompt Iteration</li>
                </ul>
                
                <LeadCaptureForm 
                  title="Get Instant Access"
                  description="Enter your email to unlock the complete guide:"
                  benefits={[]}
                  buttonText="UNLOCK GUIDE"
                />
              </div>
            )}
          </div>
        </div>
        
        <div className="related-guides">
          <h2>Related Guides</h2>
          <div className="guide-cards">
            <div className="card">
              <img src="/images/chatgpt-guide-thumbnail.jpg" alt="ChatGPT Guide Thumbnail" />
              <h3>How to Use ChatGPT</h3>
              <p>Master ChatGPT with our complete tutorial</p>
              <Link href="/guides/how-to-use-chatgpt">
                <a className="btn">Read Guide</a>
              </Link>
            </div>
            
            <div className="card">
              <img src="/images/ai-content-creation-guide-thumbnail.jpg" alt="AI Content Creation Guide Thumbnail" />
              <h3>How to Use AI for Content Creation</h3>
              <p>Learn to create high-quality content with AI tools</p>
              <Link href="/guides/how-to-use-ai-for-content-creation">
                <a className="btn">Read Guide</a>
              </Link>
            </div>
            
            <div className="card">
              <img src="/images/gemini-guide-thumbnail.jpg" alt="Gemini Guide Thumbnail" />
              <h3>How to Use Gemini AI</h3>
              <p>Master Google's powerful multimodal AI assistant</p>
              <Link href="/guides/how-to-use-gemini-ai">
                <a className="btn">Read Guide</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {showPopup && (
        <LeadCapturePopup 
          title="Want to Master Prompt Engineering?"
          description="Get our exclusive Prompt Engineering Kit:"
          benefits={kitBenefits}
          buttonText="GET FREE KIT"
          onClose={() => setShowPopup(false)}
        />
      )}
    </div>
  );
}
