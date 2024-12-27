import React from 'react';
import { motion } from 'framer-motion';

export const DeviceShowcase = () => {
  const deviceImage = "/lovable-uploads/ee917407-931c-4a50-b917-566f45e9fce0.png";

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.6 }}
      className="w-full h-full flex items-center justify-center px-4 lg:px-8"
    >
      <motion.div
        animate={{ 
          rotateY: [-10, 10],
          scale: [1, 1.01, 1]
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
        className="w-full max-w-[280px] lg:max-w-[320px]"
      >
        <img 
          src={deviceImage}
          alt="Kolibri Health Device"
          className="w-full h-auto drop-shadow-2xl"
        />
      </motion.div>
    </motion.div>
  );
};