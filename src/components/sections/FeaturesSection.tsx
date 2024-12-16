import React from 'react';
import { Dna, Microscope, Brain, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const FeaturesSection = () => {
  const features = [
    {
      number: "01",
      title: "Personalized Health Solutions",
      description: "Tailored healthcare monitoring for your unique needs",
      icon: <Dna className="w-6 h-6 text-ninva" />
    },
    {
      number: "02",
      title: "Precision And Accuracy",
      description: "Medical-grade diagnostics with proven reliability",
      icon: <Microscope className="w-6 h-6 text-ninva" />
    },
    {
      number: "03",
      title: "Scientific Innovation",
      description: "Cutting-edge technology for better health outcomes",
      icon: <Brain className="w-6 h-6 text-ninva" />
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <span className="inline-flex items-center justify-center">
                    {feature.icon}
                  </span>
                  <span className="text-4xl font-light text-ninva/20">{feature.number}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {feature.description}
                </p>
                <button className="flex items-center text-ninva hover:text-ninva-dark transition-colors">
                  <span className="text-sm font-medium">Learn more</span>
                  <ArrowUpRight className="ml-1 w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};