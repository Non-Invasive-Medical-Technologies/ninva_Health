import React from 'react';
import { Navigation } from '@/components/layout/Navigation';
import { HeroSection } from '@/components/sections/HeroSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { PrivacySection } from '@/components/sections/PrivacySection';
import { CTASection } from '@/components/sections/CTASection';
import { VisualSitemap } from '@/components/sections/VisualSitemap';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <PrivacySection />
      <CTASection />
      <VisualSitemap />
    </div>
  );
};

export default Index;