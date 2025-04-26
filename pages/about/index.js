import Link from 'next/link';
import Head from 'next/head';

export default function About() {
  return (
    <div className="container">
      <Head>
        <title>About How-ToGuides.com - Our Mission and Team</title>
        <meta name="description" content="Learn about How-ToGuides.com, our mission to make AI accessible through comprehensive guides, and the team behind our tutorials." />
        <meta name="keywords" content="about how-toguides, AI tutorials, AI guides, how-to guides team" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <section className="hero-section">
          <h1 className="page-title">About How-ToGuides.com</h1>
          <p className="page-description">
            Making AI accessible through comprehensive, step-by-step guides
          </p>
        </section>

        <section className="mission-section">
          <div className="content-container">
            <h2>Our Mission</h2>
            <p>
              At How-ToGuides.com, we believe that artificial intelligence should be accessible to everyone, 
              regardless of technical background or expertise. Our mission is to demystify AI tools through 
              comprehensive, easy-to-follow guides that help people harness the power of AI in their work and daily lives.
            </p>
            <p>
              We're committed to creating the most thorough, accurate, and up-to-date tutorials for popular AI tools 
              like ChatGPT, Midjourney, DALL-E, and Gemini AI. Our step-by-step approach ensures that beginners can 
              get started quickly while also providing advanced techniques for experienced users.
            </p>
          </div>
        </section>

        <section className="values-section">
          <div className="content-container">
            <h2>Our Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <h3>Accessibility</h3>
                <p>
                  We believe AI should be accessible to everyone. Our guides use clear language, avoid unnecessary jargon, 
                  and break down complex concepts into digestible steps.
                </p>
              </div>
              <div className="value-card">
                <h3>Thoroughness</h3>
                <p>
                  We don't just scratch the surface. Our guides are comprehensive, covering everything from basic 
                  concepts to advanced techniques, troubleshooting, and best practices.
                </p>
              </div>
              <div className="value-card">
                <h3>Accuracy</h3>
                <p>
                  We rigorously test all our guides to ensure they're accurate and up-to-date. When AI tools change, 
                  we promptly update our content to reflect the latest features and interfaces.
                </p>
              </div>
              <div className="value-card">
                <h3>Practicality</h3>
                <p>
                  Our guides focus on practical applications and real-world use cases. We help you understand not just 
                  how to use AI tools, but how to apply them to solve problems and enhance your work.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="approach-section">
          <div className="content-container">
            <h2>Our Approach</h2>
            <p>
              What sets How-ToGuides.com apart is our structured, comprehensive approach to creating AI tutorials:
            </p>
            <div className="approach-steps">
              <div className="approach-step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3>Research & Testing</h3>
                  <p>
                    We thoroughly research each AI tool and test all features extensively before creating our guides. 
                    This hands-on approach ensures we understand the nuances and can anticipate common challenges.
                  </p>
                </div>
              </div>
              <div className="approach-step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3>Structured Learning Path</h3>
                  <p>
                    Our guides follow a logical progression from basic to advanced concepts, allowing readers to 
                    build their skills step by step. We include clear objectives at each stage so you know what 
                    you'll be able to accomplish.
                  </p>
                </div>
              </div>
              <div className="approach-step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3>Visual Documentation</h3>
                  <p>
                    We include detailed screenshots, diagrams, and visual examples to illustrate key concepts and 
                    interface elements. Visual learners can follow along easily, and everyone benefits from seeing 
                    exactly what to expect.
                  </p>
                </div>
              </div>
              <div className="approach-step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h3>Practical Examples</h3>
                  <p>
                    Every guide includes real-world examples and use cases to help you apply what you've learned. 
                    We show you not just the "how" but also the "why" and "when" to use specific features.
                  </p>
                </div>
              </div>
              <div className="approach-step">
                <div className="step-number">5</div>
                <div className="step-content">
                  <h3>Regular Updates</h3>
                  <p>
                    AI tools evolve rapidly. We continuously monitor changes and update our guides to ensure they 
                    remain accurate and relevant. Our revision history shows when content was last updated.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="team-section">
          <div className="content-container">
            <h2>Our Team</h2>
            <p className="team-intro">
              How-ToGuides.com is created by a team of AI enthusiasts, educators, and content specialists who are 
              passionate about making technology accessible to everyone.
            </p>
            <div className="team-members">
              <div className="team-member">
                <div className="member-avatar">
                  <div className="avatar-placeholder">JD</div>
                </div>
                <h3>John Doe</h3>
                <p className="member-title">Founder & Lead Content Strategist</p>
                <p className="member-bio">
                  With over 10 years of experience in technology education, John founded How-ToGuides.com to help 
                  bridge the gap between powerful AI tools and everyday users.
                </p>
              </div>
              <div className="team-member">
                <div className="member-avatar">
                  <div className="avatar-placeholder">JS</div>
                </div>
                <h3>Jane Smith</h3>
                <p className="member-title">AI Research Specialist</p>
                <p className="member-bio">
                  Jane brings her expertise in machine learning and natural language processing to ensure our guides 
                  are technically accurate and reflect best practices in AI usage.
                </p>
              </div>
              <div className="team-member">
                <div className="member-avatar">
                  <div className="avatar-placeholder">MJ</div>
                </div>
                <h3>Michael Johnson</h3>
                <p className="member-title">Content Editor & UX Specialist</p>
                <p className="member-bio">
                  Michael ensures our guides are clear, accessible, and user-friendly. His background in UX design 
                  helps us create tutorials that are easy to follow and visually engaging.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section">
          <div className="content-container">
            <h2>Contact Us</h2>
            <p>
              Have questions, suggestions, or feedback about our guides? We'd love to hear from you! You can reach our team at:
            </p>
            <div className="contact-info">
              <p><strong>Email:</strong> <a href="mailto:contact@how-toguides.com">contact@how-toguides.com</a></p>
              <p><strong>Twitter:</strong> <a href="https://twitter.com/howtoguides" target="_blank" rel="noopener noreferrer">@howtoguides</a></p>
            </div>
            <p>
              We're also open to collaboration opportunities and content partnerships. If you're interested in working with us, 
              please reach out with details about your proposal.
            </p>
          </div>
        </section>

        <section className="cta-section">
          <div className="content-container">
            <h2>Start Exploring Our Guides</h2>
            <p>
              Ready to dive into the world of AI? Check out our comprehensive guides and resources to get started.
            </p>
            <div className="cta-buttons">
              <Link href="/guides" className="cta-button primary">
                Browse AI Guides
              </Link>
              <Link href="/resources" className="cta-button secondary">
                Explore Resources
              </Link>
            </div>
          </div>
        </section>
      </main>

      <style jsx>{`
        .hero-section {
          text-align: center;
          margin-bottom: 3rem;
          padding: 3rem 0;
          background-color: #f9f9f9;
          border-radius: 8px;
        }
        
        .page-title {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }
        
        .page-description {
          font-size: 1.2rem;
          color: #666;
          max-width: 800px;
          margin: 0 auto;
        }
        
        .content-container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
        
        .mission-section,
        .values-section,
        .approach-section,
        .team-section,
        .contact-section,
        .cta-section {
          margin-bottom: 4rem;
        }
        
        .mission-section h2,
        .values-section h2,
        .approach-section h2,
        .team-section h2,
        .contact-section h2,
        .cta-section h2 {
          font-size: 2rem;
          margin-bottom: 1.5rem;
          text-align: center;
        }
        
        .mission-section p,
        .contact-section p {
          font-size: 1.1rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
          color: #444;
        }
        
        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }
        
        .value-card {
          padding: 1.5rem;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          background-color: #fff;
        }
        
        .value-card h3 {
          font-size: 1.3rem;
          margin-top: 0;
          margin-bottom: 1rem;
          color: #3498db;
        }
        
        .value-card p {
          margin: 0;
          line-height: 1.6;
          color: #555;
        }
        
        .approach-steps {
          margin-top: 2rem;
        }
        
        .approach-step {
          display: flex;
          margin-bottom: 2rem;
          align-items: flex-start;
        }
        
        .step-number {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: #3498db;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 1.2rem;
          flex-shrink: 0;
          margin-right: 1.5rem;
          margin-top: 0.5rem;
        }
        
        .step-content {
          flex-grow: 1;
        }
        
        .step-content h3 {
          font-size: 1.3rem;
          margin-top: 0;
          margin-bottom: 0.5rem;
          color: #333;
        }
        
        .step-content p {
          margin: 0;
          line-height: 1.6;
          color: #555;
        }
        
        .team-intro {
          text-align: center;
          font-size: 1.1rem;
          line-height: 1.6;
          margin-bottom: 2rem;
          color: #444;
        }
        
        .team-members {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 2rem;
        }
        
        .team-member {
          text-align: center;
          padding: 1.5rem;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          background-color: #fff;
        }
        
        .member-avatar {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          margin: 0 auto 1rem;
          overflow: hidden;
        }
        
        .avatar-placeholder {
          width: 100%;
          height: 100%;
          background-color: #3498db;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          font-weight: bold;
        }
        
        .team-member h3 {
          font-size: 1.3rem;
          margin-top: 0;
          margin-bottom: 0.5rem;
          color: #333;
        }
        
        .member-title {
          font-size: 0.9rem;
          color: #3498db;
          margin-top: 0;
          margin-bottom: 1rem;
          font-weight: bold;
        }
        
        .member-bio {
          margin: 0;
          line-height: 1.6;
          color: #555;
          font-size: 0.95rem;
        }
        
        .contact-info {
          background-color: #f9f9f9;
          padding: 1.5rem;
          border-radius: 8px;
          margin: 1.5rem 0;
        }
        
        .contact-info p {
          margin: 0.5rem 0;
        }
        
        .contact-info a {
          color: #3498db;
          text-decoration: none;
        }
        
        .contact-info a:hover {
          text-decoration: underline;
        }
        
        .cta-section {
          text-align: center;
          background-color: #f9f9f9;
          padding: 3rem 0;
          border-radius: 8px;
        }
        
        .cta-buttons {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-top: 2rem;
          flex-wrap: wrap;
        }
        
        .cta-button {
          display: inline-block;
          padding: 0.8rem 1.5rem;
          border-radius: 4px;
          font-weight: bold;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        
        .cta-button.primary {
          background-color: #3498db;
          color: white;
        }
        
        .cta-button.primary:hover {
          background-color: #2980b9;
        }
        
        .cta-button.secondary {
          background-color: white;
          color: #3498db;
          border: 2px solid #3498db;
        }
        
        .cta-button.secondary:hover {
          background-color: #f5f5f5;
        }
        
        @media (max-width: 768px) {
          .values-grid,
          .team-members {
            grid-template-columns: 1fr;
          }
          
          .approach-step {
            flex-direction: column;
          }
          
          .step-number {
            margin-bottom: 1rem;
          }
          
          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }
          
          .cta-button {
            width: 100%;
            max-width: 300px;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
}
