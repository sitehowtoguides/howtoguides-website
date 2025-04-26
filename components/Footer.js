import Link from 'next/link';
import styles from '../styles/Footer.module.css'; // Adjust path if needed

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerGrid}>
          <div className={styles.footerLogo}>
            {/* Simple text logo instead of SVG */}
            <h3 className={styles.logoText}>How-ToGuides.com</h3>
            
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
