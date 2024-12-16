import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Activity, Heart, Shield, Stethoscope, Brain, Pulse, Laptop, Microscope } from 'lucide-react';

export const HeroSection = () => {
  return (
    <div className="relative min-h-[90vh] overflow-hidden">
      {/* Background with depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-ninva/20 via-ninva/5 to-transparent">
        <div className="absolute inset-0 backdrop-blur-[100px] bg-white/30" />
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      </div>

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto relative">
        <div className="relative z-10 pt-32 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="sm:text-center lg:text-left lg:flex lg:items-center lg:gap-12">
              <div className="lg:w-1/2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <motion.h1 
                    className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <motion.span 
                      className="block"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      Your Health Journey,
                    </motion.span>
                    <motion.span 
                      className="block text-ninva"
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
                  className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
                >
                  Experience professional-grade health monitoring with Kolibri. 
                  Advanced sensors combined with AI-powered analytics provide 
                  unprecedented insights into your health.
                </motion.p>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
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
                      rotateY: [-15, 15],
                      scale: [1, 1.02, 1]
                    }}
                    transition={{
                      rotateY: {
                        duration: 8,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                      },
                      scale: {
                        duration: 6,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                      }
                    }}
                    style={{
                      perspective: 1000,
                      transformStyle: "preserve-3d"
                    }}
                    className="relative w-[300px]"
                  >
                    <img 
                      src="/lovable-uploads/6fa9526a-455b-4c6a-adb0-34bc056b6afc.png"
                      alt="Kolibri Health Device"
                      className="w-full h-auto drop-shadow-2xl"
                      style={{
                        backfaceVisibility: "hidden"
                      }}
                    />
                  </motion.div>

                  {/* Floating Icons with varying sizes and depths */}
                  <motion.div
                    animate={{
                      y: [0, -20, 0],
                      x: [0, 10, 0],
                      z: [0, 20, 0]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute top-20 left-20"
                    style={{ perspective: 1000 }}
                  >
                    <Heart className="w-10 h-10 text-ninva/80" />
                  </motion.div>

                  <motion.div
                    animate={{
                      y: [0, 30, 0],
                      x: [0, -15, 0],
                      z: [0, -20, 0]
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5,
                    }}
                    className="absolute top-40 right-20"
                  >
                    <Activity className="w-8 h-8 text-ninva/90" />
                  </motion.div>

                  <motion.div
                    animate={{
                      y: [0, -25, 0],
                      x: [0, -20, 0],
                      z: [0, 15, 0]
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                    className="absolute bottom-40 right-40"
                  >
                    <Shield className="w-12 h-12 text-ninva/70" />
                  </motion.div>

                  <motion.div
                    animate={{
                      y: [0, 15, 0],
                      x: [0, 25, 0],
                      z: [0, -10, 0]
                    }}
                    transition={{
                      duration: 7,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1.5,
                    }}
                    className="absolute top-32 right-28"
                  >
                    <Brain className="w-6 h-6 text-ninva/85" />
                  </motion.div>

                  <motion.div
                    animate={{
                      y: [0, -18, 0],
                      x: [0, -12, 0],
                      z: [0, 25, 0]
                    }}
                    transition={{
                      duration: 5.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 2,
                    }}
                    className="absolute bottom-32 left-28"
                  >
                    <Stethoscope className="w-14 h-14 text-ninva/75" />
                  </motion.div>

                  <motion.div
                    animate={{
                      y: [0, 22, 0],
                      x: [0, 15, 0],
                      z: [0, -15, 0]
                    }}
                    transition={{
                      duration: 6.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 2.5,
                    }}
                    className="absolute top-48 left-36"
                  >
                    <Pulse className="w-7 h-7 text-ninva/95" />
                  </motion.div>

                  <motion.div
                    animate={{
                      y: [0, -28, 0],
                      x: [0, 18, 0],
                      z: [0, 30, 0]
                    }}
                    transition={{
                      duration: 7.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 3,
                    }}
                    className="absolute bottom-48 right-24"
                  >
                    <Microscope className="w-9 h-9 text-ninva/80" />
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