import React from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { TechnologySection } from '@/components/sections/TechnologySection';
import { DataSection } from '@/components/sections/DataSection';
import { PrivacySection } from '@/components/sections/PrivacySection';
import { CTASection } from '@/components/sections/CTASection';
import { FloatingChat } from '@/components/chat/FloatingChat';
import Footer from '@/components/layout/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <TechnologySection />
      <DataSection />
      <PrivacySection />
      <CTASection />
      <Footer />
      <FloatingChat />
    </div>
  );
};

export default Index;