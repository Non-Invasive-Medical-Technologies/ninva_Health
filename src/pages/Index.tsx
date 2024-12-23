import React from 'react';
import { Navigation } from '@/components/layout/Navigation';
import { HeroSection } from '@/components/sections/HeroSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { TechnologySection } from '@/components/sections/TechnologySection';
import { DataSection } from '@/components/sections/DataSection';
import { PrivacySection } from '@/components/sections/PrivacySection';
import { CTASection } from '@/components/sections/CTASection';
import { FloatingChat } from '@/components/chat/FloatingChat';
import Footer from '@/components/layout/Footer';

const Index = () => {
  console.log('[Index] Rendering Index page');
  
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16"> {/* Add padding-top to account for fixed header */}
        <HeroSection />
        <FeaturesSection />
        <TechnologySection />
        <DataSection />
        <PrivacySection />
        <CTASection />
        <Footer />
        <FloatingChat />
      </div>
    </div>
  );
};

export default Index;