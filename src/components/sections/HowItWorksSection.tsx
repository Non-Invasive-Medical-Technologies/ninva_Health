import React from 'react';
import { Card } from '@/components/ui/card';

const HowItWorksSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900">
          How It Works
        </h2>
        <p className="mt-4 text-lg text-center text-gray-600">
          Our advanced health monitoring system utilizes cutting-edge technology to provide you with real-time insights into your health.
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="p-6">
            <h3 className="text-xl font-semibold">Step 1: Data Collection</h3>
            <p className="mt-2 text-gray-600">
              We collect data from various medical-grade sensors to monitor your health metrics.
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-semibold">Step 2: Data Analysis</h3>
            <p className="mt-2 text-gray-600">
              Our AI algorithms analyze the collected data to provide actionable insights.
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-semibold">Step 3: Personalized Recommendations</h3>
            <p className="mt-2 text-gray-600">
              Receive personalized health recommendations based on your unique data.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;