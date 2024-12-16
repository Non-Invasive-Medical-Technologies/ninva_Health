import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Dna, Brain, Microscope, Activity, Play, Pause } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

export const TechnologySection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoUrl = "https://dvlanhpficohhiiqugzq.supabase.co/storage/v1/object/public/videos/03997675344777.5c4a29a4a81aa.gif";

  const features = [
    {
      number: "01",
      title: "Personalized Health Solutions",
      description: "Tailored healthcare monitoring for your unique needs",
      icon: <Dna className="w-6 h-6 text-ninva" />
    },
    {
      number: "02",
      title: "Precision And Accuracy",
      description: "Medical-grade diagnostics with proven reliability",
      icon: <Microscope className="w-6 h-6 text-ninva" />
    },
    {
      number: "03",
      title: "Scientific Innovation",
      description: "Cutting-edge technology for better health outcomes",
      icon: <Brain className="w-6 h-6 text-ninva" />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.215, 0.610, 0.355, 1.000]
      }
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-ninva/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="space-y-16"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-ninva sm:text-4xl">
              Delivering reliable medical and wellness data
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Taking the complication out of running a digital health program for care teams across chronic disease prevention, remote monitoring, clinical research and more.
            </p>
          </motion.div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="relative"
              >
                <Card className="p-6 h-full bg-white/80 backdrop-blur border border-ninva/10 hover:border-ninva/20 transition-colors">
                  <div className="flex items-start justify-between">
                    <span className="inline-flex items-center justify-center rounded-lg bg-ninva/5 p-2">
                      {feature.icon}
                    </span>
                    <span className="text-4xl font-light text-ninva/20">{feature.number}</span>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold bg-gradient-to-r from-ninva to-[#0EA5E9] bg-clip-text text-transparent">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-gray-600">
                    {feature.description}
                  </p>
                  <div className="mt-4 flex items-center text-ninva hover:text-ninva-dark transition-colors">
                    <span className="text-sm font-medium">Learn more</span>
                    <ArrowUpRight className="ml-1 w-4 h-4" />
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Video Showcase */}
          <motion.div
            variants={itemVariants}
            className="mt-16 bg-white rounded-2xl overflow-hidden shadow-xl"
          >
            <div className="grid md:grid-cols-2 gap-8 p-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  Advanced Health Monitoring Platform
                </h3>
                <p className="text-gray-600">
                  Our patented technologies provide continuous access to more consistent patient data through a remote patient monitoring solution and a portfolio of devices, including blood pressure monitors, connected scales, an advanced sleep system, a smart temporal thermometer, and hybrid smartwatches.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2 text-ninva">
                    <Activity className="w-5 h-5" />
                    <span className="font-medium">Real-time monitoring</span>
                  </div>
                  <div className="flex items-center space-x-2 text-ninva">
                    <Brain className="w-5 h-5" />
                    <span className="font-medium">AI-powered insights</span>
                  </div>
                </div>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <div className="relative rounded-lg overflow-hidden shadow-lg cursor-pointer transition-transform hover:scale-[1.02]">
                    <img
                      src={videoUrl}
                      alt="Health monitoring demonstration"
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      <Play className="w-12 h-12 text-white" />
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl w-full p-0 bg-black">
                  <img
                    src={videoUrl}
                    alt="Health monitoring demonstration"
                    className="w-full h-auto"
                  />
                </DialogContent>
              </Dialog>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};