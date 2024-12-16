import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Play, Pause } from 'lucide-react';

export const VideoDevice = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const videoUrl = "https://dvlanhpficohhiiqugzq.supabase.co/storage/v1/object/public/videos/03997675344777.5c4a29a4a81aa.gif";

  const handlePlayPause = () => {
    const video = document.getElementById('hero-video') as HTMLVideoElement;
    if (video) {
      if (video.paused) {
        video.play();
        setIsPlaying(true);
      } else {
        video.pause();
        setIsPlaying(false);
      }
    }
  };

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
          <div className="relative rounded-lg overflow-hidden shadow-2xl">
            <img 
              src={videoUrl}
              alt="Kolibri Health Device"
              className="w-full h-auto"
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};