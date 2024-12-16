import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Heart, Activity, Brain, MessageSquare, Video,
  FileText, Calendar, ArrowRight, ChevronDown,
  Plus, User, Bell, Clock as ClockIcon
} from 'lucide-react';

export const HealthcareFlowsSection = () => {
  const [expanded, setExpanded] = useState(false);
  const [activeMetric, setActiveMetric] = useState(0);

  const patientMetrics = [
    { icon: <Heart />, label: 'Heart Rate', value: '72 BPM' },
    { icon: <Activity />, label: 'Blood Pressure', value: '120/80' },
    { icon: <Brain />, label: 'SpO2', value: '98%' }
  ];

  return (
    <div className="space-y-24 p-8">
      <Card 
        className={`transition-all duration-500 ${expanded ? 'h-96' : 'h-24'}`}
        onClick={() => setExpanded(!expanded)}
      >
        <CardContent className="p-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#8FD5CA] flex items-center justify-center">
              <User className="w-6 h-6 text-[#26652C]" />
            </div>
            <div>
              <h3 className="font-medium">Sarah Johnson</h3>
              <p className="text-sm text-gray-600">Patient ID: 12345</p>
            </div>
            <ChevronDown className={`ml-auto transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} />
          </div>

          {expanded && (
            <div className="mt-6 animate-fadeIn">
              <div className="grid grid-cols-3 gap-4">
                {patientMetrics.map((metric, idx) => (
                  <div 
                    key={idx}
                    className={`p-4 rounded-lg transition-all duration-300 ${activeMetric === idx ? 'bg-[#26652C] text-white' : 'bg-[#8FD5CA]/20'}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveMetric(idx);
                    }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      {React.cloneElement(metric.icon, { 
                        className: `w-4 h-4 ${activeMetric === idx ? 'text-white' : 'text-[#26652C]'}` 
                      })}
                      <span className="text-sm">{metric.label}</span>
                    </div>
                    <p className="font-bold">{metric.value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#26652C]" />
                    <span>Next Appointment</span>
                  </div>
                  <span className="text-[#26652C] font-medium">Mar 25, 2024</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <ClockIcon className="w-4 h-4 text-[#26652C]" />
                    <span>Last Check-up</span>
                  </div>
                  <span className="text-[#26652C] font-medium">Mar 15, 2024</span>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
