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
          {/* Temporary text logo until we resolve the image issues */}
          <h1>How-ToGuides.com</h1>
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
            {/* Temporary text logo until we resolve the image issues */}
            <h3>How-ToGuides.com</h3>
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
          <p>© {new Date().getFullYear()} How-ToGuides.com. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
