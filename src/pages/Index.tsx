
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
        <div className="relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ninva-darker mb-6">
                  Transform Your Healthcare Experience with AI-Powered Precision
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                  Experience the future of healthcare with Kolibri's advanced monitoring system. 
                  Seamlessly integrate professional-grade diagnostics with personalized AI insights 
                  for comprehensive health management.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={handleGetStarted}
                    className="bg-ninva hover:bg-ninva-dark text-white px-6 py-3 rounded-lg"
                  >
                    Get Started
                  </button>
                  <button
                    onClick={handleViewDemo}
                    className="border border-ninva text-ninva hover:bg-ninva/5 px-6 py-3 rounded-lg"
                  >
                    View Demo
                  </button>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/lovable-uploads/281a3f4f-4676-423e-bb56-0e01b27c1a34.png"
                  alt="UryScan Device and App Interface"
                  className="w-full h-auto rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
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
