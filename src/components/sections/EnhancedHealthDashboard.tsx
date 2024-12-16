import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { LineChart, Line, BarChart, Bar, RadialBarChart, RadialBar, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Heart, Brain, Activity, Plus, Video, Download, MessageSquare, Calendar, User, Share2 } from 'lucide-react';

const EnhancedHealthDashboard = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState('1M');
  const [showAIChat, setShowAIChat] = useState(false);

  // Sample user profile data
  const userProfile = {
    name: "Jane Smith",
    age: 32,
    height: "5'6\"",
    weight: "140 lbs",
    bloodType: "A+",
    lastCheckup: "2024-03-15"
  };

  // Sample health markers data with historical comparison
  const healthMarkersData = [
    { date: '2024-01', current: 120, previous: 125, marker: 'Blood Pressure' },
    { date: '2024-02', current: 118, previous: 122, marker: 'Blood Pressure' },
    { date: '2024-03', current: 115, previous: 120, marker: 'Blood Pressure' }
  ];

  // Sample word cloud data for analysis
  const analysisKeywords = [
    { text: 'Healthy', value: 30 },
    { text: 'Exercise', value: 25 },
    { text: 'Diet', value: 20 },
    { text: 'Sleep', value: 15 }
  ];

  const renderUserProfile = () => (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <User className="h-5 w-5" />
          Patient Profile
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">Name</p>
            <p className="font-bold">{userProfile.name}</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">Age</p>
            <p className="font-bold">{userProfile.age}</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">Blood Type</p>
            <p className="font-bold">{userProfile.bloodType}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const renderAIChatbot = () => (
    <Card className="fixed bottom-4 right-4 w-96 z-50 shadow-lg">
      <CardHeader className="bg-blue-50">
        <CardTitle className="flex justify-between items-center">
          <span className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5" />
            AI Health Assistant
          </span>
          <Button variant="ghost" size="sm" onClick={() => setShowAIChat(false)}>
            ×
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="h-96 overflow-y-auto">
        <div className="space-y-4">
          <div className="bg-blue-50 p-3 rounded-lg">
            Hello! I'm your AI health assistant. How can I help you today?
          </div>
          <div className="bg-gray-50 p-3 rounded-lg ml-8">
            Can you explain my latest blood pressure readings?
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const renderIntegrations = () => (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Share2 className="h-5 w-5" />
          Connected Services
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Button variant="outline" className="h-24 flex flex-col items-center justify-center">
            <Activity className="h-8 w-8 mb-2" />
            Fitbit
          </Button>
          <Button variant="outline" className="h-24 flex flex-col items-center justify-center">
            <Heart className="h-8 w-8 mb-2" />
            Apple Health
          </Button>
          <Button variant="outline" className="h-24 flex flex-col items-center justify-center">
            <Plus className="h-8 w-8 mb-2" />
            EHR System
          </Button>
          <Button variant="outline" className="h-24 flex flex-col items-center justify-center">
            <Calendar className="h-8 w-8 mb-2" />
            Doctor Calendar
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  const renderVideoConsultation = () => (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Video className="h-5 w-5" />
          Telemedicine
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-bold mb-2">Upcoming Appointments</h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span>Dr. Smith - Cardiology</span>
                <Button size="sm">Join Call</Button>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-bold mb-2">Available Specialists</h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span>Dr. Johnson - General</span>
                <Button size="sm">Schedule</Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const renderAnalytics = () => (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <span>Health Analytics</span>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={() => setSelectedTimeRange('1M')}>1M</Button>
            <Button variant="outline" size="sm" onClick={() => setSelectedTimeRange('3M')}>3M</Button>
            <Button variant="outline" size="sm" onClick={() => setSelectedTimeRange('1Y')}>1Y</Button>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4" />
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={healthMarkersData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-white p-2 border rounded shadow-lg">
                      <p className="font-bold">{payload[0].payload.marker}</p>
                      <p>Current: {payload[0].value}</p>
                      <p>Previous: {payload[0].payload.previous}</p>
                    </div>
                  );
                }
                return null;
              }} />
              <Legend />
              <Line type="monotone" dataKey="current" stroke="#8884d8" name="Current" />
              <Line type="monotone" dataKey="previous" stroke="#82ca9d" name="Previous" strokeDasharray="3 3" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="w-full max-w-7xl mx-auto p-4 space-y-4">
      {renderUserProfile()}
      
      <Tabs defaultValue="dashboard" className="w-full">
        <TabsList className="grid w-full grid-cols-5 gap-4 mb-8">
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
          <TabsTrigger value="telemedicine">Telemedicine</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard">
          {renderAnalytics()}
        </TabsContent>

        <TabsContent value="analytics">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {renderAnalytics()}
          </div>
        </TabsContent>

        <TabsContent value="integrations">
          {renderIntegrations()}
        </TabsContent>

        <TabsContent value="telemedicine">
          {renderVideoConsultation()}
        </TabsContent>

        <TabsContent value="reports">
          <Card>
            <CardHeader>
              <CardTitle>Health Reports</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Button className="w-full justify-between">
                  <span>Monthly Health Summary</span>
                  <Download className="h-4 w-4" />
                </Button>
                <Button className="w-full justify-between">
                  <span>Lab Results</span>
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Button 
        className="fixed bottom-4 left-4 z-50"
        onClick={() => setShowAIChat(true)}
      >
        <MessageSquare className="h-5 w-5 mr-2" />
        AI Health Assistant
      </Button>

      {showAIChat && renderAIChatbot()}
    </div>
  );
};

export default EnhancedHealthDashboard;
