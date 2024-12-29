import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Video, Phone } from 'lucide-react';

interface TelemedicineCardProps {
  callActive: boolean;
  setCallActive: (active: boolean) => void;
}

export const TelemedicineCard = ({ callActive, setCallActive }: TelemedicineCardProps) => {
  return (
    <Card className="max-w-xl mx-auto">
      <CardContent className="p-6">
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#8FD5CA]" />
              <div>
                <h3 className="font-medium">Dr. Sarah Smith</h3>
                <p className="text-sm text-gray-600">Cardiologist</p>
              </div>
            </div>
            {callActive ? (
              <div className="flex gap-2">
                <Button 
                  variant="outline"
                  className="rounded-full w-10 h-10 p-0"
                  onClick={() => setCallActive(false)}
                >
                  <Video className="w-5 h-5" />
                </Button>
                <Button 
                  className="rounded-full w-10 h-10 p-0 bg-red-500"
                  onClick={() => setCallActive(false)}
                >
                  <Phone className="w-5 h-5" />
                </Button>
              </div>
            ) : (
              <Button 
                className="bg-[#26652C]"
                onClick={() => setCallActive(true)}
              >
                Start Consultation
              </Button>
            )}
          </div>

          {callActive && (
            <div className="aspect-video bg-gray-100 rounded-lg relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <Video className="w-12 h-12 text-gray-400" />
              </div>
              <div className="absolute bottom-4 right-4 w-32 h-24 bg-[#26652C] rounded-lg" />
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};