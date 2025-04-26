import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Footer.module.css'; // Adjust path if needed

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerGrid}>
          <div className={styles.footerLogo}>
            {/* SVG Logo Implementation - Smaller Version for Footer */}
            <svg xmlns="http://www.w3.org/2000/svg" width="120" height="50" viewBox="0 0 300 120" className={styles.logoSvg}>
              {/* Compass Circle */}
              <circle cx="60" cy="60" r="40" fill="none" stroke="#000000" strokeWidth="3"/>
              
              {/* Compass Markings */}
              <line x1="60" y1="25" x2="60" y2="30" stroke="#000000" strokeWidth="3"/>
              <line x1="60" y1="90" x2="60" y2="95" stroke="#000000" strokeWidth="3"/>
              <line x1="25" y1="60" x2="30" y2="60" stroke="#000000" strokeWidth="3"/>
              <line x1="90" y1="60" x2="95" y2="60" stroke="#000000" strokeWidth="3"/>
              
              {/* Compass Needle */}
              <path d="M60,35 L55,75 L60,70 L65,75 Z" fill="#000000"/>
              <path d="M60,35 L60,70" fill="none" stroke="#D4AF37" strokeWidth="5"/>
              
              {/* Text */}
              <text x="115" y="50" fontFamily="Merriweather, serif" fontSize="28" fontWeight="normal" fill="#000000">how-to</text>
              <text x="115" y="85" fontFamily="Merriweather, serif" fontSize="35" fontWeight="normal" fill="#000000">guides.com</text>
            </svg>
            
            {/* Fallback Image (optional)  */}
            <span className={styles.fallbackLogo} style={{ display: 'none' }}>
              <Image 
                src="/images/logo/logo-footer.svg" 
                alt="How-ToGuides.com" 
                width={120} 
                height={50} 
              />
            </span>
            
            {/* Keep your existing tagline */}
            <p className={styles.tagline}>Master AI tools with step-by-step guides and tutorials.</p>
          </div>
          
          {/* Keep your existing footer sections */}
          <div className={styles.footerLinks}>
            <h3>Popular Guides</h3>
            <ul>
              <li><Link href="/guides/chatgpt-for-beginners">How to Use ChatGPT</Link></li>
              <li><Link href="/guides/midjourney-tutorial">How to Use Midjourney</Link></li>
              <li><Link href="/guides/effective-ai-prompts">How to Write Effective AI Prompts</Link></li>
              <li><Link href="/guides/gemini-ai-tutorial">How to Use Gemini AI</Link></li>
            </ul>
          </div>
          
          <div className={styles.footerLinks}>
            <h3>Resources</h3>
            <ul>
              <li><Link href="/resources/ai-glossary">AI Terminology Glossary</Link></li>
              <li><Link href="/resources/prompt-cheat-sheet">Prompt Engineering Cheat Sheet</Link></li>
              <li><Link href="/resources/model-comparison">AI Model Comparison</Link></li>
            </ul>
          </div>
          
          <div className={styles.footerNewsletter}>
            <h3>Newsletter</h3>
            <p>Stay updated with the latest AI tools and techniques.</p>
            <form className={styles.newsletterForm}>
              <input type="email" placeholder="Your email address" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <p>© {new Date().getFullYear()} How-ToGuides.com. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
