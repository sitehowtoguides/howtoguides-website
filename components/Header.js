import Link from 'next/link';

export default function Header({ isHomePage }) {
  // Apply different classes based on whether this is the home page
  const headerClass = isHomePage ? "header home-header" : "header";
  const containerClass = isHomePage ? "container home-header-container" : "container header-container";
  
  return (
    <header className={headerClass}>
      <div className={containerClass}>
        <Link href="/" className="logo">
          {/* Logo implementation using standard HTML img tag */}
          <img 
            src="/images/logo/logo-main.svg" 
            alt="How-ToGuides.com" 
            width="180" 
            height="60" 
            style={{ maxWidth: '100%', height: 'auto' }}
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
