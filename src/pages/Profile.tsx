
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { ProfileHeader } from '@/components/profile/ProfileHeader';
import { HealthMetrics } from '@/components/profile/HealthMetrics';
import { ProfileForm } from '@/components/profile/ProfileForm';
import { Consultations } from '@/components/profile/Consultations';
import { Reminders } from '@/components/health/Reminders';
import { ActivityFeed } from '@/components/health/ActivityFeed';
import { Profile as ProfileType, ProfileFormValues } from '@/types/profile';

const Profile = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [showDashboard, setShowDashboard] = useState(false);
  const [healthMetrics, setHealthMetrics] = useState<any>(null);
  const [profile, setProfile] = useState<ProfileType | null>(null);
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
          <ProfileHeader 
            profile={profile} 
            setProfile={setProfile} 
            onSignOut={handleSignOut} 
          />

          <HealthMetrics metrics={healthMetrics} />

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <ActivityFeed />
            </div>
            <div>
              <Reminders />
            </div>
          </div>

          <Consultations />

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
    <ProfileForm 
      form={form} 
      onSubmit={handleSubmit} 
      onSignOut={handleSignOut} 
    />
  );
};

export default Profile;
