import React from 'react';
import { Navigation } from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

const TermsOfService = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
        <p className="mb-4">
          Welcome to Ninva Health! These Terms of Service govern your use of our services. By accessing or using our services, you agree to be bound by these terms.
        </p>
        <h2 className="text-2xl font-bold mb-4">2. Use of Services</h2>
        <p className="mb-4">
          You must use our services in compliance with all applicable laws and regulations. You agree not to misuse our services or help anyone else do so.
        </p>
        <h2 className="text-2xl font-bold mb-4">3. User Accounts</h2>
        <p className="mb-4">
          You may need to create an account to access certain features of our services. You are responsible for maintaining the confidentiality of your account information.
        </p>
        <h2 className="text-2xl font-bold mb-4">4. Intellectual Property</h2>
        <p className="mb-4">
          All content and materials available on our services are the property of Ninva Health or our licensors. You may not use, reproduce, or distribute any content without our permission.
        </p>
        <h2 className="text-2xl font-bold mb-4">5. Limitation of Liability</h2>
        <p className="mb-4">
          To the fullest extent permitted by law, Ninva Health shall not be liable for any indirect, incidental, or consequential damages arising from your use of our services.
        </p>
        <h2 className="text-2xl font-bold mb-4">6. Changes to Terms</h2>
        <p className="mb-4">
          We may update these Terms of Service from time to time. We will notify you of any changes by posting the new terms on our website.
        </p>
        <h2 className="text-2xl font-bold mb-4">7. Contact Us</h2>
        <p className="mb-4">
          If you have any questions about these Terms of Service, please contact us at support@ninvahealth.com.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default TermsOfService;
