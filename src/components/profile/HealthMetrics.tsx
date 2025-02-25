
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Heart, Activity, Droplets, FootprintsIcon, Flame, Moon } from 'lucide-react';

interface HealthMetricsProps {
  metrics: any;
}

export const HealthMetrics = ({ metrics }: HealthMetricsProps) => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Heart className="w-5 h-5 text-red-500 mr-2" />
            Heart Rate
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">{metrics?.heart_rate || '--'}</div>
          <div className="text-sm text-gray-500">BPM</div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Activity className="w-5 h-5 text-blue-500 mr-2" />
            Blood Pressure
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">
            {metrics?.blood_pressure_systolic || '--'}/{metrics?.blood_pressure_diastolic || '--'}
          </div>
          <div className="text-sm text-gray-500">mmHg</div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Droplets className="w-5 h-5 text-blue-500 mr-2" />
            Blood Oxygen
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">{metrics?.blood_oxygen_level || '--'}</div>
          <div className="text-sm text-gray-500">SpO2 %</div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <FootprintsIcon className="w-5 h-5 text-green-500 mr-2" />
            Steps
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">{metrics?.steps_count || '--'}</div>
          <div className="text-sm text-gray-500">steps today</div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Flame className="w-5 h-5 text-orange-500 mr-2" />
            Calories
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">{metrics?.calories_burned || '--'}</div>
          <div className="text-sm text-gray-500">kcal burned</div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Moon className="w-5 h-5 text-purple-500 mr-2" />
            Sleep
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">
            {metrics?.sleep_duration_minutes 
              ? `${Math.floor(metrics.sleep_duration_minutes / 60)}h ${metrics.sleep_duration_minutes % 60}m` 
              : '--'}
          </div>
          <div className="text-sm text-gray-500">hours slept</div>
        </CardContent>
      </Card>
    </div>
  );
};
