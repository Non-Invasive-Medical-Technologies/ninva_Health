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