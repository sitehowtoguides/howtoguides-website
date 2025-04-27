import { useState } from 'react';
import ModuleNavigation from '../../components/ModuleNavigation';
import ExpandableSection from '../../components/ExpandableSection';
import KnowledgeCheck from '../../components/KnowledgeCheck';
import LeadCaptureForm from '../../components/LeadCaptureForm';
import LeadCapturePopup from '../../components/LeadCapturePopup';
import Link from 'next/link';

export default function ChatGPTGuide() {
  const [showPopup, setShowPopup] = useState(false);
  const [currentModule, setCurrentModule] = useState(0);
  
  // Define modules for the guide
  const modules = [
    { title: 'Introduction' },
    { title: 'Creating Your ChatGPT Account' },
    { title: 'Navigating the ChatGPT Interface' },
    { title: 'Writing Your First Prompts' },
    { title: 'Understanding Different ChatGPT Models' },
    { title: 'Practical Applications' },
    { title: 'Troubleshooting Common Issues' },
    { title: 'Frequently Asked Questions' }
  ];
  
  // Calculate progress percentage
  const progress = (currentModule / modules.length) * 100;
  
  // Define benefits for lead generation
  const kitBenefits = [
    'Full PDF Guide',
    'Prompts Cheat Sheet',
    'Models Comparison Table',
    'AI Terminology Glossary'
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
      
      <div className="container">
        <div className="hero">
          <h1>How to Use ChatGPT: Complete 2025 Guide</h1>
          <p>Master ChatGPT from scratch with our step-by-step tutorial</p>
          <p><strong>Last Updated:</strong> April 19, 2025</p>
        </div>
        
        <div className="guide-overview">
          <div className="card">
            <h2>Guide Overview</h2>
            <p>
              This comprehensive guide will teach you everything you need to know about
              using ChatGPT effectively in 2025.
            </p>
            <ul>
              <li>Learn to create your account</li>
              <li>Master the ChatGPT interface</li>
              <li>Write effective prompts</li>
              <li>Understand different models</li>
              <li>Troubleshoot common issues</li>
            </ul>
            <p>Estimated reading time: 20 minutes</p>
          </div>
          
          <LeadCaptureForm 
            title="Download Complete ChatGPT Kit"
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
                <h3>What is ChatGPT?</h3>
                <p>
                  ChatGPT is an AI language model developed by OpenAI that can understand and 
                  generate human-like text based on the prompts you give it. It's designed to 
                  have conversations, answer questions, write content, and assist with various tasks.
                </p>
                
                <h3>Why learn ChatGPT in 2025?</h3>
                <p>
                  In 2025, ChatGPT has become an essential productivity tool used by millions 
                  of people worldwide. Learning to use ChatGPT effectively can help you:
                </p>
                <ul>
                  <li>Save time on research and content creation</li>
                  <li>Get help with coding and technical problems</li>
                  <li>Learn new concepts through interactive explanations</li>
                  <li>Brainstorm ideas for creative projects</li>
                  <li>Automate repetitive writing tasks</li>
                </ul>
                
                <ExpandableSection title="ChatGPT vs. Other AI Tools">
                  <p>
                    While there are many AI tools available in 2025, ChatGPT remains one of the 
                    most versatile and user-friendly options. Compared to alternatives like Gemini AI, 
                    Claude, or specialized AI tools, ChatGPT offers:
                  </p>
                  <ul>
                    <li>A more intuitive interface for beginners</li>
                    <li>Strong capabilities across a wide range of tasks</li>
                    <li>Regular updates and improvements</li>
                    <li>A large community of users sharing tips and techniques</li>
                  </ul>
                </ExpandableSection>
                
                <h3>What you'll learn in this guide</h3>
                <p>
                  This comprehensive guide will take you from complete beginner to confident 
                  ChatGPT user. We'll cover everything from creating your account to advanced 
                  techniques for getting the best results.
                </p>
                
                <KnowledgeCheck 
                  question="What is the primary purpose of ChatGPT?"
                  options={[
                    "To create images and visual content",
                    "To understand and generate human-like text",
                    "To analyze data and create spreadsheets",
                    "To edit and enhance videos"
                  ]}
                  correctAnswer={1}
                />
                
                <div className="module-navigation">
                  <button 
                    className="btn"
                    onClick={() => setCurrentModule(currentModule + 1)}
                  >
                    Next: Creating Your ChatGPT Account
                  </button>
                </div>
              </div>
            )}
            
            {currentModule === 1 && (
              <div>
                <h3>Signing up for ChatGPT</h3>
                <p>
                  Creating a ChatGPT account is straightforward. Follow these steps to get started:
                </p>
                <ol>
                  <li>Visit <a href="https://chat.openai.com" target="_blank" rel="noopener noreferrer">chat.openai.com</a></li>
                  <li>Click on "Sign up" in the top-right corner</li>
                  <li>Choose your preferred signup method (email, Google, Microsoft, or Apple account)</li>
                  <li>Follow the prompts to create your account</li>
                  <li>Verify your email address if required</li>
                </ol>
                
                <h3>Free vs. Paid Options</h3>
                <p>
                  In 2025, ChatGPT offers several subscription tiers:
                </p>
                
                <ExpandableSection title="ChatGPT Free">
                  <p>The free version of ChatGPT includes:</p>
                  <ul>
                    <li>Access to GPT-3.5 model</li>
                    <li>Standard response speed</li>
                    <li>Basic features and capabilities</li>
                    <li>Limited usage during high-demand periods</li>
                  </ul>
                  <p>Perfect for casual users and beginners.</p>
                </ExpandableSection>
                
                <ExpandableSection title="ChatGPT Plus ($20/month)">
                  <p>The Plus subscription includes:</p>
                  <ul>
                    <li>Access to GPT-4o model</li>
                    <li>Faster response times</li>
                    <li>Priority access during high-demand periods</li>
                    <li>Access to plugins and advanced features</li>
                    <li>Higher usage limits</li>
                  </ul>
                  <p>Recommended for regular users who need more capabilities.</p>
                </ExpandableSection>
                
                <ExpandableSection title="ChatGPT Team ($30/user/month)">
                  <p>The Team subscription includes:</p>
                  <ul>
                    <li>All Plus features</li>
                    <li>Collaborative workspaces</li>
                    <li>Shared chat history with team members</li>
                    <li>Admin controls and user management</li>
                    <li>Enhanced security features</li>
                  </ul>
                  <p>Ideal for small teams and businesses.</p>
                </ExpandableSection>
                
                <KnowledgeCheck 
                  question="Which ChatGPT subscription gives you access to GPT-4o?"
                  options={[
                    "ChatGPT Free",
                    "ChatGPT Plus",
                    "ChatGPT Team",
                    "All subscriptions"
                  ]}
                  correctAnswer={1}
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
                    Next: Navigating the ChatGPT Interface
                  </button>
                </div>
              </div>
            )}
            
            {currentModule === 2 && (
              <div>
                <h3>Understanding the Main Dashboard</h3>
                <p>
                  When you first log in to ChatGPT, you'll see the main dashboard with several key components:
                </p>
                <ul>
                  <li><strong>Chat Area</strong>: The central part of the screen where your conversations appear</li>
                  <li><strong>Message Input Box</strong>: At the bottom of the screen, where you type your prompts</li>
                  <li><strong>New Chat Button</strong>: In the top-left corner, used to start a new conversation</li>
                  <li><strong>Model Selector</strong>: Located above the message input box, allows you to choose which ChatGPT model to use</li>
                  <li><strong>Conversation History</strong>: Listed in the left sidebar, showing your previous chats</li>
                </ul>
                
                <ExpandableSection title="Interface Accessibility Tips">
                  <p>ChatGPT offers several accessibility features:</p>
                  <ul>
                    <li>Keyboard shortcuts: Press "/" to focus on the message input box</li>
                    <li>Dark mode: Toggle in settings for reduced eye strain</li>
                    <li>Text size adjustment: Change in your browser settings (Ctrl/Cmd +/-)</li>
                    <li>Screen reader compatibility: Works with most screen readers</li>
                  </ul>
                </ExpandableSection>
                
                <h3>Starting a New Conversation</h3>
                <p>To begin a new chat:</p>
                <ol>
                  <li>Click the "New chat" button in the top-left corner of the screen</li>
                  <li>The chat area will clear, and you'll see a welcome message</li>
                  <li>Type your question or prompt in the message input box at the bottom</li>
                  <li>Press Enter or click the send button (paper airplane icon) to submit your prompt</li>
                </ol>
                
                <KnowledgeCheck 
                  question="Where is the model selector located in the ChatGPT interface?"
                  options={[
                    "In the left sidebar",
                    "Above the message input box",
                    "In the settings menu",
                    "Top-right corner of the screen"
                  ]}
                  correctAnswer={1}
                />
                
                <div className="module-navigation">
                  <button 
                    className="btn btn-outline"
                    onClick={() => setCurrentModule(currentModule - 1)}
                  >
                    Previous: Creating Your ChatGPT Account
                  </button>
                  <button 
                    className="btn"
                    onClick={() => setCurrentModule(currentModule + 1)}
                  >
                    Next: Writing Your First Prompts
                  </button>
                </div>
              </div>
            )}
            
            {currentModule >= 3 && (
              <div className="locked-content">
                <h3>This Module is Locked</h3>
                <p>
                  To access the remaining modules and get the complete ChatGPT Beginner's Kit,
                  please enter your email below.
                </p>
                
                <LeadCaptureForm 
                  title="Unlock All Modules"
                  description="Get immediate access to all modules plus the complete ChatGPT Beginner's Kit"
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
        
        <section className="related-content">
          <h2>Related Guides</h2>
          <ul>
            <li><Link href="/guides/how-to-write-effective-ai-prompts">How to Write Effective AI Prompts</Link></li>
            <li><Link href="/guides/how-to-make-chatgpt-write-longer-responses">How to Make ChatGPT Write Longer Responses</Link></li>
            <li><Link href="/guides/how-to-use-gemini-ai">How to Use Gemini AI</Link></li>
          </ul>
        </section>
      </div>
      
      <LeadCapturePopup 
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
        title="Get Your Free ChatGPT Beginner's Kit"
        description="Enter your email to get instant access to the complete kit:"
        benefits={kitBenefits}
      />
      
    </div>
  );
}
