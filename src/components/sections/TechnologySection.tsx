import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Activity, Brain, Shield } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const TechnologySection = () => {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Analysis",
      description: "Advanced algorithms process your health data in real-time"
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Continuous Monitoring",
      description: "24/7 health tracking with instant alerts"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Data Security",
      description: "Enterprise-grade encryption and privacy protection"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.215, 0.610, 0.355, 1.000]
      }
    }
  };

  return (
    <section className="section-padding bg-gradient-to-b from-background to-white">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="space-y-16"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto">
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
          <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </Card>
            ))}
          </motion.div>

          {/* Preview Section */}
          <motion.div
            variants={itemVariants}
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