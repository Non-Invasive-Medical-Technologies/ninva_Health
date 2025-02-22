
import React from 'react';
import { motion } from 'framer-motion';

export const DeviceShowcase = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold">
              The revolutionary toilet plug-in urine scanner
            </h2>
            <p className="text-lg text-gray-600">
              Your urine holds a wealth of health information through its 3,000 metabolites, 
              but this data usually goes unmeasured. The UryScan cartridge brings precise 
              urine analysis home, tracking four essential markers to help optimise your 
              nutrition with personalised recommendations.
            </p>
            <img
              src="/lovable-uploads/3fc56e76-5894-49aa-b415-1b81af4437b0.png"
              alt="UryScan Device"
              className="w-full h-auto rounded-2xl shadow-xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Advanced nutrition parameters</h3>
              <p className="text-lg text-gray-600">
                Get a clear picture of your body's response to nutrition through four crucial health parameters.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Tailored health plan</h3>
              <p className="text-lg text-gray-600">
                Build your personalized nutrition strategy. Choose a measurement plan that 
                matches your lifestyle and health needs and gain access to premium resources 
                like exclusive content and programs.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">In-depth insights</h3>
              <p className="text-lg text-gray-600">
                Discover how your diet correlates to your body. The uryScan device automatically 
                sends urine analysis results to your app, revealing four key nutritional 
                insights about your body's response to different foods.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
