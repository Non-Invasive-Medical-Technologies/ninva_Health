import React from 'react';
import { Navigation } from '@/components/layout/Navigation';
import { HeroSection } from '@/components/sections/HeroSection';
import { TechnologySection } from '@/components/sections/TechnologySection';
import { FloatingChat } from '@/components/chat/FloatingChat';
import Footer from '@/components/layout/Footer';

const Technology = () => {
  const metrics = [
    { value: '2020', label: 'Patent Granted' },
    { value: '10+', label: 'Years Research' },
    { value: '99.9%', label: 'Accuracy Rate' }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection
        variant="default"
        title="Advanced Health Analytics Technology"
        subtitle="With just one action, Kolibri provides a comprehensive assessment of your cardiovascular and respiratory health. Experience the effortless and simultaneous measurement of your electrocardiogram and blood oxygen saturation levels, ensuring you stay informed about your well-being."
        metrics={metrics}
        showChat={true}
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="prose prose-lg">
            <p className="text-gray-700 leading-relaxed">
              The KOLIBRI® health analyzer technology represents a groundbreaking advancement in the analysis of heart activity (HA) signals, which are critical indicators of your overall health. Our state-of-the-art system employs an innovative autoregressive linear prediction model tailored to extract valuable properties from HA signals to accurately determine various biochemical parameters. This cutting-edge approach is protected under Patent US 10,531,836 B2, dated January 14, 2020.
            </p>
            
            <p className="text-gray-700 leading-relaxed mt-6">
              Over the past decade, we have amassed a wealth of data from extensive clinical and pre-clinical trials, establishing a strong foundation for the development of sophisticated neural network algorithms by our renowned experts in non-invasive medical technologies. These algorithms are specifically crafted to analyze intricate patterns in the data, ensuring exceptional accuracy and reliability in health assessments.
            </p>
            
            <p className="text-gray-700 leading-relaxed mt-6">
              The patented KOLIBRI® system harnesses these advanced algorithms to provide a thorough evaluation of the collected data. This capability allows the system to identify specific criteria linked to a wide range of health conditions, from cardiovascular issues to metabolic imbalances. By detecting these vital indicators, the KOLIBRI® system promptly alerts users to potential health risks, allowing for timely intervention and better health outcomes.
            </p>
            
            <p className="text-gray-700 leading-relaxed mt-6">
              Additionally, when you integrate the KOLIBRI® medical device into your daily routine and collaborate with healthcare professionals—be it your medical institution or family doctor—you gain access to a comprehensive support network designed for remote health monitoring. This partnership empowers you to actively manage your health, promoting continuous tracking and a deeper understanding of your wellness journey. With KOLIBRI®, you take a significant step toward holistic health management and improved quality of life.
            </p>
          </div>
        </div>
      </section>
      <TechnologySection />
      <Footer />
      <FloatingChat />
    </div>
  );
};

export default Technology;