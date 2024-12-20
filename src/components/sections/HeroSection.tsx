import React from 'react';
import { VideoDevice } from './hero/VideoDevice';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Heart, Activity } from 'lucide-react';

export const HeroSection = () => {
  console.log('[HeroSection] Rendering HeroSection');

  return (
    <div className="relative min-h-[90vh] overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-ninva via-ninva-light to-ninva-dark animate-gradient-x">
        <div className="absolute inset-0 backdrop-blur-[100px] bg-white/10" />
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      </div>

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto relative">
        <div className="relative z-10 pt-12 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 lg:mt-16 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-left lg:max-w-xl pt-12 lg:pt-24">
                <motion.h1 
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-display tracking-tight"
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
                    className="block text-ninva-light"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    Reimagined
                  </motion.span>
                </motion.h1>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="text-body-lg text-gray-200 max-w-2xl font-text mb-8"
                >
                  Experience professional-grade health monitoring with Ninva. 
                  Advanced sensors combined with AI-powered analytics provide 
                  unprecedented insights into your health.
                </motion.p>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Button 
                    size="lg"
                    className="bg-white text-ninva hover:bg-gray-100 hover:text-ninva-dark font-semibold px-8"
                  >
                    Get Started
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-2 border-white bg-transparent text-black hover:bg-white/10 font-semibold px-8"
                  >
                    Watch Demo
                  </Button>
                </motion.div>
              </div>

              <div className="hidden lg:block">
                <VideoDevice />
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Features Section with improved visuals */}
      <div className="bg-white/5 backdrop-blur-sm py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tight text-white/90 sm:text-4xl font-display">
              Advanced Health Monitoring
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-white/70 lg:mx-auto font-text">
              Professional-grade diagnostics in the comfort of your home
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="relative glass-card p-6 rounded-xl hover:scale-105 transition-transform duration-300">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-ninva/10 mb-4">
                  <Heart className="w-8 h-8 text-ninva" />
                </div>
                <p className="text-lg leading-6 font-medium text-white/90">
                  Advanced Health Monitoring
                </p>
                <p className="mt-2 text-base text-white/70">
                  Revolutionary multi-parameter health assessment powered by AI
                </p>
              </div>
              <div className="relative glass-card p-6 rounded-xl hover:scale-105 transition-transform duration-300">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-ninva/10 mb-4">
                  <Activity className="w-8 h-8 text-ninva" />
                </div>
                <p className="text-lg leading-6 font-medium text-white/90">
                  Medical-Grade Precision
                </p>
                <p className="mt-2 text-base text-white/70">
                  Professional diagnostics meeting clinical standards
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};