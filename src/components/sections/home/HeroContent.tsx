import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export const HeroContent = () => {
  return (
    <div className="sm:text-left lg:max-w-xl pt-20 lg:pt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1 
          className="text-display-lg sm:text-display-xl md:text-display-2xl font-extrabold text-white space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.span 
            className="block mb-2"
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
            className="block text-display-md sm:text-display-lg bg-gradient-to-r from-[#33C3F0] via-[#8FD5CA] to-[#4EC989] bg-clip-text text-transparent animate-gradient-flow"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.6,
              ease: "easeOut"
            }}
            style={{
              backgroundSize: '200% auto',
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
        className="mt-8 text-body-lg text-gray-300 max-w-2xl"
      >
        Experience professional-grade health monitoring with Kolibri. 
        Advanced sensors combined with AI-powered analytics provide 
        unprecedented insights into your health.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="mt-12 flex flex-col sm:flex-row gap-4"
      >
        <Button 
          size="lg"
          className="w-full sm:w-auto hover:scale-105 transition-transform duration-200 bg-[#33C3F0] hover:bg-[#0FA0CE] text-body-md px-8"
        >
          Get Started
        </Button>
        <Button 
          variant="outline" 
          size="lg"
          className="w-full sm:w-auto hover:scale-105 transition-transform duration-200 text-white border-white hover:bg-white/10 text-body-md px-8"
        >
          Watch Demo
        </Button>
      </motion.div>
    </div>
  );
};