import { useState } from 'react';
import ModuleNavigation from '../../components/ModuleNavigation';
import ExpandableSection from '../../components/ExpandableSection';
import KnowledgeCheck from '../../components/KnowledgeCheck';
import LeadCaptureForm from '../../components/LeadCaptureForm';
import LeadCapturePopup from '../../components/LeadCapturePopup';
import Link from 'next/link';
import StructuredData from '../../components/StructuredData';
import { geminiHowToSchema, geminiFAQSchema, geminiArticleSchema } from '../../data/schemas/gemini-guide';

export default function GeminiAIGuide() {
  const [showPopup, setShowPopup] = useState(false);
  const [currentModule, setCurrentModule] = useState(0);
  
  // Define modules for the guide
  const modules = [
    { title: 'Introduction' },
    { title: 'Getting Started with Gemini AI' },
    { title: 'Understanding Gemini AI\'s Capabilities' },
    { title: 'Basic Interactions with Gemini AI' },
    { title: 'Crafting Effective Prompts' },
    { title: 'Practical Applications' },
    { title: 'Troubleshooting Common Issues' },
    { title: 'Frequently Asked Questions' }
  ];
  
  // Calculate progress percentage
  const progress = (currentModule / modules.length) * 100;
  
  // Define benefits for lead generation
  const kitBenefits = [
    'Full PDF Guide',
    'Gemini Prompts Cheat Sheet',
    'AI Models Comparison Table',
    'Multimodal Prompt Templates',
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
      <StructuredData data={geminiHowToSchema} />
      <StructuredData data={geminiFAQSchema} />
      <StructuredData data={geminiArticleSchema} />
      
      <div className="container">
        <div className="hero">
          <h1>How to Use Gemini AI: Complete 2025 Guide</h1>
          <p>Master Google's powerful multimodal AI assistant with our comprehensive guide</p>
          <p><strong>Last Updated:</strong> April 26, 2025</p>
        </div>
        
        <div className="guide-overview">
          <div className="card">
            <h2>Guide Overview</h2>
            <p>
              This comprehensive guide will teach you everything you need to know about
              using Google's Gemini AI effectively in 2025.
            </p>
            <ul>
              <li>Learn about Gemini's multimodal capabilities</li>
              <li>Set up and access Gemini on different platforms</li>
              <li>Master effective prompt techniques</li>
              <li>Understand different Gemini models</li>
              <li>Explore practical applications</li>
            </ul>
            <p>Estimated reading time: 25 minutes</p>
          </div>
          
          <LeadCaptureForm 
            title="Download Complete Gemini AI Kit"
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
                <h3>What is Gemini AI?</h3>
                <p>
                  Gemini AI is Google's most capable and general AI model to date, designed to understand 
                  and process multiple types of information simultaneously. Launched in December 2023, 
                  Gemini represents the culmination of Google's extensive research and development in 
                  artificial intelligence, specifically created to offer a more intuitive, helpful, 
                  and versatile AI assistant experience.
                </p>
                
                <p>
                  Unlike its predecessors and many competitors, Gemini was built from the ground up to be 
                  multimodal, meaning it can seamlessly understand, operate across, and combine different 
                  types of information including text, code, audio, images, and video. This native 
                  multimodality allows Gemini to process and respond to complex queries that involve 
                  multiple formats of information, making it exceptionally versatile for a wide range 
                  of applications.
                </p>
                
                <h3>Key Features and Capabilities</h3>
                <p>
                  Gemini AI offers an impressive array of features that make it a powerful tool for both 
                  casual users and professionals:
                </p>
                <ul>
                  <li><strong>Multimodal Understanding</strong>: Gemini can process and analyze text, images, audio, and video simultaneously</li>
                  <li><strong>Advanced Reasoning</strong>: Sophisticated reasoning capabilities for complex problems</li>
                  <li><strong>Creative Assistance</strong>: Help with writing, editing, and generating ideas</li>
                  <li><strong>Research and Information Synthesis</strong>: Search the web and analyze information</li>
                  <li><strong>Code Generation and Debugging</strong>: Write, explain, and debug code</li>
                  <li><strong>Language Translation</strong>: Translate across numerous languages</li>
                  <li><strong>Mathematical Problem-Solving</strong>: Solve complex math problems step-by-step</li>
                  <li><strong>Integration with Google Services</strong>: Seamless work with other Google products</li>
                </ul>
                
                <ExpandableSection title="Different Versions of Gemini">
                  <p>Google has optimized Gemini for different use cases with three main versions:</p>
                  <ul>
                    <li><strong>Gemini Ultra</strong>: Google's largest and most capable model for highly complex tasks. Powers Gemini Advanced, available through Google One AI Premium subscription.</li>
                    <li><strong>Gemini Pro</strong>: Designed for scaling across a wide range of tasks, offering a balance of capability and efficiency. Powers the free tier of Gemini.</li>
                    <li><strong>Gemini Nano</strong>: The most efficient model, optimized for on-device tasks on smartphones and mobile devices without requiring constant cloud connectivity.</li>
                  </ul>
                  <p>As of 2025, Google has continued to evolve the Gemini family with newer versions like Gemini 2.0, offering enhanced capabilities while maintaining the same tiered approach.</p>
                </ExpandableSection>
                
                <h3>Benefits of Using Gemini AI</h3>
                <p>
                  Incorporating Gemini AI into your digital toolkit offers numerous advantages:
                </p>
                <ul>
                  <li><strong>Enhanced Productivity</strong>: Automate routine tasks and generate content</li>
                  <li><strong>Improved Decision-Making</strong>: Analyze data and provide insights</li>
                  <li><strong>Creative Expansion</strong>: Get ideas and overcome creative blocks</li>
                  <li><strong>Learning Assistance</strong>: Explain complex concepts and provide study materials</li>
                  <li><strong>Accessibility</strong>: Make digital information more accessible</li>
                  <li><strong>Seamless Google Integration</strong>: Deep integration with Google services</li>
                  <li><strong>Continuous Improvement</strong>: Gemini continues to learn and improve over time</li>
                </ul>
                
                <h3>What You'll Learn in This Guide</h3>
                <p>
                  By the end of this comprehensive guide, you will:
                </p>
                <ol>
                  <li>Understand what Gemini AI is and how it differs from other AI assistants</li>
                  <li>Know how to set up and access Gemini on different devices</li>
                  <li>Master the basics of interacting with Gemini effectively</li>
                  <li>Learn how to craft prompts that get the best results</li>
                  <li>Explore Gemini's advanced features and capabilities</li>
                  <li>Discover how to use Gemini for specific use cases relevant to your needs</li>
                  <li>Understand how to troubleshoot common issues</li>
                  <li>Learn best practices for responsible and ethical AI use</li>
                </ol>
                
                <KnowledgeCheck 
                  question="What makes Gemini AI different from many other AI assistants?"
                  options={[
                    "It's only available on mobile devices",
                    "It was built from the ground up to be multimodal",
                    "It can only process text information",
                    "It requires programming knowledge to use"
                  ]}
                  correctAnswer={1}
                />
                
                <div className="module-navigation">
                  <button 
                    className="btn"
                    onClick={() => setCurrentModule(currentModule + 1)}
                  >
                    Next: Getting Started with Gemini AI
                  </button>
                </div>
              </div>
            )}
            
            {currentModule === 1 && (
              <div>
                <h3>Creating a Google Account</h3>
                <p>
                  Before you can start using Gemini AI, you'll need a Google account. This serves as your gateway 
                  to not only Gemini but the entire ecosystem of Google services that integrate with it.
                </p>
                
                <p>
                  If you already have a Google account (Gmail, YouTube, Google Drive, etc.), you can skip this 
                  section and proceed to accessing Gemini AI. If not, follow these steps to create a new Google account:
                </p>
                
                <ol>
                  <li>Visit the Google Account creation page at <a href="https://accounts.google.com/signup" target="_blank" rel="noopener noreferrer">accounts.google.com/signup</a></li>
                  <li>Enter your personal information (name, username, password)</li>
                  <li>Provide verification and recovery options</li>
                  <li>Agree to Google's terms and privacy policy</li>
                  <li>Complete the verification process</li>
                  <li>Set up account preferences</li>
                </ol>
                
                <h3>Accessing Gemini AI</h3>
                <p>
                  Now that you have a Google account, you can access Gemini AI through multiple platforms. Each offers 
                  a slightly different experience, so you may prefer one over the others depending on your needs and circumstances.
                </p>
                
                <ExpandableSection title="Through the Gemini Website">
                  <p>The primary way to access Gemini AI is through its dedicated website:</p>
                  <ol>
                    <li>Visit <a href="https://gemini.google.com" target="_blank" rel="noopener noreferrer">gemini.google.com</a> in your web browser</li>
                    <li>Sign in with your Google account if prompted</li>
                    <li>Accept the terms of service if this is your first time using Gemini</li>
                    <li>Begin interacting with Gemini through the chat interface</li>
                  </ol>
                  <p>The web interface offers the most complete Gemini experience, with access to all features including image uploads, extensions, and the full range of model capabilities.</p>
                </ExpandableSection>
                
                <ExpandableSection title="Through the Gemini Mobile App">
                  <p>For on-the-go access, the Gemini mobile app offers a convenient way to use the AI assistant:</p>
                  <ol>
                    <li>Download the Gemini app from the:
                      <ul>
                        <li><a href="https://play.google.com/store/apps/details?id=com.google.android.apps.bard" target="_blank" rel="noopener noreferrer">Google Play Store</a> (Android)</li>
                        <li><a href="https://apps.apple.com/us/app/google-bard/id6451152918" target="_blank" rel="noopener noreferrer">Apple App Store</a> (iOS)</li>
                      </ul>
                    </li>
                    <li>Install and open the app on your mobile device</li>
                    <li>Sign in with your Google account</li>
                    <li>Grant necessary permissions for features like camera access and microphone access</li>
                    <li>Begin interacting with Gemini through the mobile interface</li>
                  </ol>
                  <p>The mobile app includes special features optimized for smartphones, such as camera integration for real-time image analysis and voice interaction capabilities.</p>
                </ExpandableSection>
                
                <ExpandableSection title="Other Access Methods">
                  <p><strong>Through Google Chrome:</strong></p>
                  <ol>
                    <li>Open Google Chrome on your computer</li>
                    <li>Type "@gemini" followed by your query in the address bar</li>
                    <li>Press Enter to see Gemini's response directly in a dropdown from the address bar</li>
                  </ol>
                  
                  <p><strong>Through Google AI Studio:</strong></p>
                  <ol>
                    <li>Visit <a href="https://ai.google.dev" target="_blank" rel="noopener noreferrer">ai.google.dev</a> in your web browser</li>
                    <li>Sign in with your Google account</li>
                    <li>Navigate to the Gemini section of Google AI Studio</li>
                    <li>Choose between chat mode or prompt design mode depending on your needs</li>
                  </ol>
                  
                  <p><strong>Through Google Assistant (on supported devices):</strong></p>
                  <ol>
                    <li>Activate Google Assistant on your device</li>
                    <li>Say "Talk to Gemini" or tap the Gemini icon if it appears</li>
                    <li>Begin your conversation with Gemini through the Assistant interface</li>
                  </ol>
                </ExpandableSection>
                
                <h3>Free vs. Paid Versions (Gemini Advanced)</h3>
                <p>
                  Gemini is available in both free and paid tiers, with the paid version offering enhanced capabilities and features.
                </p>
                
                <ExpandableSection title="Free Version Features">
                  <p>The free version of Gemini provides access to:</p>
                  <ul>
                    <li><strong>Gemini Pro model</strong>: Google's versatile AI model suitable for a wide range of everyday tasks</li>
                    <li><strong>Basic multimodal capabilities</strong>: Ability to understand and generate text, analyze images, and process various types of information</li>
                    <li><strong>Web search integration</strong>: Access to current information from the internet</li>
                    <li><strong>Basic extensions</strong>: Integration with some Google services and tools</li>
                    <li><strong>Standard response length</strong>: Responses limited to standard length</li>
                    <li><strong>Standard usage limits</strong>: Daily caps on the number of interactions</li>
                  </ul>
                </ExpandableSection>
                
                <ExpandableSection title="Gemini Advanced Features (Paid)">
                  <p>Gemini Advanced is available through a Google One AI Premium subscription ($19.99/month as of 2025) and offers:</p>
                  <ul>
                    <li><strong>Gemini Ultra model</strong>: Google's most powerful AI model with enhanced reasoning and understanding</li>
                    <li><strong>Advanced multimodal capabilities</strong>: More sophisticated processing of complex images, documents, and multimedia</li>
                    <li><strong>Extended response length</strong>: Longer, more detailed responses for complex queries</li>
                    <li><strong>Higher usage limits</strong>: More interactions per day</li>
                    <li><strong>Priority access</strong>: Access to new features before they reach the free tier</li>
                    <li><strong>Full extensions suite</strong>: Access to all available extensions and integrations</li>
                    <li><strong>Additional Google One benefits</strong>: 2TB of cloud storage, premium support, and other Google One perks</li>
                  </ul>
                </ExpandableSection>
                
                <KnowledgeCheck 
                  question="Which Gemini model powers the free version of Gemini AI?"
                  options={[
                    "Gemini Ultra",
                    "Gemini Pro",
                    "Gemini Nano",
                    "Gemini Basic"
                  ]}
                  correctAnswer={1}
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
                      Next: Understanding Gemini AI's Capabilities
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
                  <li>Understanding Gemini AI's Capabilities</li>
                  <li>Basic Interactions with Gemini AI</li>
                  <li>Crafting Effective Prompts</li>
                  <li>Practical Applications</li>
                  <li>Troubleshooting Common Issues</li>
                  <li>Frequently Asked Questions</li>
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
              <img src="/images/ai-prompts-guide-thumbnail.jpg" alt="AI Prompts Guide Thumbnail" />
              <h3>How to Write Effective AI Prompts</h3>
              <p>Master the art of prompt engineering for better AI results</p>
              <Link href="/guides/how-to-write-effective-ai-prompts">
                <a className="btn">Read Guide</a>
              </Link>
            </div>
            
            <div className="card">
              <img src="/images/dalle-guide-thumbnail.jpg" alt="DALL-E Guide Thumbnail" />
              <h3>How to Use DALL-E</h3>
              <p>Create stunning AI-generated images with DALL-E</p>
              <Link href="/guides/how-to-use-dall-e">
                <a className="btn">Read Guide</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {showPopup && (
        <LeadCapturePopup 
          title="Want to Master Gemini AI?"
          description="Get our exclusive Gemini AI Resource Kit:"
          benefits={kitBenefits}
          buttonText="GET FREE KIT"
          onClose={() => setShowPopup(false)}
        />
      )}
    </div>
  );
}
