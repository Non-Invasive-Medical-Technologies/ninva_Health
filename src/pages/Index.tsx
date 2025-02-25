
import React from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { FeatureHighlights } from '@/components/sections/home/FeatureHighlights';
import { HealthVisualizationSection } from '@/components/sections/HealthVisualizationSection';
import { CTASection } from '@/components/sections/CTASection';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <HeroSection
        onGetStarted={() => navigate('/features')}
        onLearnMore={() => navigate('/about')}
        onViewDemo={() => navigate('/products/uryscan-g1')}
      />
      <FeatureHighlights />
      <HealthVisualizationSection />
      <CTASection 
        onGetStarted={() => navigate('/features')}
        onBookDemo={() => navigate('/products/uryscan-g1')}
      />
    </div>
  );
};

export default Index;
