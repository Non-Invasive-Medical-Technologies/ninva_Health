import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Shield, Activity, Sparkles } from 'lucide-react';
import { Card } from '@/components/ui/card';

export const DeviceShowcase = () => {
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-ninva-light" />,
      title: "AI Analysis",
      description: "Real-time health insights powered by advanced AI",
      gradient: "from-blue-500/20 to-purple-500/20"
    },
    {
      icon: <Shield className="w-6 h-6 text-ninva-light" />,
      title: "Data Security",
      description: "Enterprise-grade encryption for your health data",
      gradient: "from-emerald-500/20 to-teal-500/20"
    },
    {
      icon: <Activity className="w-6 h-6 text-ninva-light" />,
      title: "Health Monitoring",
      description: "Continuous tracking of vital health metrics",
      gradient: "from-orange-500/20 to-amber-500/20"
    },
    {
      icon: <Sparkles className="w-6 h-6 text-ninva-light" />,
      title: "Smart Insights",
      description: "Personalized health recommendations",
      gradient: "from-pink-500/20 to-rose-500/20"
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
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          className="relative group"
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-75`} />
          <Card className="relative p-4 bg-white/10 backdrop-blur-sm border-white/20 h-full hover:bg-white/20 transition-all duration-300">
            <div className="flex flex-col space-y-3">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-white group-hover:text-ninva-light transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-sm text-ninva-light/90 group-hover:text-white transition-colors duration-300">
                {feature.description}
              </p>
            </div>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
};