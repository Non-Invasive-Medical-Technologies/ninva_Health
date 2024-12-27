import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, ArrowRight, Brain, Shield, Activity } from 'lucide-react';
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

    return () => clearInterval(metricInterval);
  }, [metrics.length]);

  return (
    <section className="min-h-[80vh] relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-ninva via-ninva-secondary to-ninva-tertiary animate-gradient-wave opacity-90" />
      
      {/* Decorative patterns */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNi02IDIuNjg2LTYgNiAyLjY4NiA2IDYgNiIgZmlsbC1vcGFjaXR5PSIuMSIgZmlsbD0iI2ZmZiIvPjwvZz48L3N2Zz4=')] opacity-10" />
      
      <div className="relative">
        <div className={`max-w-7xl mx-auto ${currentVariant.layout} px-4 py-16 lg:py-24`}>
          <div className={`space-y-8 ${currentVariant.content}`}>
            {/* Title with gradient animation */}
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="block text-white mb-2">{title}</span>
              <span className="block bg-gradient-to-r from-white via-ninva-light to-ninva-tertiary bg-clip-text text-transparent animate-gradient-flow">
                AI-Powered Precision
              </span>
            </motion.h1>

            {/* Subtitle with fade animation */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-lg md:text-xl text-ninva-light/90 max-w-2xl leading-relaxed"
            >
              {subtitle}
            </motion.p>
            
            {/* Buttons with hover effects */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <Button 
                size="lg"
                className="bg-white text-ninva hover:bg-ninva-light hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 animate-pulse" />
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/10 hover:scale-105 transform transition-all duration-300 backdrop-blur-sm"
              >
                Book Demo
              </Button>
            </motion.div>

            {/* Metrics with staggered animation */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8">
              {metrics.map((metric, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.7 }}
                  className={`p-6 rounded-xl backdrop-blur-sm ${
                    currentMetric === index 
                      ? 'bg-white/20 ring-2 ring-white/30 scale-105' 
                      : 'bg-white/10 hover:bg-white/15'
                  } transition-all duration-500`}
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-white to-ninva-light bg-clip-text text-transparent">
                    {metric.value}
                  </div>
                  <div className="text-sm text-ninva-light mt-2">{metric.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Visual section with feature cards */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className={`mt-12 lg:mt-0 ${currentVariant.visual}`}
          >
            <DeviceShowcase />
          </motion.div>
        </div>
      </div>

      {/* Chat Button with pulse effect */}
      {showChat && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
          className="fixed bottom-4 right-4"
        >
          <button className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-ninva-light to-ninva-tertiary rounded-full blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-flow"></div>
            <div className="relative px-4 py-4 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300">
              <MessageSquare className="w-6 h-6 text-ninva" />
              <div className="absolute top-0 right-0 w-3 h-3 bg-ninva-secondary rounded-full border-2 border-white animate-pulse" />
            </div>
          </button>
        </motion.div>
      )}
    </section>
  );
};