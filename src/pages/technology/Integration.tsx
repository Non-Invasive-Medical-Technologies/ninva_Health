import React from 'react';
import { Navigation } from '@/components/layout/Navigation';
import { HealthcareFlowsSection } from '@/components/sections/HealthcareFlowsSection';
import { FloatingChat } from '@/components/chat/FloatingChat';
import Footer from '@/components/layout/Footer';

const Integration = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HealthcareFlowsSection />
      <Footer />
      <FloatingChat />
    </div>
  );
};

export default Integration;