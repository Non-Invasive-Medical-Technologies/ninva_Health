import React from 'react';
import { AboutHeroSection } from '@/components/sections/AboutHeroSection';
import { Navigation } from '@/components/layout/Navigation';
import { FloatingChat } from '@/components/chat/FloatingChat';
import Footer from '@/components/layout/Footer';

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <AboutHeroSection />
      <Footer />
      <FloatingChat />
    </div>
  );
};

export default About;