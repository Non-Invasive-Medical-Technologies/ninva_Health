import React from 'react';
import { Navigation } from '@/components/layout/Navigation';
import { HeroSection } from '@/components/sections/HeroSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import { CTASection } from '@/components/sections/CTASection';
import { FloatingChat } from '@/components/chat/FloatingChat';
import Footer from '@/components/layout/Footer';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';

const Features = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const metrics = [
    { value: '99.9%', label: 'Accuracy Rate' },
    { value: '5min', label: 'Analysis Time' },
    { value: '50+', label: 'Health Parameters' }
  ];

  const handleGetStarted = () => {
    navigate('/technology');
    toast({
      title: "Getting Started",
      description: "Let's explore Ninva Health's advanced features.",
    });
  };

  const handleLearnMore = () => {
    navigate('/about');
  };

  const handleViewDemo = () => {
    navigate('/technology');
    toast({
      title: "Demo Experience",
      description: "Watch how our technology works in real-time.",
    });
  };

  const handleBookDemo = () => {
    toast({
      title: "Demo Booking",
      description: "Our team will contact you shortly to schedule a demo.",
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection
        title="Revolutionary health insights, Unmatched data"
        subtitle="Know your general health parameters, CBC, Heart Rate Variability, Cardiac Pathologies and various metabolism related analysis, all within less than five minutes."
        metrics={metrics}
        onGetStarted={handleGetStarted}
        onLearnMore={handleLearnMore}
        onViewDemo={handleViewDemo}
      />
      <FeaturesSection />
      <HowItWorksSection />
      <CTASection 
        onGetStarted={handleGetStarted}
        onBookDemo={handleBookDemo}
      />
      <Footer />
      <FloatingChat />
    </div>
  );
};

export default Features;