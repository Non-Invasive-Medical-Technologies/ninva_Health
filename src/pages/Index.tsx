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
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';

const Index = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const metrics = [
    { value: '99.9%', label: 'Data Security' },
    { value: '24/7', label: 'Health Monitoring' },
    { value: '50M+', label: 'Health Insights' }
  ];

  const handleGetStarted = () => {
    navigate('/features');
    toast({
      title: "Welcome to Ninva Health!",
      description: "Explore our features to learn more about how we can help you.",
    });
  };

  const handleLearnMore = () => {
    navigate('/about');
  };

  const handleViewDemo = () => {
    navigate('/technology');
    toast({
      title: "Demo Experience",
      description: "Discover how our technology works in real-time.",
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <HeroSection 
          title="Transform Your Healthcare Experience with AI-Powered Precision"
          subtitle="Experience the future of healthcare with Kolibri's advanced monitoring system. Seamlessly integrate professional-grade diagnostics with personalized AI insights for comprehensive health management."
          metrics={metrics}
          onGetStarted={handleGetStarted}
          onLearnMore={handleLearnMore}
          onViewDemo={handleViewDemo}
        />
        <FeaturesSection />
        <HealthVisualizationSection />
        <TechnologySection />
        <DataSection />
        <PrivacySection />
        <CTASection 
          onGetStarted={handleGetStarted}
          onBookDemo={() => {
            toast({
              title: "Demo Booking",
              description: "Our team will contact you shortly to schedule a demo.",
            });
          }}
        />
        <Footer />
        <FloatingChat />
      </div>
    </div>
  );
};

export default Index;