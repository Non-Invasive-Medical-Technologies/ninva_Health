import React from 'react';
import { Button } from '@/components/ui/button';
import { AuthButton } from '@/components/auth/AuthButton';
import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/">
              <img src="/placeholder.svg" alt="Kolibri Health" className="h-8 w-auto" />
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link to="/about">About</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/features">Features</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/terms-of-service">Terms of Service</Link>
            </Button>
            <AuthButton />
          </div>
        </div>
      </div>
    </nav>
  );
};