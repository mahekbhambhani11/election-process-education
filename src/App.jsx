import React, { useState, useEffect } from 'react';
import { BookOpen } from 'lucide-react';
import { electionData } from './data/electionData';
import CountrySelector from './components/CountrySelector';
import ElectionTimeline from './components/ElectionTimeline';
import StepDetail from './components/StepDetail';
import FaqAssistant from './components/FaqAssistant';
import ChatAssistant from './components/ChatAssistant';

function App() {
  const [selectedCountryId, setSelectedCountryId] = useState('us');
  const [activeStepId, setActiveStepId] = useState('');
  
  const countryList = Object.values(electionData).map(({ id, name }) => ({ id, name }));
  const currentElectionData = electionData[selectedCountryId];
  
  // Set initial active step when country changes
  useEffect(() => {
    if (currentElectionData && currentElectionData.timeline.length > 0) {
      setActiveStepId(currentElectionData.timeline[0].id);
    }
  }, [selectedCountryId, currentElectionData]);

  const activeStepDetail = currentElectionData?.timeline.find(step => step.id === activeStepId);

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="header-content">
          <div className="header-title">
            <BookOpen className="header-icon" size={28} />
            <span>DemocracyGuide</span>
          </div>
          <CountrySelector 
            countries={countryList} 
            selectedCountry={selectedCountryId} 
            onSelect={setSelectedCountryId} 
          />
        </div>
      </header>

      <main className="main-content">
        <div className="hero-section">
          <h1 className="hero-title">
            Understanding the <span style={{ color: 'var(--primary)' }}>{currentElectionData.name}</span> Election
          </h1>
          <p className="hero-subtitle">
            {currentElectionData.description}
          </p>
        </div>

        <div className="content-grid">
          <div className="timeline-section">
            <ElectionTimeline 
              timeline={currentElectionData.timeline} 
              activeStep={activeStepId} 
              onStepClick={setActiveStepId} 
            />
          </div>
          
          <div className="detail-section">
            <StepDetail step={activeStepDetail} />
          </div>
        </div>

        <div className="faq-section">
          <FaqAssistant faqs={currentElectionData.faqs} />
        </div>
      </main>

      {/* Floating Chat Assistant */}
      <ChatAssistant countryData={currentElectionData} />
    </div>
  );
}

export default App;
