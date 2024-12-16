import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Play, Pause } from 'lucide-react';

export const VideoDevice = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const { data: videos } = useQuery({
    queryKey: ['hero-videos'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('videos')
        .select('*')
        .limit(1);
      
      if (error) throw error;
      return data;
    }
  });

  const videoUrl = videos?.[0]?.video_path 
    ? `${supabase.storage.from('videos').getPublicUrl(videos[0].video_path).data.publicUrl}`
    : null;

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
          {videoUrl ? (
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <video
                id="hero-video"
                src={videoUrl}
                className="w-full h-auto"
                loop
                muted
                playsInline
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute bottom-4 right-4 bg-white/80 hover:bg-white/90 rounded-full"
                onClick={handlePlayPause}
              >
                {isPlaying ? (
                  <Pause className="h-4 w-4" />
                ) : (
                  <Play className="h-4 w-4" />
                )}
              </Button>
            </div>
          ) : (
            <img 
              src="/lovable-uploads/6fa9526a-455b-4c6a-adb0-34bc056b6afc.png"
              alt="Kolibri Health Device"
              className="w-full h-auto drop-shadow-2xl"
              style={{
                backfaceVisibility: "hidden"
              }}
            />
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};