import React from 'react';
import { Navigation } from '@/components/layout/Navigation';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import { CTASection } from '@/components/sections/CTASection';
import { FloatingChat } from '@/components/chat/FloatingChat';
import Footer from '@/components/layout/Footer';

const Features = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <FeaturesSection />
      <HowItWorksSection />
      <CTASection />
      <Footer />
      <FloatingChat />
    </div>
  );
};

export default Features;