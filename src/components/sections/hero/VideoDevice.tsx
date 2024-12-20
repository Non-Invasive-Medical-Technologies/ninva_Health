import React from 'react';
import { motion } from 'framer-motion';

export const VideoDevice = () => {
  const deviceImages = [
    "/lovable-uploads/bad4244e-4441-4ff0-9900-6058de450767.png", // Blue device
    "/lovable-uploads/f7e8009e-b2d9-402b-9c97-0c705d964e62.png"  // Black device
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.6 }}
      className="w-full h-full flex items-center justify-center relative"
    >
      <motion.div
        animate={{ 
          rotateY: [-5, 5],
          scale: [1, 1.02, 1]
        }}
        transition={{
          rotateY: {
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          },
          scale: {
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }
        }}
        style={{
          perspective: 1000,
          transformStyle: "preserve-3d"
        }}
        className="relative w-full max-w-[400px]"
      >
        {deviceImages.map((image, index) => (
          <motion.img 
            key={index}
            src={image}
            alt={`Kolibri Health Device ${index + 1}`}
            className={`w-full h-auto absolute top-0 left-0 drop-shadow-2xl mix-blend-normal ${
              index === 0 ? 'opacity-100' : 'opacity-0'
            }`}
            animate={{ 
              opacity: [index === 0 ? 1 : 0, index === 0 ? 0 : 1],
              scale: [1, 1.02, 1]
            }}
            transition={{
              opacity: {
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: index * 3
              },
              scale: {
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};