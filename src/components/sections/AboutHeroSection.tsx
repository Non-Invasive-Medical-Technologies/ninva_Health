import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Shield, Brain, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';

export const AboutHeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-medical-primary to-medical-secondary min-h-[85vh] pt-24">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 backdrop-blur-[100px] bg-white/5" />
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      </div>

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 lg:pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block px-4 py-1 rounded-full bg-white/10 text-white mb-6 border border-white/20"
            >
              About Ninva Health
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-display"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Revolutionizing
              <span className="block text-surface-light">Healthcare Technology</span>
            </motion.h1>

            <motion.p 
              className="text-lg text-white/90 mb-8 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              At Ninva Health, we're dedicated to transforming healthcare through innovative technology 
              and AI-powered solutions, making professional-grade health monitoring accessible to everyone.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link to="/features">
                <Button 
                  size="lg" 
                  className="bg-white text-medical-primary hover:bg-surface-light hover:text-medical-primary font-semibold px-8 w-full sm:w-auto"
                >
                  Explore Features
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/technology">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-white border-white/20 hover:bg-white/10 w-full sm:w-auto"
                >
                  Learn More
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Stats/Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              {
                icon: <Brain className="w-8 h-8 text-medical-primary" />,
                title: "AI-Powered Innovation",
                description: "Advanced health monitoring with machine learning"
              },
              {
                icon: <Shield className="w-8 h-8 text-medical-primary" />,
                title: "Privacy-First Approach",
                description: "HIPAA-compliant security measures"
              },
              {
                icon: <Heart className="w-8 h-8 text-medical-primary" />,
                title: "Patient-Centric Care",
                description: "Personalized health insights and recommendations"
              },
              {
                icon: <ArrowRight className="w-8 h-8 text-medical-primary" />,
                title: "Seamless Integration",
                description: "Works with your existing healthcare systems"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + (index * 0.1), duration: 0.8 }}
              >
                <Card className="p-6 bg-white/95 backdrop-blur-sm hover:bg-white transition-all duration-300">
                  <div className="bg-medical-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-medical-primary mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};