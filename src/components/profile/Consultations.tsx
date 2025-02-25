
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, MessageSquare } from 'lucide-react';
import { toast } from 'sonner';

export const Consultations = () => {
  return (
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
  );
};
