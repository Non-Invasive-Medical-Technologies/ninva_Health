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

    return () => clearInterval(metricInterval);
  }, [metrics.length]);

  return (
    <section className="min-h-[80vh] relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-ninva via-ninva-secondary to-ninva-tertiary animate-gradient-wave opacity-90" />
      
      <div className="relative">
        <div className={`max-w-7xl mx-auto ${currentVariant.layout} px-4 py-16 lg:py-24`}>
          <div className={`space-y-8 ${currentVariant.content}`}>
            {/* Title */}
            <motion.h1 
              className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              } transition-all duration-700`}
            >
              {title}
              <span className="block text-ninva-light mt-2">
                AI-Powered Precision
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-ninva-light/90 max-w-2xl"
            >
              {subtitle}
            </motion.p>
            
            {/* Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Button 
                size="lg"
                className="bg-white text-ninva hover:bg-ninva-light transition-colors duration-300"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10 transition-colors duration-300"
              >
                Book Demo
              </Button>
            </motion.div>

            {/* Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8">
              {metrics.map((metric, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className={`p-6 rounded-xl backdrop-blur-sm ${
                    currentMetric === index 
                      ? 'bg-white/20 ring-2 ring-white/30' 
                      : 'bg-white/10'
                  } transition-all duration-300`}
                >
                  <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
                  <div className="text-sm text-ninva-light">{metric.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Device Showcase */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className={`mt-12 lg:mt-0 ${currentVariant.visual}`}
          >
            <DeviceShowcase />
          </motion.div>
        </div>
      </div>

      {/* Chat Button */}
      {showChat && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
          className="fixed bottom-4 right-4"
        >
          <button className="relative w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-ninva-light transition-colors duration-300">
            <MessageSquare className="w-6 h-6 text-ninva" />
            <div className="absolute top-0 right-0 w-3 h-3 bg-ninva-secondary rounded-full border-2 border-white" />
          </button>
        </motion.div>
      )}
    </section>
  );
};