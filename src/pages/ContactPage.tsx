import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, ShieldCheck } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { ConsultationForm } from '../components/common/ConsultationForm';

export const ContactPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Contact MAXDAX | Consultation & Site Visits Kalamassery Kerala"
        description="Get in touch with MAXDAX PRIVATE LIMITED for smart home automation, automated gates, 4K CCTV, and security consulting in Kalamassery, Kochi, and Ernakulam."
        canonical="https://maxdax.in/contact"
      />

      <div className="pt-28 pb-20 bg-brand-dark min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400 block mb-2">
              Get in Touch
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">
              Schedule Your Engineering Consultation
            </h1>
            <p className="text-sm sm:text-base text-slate-300">
              Whether you are planning a new villa build or retrofitting automated gates, our smart-living specialists are ready to assist.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Details Column */}
            <div className="space-y-6">
              <div className="bg-brand-surface border border-slate-800 rounded-2xl p-6 sm:p-8">
                <h3 className="text-lg font-bold text-white mb-6">Corporate Office</h3>

                <div className="space-y-5 text-xs sm:text-sm text-slate-300">
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Address</div>
                      <div className="text-slate-400 mt-0.5">
                        MAXDAX PRIVATE LIMITED<br />
                        Muttam, Kalamassery, Ernakulam, Kerala 683104
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Phone Support</div>
                      <a href="tel:+919061196096" className="text-sky-400 hover:underline block mt-0.5">
                        +91 9061196096
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Email Inquiries</div>
                      <a href="mailto:info@maxdax.in" className="text-sky-400 hover:underline block mt-0.5">
                        info@maxdax.in
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Working Hours</div>
                      <div className="text-slate-400 mt-0.5">
                        Monday &ndash; Saturday: 9:00 AM &ndash; 7:00 PM<br />
                        Emergency support on-call for active tickets
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-800">
                  <a
                    href="https://wa.me/919061196096"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm py-3.5 rounded-xl shadow-lg shadow-emerald-600/20 transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Instant WhatsApp Chat</span>
                  </a>
                </div>
              </div>

              {/* Service Areas */}
              <div className="bg-brand-surface border border-slate-800 rounded-2xl p-6 text-xs text-slate-300">
                <div className="text-white font-bold mb-2">Primary Service Regions:</div>
                <p className="text-slate-400 leading-relaxed">
                  Kochi &bull; Kalamassery &bull; Kakkanad &bull; Aluva &bull; Marine Drive &bull; Thrissur &bull; Kottayam &bull; Kozhikode &bull; All Kerala Distrcits.
                </p>
              </div>
            </div>

            {/* Main Consultation Form */}
            <div className="lg:col-span-2">
              <ConsultationForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
