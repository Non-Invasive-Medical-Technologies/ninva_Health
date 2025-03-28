
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Activity, Brain, Shield } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BentoGrid, BentoCard } from '@/components/ui/bento-grid';

export const TechnologySection = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-primary" />,
      title: "AI-Powered Analysis",
      description: "Advanced algorithms process your health data in real-time",
      colSpan: "col-span-1"
    },
    {
      icon: <Activity className="w-8 h-8 text-primary" />,
      title: "Continuous Monitoring",
      description: "24/7 health tracking with instant alerts",
      colSpan: "col-span-1"
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Data Security",
      description: "Enterprise-grade encryption and privacy protection",
      colSpan: "col-span-1"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-background to-white">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-16"
        >
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Advanced Technology for
              <span className="gradient-text block">Better Health Insights</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Our cutting-edge technology transforms complex health data into actionable insights,
              making healthcare management simpler and more effective.
            </p>
          </motion.div>

          {/* Feature Grid */}
          <BentoGrid>
            {features.map((feature, index) => (
              <BentoCard
                key={index}
                animated={true}
                title={feature.title}
                description={feature.description}
                colSpan={feature.colSpan as "col-span-1" | "col-span-2"}
                icon={feature.icon}
              />
            ))}
          </BentoGrid>

          {/* Preview Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="glass-card rounded-2xl overflow-hidden"
          >
            <div className="grid md:grid-cols-2 gap-8 p-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground">
                  Experience the Future of Health Monitoring
                </h3>
                <p className="text-muted-foreground">
                  Our patented technologies provide continuous access to reliable patient data
                  through an advanced remote monitoring solution and a comprehensive suite of
                  connected health devices.
                </p>
                <Button className="primary-button group">
                  Learn More 
                  <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </div>
              <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Placeholder for video/animation content */}
                  <p className="text-muted-foreground text-center">
                    Technology Preview
                    <span className="block text-sm">Upload your video to see it here</span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
