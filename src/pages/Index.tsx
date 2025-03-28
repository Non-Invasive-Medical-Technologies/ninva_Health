
import React from 'react';
import { Navigation } from '@/components/layout/Navigation';
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
import { RainbowButton } from '@/components/ui/rainbow-button';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { AnnouncementPill } from '@/components/ui/announcement-pill';
import { Waves } from '@/components/ui/waves';

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
          <div className="absolute inset-0 bg-transparent overflow-hidden" style={{ height: "calc(100% + 400px)" }}>
            <Waves 
              lineColor="rgba(29, 97, 122, 0.3)"
              backgroundColor="transparent" 
              waveSpeedX={0.015}
              waveSpeedY={0.008}
              waveAmpX={25}
              waveAmpY={15}
              xGap={15}
              yGap={30}
              showEquations={false}
            />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24 relative z-10">
            <div className="flex justify-center w-full mb-8">
              <AnnouncementPill 
                message="Experience the future of Healthcare now in Dubai" 
                onClick={() => {
                  navigate('/about');
                  toast({
                    title: "Dubai Launch",
                    description: "Learn more about our Dubai operations and services.",
                  });
                }}
              />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ninva-darker leading-tight tracking-tight mb-6">
                  Non-invasive, AI-powered at-home health screening.
                </h1>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
                  Experience the future of healthcare with Ninva's automated health screening device. 
                  Smaller than a smartphone, this device delivers precise health insights. 
                  Effortlessly measure heart rate, blood oxygen levels, and body temperature.
                </p>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
                  This device elevates telehealth to a whole new level.
                </p>
                <div className="flex flex-wrap gap-4">
                  <RainbowButton
                    onClick={handleGetStarted}
                    className="h-12 px-8"
                  >
                    Get Started
                  </RainbowButton>
                  <Button 
                    variant="outline" 
                    className="border-2 border-ninva text-ninva hover:bg-ninva/5 h-12 px-8"
                    onClick={handleViewDemo}
                  >
                    View Demo
                  </Button>
                </div>
              </div>
              <motion.div 
                className="relative"
                animate={{
                  y: [0, -10, 0],
                  scale: [1, 1.02, 1]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                <img
                  src="/lovable-uploads/2afd0ae0-a1fa-4901-8295-713b02a4b474.png"
                  alt="UryScan Device"
                  className="w-full h-auto object-contain"
                  style={{
                    maxWidth: '600px',
                    margin: '0 auto',
                    filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.1))'
                  }}
                />
              </motion.div>
            </div>
          </div>
        </div>
        
        <div className="relative z-10 -mt-16">
          <FeaturesSection />
        </div>
        
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
