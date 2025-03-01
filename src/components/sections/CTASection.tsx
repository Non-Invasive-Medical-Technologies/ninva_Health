import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface CTASectionProps {
  onGetStarted: () => void;
  onBookDemo: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onGetStarted, onBookDemo }) => {
  return (
    <section className="section-padding bg-gradient-to-br from-ninva via-ninva-secondary to-ninva">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="section-container"
      >
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ready to Transform Your
            <span className="block">Health Journey?</span>
          </h2>
          <p className="text-lg text-white/90">
            Join thousands of users who trust us for their wellness journey.
            Experience the future of health monitoring today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              variant="secondary"
              className="bg-white text-ninva hover:bg-white/90"
              onClick={onGetStarted}
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10"
              onClick={onBookDemo}
            >
              Book a Demo
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};