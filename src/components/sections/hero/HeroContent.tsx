import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export const HeroContent = () => {
  return (
    <div className="sm:text-left lg:max-w-xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1 
          className="text-6xl tracking-tight font-extrabold text-white sm:text-7xl md:text-8xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.span 
            className="block"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.4,
              ease: "easeOut"
            }}
          >
            Your Health Journey,
          </motion.span>
          <motion.span 
            className="block text-[#33C3F0] mt-2 text-5xl sm:text-6xl md:text-7xl"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.6,
              ease: "easeOut"
            }}
          >
            Reimagined
          </motion.span>
        </motion.h1>
      </motion.div>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mt-6 text-xl text-gray-300 sm:text-2xl max-w-2xl"
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
          className="w-full sm:w-auto hover:scale-105 transition-transform duration-200 bg-[#33C3F0] hover:bg-[#0FA0CE] text-lg px-8"
        >
          Get Started
        </Button>
        <Button 
          variant="outline" 
          size="lg"
          className="w-full sm:w-auto hover:scale-105 transition-transform duration-200 text-white border-white/20 hover:bg-white/10 text-lg px-8"
        >
          Watch Demo
        </Button>
      </motion.div>
    </div>
  );
};