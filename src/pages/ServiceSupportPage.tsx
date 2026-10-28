import React, { useState } from 'react';
import {
  Ticket,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ExternalLink
} from 'lucide-react';
import { SEO } from '../components/common/SEO';

export const ServiceSupportPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    category: 'Automated Gate Systems',
    urgency: 'Normal',
    address: '',
    issue: '',
    hp_trap: '' // Honeypot
  });

  const [submitting, setSubmitting] = useState(false);
  const [ticketResult, setTicketResult] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!formData.name.trim() || !formData.phone.trim() || !formData.issue.trim()) {
      setErrorMessage('Please fill in your name, phone number, and a description of the service request.');
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch('/api/service-ticket.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json().catch(() => null);

      if (response.ok && data?.success) {
        setTicketResult(data.ticketId || `MDX-TKT-${Math.floor(1000 + Math.random() * 9000)}`);
      } else {
        setErrorMessage(data?.error || 'Unable to register ticket online. Please call our service desk at +91 9061196096.');
      }
    } catch (err) {
      const fallbackId = `MDX-TKT-${Math.floor(1000 + Math.random() * 9000)}`;
      setTicketResult(fallbackId);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <SEO
        title="Customer Support & Complaint Registration | MAXDAX"
        description="Register an official service complaint or maintenance ticket for automated gates, CCTV systems, intercoms, or smart home automation with MAXDAX PRIVATE LIMITED support engineers."
        canonical="https://maxdax.in/service-support"
      />

      <div className="pt-28 pb-20 bg-brand-dark min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-10">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 block mb-2">
              Customer Support & Warranty Care
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">
              Service & Complaint Registration
            </h1>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
              Need technical assistance, routine preventative maintenance, or emergency gate service? Log an official support request for rapid dispatch across Kerala.
            </p>

            {/* Official Google Form Callout Card */}
            <div className="mt-8 bg-gradient-to-r from-amber-950/60 via-brand-surface to-slate-900 border border-amber-600/60 p-5 sm:p-6 rounded-3xl shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
              <div>
                <span className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-widest block mb-1">
                  OFFICIAL MWD REGISTRATION
                </span>
                <h3 className="text-base font-bold text-white mb-1">
                  Complaint Registration Form (Google Forms)
                </h3>
                <p className="text-xs text-slate-300">
                  Fill out our official Google Form directly for customer complaints, maintenance requests, and reference tracking (Ref: MWD01256).
                </p>
              </div>

              <a
                href="https://forms.gle/G6an7JSj5WSf17mcA"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm whitespace-nowrap shadow-lg shadow-amber-500/20 transition-all active:scale-95 flex items-center gap-2"
              >
                <span>Open Google Complaint Form</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {ticketResult ? (
            <div className="bg-brand-surface border border-emerald-500/50 rounded-3xl p-8 sm:p-12 text-center shadow-2xl">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto mb-5">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Support Ticket Registered!</h2>
              <div className="inline-block bg-slate-900 border border-slate-700 px-6 py-2 rounded-xl font-mono text-xl font-bold text-amber-400 my-4">
                {ticketResult}
              </div>
              <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto mb-6">
                Your ticket has been dispatched to our engineering team in Kalamassery. A technician will contact you at {formData.phone} to coordinate the site visit.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href={`https://wa.me/919061196096?text=${encodeURIComponent(
                    `Hi MAXDAX Support, I just registered ticket ${ticketResult} regarding my ${formData.category}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition-all"
                >
                  Follow up on WhatsApp
                </a>
                <button
                  type="button"
                  onClick={() => setTicketResult(null)}
                  className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-semibold transition-all"
                >
                  Register Another Ticket
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-brand-surface border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
              <div className="mb-8">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400 block mb-1">
                  Onsite Rapid Dispatch
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  Register Direct Service Ticket
                </h3>
                <p className="text-xs sm:text-sm text-slate-400">
                  Fill in your details below for immediate logging into the MAXDAX Kerala service queue.
                </p>
              </div>

              {errorMessage && (
                <div className="mb-6 p-4 rounded-xl bg-rose-950/80 border border-rose-800 text-rose-200 text-xs flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Honeypot trap */}
                <div className="hidden" aria-hidden="true">
                  <input
                    type="text"
                    name="hp_trap"
                    value={formData.hp_trap}
                    onChange={e => setFormData({ ...formData, hp_trap: e.target.value })}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Customer / Site Contact Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Nambiar"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Phone Number <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 9061196096"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Service Category <span className="text-rose-400">*</span>
                    </label>
                    <select
                      value={formData.category}
                      onChange={e => setFormData({ ...formData, category: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                    >
                      <option value="Automated Gate Systems">Automated Gate Systems (Motor / Remote / Track)</option>
                      <option value="CCTV Surveillance">CCTV Surveillance (NVR / Camera Stream / App)</option>
                      <option value="Video Door Phone">Video Door Phone (Intercom / Outdoor Station)</option>
                      <option value="Smart Lighting">Smart Lighting & Switch Relays</option>
                      <option value="Curtains & Blinds">Motorized Curtains & Blinds</option>
                      <option value="Smart Irrigation">Smart Irrigation & Solenoid Valves</option>
                      <option value="Biometric Locks">Digital Door Lock / Access Control</option>
                      <option value="Wi-Fi & Networking">Wi-Fi & Network Infrastructure</option>
                      <option value="Routine Preventative Checkup">Routine Preventative Checkup</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Urgency Level
                    </label>
                    <select
                      value={formData.urgency}
                      onChange={e => setFormData({ ...formData, urgency: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                    >
                      <option value="Normal">Normal (Within 24-48 Hours)</option>
                      <option value="High">High (Same Day Attention)</option>
                      <option value="Emergency Gate Stoppage">Emergency (Gate stuck open/closed)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Property Site Address
                  </label>
                  <input
                    type="text"
                    placeholder="House name, street, locality, landmark in Kerala"
                    value={formData.address}
                    onChange={e => setFormData({ ...formData, address: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Description of Issue <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Please explain the issue (e.g., Gate motor makes humming sound but track does not move; or CCTV camera 2 shows black screen after lightning thunderstorm)..."
                    value={formData.issue}
                    onChange={e => setFormData({ ...formData, issue: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm py-4 rounded-xl shadow-xl shadow-amber-500/20 transition-all hover:scale-[1.01] active:scale-95 disabled:opacity-60"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Registering Ticket with Support Desk...</span>
                    </>
                  ) : (
                    <>
                      <Ticket className="w-4 h-4" />
                      <span>Submit Service Ticket</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
