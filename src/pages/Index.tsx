import React from 'react';
import { Navigation } from '@/components/layout/Navigation';
import { HeroSection } from '@/components/sections/HeroSection';
import { DataSection } from '@/components/sections/DataSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { PrivacySection } from '@/components/sections/PrivacySection';
import { CTASection } from '@/components/sections/CTASection';

const Index = () => {
  console.log('[Index] Rendering Index page');

  React.useEffect(() => {
    console.log('[Index] Component mounted');
    return () => {
      console.log('[Index] Component unmounted');
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <HeroSection />
      <DataSection />
      <FeaturesSection />
      <PrivacySection />
      <CTASection />
    </div>
  );
};

export default Index;