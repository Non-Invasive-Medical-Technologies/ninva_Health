import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export const HeroSection = () => {
  return (
    <div className="relative min-h-[90vh] bg-gradient-to-br from-ninva/5 via-ninva/10 to-ninva/5 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-96 h-96 rounded-full bg-ninva/10 blur-3xl animate-pulse" />
        <div className="absolute top-20 -left-32 w-96 h-96 rounded-full bg-ninva/5 blur-3xl animate-pulse delay-700" />
        <div className="absolute h-40 w-40 -bottom-10 left-20 rounded-full bg-ninva/10 blur-2xl animate-pulse delay-500" />
        <div className="absolute top-1/4 right-1/4 w-4 h-4 rounded-full bg-ninva/30 animate-ping" />
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 rounded-full bg-ninva/20 animate-ping delay-300" />
        <div className="absolute top-1/3 left-1/4 w-2 h-2 rounded-full bg-ninva/40 animate-ping delay-700" />
      </div>

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto relative">
        <div className="relative z-10 pt-32 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="sm:text-center lg:text-left">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
              >
                <span className="block">Your Health Journey,</span>
                <span className="block text-ninva">Reimagined</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
              >
                Experience professional-grade health monitoring with Kolibri. 
                Advanced sensors combined with AI-powered analytics provide 
                unprecedented insights into your health.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
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
          </main>

          {/* Floating Medical Icons/Elements */}
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 hidden lg:block">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="relative w-96 h-96"
            >
              <img
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
                alt="Health Monitoring"
                className="rounded-lg shadow-2xl object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-ninva/10 backdrop-blur-sm rounded-lg" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};