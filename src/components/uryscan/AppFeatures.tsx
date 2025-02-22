
import React from 'react';
import { motion } from 'framer-motion';

export const AppFeatures = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold">
              Build your personalized nutrition strategy
            </h2>
            <p className="text-lg text-gray-600">
              Discover your ideal U-Scan Nutrio plan, tailored to your nutritional needs—whether 
              for basic guidance or a more focused approach. Enjoy complimentary access to the 
              health app for exclusive content and step-by-step programs to optimize your health.
            </p>
            <p className="text-sm text-gray-500 italic">
              Please be advised that upon cancellation of your UryScan subscription package, 
              access to the app will be automatically terminated.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="/lovable-uploads/6c8a9554-c953-4d11-bd76-71ca1123fdf5.png"
              alt="UryScan Device in Hand"
              className="w-full h-auto rounded-2xl shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
