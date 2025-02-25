
import React from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  return (
    <HeroSection
      onGetStarted={() => navigate('/features')}
      onLearnMore={() => navigate('/about')}
      onViewDemo={() => navigate('/products/uryscan-g1')}
    />
  );
};

export default Index;
