import React from 'react';
import * as Icons from 'lucide-react';

export default function ElectionTimeline({ timeline, activeStep, onStepClick }) {
  return (
    <div className="timeline-container">
      <div className="timeline-line"></div>
      <div className="timeline-steps">
        {timeline.map((step, index) => {
          const IconComponent = Icons[step.icon] || Icons.Circle;
          const isActive = step.id === activeStep;
          
          return (
            <div 
              key={step.id} 
              className={`timeline-step ${isActive ? 'active' : ''}`}
              onClick={() => onStepClick(step.id)}
            >
              <div className="step-icon-wrapper">
                <IconComponent className="step-icon" size={24} />
              </div>
              <div className="step-content">
                <div className="step-number">Step {index + 1}</div>
                <h3 className="step-title">{step.title}</h3>
                <div className="step-date">{step.date}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
