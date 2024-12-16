import React from 'react';
import { motion } from 'framer-motion';

export const DataSection = () => {
  console.log('[DataSection] Rendering DataSection');

  React.useEffect(() => {
    console.log('[DataSection] Component mounted');
    return () => {
      console.log('[DataSection] Component unmounted');
    };
  }, []);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-ninva to-[#0EA5E9] bg-clip-text text-transparent sm:text-4xl">
            Delivering reliable medical and wellness data
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Taking the complication out of running a digital health program for care teams across chronic disease prevention, remote monitoring, clinical research and more.
          </p>
        </motion.div>
      </div>
    </section>
  );
};