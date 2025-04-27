import { useState } from 'react';
import ModuleNavigation from '../../components/ModuleNavigation';
import ExpandableSection from '../../components/ExpandableSection';
import KnowledgeCheck from '../../components/KnowledgeCheck';
import LeadCaptureForm from '../../components/LeadCaptureForm';
import LeadCapturePopup from '../../components/LeadCapturePopup';
import Link from 'next/link';
import StructuredData from '../../components/StructuredData';
import { midjourneyHowToSchema, midjourneyFAQSchema, midjourneyArticleSchema } from '../../data/schemas/midjourney-guide';

export default function MidjourneyGuide() {
  const [showPopup, setShowPopup] = useState(false);
  const [currentModule, setCurrentModule] = useState(0);
  
  // Define modules for the guide
  const modules = [
    { title: 'Introduction' },
    { title: 'What is Midjourney?' },
    { title: 'Setting Up Your Account' },
    { title: 'Navigating Discord' },
    { title: 'Creating Your First Image' },
    { title: 'Midjourney Commands' },
    { title: 'Crafting Effective Prompts' },
    { title: 'Using Parameters' },
    { title: 'Variations and Upscaling' },
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
    'Midjourney Prompts Cheat Sheet',
    'AI Image Generators Comparison Table',
    'Parameter Reference Guide',
    'Visual Prompt Templates'
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
      <StructuredData data={midjourneyHowToSchema} />
      <StructuredData data={midjourneyFAQSchema} />
      <StructuredData data={midjourneyArticleSchema} />
      
      <div className="container">
        <div className="hero">
          <h1>How to Use Midjourney: Step-by-Step Guide</h1>
          <p>Learn to create stunning AI-generated images with our comprehensive tutorial</p>
          <p><strong>Last Updated:</strong> April 20, 2025</p>
        </div>
        
        <div className="guide-overview">
          <div className="card">
            <h2>Guide Overview</h2>
            <p>
              This comprehensive guide will teach you everything you need to know about
              using Midjourney effectively in 2025.
            </p>
            <ul>
              <li>Learn about Midjourney's capabilities and features</li>
              <li>Set up your account and navigate the Discord interface</li>
              <li>Master effective prompt techniques for stunning images</li>
              <li>Understand parameters and advanced features</li>
              <li>Explore practical applications and workflows</li>
            </ul>
            <p>Estimated reading time: 25 minutes</p>
          </div>
          
          <LeadCaptureForm 
            title="Download Complete Midjourney Kit"
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
                <h3>Welcome to Midjourney</h3>
                <p>
                  Midjourney has revolutionized image creation, allowing anyone to generate stunning visuals using simple text prompts—but getting started can feel overwhelming. Whether you're an artist seeking inspiration, a designer looking for quick concept art, or simply curious about AI image generation, Midjourney's unique Discord-based interface and specialized commands can present a learning curve for newcomers.
                </p>
                
                <p>
                  Many beginners struggle with the basics: accessing Midjourney, understanding the Discord interface, crafting effective prompts, and navigating the various parameters and settings. The good news? These challenges are easy to overcome with the right guidance.
                </p>
                
                <p>
                  In this comprehensive guide, you'll learn everything you need to know to start using Midjourney effectively, from creating your account to writing your first prompts and exploring advanced features. We'll cover the latest 2025 interface, including the newest Midjourney Version 6 model, and exciting features like Multi Prompts and Zoom Out that have transformed the creative possibilities.
                </p>
                
                <p>
                  Developed by Midjourney Inc., this AI image generator has become one of the world's most popular creative tools, capable of producing photorealistic images, artistic illustrations, concept art, and much more. This guide is based on the latest 2025 interface and features, ensuring you're learning the most current information.
                </p>
                
                <p>
                  All you need is an internet connection, a device with a web browser, and a Discord account. No artistic background or technical knowledge required. This guide takes about 25 minutes to read through, but you'll be able to start generating your first images within the first 10 minutes.
                </p>
                
                <KnowledgeCheck 
                  question="What is the main platform used to access Midjourney?"
                  options={[
                    "A dedicated mobile app",
                    "Discord",
                    "A standalone website",
                    "Adobe Creative Cloud"
                  ]}
                  correctAnswer={1}
                />
                
                <div className="module-navigation">
                  <button 
                    className="btn"
                    onClick={() => setCurrentModule(currentModule + 1)}
                  >
                    Next: What is Midjourney?
                  </button>
                </div>
              </div>
            )}
            
            {currentModule === 1 && (
              <div>
                <h3>Understanding AI Image Generation</h3>
                <p>
                  Midjourney is an AI image generation tool that creates images based on text descriptions (prompts) provided by users. Unlike traditional design software that requires manual creation, Midjourney uses artificial intelligence to interpret your text prompts and generate corresponding visuals, often with stunning and unexpected results.
                </p>
                
                <p>
                  At its core, Midjourney is powered by a diffusion model, a type of AI that gradually transforms random noise into coherent images based on the text guidance it receives. The system has been trained on billions of images and their associated descriptions, allowing it to understand complex concepts, artistic styles, lighting techniques, compositions, and more.
                </p>
                
                <ExpandableSection title="Evolution and Current Capabilities">
                  <p>
                    Since its public beta release in July 2022, Midjourney has evolved significantly. The current flagship model as of 2025 is Version 6, which offers dramatically improved photorealism, better text rendering, more accurate prompt following, and enhanced compositional understanding compared to earlier versions. Midjourney has also introduced specialized models like Niji for anime-style art and specialized parameters for different creative needs.
                  </p>
                  
                  <div className="guide-image">
                    <img 
                      src="/images/midjourney-evolution-infographic.jpg" 
                      alt="Infographic showing Midjourney's evolution and capabilities through 2025" 
                      className="full-width-image"
                    />
                  </div>
                </ExpandableSection>
                
                <ExpandableSection title="Comparison with Other AI Image Generators">
                  <p>
                    Compared to other AI image generators like DALL-E 3 or Stable Diffusion, Midjourney offers a unique balance of artistic quality and photorealism, with particular strengths in creating atmospheric, emotionally evocative images with strong aesthetic appeal. While all these tools continue to improve rapidly, Midjourney remains distinctive for its artistic sensibility and the particular "look" of its outputs.
                  </p>
                  
                  <p>
                    One key difference from other AI image generators is that Midjourney operates primarily through Discord, a communication platform popular with gamers and online communities. This unique approach creates a social, community-oriented experience where users can see each other's creations, share techniques, and learn collaboratively.
                  </p>
                </ExpandableSection>
                
                <KnowledgeCheck 
                  question="What is the current flagship model of Midjourney as of 2025?"
                  options={[
                    "Version 4",
                    "Version 5",
                    "Version 6",
                    "Version 7"
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
                <h3>Creating a Discord Account</h3>
                <p>
                  Getting started with Midjourney requires both a Discord account and a Midjourney subscription. If you don't already have a Discord account, you'll need to create one first:
                </p>
                
                <ol>
                  <li>Visit <a href="https://discord.com" target="_blank" rel="noopener noreferrer">discord.com</a> in your web browser</li>
                  <li>Click on the "Register" button</li>
                  <li>Enter your email address, username, password, and date of birth</li>
                  <li>Verify your email address by clicking the link sent to your inbox</li>
                  <li>Complete any additional verification steps if prompted</li>
                </ol>
                
                <p>
                  You can use Discord through your web browser, but for the best experience, consider downloading the Discord desktop application for your operating system (Windows, macOS, or Linux) or the mobile app for iOS or Android.
                </p>
                
                <ExpandableSection title="Joining the Midjourney Discord Server">
                  <p>Once you have a Discord account:</p>
                  
                  <ol>
                    <li>Visit <a href="https://www.midjourney.com" target="_blank" rel="noopener noreferrer">midjourney.com</a></li>
                    <li>Click on the "Join the Beta" or "Join Discord" button</li>
                    <li>If you're already logged into Discord, you'll be directed to join the Midjourney server</li>
                    <li>Accept the invitation to join the server</li>
                    <li>Read and agree to the server rules when prompted</li>
                  </ol>
                  
                  <p>After joining, you'll see the Midjourney Discord server in your server list on the left side of the Discord interface.</p>
                  
                  <div className="guide-image">
                    <img 
                      src="/images/midjourney-signup-process.jpg" 
                      alt="Step-by-step screenshots of the 2025 signup process with annotations" 
                      className="full-width-image"
                    />
                  </div>
                </ExpandableSection>
                
                <ExpandableSection title="Starting Your Midjourney Subscription">
                  <p>Midjourney offers a subscription-based service with different plans:</p>
                  
                  <ol>
                    <li>In the Midjourney Discord server, navigate to any of the "newbies" channels (e.g., #newbies-1, #newbies-2)</li>
                    <li>Type <code>/subscribe</code> in the message field and press Enter</li>
                    <li>The Midjourney Bot will respond with a direct message containing subscription options</li>
                    <li>Click on the link provided to visit the subscription page</li>
                    <li>Choose your preferred plan (Basic, Standard, Pro, or Mega)</li>
                    <li>Enter your payment information and complete the subscription process</li>
                  </ol>
                  
                  <div className="note">
                    <p><strong>Note:</strong> As of April 2025, Midjourney no longer offers a free trial. All new users must subscribe to one of the paid plans to generate images.</p>
                  </div>
                </ExpandableSection>
                
                <KnowledgeCheck 
                  question="What command do you use to start a Midjourney subscription?"
                  options={[
                    "/start",
                    "/subscribe",
                    "/join",
                    "/payment"
                  ]}
                  correctAnswer={1}
                />
                
                <div className="module-navigation">
                  <div className="nav-buttons">
                    <button 
                      className="btn secondary"
                      onClick={() => setCurrentModule(currentModule - 1)}
                    >
                      Previous: What is Midjourney?
                    </button>
                    <button 
                      className="btn"
                      onClick={() => setCurrentModule(currentModule + 1)}
                    >
                      Next: Navigating Discord
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
                  <li>Navigating the Discord Interface</li>
                  <li>Creating Your First Image</li>
                  <li>Understanding Midjourney Commands</li>
                  <li>Crafting Effective Prompts</li>
                  <li>Using Parameters 
(Content truncated due to size limit. Use line ranges to read in chunks)