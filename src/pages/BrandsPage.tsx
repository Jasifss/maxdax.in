import React from 'react';
import { ShieldCheck, ExternalLink, ArrowRight } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { brandsData } from '../data/brandsData';
import { Link } from 'react-router-dom';

export const BrandsPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Certified Global Technology Partners & Hardware Brands | MAXDAX"
        description="MAXDAX partners with globally verified engineering manufacturers including BFT, DEA System, Hikvision, Dahua, Yale, and Ubiquiti UniFi for ultra-reliable automation."
        canonical="https://maxdax.in/brands"
      />

      <div className="pt-28 pb-20 bg-brand-dark min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400 block mb-2">
              Hardware Integrity & Standards
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">
              Certified Technology Partners
            </h1>
            <p className="text-sm sm:text-base text-slate-300">
              We engineer our systems exclusively with globally certified hardware manufacturers, ensuring genuine parts, manufacturer warranties, and long-term durability in Kerala weather.
            </p>
          </div>

          {/* Brands Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {brandsData.map(brand => (
              <div
                key={brand.name}
                className="bg-brand-surface border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-col justify-between hover:border-sky-500/50 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono font-bold text-sky-400 uppercase bg-sky-950/60 border border-sky-800/60 px-2 py-0.5 rounded">
                      {brand.country}
                    </span>
                    {brand.badge && (
                      <span className="text-[10px] font-mono text-emerald-400 font-bold flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3" />
                        <span>{brand.badge}</span>
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1">{brand.name}</h3>
                  <div className="text-xs font-mono text-slate-400 mb-3">{brand.category}</div>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {brand.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800 text-xs">
                  <span className="text-[11px] text-slate-400">
                    Deployed across residential & commercial projects
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Open Architecture Statement */}
          <div className="bg-brand-surface border border-slate-800 rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-3">
              Independent, Open-Architecture Integration
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl mx-auto mb-6">
              Unlike single-vendor proprietary smart systems that lock you into one ecosystem, MAXDAX engineers open-protocol architectures (Matter, Zigbee, DALI, KNX, IP). This allows your villa to seamlessly communicate across diverse premium brands with zero vendor lock-in.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-sky-600/30 transition-all"
            >
              <span>Consult an Integration Engineer</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
