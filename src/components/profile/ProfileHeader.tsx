
import React from 'react';
import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';
import { uploadAvatar } from '@/utils/uploadUtils';
import { Profile } from '@/types/profile';

interface ProfileHeaderProps {
  profile: Profile | null;
  setProfile: (profile: Profile | null) => void;
  onSignOut: () => void;
}

export const ProfileHeader = ({ profile, setProfile, onSignOut }: ProfileHeaderProps) => {
  return (
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
        <Button variant="outline" size="sm" className="h-8 sm:h-10" onClick={onSignOut}>
          <LogOut className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
          <span className="text-xs sm:text-sm">Sign Out</span>
        </Button>
      </div>
    </div>
  );
};
