import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Dna, Brain, Microscope, Activity } from 'lucide-react';
import { Card } from '@/components/ui/card';

export const TechnologySection = () => {
  const features = [
    {
      number: "01",
      title: "Personalized Health Solutions",
      description: "Tailored healthcare monitoring for your unique needs",
      icon: <Dna className="w-6 h-6" />
    },
    {
      number: "02",
      title: "Precision And Accuracy",
      description: "Medical-grade diagnostics with proven reliability",
      icon: <Microscope className="w-6 h-6" />
    },
    {
      number: "03",
      title: "Scientific Innovation",
      description: "Cutting-edge technology for better health outcomes",
      icon: <Brain className="w-6 h-6" />
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
    <section className="py-24 bg-gradient-to-b from-white to-ninva/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="space-y-16"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Delivering reliable medical and wellness data
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Taking the complication out of running a digital health program for care teams across chronic disease prevention, remote monitoring, clinical research and more.
            </p>
          </motion.div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="relative"
              >
                <Card className="p-6 h-full bg-white/80 backdrop-blur border border-ninva/10 hover:border-ninva/20 transition-colors">
                  <div className="flex items-start justify-between">
                    <span className="inline-flex items-center justify-center rounded-lg bg-ninva/5 p-2">
                      {feature.icon}
                    </span>
                    <span className="text-4xl font-light text-ninva/20">{feature.number}</span>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-gray-600">
                    {feature.description}
                  </p>
                  <div className="mt-4 flex items-center text-ninva hover:text-ninva-dark transition-colors">
                    <span className="text-sm font-medium">Learn more</span>
                    <ArrowUpRight className="ml-1 w-4 h-4" />
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Technology Showcase */}
          <motion.div
            variants={itemVariants}
            className="mt-16 bg-white rounded-2xl overflow-hidden shadow-xl"
          >
            <div className="grid md:grid-cols-2 gap-8 p-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  Advanced Health Monitoring Platform
                </h3>
                <p className="text-gray-600">
                  Our patented technologies provide continuous access to more consistent patient data through a remote patient monitoring solution and a portfolio of devices, including blood pressure monitors, connected scales, an advanced sleep system, a smart temporal thermometer, and hybrid smartwatches.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2 text-ninva">
                    <Activity className="w-5 h-5" />
                    <span className="font-medium">Real-time monitoring</span>
                  </div>
                  <div className="flex items-center space-x-2 text-ninva">
                    <Brain className="w-5 h-5" />
                    <span className="font-medium">AI-powered insights</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/lovable-uploads/2b09a7bb-11a8-49c4-a67c-36d3de941c17.png"
                  alt="Health monitoring dashboard"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};