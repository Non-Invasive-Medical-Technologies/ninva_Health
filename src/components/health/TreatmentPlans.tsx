import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Clock, Activity } from 'lucide-react';

interface TreatmentPlan {
  goals: string[];
  nextSteps: Array<{
    text: string;
    icon: 'clock' | 'activity';
  }>;
}

interface TreatmentPlansProps {
  plan: TreatmentPlan;
}

const TreatmentPlans = ({ plan }: TreatmentPlansProps) => {
  return (
    <section>
      <h2 className="text-2xl font-semibold text-primary mb-4">Treatment Plan</h2>
      <Card>
        <CardContent className="p-6">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Current Treatment Plan</h3>
              <Button className="bg-primary text-white">
                Update Plan
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-muted rounded-lg">
                <h4 className="font-medium mb-2">Treatment Goals</h4>
                <ul className="space-y-2">
                  {plan.goals.map((goal, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle2 className="text-green-500 h-4 w-4" />
                      <span>{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <h4 className="font-medium mb-2">Next Steps</h4>
                <ul className="space-y-2">
                  {plan.nextSteps.map((step, index) => (
                    <li key={index} className="flex items-center gap-2">
                      {step.icon === 'clock' ? (
                        <Clock className="text-primary h-4 w-4" />
                      ) : (
                        <Activity className="text-primary h-4 w-4" />
                      )}
                      <span>{step.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default TreatmentPlans;