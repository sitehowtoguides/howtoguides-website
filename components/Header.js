import Link from 'next/link';

export default function Header({ isHomePage }) {
  // Apply different classes based on whether this is the home page
  const headerClass = isHomePage ? "header home-header" : "header";
  const containerClass = isHomePage ? "container home-header-container" : "container header-container";
  
  return (
    <header className={headerClass}>
      <div className={containerClass}>
        <Link href="/" className="logo">
          How-ToGuides.com
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
