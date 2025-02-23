
import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

export const HowItWorksSection = () => {
  const steps = [
    {
      title: "Easy Installation",
      description: "Simply attach UryScan G1 to your toilet bowl - no complex setup required",
      image: "/lovable-uploads/92c9bfcc-c86c-49c3-98cd-0fa4bf7b844e.png"
    },
    {
      title: "Automatic Analysis",
      description: "The device automatically analyzes your samples and sends data to your phone",
      image: "/lovable-uploads/89ae2761-e955-40d9-9660-03b8793c3d01.png"
    },
    {
      title: "Get Insights",
      description: "Receive detailed health insights and recommendations through our app",
      image: "/lovable-uploads/f7e8009e-b2d9-402b-9c97-0c705d964e62.png"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-ninva-darker mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience seamless health monitoring with our innovative technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-ninva/10 text-ninva rounded-full text-sm font-medium">
                      Step {index + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-ninva-darker mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {step.description}
                  </p>
                  <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                    <img 
                      src={step.image} 
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-12 text-center"
        >
          <Button 
            variant="outline"
            className="group"
          >
            Learn More 
            <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
