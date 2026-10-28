import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Eye,
  Droplets,
  Lightbulb,
  Maximize2,
  Lock,
  Wifi,
  Music,
  ArrowRight,
  Play,
  CheckCircle2,
  Phone,
  Sparkles,
  Layers,
  Building,
  Check,
  Cpu
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { AmbientLivingJourney } from '../components/demos/AmbientLivingJourney';
import { ConsultationForm } from '../components/common/ConsultationForm';
import { solutionsData } from '../data/solutionsData';
import { projectsData } from '../data/projectsData';
import { brandsData } from '../data/brandsData';

export const HomePage: React.FC = () => {
  const coreSolutions = solutionsData.slice(0, 12);
  const featuredProjects = projectsData.slice(0, 3);

  return (
    <>
      <SEO
        title="MAXDAX | Premium Smart Living, Gate Automation & Security Solutions"
        description="Experience the intelligence of modern living with Kerala's premier smart home technology contractor. Automated gates, 4K CCTV, video door phones, and architectural lighting by MAXDAX PRIVATE LIMITED."
        canonical="https://maxdax.in/"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'HomeAndConstructionBusiness',
          name: 'MAXDAX PRIVATE LIMITED',
          alternateName: 'MAXDAX Smart Solutions',
          url: 'https://maxdax.in',
          logo: 'https://maxdax.in/assets/images/MXW.png',
          telephone: '+919061196096',
          email: 'info@maxdax.in',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Muttam',
            addressLocality: 'Kalamassery',
            addressRegion: 'Kerala',
            postalCode: '683104',
            addressCountry: 'IN'
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: '10.0543',
            longitude: '76.3262'
          },
          priceRange: '₹₹₹₹'
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-20 pb-16">
        {/* Cinematic Backdrop Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85"
            alt="MAXDAX Luxury Architecture"
            className="w-full h-full object-cover brightness-[0.45] contrast-[1.1] scale-105 transition-transform duration-10000 hover:scale-100"
          />
          {/* Subtle Ambient Radial Glows */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/60 to-transparent"></div>
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-sky-500/10 blur-[120px] rounded-full pointer-events-none"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/80 backdrop-blur-md mb-6 shadow-xl animate-in fade-in duration-700">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            <span className="text-xs sm:text-sm font-mono font-semibold tracking-wide text-slate-200">
              SMART LIVING &bull; GATE AUTOMATION &bull; SURVEILLANCE
            </span>
          </div>

          {/* Master Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 max-w-5xl mx-auto leading-[1.15]">
            Experience the <span className="bg-gradient-to-r from-sky-400 via-sky-200 to-amber-200 bg-clip-text text-transparent">Intelligence</span> of Modern Living
          </h1>

          {/* Supporting Statement */}
          <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
            Custom smart home automation, high-torque automated gates, perimeter security, and integrated technology engineered with precision around the way you live.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md sm:max-w-none mx-auto">
            <Link
              to="/experience-centre"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm sm:text-base shadow-xl shadow-sky-600/30 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-5 h-5" />
              <span>Explore Interactive Demos</span>
            </Link>

            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-slate-500 text-white font-semibold text-sm sm:text-base backdrop-blur transition-all flex items-center justify-center gap-2"
            >
              <span>Book Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="https://wa.me/919061196096"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-4 rounded-xl bg-emerald-600/90 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base shadow-lg shadow-emerald-600/20 transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto pt-10 border-t border-slate-800/80 text-left">
            <div className="p-3">
              <div className="text-2xl sm:text-3xl font-extrabold text-sky-400 font-mono">100%</div>
              <div className="text-xs text-slate-400 mt-1">Local Edge Processing (Works without cloud)</div>
            </div>
            <div className="p-3">
              <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono">24/7</div>
              <div className="text-xs text-slate-400 mt-1">Perimeter Monitoring & Backup Systems</div>
            </div>
            <div className="p-3">
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">26+</div>
              <div className="text-xs text-slate-400 mt-1">Engineered Automation Solutions</div>
            </div>
            <div className="p-3">
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">Turnkey</div>
              <div className="text-xs text-slate-400 mt-1">Conduit, Hardware & Commissioning</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: eGlu-Style Ambient Living Journey */}
      <section className="py-20 bg-brand-dark relative border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400 block mb-2">
              Interactive Smart Living Experience
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight">
              One Touch Transforms Your Home
            </h2>
            <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
              Experience seamless scene orchestration. Tap modes on the virtual smartphone controller to witness how lights dim, motorized blinds adjust, and automated gates slide effortlessly.
            </p>
          </div>

          {/* Master Ambient Living Journey Component */}
          <AmbientLivingJourney />
        </div>
      </section>

      {/* Section 3: Core Technology Solutions Grid */}
      <section className="py-20 bg-brand-surface/40 border-y border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400 block mb-2">
                Engineering Capabilities
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Comprehensive Smart Solutions
              </h2>
            </div>
            <Link
              to="/solutions"
              className="text-sm font-bold text-sky-400 hover:text-sky-300 flex items-center gap-1.5 transition-colors"
            >
              <span>Explore All 26 Categories</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Solutions 3x4 Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreSolutions.map(sol => (
              <div
                key={sol.id}
                className="group bg-brand-surface border border-slate-800 hover:border-sky-500/60 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  {/* Image Card Header */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={sol.heroImage}
                      alt={sol.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-surface via-transparent to-transparent"></div>
                    <span className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur border border-slate-700 text-[10px] font-mono font-bold text-sky-300 px-2.5 py-1 rounded-md uppercase">
                      {sol.categoryLabel}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-white group-hover:text-sky-400 transition-colors mb-2">
                      {sol.title}
                    </h3>
                    <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed mb-4">
                      {sol.description}
                    </p>

                    <ul className="space-y-1.5 mb-4">
                      {sol.features.slice(0, 2).map((f, i) => (
                        <li key={i} className="text-[11px] text-slate-300 flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold">
                  <Link
                    to={`/solutions/${sol.slug}`}
                    className="text-sky-400 group-hover:text-white flex items-center gap-1 transition-colors"
                  >
                    <span>Technical Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  {sol.interactiveDemoId && (
                    <span className="text-[10px] text-amber-400 font-mono bg-amber-950/50 px-2 py-0.5 rounded border border-amber-800/40">
                      Live Demo Available
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Dedicated Interactive Hardware Simulators Spotlight */}
      <section className="py-20 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-brand-surface via-slate-900 to-brand-dark border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-3xl mb-10">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 block mb-2">
                Hardware Demonstration Portals
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                Interactive Engineering Simulators
              </h2>
              <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
                Every MAXDAX automation discipline is backed by live interactive simulations. Test motorized gate mechanics, 4-camera CCTV surveillance walls, video intercom door release, and precision landscape irrigation inside their respective technical portals.
              </p>
            </div>

            {/* Quick Portal Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <Link
                to="/solutions/gate-automation"
                className="group p-5 rounded-2xl bg-brand-card/70 border border-slate-800 hover:border-sky-500/60 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded-xl bg-sky-950/80 border border-sky-800/60 flex items-center justify-center text-sky-400 mb-4 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="text-[10px] font-mono text-amber-400 uppercase font-bold mb-1">Live Simulator</div>
                <h3 className="text-base font-bold text-white group-hover:text-sky-300 transition-colors mb-2">
                  Gate Automation
                </h3>
                <p className="text-xs text-slate-400 line-clamp-2 mb-4">
                  Test sliding gate motor torque, obstacle infrared safety beam, and car transit sequencing.
                </p>
                <div className="text-xs font-semibold text-sky-400 flex items-center gap-1">
                  <span>Launch Simulator</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>

              <Link
                to="/solutions/cctv-surveillance"
                className="group p-5 rounded-2xl bg-brand-card/70 border border-slate-800 hover:border-sky-500/60 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-950/80 border border-indigo-800/60 flex items-center justify-center text-indigo-400 mb-4 group-hover:scale-110 transition-transform">
                  <Eye className="w-5 h-5" />
                </div>
                <div className="text-[10px] font-mono text-amber-400 uppercase font-bold mb-1">Live Simulator</div>
                <h3 className="text-base font-bold text-white group-hover:text-sky-300 transition-colors mb-2">
                  4K Surveillance Wall
                </h3>
                <p className="text-xs text-slate-400 line-clamp-2 mb-4">
                  Inspect the 4-channel live matrix with Day/Night vision switching and simulated perimeter tripwire alert.
                </p>
                <div className="text-xs font-semibold text-sky-400 flex items-center gap-1">
                  <span>Launch Simulator</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>

              <Link
                to="/solutions/video-door-phone-intercom"
                className="group p-5 rounded-2xl bg-brand-card/70 border border-slate-800 hover:border-sky-500/60 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-950/80 border border-emerald-800/60 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="text-[10px] font-mono text-amber-400 uppercase font-bold mb-1">Live Simulator</div>
                <h3 className="text-base font-bold text-white group-hover:text-sky-300 transition-colors mb-2">
                  Video Door Phone
                </h3>
                <p className="text-xs text-slate-400 line-clamp-2 mb-4">
                  Simulate visitor doorbell press, two-way audio answering, and one-tap digital magnetic lock release.
                </p>
                <div className="text-xs font-semibold text-sky-400 flex items-center gap-1">
                  <span>Launch Simulator</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>

              <Link
                to="/solutions/smart-irrigation-mist"
                className="group p-5 rounded-2xl bg-brand-card/70 border border-slate-800 hover:border-sky-500/60 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded-xl bg-teal-950/80 border border-teal-800/60 flex items-center justify-center text-teal-400 mb-4 group-hover:scale-110 transition-transform">
                  <Droplets className="w-5 h-5" />
                </div>
                <div className="text-[10px] font-mono text-amber-400 uppercase font-bold mb-1">Live Simulator</div>
                <h3 className="text-base font-bold text-white group-hover:text-sky-300 transition-colors mb-2">
                  Smart Irrigation
                </h3>
                <p className="text-xs text-slate-400 line-clamp-2 mb-4">
                  Trigger pop-up lawn spray jets, select landscape zones, and simulate automated monsoon rain delay.
                </p>
                <div className="text-xs font-semibold text-sky-400 flex items-center gap-1">
                  <span>Launch Simulator</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-800/80 text-xs">
              <span className="text-slate-400">
                Looking for Lighting, Curtains, Digital Locks, Wi-Fi or Multi-Room Entertainment?
              </span>
              <Link
                to="/experience-centre"
                className="px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold transition-all shadow-md flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Visit Complete Experience Centre</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: The MAXDAX Engineering Standard (8-Step Journey) */}
      <section className="py-20 bg-brand-surface/40 border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400 block mb-2">
              Turnkey Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              How MAXDAX Works With You
            </h2>
            <p className="text-sm sm:text-base text-slate-400">
              From initial architectural review to lifelong warranty care, our structured engineering process ensures zero rework and invisible wiring.
            </p>
          </div>

          {/* 8-Step Timeline Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Discovery & Consultation',
                desc: 'We review your architectural plans, lifestyle habits, gate dimensions, and security requirements.'
              },
              {
                step: '02',
                title: 'On-Site Technical Survey',
                desc: 'Detailed physical inspection of driveway slopes, conduit routes, Wi-Fi propagation, and DB locations.'
              },
              {
                step: '03',
                title: 'Engineering Schematics',
                desc: 'CAD wiring schematics and conduit diagrams coordinated directly with your electrical contractors.'
              },
              {
                step: '04',
                title: 'Hardware Procurement',
                desc: 'Sourcing authentic Italian gate motors (BFT/DEA), ColorVu CCTV, and European automation modules.'
              },
              {
                step: '05',
                title: 'Structured Installation',
                desc: 'Clean, labeled installation in server racks, concealed in-wall modules, and rugged outdoor enclosures.'
              },
              {
                step: '06',
                title: 'Software Commissioning',
                desc: 'Fine-tuning photocell safety, motion zones, lighting scenes, and smartphone app interfaces.'
              },
              {
                step: '07',
                title: 'Comprehensive Handover',
                desc: 'Personalized training for the entire family, backup manual release keys, and documentation.'
              },
              {
                step: '08',
                title: 'Lifetime Service Support',
                desc: 'Dedicated Kerala engineering support with our online Service Ticket portal and proactive care.'
              }
            ].map(item => (
              <div
                key={item.step}
                className="bg-brand-surface border border-slate-800 rounded-2xl p-6 relative flex flex-col justify-between hover:border-slate-700 transition-colors"
              >
                <div>
                  <div className="text-2xl font-black font-mono text-sky-500/40 mb-3">
                    {item.step}
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Featured Projects */}
      <section className="py-20 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400 block mb-2">
                Proven Track Record
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Featured Installations & Case Studies
              </h2>
            </div>
            <Link
              to="/projects"
              className="text-sm font-bold text-sky-400 hover:text-sky-300 flex items-center gap-1.5 transition-colors"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProjects.map(proj => (
              <div
                key={proj.id}
                className="bg-brand-surface border border-slate-800 rounded-2xl overflow-hidden shadow-xl group flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={proj.coverImage}
                      alt={proj.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-3 right-3 bg-slate-950/80 px-2.5 py-1 rounded text-[10px] font-mono text-sky-300 border border-slate-700">
                      {proj.category}
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="text-[11px] font-mono text-slate-400 mb-1">{proj.location}</div>
                    <h3 className="text-base font-bold text-white group-hover:text-sky-400 transition-colors mb-2">
                      {proj.title}
                    </h3>
                    <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed mb-4">
                      {proj.scopeSummary}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5">
                  <Link
                    to={`/projects/${proj.slug}`}
                    className="text-xs font-bold text-sky-400 hover:underline flex items-center gap-1"
                  >
                    <span>Read Engineering Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Verified Brands Carousel */}
      <section className="py-16 bg-brand-surface/30 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
              Certified Global Technology Partners
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {brandsData.map(brand => (
              <div
                key={brand.name}
                className="p-3 bg-slate-900/60 border border-slate-800 rounded-xl text-center flex flex-col items-center justify-center min-h-[90px] hover:border-slate-700 transition-colors"
              >
                <div className="text-xs font-bold text-white mb-0.5">{brand.name}</div>
                <div className="text-[9px] font-mono text-slate-400 uppercase">{brand.country}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: Consultation Lead Capture */}
      <section className="py-20 bg-brand-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ConsultationForm />
        </div>
      </section>
    </>
  );
};
