import { useState } from 'react';

export default function LeadCaptureForm({ title, description, benefits, buttonText }) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real implementation, this would send the email to a backend service
    console.log('Email submitted:', email);
    setSubmitted(true);
  };
  
  return (
    <div className="lead-form">
      <h3>{title || 'Get the Complete Guide'}</h3>
      <p>{description || 'Enter your email to receive the full guide and bonus materials.'}</p>
      
      {benefits && (
        <ul className="lead-benefits">
          {benefits.map((benefit, index) => (
            <li key={index}>✓ {benefit}</li>
          ))}
        </ul>
      )}
      
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            className="lead-form-input"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="btn">
            {buttonText || 'Send Me the Guide'}
          </button>
        </form>
      ) : (
        <div className="success-message">
          <p>Thank you! Check your email for the guide.</p>
        </div>
      )}
    </div>
  );
}
