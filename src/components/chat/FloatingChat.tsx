import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageSquare, X, ArrowRight } from 'lucide-react';

interface FloatingChatProps {
  activeCard?: string | null;
  contextMessage?: string;
}

export const FloatingChat = ({ activeCard, contextMessage }: FloatingChatProps) => {
  const [showChat, setShowChat] = useState(true);
  const [chatMinimized, setChatMinimized] = useState(false);

  if (!showChat) return null;

  return (
    <div className={`fixed ${
      chatMinimized ? 'bottom-4 right-4 w-auto' : 'bottom-4 right-4 w-80'
    } z-50 transition-all duration-300`}>
      <Card>
        <div className="bg-gradient-to-r from-ninva to-ninva-dark p-4 rounded-t-lg">
          <div className="flex items-center justify-between text-white">
            <div className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5" />
              <span className="font-medium">Dr. Ninva</span>
            </div>
            <div className="flex gap-2">
              <button 
                onClick={() => setChatMinimized(!chatMinimized)}
                className="hover:bg-white/10 rounded-full p-1"
              >
                {chatMinimized ? '+' : '-'}
              </button>
              <button 
                onClick={() => setShowChat(false)}
                className="hover:bg-white/10 rounded-full p-1"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
        
        {!chatMinimized && (
          <div className="p-4">
            <div className="bg-ninva/5 rounded-lg p-3 mb-3">
              <p className="text-ninva">
                {contextMessage || "Hello! I can help explain each phase of your health journey. How can I assist you today?"}
              </p>
            </div>
            <div className="flex gap-2">
              <input 
                type="text"
                placeholder="Ask me anything..."
                className="flex-1 p-2 border rounded-lg text-sm"
              />
              <Button size="sm" className="bg-ninva hover:bg-ninva-dark">
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
};