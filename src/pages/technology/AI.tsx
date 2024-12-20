import React from 'react';
import { Navigation } from '@/components/layout/Navigation';
import { AIHeroSection } from '@/components/sections/AIHeroSection';

const AI = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <AIHeroSection />
      {/* Additional sections can be added here */}
    </div>
  );
};

export default AI;
