import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Sparkles, ChartBar } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block px-4 py-1 rounded-full bg-ninva/10 text-ninva mb-6"
            >
              AI & Analytics
            </motion.div>
            
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
              className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0"
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
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button 
                size="lg" 
                className="bg-ninva hover:bg-ninva-dark text-white"
                onClick={onGetStarted}
              >
                Explore Features
              </Button>
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

          {/* Feature Cards */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="grid grid-cols-1 gap-6"
            >
              {[
                {
                  icon: <Brain className="w-8 h-8 text-ninva" />,
                  title: "Advanced AI Analysis",
                  description: "Real-time processing of health metrics for instant insights"
                },
                {
                  icon: <Sparkles className="w-8 h-8 text-ninva" />,
                  title: "Personalized Recommendations",
                  description: "Tailored health suggestions based on your unique profile"
                },
                {
                  icon: <ChartBar className="w-8 h-8 text-ninva" />,
                  title: "Predictive Analytics",
                  description: "Anticipate health trends and potential concerns early"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + (index * 0.1), duration: 0.8 }}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-ninva/10"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-ninva/10 w-12 h-12 rounded-lg flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-ninva-darker mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/20 rounded-3xl" />
              <img
                src="/lovable-uploads/2afd0ae0-a1fa-4901-8295-713b02a4b474.png"
                alt="Kolibri Health Device"
                className="w-full h-auto object-contain relative z-10"
                style={{
                  filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.1))',
                  maxHeight: '300px'
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
