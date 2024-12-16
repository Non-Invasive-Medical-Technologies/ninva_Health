import React from 'react';
import { motion } from 'framer-motion';

export const VideoDevice = () => {
  const deviceImageUrl = "/lovable-uploads/3bb9b84f-1377-461b-ab76-959f11e50f8d.png";

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.6 }}
      className="w-full h-full flex items-center justify-center"
    >
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
        className="w-full max-w-[300px]"
      >
        <img 
          src={deviceImageUrl}
          alt="Kolibri Health Device"
          className="w-full h-auto drop-shadow-2xl mix-blend-screen rounded-lg"
        />
      </motion.div>
    </motion.div>
  );
};