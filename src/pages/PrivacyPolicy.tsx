import React from 'react';
import { Navigation } from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <p className="mb-4">
          At Ninva Health, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your information when you use our services.
        </p>
        <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
        <p className="mb-4">
          We may collect personal information such as your name, email address, and health data when you register for our services or interact with our platform.
        </p>
        <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
        <p className="mb-4">
          Your information is used to provide and improve our services, communicate with you, and ensure the security of our platform.
        </p>
        <h2 className="text-2xl font-bold mb-4">Data Security</h2>
        <p className="mb-4">
          We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the internet or method of electronic storage is 100% secure.
        </p>
        <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
        <p className="mb-4">
          You have the right to access, correct, or delete your personal information. You can also object to the processing of your data in certain circumstances.
        </p>
        <h2 className="text-2xl font-bold mb-4">Changes to This Privacy Policy</h2>
        <p className="mb-4">
          We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
        </p>
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <p className="mb-4">
          If you have any questions about this Privacy Policy, please contact us at support@ninvahealth.com.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
