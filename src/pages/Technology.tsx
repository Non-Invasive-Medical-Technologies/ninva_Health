import React from 'react';
import { motion } from 'framer-motion';
import { Navigation } from '@/components/layout/Navigation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { AnalyticsSection } from '@/components/sections/AnalyticsSection';

const Technology = () => {
  const navigate = useNavigate();
  
  const metrics = [
    { value: '99.9%', label: 'Accuracy', description: 'Clinical-grade precision' },
    { value: '<1s', label: 'Processing Time', description: 'Real-time analysis' },
    { value: '15+', label: 'Parameters', description: 'Health markers tracked' },
  ];

  return (
    <div className="min-h-screen bg-surface-light">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-medical-dark">
                Advanced Health
                <span className="block mt-2">Analytics Technology</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-12">
                Experience the next generation of health monitoring with Kolibri's advanced technology. 
                Our device provides comprehensive cardiovascular and respiratory health assessment with 
                just one action.
              </p>
              
              {/* Metrics Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {metrics.map((metric, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 * (index + 1) }}
                  >
                    <Card className="p-6 hover:shadow-lg transition-shadow text-center bg-white">
                      <div className="text-5xl font-bold text-medical-primary mb-4">
                        {metric.value}
                      </div>
                      <div className="text-lg font-medium text-medical-dark mb-2">
                        {metric.label}
                      </div>
                      <div className="text-sm text-gray-600">
                        {metric.description}
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-medical-primary hover:bg-medical-primary/90"
                  onClick={() => navigate('/features')}
                >
                  Explore Features <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button 
                  variant="outline"
                  className="border-medical-primary text-medical-primary hover:bg-medical-primary/5"
                  onClick={() => window.open('https://calendly.com/your-demo-link', '_blank')}
                >
                  Book a Demo <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Device Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-16 max-w-4xl mx-auto"
          >
            <img
              src="/lovable-uploads/2afd0ae0-a1fa-4901-8295-713b02a4b474.png"
              alt="Kolibri Health Device"
              className="w-full h-auto object-contain"
              style={{
                filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.1))',
                maxHeight: '300px'
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 text-center">Advanced Features</h2>
            <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              Discover how our innovative technology transforms health monitoring with 
              professional-grade diagnostics and real-time health insights.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Real-time Monitoring",
                  description: "Continuous health tracking with instant updates and alerts",
                },
                {
                  title: "AI-Powered Analysis",
                  description: "Advanced algorithms for accurate health insights and predictions",
                },
                {
                  title: "Seamless Integration",
                  description: "Connect with your existing health apps and medical systems",
                }
              ].map((feature, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-3 text-medical-primary">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Analytics Section */}
      <AnalyticsSection />

      {/* Integration Section */}
      <section className="py-24 bg-surface-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Seamless Integration</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Connect with your favorite health platforms and enhance your monitoring experience
              with our comprehensive integration capabilities.
            </p>
            <Button 
              className="bg-medical-primary hover:bg-medical-primary/90"
              onClick={() => navigate('/technology/integration')}
            >
              Learn More About Integrations <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Technology;
