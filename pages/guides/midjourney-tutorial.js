import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ModuleNavigation from '../../components/ModuleNavigation';
import ExpandableSection from '../../components/ExpandableSection';
import KnowledgeCheck from '../../components/KnowledgeCheck';
import LeadCaptureForm from '../../components/LeadCaptureForm';
import LeadCapturePopup from '../../components/LeadCapturePopup';
import Link from 'next/link';

export default function MidjourneyTutorial() {
  const modules = [
    { id: 'introduction', title: 'Introduction', locked: false },
    { id: 'what-is-midjourney', title: 'What is Midjourney?', locked: false },
    { id: 'setting-up', title: 'Setting Up Your Account', locked: false },
    { id: 'discord-interface', title: 'Navigating Discord', locked: true },
    { id: 'first-image', title: 'Creating Your First Image', locked: true },
    { id: 'commands', title: 'Midjourney Commands', locked: true },
    { id: 'effective-prompts', title: 'Crafting Effective Prompts', locked: true },
    { id: 'parameters', title: 'Using Parameters', locked: true },
    { id: 'variations', title: 'Variations and Upscaling', locked: true },
    { id: 'advanced', title: 'Advanced Features', locked: true },
    { id: 'subscription', title: 'Subscription Plans', locked: true },
    { id: 'troubleshooting', title: 'Troubleshooting', locked: true },
    { id: 'faq', title: 'Frequently Asked Questions', locked: true },
  ];

  return (
    <div className="guide-container">
      <Header />
      
      <div className="guide-content">
        <div className="guide-sidebar">
          <ModuleNavigation modules={modules} currentGuide="midjourney-tutorial" />
          
          <div className="sidebar-cta">
            <h3>Unlock All Modules</h3>
            <p>Sign up to access all modules and download resources</p>
            <LeadCaptureForm 
              buttonText="Unlock Now"
              source="midjourney_sidebar"
              guide="midjourney"
            />
          </div>
        </div>
        
        <div className="guide-main">
          <h1>How to Use Midjourney: Step-by-Step Beginner's Guide</h1>
          <p className="guide-updated">Last Updated: April 20, 2025</p>
          
          <div className="guide-hero">
            <img 
              src="/images/midjourney-beginners-guide-2025.jpg" 
              alt="Step-by-step tutorial on how to use Midjourney for beginners in 2025, showing the Discord interface with Midjourney bot and example image generation" 
              className="guide-hero-image"
            />
          </div>
          
          <section id="introduction">
            <h2>Introduction</h2>
            
            <p>Midjourney has revolutionized image creation, allowing anyone to generate stunning visuals using simple text prompts—but getting started can feel overwhelming. Whether you're an artist seeking inspiration, a designer looking for quick concept art, or simply curious about AI image generation, Midjourney's unique Discord-based interface and specialized commands can present a learning curve for newcomers.</p>
            
            <p>Many beginners struggle with the basics: accessing Midjourney, understanding the Discord interface, crafting effective prompts, and navigating the various parameters and settings. The good news? These challenges are easy to overcome with the right guidance.</p>
            
            <p>In this comprehensive guide, you'll learn everything you need to know to start using Midjourney effectively, from creating your account to writing your first prompts and exploring advanced features. We'll cover the latest 2025 interface, including the newest Midjourney Version 6 model, and exciting features like Multi Prompts and Zoom Out that have transformed the creative possibilities.</p>
            
            <p>Developed by Midjourney Inc., this AI image generator has become one of the world's most popular creative tools, capable of producing photorealistic images, artistic illustrations, concept art, and much more. This guide is based on the latest 2025 interface and features, ensuring you're learning the most current information.</p>
            
            <p>All you need is an internet connection, a device with a web browser, and a Discord account. No artistic background or technical knowledge required. This guide takes about 25 minutes to read through, but you'll be able to start generating your first images within the first 10 minutes.</p>
            
            <KnowledgeCheck
              question="What is the main platform used to access Midjourney?"
              options={[
                "A dedicated mobile app",
                "Discord",
                "A standalone website",
                "Adobe Creative Cloud"
              ]}
              correctAnswer={1}
              explanation="Midjourney operates primarily through Discord, a communication platform popular with gamers and online communities. This creates a social, community-oriented experience where users can see each other's creations."
            />
          </section>
          
          <section id="what-is-midjourney">
            <h2>What is Midjourney?</h2>
            
            <ExpandableSection title="Understanding AI Image Generation">
              <p>Midjourney is an AI image generation tool that creates images based on text descriptions (prompts) provided by users. Unlike traditional design software that requires manual creation, Midjourney uses artificial intelligence to interpret your text prompts and generate corresponding visuals, often with stunning and unexpected results.</p>
              
              <p>At its core, Midjourney is powered by a diffusion model, a type of AI that gradually transforms random noise into coherent images based on the text guidance it receives. The system has been trained on billions of images and their associated descriptions, allowing it to understand complex concepts, artistic styles, lighting techniques, compositions, and more.</p>
            </ExpandableSection>
            
            <ExpandableSection title="Evolution and Current Capabilities">
              <p>Since its public beta release in July 2022, Midjourney has evolved significantly. The current flagship model as of 2025 is Version 6, which offers dramatically improved photorealism, better text rendering, more accurate prompt following, and enhanced compositional understanding compared to earlier versions. Midjourney has also introduced specialized models like Niji for anime-style art and specialized parameters for different creative needs.</p>
              
              <div className="guide-image">
                <img 
                  src="/images/midjourney-evolution-infographic.jpg" 
                  alt="Infographic showing Midjourney's evolution and capabilities through 2025" 
                  className="full-width-image"
                />
              </div>
            </ExpandableSection>
            
            <ExpandableSection title="Comparison with Other AI Image Generators">
              <p>Compared to other AI image generators like DALL-E 3 or Stable Diffusion, Midjourney offers a unique balance of artistic quality and photorealism, with particular strengths in creating atmospheric, emotionally evocative images with strong aesthetic appeal. While all these tools continue to improve rapidly, Midjourney remains distinctive for its artistic sensibility and the particular "look" of its outputs.</p>
              
              <p>One key difference from other AI image generators is that Midjourney operates primarily through Discord, a communication platform popular with gamers and online communities. This unique approach creates a social, community-oriented experience where users can see each other's creations, share techniques, and learn collaboratively.</p>
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
              explanation="As of 2025, Midjourney Version 6 is the flagship model, offering improved photorealism, better text rendering, more accurate prompt following, and enhanced compositional understanding compared to earlier versions."
            />
          </section>
          
          <section id="setting-up">
            <h2>Setting Up Your Midjourney Account</h2>
            
            <ExpandableSection title="Creating a Discord Account">
              <p>Getting started with Midjourney requires both a Discord account and a Midjourney subscription. If you don't already have a Discord account, you'll need to create one first:</p>
              
              <ol>
                <li>Visit <a href="https://discord.com" target="_blank" rel="noopener noreferrer">discord.com</a> in your web browser</li>
                <li>Click on the "Register" button</li>
                <li>Enter your email address, username, password, and date of birth</li>
                <li>Verify your email address by clicking the link sent to your inbox</li>
                <li>Complete any additional verification steps if prompted</li>
              </ol>
              
              <p>You can use Discord through your web browser, but for the best experience, consider downloading the Discord desktop application for your operating system (Windows, macOS, or Linux) or the mobile app for iOS or Android.</p>
            </ExpandableSection>
            
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
            
            <div className="module-complete">
              <h3>Module Complete!</h3>
              <p>You've completed the free modules of this guide. To access the remaining modules and unlock all features, sign up below:</p>
              
              <LeadCaptureForm 
                buttonText="Unlock Full Guide"
                source="midjourney_end_of_free"
                guide="midjourney"
              />
            </div>
          </section>
          
          <section id="locked-content">
            <h2>Unlock the Complete Guide</h2>
            <p>The remaining sections of this guide are available when you sign up for our newsletter:</p>
            
            <ul className="locked-modules">
              <li>Navigating the Discord Interface</li>
              <li>Creating Your First Image</li>
              <li>Understanding Midjourney Commands</li>
              <li>Crafting Effective Prompts</li>
              <li>Using Parameters to Control Output</li>
              <li>Working with Variations and Upscaling</li>
              <li>Advanced Features and Techniques</li>
              <li>Midjourney Subscription Plans</li>
              <li>Troubleshooting Common Issues</li>
              <li>Frequently Asked Questions</li>
            </ul>
            
            <div className="cta-box">
              <h3>Get Instant Access</h3>
              <p>Join thousands of AI enthusiasts who have mastered Midjourney with our comprehensive guide.</p>
              
              <LeadCaptureForm 
                buttonText="Unlock Full Guide"
                source="midjourney_locked_content"
                guide="midjourney"
              />
            </div>
          </section>
          
          <section id="related-guides">
            <h2>Related Guides</h2>
            <div className="related-guides-grid">
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
                <h3>How to Write Effective AI Prompts</h3>
                <p>Techniques for crafting prompts that get better results from AI tools</p>
                <Link href="/guides/effective-ai-prompts" className="btn">
                  Read Guide
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
      
      <LeadCapturePopup 
        heading="Want to Master Midjourney?"
        subheading="Get our complete guide with advanced techniques, prompt templates, and expert tips!"
        buttonText="Get Free Access"
        source="midjourney_popup"
        guide="midjourney"
        delay={30000}
      />
      
      <Footer />
    </div>
  );
}
