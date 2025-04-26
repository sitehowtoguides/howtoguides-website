import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ModuleNavigation from '../../components/ModuleNavigation';
import ExpandableSection from '../../components/ExpandableSection';
import KnowledgeCheck from '../../components/KnowledgeCheck';
import LeadCaptureForm from '../../components/LeadCaptureForm';
import LeadCapturePopup from '../../components/LeadCapturePopup';
import Link from 'next/link';

export default function DalleTutorial() {
  const modules = [
    { id: 'introduction', title: 'Introduction', locked: false },
    { id: 'what-is-dalle', title: 'What is DALL-E?', locked: false },
    { id: 'setting-up', title: 'Setting Up Your Account', locked: false },
    { id: 'interface', title: 'Navigating the Interface', locked: true },
    { id: 'first-image', title: 'Creating Your First Image', locked: true },
    { id: 'effective-prompts', title: 'Crafting Effective Prompts', locked: true },
    { id: 'capabilities', title: 'Capabilities & Limitations', locked: true },
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
          <ModuleNavigation modules={modules} currentGuide="dalle-tutorial" />
          
          <div className="sidebar-cta">
            <h3>Unlock All Modules</h3>
            <p>Sign up to access all modules and download resources</p>
            <LeadCaptureForm 
              buttonText="Unlock Now"
              source="dalle_sidebar"
              guide="dalle"
            />
          </div>
        </div>
        
        <div className="guide-main">
          <h1>How to Use DALL-E: Complete Tutorial for Beginners</h1>
          <p className="guide-updated">Last Updated: April 21, 2025</p>
          
          <div className="guide-hero">
            <img 
              src="/images/dalle-beginners-guide-2025.jpg" 
              alt="Step-by-step tutorial on how to use DALL-E for beginners in 2025, showing the interface with example image generation" 
              className="guide-hero-image"
            />
          </div>
          
          <section id="introduction">
            <h2>Introduction</h2>
            
            <p>DALL-E has revolutionized the way we create images, allowing anyone to generate stunning visuals using simple text descriptions. Whether you're a designer seeking inspiration, a marketer creating content, or simply curious about AI image generation, DALL-E offers an accessible way to bring your ideas to life visually—but getting started can feel overwhelming for newcomers.</p>
            
            <p>Many beginners struggle with understanding DALL-E's capabilities, crafting effective prompts, and navigating the various features and settings. The good news? These challenges are easy to overcome with the right guidance.</p>
            
            <p>In this comprehensive guide, you'll learn everything you need to know to start using DALL-E effectively, from creating your account to writing your first prompts and exploring advanced features. We'll cover the latest 2025 interface, including the newest DALL-E 3 model, and exciting features like image editing, variations, and outpainting that have transformed the creative possibilities.</p>
            
            <p>Developed by OpenAI, DALL-E (named as a combination of artist Salvador Dalí and Pixar's WALL-E) has become one of the world's most popular AI image generators, capable of producing photorealistic images, artistic illustrations, concept art, and much more. This guide is based on the latest 2025 interface and features, ensuring you're learning the most current information.</p>
            
            <p>All you need is an internet connection, a device with a web browser, and an OpenAI account. No artistic background or technical knowledge required. This guide takes about 20 minutes to read through, but you'll be able to start generating your first images within the first 5 minutes.</p>
            
            <KnowledgeCheck
              question="What company developed DALL-E?"
              options={[
                "Google",
                "Microsoft",
                "OpenAI",
                "Adobe"
              ]}
              correctAnswer={2}
              explanation="DALL-E was developed by OpenAI, the same company behind ChatGPT and other advanced AI systems. The name DALL-E is a combination of artist Salvador Dalí and Pixar's WALL-E."
            />
          </section>
          
          <section id="what-is-dalle">
            <h2>What is DALL-E?</h2>
            
            <ExpandableSection title="Understanding AI Image Generation">
              <p>DALL-E is an AI image generation system that creates images based on text descriptions (prompts) provided by users. Unlike traditional design software that requires manual creation, DALL-E uses artificial intelligence to interpret your text prompts and generate corresponding visuals, often with stunning and unexpected results.</p>
              
              <p>At its core, DALL-E is powered by a diffusion model, a type of AI that gradually transforms random noise into coherent images based on the text guidance it receives. The system has been trained on billions of images and their associated descriptions, allowing it to understand complex concepts, artistic styles, lighting techniques, compositions, and more.</p>
            </ExpandableSection>
            
            <ExpandableSection title="Evolution and Current Capabilities">
              <p>Since its initial release in January 2021, DALL-E has evolved significantly. The current flagship model as of 2025 is DALL-E 3, which offers dramatically improved photorealism, better text rendering, more accurate prompt following, and enhanced compositional understanding compared to earlier versions. OpenAI has also introduced specialized features like image editing, variations, and outpainting for different creative needs.</p>
              
              <div className="guide-image">
                <img 
                  src="/images/dalle-evolution-infographic.jpg" 
                  alt="Infographic showing DALL-E's evolution and capabilities through 2025" 
                  className="full-width-image"
                />
              </div>
            </ExpandableSection>
            
            <ExpandableSection title="Comparison with Other AI Image Generators">
              <p>Compared to other AI image generators like Midjourney or Stable Diffusion, DALL-E offers a unique balance of accessibility and quality, with particular strengths in following detailed instructions and creating coherent scenes. While all these tools continue to improve rapidly, DALL-E remains distinctive for its intuitive interface and tight integration with ChatGPT.</p>
              
              <p>One key difference from some other AI image generators is that DALL-E operates through a simple web interface or API, making it accessible to users without requiring specialized software or platforms. This approach creates a straightforward experience where users can quickly generate images without navigating complex systems.</p>
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
              explanation="As of 2025, DALL-E 3 is the flagship model, offering improved photorealism, better text rendering, more accurate prompt following, and enhanced compositional understanding compared to earlier versions."
            />
          </section>
          
          <section id="setting-up">
            <h2>Setting Up Your DALL-E Account</h2>
            
            <ExpandableSection title="Creating an OpenAI Account">
              <p>If you don't already have an OpenAI account, you'll need to create one first:</p>
              
              <ol>
                <li>Visit <a href="https://openai.com" target="_blank" rel="noopener noreferrer">openai.com</a> in your web browser</li>
                <li>Click on the "Sign Up" button in the top-right corner</li>
                <li>Enter your email address or continue with Google, Microsoft, or Apple account</li>
                <li>Follow the prompts to complete your account setup</li>
                <li>Verify your email address by clicking the link sent to your inbox</li>
                <li>Complete any additional verification steps if prompted</li>
              </ol>
            </ExpandableSection>
            
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
            
            <div className="module-complete">
              <h3>Module Complete!</h3>
              <p>You've completed the free modules of this guide. To access the remaining modules and unlock all features, sign up below:</p>
              
              <LeadCaptureForm 
                buttonText="Unlock Full Guide"
                source="dalle_end_of_free"
                guide="dalle"
              />
            </div>
          </section>
          
          <section id="locked-content">
            <h2>Unlock the Complete Guide</h2>
            <p>The remaining sections of this guide are available when you sign up for our newsletter:</p>
            
            <ul className="locked-modules">
              <li>Navigating the DALL-E Interface</li>
              <li>Creating Your First Image</li>
              <li>Crafting Effective Prompts</li>
              <li>Understanding DALL-E's Capabilities and Limitations</li>
              <li>Advanced Features</li>
              <li>DALL-E Subscription Plans</li>
              <li>Troubleshooting Common Issues</li>
              <li>Frequently Asked Questions</li>
            </ul>
            
            <div className="cta-box">
              <h3>Get Instant Access</h3>
              <p>Join thousands of AI enthusiasts who have mastered DALL-E with our comprehensive guide.</p>
              
              <LeadCaptureForm 
                buttonText="Unlock Full Guide"
                source="dalle_locked_content"
                guide="dalle"
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
                <h3>How to Use Midjourney: Step-by-Step</h3>
                <p>Learn to create stunning AI-generated images with Midjourney</p>
                <Link href="/guides/midjourney-tutorial" className="btn">
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
        heading="Want to Master DALL-E?"
        subheading="Get our complete guide with advanced techniques, prompt templates, and expert tips!"
        buttonText="Get Free Access"
        source="dalle_popup"
        guide="dalle"
        delay={30000}
      />
      
      <Footer />
    </div>
  );
}
