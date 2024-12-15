import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight, Brain, Heart, Shield, Smartphone } from "lucide-react";
import { AuthButton } from "@/components/auth/AuthButton";

const features = [
  {
    icon: Heart,
    title: "Health Monitoring",
    description: "Real-time health analytics with comprehensive vital sign tracking",
  },
  {
    icon: Brain,
    title: "AI Integration",
    description: "Advanced AI-powered health insights and personalized recommendations",
  },
  {
    icon: Shield,
    title: "Data Security",
    description: "Enterprise-grade security with HIPAA compliance",
  },
  {
    icon: Smartphone,
    title: "Mobile Access",
    description: "Seamless mobile integration for on-the-go health management",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-ninva-light/20 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-1 mb-6 text-sm font-medium text-ninva bg-ninva-light rounded-full">
              Introducing Kolibri
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-ninva to-ninva-dark">
              The Future of Health Analytics
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Transform your health journey with AI-powered insights and real-time monitoring
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AuthButton />
              <Button size="lg" variant="outline">
                Watch Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Advanced Health Analytics
            </h2>
            <p className="text-gray-600">
              Experience comprehensive health monitoring with our cutting-edge technology
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                  <feature.icon className="h-12 w-12 text-ninva mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;