import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Activity, CheckCircle2 } from 'lucide-react';
import { brandColors } from './types';
import { DemoMetrics } from './types';

interface QuickInsightsProps {
  metrics: DemoMetrics;
}

export const QuickInsights: React.FC<QuickInsightsProps> = ({ metrics }) => {
  return (
    <section className="max-w-7xl mx-auto mb-16">
      <h2 className="text-2xl font-bold text-emerald-800 mb-6">Quick Health Insights</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className={`${brandColors.gradients.secondary} hover:shadow-lg transition-shadow`}>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-full ${brandColors.emerald.default} text-white flex items-center justify-center`}>
                <Heart className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Heart Rate</p>
                <p className="text-xl font-bold text-emerald-700">{metrics.heartRate} BPM</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className={`${brandColors.peach.light} border-l-4 border-orange-400`}>
          <CardContent className="p-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-600">Status</p>
                <p className="text-lg font-semibold text-orange-700">Active</p>
              </div>
              <Activity className="w-5 h-5 text-orange-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white">
          <CardContent className="p-4">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-600">Daily Goal</p>
                <p className="text-sm font-medium text-emerald-600">75%</p>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className={`h-full ${brandColors.gradients.primary} rounded-full transition-all duration-1000`}
                  style={{ width: '75%' }}
                ></div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white hover:bg-gray-50 transition-colors cursor-pointer group">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-full ${brandColors.teal.light} ${brandColors.teal.default} group-hover:scale-110 transition-transform flex items-center justify-center`}>
                <CheckCircle2 className="w-4 h-4 text-white" />
              </div>
              <p className="text-sm text-gray-600">All systems normal</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};