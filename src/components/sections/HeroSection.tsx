import React from 'react';
import { HeroContent } from './hero/HeroContent';
import { VideoDevice } from './hero/VideoDevice';
import { Heart, Activity, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

export const HeroSection = () => {
  const features = [
    {
      title: "Advanced Health Monitoring",
      description: "Revolutionary multi-parameter health assessment powered by AI",
      icon: <Heart className="w-8 h-8 text-ninva" />
    },
    {
      title: "Medical-Grade Precision",
      description: "Professional diagnostics meeting clinical standards",
      icon: <Activity className="w-8 h-8 text-ninva" />
    }
  ];

  return (
    <div className="relative min-h-[90vh] overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A1F2C] via-ninva-dark to-transparent">
        <div className="absolute inset-0 backdrop-blur-[100px] bg-white/10" />
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      </div>

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto relative">
        <div className="relative z-10 pt-20 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <HeroContent />
              <div className="hidden lg:block">
                <VideoDevice />
              </div>
            </div>
            
            {/* Animated Scroll Icon */}
            <motion.div 
              className="flex justify-center mt-8"
              animate={{ y: [0, 10, 0] }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <ChevronDown className="w-8 h-8 text-white/70" />
            </motion.div>
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
              {features.map((feature, index) => (
                <div key={index} className="relative">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-ninva/10">
                    {feature.icon}
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-white/90">
                    {feature.title}
                  </p>
                  <p className="mt-2 ml-16 text-base text-white/70">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};