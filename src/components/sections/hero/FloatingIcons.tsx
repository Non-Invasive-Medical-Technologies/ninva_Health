import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Heart, Shield, Stethoscope, Brain, Pulse, Microscope } from 'lucide-react';

export const FloatingIcons = () => {
  return (
    <>
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
    </>
  );
};
