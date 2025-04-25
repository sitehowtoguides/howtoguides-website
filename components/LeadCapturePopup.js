import { useState } from 'react';

export default function LeadCapturePopup({ isOpen, onClose, title, description, benefits }) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  if (!isOpen) return null;
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real implementation, this would send the email to a backend service
    console.log('Email submitted from popup:', email);
    setSubmitted(true);
  };
  
  return (
    <div className="popup-overlay">
      <div className="popup">
        <button className="popup-close" onClick={onClose}>×</button>
        
        <h2>{title || 'Get Your Free ChatGPT Beginner\'s Kit'}</h2>
        
        <div className="popup-columns">
          <div>
            <h3>What You'll Get:</h3>
            <ul className="lead-benefits">
              {benefits && benefits.map((benefit, index) => (
                <li key={index}>✓ {benefit}</li>
              ))}
            </ul>
          </div>
          
          <div>
            {!submitted ? (
              <form onSubmit={handleSubmit}>
                <p>{description || 'Enter your email to get instant access to the complete kit:'}</p>
                <input
                  type="email"
                  className="lead-form-input"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="btn">
                  Get Free Kit
                </button>
                <p className="form-disclaimer">
                  By signing up, you'll also receive our AI newsletter with the latest tips and updates. You can unsubscribe anytime.
                </p>
              </form>
            ) : (
              <div className="success-message">
                <h3>Thank You!</h3>
                <p>Your ChatGPT Beginner's Kit has been sent to your email.</p>
                <p>Please check your inbox (and spam folder) for the download links.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
