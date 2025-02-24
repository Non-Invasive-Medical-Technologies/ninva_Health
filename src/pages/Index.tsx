
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Welcome to Ninva Health</CardTitle>
          <CardDescription>Your personal health companion</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-center text-gray-600">
            Get started by creating an account or signing in to access your health profile
          </p>
          <Link to="/auth">
            <Button className="w-full">
              Sign In / Sign Up
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;
