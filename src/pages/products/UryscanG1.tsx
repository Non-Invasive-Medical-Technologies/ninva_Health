import React from 'react';
import { Navigation } from '@/components/layout/Navigation';
import { HeroSection } from '@/components/sections/HeroSection';
import { CTASection } from '@/components/sections/CTASection';
import { FloatingChat } from '@/components/chat/FloatingChat';
import Footer from '@/components/layout/Footer';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { ChevronRight, Sparkles, Activity, BarChart, Smartphone } from 'lucide-react';

const UryscanG1 = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const metrics = [
    { value: '99.9%', label: 'Accuracy Rate' },
    { value: '30sec', label: 'Analysis Time' },
    { value: '25+', label: 'Parameters' }
  ];

  const nutritionBadges = [
    'Ketone levels',
    'Vitamin C levels',
    'Bio-Acidity',
    'HydroStatus'
  ];

  const handleGetStarted = () => {
    toast({
      title: "Thanks for your interest!",
      description: "Our team will contact you shortly with more information.",
    });
  };

  const handleLearnMore = () => {
    const element = document.getElementById('features');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleViewDemo = () => {
    toast({
      title: "Demo Request",
      description: "We'll reach out to schedule a demo of UryScan G1.",
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <HeroSection 
          title="Advanced nutrition parameters"
          subtitle="UryScan G1 brings precise urine analysis home, helping you capture key nutritional insights for optimal health monitoring."
          metrics={metrics}
          onGetStarted={handleGetStarted}
          onLearnMore={handleLearnMore}
          onViewDemo={handleViewDemo}
        />
        
        {/* Badges Section */}
        <section className="py-12 bg-gradient-to-b from-gray-50/50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {nutritionBadges.map((badge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Badge variant="secondary" className="px-4 py-2 text-lg bg-ninva/10 text-ninva hover:bg-ninva/20">
                    {badge}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section id="features" className="py-24 bg-gradient-to-b from-white to-gray-50/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                UryScan G1 brings precise urine analysis home
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {[
                {
                  title: "Personalized nutrition strategy",
                  description: "Tailored recommendations based on your unique profile",
                  icon: <Sparkles className="h-12 w-12 text-ninva" />
                },
                {
                  title: "Seamless experience",
                  description: "Easy integration with your daily routine",
                  icon: <Activity className="h-12 w-12 text-ninva" />
                },
                {
                  title: "25+ tests per cartridge",
                  description: "Comprehensive health monitoring",
                  icon: <BarChart className="h-12 w-12 text-ninva" />
                },
                {
                  title: "Health Analysis App",
                  description: "Track your progress on the go",
                  icon: <Smartphone className="h-12 w-12 text-ninva" />
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                    <div className="flex flex-col items-center text-center gap-4">
                      <div className="p-4 rounded-2xl bg-ninva/5 mb-4">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Device Showcase */}
        <section className="py-24 bg-gradient-to-b from-gray-50/50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-2xl md:text-3xl font-bold">
                  The revolutionary toilet plug-in urine scanner
                </h2>
                <p className="text-base md:text-lg text-gray-600">
                  Your urine holds a wealth of health information through its 3,000 metabolites, 
                  but this data usually goes unmeasured. The UryScan cartridge brings precise 
                  urine analysis home, tracking four essential markers to help optimise your 
                  nutrition with personalised recommendations.
                </p>
                <div className="lg:hidden">
                  <motion.img
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    src="/lovable-uploads/252e8a15-5680-49f6-8431-07581954a7d0.png"
                    alt="UryScan Device"
                    className="w-full h-auto shadow-xl object-contain max-w-md mx-auto"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="hidden lg:block"
              >
                <motion.img
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  src="/lovable-uploads/252e8a15-5680-49f6-8431-07581954a7d0.png"
                  alt="UryScan Device"
                  className="w-full h-auto shadow-xl object-contain"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8 lg:col-span-2"
              >
                <div className="space-y-6">
                  <h3 className="text-xl md:text-2xl font-semibold">Advanced nutrition parameters</h3>
                  <p className="text-base md:text-lg text-gray-600">
                    Get a clear picture of your body's response to nutrition through four crucial health parameters.
                  </p>
                </div>

                <div className="space-y-6">
                  <h3 className="text-xl md:text-2xl font-semibold">Tailored health plan</h3>
                  <p className="text-base md:text-lg text-gray-600">
                    Build your personalized nutrition strategy. Choose a measurement plan that 
                    matches your lifestyle and health needs and gain access to premium resources 
                    like exclusive content and programs.
                  </p>
                </div>

                <div className="space-y-6">
                  <h3 className="text-xl md:text-2xl font-semibold">In-depth insights</h3>
                  <p className="text-base md:text-lg text-gray-600">
                    Discover how your diet correlates to your body. The uryScan device automatically 
                    sends urine analysis results to your app, revealing four key nutritional 
                    insights about your body's response to different foods.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* App Features */}
        <section className="py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-2xl md:text-3xl font-bold">
                  Build your personalized nutrition strategy
                </h2>
                <p className="text-base md:text-lg text-gray-600">
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
                  src="/lovable-uploads/75cc616d-5b91-4dbf-ba58-0d70a76fa75a.png"
                  alt="UryScan App Interface"
                  className="w-full h-auto rounded-2xl shadow-xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        <CTASection 
          onGetStarted={handleGetStarted}
          onBookDemo={() => {
            toast({
              title: "Demo Booking",
              description: "Our team will contact you shortly to schedule a demo.",
            });
          }}
        />
        <Footer />
        <FloatingChat />
      </div>
    </div>
  );
};

export default UryscanG1;
