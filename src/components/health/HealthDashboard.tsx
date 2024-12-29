import React from 'react';
import PatientRecords from './PatientRecords';
import DiagnosticReports from './DiagnosticReports';
import TreatmentPlans from './TreatmentPlans';
import MedicationTracker from './MedicationTracker';

const HealthDashboard = () => {
  // Sample data
  const patientData = {
    name: "Jane Doe",
    id: "P-123456",
    age: 45,
    lastVisit: "2024-03-15"
  };

  const diagnostics = [
    { test: "Blood Pressure", value: "120/80", status: "Normal" },
    { test: "Heart Rate", value: "72", status: "Normal" },
    { test: "Blood Sugar", value: "95", status: "Normal" }
  ];

  const treatmentPlan = {
    goals: [
      "Reduce blood pressure",
      "Improve heart rate variability"
    ],
    nextSteps: [
      { text: "Follow-up appointment in 2 weeks", icon: "clock" },
      { text: "Daily vital signs monitoring", icon: "activity" }
    ]
  };

  const medications = [
    { name: "Medication A", dosage: "10mg", frequency: "Daily", time: "8:00 AM" },
    { name: "Medication B", dosage: "5mg", frequency: "Twice daily", time: "8:00 AM, 8:00 PM" }
  ];

  return (
    <div className="max-w-7xl mx-auto p-4 space-y-8">
      <PatientRecords patientData={patientData} />
      <DiagnosticReports diagnostics={diagnostics} />
      <TreatmentPlans plan={treatmentPlan} />
      <MedicationTracker medications={medications} />
    </div>
  );
};

export default HealthDashboard;