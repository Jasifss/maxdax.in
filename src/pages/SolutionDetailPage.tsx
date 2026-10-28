import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  ShieldCheck,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  Layers,
  HelpCircle,
  Phone,
  Home,
  Building2,
  Sparkles
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { solutionsData } from '../data/solutionsData';
import { GateDemo } from '../components/demos/GateDemo';
import { CCTVDemo } from '../components/demos/CCTVDemo';
import { VDPDemo } from '../components/demos/VDPDemo';
import { IrrigationDemo } from '../components/demos/IrrigationDemo';
import { LightingDemo } from '../components/demos/LightingDemo';
import { CurtainDemo } from '../components/demos/CurtainDemo';
import { SmartLockDemo } from '../components/demos/SmartLockDemo';
import { NetworkDemo } from '../components/demos/NetworkDemo';
import { AudioDemo } from '../components/demos/AudioDemo';
import { ConsultationForm } from '../components/common/ConsultationForm';

export const SolutionDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const solution = solutionsData.find(s => s.slug === slug);

  if (!solution) {
    return <Navigate to="/solutions" replace />;
  }

  // Render the matching interactive demo if available
  const renderInteractiveDemo = () => {
    switch (solution.interactiveDemoId) {
      case 'gate':
        return <GateDemo />;
      case 'cctv':
        return <CCTVDemo />;
      case 'vdp':
        return <VDPDemo />;
      case 'irrigation':
        return <IrrigationDemo />;
      case 'lighting':
        return <LightingDemo />;
      case 'curtain':
        return <CurtainDemo />;
      case 'lock':
        return <SmartLockDemo />;
      case 'network':
        return <NetworkDemo />;
      case 'audio':
        return <AudioDemo />;
      default:
        return null;
    }
  };

  return (
    <>
      <SEO
        title={`${solution.title} | Kerala Turnkey Smart Automation | MAXDAX`}
        description={solution.description}
        canonical={`https://maxdax.in/solutions/${solution.slug}`}
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: solution.title,
          provider: {
            '@type': 'HomeAndConstructionBusiness',
            name: 'MAXDAX PRIVATE LIMITED',
            telephone: '+919061196096',
            address: 'Muttam, Kalamassery, Kerala'
          },
          description: solution.description,
          areaServed: 'Kerala, India'
        }}
      />

      <div className="pt-24 pb-20 bg-brand-dark min-h-screen">
        {/* Solution Hero */}
        <section className="relative py-14 overflow-hidden border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb Navigation */}
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-6">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link to="/solutions" className="hover:text-white transition-colors">Solutions</Link>
              <span>/</span>
              <span className="text-sky-400 font-semibold">{solution.title}</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-3 py-1 rounded-md bg-sky-950/80 border border-sky-800 text-[11px] font-mono font-bold text-sky-400 uppercase tracking-wider mb-3">
                  {solution.categoryLabel}
                </span>
                <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 leading-tight">
                  {solution.title}
                </h1>
                <p className="text-lg font-semibold text-sky-200 mb-4">
                  {solution.headline}
                </p>
                <p className="text-sm text-slate-300 leading-relaxed mb-8">
                  {solution.description}
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="#consultation-booking"
                    className="px-6 py-3.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs sm:text-sm shadow-xl shadow-sky-600/30 transition-all hover:scale-105 active:scale-95"
                  >
                    Request Technical Proposal
                  </a>
                  <a
                    href={`https://wa.me/919061196096?text=${encodeURIComponent(
                      `Hello MAXDAX, I am looking for details and pricing on ${solution.title}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-slate-500 text-slate-200 font-semibold text-xs sm:text-sm flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-emerald-400" />
                    <span>WhatsApp Inquiry</span>
                  </a>
                </div>
              </div>

              {/* Cover Image */}
              <div className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
                <img
                  src={solution.heroImage}
                  alt={solution.title}
                  className="w-full h-80 sm:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent"></div>
                <div className="absolute bottom-5 left-6 right-6">
                  <div className="text-xs font-mono text-sky-400 font-semibold uppercase">
                    MAXDAX ENGINEERING SPECIFICATION
                  </div>
                  <div className="text-sm font-bold text-white">Turnkey Hardware & Software Commissioning</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Demonstration Section if applicable */}
        {solution.interactiveDemoId && (
          <section className="py-16 bg-brand-surface/40 border-b border-slate-800">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-8">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 block mb-2">
                  Live Interactive Simulation
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                  Test the {solution.shortTitle || solution.title} Demonstration
                </h2>
                <p className="text-xs sm:text-sm text-slate-400">
                  Experience real-time telemetry, state changes, and hardware responses in your browser.
                </p>
              </div>

              {renderInteractiveDemo()}
            </div>
          </section>
        )}

        {/* Engineering Capabilities & Features */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {/* Core Features */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Key System Capabilities
                </h2>
                <div className="space-y-4 mb-10">
                  {solution.capabilities.map((cap, i) => (
                    <div
                      key={i}
                      className="p-5 rounded-2xl bg-brand-surface border border-slate-800 hover:border-slate-700 transition-colors"
                    >
                      <h3 className="text-base font-bold text-white mb-1.5 flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-sky-400 shrink-0" />
                        <span>{cap.title}</span>
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {cap.description}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Residential vs Commercial Applications */}
                <h2 className="text-2xl font-bold text-white mb-6">
                  Applications & Deployments
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  <div className="p-5 rounded-2xl bg-brand-surface border border-slate-800">
                    <div className="flex items-center gap-2 text-sky-400 font-bold text-sm mb-3">
                      <Home className="w-4 h-4" />
                      <span>Residential Deployments</span>
                    </div>
                    <ul className="space-y-2 text-xs text-slate-300">
                      {solution.applications.residential.map((app, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                          <span>{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-5 rounded-2xl bg-brand-surface border border-slate-800">
                    <div className="flex items-center gap-2 text-amber-400 font-bold text-sm mb-3">
                      <Building2 className="w-4 h-4" />
                      <span>Commercial Facilities</span>
                    </div>
                    <ul className="space-y-2 text-xs text-slate-300">
                      {solution.applications.commercial.map((app, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                          <span>{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Ecosystem Integrations */}
                <h2 className="text-2xl font-bold text-white mb-6">
                  Ecosystem Interoperability
                </h2>
                <div className="p-5 rounded-2xl bg-brand-surface border border-slate-800 mb-10">
                  <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                    This subsystem communicates natively with the entire MAXDAX smart ecosystem, enabling cross-triggered automated scenes:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {solution.compatibleIntegrations.map((integ, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-200 text-xs font-semibold"
                      >
                        {integ}
                      </span>
                    ))}
                  </div>
                </div>

                {/* FAQ Accordion */}
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-sky-400" />
                  <span>Frequently Asked Questions</span>
                </h2>
                <div className="space-y-3">
                  {solution.faqs.map((faq, i) => (
                    <div
                      key={i}
                      className="border border-slate-800 rounded-xl overflow-hidden bg-brand-surface"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                        className="w-full p-4 text-left flex items-center justify-between text-xs sm:text-sm font-semibold text-white hover:text-sky-400 transition-colors"
                      >
                        <span>{faq.question}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            openFaqIndex === i ? 'rotate-180 text-sky-400' : 'text-slate-400'
                          }`}
                        />
                      </button>
                      {openFaqIndex === i && (
                        <div className="px-4 pb-4 text-xs text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Sidebar: Technical Specifications & Booking */}
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-brand-surface border border-slate-800">
                  <h3 className="text-base font-bold text-white mb-4">
                    Engineering Specifications
                  </h3>
                  <div className="space-y-3 text-xs">
                    {solution.specifications.map((spec, i) => (
                      <div key={i} className="pb-3 border-b border-slate-800/80 last:border-0 last:pb-0">
                        <span className="text-slate-400 block text-[10px] uppercase font-mono mb-0.5">
                          {spec.label}
                        </span>
                        <span className="text-slate-100 font-semibold">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-sky-950/40 border border-slate-800">
                  <h3 className="text-base font-bold text-white mb-2">Turnkey Guarantee</h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    All MAXDAX hardware installations include an on-site warranty, factory testing certification, and comprehensive Kerala support.
                  </p>
                  <a
                    href="tel:+919061196096"
                    className="inline-flex items-center gap-2 text-xs font-bold text-sky-400 hover:underline"
                  >
                    <span>Speak with a Project Engineer</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contextual Consultation Form */}
        <section id="consultation-booking" className="py-16 bg-brand-dark border-t border-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ConsultationForm initialSolution={solution.title} />
          </div>
        </section>
      </div>
    </>
  );
};
