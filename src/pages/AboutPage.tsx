import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, MapPin, CheckCircle2, ArrowRight, Building, Award, Wrench, Users } from 'lucide-react';
import { SEO } from '../components/common/SEO';

export const AboutPage: React.FC = () => {
  return (
    <>
      <SEO
        title="About MAXDAX PRIVATE LIMITED | Smart Living Engineers Kalamassery"
        description="Learn about MAXDAX PRIVATE LIMITED, Kerala's trusted engineering partner for turnkey smart home automation, automated gates, security, and residential technology."
        canonical="https://maxdax.in/about"
      />

      <div className="pt-28 pb-20 bg-brand-dark min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400 block mb-2">
              Corporate Overview & Philosophy
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">
              Intelligent Living Redefined
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              MAXDAX PRIVATE LIMITED is a specialized technology engineering contractor headquartered in Kalamassery, Kerala, dedicated to designing durable, invisible, and deeply intuitive smart-living solutions.
            </p>
          </div>

          {/* Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-brand-surface border border-slate-800 rounded-2xl p-6 sm:p-8">
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 mb-5">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Engineering Integrity</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                We believe smart home technology should simplify life, not add frustration. We reject fragile gadgets in favor of commercial-grade bus wiring, local edge processing, and industrial gate gearmotors.
              </p>
            </div>

            <div className="bg-brand-surface border border-slate-800 rounded-2xl p-6 sm:p-8">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-5">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Turnkey Execution</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                From initial electrical conduit schematics during civil construction to physical cable pulling, rack dressing, and firmware commissioning, our engineers handle the entire lifecycle.
              </p>
            </div>

            <div className="bg-brand-surface border border-slate-800 rounded-2xl p-6 sm:p-8">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-5">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Local Kerala Support</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Based out of Muttam, Kalamassery, our dedicated on-site technical teams provide prompt preventative maintenance, warranty support, and software upgrades across Kerala.
              </p>
            </div>
          </div>

          {/* Corporate Details Card */}
          <div className="bg-brand-surface border border-slate-800 rounded-3xl p-8 sm:p-12 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400 block mb-2">
                  Headquarters & Operations
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                  Rooted in Kerala, Engineered to Global Standards
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  MAXDAX coordinates closely with leading architects, MEP consultants, interior designers, and luxury builders. Whether you are building an expansive family villa in Ernakulam, a beachfront holiday home, or a corporate headquarters, we ensure every conduit, cable, and motor is placed with perfection.
                </p>

                <div className="space-y-3 text-xs sm:text-sm text-slate-200">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-sky-400" />
                    <span>Registered Indian Corporate Entity: MAXDAX PRIVATE LIMITED</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-sky-400" />
                    <span>Headquarters: Muttam, Kalamassery, Ernakulam, Kerala</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-sky-400" />
                    <span>Specialized in High-Torque BFT & DEA Gate Automation</span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8">
                <h3 className="text-lg font-bold text-white mb-3">Architect & Builder Partnership</h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  Are you an architect or interior designer looking for a reliable home automation contractor who respects your design aesthetics? We provide complete CAD wiring layouts, sample demo kits, and flawless on-site coordination.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs sm:text-sm transition-all shadow-md"
                >
                  <span>Connect with Our Project Team</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
