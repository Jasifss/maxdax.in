import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  ChevronDown,
  ShieldCheck,
  Eye,
  Droplets,
  Lightbulb,
  Maximize2,
  Lock,
  Wifi,
  Music,
  ArrowRight,
  Phone,
  Ticket
} from 'lucide-react';
import { solutionsData } from '../../data/solutionsData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setSolutionsDropdownOpen(false);
  }, [location.pathname]);

  // Featured solutions for the mega menu
  const highlightedSolutions = solutionsData.slice(0, 8);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-brand-dark/95 backdrop-blur-md border-b border-slate-800 shadow-xl py-3'
          : 'bg-gradient-to-b from-brand-dark/90 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/assets/images/MXW.png"
              alt="MAXDAX Logo"
              className="h-9 sm:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            <Link
              to="/"
              className={`text-sm font-semibold transition-colors ${
                location.pathname === '/' ? 'text-sky-400' : 'text-slate-200 hover:text-white'
              }`}
            >
              Home
            </Link>

            {/* Solutions Mega Menu Trigger */}
            <div
              className="relative"
              onMouseEnter={() => setSolutionsDropdownOpen(true)}
              onMouseLeave={() => setSolutionsDropdownOpen(false)}
            >
              <button
                type="button"
                className={`flex items-center gap-1.5 text-sm font-semibold transition-colors py-2 ${
                  location.pathname.startsWith('/solutions') ? 'text-sky-400' : 'text-slate-200 hover:text-white'
                }`}
              >
                <span>Solutions</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${solutionsDropdownOpen ? 'rotate-180 text-sky-400' : ''}`} />
              </button>

              {/* Mega Menu Dropdown */}
              {solutionsDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[680px] bg-brand-surface/98 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 shadow-2xl z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400">
                      Engineering Solutions Architecture
                    </span>
                    <Link
                      to="/solutions"
                      className="text-xs font-semibold text-slate-300 hover:text-sky-400 flex items-center gap-1"
                    >
                      <span>View All 26 Solutions</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {highlightedSolutions.map(sol => (
                      <Link
                        key={sol.id}
                        to={`/solutions/${sol.slug}`}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-900 border border-transparent hover:border-slate-800 transition-all group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 group-hover:bg-sky-500 group-hover:text-slate-950 transition-all shrink-0">
                          <ShieldCheck className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-200 group-hover:text-white">
                            {sol.title}
                          </div>
                          <div className="text-[11px] text-slate-400 line-clamp-1">
                            {sol.headline}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800 bg-brand-card/50 rounded-xl p-3 flex items-center justify-between text-xs">
                    <span className="text-slate-300">Looking for live interactive demonstrations?</span>
                    <Link
                      to="/experience-centre"
                      className="text-sky-400 font-bold hover:underline flex items-center gap-1"
                    >
                      <span>Open Interactive Explorer</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/experience-centre"
              className={`text-sm font-semibold transition-colors ${
                location.pathname === '/experience-centre' ? 'text-sky-400' : 'text-slate-200 hover:text-white'
              }`}
            >
              Interactive Hub
            </Link>

            <Link
              to="/projects"
              className={`text-sm font-semibold transition-colors ${
                location.pathname === '/projects' ? 'text-sky-400' : 'text-slate-200 hover:text-white'
              }`}
            >
              Projects
            </Link>

            <Link
              to="/brands"
              className={`text-sm font-semibold transition-colors ${
                location.pathname === '/brands' ? 'text-sky-400' : 'text-slate-200 hover:text-white'
              }`}
            >
              Partners
            </Link>

            <Link
              to="/about"
              className={`text-sm font-semibold transition-colors ${
                location.pathname === '/about' ? 'text-sky-400' : 'text-slate-200 hover:text-white'
              }`}
            >
              About
            </Link>

            <Link
              to="/careers"
              className={`text-sm font-semibold transition-colors ${
                location.pathname === '/careers' ? 'text-sky-400' : 'text-slate-200 hover:text-white'
              }`}
            >
              Careers
            </Link>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Service Ticket Portal Button (Preserved Requirement) */}
            <Link
              to="/service-support"
              className="text-xs font-semibold px-3.5 py-2 rounded-xl border border-slate-700 bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white transition-all flex items-center gap-1.5"
            >
              <Ticket className="w-3.5 h-3.5 text-amber-400" />
              <span>Service Ticket</span>
            </Link>

            {/* Book Consultation */}
            <Link
              to="/contact"
              className="text-xs sm:text-sm font-bold px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white shadow-lg shadow-sky-600/25 transition-all hover:scale-[1.02] active:scale-95"
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-brand-dark/98 backdrop-blur-2xl border-b border-slate-800 px-5 pt-4 pb-8 space-y-4 shadow-2xl animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col space-y-3">
            <Link
              to="/"
              className="text-base font-semibold text-slate-200 hover:text-sky-400 py-1"
            >
              Home
            </Link>
            <Link
              to="/solutions"
              className="text-base font-semibold text-slate-200 hover:text-sky-400 py-1"
            >
              All 26 Solutions
            </Link>
            <Link
              to="/experience-centre"
              className="text-base font-semibold text-slate-200 hover:text-sky-400 py-1"
            >
              Interactive Demonstration Hub
            </Link>
            <Link
              to="/projects"
              className="text-base font-semibold text-slate-200 hover:text-sky-400 py-1"
            >
              Portfolio & Projects
            </Link>
            <Link
              to="/brands"
              className="text-base font-semibold text-slate-200 hover:text-sky-400 py-1"
            >
              Certified Brands & Partners
            </Link>
            <Link
              to="/about"
              className="text-base font-semibold text-slate-200 hover:text-sky-400 py-1"
            >
              About MAXDAX
            </Link>
            <Link
              to="/careers"
              className="text-base font-semibold text-slate-200 hover:text-sky-400 py-1"
            >
              Careers & Opportunities
            </Link>
            <Link
              to="/contact"
              className="text-base font-semibold text-slate-200 hover:text-sky-400 py-1"
            >
              Contact Us
            </Link>
          </nav>

          <div className="pt-4 border-t border-slate-800 space-y-3">
            <Link
              to="/service-support"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-amber-500/50 bg-amber-950/40 text-amber-300 font-bold text-sm"
            >
              <Ticket className="w-4 h-4" />
              <span>Register Service Ticket</span>
            </Link>

            <Link
              to="/contact"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-sky-600 text-white font-bold text-sm shadow-lg shadow-sky-600/30"
            >
              <span>Book Site Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
