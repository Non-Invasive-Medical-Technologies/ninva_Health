import React from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, Brain, Laptop, Users } from 'lucide-react';

export const TechnologySection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-12"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4"
          >
            Delivering reliable medical and wellness data
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Taking the complication out of running a digital health program for care teams across chronic disease prevention, remote monitoring, clinical research and more.
          </motion.p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mt-16"
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <motion.div 
                className="h-64 bg-ninva/5 rounded-xl flex items-center justify-center mb-8"
              >
                <div className="grid grid-cols-2 gap-4">
                  {[Stethoscope, Brain, Laptop, Users].map((Icon, index) => (
                    <motion.div
                      key={index}
                      variants={iconVariants}
                      whileHover={{ scale: 1.1 }}
                      className="flex items-center justify-center"
                    >
                      <Icon className="w-16 h-16 text-ninva transition-colors duration-300 hover:text-ninva-dark" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              <motion.h3 
                variants={itemVariants}
                className="text-2xl font-semibold text-gray-900 mb-4"
              >
                Patented Technologies
              </motion.h3>
              <motion.p 
                variants={itemVariants}
                className="text-gray-600"
              >
                Our patented technologies provide continuous access to more consistent patient data through a remote patient monitoring solution and a portfolio of devices, including blood pressure monitors, connected scales, an advanced sleep system, a smart temporal thermometer, and hybrid smartwatches.
              </motion.p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <motion.div 
                className="h-64 bg-ninva/5 rounded-xl p-8 flex items-center justify-center mb-8"
              >
                <motion.div 
                  variants={containerVariants}
                  className="text-center space-y-4"
                >
                  <motion.div
                    variants={iconVariants}
                    whileHover={{ scale: 1.1 }}
                    className="inline-flex items-center justify-center p-4 bg-white rounded-full shadow-md"
                  >
                    <Users className="w-12 h-12 text-ninva transition-colors duration-300 hover:text-ninva-dark" />
                  </motion.div>
                  <motion.h4 
                    variants={itemVariants}
                    className="text-xl font-semibold text-gray-900"
                  >
                    Higher-Quality Care
                  </motion.h4>
                  <motion.p 
                    variants={itemVariants}
                    className="text-gray-600"
                  >
                    Supporting both care teams and patients
                  </motion.p>
                </motion.div>
              </motion.div>
              <motion.h3 
                variants={itemVariants}
                className="text-2xl font-semibold text-gray-900 mb-4"
              >
                Comprehensive Care Support
              </motion.h3>
              <motion.p 
                variants={itemVariants}
                className="text-gray-600"
              >
                We help both care teams and patients achieve higher-quality care through our integrated platform and comprehensive device portfolio.
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};