import Link from 'next/link';
import Head from 'next/head';
import { useState } from 'react';

export default function AIGlossary() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  
  // Glossary terms organized alphabetically
  const glossaryTerms = [
    {
      term: 'AI (Artificial Intelligence)',
      definition: 'The simulation of human intelligence processes by machines, especially computer systems. These processes include learning, reasoning, and self-correction.',
      category: 'general'
    },
    {
      term: 'AGI (Artificial General Intelligence)',
      definition: 'A hypothetical type of AI that would have the ability to understand, learn, and apply knowledge across a wide range of tasks at a level equal to or greater than humans.',
      category: 'general'
    },
    {
      term: 'Algorithm',
      definition: 'A set of rules or instructions given to an AI, neural network, or other machine to help it learn on its own. In the context of AI, algorithms are the foundation for how machines process data and make decisions.',
      category: 'general'
    },
    {
      term: 'API (Application Programming Interface)',
      definition: 'A set of rules and protocols that allows different software applications to communicate with each other. In AI contexts, APIs enable developers to integrate AI capabilities into their applications.',
      category: 'technical'
    },
    {
      term: 'Bias (AI Bias)',
      definition: 'Systematic errors in AI systems that can lead to unfair outcomes, often reflecting human biases present in training data or algorithm design.',
      category: 'ethical'
    },
    {
      term: 'ChatGPT',
      definition: 'A conversational AI model developed by OpenAI based on the GPT architecture. It\'s designed to engage in dialogue and provide human-like responses to text prompts.',
      category: 'models'
    },
    {
      term: 'Computer Vision',
      definition: 'A field of AI that enables computers to derive meaningful information from digital images, videos, and other visual inputs, and take actions or make recommendations based on that information.',
      category: 'technical'
    },
    {
      term: 'DALL-E',
      definition: 'An AI system developed by OpenAI that can create realistic images and art from natural language descriptions (prompts).',
      category: 'models'
    },
    {
      term: 'Deep Learning',
      definition: 'A subset of machine learning based on artificial neural networks with multiple layers. Deep learning drives many AI advancements, particularly in areas like computer vision and natural language processing.',
      category: 'technical'
    },
    {
      term: 'Embeddings',
      definition: 'Numerical representations of data (like text, images, or audio) that capture semantic meaning in a way that machines can process. Embeddings help AI systems understand relationships between different pieces of content.',
      category: 'technical'
    },
    {
      term: 'Fine-tuning',
      definition: 'The process of taking a pre-trained AI model and further training it on a specific dataset to adapt it for a particular task or domain.',
      category: 'technical'
    },
    {
      term: 'Gemini AI',
      definition: 'A multimodal AI model developed by Google that can process and generate content across different formats including text, images, audio, and video.',
      category: 'models'
    },
    {
      term: 'Generative AI',
      definition: 'AI systems that can create new content, including text, images, audio, and video, based on patterns learned from training data.',
      category: 'general'
    },
    {
      term: 'GPT (Generative Pre-trained Transformer)',
      definition: 'A type of large language model architecture developed by OpenAI that uses transformer neural networks to generate human-like text based on the input it receives.',
      category: 'technical'
    },
    {
      term: 'Hallucination (AI Hallucination)',
      definition: 'When an AI generates information that is factually incorrect or completely fabricated, despite appearing plausible. This occurs when the model produces content not supported by its training data or input context.',
      category: 'technical'
    },
    {
      term: 'Large Language Model (LLM)',
      definition: 'A type of AI model trained on vast amounts of text data that can understand, generate, and manipulate human language. Examples include GPT-4, Claude, and Gemini.',
      category: 'technical'
    },
    {
      term: 'Machine Learning',
      definition: 'A subset of AI that enables systems to learn and improve from experience without being explicitly programmed. It focuses on developing algorithms that can access data and use it to learn for themselves.',
      category: 'technical'
    },
    {
      term: 'Midjourney',
      definition: 'An AI image generation tool that creates images based on text prompts using a combination of deep learning techniques.',
      category: 'models'
    },
    {
      term: 'Multimodal AI',
      definition: 'AI systems that can process and generate multiple types of information (text, images, audio, video) simultaneously, allowing for more comprehensive understanding and creation capabilities.',
      category: 'technical'
    },
    {
      term: 'Natural Language Processing (NLP)',
      definition: 'A branch of AI focused on enabling computers to understand, interpret, and generate human language in a way that is both meaningful and useful.',
      category: 'technical'
    },
    {
      term: 'Neural Network',
      definition: 'A computing system inspired by the structure of the human brain. Neural networks consist of interconnected nodes (neurons) that process information and learn patterns from data.',
      category: 'technical'
    },
    {
      term: 'Parameters',
      definition: 'The internal variables of an AI model that are adjusted during training. The number of parameters often indicates the model\'s complexity and capacity to learn.',
      category: 'technical'
    },
    {
      term: 'Prompt',
      definition: 'An input (usually text) given to an AI system to elicit a specific response or output. Effective prompting is crucial for getting desired results from AI models.',
      category: 'general'
    },
    {
      term: 'Prompt Engineering',
      definition: 'The practice of designing and refining inputs to AI systems to achieve desired outputs. This involves understanding how to communicate effectively with AI models through carefully crafted instructions.',
      category: 'general'
    },
    {
      term: 'Reinforcement Learning',
      definition: 'A type of machine learning where an agent learns to make decisions by taking actions in an environment to maximize some notion of cumulative reward.',
      category: 'technical'
    },
    {
      term: 'Supervised Learning',
      definition: 'A type of machine learning where the algorithm is trained on labeled data, learning to map inputs to known outputs.',
      category: 'technical'
    },
    {
      term: 'Temperature (in AI)',
      definition: 'A parameter that controls the randomness or creativity of AI-generated outputs. Higher temperature values produce more diverse and unpredictable results, while lower values make outputs more deterministic and focused.',
      category: 'technical'
    },
    {
      term: 'Token',
      definition: 'The basic unit of text that language models process. Tokens can be words, parts of words, or individual characters, depending on the model\'s tokenization method.',
      category: 'technical'
    },
    {
      term: 'Training Data',
      definition: 'The dataset used to teach an AI model patterns, relationships, and how to perform specific tasks. The quality and diversity of training data significantly impact an AI system\'s performance and potential biases.',
      category: 'technical'
    },
    {
      term: 'Transformer',
      definition: 'A type of neural network architecture that uses self-attention mechanisms to process sequential data. Transformers are the foundation of many modern language models like GPT and BERT.',
      category: 'technical'
    },
    {
      term: 'Unsupervised Learning',
      definition: 'A type of machine learning where the algorithm learns patterns from unlabeled data without explicit guidance on what to look for.',
      category: 'technical'
    }
  ];
  
  // Filter categories
  const categories = [
    { id: 'all', name: 'All Terms' },
    { id: 'general', name: 'General AI' },
    { id: 'technical', name: 'Technical' },
    { id: 'models', name: 'AI Models' },
    { id: 'ethical', name: 'Ethics & Bias' }
  ];
  
  // Filter terms based on search and category
  const filteredTerms = glossaryTerms.filter(item => {
    const matchesSearch = item.term.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         item.definition.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeFilter === 'all' || item.category === activeFilter;
    
    return matchesSearch && matchesCategory;
  });
  
  // Group terms alphabetically
  const groupedTerms = filteredTerms.reduce((acc, term) => {
    const firstLetter = term.term.charAt(0).toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(term);
    return acc;
  }, {});
  
  // Sort the keys alphabetically
  const sortedLetters = Object.keys(groupedTerms).sort();

  return (
    <div className="container">
      <Head>
        <title>AI Terminology Glossary - How-ToGuides.com</title>
        <meta name="description" content="Comprehensive glossary of AI terminology and definitions. Learn the key terms and concepts in artificial intelligence, machine learning, and prompt engineering." />
        <meta name="keywords" content="AI glossary, AI terminology, AI definitions, machine learning terms, prompt engineering vocabulary" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <section className="hero-section">
          <h1 className="page-title">AI Terminology Glossary</h1>
          <p className="page-description">
            Comprehensive definitions of key terms and concepts in artificial intelligence
          </p>
          
          <div className="search-container">
            <input
              type="text"
              placeholder="Search terms and definitions..."
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </section>

        <section className="filter-section">
          <div className="filter-container">
            {categories.map(category => (
              <button
                key={category.id}
                className={`filter-button ${activeFilter === category.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </section>

        <section className="glossary-section">
          {filteredTerms.length > 0 ? (
            <>
              <div className="alphabet-nav">
                {sortedLetters.map(letter => (
                  <a key={letter} href={`#section-${letter}`} className="alphabet-link">
                    {letter}
                  </a>
                ))}
              </div>
              
              {sortedLetters.map(letter => (
                <div key={letter} id={`section-${letter}`} className="glossary-letter-section">
                  <h2 className="letter-heading">{letter}</h2>
                  <div className="glossary-terms">
                    {groupedTerms[letter].map((item, index) => (
                      <div key={index} className="glossary-item">
                        <h3 className="term">{item.term}</h3>
                        <p className="definition">{item.definition}</p>
                        <span className={`category-tag ${item.category}`}>{item.category}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </>
          ) : (
            <div className="no-results">
              <p>No terms found matching your search criteria.</p>
              <button 
                className="reset-button"
                onClick={() => {
                  setSearchTerm('');
                  setActiveFilter('all');
                }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </section>

        <section className="resources-section">
          <h2>Related Resources</h2>
          <div className="resources-grid">
            <div className="resource-card">
              <h3>Prompt Engineering Cheat Sheet</h3>
              <p>Quick reference guide for crafting effective AI prompts</p>
              <Link href="/resources/prompt-cheat-sheet" className="btn">
                View Cheat Sheet
              </Link>
            </div>
            <div className="resource-card">
              <h3>AI Model Comparison</h3>
              <p>Compare different AI models and their capabilities</p>
              <Link href="/resources/model-comparison" className="btn">
                View Comparison
              </Link>
            </div>
            <div className="resource-card">
              <h3>AI Guides</h3>
              <p>Step-by-step tutorials for popular AI tools</p>
              <Link href="/guides" className="btn">
                Browse Guides
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
        
        .filter-section {
          margin: 2rem 0;
          text-align: center;
        }
        
        .filter-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.5rem;
          max-width: 800px;
          margin: 0 auto;
        }
        
        .filter-button {
          padding: 0.5rem 1rem;
          background-color: #f5f5f5;
          border: 1px solid #ddd;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .filter-button:hover {
          background-color: #e9e9e9;
        }
        
        .filter-button.active {
          background-color: #3498db;
          color: white;
          border-color: #3498db;
        }
        
        .glossary-section {
          margin: 3rem 0;
        }
        
        .alphabet-nav {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.5rem;
          margin-bottom: 2rem;
          padding: 1rem;
          background-color: #f9f9f9;
          border-radius: 8px;
        }
        
        .alphabet-link {
          display: inline-block;
          width: 2rem;
          height: 2rem;
          line-height: 2rem;
          text-align: center;
          background-color: #fff;
          border: 1px solid #ddd;
          border-radius: 4px;
          text-decoration: none;
          color: #333;
          font-weight: bold;
          transition: all 0.3s ease;
        }
        
        .alphabet-link:hover {
          background-color: #3498db;
          color: white;
          border-color: #3498db;
        }
        
        .glossary-letter-section {
          margin-bottom: 3rem;
          scroll-margin-top: 2rem;
        }
        
        .letter-heading {
          font-size: 2rem;
          margin-bottom: 1rem;
          padding-bottom: 0.5rem;
          border-bottom: 2px solid #3498db;
        }
        
        .glossary-terms {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 2rem;
        }
        
        .glossary-item {
          padding: 1.5rem;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          background-color: #fff;
          position: relative;
        }
        
        .term {
          margin-top: 0;
          margin-bottom: 1rem;
          font-size: 1.3rem;
          color: #333;
        }
        
        .definition {
          margin-bottom: 2rem;
          color: #555;
          line-height: 1.6;
        }
        
        .category-tag {
          position: absolute;
          bottom: 1rem;
          left: 1.5rem;
          padding: 0.3rem 0.8rem;
          border-radius: 4px;
          font-size: 0.8rem;
          font-weight: bold;
          text-transform: capitalize;
        }
        
        .category-tag.general {
          background-color: #3498db;
          color: white;
        }
        
        .category-tag.technical {
          background-color: #9b59b6;
          color: white;
        }
        
        .category-tag.models {
          background-color: #2ecc71;
          color: white;
        }
        
        .category-tag.ethical {
          background-color: #e74c3c;
          color: white;
        }
        
        .no-results {
          text-align: center;
          padding: 3rem;
          background-color: #f9f9f9;
          border-radius: 8px;
        }
        
        .reset-button {
          margin-top: 1rem;
          padding: 0.5rem 1rem;
          background-color: #3498db;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        
        .reset-button:hover {
          background-color: #2980b9;
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
        
        @media (max-width: 768px) {
          .glossary-terms {
            grid-template-columns: 1fr;
          }
          
          .resources-grid {
            grid-template-columns: 1fr;
          }
          
          .filter-container {
            flex-direction: column;
            align-items: center;
          }
          
          .filter-button {
            width: 100%;
            max-width: 300px;
          }
        }
      `}</style>
    </div>
  );
}
