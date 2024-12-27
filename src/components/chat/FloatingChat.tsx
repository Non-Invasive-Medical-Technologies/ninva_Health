import React from 'react';
import { MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

interface FloatingChatProps {
  activeCard?: string | null;
  contextMessage?: string;
}

export const FloatingChat = ({ activeCard, contextMessage }: FloatingChatProps) => {
  console.log('[FloatingChat] Rendering with activeCard:', activeCard);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <motion.div
        className="relative"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Hummingbird Animation */}
        <motion.div
          className="absolute -top-12 right-0"
          animate={{
            y: [0, -10, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <img 
            src="/lovable-uploads/3bb9b84f-1377-461b-ab76-959f11e50f8d.png" 
            alt="Ninva Hummingbird"
            className="w-12 h-12 object-contain drop-shadow-lg"
          />
        </motion.div>

        <button 
          className="flex items-center justify-center w-12 h-12 bg-ninva text-white rounded-full shadow-lg hover:bg-ninva-dark transition-colors duration-200"
          aria-label="Open chat"
        >
          <MessageSquare className="w-6 h-6" />
        </button>
      </motion.div>
    </div>
  );
};