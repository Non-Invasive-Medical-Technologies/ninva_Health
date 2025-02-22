
import React from 'react';
import { Navigation } from '@/components/layout/Navigation';
import { UryscanHeroSection } from '@/components/sections/UryscanHeroSection';
import { CTASection } from '@/components/sections/CTASection';
import { FloatingChat } from '@/components/chat/FloatingChat';
import Footer from '@/components/layout/Footer';
import { useToast } from '@/components/ui/use-toast';
import { NutritionBadges } from '@/components/uryscan/NutritionBadges';
import { FeaturesGrid } from '@/components/uryscan/FeaturesGrid';
import { DeviceShowcase } from '@/components/uryscan/DeviceShowcase';
import { AppFeatures } from '@/components/uryscan/AppFeatures';

const UryscanG1 = () => {
  const { toast } = useToast();

  const metrics = [
    { value: '99.9%', label: 'Accuracy Rate' },
    { value: '30sec', label: 'Analysis Time' },
    { value: '25+', label: 'Parameters' }
  ];

  const nutritionBadges = [
    'Ketone levels',
    'Vitamin C levels',
    'Bio-Acidity',
    'HydroStatus'
  ];

  const handleGetStarted = () => {
    toast({
      title: "Thanks for your interest!",
      description: "Our team will contact you shortly with more information.",
    });
  };

  const handleLearnMore = () => {
    const element = document.getElementById('features');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleViewDemo = () => {
    toast({
      title: "Demo Request",
      description: "We'll reach out to schedule a demo of UryScan G1.",
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <UryscanHeroSection 
          title="Advanced nutrition parameters"
          subtitle="UryScan G1 brings precise urine analysis home, helping you capture key nutritional insights for optimal health monitoring."
          metrics={metrics}
          onGetStarted={handleGetStarted}
          onLearnMore={handleLearnMore}
          onViewDemo={handleViewDemo}
        />
        
        <NutritionBadges badges={nutritionBadges} />
        <FeaturesGrid />
        <DeviceShowcase />
        <AppFeatures />

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

export default UryscanG1;
