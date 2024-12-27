import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DeviceShowcase } from './hero/DeviceShowcase';

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

  useEffect(() => {
    setIsVisible(true);
    const metricInterval = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % metrics.length);
    }, 3000);

    return () => {
      clearInterval(metricInterval);
    };
  }, [metrics.length]);

  const ChatDocAvatar = () => (
    <div className="relative w-12 h-12">
      <div className="absolute inset-0 bg-ninva rounded-full animate-pulse" />
      <div className="absolute inset-0 flex items-center justify-center">
        <MessageSquare className="w-8 h-8 text-white" />
        <div className="absolute top-0 right-0 w-3 h-3 bg-ninva-secondary rounded-full border-2 border-white animate-ping" />
      </div>
    </div>
  );

  return (
    <section className="min-h-[80vh] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-ninva via-ninva-secondary to-ninva-tertiary animate-gradient-wave" />
      <div className="relative">
        <div className={`max-w-7xl mx-auto ${currentVariant.layout} px-4 py-16 lg:py-24`}>
          <div className={`space-y-6 ${currentVariant.content}`}>
            <h1 
              className={`text-4xl md:text-6xl font-bold text-white ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              } transition-all duration-700`}
            >
              {title}
              <span className="block bg-gradient-to-r from-white via-ninva-light to-white bg-clip-text text-transparent animate-gradient-flow">
                AI-Powered Precision
              </span>
            </h1>
            <p className="text-xl text-ninva-light">
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
            <DeviceShowcase />
          </div>
        </div>
      </div>

      {showChat && (
        <div className="fixed bottom-4 right-4">
          <ChatDocAvatar />
        </div>
      )}
    </section>
  );
};