import React from 'react';
import { motion } from 'framer-motion';
import { VideoDevice } from '../hero/VideoDevice';

export const DeviceShowcase = () => {
  return (
    <div className="hidden lg:block relative">
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="w-full h-full flex items-center justify-center"
      >
        <VideoDevice />
      </motion.div>
    </div>
  );
};