
import React from 'react';
import { Navigation } from '@/components/layout/Navigation';
import { AIHeroSection } from '@/components/sections/AIHeroSection';
import Footer from '@/components/layout/Footer';
import { FloatingChat } from '@/components/chat/FloatingChat';
import { DataSection } from '@/components/sections/DataSection';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AI = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-surface-light to-white">
      <Navigation />
      <AIHeroSection />
      
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 text-ninva">How AI Powers Your Health</h2>
            <p className="text-gray-600">
              Our advanced AI algorithms process multiple health parameters simultaneously, 
              providing you with actionable insights and personalized recommendations.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Data Acquisition",
                description: "Secure collection of health metrics from our non-invasive device"
              },
              {
                title: "AI Processing",
                description: "Advanced algorithms analyze patterns and correlations in your data"
              },
              {
                title: "Personalized Insights",
                description: "Customized recommendations based on your unique health profile"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white p-6 rounded-xl shadow-md border border-ninva/10"
              >
                <div className="flex items-start">
                  <div className="bg-ninva/10 w-10 h-10 rounded-full flex items-center justify-center text-ninva font-bold mr-4">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-ninva-darker mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-12"
          >
            <Link to="/technology">
              <Button 
                className="bg-ninva hover:bg-ninva/90"
              >
                Explore All Technology <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
      
      <DataSection />
      <Footer />
      <FloatingChat />
    </div>
  );
};

export default AI;
