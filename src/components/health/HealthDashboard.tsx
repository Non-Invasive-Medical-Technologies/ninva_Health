import React from 'react';
import PatientRecords from './PatientRecords';
import DiagnosticReports from './DiagnosticReports';

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

  return (
    <div className="max-w-7xl mx-auto p-4 space-y-8">
      <PatientRecords patientData={patientData} />
      <DiagnosticReports diagnostics={diagnostics} />
    </div>
  );
};

export default HealthDashboard;