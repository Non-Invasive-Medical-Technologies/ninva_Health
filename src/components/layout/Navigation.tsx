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
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/1f0b3e9f-c483-488d-b00f-1fdca2800b5a.png"
                alt="Ninva Health" 
                className="h-8 w-auto dark:hidden"
                onError={(e) => {
                  console.log("Color logo failed to load, falling back to text");
                  e.currentTarget.style.display = 'none';
                }} 
              />
              <img 
                src="/lovable-uploads/7c9de020-0246-4290-9031-2bc460fbff8a.png"
                alt="Ninva Health" 
                className="h-8 w-auto hidden dark:block"
                onError={(e) => {
                  console.log("White logo failed to load, falling back to text");
                  e.currentTarget.style.display = 'none';
                }} 
              />
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