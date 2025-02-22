
import React from 'react';
import { Navigation } from '@/components/layout/Navigation';
import { HeroSection } from '@/components/sections/HeroSection';
import { CTASection } from '@/components/sections/CTASection';
import { FloatingChat } from '@/components/chat/FloatingChat';
import Footer from '@/components/layout/Footer';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';
import { motion } from 'framer-motion';

const UryscanG1 = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const metrics = [
    { value: '99.9%', label: 'Accuracy Rate' },
    { value: '30sec', label: 'Analysis Time' },
    { value: '12+', label: 'Parameters' }
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
        <HeroSection 
          title="UryScan G1: Advanced Urinalysis Solution"
          subtitle="Revolutionary urine analysis device combining AI-powered diagnostics with professional-grade accuracy for comprehensive health screening."
          metrics={metrics}
          onGetStarted={handleGetStarted}
          onLearnMore={handleLearnMore}
          onViewDemo={handleViewDemo}
        />
        
        {/* Placeholder for product-specific content */}
        <section id="features" className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900">
                Coming Soon
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                We're preparing detailed information about UryScan G1. Check back soon for more details.
              </p>
            </motion.div>
          </div>
        </section>

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
