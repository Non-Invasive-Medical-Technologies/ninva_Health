import React from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, Brain, Laptop, Users } from 'lucide-react';

export const TechnologySection = () => {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Delivering reliable medical and wellness data
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Taking the complication out of running a digital health program for care teams across chronic disease prevention, remote monitoring, clinical research and more.
          </p>
        </motion.div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="h-64 bg-ninva/5 rounded-xl flex items-center justify-center mb-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center justify-center">
                    <Stethoscope className="w-16 h-16 text-ninva" />
                  </div>
                  <div className="flex items-center justify-center">
                    <Brain className="w-16 h-16 text-ninva" />
                  </div>
                  <div className="flex items-center justify-center">
                    <Laptop className="w-16 h-16 text-ninva" />
                  </div>
                  <div className="flex items-center justify-center">
                    <Users className="w-16 h-16 text-ninva" />
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Patented Technologies
              </h3>
              <p className="text-gray-600">
                Our patented technologies provide continuous access to more consistent patient data through a remote patient monitoring solution and a portfolio of devices, including blood pressure monitors, connected scales, an advanced sleep system, a smart temporal thermometer, and hybrid smartwatches.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="h-64 bg-ninva/5 rounded-xl p-8 flex items-center justify-center mb-8">
                <div className="text-center space-y-4">
                  <div className="inline-flex items-center justify-center p-4 bg-white rounded-full shadow-md">
                    <Users className="w-12 h-12 text-ninva" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900">
                    Higher-Quality Care
                  </h4>
                  <p className="text-gray-600">
                    Supporting both care teams and patients
                  </p>
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Comprehensive Care Support
              </h3>
              <p className="text-gray-600">
                We help both care teams and patients achieve higher-quality care through our integrated platform and comprehensive device portfolio.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};