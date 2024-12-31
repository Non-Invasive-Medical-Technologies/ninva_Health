import React from 'react';
import { motion } from 'framer-motion';
import { User, Heart, Stethoscope, FileText, ArrowRight } from 'lucide-react';

export const UserFlowSection = () => {
  const steps = [
    {
      icon: <User className="w-8 h-8" />,
      title: "Create Profile",
      description: "Set up your personal health profile"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Health Monitoring",
      description: "Track vital signs and health metrics"
    },
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "Professional Analysis",
      description: "AI-powered health insights"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Health Reports",
      description: "Detailed health assessments"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-surface-light to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold bg-gradient-to-r from-medical-primary via-medical-secondary to-medical-success bg-clip-text text-transparent animate-gradient-flow"
          >
            Your Health Journey
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-gray-600"
          >
            Experience seamless health monitoring in four simple steps
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-medical-primary/10">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-medical-primary to-medical-secondary flex items-center justify-center text-white mb-4 mx-auto">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-center">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-medical-primary/30" />
                  </div>
                )}
              </motion.div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};