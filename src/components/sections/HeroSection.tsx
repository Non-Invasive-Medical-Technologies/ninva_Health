import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MessageSquare, ArrowRight, Activity, Shield, Heart } from 'lucide-react';

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
    const interval = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % metrics.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [metrics.length]);

  const ChatDocAvatar = () => (
    <div className="relative w-12 h-12">
      <div className="absolute inset-0 bg-ninva-tertiary rounded-full animate-pulse" />
      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          viewBox="0 0 24 24"
          className="w-8 h-8 text-ninva-DEFAULT"
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
    <section className="min-h-[80vh] bg-ninva-light px-4 py-16 lg:py-24">
      <div className={`max-w-7xl mx-auto ${currentVariant.layout}`}>
        <div className={`space-y-6 ${currentVariant.content}`}>
          <h1 
            className={`text-4xl md:text-6xl font-bold text-ninva-DEFAULT ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            } transition-all duration-700`}
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            {title}
          </h1>
          <p 
            className="text-xl text-gray-600"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {subtitle}
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button 
              className="bg-ninva-DEFAULT hover:bg-ninva-DEFAULT/90 text-white"
              size="lg"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-ninva-DEFAULT text-ninva-DEFAULT hover:bg-ninva-DEFAULT/10"
            >
              Book Demo
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-8">
            {metrics.map((metric, index) => (
              <div 
                key={index}
                className={`text-center p-4 rounded-lg bg-white shadow-sm ${
                  currentMetric === index ? 'ring-2 ring-ninva-DEFAULT' : ''
                }`}
              >
                <div className="text-3xl font-bold text-ninva-DEFAULT">{metric.value}</div>
                <div className="text-sm text-gray-600">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className={`mt-8 lg:mt-0 ${currentVariant.visual}`}>
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-ninva-tertiary/20 rounded-full animate-pulse" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-ninva-complementary-sage/20 rounded-full animate-pulse" />
            <Card className="relative bg-white p-6 rounded-xl shadow-lg">
              <div className="relative w-full aspect-[3/2] bg-gradient-to-br from-ninva-tertiary/20 to-ninva-complementary-sage/20 rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-4 p-4">
                    <div className="space-y-4">
                      <div className="h-4 bg-ninva-tertiary/20 rounded w-3/4"></div>
                      <div className="h-4 bg-ninva-tertiary/30 rounded w-1/2"></div>
                      <div className="h-4 bg-ninva-tertiary/40 rounded w-5/6"></div>
                    </div>
                    <div className="space-y-4">
                      <div className="h-16 bg-ninva-complementary-sage/20 rounded"></div>
                      <div className="h-8 bg-ninva-complementary-sage/30 rounded"></div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 flex space-x-2">
                  <div className="w-2 h-2 rounded-full bg-ninva-tertiary"></div>
                  <div className="w-2 h-2 rounded-full bg-ninva-secondary"></div>
                  <div className="w-2 h-2 rounded-full bg-ninva-complementary-sage"></div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-ninva-DEFAULT text-white p-2 rounded-lg">
                <Shield className="h-6 w-6" />
              </div>
            </Card>
          </div>
        </div>
      </div>

      {showChat && renderChatBot()}
    </section>
  );
};