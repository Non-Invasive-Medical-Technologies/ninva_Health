import React from 'react';
import { Navigation } from '@/components/layout/Navigation';
import { TechnologySection } from '@/components/sections/TechnologySection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import { FloatingChat } from '@/components/chat/FloatingChat';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Brain, Shield, Link2 } from 'lucide-react';

const Technology = () => {
  const metrics = [
    { value: '2020', label: 'Patent Granted' },
    { value: '10+', label: 'Years Research' },
    { value: '99.9%', label: 'Accuracy Rate' }
  ];

  const subPages = [
    {
      title: 'AI & Analytics',
      description: 'Advanced algorithms and machine learning capabilities',
      icon: Brain,
      path: '/technology/ai'
    },
    {
      title: 'Security',
      description: 'Enterprise-grade security and compliance',
      icon: Shield,
      path: '/technology/security'
    },
    {
      title: 'Integration',
      description: 'Seamless connectivity with healthcare systems',
      icon: Link2,
      path: '/technology/integration'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-surface-light to-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 md:pt-32 md:pb-48 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-medical-primary">Advanced Health</span>
                <span className="block mt-2">Analytics Technology</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                With just one action, Kolibri provides a comprehensive assessment of your cardiovascular and respiratory health. Experience the effortless and simultaneous measurement of your electrocardiogram and blood oxygen saturation levels.
              </p>
              <div className="grid grid-cols-3 gap-8 mb-8">
                {metrics.map((metric, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center p-4 rounded-lg bg-surface-light"
                  >
                    <div className="text-2xl font-bold text-medical-primary">{metric.value}</div>
                    <div className="text-sm text-gray-600 mt-1">{metric.label}</div>
                  </motion.div>
                ))}
              </div>
              <div className="flex gap-4">
                <Button className="bg-medical-primary hover:bg-medical-primary/90">
                  Learn More
                </Button>
                <Button variant="outline" className="border-medical-primary text-medical-primary hover:bg-medical-primary/5">
                  Watch Demo
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Device Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-4xl mx-auto px-4"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-b from-medical-primary/10 to-medical-secondary/10 rounded-3xl transform -rotate-1 scale-105 blur-xl" />
              <img
                src="/lovable-uploads/72171c40-73cd-49ba-97c2-11411ae5ac6a.png"
                alt="Kolibri Health Device"
                className="relative z-10 w-full h-auto object-contain"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technology Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-medical-primary mb-4">
              Technology Solutions
            </h2>
            <p className="text-lg text-gray-600">
              Explore our comprehensive suite of healthcare technology
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {subPages.map((page, index) => (
              <Link 
                key={index}
                to={page.path}
                className="group"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-lg bg-medical-primary/10 text-medical-primary">
                      <page.icon className="w-6 h-6" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-medical-primary group-hover:text-medical-primary/80 transition-colors">
                    {page.title}
                  </h3>
                  <p className="text-gray-600">
                    {page.description}
                  </p>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24 bg-surface-light">
        <HowItWorksSection />
      </section>

      {/* Technology Details */}
      <section className="py-16 md:py-24 bg-white">
        <TechnologySection />
      </section>

      <Footer />
      <FloatingChat />
    </div>
  );
};

export default Technology;
