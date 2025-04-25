import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
      <div className="container header-container">
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
