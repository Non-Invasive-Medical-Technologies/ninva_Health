
import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Sparkles, Activity, BarChart, Smartphone } from 'lucide-react';

export const FeaturesGrid = () => {
  const features = [
    {
      title: "Personalized nutrition strategy",
      description: "Tailored recommendations based on your unique profile",
      icon: <Sparkles className="h-12 w-12 text-ninva" />
    },
    {
      title: "Seamless experience",
      description: "Easy integration with your daily routine",
      icon: <Activity className="h-12 w-12 text-ninva" />
    },
    {
      title: "25+ tests per cartridge",
      description: "Comprehensive health monitoring",
      icon: <BarChart className="h-12 w-12 text-ninva" />
    },
    {
      title: "Health Analysis App",
      description: "Track your progress on the go",
      icon: <Smartphone className="h-12 w-12 text-ninva" />
    }
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900">
            UryScan G1 brings precise urine analysis home
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="p-4 rounded-2xl bg-ninva/5 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
