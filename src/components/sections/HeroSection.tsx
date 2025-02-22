
import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Sparkles, ChartBar } from 'lucide-react';
import { cn } from "@/lib/utils";
import { Button } from '@/components/ui/button';
import { RainbowButton } from '@/components/ui/rainbow-button';
import { HeroPill } from '@/components/ui/hero-pill';

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  metrics?: Array<{
    value: string;
    label: string;
  }>;
  onGetStarted: () => void;
  onLearnMore: () => void;
  onViewDemo: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  title = "Transform Your Health With AI-Powered Precision",
  subtitle = "Our advanced AI algorithms analyze your health data in real-time, providing personalized insights and actionable recommendations for optimal wellness.",
  metrics = [],
  onGetStarted,
  onLearnMore,
  onViewDemo
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-ninva/5 to-white pt-20 pb-16 lg:pt-32 lg:pb-24">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <HeroPill
            href="#register"
            label="Register your interest"
            announcement="Revolutionary UryScan launching soon"
            className="mx-auto mb-6"
          />
          
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-ninva-darker mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {title.split(' ').slice(0, -2).join(' ')}
            <span className="block text-ninva">
              {title.split(' ').slice(-2).join(' ')}
            </span>
          </motion.h1>

          <motion.p 
            className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <RainbowButton
              onClick={onGetStarted}
              className="text-white"
            >
              Explore Features
            </RainbowButton>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-ninva text-ninva hover:bg-ninva/5"
              onClick={onViewDemo}
            >
              View Demo
            </Button>
          </motion.div>
        </motion.div>

        {/* Features and Device Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-4"
          >
            {[
              {
                icon: <Brain className="w-6 h-6" />,
                title: "Advanced AI Analysis",
                description: "Real-time processing of health metrics"
              },
              {
                icon: <Sparkles className="w-6 h-6" />,
                title: "Personalized Insights",
                description: "Tailored to your unique profile"
              },
              {
                icon: <ChartBar className="w-6 h-6" />,
                title: "Predictive Analytics",
                description: "Anticipate health trends early"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + (index * 0.1), duration: 0.8 }}
                className={cn(
                  "group relative p-4 border-r border-b last:border-r-0 hover:bg-gradient-to-t from-neutral-100 to-transparent",
                  "transition-all duration-200"
                )}
              >
                <div className="relative z-10">
                  <div className="mb-4 text-ninva">
                    {item.icon}
                  </div>
                  <h3 className="text-sm font-semibold mb-1 group-hover:translate-x-2 transition-transform duration-200">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-600">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Device Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/20 rounded-3xl" />
            <img
              src="/lovable-uploads/92c9bfcc-c86c-49c3-98cd-0fa4bf7b844e.png"
              alt="UryScan Device"
              className="w-full h-auto object-contain relative z-10 mx-auto"
              style={{
                filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.1))',
                maxWidth: '400px'
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
