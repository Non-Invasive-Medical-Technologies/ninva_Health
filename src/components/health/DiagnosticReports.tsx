import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface DiagnosticData {
  test: string;
  value: string;
  status: string;
}

interface DiagnosticReportsProps {
  diagnostics: DiagnosticData[];
}

const DiagnosticReports = ({ diagnostics }: DiagnosticReportsProps) => {
  return (
    <section>
      <h2 className="text-2xl font-semibold text-medical-primary mb-4">Diagnostic Reports</h2>
      <Card>
        <CardContent className="p-6">
          <div className="space-y-4">
            {diagnostics.map((diagnostic, index) => (
              <div 
                key={index}
                className="flex items-center justify-between p-4 bg-surface-light rounded-lg"
              >
                <div>
                  <h4 className="font-medium">{diagnostic.test}</h4>
                  <p className="text-lg font-semibold">{diagnostic.value}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  diagnostic.status === 'Normal' 
                    ? 'bg-medical-success/20 text-medical-success' 
                    : 'bg-medical-error/20 text-medical-error'
                }`}>
                  {diagnostic.status}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default DiagnosticReports;