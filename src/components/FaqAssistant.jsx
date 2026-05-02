import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

export default function FaqAssistant({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="faq-header">
        <HelpCircle className="faq-icon" size={28} />
        <h2>Common Questions</h2>
      </div>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className={`faq-item ${openIndex === index ? 'open' : ''}`}
          >
            <button 
              className="faq-question" 
              onClick={() => toggleFaq(index)}
              aria-expanded={openIndex === index}
            >
              <span>{faq.question}</span>
              {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            <div 
              className="faq-answer-wrapper"
              style={{ maxHeight: openIndex === index ? '200px' : '0' }}
            >
              <div className="faq-answer">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
