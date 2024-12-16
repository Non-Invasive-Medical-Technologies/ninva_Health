import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Activity, Heart, Shield, Waves } from 'lucide-react';

export const HeroSection = () => {
  return (
    <div className="relative min-h-[90vh] bg-gradient-to-br from-ninva/5 via-ninva/10 to-ninva/5 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          animate={{ 
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-40 -right-32 w-96 h-96"
        >
          <Waves className="w-full h-full text-ninva/10" />
        </motion.div>
        <motion.div 
          animate={{ 
            y: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-20 -left-32 w-96 h-96"
        >
          <Waves className="w-full h-full text-ninva/5" />
        </motion.div>
      </div>

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto relative">
        <div className="relative z-10 pt-32 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="sm:text-center lg:text-left lg:flex lg:items-center lg:gap-12">
              <div className="lg:w-1/2">
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

              {/* Device Animation */}
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="hidden lg:block lg:w-1/2"
              >
                <div className="relative w-full h-[500px] flex items-center justify-center">
                  <motion.div
                    animate={{ 
                      rotateY: [0, 360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    style={{
                      perspective: 1000
                    }}
                    className="relative w-[300px]"
                  >
                    <img 
                      src="/lovable-uploads/6fa9526a-455b-4c6a-adb0-34bc056b6afc.png"
                      alt="Kolibri Health Device"
                      className="w-full h-auto drop-shadow-2xl"
                    />
                  </motion.div>

                  {/* Floating Icons */}
                  <motion.div
                    animate={{
                      y: [0, -30, 0],
                      x: [0, 15, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute top-20 left-20"
                  >
                    <Heart className="w-12 h-12 text-ninva" />
                  </motion.div>

                  <motion.div
                    animate={{
                      y: [0, 30, 0],
                      x: [0, -15, 0],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5,
                    }}
                    className="absolute top-40 right-20"
                  >
                    <Activity className="w-12 h-12 text-ninva" />
                  </motion.div>

                  <motion.div
                    animate={{
                      y: [0, -20, 0],
                      x: [0, -20, 0],
                    }}
                    transition={{
                      duration: 7,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                    className="absolute bottom-40 right-40"
                  >
                    <Shield className="w-12 h-12 text-ninva" />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};