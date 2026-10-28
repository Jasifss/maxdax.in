import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2, MessageCircle } from 'lucide-react';
import { solutionsData } from '../../data/solutionsData';

interface ConsultationFormProps {
  initialSolution?: string;
  className?: string;
}

export const ConsultationForm: React.FC<ConsultationFormProps> = ({
  initialSolution,
  className = ''
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: 'Luxury Villa',
    propertyType: 'Under Construction',
    location: 'Ernakulam / Kochi',
    consultationMethod: 'Site Visit / On-Premise',
    message: '',
    website_trap_field: '', // Honeypot field
  });

  const [selectedSolutions, setSelectedSolutions] = useState<string[]>(
    initialSolution ? [initialSolution] : ['Automated Gate Systems', 'CCTV Surveillance']
  );

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const toggleSolution = (title: string) => {
    setSelectedSolutions(prev =>
      prev.includes(title) ? prev.filter(s => s !== title) : [...prev, title]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Basic client validation
    if (!formData.name.trim()) {
      setErrorMessage('Please provide your name.');
      return;
    }
    if (!formData.phone.trim() && !formData.email.trim()) {
      setErrorMessage('Please provide either your phone number or email.');
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch('/api/contact.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          solutions: selectedSolutions
        })
      });

      const result = await response.json().catch(() => null);

      if (response.ok && result?.success) {
        setSubmitted(true);
      } else {
        // Fallback or server error
        setErrorMessage(
          result?.error || 'Unable to submit enquiry right now. You can reach us instantly via WhatsApp at +91 9061196096.'
        );
      }
    } catch (err) {
      setErrorMessage(
        'Connection delay detected. You can also contact our engineering team directly via WhatsApp at +91 9061196096.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className={`bg-brand-surface border border-emerald-500/50 rounded-3xl p-8 sm:p-12 text-center shadow-2xl ${className}`}>
        <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto mb-5">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Thank You, {formData.name}!</h3>
        <p className="text-sm text-slate-300 max-w-md mx-auto mb-6">
          Your consultation request has been received. Our smart-living engineers will review your project details and reach out within 24 hours.
        </p>
        <a
          href={`https://wa.me/919061196096?text=${encodeURIComponent(
            `Hi MAXDAX, I just submitted an inquiry for my ${formData.projectType} in ${formData.location}. My name is ${formData.name}.`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-lg transition-all"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Connect via WhatsApp Now</span>
        </a>
      </div>
    );
  }

  return (
    <div className={`bg-brand-surface border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl ${className}`}>
      <div className="mb-6">
        <span className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400 block mb-1">
          Direct Lead Capture
        </span>
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
          Book an Engineering Consultation
        </h3>
        <p className="text-xs sm:text-sm text-slate-400">
          Get expert guidance on gate automation, CCTV, lighting, and whole-villa smart systems tailored to your floor plan.
        </p>
      </div>

      {errorMessage && (
        <div className="mb-6 p-4 rounded-xl bg-rose-950/80 border border-rose-800 text-rose-200 text-xs flex items-center gap-3">
          <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Anti-spam Honeypot */}
        <div className="hidden" aria-hidden="true">
          <input
            type="text"
            name="website_trap_field"
            value={formData.website_trap_field}
            onChange={e => setFormData({ ...formData, website_trap_field: e.target.value })}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        {/* Name and Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Full Name <span className="text-rose-400">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Alex Mathew"
              value={formData.name}
              onChange={e => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Phone / WhatsApp Number <span className="text-rose-400">*</span>
            </label>
            <input
              type="tel"
              required
              placeholder="+91 98765 43210"
              value={formData.phone}
              onChange={e => setFormData({ ...formData, phone: e.target.value })}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
            />
          </div>
        </div>

        {/* Email and Location */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Email Address
            </label>
            <input
              type="email"
              placeholder="alex@example.com"
              value={formData.email}
              onChange={e => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              City / Location in Kerala
            </label>
            <input
              type="text"
              placeholder="e.g. Kalamassery / Kochi"
              value={formData.location}
              onChange={e => setFormData({ ...formData, location: e.target.value })}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
            />
          </div>
        </div>

        {/* Project & Property Stage */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Project Type
            </label>
            <select
              value={formData.projectType}
              onChange={e => setFormData({ ...formData, projectType: e.target.value })}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-sky-500 transition-colors"
            >
              <option value="Luxury Villa">Luxury Villa</option>
              <option value="Apartment / Penthouse">Apartment / Penthouse</option>
              <option value="Commercial Office">Commercial Office</option>
              <option value="Retail / Hospitality">Retail / Hospitality</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Property Status
            </label>
            <select
              value={formData.propertyType}
              onChange={e => setFormData({ ...formData, propertyType: e.target.value })}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-sky-500 transition-colors"
            >
              <option value="Under Construction (Civil / Brickwork)">Under Construction (Civil / Brickwork)</option>
              <option value="Electrical Conduits Stage">Electrical Conduits Stage</option>
              <option value="Interior Plastering & Ceiling">Interior Plastering & Ceiling</option>
              <option value="Existing Home Retrofit">Existing Home Retrofit</option>
            </select>
          </div>
        </div>

        {/* Interested Solutions Checkbox Grid */}
        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-2">
            Select Interested Technology Domains:
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {[
              'Automated Gate Systems',
              'CCTV Surveillance',
              'Video Door Phone',
              'Smart Lighting & Dimming',
              'Motorized Curtains & Blinds',
              'Smart Garden Irrigation',
              'Biometric Digital Locks',
              'Enterprise Wi-Fi 6',
              'Multi-Room Audio'
            ].map(sol => (
              <button
                key={sol}
                type="button"
                onClick={() => toggleSolution(sol)}
                className={`p-2 rounded-xl text-left text-xs font-medium border transition-all ${
                  selectedSolutions.includes(sol)
                    ? 'bg-sky-950/80 border-sky-500 text-sky-300'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span
                    className={`w-3.5 h-3.5 rounded flex items-center justify-center text-[10px] border ${
                      selectedSolutions.includes(sol)
                        ? 'bg-sky-500 border-sky-400 text-slate-950 font-bold'
                        : 'border-slate-700'
                    }`}
                  >
                    {selectedSolutions.includes(sol) ? '✓' : ''}
                  </span>
                  <span className="truncate">{sol}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5">
            Project Notes / Specific Inquiries
          </label>
          <textarea
            rows={3}
            placeholder="Tell us about your property square footage, gates, or specific timelines..."
            value={formData.message}
            onChange={e => setFormData({ ...formData, message: e.target.value })}
            className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={submitting}
          className="w-full flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm py-4 rounded-xl shadow-xl shadow-sky-600/30 transition-all hover:scale-[1.01] active:scale-95 disabled:opacity-60"
        >
          {submitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Transmitting Consultation Request...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Submit Consultation Request</span>
            </>
          )}
        </button>

        <p className="text-[11px] text-slate-500 text-center">
          We protect your privacy. Your contact details will only be used by MAXDAX engineers to evaluate your project.
        </p>
      </form>
    </div>
  );
};
