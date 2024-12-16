import React from 'react';
import { motion } from 'framer-motion';

export const VideoDevice = () => {
  const deviceImageUrl = "/lovable-uploads/6fa9526a-455b-4c6a-adb0-34bc056b6afc.png";

  return (
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
          <div className="relative rounded-lg overflow-hidden shadow-2xl bg-white">
            <img 
              src={deviceImageUrl}
              alt="Kolibri Health Device"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-ninva/10 via-transparent to-transparent" />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};