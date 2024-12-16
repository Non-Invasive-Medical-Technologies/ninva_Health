import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export const HeroContent = () => {
  return (
    <div className="lg:w-1/2">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="text-5xl tracking-tight font-extrabold text-white/90 sm:text-6xl md:text-7xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.span 
            className="block"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Your Health Journey,
          </motion.span>
          <motion.span 
            className="block text-[#33C3F0]"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Reimagined
          </motion.span>
        </motion.h1>
      </motion.div>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
      >
        Experience professional-grade health monitoring with Kolibri. 
        Advanced sensors combined with AI-powered analytics provide 
        unprecedented insights into your health.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
      >
        <div className="rounded-md shadow">
          <Button 
            size="lg"
            className="w-full sm:w-auto hover:scale-105 transition-transform duration-200"
          >
            Get Started
          </Button>
        </div>
        <div className="mt-3 sm:mt-0 sm:ml-3">
          <Button 
            variant="outline" 
            size="lg"
            className="w-full sm:w-auto hover:scale-105 transition-transform duration-200"
          >
            Watch Demo
          </Button>
        </div>
      </motion.div>
    </div>
  );
};