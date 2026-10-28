import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Search, ArrowRight, Check } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { solutionsData } from '../data/solutionsData';

export const SolutionsIndexPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All 26 Solutions' },
    { id: 'access', label: 'Gate & Access Automation' },
    { id: 'security', label: 'CCTV & Perimeter Security' },
    { id: 'automation', label: 'Smart Home & Lighting' },
    { id: 'landscape', label: 'Smart Irrigation' },
    { id: 'networking', label: 'Wi-Fi & AirFiber' },
    { id: 'audio', label: 'Home Audio & Theatres' },
    { id: 'commercial', label: 'Commercial' }
  ];

  const filteredSolutions = solutionsData.filter(sol => {
    const matchesCategory = selectedCategory === 'all' || sol.category === selectedCategory;
    const matchesSearch =
      sol.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sol.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sol.headline.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <SEO
        title="Complete Solutions Architecture (26 Categories) | MAXDAX"
        description="Explore the complete spectrum of premium smart home automation, high-torque gate systems, 4K CCTV, video door intercoms, smart irrigation, and networking solutions."
        canonical="https://maxdax.in/solutions"
      />

      <div className="pt-28 pb-20 bg-brand-dark min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400 block mb-2">
              Engineering Catalog
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">
              All 26 Smart Automation Solutions
            </h1>
            <p className="text-sm sm:text-base text-slate-300">
              Discover certified turnkey systems for luxury residential villas, penthouses, and commercial facilities across Kerala.
            </p>
          </div>

          {/* Search & Category Filter Toolbar */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-800">
            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-sky-600 border-sky-500 text-white shadow-md'
                      : 'bg-brand-surface border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Search Box */}
            <div className="relative w-full lg:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search solutions..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
              />
            </div>
          </div>

          {/* Solutions Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSolutions.map(sol => (
              <div
                key={sol.id}
                className="group bg-brand-surface border border-slate-800 hover:border-sky-500/60 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
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

                  <div className="p-5">
                    <h2 className="text-lg font-bold text-white group-hover:text-sky-400 transition-colors mb-2">
                      {sol.title}
                    </h2>
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
                    <span>View Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  {sol.interactiveDemoId && (
                    <span className="text-[10px] text-amber-400 font-mono bg-amber-950/50 px-2 py-0.5 rounded border border-amber-800/40">
                      Interactive Demo
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {filteredSolutions.length === 0 && (
            <div className="text-center py-20 bg-brand-surface rounded-2xl border border-slate-800">
              <p className="text-slate-400 text-sm">No solutions matched your search keyword.</p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className="mt-4 px-4 py-2 rounded-xl bg-sky-600 text-white text-xs font-bold"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
