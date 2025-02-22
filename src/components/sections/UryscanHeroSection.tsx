
import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Sparkles, ChartBar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HeroPill } from '@/components/ui/hero-pill';
import { RainbowButton } from '@/components/ui/rainbow-button';

interface UryscanHeroSectionProps {
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

export const UryscanHeroSection: React.FC<UryscanHeroSectionProps> = ({
  title = "Advanced nutrition parameters",
  subtitle = "UryScan G1 brings precise urine analysis home, helping you capture key nutritional insights for optimal health monitoring.",
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
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex justify-center mb-6"
          >
            <HeroPill 
              href="#register"
              announcement="Coming Soon"
              label="Revolutionary UryScan launching soon. Register your interest"
              className="inline-flex"
            />
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-ninva-darker leading-tight tracking-tight mb-6"
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
            className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto"
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
              className="h-12 px-8"
            >
              Explore Features
            </RainbowButton>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-ninva text-ninva hover:bg-ninva/5 transition-all duration-300"
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
            className="grid grid-cols-1 gap-4"
          >
            {[
              {
                icon: <Brain className="w-6 h-6 text-ninva" />,
                title: "Advanced AI Analysis",
                description: "Real-time processing of health metrics for instant insights"
              },
              {
                icon: <Sparkles className="w-6 h-6 text-ninva" />,
                title: "Personalized Recommendations",
                description: "Tailored health suggestions based on your unique profile"
              },
              {
                icon: <ChartBar className="w-6 h-6 text-ninva" />,
                title: "Predictive Analytics",
                description: "Anticipate health trends and potential concerns early"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.8 }}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-ninva/10 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-ninva/10 w-10 h-10 rounded-lg flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-ninva-darker mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
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
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/20 rounded-lg" />
            <img 
              src="/lovable-uploads/92c9bfcc-c86c-49c3-98cd-0fa4bf7b844e.png"
              alt="UryScan Device" 
              className="w-full h-auto object-contain relative z-10 mx-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              style={{
                maxWidth: '288px'
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
