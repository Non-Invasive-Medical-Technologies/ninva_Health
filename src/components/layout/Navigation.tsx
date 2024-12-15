import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AuthButton } from '@/components/auth/AuthButton';
import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/kolibri-logo.svg" 
                alt="Ninva Health" 
                className="h-8 w-auto"
                onError={(e) => {
                  console.log("Logo failed to load, falling back to text");
                  e.currentTarget.style.display = 'none';
                }} 
              />
              <span className="text-xl font-semibold text-gray-900">Ninva Health</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link to="/about">About</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/features">Features</Link>
            </Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button>Sign In</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Sign In</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col space-y-4 py-4">
                  <AuthButton />
                  <p className="text-sm text-muted-foreground text-center">
                    Sign in with Apple - Coming Soon
                  </p>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </nav>
  );
};