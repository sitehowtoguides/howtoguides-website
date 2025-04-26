import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Header />
      
      <section className="hero">
        <div className="container">
          <h1>Master AI Tools with Step-by-Step Guides</h1>
          <p>Comprehensive tutorials for beginners and advanced users</p>
          <Link href="/guides" className="btn">
            Explore Guides
          </Link>
        </div>
      </section>
      
      <section className="container">
        <h2>Popular Guides</h2>
        <div className="guide-grid">
          <div className="guide-card">
            <div className="guide-card-content">
              <h3 className="guide-card-title">How to Use ChatGPT for Beginners</h3>
              <p className="guide-card-description">
                Master ChatGPT from scratch with our step-by-step tutorial
              </p>
              <Link href="/guides/chatgpt-for-beginners" className="btn">
                Read Guide
              </Link>
            </div>
          </div>
    
          <div className="guide-card">
            <div className="guide-card-content">
              <h3 className="guide-card-title">How to Use DALL-E: Complete Tutorial</h3>
                <p className="guide-card-description">
                  Learn how to create amazing AI-generated images with OpenAI's DALL-E
                </p>
                <Link href="/guides/dalle-tutorial" className="btn">
                Read Guide
              </Link>
            </div>
          </div>

          <div className="guide-card">
            <div className="guide-card-content">
              <h3 className="guide-card-title">How to Use Midjourney: Step-by-Step</h3>
              <p className="guide-card-description">
                Learn how to create stunning AI-generated images with Midjourney
              </p>
              <Link href="/guides/midjourney-tutorial" className="btn">
                Read Guide
              </Link>
            </div>
          </div>
    
          <div className="guide-card">
           <div className="guide-card-content">
              <h3 className="guide-card-title">How to Use Gemini AI: Beginner's Tutorial</h3>
              <p className="guide-card-description">
                Master Google's powerful multimodal AI assistant with our comprehensive guide
               </p>
               <Link href="/guides/gemini-ai-tutorial" className="btn">
                 Read Guide
                </Link>
              </div>
            </div>
    
            <div className="guide-card">
              <div className="guide-card-content">
                <h3 className="guide-card-title">How to Use AI for Content Creation</h3>
                  <p className="guide-card-description">
              Master AI-powered content creation to produce high-quality blogs, social media, videos, and more
              </p>
              <Link href="/guides/ai-content-creation" className="btn">
              Read Guide
            </Link>
          </div>
        </div>

          <div className="guide-card">
            <div className="guide-card-content">
              <h3 className="guide-card-title">How to Write Effective AI Prompts</h3>
              <p className="guide-card-description">
                Techniques for crafting prompts that get better results from AI tools
              </p>
              <Link href="/guides/effective-ai-prompts" className="btn">
                Read Guide
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <section className="container">
        <h2>Latest Updates</h2>
        <ul>
          <li>ChatGPT Guide updated with GPT-4o information (April 19, 2025)</li>
          <li>New Gemini AI Tutorial now available (April 10, 2025)</li>
          <li>Midjourney Guide updated with v6 features (March 28, 2025)</li>
        </ul>
      </section>
      
      <section className="container">
        <div className="lead-form">
          <h2>Get Our AI Newsletter</h2>
          <p>Stay updated with the latest AI tools and techniques</p>
          <form>
            <input
              type="email"
              className="lead-form-input"
              placeholder="Your email address"
              required
            />
            <button type="submit" className="btn">
              Subscribe
            </button>
          </form>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
