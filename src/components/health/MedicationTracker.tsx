import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Pill, Plus } from 'lucide-react';

interface Medication {
  name: string;
  dosage: string;
  frequency: string;
  time: string;
}

interface MedicationTrackerProps {
  medications: Medication[];
}

const MedicationTracker = ({ medications }: MedicationTrackerProps) => {
  return (
    <section>
      <h2 className="text-2xl font-semibold text-primary mb-4">Medication Tracker</h2>
      <Card>
        <CardContent className="p-6">
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Current Medications</h3>
              <Button 
                variant="outline" 
                className="border-primary text-primary"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Medication
              </Button>
            </div>
            <div className="space-y-4">
              {medications.map((med, index) => (
                <div 
                  key={index}
                  className="p-4 bg-muted rounded-lg flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Pill className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">{med.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {med.dosage} - {med.frequency}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">Next Dose</p>
                    <p className="text-sm text-muted-foreground">{med.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default MedicationTracker;