import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { LogOut, Heart, Activity, Droplets, FootprintsIcon, Flame, Moon, Calendar, MessageSquare } from 'lucide-react';
import { Reminders } from '@/components/health/Reminders';
import { ActivityFeed } from '@/components/health/ActivityFeed';
import { uploadAvatar } from '@/utils/uploadUtils';

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
  avatar_url?: string | null;
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
  const [profile, setProfile] = useState<Profile | null>(null);
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
    
    const { data: profileData, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', session.user.id)
      .single();

    if (error) {
      console.error('Error loading profile:', error);
      return;
    }

    if (profileData) {
      setProfile(profileData);
      form.reset({
        first_name: profileData.first_name || '',
        last_name: profileData.last_name || '',
        date_of_birth: profileData.date_of_birth || '',
        gender: profileData.gender || '',
        blood_type: profileData.blood_type || '',
        medical_conditions: profileData.medical_conditions?.join(', ') || '',
        allergies: profileData.allergies?.join(', ') || '',
      });
      if (profileData.first_name && profileData.last_name) {
        setShowDashboard(true);
      }
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
      
      setProfile(prev => ({
        ...prev!,
        ...data,
        medical_conditions: data.medical_conditions.split(',').map(item => item.trim()),
        allergies: data.allergies.split(',').map(item => item.trim()),
      }));
      
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
      <div className="min-h-screen bg-gray-50 py-6 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:justify-between sm:items-center mb-8">
            <div className="flex flex-col items-center sm:items-start space-y-3 sm:space-y-0 sm:flex-row sm:space-x-4">
              <img
                src="/lovable-uploads/084aad43-bdcd-4659-b80e-63f9542f47c6.png"
                alt="Ninva Health"
                className="h-6 sm:h-8"
              />
              <h1 className="text-xl sm:text-3xl font-bold text-gray-900">Health Dashboard</h1>
            </div>
            <div className="flex items-center justify-center sm:justify-end space-x-4">
              <div className="flex items-center space-x-3">
                <div className="relative group">
                  <img
                    src={profile?.avatar_url || `https://api.dicebear.com/7.x/avataaars/svg?seed=${profile?.first_name}`}
                    alt="Profile"
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover border-2 border-ninva cursor-pointer"
                    onClick={() => document.getElementById('avatar-upload')?.click()}
                  />
                  <div className="absolute -bottom-1 -right-1 h-3 w-3 sm:h-4 sm:w-4 rounded-full border-2 border-white bg-green-500" />
                  <input
                    type="file"
                    id="avatar-upload"
                    className="hidden"
                    accept="image/*"
                    onChange={async (e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        try {
                          const publicUrl = await uploadAvatar(file);
                          setProfile(prev => prev ? { ...prev, avatar_url: publicUrl } : null);
                        } catch (error) {
                          console.error('Failed to upload avatar:', error);
                        }
                      }
                    }}
                  />
                </div>
                <div className="text-xs sm:text-sm">
                  <p className="font-medium text-gray-900">
                    {profile?.first_name} {profile?.last_name}
                  </p>
                  <p className="text-gray-500">Online</p>
                </div>
              </div>
              <Button variant="outline" size="sm" className="h-8 sm:h-10" onClick={handleSignOut}>
                <LogOut className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                <span className="text-xs sm:text-sm">Sign Out</span>
              </Button>
            </div>
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

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <ActivityFeed />
            </div>
            <div>
              <Reminders />
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="w-5 h-5 text-ninva mr-2" />
                  Telehealth Consultations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Button 
                  className="w-full"
                  onClick={() => {
                    toast.success('Opening appointment scheduler');
                  }}
                >
                  Book Consultation
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageSquare className="w-5 h-5 text-ninva mr-2" />
                  Ask Dr. Ninva
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Button 
                  className="w-full"
                  onClick={() => {
                    toast.success('Opening chat with Dr. Ninva');
                  }}
                >
                  Start Chat
                </Button>
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
