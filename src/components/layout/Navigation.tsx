import React from 'react';
import { Button } from '@/components/ui/button';
import { AuthButton } from '@/components/auth/AuthButton';

export const Navigation = () => {
  return (
    <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <img src="/placeholder.svg" alt="Ninva Health" className="h-8 w-auto" />
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost">About</Button>
            <Button variant="ghost">Features</Button>
            <Button variant="ghost">Privacy</Button>
            <Button variant="ghost" asChild>
              <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
            </Button>
            <Button variant="ghost" asChild>
              <a href="/terms-of-service" target="_blank" rel="noopener noreferrer">Terms of Service</a>
            </Button>
            <AuthButton />
          </div>
        </div>
      </div>
    </nav>
  );
};