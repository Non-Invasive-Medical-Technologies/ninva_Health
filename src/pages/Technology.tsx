import React from 'react';
import { Navigation } from '@/components/layout/Navigation';
import { TechnologySection } from '@/components/sections/TechnologySection';
import KolibriBusinessSections from '@/components/sections/KolibriBusinessSections';
import { motion } from 'framer-motion';

const Technology = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative bg-white overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 lg:mt-16 lg:px-8 xl:mt-28">
              <div className="text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Technology Insights</span>
                  <span className="block text-ninva">Advanced Health Monitoring</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Discover how our AI-powered technology revolutionizes health monitoring through advanced analytics, 
                  medical-grade sensors, and comprehensive health insights.
                </p>
              </div>
            </main>
          </div>
        </div>
      </motion.div>

      {/* Technology Overview Section */}
      <TechnologySection />

      {/* Business Strategy Section */}
      <KolibriBusinessSections />
    </div>
  );
};

export default Technology;