import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { LogOut, Heart, Activity, Droplets, FootprintsIcon, Flame, Moon } from 'lucide-react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

interface Profile {
  id: string;
  created_at: string;
  first_name: string | null;
  last_name: string | null;
  date_of_birth: string | null;
  gender: string | null;
  blood_type: string | null;
  medical_conditions: string[] | null;
  allergies: string[] | null;
  updated_at: string;
}

interface ProfileFormValues {
  first_name: string;
  last_name: string;
  date_of_birth: string;
  gender: string;
  blood_type: string;
  medical_conditions: string;
  allergies: string;
}

const Profile = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [showDashboard, setShowDashboard] = useState(false);
  const [healthMetrics, setHealthMetrics] = useState<any>(null);
  const form = useForm<ProfileFormValues>();

  useEffect(() => {
    checkSession();
  }, [navigate, form]);

  const checkSession = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      navigate('/auth');
      return;
    }
    
    const { data: profile, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', session.user.id)
      .single();

    if (error) {
      console.error('Error loading profile:', error);
      return;
    }

    if (profile) {
      form.reset({
        first_name: profile.first_name || '',
        last_name: profile.last_name || '',
        date_of_birth: profile.date_of_birth || '',
        gender: profile.gender || '',
        blood_type: profile.blood_type || '',
        medical_conditions: profile.medical_conditions?.join(', ') || '',
        allergies: profile.allergies?.join(', ') || '',
      });
    }

    try {
      const { data: metrics, error: metricsError } = await supabase.functions.invoke('health-metrics', {
        method: 'GET',
      });

      if (metricsError) throw metricsError;
      if (metrics) setHealthMetrics(metrics.data);
    } catch (error) {
      console.error('Error loading health metrics:', error);
    }

    setLoading(false);
  };

  const handleSubmit = async (data: ProfileFormValues) => {
    try {
      const { error } = await supabase
        .from('profiles')
        .update({
          first_name: data.first_name,
          last_name: data.last_name,
          date_of_birth: data.date_of_birth,
          gender: data.gender,
          blood_type: data.blood_type,
          medical_conditions: data.medical_conditions.split(',').map(item => item.trim()),
          allergies: data.allergies.split(',').map(item => item.trim()),
          updated_at: new Date().toISOString(),
        })
        .eq('id', (await supabase.auth.getUser()).data.user?.id);

      if (error) throw error;
      toast.success('Profile updated successfully');
      setShowDashboard(true);
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut();
      navigate('/auth');
      toast.success('Signed out successfully');
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (showDashboard) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Health Dashboard</h1>
            <Button variant="outline" onClick={handleSignOut}>
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Heart className="w-5 h-5 text-red-500 mr-2" />
                  Heart Rate
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{healthMetrics?.heart_rate || '--'}</div>
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
                  {healthMetrics?.blood_pressure_systolic || '--'}/{healthMetrics?.blood_pressure_diastolic || '--'}
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
                <div className="text-3xl font-bold">{healthMetrics?.blood_oxygen_level || '--'}</div>
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
                <div className="text-3xl font-bold">{healthMetrics?.steps_count || '--'}</div>
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
                <div className="text-3xl font-bold">{healthMetrics?.calories_burned || '--'}</div>
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
                  {healthMetrics?.sleep_duration_minutes 
                    ? `${Math.floor(healthMetrics.sleep_duration_minutes / 60)}h ${healthMetrics.sleep_duration_minutes % 60}m` 
                    : '--'}
                </div>
                <div className="text-sm text-gray-500">hours slept</div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8">
            <Button variant="outline" onClick={() => setShowDashboard(false)}>
              Edit Profile
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Health Profile</h1>
          <Button variant="outline" onClick={handleSignOut}>
            <LogOut className="w-4 h-4 mr-2" />
            Sign Out
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="first_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="last_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="date_of_birth"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Date of Birth</FormLabel>
                        <FormControl>
                          <Input type="date" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="gender"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Gender</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="blood_type"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Blood Type</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="medical_conditions"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Medical Conditions (comma-separated)</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="allergies"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Allergies (comma-separated)</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full">
                  Save Profile
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
