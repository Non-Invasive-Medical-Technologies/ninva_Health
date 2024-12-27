import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, ArrowRight, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface HeroSectionProps {
  variant?: 'default' | 'centered' | 'split';
  title: string;
  subtitle: string;
  metrics: Array<{
    value: string;
    label: string;
  }>;
  showChat?: boolean;
}

const variants = {
  default: {
    layout: 'flex flex-col lg:flex-row',
    content: 'lg:w-1/2',
    visual: 'lg:w-1/2'
  },
  centered: {
    layout: 'text-center',
    content: 'max-w-3xl mx-auto',
    visual: 'max-w-2xl mx-auto mt-12'
  },
  split: {
    layout: 'grid lg:grid-cols-2 gap-12',
    content: '',
    visual: ''
  }
};

export const HeroSection = ({ 
  variant = 'default',
  title,
  subtitle,
  metrics,
  showChat = false 
}: HeroSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentMetric, setCurrentMetric] = useState(0);
  const currentVariant = variants[variant];
  const deviceImages = [
    "/lovable-uploads/bad4244e-4441-4ff0-9900-6058de450767.png",
    "/lovable-uploads/f7e8009e-b2d9-402b-9c97-0c705d964e62.png"
  ];
  const [currentDevice, setCurrentDevice] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const metricInterval = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % metrics.length);
    }, 3000);
    
    const deviceInterval = setInterval(() => {
      setCurrentDevice((prev) => (prev + 1) % deviceImages.length);
    }, 3000);

    return () => {
      clearInterval(metricInterval);
      clearInterval(deviceInterval);
    };
  }, [metrics.length]);

  const ChatDocAvatar = () => (
    <div className="relative w-12 h-12">
      <div className="absolute inset-0 bg-ninva rounded-full animate-pulse" />
      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          viewBox="0 0 24 24"
          className="w-8 h-8 text-ninva-secondary"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 2a3 3 0 0 0-3 3v1H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-2V5a3 3 0 0 0-3-3z" />
          <path d="M9 12h6" />
          <path d="M12 9v6" />
          <circle cx="12" cy="6" r="1" fill="currentColor" />
        </svg>
        <div className="absolute top-0 right-0 w-3 h-3 bg-ninva-secondary rounded-full border-2 border-white animate-ping" />
      </div>
    </div>
  );

  const renderChatBot = () => (
    <div className="fixed bottom-4 right-4">
      <ChatDocAvatar />
    </div>
  );

  return (
    <section className="min-h-[80vh] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1d617a] via-[#2a8dad] to-[#40b5d8] animate-gradient-wave" />
      <div className="relative">
        <div className={`max-w-7xl mx-auto ${currentVariant.layout} px-4 py-16 lg:py-24`}>
          <div className={`space-y-6 ${currentVariant.content}`}>
            <h1 
              className={`text-4xl md:text-6xl font-bold text-white ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              } transition-all duration-700`}
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              {title}
              <span className="block bg-gradient-to-r from-white via-[#e0f2f7] to-[#b3e0ec] bg-clip-text text-transparent animate-gradient-flow">
                AI-Powered Precision
              </span>
            </h1>
            <p 
              className="text-xl text-ninva-light"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {subtitle}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                className="bg-ninva hover:bg-ninva/90 text-white"
                size="lg"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-ninva-light text-ninva-light hover:bg-ninva-light/10"
              >
                Book Demo
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8">
              {metrics.map((metric, index) => (
                <div 
                  key={index}
                  className={`text-center p-4 rounded-lg glass-card ${
                    currentMetric === index ? 'ring-2 ring-ninva-tertiary' : ''
                  }`}
                >
                  <div className="text-3xl font-bold text-white">{metric.value}</div>
                  <div className="text-sm text-ninva-light">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={`mt-8 lg:mt-0 ${currentVariant.visual}`}>
            <div className="relative h-[500px] flex items-center justify-center">
              {deviceImages.map((image, index) => (
                <motion.img
                  key={index}
                  src={image}
                  alt={`Kolibri Device ${index + 1}`}
                  className="absolute w-full max-w-[400px] object-contain"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ 
                    opacity: currentDevice === index ? 1 : 0,
                    scale: currentDevice === index ? 1 : 0.8,
                    rotateY: [-15, 15],
                  }}
                  transition={{
                    opacity: { duration: 0.5 },
                    scale: { duration: 0.5 },
                    rotateY: {
                      repeat: Infinity,
                      repeatType: "reverse",
                      duration: 2
                    }
                  }}
                  style={{
                    filter: 'drop-shadow(0 25px 25px rgb(0 0 0 / 0.15))'
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {showChat && renderChatBot()}
    </section>
  );
};