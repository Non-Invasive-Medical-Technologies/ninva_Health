import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Activity } from 'lucide-react';
import { Card } from '@/components/ui/card';

export const TechnologySection = () => {
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
            <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-ninva to-[#0EA5E9] bg-clip-text text-transparent sm:text-4xl">
              Delivering reliable medical and wellness data
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Taking the complication out of running a digital health program for care teams across chronic disease prevention, remote monitoring, clinical research and more.
            </p>
          </motion.div>

          {/* Content Section */}
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
                </div>
              </div>
              <div className="relative">
                {/* Placeholder for future technology visualization */}
                <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">Technology Preview</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};