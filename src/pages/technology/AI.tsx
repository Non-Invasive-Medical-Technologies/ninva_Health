import React from 'react';
import { Navigation } from '@/components/layout/Navigation';
import { AIHeroSection } from '@/components/sections/AIHeroSection';
import { Footer } from '@/components/layout/Footer';

const AI = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <AIHeroSection />
      <Footer />
    </div>
  );
};

export default AI;