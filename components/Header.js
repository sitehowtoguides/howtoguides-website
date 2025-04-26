import Link from 'next/link';
import styles from '../styles/Header.module.css'; // Adjust path if needed

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          {/* Simple text logo instead of SVG */}
          <h1 className={styles.logoText}>How-ToGuides.com</h1>
        </Link>
        
        {/* Keep your existing navigation */}
        <nav className={styles.nav}>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/guides" className={styles.navLink}>AI Guides</Link>
          <Link href="/prompt-engineering" className={styles.navLink}>Prompt Engineering</Link>
          <Link href="/resources" className={styles.navLink}>Resources</Link>
          <Link href="/about" className={styles.navLink}>About</Link>
        </nav>
      </div>
    </header>
  );
}
