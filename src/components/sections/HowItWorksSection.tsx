
import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, Play } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

export const HowItWorksSection = () => {
  const steps = [
    {
      title: "Easy Installation",
      description: "Simply attach UryScan G1 to your toilet bowl - no complex setup required",
      image: "/lovable-uploads/3d312e49-cdf0-49a9-b129-130c6be0a265.png",
      video: "https://www.example.com/video1.mp4" // Replace with actual video URL
    },
    {
      title: "Automatic Analysis",
      description: "The device automatically analyzes your samples and sends data to your phone",
      image: "/lovable-uploads/521bbb93-8ec5-48b0-85a8-b64ef71d4220.png",
      video: "https://www.example.com/video2.mp4" // Replace with actual video URL
    },
    {
      title: "Get Insights",
      description: "Receive detailed health insights and recommendations through our app",
      image: "/lovable-uploads/1d29674e-56ee-401e-a83a-b029eb284cb6.png"
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
                  <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden group">
                    <img 
                      src={step.image} 
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                    {step.video && (
                      <Dialog>
                        <DialogTrigger asChild>
                          <button className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                              <Play className="w-6 h-6 text-ninva fill-current" />
                            </div>
                          </button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[800px] p-0">
                          <video 
                            controls 
                            className="w-full h-full rounded-lg"
                            src={step.video}
                          />
                        </DialogContent>
                      </Dialog>
                    )}
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
