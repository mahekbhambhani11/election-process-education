import React from 'react';
import * as Icons from 'lucide-react';

export default function StepDetail({ step }) {
  if (!step) return null;
  
  const IconComponent = Icons[step.icon] || Icons.Info;

  return (
    <div className="step-detail-card">
      <div className="step-detail-header">
        <div className="detail-icon-wrapper">
          <IconComponent size={32} className="detail-icon" />
        </div>
        <div className="detail-title-group">
          <h2>{step.title}</h2>
          <span className="detail-date">{step.date}</span>
        </div>
      </div>
      <div className="step-detail-content">
        <p>{step.description}</p>
      </div>
      {step.link && (
        <div className="step-detail-footer">
          <a href={step.link} target="_blank" rel="noopener noreferrer" className="action-button-link">
            <button className="action-button">Learn More</button>
          </a>
        </div>
      )}
    </div>
  );
}
