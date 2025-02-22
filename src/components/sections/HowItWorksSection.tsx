
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, Activity, Shield, Brain, 
  Smartphone, Cloud, Lock, ArrowRight,
  ChevronRight
} from 'lucide-react';

const HowItWorksSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const steps = [
    {
      title: "Place Device",
      description: "Hold the Kolibri device between your palms",
      icon: Smartphone,
      color: "text-medical-primary",
      bgColor: "bg-medical-primary/10",
      animation: (
        <motion.div 
          className="relative h-32"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div 
              className="w-16 h-32 bg-medical-success/20 rounded-lg"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
          <motion.div 
            className="absolute inset-0 flex items-center justify-center"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="w-32 h-32 rounded-full border-4 border-medical-primary/30" />
          </motion.div>
        </motion.div>
      )
    },
    {
      title: "Measure Vitals",
      description: "Advanced sensors capture your health data",
      icon: Activity,
      color: "text-medical-success",
      bgColor: "bg-medical-success/10",
      animation: (
        <motion.div 
          className="relative h-32"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
        >
          <div className="flex items-center justify-center gap-4">
            {[Heart, Activity, Shield].map((Icon, idx) => (
              <motion.div 
                key={idx}
                className="p-4 bg-medical-success/20 rounded-lg"
                animate={{ 
                  y: [0, -10, 0],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 1.5,
                  delay: idx * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Icon className="w-8 h-8 text-medical-success" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      )
    },
    {
      title: "AI Analysis",
      description: "Our AI processes your health data",
      icon: Brain,
      color: "text-medical-secondary",
      bgColor: "bg-medical-secondary/10",
      animation: (
        <motion.div 
          className="relative h-32"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="w-16 h-16"
              animate={{ 
                rotate: 360,
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <Brain className="w-full h-full text-medical-secondary" />
            </motion.div>
          </div>
          <motion.div 
            className="absolute bottom-4 left-0 right-0 h-2 bg-medical-secondary/20 rounded-full overflow-hidden"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <motion.div 
              className="h-full bg-medical-secondary"
              animate={{ x: ["0%", "100%"] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </motion.div>
        </motion.div>
      )
    },
    {
      title: "Secure Results",
      description: "View your encrypted health insights",
      icon: Lock,
      color: "text-medical-primary",
      bgColor: "bg-medical-primary/10",
      animation: (
        <motion.div 
          className="relative h-32"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
        >
          <div className="flex items-center justify-center gap-8">
            <motion.div 
              className="p-4 bg-medical-success/20 rounded-lg"
              animate={{ x: [-20, 0], opacity: [0, 1] }}
              transition={{ duration: 1 }}
            >
              <Cloud className="w-8 h-8 text-medical-success" />
            </motion.div>
            <motion.div
              animate={{ 
                x: [0, 20, 0],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <ArrowRight className="w-6 h-6 text-medical-primary" />
            </motion.div>
            <motion.div 
              className="p-4 bg-medical-primary rounded-lg"
              animate={{ x: [20, 0], opacity: [0, 1] }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <Lock className="w-8 h-8 text-white" />
            </motion.div>
          </div>
        </motion.div>
      )
    }
  ];

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isAutoPlaying) {
      timer = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % steps.length);
      }, 4000);
    }
    return () => clearInterval(timer);
  }, [isAutoPlaying, steps.length]);

  const handleStepClick = (index: number) => {
    setActiveStep(index);
    setIsAutoPlaying(false);
  };

  const handleNext = () => {
    setActiveStep((prev) => (prev + 1) % steps.length);
    setIsAutoPlaying(false);
  };

  return (
    <div className="max-w-7xl mx-auto p-8">
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-medical-primary mb-4">How It Works</h2>
        <p className="text-xl text-gray-600">Experience seamless health monitoring in four simple steps</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <Card 
              className={`transition-all duration-300 cursor-pointer hover:shadow-lg ${
                activeStep === idx ? 'ring-2 ring-medical-primary shadow-lg' : ''
              }`}
              onClick={() => handleStepClick(idx)}
            >
              <CardContent className="p-6">
                <div className={`mb-4 p-3 rounded-lg inline-block ${step.bgColor}`}>
                  <step.icon className={`w-6 h-6 ${step.color}`} />
                </div>
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  {step.title}
                  {activeStep === idx && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronRight className="w-4 h-4 text-medical-primary" />
                    </motion.span>
                  )}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{step.description}</p>
                <AnimatePresence mode="wait">
                  {activeStep === idx && (
                    <motion.div
                      key={`animation-${idx}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {step.animation}
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center gap-4">
        <Button
          variant="outline"
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className={`${isAutoPlaying ? 'bg-medical-primary/10' : ''}`}
        >
          {isAutoPlaying ? 'Pause' : 'Auto Play'}
        </Button>
        <Button onClick={handleNext}>
          Next Step <ChevronRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default HowItWorksSection;
