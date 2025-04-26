import Link from 'next/link';
import Head from 'next/head';
import { useState } from 'react';

export default function Resources() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const categories = [
    {
      id: 'glossary',
      title: 'AI Terminology Glossary',
      description: 'Comprehensive definitions of key AI terms and concepts',
      image: '/images/icons/glossary-icon.svg',
      color: '#3498db',
      featured: true,
      link: '/resources/ai-glossary',
      details: 'Our AI Terminology Glossary provides clear, concise definitions for over 200 AI-related terms. Perfect for beginners and professionals alike, this resource helps you understand the complex language of artificial intelligence.'
    },
    {
      id: 'cheatsheet',
      title: 'Prompt Engineering Cheat Sheet',
      description: 'Quick reference guide for crafting effective AI prompts',
      image: '/images/icons/cheatsheet-icon.svg',
      color: '#e74c3c',
      featured: true,
      link: '/resources/prompt-cheat-sheet',
      details: 'The Prompt Engineering Cheat Sheet is your go-to reference for creating powerful prompts across different AI tools. Includes templates, patterns, and best practices for ChatGPT, Midjourney, DALL-E, and Gemini AI.'
    },
    {
      id: 'comparison',
      title: 'AI Model Comparison',
      description: 'Side-by-side comparison of popular AI models and their capabilities',
      image: '/images/icons/comparison-icon.svg',
      color: '#2ecc71',
      featured: true,
      link: '/resources/model-comparison',
      details: 'Our comprehensive AI Model Comparison helps you choose the right tool for your needs. Compare features, pricing, strengths, and limitations of leading AI models including ChatGPT, Gemini AI, Claude, Midjourney, DALL-E, and more.'
    },
    {
      id: 'learning',
      title: 'AI Learning Paths',
      description: 'Structured learning journeys for mastering AI tools',
      image: '/images/icons/learning-icon.svg',
      color: '#9b59b6',
      comingSoon: true,
      link: '/resources/learning-paths',
      details: 'AI Learning Paths provide step-by-step guidance for mastering specific AI tools and techniques. Each path includes beginner, intermediate, and advanced content to help you progress from novice to expert.'
    },
    {
      id: 'faq',
      title: 'AI Tools FAQ',
      description: 'Answers to frequently asked questions about AI tools',
      image: '/images/icons/faq-icon.svg',
      color: '#f39c12',
      comingSoon: true,
      link: '/resources/ai-faq',
      details: 'Our AI Tools FAQ addresses common questions and challenges users face when working with AI tools. Find solutions to technical issues, understand limitations, and learn best practices for getting the most out of AI.'
    }
  ];

  const filteredCategories = categories.filter(category => 
    category.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <Head>
        <title>AI Resources - How-ToGuides.com</title>
        <meta name="description" content="Access comprehensive AI resources including terminology glossary, prompt engineering cheat sheet, and AI model comparisons." />
        <meta name="keywords" content="AI resources, AI glossary, prompt engineering cheat sheet, AI model comparison, AI learning" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <section className="hero-section">
          <h1 className="page-title">AI Resources</h1>
          <p className="page-description">
            Comprehensive resources to help you master AI tools and techniques
          </p>
          
          <div className="search-container">
            <input
              type="text"
              placeholder="Search resources..."
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </section>

        <section className="intro-section">
          <div className="intro-content">
            <h2>Essential AI Resources</h2>
            <p>
              Our collection of AI resources is designed to help you navigate the complex world of artificial intelligence tools and techniques.
              Whether you're looking for definitions of AI terminology, prompt engineering templates, or detailed comparisons of AI models,
              you'll find everything you need to enhance your AI skills and knowledge.
            </p>
            <p>
              These resources complement our comprehensive how-to guides, providing additional context and reference materials
              to deepen your understanding of AI concepts and improve your practical skills.
            </p>
          </div>
        </section>

        <section className="category-section">
          <h2>Browse Resources by Category</h2>
          <div className="category-grid">
            {filteredCategories.map((category) => (
              <div 
                key={category.id} 
                className={`category-card ${category.featured ? 'featured' : ''} ${category.comingSoon ? 'coming-soon' : ''}`}
                style={{ borderColor: category.color }}
              >
                <div className="category-card-header" style={{ backgroundColor: category.color }}>
                  <div className="category-icon">
                    {category.image && <img src={category.image} alt={`${category.title} icon`} />}
                  </div>
                  <h3 className="category-title">{category.title}</h3>
                </div>
                <div className="category-card-content">
                  <p className="category-description">{category.description}</p>
                  <p className="category-details">{category.details}</p>
                  
                  {category.comingSoon && (
                    <div className="coming-soon-badge">Coming Soon</div>
                  )}
                </div>
                
                {!category.comingSoon && (
                  <div className="category-card-footer">
                    <Link href={category.link} className="btn">
                      View Resource
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="related-section">
          <h2>Related Content</h2>
          <div className="related-grid">
            <div className="related-card">
              <h3>AI Guides</h3>
              <p>Step-by-step tutorials for popular AI tools like ChatGPT, Midjourney, and DALL-E</p>
              <Link href="/guides" className="btn">
                Browse AI Guides
              </Link>
            </div>
            <div className="related-card">
              <h3>Prompt Engineering</h3>
              <p>Learn how to craft effective prompts for different AI models and use cases</p>
              <Link href="/prompt-engineering" className="btn">
                Explore Prompt Engineering
              </Link>
            </div>
            <div className="related-card">
              <h3>About How-ToGuides.com</h3>
              <p>Learn more about our mission to make AI accessible through comprehensive guides</p>
              <Link href="/about" className="btn">
                About Us
              </Link>
            </div>
          </div>
        </section>
      </main>

      <style jsx>{`
        .hero-section {
          text-align: center;
          margin-bottom: 2rem;
          padding: 2rem 0;
        }
        
        .page-title {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }
        
        .page-description {
          font-size: 1.2rem;
          color: #666;
          max-width: 800px;
          margin: 0 auto 2rem;
        }
        
        .search-container {
          max-width: 600px;
          margin: 0 auto;
        }
        
        .search-input {
          width: 100%;
          padding: 0.8rem 1.2rem;
          font-size: 1rem;
          border: 1px solid #ddd;
          border-radius: 4px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        }
        
        .intro-section {
          margin: 3rem 0;
          padding: 2rem;
          background-color: #f9f9f9;
          border-radius: 8px;
        }
        
        .intro-content {
          max-width: 800px;
          margin: 0 auto;
        }
        
        .intro-content h2 {
          margin-top: 0;
          font-size: 1.8rem;
          margin-bottom: 1rem;
        }
        
        .intro-content p {
          margin-bottom: 1rem;
          line-height: 1.6;
        }
        
        .category-section {
          margin: 3rem 0;
        }
        
        .category-section h2 {
          text-align: center;
          margin-bottom: 2rem;
          font-size: 1.8rem;
        }
        
        .category-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 2rem;
        }
        
        .category-card {
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          border: 2px solid transparent;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        
        .category-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
        }
        
        .category-card.featured {
          position: relative;
        }
        
        .category-card.featured::after {
          content: 'Featured';
          position: absolute;
          top: 10px;
          right: 10px;
          background-color: #f39c12;
          color: white;
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
          font-size: 0.8rem;
          font-weight: bold;
        }
        
        .category-card.coming-soon {
          opacity: 0.8;
        }
        
        .category-card-header {
          padding: 1.5rem;
          color: white;
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        
        .category-icon {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .category-icon img {
          max-width: 100%;
          max-height: 100%;
          filter: brightness(0) invert(1);
        }
        
        .category-title {
          margin: 0;
          font-size: 1.5rem;
        }
        
        .category-card-content {
          padding: 1.5rem;
          flex-grow: 1;
        }
        
        .category-description {
          margin-top: 0;
          margin-bottom: 1rem;
          font-weight: bold;
          color: #333;
        }
        
        .category-details {
          margin-bottom: 1rem;
          color: #555;
          line-height: 1.6;
        }
        
        .coming-soon-badge {
          display: inline-block;
          background-color: #95a5a6;
          color: white;
          padding: 0.3rem 0.8rem;
          border-radius: 4px;
          font-size: 0.9rem;
          margin-top: 1rem;
        }
        
        .category-card-footer {
          padding: 1rem 1.5rem;
          border-top: 1px solid #eee;
          text-align: center;
        }
        
        .btn {
          display: inline-block;
          background-color: #3498db;
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 4px;
          text-decoration: none;
          font-weight: bold;
          transition: background-color 0.3s ease;
        }
        
        .btn:hover {
          background-color: #2980b9;
        }
        
        .related-section {
          margin: 3rem 0;
        }
        
        .related-section h2 {
          text-align: center;
          margin-bottom: 2rem;
          font-size: 1.8rem;
        }
        
        .related-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 2rem;
        }
        
        .related-card {
          padding: 1.5rem;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          background-color: #f9f9f9;
          text-align: center;
        }
        
        .related-card h3 {
          margin-top: 0;
          margin-bottom: 1rem;
          font-size: 1.3rem;
        }
        
        .related-card p {
          margin-bottom: 1.5rem;
          color: #555;
        }
        
        @media (max-width: 768px) {
          .category-grid,
          .related-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
