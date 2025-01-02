import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Activity, Heart, Brain } from 'lucide-react';

const healthData = {
  vitals: [
    { date: 'Mon', heartRate: 72, bloodPressure: 120, spo2: 98 },
    { date: 'Tue', heartRate: 75, bloodPressure: 122, spo2: 97 },
    { date: 'Wed', heartRate: 71, bloodPressure: 118, spo2: 99 },
    { date: 'Thu', heartRate: 73, bloodPressure: 121, spo2: 98 },
    { date: 'Fri', heartRate: 74, bloodPressure: 119, spo2: 98 },
  ],
  activity: [
    { name: 'Steps', value: 8500, goal: 10000 },
    { name: 'Exercise', value: 45, goal: 60 },
    { name: 'Sleep', value: 7.5, goal: 8 },
  ],
  metrics: [
    { name: 'Heart Health', value: 85 },
    { name: 'Respiratory', value: 92 },
    { name: 'Sleep Quality', value: 78 },
  ]
};

export const HealthVisualizationSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Health Analytics Dashboard
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Comprehensive visualization of your health metrics
          </p>
        </div>

        <Tabs defaultValue="vitals" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3 gap-4">
            <TabsTrigger value="vitals" className="flex items-center gap-2">
              <Heart className="w-4 h-4" />
              Vital Signs
            </TabsTrigger>
            <TabsTrigger value="activity" className="flex items-center gap-2">
              <Activity className="w-4 h-4" />
              Activity Metrics
            </TabsTrigger>
            <TabsTrigger value="health" className="flex items-center gap-2">
              <Brain className="w-4 h-4" />
              Health Score
            </TabsTrigger>
          </TabsList>

          <TabsContent value="vitals">
            <Card>
              <CardHeader>
                <CardTitle>Vital Signs Trend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={healthData.vitals}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line 
                        type="monotone" 
                        dataKey="heartRate" 
                        stroke="#2B7C7E" 
                        name="Heart Rate" 
                      />
                      <Line 
                        type="monotone" 
                        dataKey="bloodPressure" 
                        stroke="#4EC989" 
                        name="Blood Pressure" 
                      />
                      <Line 
                        type="monotone" 
                        dataKey="spo2" 
                        stroke="#FFB69E" 
                        name="SpO2" 
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="activity">
            <Card>
              <CardHeader>
                <CardTitle>Daily Activity Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={healthData.activity}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="value" fill="#4EC989" name="Current" />
                      <Bar dataKey="goal" fill="#2B7C7E" name="Goal" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="health">
            <Card>
              <CardHeader>
                <CardTitle>Overall Health Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={healthData.metrics}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={150}
                        fill="#4EC989"
                        label
                      />
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};