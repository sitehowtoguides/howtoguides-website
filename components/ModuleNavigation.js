import { useState } from 'react';

export default function ModuleNavigation({ modules, currentModule, progress }) {
  return (
    <div className="module-sidebar">
      <div className="progress-container">
        <div className="progress-label">
          Your Progress: {Math.round(progress)}%
        </div>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
      
      <nav className="module-nav">
        {modules.map((module, index) => {
          let status = '';
          let statusText = '';
          
          if (index < currentModule) {
            status = 'completed';
            statusText = 'Completed';
          } else if (index === currentModule) {
            status = 'active';
            statusText = 'In Progress';
          } else {
            status = 'locked';
            statusText = 'Locked';
          }
          
          return (
            <div 
              key={index} 
              className={`module-nav-item ${status}`}
            >
              <span>{index + 1}. {module.title}</span>
              <span className="module-status">{statusText}</span>
            </div>
          );
        })}
      </nav>
    </div>
  );
}
