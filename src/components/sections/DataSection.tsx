
import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, BarChart, Shield } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { FlickeringGrid } from '@/components/ui/flickering-grid';

export const DataSection = () => {
  const features = [
    {
      icon: <LineChart className="w-6 h-6" />,
      title: "Real-time Analytics",
      description: "Instant health insights from continuous monitoring"
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: "Trend Analysis",
      description: "Track your health patterns over time"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure Storage",
      description: "Your data is protected with enterprise-grade security"
    }
  ];

  return (
    <section className="section-padding bg-muted relative overflow-hidden">
      {/* Flickering Grid Background */}
      <div className="absolute inset-0 z-0">
        <FlickeringGrid 
          color="#1d617a" 
          maxOpacity={0.65} 
          squareSize={5}
          gridGap={8}
          flickerChance={0.25}
        />
      </div>
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Delivering Reliable
            <span className="gradient-text block">Medical Insights</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Taking the complexity out of health monitoring with comprehensive analytics
            and insights for better healthcare management.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300 bg-card/90 backdrop-blur-sm">
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
      </div>
    </section>
  );
};
