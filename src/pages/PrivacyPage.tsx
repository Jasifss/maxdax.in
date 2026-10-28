import React from 'react';
import { SEO } from '../components/common/SEO';

export const PrivacyPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Privacy Policy | MAXDAX PRIVATE LIMITED"
        description="Privacy policy and data protection principles of MAXDAX PRIVATE LIMITED."
        canonical="https://maxdax.in/privacy-policy"
      />

      <div className="pt-28 pb-20 bg-brand-dark min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-surface border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl text-slate-300 text-xs sm:text-sm leading-relaxed space-y-6">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white mb-6">
              Privacy Policy
            </h1>
            <p className="text-slate-400 font-mono text-[11px]">
              Last updated: October 2026 &bull; MAXDAX PRIVATE LIMITED
            </p>

            <h2 className="text-lg font-bold text-white pt-4">1. Information We Collect</h2>
            <p>
              When you submit a consultation request or service ticket on maxdax.in, we collect personal contact details including your name, telephone/WhatsApp number, email address, property type, and project location.
            </p>

            <h2 className="text-lg font-bold text-white pt-4">2. Purpose of Processing</h2>
            <p>
              We process your information exclusively to provide technical proposals, schedule site surveys, dispatch service engineers, and respond to your inquiries. We do not sell, rent, or trade your personal data to any third-party marketing companies.
            </p>

            <h2 className="text-lg font-bold text-white pt-4">3. Smart Home Telemetry & Security</h2>
            <p>
              MAXDAX installs systems prioritizing on-premise local edge processing. We do not inspect, log, or maintain copies of your private CCTV video recordings or smart lock access codes on our web servers.
            </p>

            <h2 className="text-lg font-bold text-white pt-4">4. Contact Information</h2>
            <p>
              If you have any questions regarding your personal data, you can reach our grievance desk at <a href="mailto:info@maxdax.in" className="text-sky-400 hover:underline">info@maxdax.in</a> or by visiting our office at Muttam, Kalamassery, Kerala.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
