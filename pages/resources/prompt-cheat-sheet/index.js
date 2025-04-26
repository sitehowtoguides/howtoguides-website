import Link from 'next/link';
import Head from 'next/head';
import { useState } from 'react';

export default function PromptCheatSheet() {
  const [activeTab, setActiveTab] = useState('general');
  const [searchTerm, setSearchTerm] = useState('');
  
  const tabs = [
    { id: 'general', name: 'General Techniques' },
    { id: 'chatgpt', name: 'ChatGPT' },
    { id: 'gemini', name: 'Gemini AI' },
    { id: 'midjourney', name: 'Midjourney' },
    { id: 'dalle', name: 'DALL-E' }
  ];
  
  const promptTemplates = {
    general: [
      {
        title: 'Role-Based Prompting',
        description: 'Assign a specific role to the AI to get responses from a particular perspective.',
        template: 'Act as a [role] and [task].',
        example: 'Act as a financial advisor and help me create a budget for a family of four with a monthly income of $6,000.',
        tips: [
          'Be specific about the role (e.g., "senior financial advisor with 20 years experience" rather than just "financial advisor")',
          'Include relevant qualifications or expertise in the role description',
          'Combine with other techniques for more powerful results'
        ]
      },
      {
        title: 'Chain-of-Thought Prompting',
        description: 'Guide the AI to break down complex problems into step-by-step reasoning.',
        template: 'Think through this step-by-step: [problem]',
        example: 'Think through this step-by-step: If I have 5 apples and give 2 to my friend, then buy 3 more and eat 1, how many apples do I have left?',
        tips: [
          'Works best for logical, mathematical, or reasoning tasks',
          'Explicitly ask for intermediate steps and reasoning',
          'Can be combined with role-based prompting for expert reasoning'
        ]
      },
      {
        title: 'Few-Shot Prompting',
        description: 'Provide examples of the desired input-output pairs to guide the AI\'s responses.',
        template: 'I want you to respond in the following format:\nInput: [example input 1]\nOutput: [example output 1]\nInput: [example input 2]\nOutput: [example output 2]\nInput: [actual input]\nOutput:',
        example: 'I want you to respond in the following format:\nInput: Convert 10 miles to kilometers\nOutput: 10 miles = 16.09 kilometers\nInput: Convert 25 celsius to fahrenheit\nOutput: 25°C = 77°F\nInput: Convert 5 kilograms to pounds\nOutput:',
        tips: [
          'Use 2-3 examples for best results',
          'Make sure examples clearly demonstrate the pattern you want',
          'Examples should be diverse enough to show the range of expected inputs'
        ]
      },
      {
        title: 'Output Format Specification',
        description: 'Explicitly define the format you want the AI to use in its response.',
        template: 'Respond in the following format: [format details]',
        example: 'Create a weekly meal plan. Respond in the following format:\n\n# Monday\n- Breakfast: [meal]\n- Lunch: [meal]\n- Dinner: [meal]\n\n# Tuesday\n...',
        tips: [
          'Be very specific about formatting, including headings, bullet points, etc.',
          'Use markdown formatting for structured outputs',
          'Consider including a short example of the desired format'
        ]
      },
      {
        title: 'Persona-Based Prompting',
        description: 'Ask the AI to adopt a specific persona with defined characteristics.',
        template: 'I want you to act as [persona] with the following characteristics: [traits]. Now [task].',
        example: 'I want you to act as a tech-savvy grandmother with the following characteristics: patient, slightly confused by modern slang, loves to explain things simply. Now explain how to create a secure password.',
        tips: [
          'Define 3-5 specific traits for the persona',
          'Include communication style preferences',
          'Consider adding background or context for the persona'
        ]
      }
    ],
    chatgpt: [
      {
        title: 'ChatGPT System Message',
        description: 'Define the AI\'s behavior and constraints for the entire conversation.',
        template: 'I want you to act as [role/system]. Your task is to [specific instructions]. You must [constraints/rules].',
        example: 'I want you to act as a Python coding tutor. Your task is to help me learn Python by explaining concepts simply and providing code examples. You must avoid writing complete solutions to my homework problems, instead guiding me to find the answers myself.',
        tips: [
          'Set clear boundaries and constraints',
          'Define the scope of knowledge or expertise',
          'Establish the tone and style of responses',
          'Include any ethical guidelines or limitations'
        ]
      },
      {
        title: 'ChatGPT Code Generation',
        description: 'Generate code with specific requirements and explanations.',
        template: 'Write a [language] function that [functionality]. Include comments explaining the code and provide an example of how to use it.',
        example: 'Write a Python function that calculates the Fibonacci sequence up to n terms. Include comments explaining the code and provide an example of how to use it.',
        tips: [
          'Specify the programming language',
          'Clearly define the functionality required',
          'Ask for comments and documentation',
          'Request examples of usage',
          'Specify any performance considerations or constraints'
        ]
      },
      {
        title: 'ChatGPT Content Refinement',
        description: 'Iteratively improve content by providing specific feedback.',
        template: 'I\'m going to give you a [content type]. Please improve it by [specific improvements]. Here\'s the content: [your content]',
        example: 'I\'m going to give you a product description. Please improve it by making it more engaging, adding sensory details, and highlighting key benefits. Here\'s the content: "Our water bottle is made of stainless steel and keeps drinks cold for hours."',
        tips: [
          'Be specific about what aspects need improvement',
          'Provide clear criteria for success',
          'Consider asking for multiple versions or variations',
          'Use iterative refinement by providing feedback on each version'
        ]
      },
      {
        title: 'ChatGPT Structured Analysis',
        description: 'Get a structured analysis of a topic with specific sections.',
        template: 'Provide a comprehensive analysis of [topic] with the following sections:\n1. [Section 1]\n2. [Section 2]\n3. [Section 3]\n...',
        example: 'Provide a comprehensive analysis of remote work trends with the following sections:\n1. Historical context and evolution\n2. Current statistics and adoption rates\n3. Benefits for employees\n4. Benefits for employers\n5. Common challenges and solutions\n6. Future predictions',
        tips: [
          'Define 4-7 specific sections for thorough coverage',
          'Order sections logically (e.g., from general to specific)',
          'Include both factual and analytical sections',
          'Consider adding a "Key Takeaways" or "Summary" section at the end'
        ]
      },
      {
        title: 'ChatGPT Temperature Control',
        description: 'Control the creativity vs. precision of responses using temperature settings.',
        template: 'I need [creative/precise] responses about [topic]. Please adjust your temperature to [high/low] and [task].',
        example: 'I need creative responses about marketing slogans for a new eco-friendly water bottle. Please adjust your temperature to high and generate 10 catchy slogans that highlight sustainability.',
        tips: [
          'For creative tasks (brainstorming, content creation), request "high temperature"',
          'For factual or precise tasks (coding, analysis), request "low temperature"',
          'Be explicit about the balance of creativity vs. accuracy you need',
          'Note that this is a conceptual request as users can\'t directly control temperature'
        ]
      }
    ],
    gemini: [
      {
        title: 'Gemini Multimodal Prompting',
        description: 'Combine text instructions with image inputs for comprehensive analysis.',
        template: '[Text instructions for analyzing the image]\n[Image upload]',
        example: 'Analyze this chart and explain the key trends, notable data points, and what conclusions can be drawn from it.\n[Upload image of a business chart]',
        tips: [
          'Be specific about what aspects of the image to focus on',
          'Provide context about the image before uploading it',
          'Ask for specific types of analysis (e.g., technical, creative, data-focused)',
          'Consider asking for comparisons between different elements in the image'
        ]
      },
      {
        title: 'Gemini Code Analysis',
        description: 'Get detailed analysis and improvements for code snippets.',
        template: 'Review this [language] code and provide the following:\n1. Code quality analysis\n2. Potential bugs or issues\n3. Performance improvements\n4. Security considerations\n5. Refactored version\n\n```[language]\n[code]\n```',
        example: 'Review this Python code and provide the following:\n1. Code quality analysis\n2. Potential bugs or issues\n3. Performance improvements\n4. Security considerations\n5. Refactored version\n\n```python\ndef calculate_total(items):\n  total = 0\n  for i in range(len(items)):\n    total = total + items[i][\'price\']\n  return total\n```',
        tips: [
          'Always include the language in the code block formatting',
          'Specify exactly what aspects of the code you want analyzed',
          'For larger codebases, focus on specific functions or sections',
          'Ask for explanations of the suggested improvements'
        ]
      },
      {
        title: 'Gemini Data Analysis',
        description: 'Analyze data and generate insights with specific requirements.',
        template: 'I have the following data:\n```\n[data]\n```\n\nAnalyze this data and provide:\n1. [analysis requirement 1]\n2. [analysis requirement 2]\n3. [analysis requirement 3]',
        example: 'I have the following data:\n```\nMonth,Sales,Marketing Spend\nJan,10500,2000\nFeb,12600,2200\nMar,14800,2500\nApr,13200,2300\nMay,15900,2700\n```\n\nAnalyze this data and provide:\n1. Monthly sales growth rates\n2. Marketing efficiency (sales per dollar spent)\n3. Correlation between marketing spend and sales\n4. Recommendations for optimal marketing budget',
        tips: [
          'Format data clearly in tables or CSV format',
          'Specify exactly what insights you\'re looking for',
          'Ask for visualizations to be described (Gemini can\'t generate actual charts)',
          'For complex analyses, break down into multiple specific questions'
        ]
      },
      {
        title: 'Gemini Comparative Analysis',
        description: 'Get detailed comparisons between multiple items or concepts.',
        template: 'Compare and contrast [item 1], [item 2], and [item 3] based on the following criteria:\n1. [criterion 1]\n2. [criterion 2]\n3. [criterion 3]\n\nPresent your analysis in a structured format with clear headings.',
        example: 'Compare and contrast React, Angular, and Vue.js based on the following criteria:\n1. Learning curve\n2. Performance\n3. Community support\n4. Job market demand\n5. Suitability for different project types\n\nPresent your analysis in a structured format with clear headings.',
        tips: [
          'Choose 3-5 specific comparison criteria',
          'Ask for both similarities and differences',
          'Request a conclusion or recommendation section',
          'Specify if you want a table format for easy comparison'
        ]
      },
      {
        title: 'Gemini Step-by-Step Tutorials',
        description: 'Generate detailed tutorials with specific formatting requirements.',
        template: 'Create a detailed tutorial on how to [task]. Include:\n1. Prerequisites\n2. Step-by-step instructions with explanations\n3. Common mistakes and troubleshooting\n4. Advanced tips\n\nFormat each step with a clear heading, numbered steps, and code examples where relevant.',
        example: 'Create a detailed tutorial on how to set up a React development environment from scratch. Include:\n1. Prerequisites\n2. Step-by-step instructions with explanations\n3. Common mistakes and troubleshooting\n4. Advanced tips\n\nFormat each step with a clear heading, numbered steps, and code examples where relevant.',
        tips: [
          'Be specific about the format you want (headings, numbering, etc.)',
          'Request screenshots to be described at key points',
          'Ask for both basic and advanced information',
          'Specify the target audience (beginners, intermediate, advanced)'
        ]
      }
    ],
    midjourney: [
      {
        title: 'Basic Midjourney Prompt Structure',
        description: 'The fundamental structure for effective Midjourney prompts.',
        template: '[Subject], [Medium], [Style], [Artist/Influence], [Additional parameters]',
        example: 'A serene mountain lake at sunset, digital painting, fantasy style, inspired by Thomas Kinkade, highly detailed --ar 16:9 --v 5',
        tips: [
          'Start with a clear subject description',
          'Specify the medium (digital art, oil painting, photograph, etc.)',
          'Include artistic style references',
          'Add technical parameters at the end with double dashes',
          'Keep core prompts under 60 words for best results'
        ]
      },
      {
        title: 'Midjourney Style Mixing',
        description: 'Combine multiple artistic styles for unique results.',
        template: '[Subject] in the style of [Artist 1] meets [Artist 2], [Additional details]',
        example: 'Portrait of a young woman in the style of Alphonse Mucha meets Hayao Miyazaki, art nouveau lines with anime influence, ethereal lighting, ornate details --v 5 --stylize 750',
        tips: [
          'Choose artists with distinctive and complementary styles',
          'Specify which elements to take from each style',
          'Use the stylize parameter (--stylize) to control style intensity',
          'Try combining different mediums (e.g., watercolor meets digital art)'
        ]
      },
      {
        title: 'Midjourney Lighting Control',
        description: 'Specify lighting conditions for dramatic effect.',
        template: '[Subject] with [specific lighting description], [Additional details]',
        example: 'Ancient temple ruins with volumetric god rays streaming through broken ceiling, golden hour lighting, atmospheric dust particles, dramatic shadows --ar 16:9 --v 5',
        tips: [
          'Be specific about light source (natural, artificial, time of day)',
          'Describe light quality (harsh, soft, diffused, directional)',
          'Include atmospheric effects (fog, dust, smoke) for depth',
          'Mention shadows and their characteristics',
          'Reference photography lighting terms (Rembrandt, butterfly, split, etc.)'
        ]
      },
      {
        title: 'Midjourney Material Specification',
        description: 'Define specific materials for realistic textures.',
        template: '[Subject] made of [material], [Additional details]',
        example: 'Dragon sculpture made of hammered copper with patina, intricate details, reflective surfaces, studio lighting against black background --v 5 --q 2',
        tips: [
          'Be specific about material properties (rough, smooth, reflective)',
          'Combine multiple materials for interesting contrasts',
          'Include weathering or aging effects when appropriate',
          'Use the quality parameter (--q) for more detailed textures',
          'Consider how lighting will interact with the material'
        ]
      },
      {
        title: 'Midjourney Camera Settings',
        description: 'Use photography terminology for specific visual effects.',
        template: '[Subject], [Camera type], [Lens], [Camera settings], [Additional details]',
        example: 'Abandoned amusement park, Sony A7R IV, 16mm wide-angle lens, f/2.8, long exposure, twilight, fog, cinematic --ar 16:9 --v 5',
        tips: [
          'Specify camera brand and model for particular looks',
          'Include lens focal length (wide: 16-35mm, normal: 50mm, telephoto: 85mm+)',
          'Mention aperture settings (f/1.4 for shallow depth of field, f/16 for deep focus)',
          'Add photography techniques (long exposure, HDR, panorama)',
          'Reference film stock for specific color grading (Kodak Portra, Fuji Velvia)'
        ]
      }
    ],
    dalle: [
      {
        title: 'DALL-E Basic Prompt Structure',
        description: 'The fundamental structure for effective DALL-E prompts.',
        template: '[Detailed subject description], [Style], [Composition], [Lighting], [Additional details]',
        example: 'A cozy reading nook in a Victorian library, warm ambient lighting from a stained glass window, leather-bound books on wooden shelves, photorealistic style, wide angle view',
        tips: [
          'Be specific and detailed about the subject',
          'Include style references (photorealistic, watercolor, etc.)',
          'Specify composition (close-up, wide angle, overhead view)',
          'Describe lighting conditions for mood',
          'Keep prompts clear and concise'
        ]
      },
      {
        title: 'DALL-E Style Transfer',
        description: 'Generate images in specific artistic styles.',
        template: '[Subject] in the style of [Artist/Art movement], [Additional details]',
        example: 'A modern city skyline in the style of Vincent van Gogh\'s Starry Night, swirling sky, vibrant colors, expressive brushstrokes, nighttime scene',
        tips: [
          'Reference specific artists or art movements',
          'Include distinctive style elements (brushstrokes, color palette)',
          'Combine with specific subject details',
          'Try mixing multiple artistic influences',
          'Consider historical art periods (Renaissance, Impressionism, etc.)'
        ]
      },
      {
        title: 'DALL-E Composition Control',
        description: 'Control the framing and composition of generated images.',
        template: '[Subject], [Composition type], [Perspective], [Framing], [Additional details]',
        example: 'A red fox in a snowy forest, rule of thirds composition, low angle perspective, shallow depth of field with background bokeh, wildlife photography style',
        tips: [
          'Use photography composition terms (rule of thirds, golden ratio)',
          'Specify camera angle (bird\'s eye, worm\'s eye, eye level)',
          'Include framing elements (through branches, doorway, etc.)',
          'Mention depth of field (shallow for subject focus, deep for landscapes)',
          'Reference focal length effects (wide angle distortion, telephoto compression)'
        ]
      },
      {
        title: 'DALL-E Mood and Atmosphere',
        description: 'Create specific emotional tones in generated images.',
        template: '[Subject] with [mood/atmosphere], [Supporting elements], [Lighting], [Color palette]',
        example: 'A solitary lighthouse on a rocky coast with melancholic atmosphere, stormy clouds, dramatic twilight lighting, muted blue and gray color palette',
        tips: [
          'Use explicit mood descriptors (joyful, mysterious, tense)',
          'Include atmospheric elements (fog, rain, sunshine)',
          'Specify time of day for mood enhancement',
          'Describe color palette that supports the mood',
          'Add environmental details that reinforce the emotion'
        ]
      },
      {
        title: 'DALL-E Technical Style Specification',
        description: 'Generate images with specific technical or medium characteristics.',
        template: '[Subject] as a [technical medium], [Technical details], [Additional style elements]',
        example: 'A hummingbird drinking from a flower as a detailed pencil drawing, fine cross-hatching technique, high contrast, white background, scientific illustration style',
        tips: [
          'Specify exact medium (pencil drawing, oil painting, 3D render)',
          'Include technical details of the medium (cross-hatching, impasto)',
          'Reference illustration styles (scientific, architectural, fashion)',
          'Mention paper or background type',
          'Consider adding era-specific technical limitations'
        ]
      }
    ]
  };
  
  const filteredPrompts = promptTemplates[activeTab].filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.template.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.example.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <Head>
        <title>Prompt Engineering Cheat Sheet - How-ToGuides.com</title>
        <meta name="description" content="Quick reference guide for crafting effective AI prompts. Templates and examples for ChatGPT, Gemini AI, Midjourney, and DALL-E." />
        <meta name="keywords" content="prompt engineering, AI prompts, prompt templates, ChatGPT prompts, Midjourney prompts, DALL-E prompts, Gemini AI prompts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <section className="hero-section">
          <h1 className="page-title">Prompt Engineering Cheat Sheet</h1>
          <p className="page-description">
            Quick reference guide for crafting effective prompts across different AI tools
          </p>
          
          <div className="search-container">
            <input
              type="text"
              placeholder="Search prompt templates..."
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </section>

        <section className="tabs-section">
          <div className="tabs-container">
            {tabs.map(tab => (
              <button
                key={tab.id}
                className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </section>

        <section className="prompts-section">
          {filteredPrompts.length > 0 ? (
            <div className="prompts-grid">
              {filteredPrompts.map((prompt, index) => (
                <div key={index} className="prompt-card">
                  <h3 className="prompt-title">{prompt.title}</h3>
                  <p className="prompt-description">{prompt.description}</p>
                  
                  <div className="template-container">
                    <h4>Template:</h4>
                    <div className="code-block">
                      <pre>{prompt.template}</pre>
                      <button 
                        className="copy-button"
                        onClick={() => {
                          navigator.clipboard.writeText(prompt.template);
                          alert('Template copied to clipboard!');
                        }}
                      >
                        Copy
                      </button>
                    </div>
                  </div>
                  
                  <div className="example-container">
                    <h4>Example:</h4>
                    <div className="code-block">
                      <pre>{prompt.example}</pre>
                      <button 
                        className="copy-button"
                        onClick={() => {
                          navigator.clipboard.writeText(prompt.example);
                          alert('Example copied to clipboard!');
                        }}
                      >
                        Copy
                      </button>
                    </div>
                  </div>
                  
                  <div className="tips-container">
                    <h4>Tips:</h4>
                    <ul className="tips-list">
                      {prompt.tips.map((tip, i) => (
                        <li key={i}>{tip}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-results">
              <p>No prompt templates found matching your search criteria.</p>
              <button 
                className="reset-button"
                onClick={() => setSearchTerm('')}
              >
                Reset Search
              </button>
            </div>
          )}
        </section>

        <section className="resources-section">
          <h2>Related Resources</h2>
          <div className="resources-grid">
            <div className="resource-card">
              <h3>AI Terminology Glossary</h3>
              <p>Comprehensive definitions of key AI terms and concepts</p>
              <Link href="/resources/ai-glossary" className="btn">
                View Glossary
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
              <h3>Prompt Engineering Guides</h3>
              <p>In-depth guides for mastering prompt engineering</p>
              <Link href="/prompt-engineering" className="btn">
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
        
        .tabs-section {
          margin: 2rem 0;
          text-align: center;
        }
        
        .tabs-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.5rem;
          max-width: 800px;
          margin: 0 auto;
        }
        
        .tab-button {
          padding: 0.8rem 1.2rem;
          background-color: #f5f5f5;
          border: 1px solid #ddd;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: bold;
        }
        
        .tab-button:hover {
          background-color: #e9e9e9;
        }
        
        .tab-button.active {
          background-color: #3498db;
          color: white;
          border-color: #3498db;
        }
        
        .prompts-section {
          margin: 3rem 0;
        }
        
        .prompts-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        
        .prompt-card {
          padding: 2rem;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          background-color: #fff;
        }
        
        .prompt-title {
          margin-top: 0;
          margin-bottom: 1rem;
          font-size: 1.5rem;
          color: #333;
        }
        
        .prompt-description {
          margin-bottom: 1.5rem;
          color: #555;
          line-height: 1.6;
        }
        
        .template-container,
        .example-container,
        .tips-container {
          margin-bottom: 1.5rem;
        }
        
        .template-container h4,
        .example-container h4,
        .tips-container h4 {
          margin-top: 0;
          margin-bottom: 0.5rem;
          font-size: 1.1rem;
          color: #333;
        }
        
        .code-block {
          position: relative;
          background-color: #f5f5f5;
          padding: 1rem;
          border-radius: 4px;
          overflow-x: auto;
        }
        
        .code-block pre {
          margin: 0;
          white-space: pre-wrap;
          word-wrap: break-word;
          font-family: monospace;
          line-height: 1.5;
        }
        
        .copy-button {
          position: absolute;
          top: 0.5rem;
          right: 0.5rem;
          padding: 0.3rem 0.6rem;
          background-color: #3498db;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 0.8rem;
          transition: background-color 0.3s ease;
        }
        
        .copy-button:hover {
          background-color: #2980b9;
        }
        
        .tips-list {
          margin: 0;
          padding-left: 1.5rem;
        }
        
        .tips-list li {
          margin-bottom: 0.5rem;
          line-height: 1.5;
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
        
        @media (min-width: 768px) {
          .prompts-grid {
            grid-template-columns: 1fr;
          }
        }
        
        @media (max-width: 768px) {
          .tabs-container {
            flex-direction: column;
            align-items: center;
          }
          
          .tab-button {
            width: 100%;
            max-width: 300px;
          }
          
          .resources-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
