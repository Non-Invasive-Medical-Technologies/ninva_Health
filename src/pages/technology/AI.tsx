import React from 'react';
import { Navigation } from '@/components/layout/Navigation';
import { AIHeroSection } from '@/components/sections/AIHeroSection';
import Footer from '@/components/layout/Footer';
import { FloatingChat } from '@/components/chat/FloatingChat';

const AI = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-surface-light to-white">
      <Navigation />
      <AIHeroSection />
      <Footer />
      <FloatingChat />
    </div>
  );
};

export default AI;