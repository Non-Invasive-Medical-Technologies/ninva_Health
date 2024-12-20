import React from 'react';
import { Navigation } from '@/components/layout/Navigation';
import { PrivacySection } from '@/components/sections/PrivacySection';
import { FloatingChat } from '@/components/chat/FloatingChat';
import Footer from '@/components/layout/Footer';

const Security = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <PrivacySection />
      <Footer />
      <FloatingChat />
    </div>
  );
};

export default Security;