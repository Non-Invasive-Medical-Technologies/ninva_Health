import React from 'react';
import { Navigation } from '@/components/layout/Navigation';
import { HeroSection } from '@/components/sections/HeroSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { TechnologySection } from '@/components/sections/TechnologySection';
import { PrivacySection } from '@/components/sections/PrivacySection';
import { CTASection } from '@/components/sections/CTASection';
import VisualSitemap from '@/components/sections/VisualSitemap';

const Index = () => {
  const isDevelopment = import.meta.env.DEV;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <TechnologySection />
      <PrivacySection />
      <CTASection />
      {isDevelopment && <VisualSitemap />}
    </div>
  );
};

export default Index;