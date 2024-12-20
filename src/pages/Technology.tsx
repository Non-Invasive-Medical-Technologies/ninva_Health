import React from 'react';
import { Navigation } from '@/components/layout/Navigation';
import { TechnologySection } from '@/components/sections/TechnologySection';
import { FloatingChat } from '@/components/chat/FloatingChat';
import Footer from '@/components/layout/Footer';

const Technology = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <TechnologySection />
      <Footer />
      <FloatingChat />
    </div>
  );
};

export default Technology;