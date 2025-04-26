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

      <main className={styles.main}>
        <h1 className={styles.title}>
          Master AI Tools with Step-by-Step Guides
        </h1>
        <p className={styles.description}>
          Comprehensive tutorials for beginners and advanced users
        </p>

        <div className={styles.cta}>
          <Link href="/guides" className={styles.button}>
            Explore Guides
          </Link>
        </div>

        <section className={styles.featuredSection}>
          <h2>Popular Guides</h2>
          <div className={styles.grid}>
            <Link href="/guides/chatgpt-for-beginners" className={styles.card}>
              <h3>How to Use ChatGPT &rarr;</h3>
              <p>Learn how to use ChatGPT effectively with our comprehensive guide.</p>
            </Link>

            <Link href="/guides/midjourney-tutorial" className={styles.card}>
              <h3>How to Use Midjourney &rarr;</h3>
              <p>Create stunning AI-generated artwork with our step-by-step Midjourney tutorial.</p>
            </Link>

            <Link href="/guides/effective-ai-prompts" className={styles.card}>
              <h3>How to Write Effective AI Prompts &rarr;</h3>
              <p>Master the art of prompt engineering to get better results from AI tools.</p>
            </Link>

            <Link href="/guides/gemini-ai-tutorial" className={styles.card}>
              <h3>How to Use Gemini AI &rarr;</h3>
              <p>Explore Google's multimodal AI assistant with our beginner-friendly guide.</p>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
