
import React from 'react';
import { Dna, Microscope, Brain, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { BentoGrid, BentoCard } from '@/components/ui/bento-grid';

export const FeaturesSection = () => {
  const features = [
    {
      number: "01",
      title: "Personalized Health Solutions",
      description: "Tailored healthcare monitoring for your unique needs",
      icon: <Dna className="w-6 h-6 text-ninva" />,
      colSpan: "col-span-1"
    },
    {
      number: "02",
      title: "Precision And Accuracy",
      description: "Medical-grade diagnostics with proven reliability",
      icon: <Microscope className="w-6 h-6 text-ninva" />,
      colSpan: "col-span-1"
    },
    {
      number: "03",
      title: "Scientific Innovation",
      description: "Cutting-edge technology for better health outcomes",
      icon: <Brain className="w-6 h-6 text-ninva" />,
      colSpan: "col-span-1"
    }
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BentoGrid>
          {features.map((feature, index) => (
            <BentoCard
              key={index}
              animated={true}
              title={feature.title}
              description={feature.description}
              colSpan={feature.colSpan as "col-span-1" | "col-span-2"}
              icon={
                <div className="flex items-start justify-between w-full">
                  <div className="flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <span className="text-4xl font-light text-ninva/20">{feature.number}</span>
                </div>
              }
            />
          ))}
        </BentoGrid>
        
        <div className="mt-8 flex justify-center">
          <button className="flex items-center text-ninva hover:text-ninva-dark transition-colors">
            <span className="text-sm font-medium">Learn more</span>
            <ArrowUpRight className="ml-1 w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
