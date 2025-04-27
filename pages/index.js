import Link from 'next/link';
import { getFeaturedGuides } from './guideData';

export default function Home() {
  // Get featured guides for the homepage
  const featuredGuides = getFeaturedGuides();
  
  return (
    <div>
      {/* Hero section */}
      <section className="hero">
        <div className="container">
          <h1>Master AI Tools with Step-by-Step Guides</h1>
          <p>Comprehensive tutorials for beginners and advanced users</p>
          <Link href="/guides" className="btn">
            Explore Guides
          </Link>
        </div>
      </section>
      
      {/* Popular guides section */}
      <section className="container">
        <h2>Popular Guides</h2>
        <div className="guide-grid">
          {featuredGuides.map(guide => (
            <div className="guide-card" key={guide.id}>
              <div className="guide-card-content">
                <h3 className="guide-card-title">{guide.title}</h3>
                <p className="guide-card-description">
                  {guide.description}
                </p>
                <Link href={guide.url} className="btn">
                  Read Guide
                </Link>
              </div>
            </div>
          ))}
          
          {/* Additional guides */}
        </div>
      </section>
      
      {/* Additional sections */}
    </div>
  );
}

