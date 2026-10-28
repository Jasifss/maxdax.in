import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Calendar, Check, Layers } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { projectsData } from '../data/projectsData';

export const ProjectsPage: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');

  const filteredProjects = projectsData.filter(
    p => filter === 'all' || p.category.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <SEO
        title="Completed Projects & Case Studies | MAXDAX Smart Solutions"
        description="Explore our realized smart home automation, automated gate installations, and security engineering across luxury villas and penthouses in Kerala."
        canonical="https://maxdax.in/projects"
      />

      <div className="pt-28 pb-20 bg-brand-dark min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400 block mb-2">
              Portfolio & Engineering Case Studies
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">
              Realized Installations
            </h1>
            <p className="text-sm sm:text-base text-slate-300">
              A curated selection of private residential villas, penthouses, and executive suites engineered and commissioned by MAXDAX PRIVATE LIMITED.
            </p>
          </div>

          {/* Filter Toolbar */}
          <div className="flex items-center justify-center gap-2 mb-10 pb-4">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'villa', label: 'Luxury Villas' },
              { id: 'penthouse', label: 'Penthouses' },
              { id: 'commercial', label: 'Commercial' }
            ].map(tab => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setFilter(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${
                  filter === tab.id
                    ? 'bg-sky-600 border-sky-500 text-white shadow-md'
                    : 'bg-brand-surface border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map(proj => (
              <div
                key={proj.id}
                className="bg-brand-surface border border-slate-800 rounded-3xl overflow-hidden shadow-2xl group flex flex-col justify-between hover:border-sky-500/50 transition-all duration-300"
              >
                <div>
                  <div className="relative h-72 sm:h-80 overflow-hidden">
                    <img
                      src={proj.coverImage}
                      alt={proj.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-surface via-transparent to-transparent"></div>
                    <span className="absolute top-4 left-4 bg-slate-950/85 backdrop-blur border border-slate-700 px-3 py-1 rounded-full text-xs font-mono font-bold text-sky-400">
                      {proj.category}
                    </span>
                    <span className="absolute top-4 right-4 bg-slate-950/85 backdrop-blur border border-slate-700 px-3 py-1 rounded-full text-xs font-mono text-slate-300">
                      Completed {proj.completionYear}
                    </span>
                  </div>

                  <div className="p-6 sm:p-8">
                    <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-2">
                      <MapPin className="w-3.5 h-3.5 text-sky-400" />
                      <span>{proj.location}</span>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-bold text-white group-hover:text-sky-400 transition-colors mb-3">
                      {proj.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                      {proj.scopeSummary}
                    </p>

                    <div className="mb-6">
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 block mb-2">
                        Subsystems Installed:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {proj.solutionsInstalled.map((sol, i) => (
                          <span
                            key={i}
                            className="text-[11px] px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300"
                          >
                            {sol}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                  <Link
                    to={`/projects/${proj.slug}`}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-sky-400 hover:text-white transition-colors"
                  >
                    <span>Read Full Engineering Breakdown</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
