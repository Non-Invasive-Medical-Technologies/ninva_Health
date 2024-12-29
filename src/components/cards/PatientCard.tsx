import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Heart, Activity, Shield, AlertTriangle,
  Calendar, Clock, ChevronRight
} from 'lucide-react';

const PatientCard = () => {
  const [expanded, setExpanded] = useState(false);
  const [activeMetric, setActiveMetric] = useState<string | null>(null);
  const [showAlert, setShowAlert] = useState(false);
  const [pulseAnimation, setPulseAnimation] = useState(false);

  const metrics = [
    { 
      id: 'heart',
      icon: Heart,
      label: 'Heart Rate',
      value: '72',
      unit: 'BPM',
      trend: '+2%',
    },
    { 
      id: 'bp',
      icon: Activity,
      label: 'Blood Pressure',
      value: '120/80',
      unit: 'mmHg',
      trend: '-5%',
    },
    { 
      id: 'oxygen',
      icon: Shield,
      label: 'SpO2',
      value: '98',
      unit: '%',
      trend: '+1%',
    }
  ];

  useEffect(() => {
    if (expanded) {
      const timer = setTimeout(() => setShowAlert(true), 1000);
      return () => clearTimeout(timer);
    }
  }, [expanded]);

  useEffect(() => {
    const pulseTimer = setInterval(() => {
      setPulseAnimation(true);
      setTimeout(() => setPulseAnimation(false), 500);
    }, 1000);
    return () => clearInterval(pulseTimer);
  }, []);

  return (
    <Card className="max-w-2xl mx-auto overflow-hidden transition-all duration-500">
      <div 
        className="cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className={`w-16 h-16 rounded-full bg-medical-success flex items-center justify-center ${
                pulseAnimation ? 'animate-pulse' : ''
              }`}>
                <Heart className="w-8 h-8 text-medical-primary" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-medical-primary flex items-center justify-center text-white text-xs">
                3
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold">Sarah Johnson</h3>
              <p className="text-gray-600">ID: PAT-123456</p>
            </div>
            <ChevronRight className={`w-6 h-6 transition-transform duration-300 ${
              expanded ? 'rotate-90' : ''
            }`} />
          </div>
        </CardContent>
      </div>

      {expanded && (
        <div className="animate-fade-up">
          <CardContent className="p-6 border-t">
            {/* Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              {metrics.map((metric) => (
                <div
                  key={metric.id}
                  className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                    activeMetric === metric.id 
                      ? 'bg-medical-primary text-white transform scale-105' 
                      : 'bg-medical-success/10 hover:bg-medical-success/20'
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveMetric(activeMetric === metric.id ? null : metric.id);
                  }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <metric.icon className={`w-5 h-5 ${
                      activeMetric === metric.id ? 'text-white' : 'text-medical-primary'
                    }`} />
                    <span className="text-sm">{metric.label}</span>
                  </div>
                  <div className="flex items-baseline justify-between">
                    <span className="text-2xl font-bold">{metric.value}</span>
                    <span className="text-sm">{metric.unit}</span>
                  </div>
                  <span className={`text-sm ${
                    metric.trend.startsWith('+') ? 'text-medical-success' : 'text-medical-error'
                  }`}>
                    {metric.trend}
                  </span>
                </div>
              ))}
            </div>

            {/* Appointments */}
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-medical-success/10 rounded-lg">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-medical-primary" />
                  <div>
                    <p className="font-medium">Next Appointment</p>
                    <p className="text-sm text-gray-600">Cardiology Check-up</p>
                  </div>
                </div>
                <span className="font-medium text-medical-primary">Mar 25, 2024</span>
              </div>

              <div className="flex items-center justify-between p-4 bg-medical-success/10 rounded-lg">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-medical-primary" />
                  <div>
                    <p className="font-medium">Last Check-up</p>
                    <p className="text-sm text-gray-600">General Health</p>
                  </div>
                </div>
                <span className="font-medium text-medical-primary">Mar 15, 2024</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Button className="flex-1 bg-medical-primary hover:bg-medical-primary/90">
                View Full History
              </Button>
              <Button 
                variant="outline" 
                className="flex-1 border-medical-primary text-medical-primary hover:bg-medical-primary/5"
              >
                Schedule Visit
              </Button>
            </div>

            {/* Alert */}
            {showAlert && (
              <div className="mt-6 p-4 bg-medical-warning/10 border-l-4 border-medical-warning rounded animate-fade-in">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="w-5 h-5 text-medical-warning" />
                  <div>
                    <p className="font-medium text-medical-warning">Attention Required</p>
                    <p className="text-sm text-gray-600">
                      Blood pressure readings show slight elevation. Recommended follow-up.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </div>
      )}
    </Card>
  );
};

export default PatientCard;