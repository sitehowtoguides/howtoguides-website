import Link from 'next/link';

export default function Footer({ isHomePage }) {
  // Apply different classes based on whether this is the home page
  const footerClass = isHomePage ? "footer home-footer" : "footer";
  const containerClass = isHomePage ? "container home-footer-container" : "container";
  
  return (
    <footer className={footerClass}>
      <div className={containerClass}>
        <div className="footer-container">
          <div className="footer-section">
            {/* Logo implementation using standard HTML img tag */}
            <img 
              src="/images/logo/logo-footer.svg" 
              alt="How-ToGuides.com" 
              width="120" 
              height="40" 
              style={{ maxWidth: '100%', height: 'auto', marginBottom: '10px' }}
            />
            <p>Master AI tools with step-by-step guides and tutorials.</p>
          </div>
          <div className="footer-section">
            <h3>Popular Guides</h3>
            <ul className="footer-links">
              <li>
                <Link href="/guides/how-to-use-chatgpt">
                  How to Use ChatGPT
                </Link>
              </li>
              <li>
                <Link href="/guides/how-to-use-midjourney">
                  How to Use Midjourney
                </Link>
              </li>
              <li>
                <Link href="/guides/effective-ai-prompts">
                  How to Write Effective AI Prompts
                </Link>
              </li>
              <li>
                <Link href="/guides/how-to-use-gemini-ai">
                  How to Use Gemini AI
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Resources</h3>
            <ul className="footer-links">
              <li>
                <Link href="/resources/ai-glossary">
                  AI Terminology Glossary
                </Link>
              </li>
              <li>
                <Link href="/resources/prompt-cheat-sheet">
                  Prompt Engineering Cheat Sheet
                </Link>
              </li>
              <li>
                <Link href="/resources/model-comparison">
                  AI Model Comparison
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Newsletter</h3>
            <p>Stay updated with the latest AI tools and techniques.</p>
            <form className="footer-form">
              <input
                type="email"
                placeholder="Your email address"
                className="lead-form-input"
              />
              <button type="submit" className="btn">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} How-ToGuides.com. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
