import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export const HeroContent = () => {
  return (
    <div className="lg:w-1/2">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          scale: [1, 1.02, 1],
        }}
        transition={{ 
          duration: 0.8,
          scale: {
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }
        }}
      >
        <motion.h1 
          className="text-6xl tracking-tight font-extrabold text-white/90 sm:text-7xl md:text-8xl space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.span 
            className="block mb-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ 
              opacity: 1, 
              x: 0,
              scale: [1, 1.01, 1]
            }}
            transition={{ 
              duration: 0.6, 
              delay: 0.4,
              scale: {
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }
            }}
          >
            Your Health Journey,
          </motion.span>
          <motion.span 
            className="block text-[#33C3F0] mb-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ 
              opacity: 1, 
              x: 0,
              scale: [1, 1.01, 1]
            }}
            transition={{ 
              duration: 0.6, 
              delay: 0.6,
              scale: {
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }
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
        className="mt-8 text-base text-gray-300 sm:mt-10 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-12 md:text-xl lg:mx-0"
      >
        Experience professional-grade health monitoring with Kolibri. 
        Advanced sensors combined with AI-powered analytics provide 
        unprecedented insights into your health.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="mt-10 sm:mt-12 sm:flex sm:justify-center lg:justify-start"
      >
        <div className="rounded-md shadow">
          <Button 
            size="lg"
            className="w-full sm:w-auto hover:scale-105 transition-transform duration-200 bg-[#33C3F0] hover:bg-[#0FA0CE]"
          >
            Get Started
          </Button>
        </div>
        <div className="mt-3 sm:mt-0 sm:ml-3">
          <Button 
            variant="outline" 
            size="lg"
            className="w-full sm:w-auto hover:scale-105 transition-transform duration-200 text-black border-white/20 hover:bg-white/10"
          >
            Watch Demo
          </Button>
        </div>
      </motion.div>
    </div>
  );
};