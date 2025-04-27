import Link from 'next/link';
import { getFeaturedGuides } from '../guideData';

export default function Home() {
  // Get featured guides for the homepage
  const featuredGuides = getFeaturedGuides();
  
  return (
    <div>
      {/* Remove Header and Footer components since they're now handled by _app.js */}
      
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
          {featuredGuides.map(guide => (
            <div className="guide-card" key={guide.id}>
              <div className="guide-card-content">
                <h3 className="guide-card-title">{guide.title}</h3>
                <p className="guide-card-description">
                  {guide.description}
                </p>
                <Link href={guide.url} className="btn">
                  Read Guide
                </Link>
              </div>
            </div>
          ))}
          
          {/* Add any additional non-featured guides you want to highlight */}
          <div className="guide-card">
            <div className="guide-card-content">
              <h3 className="guide-card-title">How to Write Effective AI Prompts: Complete 2025 Guide</h3>
              <p className="guide-card-description">
                Techniques for crafting prompts that get better results from AI tools
              </p>
              <Link href="/guides/how-to-write-effective-ai-prompts" className="btn">
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
      
      {/* Remove Footer component since it's now handled by _app.js */}
    </div>
  );
}
