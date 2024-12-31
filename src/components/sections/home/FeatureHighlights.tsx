import React from 'react';
import { Heart, Activity, Lock } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { UserFlowSection } from './UserFlowSection';

export const FeatureHighlights = () => {
  const features = [
    {
      title: "Advanced Health Monitoring",
      description: "Revolutionary multi-parameter health assessment powered by AI",
      icon: <Heart className="w-8 h-8 text-medical-primary" />,
      gradient: "from-medical-primary to-medical-secondary"
    },
    {
      title: "Medical-Grade Precision",
      description: "Professional diagnostics meeting clinical standards",
      icon: <Activity className="w-8 h-8 text-medical-secondary" />,
      gradient: "from-medical-secondary to-medical-success"
    },
    {
      title: "Privacy First",
      description: "Bank-grade encryption and HIPAA compliance",
      icon: <Lock className="w-8 h-8 text-medical-success" />,
      gradient: "from-medical-success to-medical-primary"
    }
  ];

  return (
    <>
      <div className="bg-gradient-to-b from-white to-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl font-extrabold sm:text-4xl bg-gradient-to-r from-medical-primary via-medical-secondary to-medical-success bg-clip-text text-transparent animate-gradient-flow"
            >
              Advanced Health Monitoring
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-4 text-xl text-gray-600"
            >
              Professional-grade diagnostics in the comfort of your home
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className="relative overflow-hidden group hover:shadow-xl transition-shadow duration-300 p-6">
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-lg bg-white shadow-lg flex items-center justify-center mb-6">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <UserFlowSection />
    </>
  );
};