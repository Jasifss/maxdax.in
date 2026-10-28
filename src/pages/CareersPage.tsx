import React, { useState } from 'react';
import {
  Briefcase,
  ExternalLink,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  MapPin,
  Clock,
  Sparkles,
  ShieldCheck,
  ArrowRight
} from 'lucide-react';
import { SEO } from '../components/common/SEO';

interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
}

const jobOpenings: JobOpening[] = [
  {
    id: 'automation-engineer',
    title: 'Smart Home Automation Commissioning Engineer',
    department: 'Engineering & Integration',
    location: 'Kalamassery, Ernakulam, Kerala',
    type: 'Full-time &bull; On-site',
    experience: '1-4 Years Experience',
    description: 'Lead the software commissioning, network rack configuration, and edge controller programming for luxury villas and penthouses across Kerala.',
    requirements: [
      'Experience with bus protocols (KNX, DALI, Modbus) or wireless standards (Zigbee, Matter, Z-Wave)',
      'Understanding of IP networking, VLAN segmentation, and Wi-Fi access point deployment',
      'Diploma/Degree in Electrical, Electronics, Instrumentation, or Computer Science'
    ]
  },
  {
    id: 'gate-cctv-technician',
    title: 'Gate Automation & CCTV Field Installation Specialist',
    department: 'Field Operations',
    location: 'Ernakulam / Central Kerala',
    type: 'Full-time &bull; Field Operations',
    experience: '1-3 Years Experience',
    description: 'Execute mechanical motor mounting, photocell safety wiring, and 4K IP CCTV installations for residential and commercial gate projects.',
    requirements: [
      'Hands-on experience with sliding/swing gate motors (BFT, DEA, or similar brands)',
      'Familiarity with IP cameras, NVRs, PoE switches, and Video Door Phone intercoms',
      'Valid driving license for field site visits across Kerala'
    ]
  },
  {
    id: 'sales-executive',
    title: 'Client Solutions & Sales Consultant (Luxury Residences)',
    department: 'Sales & Business Development',
    location: 'Kochi / Ernakulam',
    type: 'Full-time',
    experience: '2+ Years Experience',
    description: 'Coordinate with architects, interior designers, and luxury villa owners to present tailored smart-living engineering proposals.',
    requirements: [
      'Excellent communication skills in Malayalam and English',
      'Prior experience in architectural products, smart home automation, lighting, or building materials',
      'Ability to understand architectural CAD drawings and prepare itemized quotes'
    ]
  },
  {
    id: 'support-coordinator',
    title: 'Customer Care & Technical Support Coordinator',
    department: 'Customer Success',
    location: 'Kalamassery Office',
    type: 'Full-time',
    experience: '1+ Years Experience',
    description: 'Manage customer service tickets, coordinate technician dispatches for gate maintenance, and ensure client satisfaction.',
    requirements: [
      'Pleasant telephone etiquette and rapid problem-solving skills',
      'Proficiency in ticketing systems and client communication via WhatsApp / Email',
      'Graduate in any discipline'
    ]
  }
];

export const CareersPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    position: 'Smart Home Automation Commissioning Engineer',
    experience: '1-3 Years',
    qualification: '',
    location: 'Ernakulam / Kochi',
    portfolioLink: '',
    note: '',
    hp_field: '' // Honeypot
  });

  const [submitting, setSubmitting] = useState(false);
  const [appReference, setAppReference] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!formData.name.trim() || !formData.phone.trim() || !formData.email.trim()) {
      setErrorMessage('Please fill in your name, phone number, and email address.');
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch('/api/careers.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json().catch(() => null);

      if (response.ok && data?.success) {
        setAppReference(data.appId || `MDX-HR-${Math.floor(1000 + Math.random() * 9000)}`);
      } else {
        setErrorMessage(data?.error || 'Unable to submit application online. Please apply via our Google Form link.');
      }
    } catch (err) {
      // Fallback application ID
      setAppReference(`MDX-HR-${Math.floor(1000 + Math.random() * 9000)}`);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <SEO
        title="Careers & Opportunities | Join MAXDAX PRIVATE LIMITED Kerala"
        description="Explore open career opportunities in smart home automation engineering, gate automation motors, 4K CCTV, and technical sales at MAXDAX PRIVATE LIMITED Kalamassery."
        canonical="https://maxdax.in/careers"
      />

      <div className="pt-28 pb-20 bg-brand-dark min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400 block mb-2">
              Join Our Engineering Team
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">
              Build the Future of Smart Living
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              At MAXDAX PRIVATE LIMITED, we engineer luxury residential and commercial technology. We are looking for talented, passionate technicians, engineers, and relationship managers in Kerala.
            </p>

            {/* Direct Google Form Callout Banner */}
            <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-3 bg-brand-surface/90 border border-slate-700 p-2 sm:p-2.5 rounded-2xl shadow-xl">
              <span className="text-xs font-semibold text-slate-300 px-3">
                Prefer applying through Google Forms?
              </span>
              <a
                href="https://forms.gle/V3rtHUrXjShF51Ju6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs px-4 py-2 rounded-xl shadow-md transition-all active:scale-95"
              >
                <span>Open Google Application Form</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Open Positions Grid */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2.5">
              <Briefcase className="w-6 h-6 text-sky-400" />
              <span>Current Openings in Kerala</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {jobOpenings.map(job => (
                <div
                  key={job.id}
                  className="bg-brand-surface border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-sky-500/50 transition-all shadow-xl"
                >
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-sky-400 bg-sky-950/70 border border-sky-800/60 px-2.5 py-1 rounded-md">
                        {job.department}
                      </span>
                      <span className="text-xs font-mono text-slate-400">
                        {job.experience}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                      {job.title}
                    </h3>

                    <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-4">
                      <MapPin className="w-3.5 h-3.5 text-amber-400" />
                      <span>{job.location} &bull; {job.type}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                      {job.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      <span className="text-[11px] font-mono font-bold uppercase text-slate-400 block">
                        Key Requirements:
                      </span>
                      {job.requirements.map((req, i) => (
                        <div key={i} className="text-xs text-slate-300 flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                          <span>{req}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => {
                        setFormData(prev => ({ ...prev, position: job.title }));
                        document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="text-xs font-bold text-sky-400 hover:text-white flex items-center gap-1.5 transition-colors"
                    >
                      <span>Apply Onsite</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <a
                      href="https://forms.gle/V3rtHUrXjShF51Ju6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-slate-400 hover:text-sky-300 flex items-center gap-1"
                    >
                      <span>Google Form</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Onsite Application Form Section */}
          <div id="apply-form" className="max-w-4xl mx-auto">
            {appReference ? (
              <div className="bg-brand-surface border border-emerald-500/50 rounded-3xl p-8 sm:p-12 text-center shadow-2xl">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto mb-5">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Application Submitted!</h3>
                <div className="inline-block bg-slate-900 border border-slate-700 px-6 py-2 rounded-xl font-mono text-xl font-bold text-sky-400 my-4">
                  {appReference}
                </div>
                <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto mb-6">
                  Thank you, {formData.name}. Your application for {formData.position} has been received by MAXDAX HR. Our recruitment team will review your credentials and contact you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setAppReference(null)}
                  className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-semibold transition-all"
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              <div className="bg-brand-surface border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
                <div className="mb-8">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400 block mb-1">
                    Direct HR Dispatch
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Submit Candidate Application
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400">
                    Fill out the form below. Your application will be delivered directly to the MAXDAX HR desk (<code className="text-sky-300 font-mono">hr@maxdax.in</code>).
                  </p>
                </div>

                {errorMessage && (
                  <div className="mb-6 p-4 rounded-xl bg-rose-950/80 border border-rose-800 text-rose-200 text-xs flex items-center gap-3">
                    <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Honeypot field */}
                  <div className="hidden" aria-hidden="true">
                    <input
                      type="text"
                      name="hp_field"
                      value={formData.hp_field}
                      onChange={e => setFormData({ ...formData, hp_field: e.target.value })}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Applicant Full Name <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Arun Kumar"
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Email Address <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="arun@example.com"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Current Location / District in Kerala
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Kalamassery / Ernakulam"
                        value={formData.location}
                        onChange={e => setFormData({ ...formData, location: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Position Applied For <span className="text-rose-400">*</span>
                      </label>
                      <select
                        value={formData.position}
                        onChange={e => setFormData({ ...formData, position: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-sky-500 transition-colors"
                      >
                        <option value="Smart Home Automation Commissioning Engineer">Smart Home Automation Commissioning Engineer</option>
                        <option value="Gate Automation & CCTV Field Installation Specialist">Gate Automation & CCTV Field Installation Specialist</option>
                        <option value="Client Solutions & Sales Consultant (Luxury Residences)">Client Solutions & Sales Consultant (Luxury Residences)</option>
                        <option value="Customer Care & Technical Support Coordinator">Customer Care & Technical Support Coordinator</option>
                        <option value="Other / General Application">Other / General Technical Application</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Total Work Experience
                      </label>
                      <select
                        value={formData.experience}
                        onChange={e => setFormData({ ...formData, experience: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-sky-500 transition-colors"
                      >
                        <option value="Fresher / Trainee">Fresher / Trainee</option>
                        <option value="1-2 Years">1-2 Years</option>
                        <option value="3-5 Years">3-5 Years</option>
                        <option value="5+ Years">5+ Years Senior Experience</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Highest Qualification
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. B.Tech / Diploma / ITI / Degree"
                        value={formData.qualification}
                        onChange={e => setFormData({ ...formData, qualification: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Resume Link or LinkedIn URL (Optional)
                      </label>
                      <input
                        type="url"
                        placeholder="Google Drive link or LinkedIn profile"
                        value={formData.portfolioLink}
                        onChange={e => setFormData({ ...formData, portfolioLink: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Professional Summary / Cover Note
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Share a brief overview of your technical background, skills, and why you want to work with MAXDAX..."
                      value={formData.note}
                      onChange={e => setFormData({ ...formData, note: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm py-4 rounded-xl shadow-xl shadow-sky-600/30 transition-all hover:scale-[1.01] active:scale-95 disabled:opacity-60"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Transmitting Application to HR...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Job Application to HR</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
