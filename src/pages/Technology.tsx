import React from 'react';
import { Navigation } from '@/components/layout/Navigation';
import { TechnologySection } from '@/components/sections/TechnologySection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import { FloatingChat } from '@/components/chat/FloatingChat';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Technology = () => {
  const metrics = [
    { value: '2020', label: 'Patent Granted' },
    { value: '10+', label: 'Years Research' },
    { value: '99.9%', label: 'Accuracy Rate' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-surface-light to-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <h1 className="text-4xl md:text-5xl font-bold">
                <span className="text-medical-primary">Advanced Health</span>
                <span className="block mt-2">Analytics Technology</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                With just one action, Kolibri provides a comprehensive assessment of your cardiovascular and respiratory health. Experience the effortless and simultaneous measurement of your electrocardiogram and blood oxygen saturation levels.
              </p>
              <div className="grid grid-cols-3 gap-8">
                {metrics.map((metric, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center p-4 rounded-lg bg-surface-light"
                  >
                    <div className="text-2xl font-bold text-medical-primary">{metric.value}</div>
                    <div className="text-sm text-gray-600 mt-1">{metric.label}</div>
                  </motion.div>
                ))}
              </div>
              <div className="flex gap-4">
                <Button className="bg-medical-primary hover:bg-medical-primary/90">
                  Learn More
                </Button>
                <Button variant="outline" className="border-medical-primary text-medical-primary hover:bg-medical-primary/5">
                  Watch Demo
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10">
                <img
                  src="/lovable-uploads/bad4244e-4441-4ff0-9900-6058de450767.png"
                  alt="Kolibri Health Device"
                  className="w-full max-w-md mx-auto drop-shadow-2xl"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-medical-primary/10 to-medical-secondary/10 rounded-3xl transform rotate-3 scale-95 -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technology Overview */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-surface-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none"
          >
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              The KOLIBRI® health analyzer technology represents a groundbreaking advancement in the analysis of heart activity (HA) signals, which are critical indicators of your overall health. Our state-of-the-art system employs an innovative autoregressive linear prediction model tailored to extract valuable properties from HA signals.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Over the past decade, we have amassed a wealth of data from extensive clinical and pre-clinical trials, establishing a strong foundation for the development of sophisticated neural network algorithms by our renowned experts in non-invasive medical technologies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section with improved spacing */}
      <section className="py-16 md:py-24 bg-white">
        <HowItWorksSection />
      </section>

      {/* Technology Details Section with consistent spacing */}
      <section className="py-16 md:py-24 bg-surface-light">
        <TechnologySection />
      </section>

      <Footer />
      <FloatingChat />
    </div>
  );
};

export default Technology;