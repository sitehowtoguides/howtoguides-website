import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Header.module.css'; // Adjust path if needed

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          {/* SVG Logo Implementation */}
          <svg xmlns="http://www.w3.org/2000/svg" width="200" height="80" viewBox="0 0 500 200" className={styles.logoSvg}>
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
          
          {/* Fallback Image (optional)  */}
          <span className={styles.fallbackLogo} style={{ display: 'none' }}>
            <Image 
              src="/images/logo/logo-main.svg" 
              alt="How-ToGuides.com" 
              width={200} 
              height={80} 
              priority 
            />
          </span>
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
