import React from 'react';
import { HeroContent } from './hero/HeroContent';
import { VideoDevice } from './hero/VideoDevice';
import { FloatingIcons } from './hero/FloatingIcons';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Heart, Activity } from 'lucide-react';

export const HeroSection = () => {
  console.log('[HeroSection] Rendering HeroSection');

  // Brand tokens for consistent styling
  const brandColors = {
    primary: {
      main: '#26652C',
      light: '#8FD5CA',
      dark: '#1A5B5D',
      surface: '#F5F9F9'
    },
    gradients: {
      primary: 'bg-gradient-to-r from-emerald-700 to-teal-600',
      secondary: 'bg-gradient-to-r from-teal-100 to-emerald-100',
      surface: 'bg-gradient-to-b from-gray-50 to-teal-50'
    }
  };

  React.useEffect(() => {
    console.log('[HeroSection] Component mounted');
    return () => {
      console.log('[HeroSection] Component unmounted');
    };
  }, []);

  return (
    <div className="relative min-h-[90vh] overflow-hidden">
      {/* Background gradient */}
      <div className={`absolute inset-0 ${brandColors.gradients.primary}`}>
        <div className="absolute inset-0 backdrop-blur-[100px] bg-white/10" />
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      </div>

      {/* Floating Icons in background */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingIcons />
      </div>

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto relative">
        <div className="relative z-10 pt-20 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 lg:mt-16 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-left lg:max-w-xl pt-20 lg:pt-32">
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
                    className="block text-[#8FD5CA] text-display-md sm:text-display-lg"
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
                    className="w-full sm:w-auto hover:scale-105 transition-transform duration-200 bg-white text-emerald-700 hover:bg-gray-100 hover:text-emerald-800 text-body-md px-8"
                  >
                    Get Started
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="w-full sm:w-auto hover:scale-105 transition-transform duration-200 text-white border-white/20 hover:bg-white/10 text-body-md px-8"
                  >
                    Watch Demo
                  </Button>
                </motion.div>
              </div>

              {/* Video Device Component */}
              <div className="hidden lg:block">
                <VideoDevice />
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white/5 backdrop-blur-sm py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-8">
            <h2 className="text-3xl font-extrabold tracking-tight text-white/90 sm:text-4xl">
              Advanced Health Monitoring
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-white/70 lg:mx-auto">
              Professional-grade diagnostics in the comfort of your home
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-ninva/10">
                  <Heart className="w-8 h-8 text-ninva" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-white/90">
                  Advanced Health Monitoring
                </p>
                <p className="mt-2 ml-16 text-base text-white/70">
                  Revolutionary multi-parameter health assessment powered by AI
                </p>
              </div>
              <div className="relative">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-ninva/10">
                  <Activity className="w-8 h-8 text-ninva" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-white/90">
                  Medical-Grade Precision
                </p>
                <p className="mt-2 ml-16 text-base text-white/70">
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

