import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Shield, Activity, Sparkles } from 'lucide-react';
import { Card } from '@/components/ui/card';

export const DeviceShowcase = () => {
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-ninva-light" />,
      title: "AI Analysis",
      description: "Real-time health insights powered by advanced AI"
    },
    {
      icon: <Shield className="w-6 h-6 text-ninva-light" />,
      title: "Data Security",
      description: "Enterprise-grade encryption for your health data"
    },
    {
      icon: <Activity className="w-6 h-6 text-ninva-light" />,
      title: "Health Monitoring",
      description: "Continuous tracking of vital health metrics"
    },
    {
      icon: <Sparkles className="w-6 h-6 text-ninva-light" />,
      title: "Smart Insights",
      description: "Personalized health recommendations"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.6 }}
      className="grid grid-cols-2 gap-4 p-4"
    >
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.8 + (index * 0.1)
          }}
        >
          <Card className="p-4 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 h-full">
            <div className="flex flex-col space-y-3">
              <div className="w-12 h-12 rounded-lg bg-ninva/20 flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-white">
                {feature.title}
              </h3>
              <p className="text-sm text-ninva-light">
                {feature.description}
              </p>
            </div>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
};