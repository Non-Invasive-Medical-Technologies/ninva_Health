import React from 'react';
import { motion } from 'framer-motion';
import { Navigation } from '@/components/layout/Navigation';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const Technology = () => {
  const metrics = [
    { label: 'Accuracy', value: '99.9%' },
    { label: 'Processing Time', value: '<1s' },
    { label: 'Parameters', value: '15+' },
  ];

  return (
    <div className="min-h-screen bg-surface-light">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] pt-24">
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
                    transition={{ duration: 0.6, delay: 0.2 * (index + 1) }}
                    className="text-center"
                  >
                    <div className="text-2xl font-bold text-medical-primary mb-2">{metric.value}</div>
                    <div className="text-sm text-gray-600">{metric.label}</div>
                  </motion.div>
                ))}
              </div>
              <Button className="bg-medical-primary hover:bg-medical-primary/90">
                Learn More <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>

          {/* Device Image - Fixed at bottom */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-5xl">
            <motion.img
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              src="/lovable-uploads/72171c40-73cd-49ba-97c2-11411ae5ac6a.png"
              alt="Kolibri Health Device"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Features</h2>
          <p className="text-lg text-gray-600 mb-4">
            Discover the innovative features that set Kolibri apart in health monitoring technology.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Real-time health data tracking</li>
            <li>Comprehensive health insights</li>
            <li>User-friendly interface</li>
            <li>Seamless integration with other health apps</li>
          </ul>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-24 bg-surface-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Integration</h2>
          <p className="text-lg text-gray-600 mb-4">
            Kolibri easily integrates with various health platforms to provide a holistic view of your health.
          </p>
          <p className="text-lg text-gray-600">
            Connect with your favorite health apps and devices to enhance your health monitoring experience.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Technology;
