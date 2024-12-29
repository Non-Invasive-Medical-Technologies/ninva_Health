import React from 'react';
import { Navigation } from '@/components/layout/Navigation';
import { HeroSection } from '@/components/sections/HeroSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import { CTASection } from '@/components/sections/CTASection';
import { FloatingChat } from '@/components/chat/FloatingChat';
import Footer from '@/components/layout/Footer';
import { useNavigate } from 'react-router-dom';

const Features = () => {
  const navigate = useNavigate();
  
  const metrics = [
    { value: '99.9%', label: 'Accuracy Rate' },
    { value: '5min', label: 'Analysis Time' },
    { value: '50+', label: 'Health Parameters' }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection
        title="Revolutionary health insights, Unmatched data."
        subtitle="Know your general health parameters, CBC, Heart Rate Variability, Cardiac Pathologies and various metabolism related analysis, all within less than five minutes."
        metrics={metrics}
        primaryAction={{
          label: "Get Started",
          onClick: () => navigate('/technology')
        }}
        secondaryAction={{
          label: "Learn More",
          onClick: () => navigate('/technology/ai')
        }}
      />
      <FeaturesSection />
      <HowItWorksSection />
      <CTASection />
      <Footer />
      <FloatingChat />
    </div>
  );
};

export default Features;