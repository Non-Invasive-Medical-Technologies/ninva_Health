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
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Your Health Journey,
          </motion.span>
          <motion.span 
            className="block text-brand-primary-accent"
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
        className="mt-8 text-body-lg text-gray-200 max-w-2xl font-text"
      >
        Professional-grade health monitoring powered by AI, bringing advanced diagnostics to your fingertips.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="mt-12 flex flex-col sm:flex-row gap-4"
      >
        <Button 
          size="lg"
          className="w-full sm:w-auto hover:scale-105 transition-transform duration-200 bg-brand-primary-accent hover:bg-brand-primary-accent/90 text-brand-primary-main font-semibold px-8"
        >
          Get Started
        </Button>
        <Button 
          variant="outline" 
          size="lg"
          className="w-full sm:w-auto hover:scale-105 transition-transform duration-200 text-white border-white/20 hover:bg-white/10 font-semibold px-8"
        >
          Book Demo
        </Button>
      </motion.div>
    </div>
  );
};