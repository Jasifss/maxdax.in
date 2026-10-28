import React from 'react';
import { SEO } from '../components/common/SEO';

export const TermsPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Terms & Conditions | MAXDAX PRIVATE LIMITED"
        description="Terms and conditions governing the use of MAXDAX technology consulting and services."
        canonical="https://maxdax.in/terms-and-conditions"
      />

      <div className="pt-28 pb-20 bg-brand-dark min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-surface border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl text-slate-300 text-xs sm:text-sm leading-relaxed space-y-6">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white mb-6">
              Terms & Conditions
            </h1>
            <p className="text-slate-400 font-mono text-[11px]">
              Last updated: October 2026 &bull; MAXDAX PRIVATE LIMITED
            </p>

            <h2 className="text-lg font-bold text-white pt-4">1. Scope of Work</h2>
            <p>
              MAXDAX provides residential and commercial automation, gate automation motors, CCTV, video door phones, and related technology installations. Formal quotations and engineering drawings provided on a project-by-project basis supersede website descriptions.
            </p>

            <h2 className="text-lg font-bold text-white pt-4">2. Product Warranties</h2>
            <p>
              Installed equipment is backed by original manufacturer warranties (e.g. BFT, DEA, Hikvision, Dahua) subject to proper electrical power supply and surge suppression compliance.
            </p>

            <h2 className="text-lg font-bold text-white pt-4">3. Interactive Website Demonstrations</h2>
            <p>
              All interactive device demonstrations on this website (including Gate, CCTV, VDP, and Irrigation simulators) are visual architectural simulations designed to demonstrate system logic and interoperability concepts.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
