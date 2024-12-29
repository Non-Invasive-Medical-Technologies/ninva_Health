import React from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { User } from 'lucide-react';

interface PatientData {
  name: string;
  id: string;
  age: number;
  lastVisit: string;
}

interface PatientRecordsProps {
  patientData: PatientData;
}

const PatientRecords = ({ patientData }: PatientRecordsProps) => {
  return (
    <section>
      <h2 className="text-2xl font-semibold text-medical-primary mb-4">Patient Records</h2>
      <Card>
        <CardHeader className="border-b">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 bg-medical-primary rounded-full flex items-center justify-center">
                <User className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">{patientData.name}</h3>
                <p className="text-gray-500">ID: {patientData.id}</p>
              </div>
            </div>
            <Button 
              variant="outline"
              className="border-medical-primary text-medical-primary"
            >
              Edit Profile
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-3 gap-6">
            <div className="p-4 bg-surface-light rounded-lg">
              <p className="text-sm text-gray-500">Age</p>
              <p className="text-lg font-semibold">{patientData.age} years</p>
            </div>
            <div className="p-4 bg-surface-light rounded-lg">
              <p className="text-sm text-gray-500">Last Visit</p>
              <p className="text-lg font-semibold">{patientData.lastVisit}</p>
            </div>
            <div className="p-4 bg-surface-light rounded-lg">
              <p className="text-sm text-gray-500">Next Appointment</p>
              <p className="text-lg font-semibold">2024-03-30</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default PatientRecords;