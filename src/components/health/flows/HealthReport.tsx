import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Brain } from 'lucide-react';

export const HealthReport = () => {
  return (
    <Card className="max-w-xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Health Report</span>
          <Button variant="outline">
            <FileText className="w-4 h-4 mr-2" />
            Download PDF
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'Heart Rate', value: '72 BPM', trend: '+2%' },
              { label: 'Blood Pressure', value: '120/80', trend: '-5%' },
              { label: 'Sleep Quality', value: '85%', trend: '+8%' },
              { label: 'Activity Score', value: '750', trend: '+12%' }
            ].map((metric, idx) => (
              <div key={idx} className="p-4 bg-[#8FD5CA]/10 rounded-lg">
                <p className="text-sm text-gray-600">{metric.label}</p>
                <div className="flex items-end justify-between mt-1">
                  <p className="text-2xl font-bold text-[#26652C]">
                    {metric.value}
                  </p>
                  <span className={`text-sm ${
                    metric.trend.startsWith('+') 
                      ? 'text-green-500' 
                      : 'text-red-500'
                  }`}>
                    {metric.trend}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border rounded-lg">
            <h3 className="font-medium mb-2">AI Health Insights</h3>
            <div className="space-y-2">
              {[
                'Cardiovascular health improving based on HRV trends',
                'Sleep patterns show consistent improvement',
                'Recommended: Increase daily water intake'
              ].map((insight, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <Brain className="w-4 h-4 text-[#26652C]" />
                  <p className="text-sm">{insight}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};