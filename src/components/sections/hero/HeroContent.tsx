import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export const HeroContent = () => {
  return (
    <div className="sm:text-left">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl"
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
            className="block text-[#33C3F0] mt-2"
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
        className="mt-6 text-lg text-gray-300 sm:text-xl max-w-xl"
      >
        Experience professional-grade health monitoring with Kolibri. 
        Advanced sensors combined with AI-powered analytics provide 
        unprecedented insights into your health.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="mt-8 flex flex-col sm:flex-row gap-4"
      >
        <Button 
          size="lg"
          className="w-full sm:w-auto hover:scale-105 transition-transform duration-200 bg-[#33C3F0] hover:bg-[#0FA0CE]"
        >
          Get Started
        </Button>
        <Button 
          variant="outline" 
          size="lg"
          className="w-full sm:w-auto hover:scale-105 transition-transform duration-200 text-white border-white/20 hover:bg-white/10"
        >
          Watch Demo
        </Button>
      </motion.div>
    </div>
  );
};