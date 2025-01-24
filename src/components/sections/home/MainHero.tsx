import React from 'react';
import { Button } from '@/components/ui/button';
import { AnimatedHeroBackground } from './AnimatedHeroBackground';
import { motion } from 'framer-motion';

export const MainHero = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center overflow-hidden">
      <AnimatedHeroBackground />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-1 rounded-full bg-medical-primary/10 text-medical-primary mb-6"
            >
              <span className="text-xl">Next-Generation Health Monitoring</span>
            </motion.div>
            
            <motion.h1 
              className="text-5xl tracking-tight font-extrabold sm:text-6xl md:text-7xl" // Increased font sizes
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="block bg-gradient-to-r from-medical-primary via-medical-secondary to-medical-success bg-clip-text text-transparent animate-gradient-flow">
                Your Health Journey,
              </span>
              <span className="block bg-gradient-to-r from-medical-secondary via-medical-success to-medical-primary bg-clip-text text-transparent animate-gradient-flow">
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

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="relative hidden lg:block"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/20 rounded-3xl" />
            <img
              src="/lovable-uploads/2afd0ae0-a1fa-4901-8295-713b02a4b474.png"
              alt="Kolibri Health Device"
              className="w-full h-auto object-contain relative z-10"
              style={{
                filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.1))',
                maxHeight: '500px'
              }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};