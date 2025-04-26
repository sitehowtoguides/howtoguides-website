import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>How-ToGuides.com - Master AI Tools with Step-by-Step Guides</title>
        <meta name="description" content="Comprehensive tutorials for AI tools including ChatGPT, Midjourney, DALL-E, and more. Learn how to use AI effectively with our step-by-step guides." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <div className={styles.logo}>
          {/* SVG Logo Implementation */}
          <svg xmlns="http://www.w3.org/2000/svg" width="250" height="100" viewBox="0 0 500 200" className={styles.logoSvg}>
            {/* Compass Circle */}
            <circle cx="100" cy="100" r="70" fill="none" stroke="#000000" strokeWidth="4"/>
            
            {/* Compass Markings */}
            <line x1="100" y1="40" x2="100" y2="50" stroke="#000000" strokeWidth="4"/>
            <line x1="100" y1="150" x2="100" y2="160" stroke="#000000" strokeWidth="4"/>
            <line x1="40" y1="100" x2="50" y2="100" stroke="#000000" strokeWidth="4"/>
            <line x1="150" y1="100" x2="160" y2="100" stroke="#000000" strokeWidth="4"/>
            
            {/* Compass Needle */}
            <path d="M100,60 L90,120 L100,110 L110,120 Z" fill="#000000"/>
            <path d="M100,60 L100,110" fill="none" stroke="#D4AF37" strokeWidth="8"/>
            
            {/* Text */}
            <text x="190" y="80" fontFamily="Merriweather, serif" fontSize="48" fontWeight="normal" fill="#000000">how-to</text>
            <text x="190" y="140" fontFamily="Merriweather, serif" fontSize="60" fontWeight="normal" fill="#000000">guides.com</text>
          </svg>
        </div>
        <nav className={styles.nav}>
          <Link href="/guides" className={styles.navLink}>AI Guides</Link>
          <Link href="/prompt-engineering" className={styles.navLink}>Prompt Engineering</Link>
          <Link href="/resources" className={styles.navLink}>Resources</Link>
          <Link href="/about" className={styles.navLink}>About</Link>
        </nav>
      </header>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Master AI Tools with Step-by-Step Guides
        </h1>

        <p className={styles.description}>
          Comprehensive tutorials for popular AI tools
        </p>

        <div className={styles.grid}>
          <Link href="/guides/chatgpt-for-beginners" className={styles.card}>
            <h2>How to Use ChatGPT &rarr;</h2>
            <p>Learn how to use ChatGPT effectively with our complete beginner's guide.</p>
          </Link>

          <Link href="/guides/midjourney-tutorial" className={styles.card}>
            <h2>How to Use Midjourney &rarr;</h2>
            <p>Master Midjourney for AI image generation with our step-by-step tutorial.</p>
          </Link>

          <Link href="/guides/dalle-tutorial" className={styles.card}>
            <h2>How to Use DALL-E &rarr;</h2>
            <p>Create amazing AI art with DALL-E using our comprehensive guide.</p>
          </Link>

          <Link href="/guides/effective-ai-prompts" className={styles.card}>
            <h2>How to Write AI Prompts &rarr;</h2>
            <p>Learn prompt engineering techniques to get better results from AI tools.</p>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
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
            <p className={styles.tagline}>Master AI tools with step-by-step guides and tutorials.</p>
          </div>
          
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
          <p>© {new Date() .getFullYear()} How-ToGuides.com. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
