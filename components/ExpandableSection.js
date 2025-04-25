import { useState } from 'react';

export default function ExpandableSection({ title, children }) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div className="expandable-section">
      <div 
        className="expandable-header" 
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h4>{title}</h4>
        <span>{isExpanded ? '−' : '+'}</span>
      </div>
      {isExpanded && (
        <div className="expandable-content">
          {children}
        </div>
      )}
    </div>
  );
}
