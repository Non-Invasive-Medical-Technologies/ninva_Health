import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const EnhancedHealthDashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <Card className="p-6">
        <h3 className="text-lg font-semibold">Your Health Metrics</h3>
        <p className="mt-2 text-gray-600">
          Monitor your vital signs and health metrics in real-time.
        </p>
        <div className="mt-4">
          <Button variant="outline">View Metrics</Button>
        </div>
      </Card>
      <Card className="p-6">
        <h3 className="text-lg font-semibold">AI-Powered Insights</h3>
        <p className="mt-2 text-gray-600">
          Get personalized health recommendations based on your data.
        </p>
        <div className="mt-4">
          <Button variant="outline">Get Insights</Button>
        </div>
      </Card>
      <Card className="p-6">
        <h3 className="text-lg font-semibold">Health Goals</h3>
        <p className="mt-2 text-gray-600">
          Set and track your health goals with our intuitive dashboard.
        </p>
        <div className="mt-4">
          <Button variant="outline">Set Goals</Button>
        </div>
      </Card>
      <Card className="p-6">
        <h3 className="text-lg font-semibold">Community Support</h3>
        <p className="mt-2 text-gray-600">
          Join our community for support and motivation on your health journey.
        </p>
        <div className="mt-4">
          <Button variant="outline">Join Community</Button>
        </div>
      </Card>
    </div>
  );
};

export default EnhancedHealthDashboard;
