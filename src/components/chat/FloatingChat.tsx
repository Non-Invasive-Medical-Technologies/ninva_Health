import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageSquare, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FloatingChatProps {
  activeCard?: string | null;
  contextMessage?: string;
}

const medicalFacts = [
  "Did you know? The human heart beats about 115,000 times each day!",
  "Time for a health pun: What did the cardiologist say to their patient? 'I heart you!'",
  "Fascinating fact: Your body has enough blood vessels to circle the Earth twice!",
  "Health tip: Regular deep breathing can help reduce stress and improve focus.",
  "Quick laugh: Why don't bacteria like jokes? Because they split their sides!",
];

export const FloatingChat = ({ activeCard, contextMessage }: FloatingChatProps) => {
  const [showChat, setShowChat] = useState(true);
  const [chatMinimized, setChatMinimized] = useState(false);
  const [currentFact, setCurrentFact] = useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFact((prev) => (prev + 1) % medicalFacts.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  if (!showChat) return null;

  return (
    <div className={`fixed ${
      chatMinimized ? 'bottom-4 right-4 w-auto' : 'bottom-4 right-4 w-80'
    } z-50 transition-all duration-300`}>
      <Card className="overflow-visible shadow-lg border border-ninva/10 bg-white/95 backdrop-blur-lg">
        {/* Hummingbird Animation */}
        <motion.div
          className="absolute -top-12 right-4"
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

        <div className="bg-gradient-to-r from-ninva via-ninva-dark to-ninva-deepBlue p-4 rounded-t-lg">
          <div className="flex items-center justify-between text-white">
            <div className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5" />
              <span className="font-medium">Dr. Ninva</span>
            </div>
            <div className="flex gap-2">
              <button 
                onClick={() => setChatMinimized(!chatMinimized)}
                className="hover:bg-white/10 rounded-full p-1 transition-colors"
              >
                {chatMinimized ? '+' : '-'}
              </button>
              <button 
                onClick={() => setShowChat(false)}
                className="hover:bg-white/10 rounded-full p-1 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
        
        {!chatMinimized && (
          <div className="p-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentFact}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-gradient-to-br from-ninva/5 to-ninva/10 rounded-lg p-3 mb-3"
              >
                <p className="text-ninva text-sm">
                  {contextMessage || medicalFacts[currentFact]}
                </p>
              </motion.div>
            </AnimatePresence>
            <div className="flex gap-2">
              <input 
                type="text"
                placeholder="Ask me anything..."
                className="flex-1 p-2 border rounded-lg text-sm bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-ninva/20 transition-all"
              />
              <Button size="sm" className="bg-ninva hover:bg-ninva-dark transition-colors">
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
};