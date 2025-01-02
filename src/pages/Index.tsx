import React from 'react';
import { Navigation } from '@/components/layout/Navigation';
import { HeroSection } from '@/components/sections/HeroSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { TechnologySection } from '@/components/sections/TechnologySection';
import { DataSection } from '@/components/sections/DataSection';
import { PrivacySection } from '@/components/sections/PrivacySection';
import { CTASection } from '@/components/sections/CTASection';
import { HealthVisualizationSection } from '@/components/sections/HealthVisualizationSection';
import { FloatingChat } from '@/components/chat/FloatingChat';
import Footer from '@/components/layout/Footer';

const Index = () => {
  const metrics = [
    { value: '99.9%', label: 'Data Security' },
    { value: '24/7', label: 'Health Monitoring' },
    { value: '50M+', label: 'Health Insights' }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <HeroSection 
          title="Transform Your Healthcare Experience with AI-Powered Precision"
          subtitle="Experience the future of healthcare with Kolibri's advanced monitoring system. Seamlessly integrate professional-grade diagnostics with personalized AI insights for comprehensive health management."
          metrics={metrics}
        />
        <FeaturesSection />
        <HealthVisualizationSection />
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