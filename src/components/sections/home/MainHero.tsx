import React from 'react';
import { Button } from '@/components/ui/button';
import { AnimatedHeroBackground } from './AnimatedHeroBackground';
import { motion } from 'framer-motion';

export const MainHero = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center overflow-hidden">
      <AnimatedHeroBackground />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1 rounded-full bg-medical-primary/10 text-medical-primary mb-6"
          >
            Next-Generation Health Monitoring
          </motion.div>
          
          <motion.h1 
            className="text-4xl tracking-tight font-extrabold text-ninva-dark sm:text-5xl md:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="block">Your Health Journey,</span>
            <span className="block text-medical-primary">
              Reimagined
            </span>
          </motion.h1>

          <motion.p 
            className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Experience professional-grade health monitoring with Kolibri. 
            Advanced sensors combined with AI-powered analytics provide 
            unprecedented insights into your health.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
          >
            <div className="rounded-md shadow">
              <Button 
                size="lg"
                className="w-full sm:w-auto px-8 py-3 bg-medical-primary hover:bg-medical-primary/90 text-white"
              >
                Get Started
              </Button>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <Button 
                variant="outline"
                size="lg"
                className="w-full sm:w-auto px-8 py-3 border-medical-primary text-medical-primary hover:bg-medical-primary/5"
              >
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};