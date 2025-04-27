import { useState } from 'react';
import ModuleNavigation from '../../components/ModuleNavigation';
import ExpandableSection from '../../components/ExpandableSection';
import KnowledgeCheck from '../../components/KnowledgeCheck';
import LeadCaptureForm from '../../components/LeadCaptureForm';
import LeadCapturePopup from '../../components/LeadCapturePopup';
import Link from 'next/link';
import StructuredData from '../../components/StructuredData';
import { dalleHowToSchema, dalleFAQSchema, dalleArticleSchema } from '../../data/schemas/dalle-guide';

export default function DalleTutorial() {
  const [showPopup, setShowPopup] = useState(false);
  const [currentModule, setCurrentModule] = useState(0);
  
  // Define modules for the guide
  const modules = [
    { title: 'Introduction' },
    { title: 'What is DALL-E?' },
    { title: 'Setting Up Your Account' },
    { title: 'Navigating the Interface' },
    { title: 'Creating Your First Image' },
    { title: 'Crafting Effective Prompts' },
    { title: 'Capabilities & Limitations' },
    { title: 'Advanced Features' },
    { title: 'Subscription Plans' },
    { title: 'Troubleshooting' },
    { title: 'Frequently Asked Questions' }
  ];
  
  // Calculate progress percentage
  const progress = (currentModule / modules.length) * 100;
  
  // Define benefits for lead generation
  const kitBenefits = [
    'Full PDF Guide',
    'DALL-E Prompts Cheat Sheet',
    'AI Image Generators Comparison Table',
    'Visual Style Reference Guide',
    'Prompt Templates Library'
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
      <StructuredData data={dalleHowToSchema} />
      <StructuredData data={dalleFAQSchema} />
      <StructuredData data={dalleArticleSchema} />
      
      <div className="container">
        <div className="hero">
          <h1>How to Use DALL-E: Complete 2025 Tutorial</h1>
          <p>Learn to create amazing AI-generated images with OpenAI's DALL-E</p>
          <p><strong>Last Updated:</strong> April 21, 2025</p>
        </div>
        
        <div className="guide-overview">
          <div className="card">
            <h2>Guide Overview</h2>
            <p>
              This comprehensive guide will teach you everything you need to know about
              using OpenAI's DALL-E effectively in 2025.
            </p>
            <ul>
              <li>Learn about DALL-E's capabilities and features</li>
              <li>Set up your account and navigate the interface</li>
              <li>Master effective prompt techniques for stunning images</li>
              <li>Understand DALL-E's strengths and limitations</li>
              <li>Explore practical applications and workflows</li>
            </ul>
            <p>Estimated reading time: 20 minutes</p>
          </div>
          
          <LeadCaptureForm 
            title="Download Complete DALL-E Kit"
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
                <h3>Welcome to DALL-E</h3>
                <p>
                  DALL-E has revolutionized the way we create images, allowing anyone to generate stunning visuals using simple text descriptions. Whether you're a designer seeking inspiration, a marketer creating content, or simply curious about AI image generation, DALL-E offers an accessible way to bring your ideas to life visually—but getting started can feel overwhelming for newcomers.
                </p>
                
                <p>
                  Many beginners struggle with understanding DALL-E's capabilities, crafting effective prompts, and navigating the various features and settings. The good news? These challenges are easy to overcome with the right guidance.
                </p>
                
                <p>
                  In this comprehensive guide, you'll learn everything you need to know to start using DALL-E effectively, from creating your account to writing your first prompts and exploring advanced features. We'll cover the latest 2025 interface, including the newest DALL-E 3 model, and exciting features like image editing, variations, and outpainting that have transformed the creative possibilities.
                </p>
                
                <p>
                  Developed by OpenAI, DALL-E (named as a combination of artist Salvador Dalí and Pixar's WALL-E) has become one of the world's most popular AI image generators, capable of producing photorealistic images, artistic illustrations, concept art, and much more. This guide is based on the latest 2025 interface and features, ensuring you're learning the most current information.
                </p>
                
                <p>
                  All you need is an internet connection, a device with a web browser, and an OpenAI account. No artistic background or technical knowledge required. This guide takes about 20 minutes to read through, but you'll be able to start generating your first images within the first 5 minutes.
                </p>
                
                <KnowledgeCheck 
                  question="What company developed DALL-E?"
                  options={[
                    "Google",
                    "Microsoft",
                    "OpenAI",
                    "Adobe"
                  ]}
                  correctAnswer={2}
                />
                
                <div className="module-navigation">
                  <button 
                    className="btn"
                    onClick={() => setCurrentModule(currentModule + 1)}
                  >
                    Next: What is DALL-E?
                  </button>
                </div>
              </div>
            )}
            
            {currentModule === 1 && (
              <div>
                <h3>Understanding AI Image Generation</h3>
                <p>
                  DALL-E is an AI image generation system that creates images based on text descriptions (prompts) provided by users. Unlike traditional design software that requires manual creation, DALL-E uses artificial intelligence to interpret your text prompts and generate corresponding visuals, often with stunning and unexpected results.
                </p>
                
                <p>
                  At its core, DALL-E is powered by a diffusion model, a type of AI that gradually transforms random noise into coherent images based on the text guidance it receives. The system has been trained on billions of images and their associated descriptions, allowing it to understand complex concepts, artistic styles, lighting techniques, compositions, and more.
                </p>
                
                <ExpandableSection title="Evolution and Current Capabilities">
                  <p>
                    Since its initial release in January 2021, DALL-E has evolved significantly. The current flagship model as of 2025 is DALL-E 3, which offers dramatically improved photorealism, better text rendering, more accurate prompt following, and enhanced compositional understanding compared to earlier versions. OpenAI has also introduced specialized features like image editing, variations, and outpainting for different creative needs.
                  </p>
                  
                  <div className="guide-image">
                    <img 
                      src="/images/dalle-evolution-infographic.jpg" 
                      alt="Infographic showing DALL-E's evolution and capabilities through 2025" 
                      className="full-width-image"
                    />
                  </div>
                </ExpandableSection>
                
                <ExpandableSection title="Comparison with Other AI Image Generators">
                  <p>
                    Compared to other AI image generators like Midjourney or Stable Diffusion, DALL-E offers a unique balance of accessibility and quality, with particular strengths in following detailed instructions and creating coherent scenes. While all these tools continue to improve rapidly, DALL-E remains distinctive for its intuitive interface and tight integration with ChatGPT.
                  </p>
                  
                  <p>
                    One key difference from some other AI image generators is that DALL-E operates through a simple web interface or API, making it accessible to users without requiring specialized software or platforms. This approach creates a straightforward experience where users can quickly generate images without navigating complex systems.
                  </p>
                </ExpandableSection>
                
                <KnowledgeCheck 
                  question="What is the current flagship model of DALL-E as of 2025?"
                  options={[
                    "DALL-E 1",
                    "DALL-E 2",
                    "DALL-E 3",
                    "DALL-E 4"
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
                      Next: Setting Up Your Account
                    </button>
                  </div>
                </div>
              </div>
            )}
            
            {currentModule === 2 && (
              <div>
                <h3>Creating an OpenAI Account</h3>
                <p>
                  Before you can start using DALL-E, you'll need an OpenAI account. This serves as your gateway to not only DALL-E but the entire ecosystem of OpenAI services that integrate with it.
                </p>
                
                <p>
                  If you already have an OpenAI account (ChatGPT, API access, etc.), you can skip this section and proceed to accessing DALL-E. If not, follow these steps to create a new OpenAI account:
                </p>
                
                <ol>
                  <li>Visit the OpenAI website at <a href="https://openai.com" target="_blank" rel="noopener noreferrer">openai.com</a></li>
                  <li>Click on the "Sign Up" button in the top-right corner</li>
                  <li>Enter your email address or continue with Google, Microsoft, or Apple account</li>
                  <li>Follow the prompts to complete your account setup</li>
                  <li>Verify your email address by clicking the link sent to your inbox</li>
                  <li>Complete any additional verification steps if prompted</li>
                </ol>
                
                <ExpandableSection title="Accessing DALL-E">
                  <p>Once you have an OpenAI account:</p>
                  
                  <ol>
                    <li>Log in to your OpenAI account at <a href="https://openai.com" target="_blank" rel="noopener noreferrer">openai.com</a></li>
                    <li>Navigate to the DALL-E section by clicking on "Products" in the top menu and selecting "DALL-E"</li>
                    <li>Alternatively, you can access DALL-E directly at <a href="https://labs.openai.com" target="_blank" rel="noopener noreferrer">labs.openai.com</a></li>
                    <li>You'll be directed to the DALL-E interface where you can start generating images</li>
                  </ol>
                  
                  <div className="guide-image">
                    <img 
                      src="/images/dalle-signup-process.jpg" 
                      alt="Step-by-step screenshots of the 2025 signup process with annotations" 
                      className="full-width-image"
                    />
                  </div>
                </ExpandableSection>
                
                <ExpandableSection title="Understanding Credits and Subscriptions">
                  <p>DALL-E operates on a credit system or subscription model:</p>
                  
                  <ol>
                    <li><strong>Free Tier</strong>: New users typically receive a limited number of free credits
                      <ul>
                        <li>These credits expire after a certain period (usually 30 days)</li>
                        <li>Free tier has some limitations on resolution and features</li>
                      </ul>
                    </li>
                    <li><strong>Credit Purchases</strong>: You can buy additional credits as needed
                      <ul>
                        <li>Visit the "Buy Credits" section in your account</li>
                        <li>Select a credit package (prices start at $15 for 115 credits as of 2025)</li>
                        <li>Complete the payment process using a credit card or PayPal</li>
                      </ul>
                    </li>
                    <li><strong>ChatGPT Plus Subscription</strong>: If you subscribe to ChatGPT Plus ($20/month as of 2025)
                      <ul>
                        <li>You get access to DALL-E through the ChatGPT interface</li>
                        <li>This includes a monthly allocation of DALL-E generations</li>
                        <li>Additional generations beyond the allocation require credit purchases</li>
                      </ul>
                    </li>
                  </ol>
                </ExpandableSection>
                
                <KnowledgeCheck 
                  question="How can you access DALL-E after creating an OpenAI account?"
                  options={[
                    "Through the Discord app",
                    "By downloading a desktop application",
                    "Through labs.openai.com or the OpenAI website",
                    "Only through the ChatGPT interface"
                  ]}
                  correctAnswer={2}
                />
                
                <div className="module-navigation">
                  <div className="nav-buttons">
                    <button 
                      className="btn secondary"
                      onClick={() => setCurrentModule(currentModule - 1)}
                    >
                      Previous: What is DALL-E?
                    </button>
                    <button 
                      className="btn"
                      onClick={() => setCurrentModule(currentModule + 1)}
                    >
                      Next: Navigating the Interface
                    </button>
                  </div>
                </div>
              </div>
            )}
            
            {currentModule > 2 && (
              <div className="locked-content">
                <h3>Unlock the Complete Guide</h3>
                <p>
                  The remaining sections of this guide are available when you sign up for our newsletter.
                  Get instant access to all modules including:
                </p>
                
                <ul>
                  <li>Navigating the DALL-E Interface</li>
 
(Content truncated due to size limit. Use line ranges to read in chunks)
