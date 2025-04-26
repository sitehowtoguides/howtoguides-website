import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Header.module.css'; // Adjust path if needed

export default function Header() {
  return (
    <header className="header">
      <div className="container header-container">
        <Link href="/" className="logo">
          {/* Image-based logo using Next.js Image component */}
          <Image 
            src="/images/logo/logo-main.svg" 
            alt="How-ToGuides.com" 
            width={200} 
            height={80} 
            priority 
          />
        </Link>
        <nav className="nav">
          <Link href="/" className="nav-link">
            Home
          </Link>
          <Link href="/guides" className="nav-link">
            AI Guides
          </Link>
          <Link href="/prompt-engineering" className="nav-link">
            Prompt Engineering
          </Link>
          <Link href="/resources" className="nav-link">
            Resources
          </Link>
          <Link href="/about" className="nav-link">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
