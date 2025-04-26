import Link from 'next/link';
import Head from 'next/head';
import { useState } from 'react';

export default function PromptEngineering() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const categories = [
    {
      id: 'fundamentals',
      title: 'Fundamentals of Prompt Engineering',
      description: 'Master the core concepts and principles of effective prompt engineering',
      image: '/images/icons/fundamentals-icon.svg',
      color: '#8e44ad',
      count: 1,
      featured: true,
      guides: [
        { title: 'How to Write Effective AI Prompts: The Ultimate Guide', link: '/guides/effective-ai-prompts' }
      ]
    },
    {
      id: 'specialized',
      title: 'Specialized Prompt Techniques',
      description: 'Learn advanced prompt engineering methods for specific use cases',
      image: '/images/icons/specialized-icon.svg',
      color: '#3498db',
      count: 0,
      comingSoon: true,
      guides: [
        { title: 'How to Use Chain-of-Thought Prompting', link: '/prompt-engineering/chain-of-thought' },
        { title: 'How to Use Few-Shot Prompting', link: '/prompt-engineering/few-shot-prompting' },
        { title: 'How to Use Prompt Templates', link: '/prompt-engineering/prompt-templates' }
      ]
    },
    {
      id: 'business',
      title: 'Business Applications',
      description: 'Apply prompt engineering techniques to business and marketing challenges',
      image: '/images/icons/business-icon.svg',
      color: '#2ecc71',
      count: 0,
      comingSoon: true,
      guides: [
        { title: 'How to Use Prompt Engineering for SEO', link: '/prompt-engineering/seo-prompting' },
        { title: 'How to Use Prompt Engineering for Business', link: '/prompt-engineering/business-prompting' }
      ]
    },
    {
      id: 'creative',
      title: 'Creative Prompting',
      description: 'Create stunning visual art and creative content with specialized prompting techniques',
      image: '/images/icons/creative-icon.svg',
      color: '#e74c3c',
      count: 0,
      comingSoon: true,
      guides: [
        { title: 'How to Create AI Art Prompts', link: '/prompt-engineering/art-prompts' },
        { title: 'How to Write Prompts for Image Generation', link: '/prompt-engineering/image-prompts' }
      ]
    },
    {
      id: 'optimization',
      title: 'Optimization Techniques',
      description: 'Fine-tune your prompts to get the best possible results from AI tools',
      image: '/images/icons/optimization-icon.svg',
      color: '#f39c12',
      count: 0,
      comingSoon: true,
      guides: [
        { title: 'How to Optimize Prompts for AI Tools', link: '/prompt-engineering/prompt-optimization' }
      ]
    }
  ];

  const filteredCategories = categories.filter(category => 
    category.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <Head>
        <title>Prompt Engineering Guides - How-ToGuides.com</title>
        <meta name="description" content="Master the art of prompt engineering with our comprehensive guides for ChatGPT, Midjourney, DALL-E, and other AI tools." />
        <meta name="keywords" content="prompt engineering, AI prompts, effective prompts, prompt techniques, prompt optimization" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <section className="hero-section">
          <h1 className="page-title">Prompt Engineering Guides</h1>
          <p className="page-description">
            Master the art of crafting effective prompts to get better results from AI tools
          </p>
          
          <div className="search-container">
            <input
              type="text"
              placeholder="Search prompt engineering guides..."
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </section>

        <section className="intro-section">
          <div className="intro-content">
            <h2>What is Prompt Engineering?</h2>
            <p>
              Prompt engineering is the art and science of crafting effective instructions for AI models to get the best possible results. 
              It's a crucial skill for anyone working with AI tools like ChatGPT, Midjourney, DALL-E, and Gemini AI.
            </p>
            <p>
              Our comprehensive prompt engineering guides will teach you how to:
            </p>
            <ul>
              <li>Structure your prompts for maximum clarity and effectiveness</li>
              <li>Use specialized techniques for different AI models</li>
              <li>Troubleshoot common prompt issues</li>
              <li>Create consistent, high-quality outputs</li>
              <li>Master advanced prompt engineering methods</li>
            </ul>
          </div>
        </section>

        <section className="category-section">
          <h2>Prompt Engineering Guides by Category</h2>
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
                  
                  {category.comingSoon ? (
                    <div className="coming-soon-badge">Coming Soon</div>
                  ) : (
                    <>
                      <div className="guide-count">{category.count} {category.count === 1 ? 'Guide' : 'Guides'}</div>
                      <ul className="guide-list">
                        {category.guides.map((guide, index) => (
                          <li key={index}>
                            <Link href={guide.link}>
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
                    <Link href={category.guides[0].link} className="btn">
                      View {category.guides.length === 1 ? 'Guide' : 'Guides'}
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="resources-section">
          <h2>Prompt Engineering Resources</h2>
          <div className="resources-grid">
            <div className="resource-card">
              <h3>Prompt Engineering Cheat Sheet</h3>
              <p>A quick reference guide with prompt patterns, templates, and best practices</p>
              <Link href="/resources/prompt-cheat-sheet" className="btn">
                View Cheat Sheet
              </Link>
            </div>
            <div className="resource-card">
              <h3>AI Model Comparison</h3>
              <p>Compare different AI models and their prompt requirements</p>
              <Link href="/resources/model-comparison" className="btn">
                View Comparison
              </Link>
            </div>
            <div className="resource-card">
              <h3>AI Terminology Glossary</h3>
              <p>Understand key terms and concepts in AI and prompt engineering</p>
              <Link href="/resources/ai-glossary" className="btn">
                View Glossary
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
        
        .intro-content ul {
          padding-left: 1.5rem;
          margin-bottom: 0;
        }
        
        .intro-content li {
          margin-bottom: 0.5rem;
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
        
        .resources-section {
          margin: 3rem 0;
        }
        
        .resources-section h2 {
          text-align: center;
          margin-bottom: 2rem;
          font-size: 1.8rem;
        }
        
        .resources-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 2rem;
        }
        
        .resource-card {
          padding: 1.5rem;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          background-color: #f9f9f9;
          text-align: center;
        }
        
        .resource-card h3 {
          margin-top: 0;
          margin-bottom: 1rem;
          font-size: 1.3rem;
        }
        
        .resource-card p {
          margin-bottom: 1.5rem;
          color: #555;
        }
        
        @media (max-width: 768px) {
          .category-grid,
          .resources-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
