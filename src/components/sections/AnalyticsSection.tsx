import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Heart, Activity, Clock, Shield } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export const AnalyticsSection = () => {
  // Sample data
  const vitalSignsData = [
    { date: '2024-01', heartRate: 72, bloodPressure: 120, oxygen: 98 },
    { date: '2024-02', heartRate: 75, bloodPressure: 122, oxygen: 97 },
    { date: '2024-03', heartRate: 71, bloodPressure: 118, oxygen: 99 }
  ];

  const metabolicData = [
    { name: 'Glucose', value: 95 },
    { name: 'Cholesterol', value: 180 },
    { name: 'Triglycerides', value: 150 }
  ];

  return (
    <section className="py-24 bg-surface-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Advanced
              <span className="gradient-text block">Health Analytics</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Experience comprehensive health monitoring with our advanced analytics dashboard,
              providing real-time insights into your vital signs and health trends.
            </p>
          </div>

          <Tabs defaultValue="vitals" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <TabsTrigger 
                value="vitals" 
                className="flex items-center gap-2 bg-medical-primary/10 data-[state=active]:bg-medical-primary data-[state=active]:text-white"
              >
                <Heart className="h-4 w-4" />
                Vital Signs
              </TabsTrigger>
              <TabsTrigger 
                value="metabolic"
                className="flex items-center gap-2 bg-medical-primary/10 data-[state=active]:bg-medical-primary data-[state=active]:text-white"
              >
                <Activity className="h-4 w-4" />
                Metabolic
              </TabsTrigger>
              <TabsTrigger 
                value="alerts"
                className="flex items-center gap-2 bg-medical-primary/10 data-[state=active]:bg-medical-primary data-[state=active]:text-white"
              >
                <Shield className="h-4 w-4" />
                Health Alerts
              </TabsTrigger>
              <TabsTrigger 
                value="trends"
                className="flex items-center gap-2 bg-medical-primary/10 data-[state=active]:bg-medical-primary data-[state=active]:text-white"
              >
                <Clock className="h-4 w-4" />
                Trends
              </TabsTrigger>
            </TabsList>

            <div className="bg-white rounded-lg p-6">
              <TabsContent value="vitals">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-medical-primary">Vital Signs Trend</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                          <LineChart data={vitalSignsData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="date" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="heartRate" stroke="#2B7C7E" name="Heart Rate" />
                            <Line type="monotone" dataKey="bloodPressure" stroke="#4EC989" name="Blood Pressure" />
                            <Line type="monotone" dataKey="oxygen" stroke="#FFB69E" name="Oxygen Saturation" />
                          </LineChart>
                        </ResponsiveContainer>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-medical-primary">Current Readings</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-medical-primary/10 rounded-lg">
                          <Heart className="h-8 w-8 text-medical-primary mx-auto" />
                          <p className="mt-2 text-sm text-center">Heart Rate</p>
                          <p className="text-2xl font-bold text-medical-primary text-center">73 BPM</p>
                        </div>
                        <div className="p-4 bg-medical-secondary/10 rounded-lg">
                          <Activity className="h-8 w-8 text-medical-secondary mx-auto" />
                          <p className="mt-2 text-sm text-center">Blood Pressure</p>
                          <p className="text-2xl font-bold text-medical-secondary text-center">120/80</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="metabolic">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-medical-primary">Metabolic Indicators</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={metabolicData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Bar dataKey="value" fill="#4EC989" stroke="#2B7C7E" strokeWidth={1} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="alerts">
                <div className="space-y-4">
                  <Alert className="border-medical-success bg-medical-success/10">
                    <Shield className="h-4 w-4" />
                    <AlertTitle>Normal Blood Pressure</AlertTitle>
                    <AlertDescription>
                      Your blood pressure readings are within the healthy range.
                    </AlertDescription>
                  </Alert>
                  <Alert className="border-medical-warning bg-medical-warning/10">
                    <Activity className="h-4 w-4" />
                    <AlertTitle>Elevated Heart Rate</AlertTitle>
                    <AlertDescription>
                      Your resting heart rate has been slightly elevated. Consider scheduling a check-up.
                    </AlertDescription>
                  </Alert>
                </div>
              </TabsContent>

              <TabsContent value="trends">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-medical-primary">Long-term Health Trends</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 bg-medical-primary/10 rounded-lg">
                        <h3 className="font-semibold text-medical-primary mb-2">Blood Pressure Trend</h3>
                        <p className="text-muted-foreground">Showing improvement over the last 3 months</p>
                        <div className="h-2 bg-medical-warning/20 rounded mt-2">
                          <div className="h-2 bg-medical-primary rounded w-3/4"></div>
                        </div>
                      </div>
                      <div className="p-4 bg-medical-secondary/10 rounded-lg">
                        <h3 className="font-semibold text-medical-secondary mb-2">Heart Rate Variability</h3>
                        <p className="text-muted-foreground">Maintaining healthy variability</p>
                        <div className="h-2 bg-medical-warning/20 rounded mt-2">
                          <div className="h-2 bg-medical-secondary rounded w-4/5"></div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </div>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
};