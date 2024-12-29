import React from 'react';
import { Navigation } from '@/components/layout/Navigation';
import { HeroSection } from '@/components/sections/HeroSection';
import { TechnologySection } from '@/components/sections/TechnologySection';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { FloatingChat } from '@/components/chat/FloatingChat';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';

const Technology = () => {
  const metrics = [
    { value: '2020', label: 'Patent Granted' },
    { value: '10+', label: 'Years Research' },
    { value: '99.9%', label: 'Accuracy Rate' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-ninva-light to-white">
      <Navigation />
      <main>
        <section className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <h1 className="text-4xl md:text-5xl font-bold text-medical-primary">
                  Advanced Health Analytics Technology
                </h1>
                <p className="text-lg text-gray-600">
                  With just one action, Kolibri provides a comprehensive assessment of your cardiovascular and respiratory health. Experience the effortless and simultaneous measurement of your electrocardiogram and blood oxygen saturation levels, ensuring you stay informed about your well-being.
                </p>
                <div className="grid grid-cols-3 gap-4">
                  {metrics.map((metric, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-medical-primary">{metric.value}</div>
                      <div className="text-sm text-gray-600">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <img
                  src="/lovable-uploads/bad4244e-4441-4ff0-9900-6058de450767.png"
                  alt="Kolibri Health Device"
                  className="w-full max-w-md mx-auto drop-shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-b from-white to-ninva-light/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="prose prose-lg">
              <p className="text-ninva-complementary-dark leading-relaxed">
                The KOLIBRI® health analyzer technology represents a groundbreaking advancement in the analysis of heart activity (HA) signals, which are critical indicators of your overall health. Our state-of-the-art system employs an innovative autoregressive linear prediction model tailored to extract valuable properties from HA signals to accurately determine various biochemical parameters.
              </p>
              
              <p className="text-ninva-complementary-dark leading-relaxed mt-6">
                Over the past decade, we have amassed a wealth of data from extensive clinical and pre-clinical trials, establishing a strong foundation for the development of sophisticated neural network algorithms by our renowned experts in non-invasive medical technologies.
              </p>
            </div>
          </div>
        </section>

        <HowItWorksSection />
        <TechnologySection />
      </main>
      <Footer />
      <FloatingChat />
    </div>
  );
};

export default Technology;