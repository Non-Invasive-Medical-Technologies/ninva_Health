import React from 'react';
import { motion } from 'framer-motion';
import { Navigation } from '@/components/layout/Navigation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Link, Shield, Database, Cloud } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Footer from '@/components/layout/Footer';

const Integration = () => {
  const navigate = useNavigate();

  const integrations = [
    {
      icon: <Database className="w-8 h-8 text-medical-primary" />,
      title: "EHR Systems",
      description: "Seamlessly connect with major Electronic Health Record systems for efficient data exchange",
    },
    {
      icon: <Link className="w-8 h-8 text-medical-primary" />,
      title: "Health Devices",
      description: "Integration with popular health monitoring devices and wearables",
    },
    {
      icon: <Cloud className="w-8 h-8 text-medical-primary" />,
      title: "Cloud Services",
      description: "Connect with leading healthcare cloud platforms for enhanced functionality",
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-surface-light to-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Seamless Healthcare
              <span className="text-medical-primary block mt-2">Integration Solutions</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Connect your healthcare systems and devices with our comprehensive integration platform.
              Enable secure data exchange and enhance your healthcare delivery capabilities.
            </p>
            <Button 
              className="bg-medical-primary hover:bg-medical-primary/90"
              onClick={() => window.open('https://calendly.com/your-demo-link', '_blank')}
            >
              Schedule Integration Demo <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Integration Cards */}
      <section className="py-16 bg-surface-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="mb-4">
                    {integration.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-medical-primary">
                    {integration.title}
                  </h3>
                  <p className="text-gray-600">
                    {integration.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-medical-primary/10">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <Shield className="w-12 h-12 text-medical-primary mb-4" />
                <h2 className="text-2xl font-bold mb-4">
                  Secure Integration Framework
                </h2>
                <p className="text-gray-600 mb-6">
                  Our integration platform is built with security at its core, ensuring HIPAA compliance
                  and protecting sensitive healthcare data throughout the integration process.
                </p>
                <Button 
                  variant="outline"
                  className="border-medical-primary text-medical-primary hover:bg-medical-primary/5"
                  onClick={() => navigate('/technology/security')}
                >
                  Learn About Security
                </Button>
              </div>
              <div className="flex-1">
                <img 
                  src="/lovable-uploads/2afd0ae0-a1fa-4901-8295-713b02a4b474.png"
                  alt="Security Framework"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Integration;