import React, { useState, useEffect } from 'react';
import { MobileApp } from '../health/flows/MobileApp';
import { TelemedicineCard } from '../health/flows/TelemedicineCard';
import { HealthReport } from '../health/flows/HealthReport';
import './flows/styles.css';

const HealthcareFlows = () => {
  const [activeScreen, setActiveScreen] = useState('home');
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [showAIInsight, setShowAIInsight] = useState(false);
  const [callActive, setCallActive] = useState(false);

  // Animation Effects
  useEffect(() => {
    if (activeScreen === 'measure') {
      const timer = setInterval(() => {
        setAnalysisProgress(prev => {
          if (prev >= 100) {
            clearInterval(timer);
            setActiveScreen('ai');
            return 0;
          }
          return prev + 1;
        });
      }, 50);
      return () => clearInterval(timer);
    }
  }, [activeScreen]);

  useEffect(() => {
    if (activeScreen === 'ai') {
      const timer = setTimeout(() => {
        setShowAIInsight(true);
      }, 1500);
      return () => clearTimeout(timer);
    } else {
      setShowAIInsight(false);
    }
  }, [activeScreen]);

  return (
    <div className="space-y-24 p-8">
      <MobileApp 
        activeScreen={activeScreen}
        setActiveScreen={setActiveScreen}
        analysisProgress={analysisProgress}
        showAIInsight={showAIInsight}
      />
      <TelemedicineCard 
        callActive={callActive}
        setCallActive={setCallActive}
      />
      <HealthReport />
    </div>
  );
};

export default HealthcareFlows;