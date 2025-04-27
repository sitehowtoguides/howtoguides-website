import Link from 'next/link';
import Head from 'next/head';
import { useState } from 'react';
import { GUIDES, getCategoryGuides } from '../../guideData';
import { ROUTES } from '../../routes';

export default function AIGuides() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const categories = [
    {
      id: 'chatgpt',
      title: 'ChatGPT',
      description: 'Learn how to use OpenAI\'s powerful language model for various tasks',
      image: '/images/logos/chatgpt-logo.png',
      color: '#74aa9c',
      featured: true,
    },
    {
      id: 'gemini',
      title: 'Gemini AI',
      description: 'Master Google\'s multimodal AI assistant with comprehensive tutorials',
      image: '/images/logos/gemini-logo.png',
      color: '#8e44ad',
      featured: true,
    },
    {
      id: 'midjourney',
      title: 'Midjourney',
      description: 'Create stunning AI-generated artwork with detailed Midjourney guides',
      image: '/images/logos/midjourney-logo.png',
      color: '#3498db',
      featured: false,
    },
    {
      id: 'dalle',
      title: 'DALL-E',
      description: 'Generate amazing images with OpenAI\'s DALL-E image generation model',
      image: '/images/logos/dalle-logo.png',
      color: '#e74c3c',
      featured: false,
    },
    {
      id: 'content-creation',
      title: 'Content Creation',
      description: 'Learn how to leverage AI tools for creating high-quality content',
      image: '/images/logos/content-creation-logo.png',
      color: '#2ecc71',
      featured: false,
    },
    {
      id: 'image-generation',
      title: 'Image Generation',
      description: 'Master the art of creating stunning visuals with AI image generators',
      image: '/images/logos/image-generation-logo.png',
      color: '#f39c12',
      featured: false,
    },
    {
      id: 'coding-assistant',
      title: 'Coding Assistant',
      description: 'Enhance your programming workflow with AI coding assistants',
      image: '/images/logos/coding-assistant-logo.png',
      color: '#34495e',
      comingSoon: true,
    }
  ];

  // Add guide count to each category
  const categoriesWithGuides = categories.map(category => {
    const guides = getCategoryGuides(category.id);
    return {
      ...category,
      count: guides.length,
      guides: guides
    };
  });

  const filteredCategories = categoriesWithGuides.filter(category => 
    category.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <Head>
        <title>AI Guides - How-ToGuides.com</title>
        <meta name="description" content="Comprehensive guides for popular AI tools including ChatGPT, Gemini AI, Midjourney, DALL-E, and more." />
        <meta name="keywords" content="AI guides, ChatGPT tutorial, Gemini AI guide, Midjourney tutorial, DALL-E guide, AI tools" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <section className="hero-section">
          <h1 className="page-title">AI Guides</h1>
          <p className="page-description">
            Master the most popular AI tools with our comprehensive, step-by-step guides
          </p>
          
          <div className="search-container">
            <input
              type="text"
              placeholder="Search guides..."
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </section>

        <section className="category-section">
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
                  <h2 className="category-title">{category.title}</h2>
                </div>
                <div className="category-card-content">
                  <p className="category-description">{category.description}</p>
                  
                  {category.comingSoon ? (
                    <div className="coming-soon-badge">Coming Soon</div>
                  ) : (
                    <>
                      <div className="guide-count">{category.count} {category.count === 1 ? 'Guide' : 'Guides'}</div>
                      <ul className="guide-list">
                        {category.guides.map((guide, index) => (
                          <li key={index}>
                            <Link href={guide.url}>
                              {guide.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
                
                {!category.comingSoon && category.guides.length > 0 && (
                  <div className="category-card-footer">
                    <Link href={category.guides[0].url} className="btn">
                      View {category.guides.length === 1 ? 'Guide' : 'Guides'}
                    </Link>
                  </div>
                )}
              </div>
            ))}
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
          color: #555;
        }
        
        .guide-count {
          font-size: 0.9rem;
          color: #777;
          margin-bottom: 0.5rem;
        }
        
        .guide-list {
          list-style-type: none;
          padding: 0;
          margin: 0;
        }
        
        .guide-list li {
          margin-bottom: 0.5rem;
        }
        
        .guide-list a {
          color: #3498db;
          text-decoration: none;
        }
        
        .guide-list a:hover {
          text-decoration: underline;
        }
        
        .category-card-footer {
          padding: 1rem 1.5rem;
          border-top: 1px solid #eee;
          text-align: center;
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
        
        @media (max-width: 768px) {
          .category-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
