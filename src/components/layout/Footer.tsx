import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ShieldCheck, ArrowRight, Heart, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-sm mt-auto">
      {/* Upper Strategic Newsletter / Booking Strip */}
      <div className="border-b border-slate-900 bg-brand-surface/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="bg-gradient-to-r from-sky-950/70 via-brand-card to-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 shadow-2xl">
            <div className="max-w-xl">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400 block mb-2">
                Consultation & Site Assessment
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Ready to elevate your villa with intelligent automation?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Book an engineering consultation with our smart-living architects in Kalamassery, Ernakulam. We design, wire, and commission turnkey smart solutions.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                to="/contact"
                className="px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs sm:text-sm shadow-xl shadow-sky-600/30 transition-all hover:scale-105 active:scale-95"
              >
                Schedule Site Visit
              </Link>
              <a
                href="https://wa.me/919061196096"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-semibold text-xs sm:text-sm transition-all"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info & Address */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block">
              <img
                src="/assets/images/MXW.png"
                alt="MAXDAX Logo"
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              MAXDAX PRIVATE LIMITED is Kerala’s premier residential and commercial technology contractor, delivering high-performance automated gates, intelligent perimeter CCTV, video intercoms, smart irrigation, and architectural home automation.
            </p>

            <div className="space-y-2.5 pt-2 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>Muttam, Kalamassery, Ernakulam, Kerala, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <a href="tel:+919061196096" className="hover:text-white transition-colors">
                  +91 9061196096
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a href="mailto:info@maxdax.in" className="hover:text-white transition-colors">
                  info@maxdax.in
                </a>
              </div>
            </div>
          </div>

          {/* Solutions Column 1 */}
          <div>
            <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-white mb-4">
              Perimeter & Security
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/solutions/gate-automation" className="hover:text-sky-400 transition-colors">
                  Automated Gate Systems
                </Link>
              </li>
              <li>
                <Link to="/solutions/cctv-surveillance" className="hover:text-sky-400 transition-colors">
                  CCTV & Perimeter Surveillance
                </Link>
              </li>
              <li>
                <Link to="/solutions/video-door-phone" className="hover:text-sky-400 transition-colors">
                  Video Door Phone (VDP)
                </Link>
              </li>
              <li>
                <Link to="/solutions/digital-locks" className="hover:text-sky-400 transition-colors">
                  Biometric Digital Door Locks
                </Link>
              </li>
              <li>
                <Link to="/solutions/shutter-automation" className="hover:text-sky-400 transition-colors">
                  Motorized Rolling Shutters
                </Link>
              </li>
              <li>
                <Link to="/solutions/intrusion-detection-security" className="hover:text-sky-400 transition-colors">
                  Intrusion Alarm Systems
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions Column 2 */}
          <div>
            <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-white mb-4">
              Smart Living & Audio
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/solutions/smart-home-automation" className="hover:text-sky-400 transition-colors">
                  Smart Home Automation
                </Link>
              </li>
              <li>
                <Link to="/solutions/smart-lighting" className="hover:text-sky-400 transition-colors">
                  Smart Architectural Lighting
                </Link>
              </li>
              <li>
                <Link to="/solutions/curtain-automation" className="hover:text-sky-400 transition-colors">
                  Motorized Curtains & Drapes
                </Link>
              </li>
              <li>
                <Link to="/solutions/blind-automation" className="hover:text-sky-400 transition-colors">
                  Motorized Window Blinds
                </Link>
              </li>
              <li>
                <Link to="/solutions/smart-irrigation" className="hover:text-sky-400 transition-colors">
                  Smart Landscape Irrigation
                </Link>
              </li>
              <li>
                <Link to="/solutions/wifi-solutions" className="hover:text-sky-400 transition-colors">
                  Enterprise Gigabit Wi-Fi 6
                </Link>
              </li>
              <li>
                <Link to="/solutions/home-audio" className="hover:text-sky-400 transition-colors">
                  Multi-Room Audio Distribution
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick & Legal Links */}
          <div>
            <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-white mb-4">
              Company & Support
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/experience-centre" className="hover:text-sky-400 transition-colors">
                  Interactive Demonstrations
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-sky-400 transition-colors">
                  Completed Projects
                </Link>
              </li>
              <li>
                <Link to="/brands" className="hover:text-sky-400 transition-colors">
                  Verified Partner Brands
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-sky-400 transition-colors">
                  About MAXDAX Team
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-sky-400 hover:underline font-semibold flex items-center gap-1">
                  <span>Careers at MAXDAX</span>
                </Link>
              </li>
              <li>
                <Link to="/service-support" className="text-amber-400 hover:underline font-bold">
                  Support & Service Tickets
                </Link>
              </li>
              <li>
                <a
                  href="https://forms.gle/G6an7JSj5WSf17mcA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-300 hover:underline flex items-center gap-1"
                >
                  <span>Google Complaint Form</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-sky-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-and-conditions" className="hover:text-sky-400 transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Strip */}
        <div className="pt-10 mt-10 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} MAXDAX PRIVATE LIMITED. All Rights Reserved. Kalamassery, Kerala.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[11px] text-slate-400">
              High-Precision Smart Living & Security Engineering
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
