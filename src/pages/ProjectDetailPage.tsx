import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { MapPin, Calendar, ArrowRight, CheckCircle2, Quote } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { projectsData } from '../data/projectsData';
import { ConsultationForm } from '../components/common/ConsultationForm';

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const project = projectsData.find(p => p.slug === slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <>
      <SEO
        title={`${project.title} | Smart Living Engineering Case Study | MAXDAX`}
        description={project.scopeSummary}
        canonical={`https://maxdax.in/projects/${project.slug}`}
      />

      <div className="pt-24 pb-20 bg-brand-dark min-h-screen">
        {/* Project Hero */}
        <section className="relative py-14 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-6">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link to="/projects" className="hover:text-white transition-colors">Projects</Link>
              <span>/</span>
              <span className="text-sky-400 font-semibold">{project.title}</span>
            </div>

            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 rounded-md bg-sky-950/80 border border-sky-800 text-[11px] font-mono font-bold text-sky-400 uppercase tracking-wider mb-3">
                {project.category} &bull; Completed {project.completionYear}
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 leading-tight">
                {project.title}
              </h1>
              <div className="flex items-center gap-2 text-sm text-slate-300 font-mono mb-6">
                <MapPin className="w-4 h-4 text-sky-400" />
                <span>{project.location}</span>
              </div>
              <p className="text-base text-slate-300 leading-relaxed">
                {project.scopeSummary}
              </p>
            </div>
          </div>
        </section>

        {/* Gallery & Highlights */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {project.gallery.map((img, i) => (
                <div key={i} className="rounded-2xl overflow-hidden border border-slate-800 shadow-xl h-72">
                  <img
                    src={img}
                    alt={`${project.title} Detail ${i + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {/* Engineering Highlights */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Engineering & Architectural Highlights
                  </h2>
                  <div className="space-y-3">
                    {project.engineeringHighlights.map((hl, i) => (
                      <div key={i} className="p-4 rounded-xl bg-brand-surface border border-slate-800 flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-300 leading-relaxed">{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {project.clientQuote && (
                  <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 relative">
                    <Quote className="w-10 h-10 text-sky-500/20 absolute top-4 right-4" />
                    <p className="text-sm sm:text-base text-slate-200 italic mb-4 leading-relaxed">
                      "{project.clientQuote.text}"
                    </p>
                    <div className="text-xs font-mono font-bold text-sky-400 uppercase">
                      &mdash; {project.clientQuote.authorRole}
                    </div>
                  </div>
                )}
              </div>

              {/* Subsystems Breakdown */}
              <div>
                <div className="p-6 rounded-2xl bg-brand-surface border border-slate-800">
                  <h3 className="text-base font-bold text-white mb-4">
                    Installed Subsystems
                  </h3>
                  <div className="space-y-2">
                    {project.solutionsInstalled.map((sol, i) => (
                      <div key={i} className="text-xs text-slate-300 p-2.5 rounded-lg bg-slate-900 border border-slate-800 font-semibold">
                        {sol}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lead Capture */}
        <section className="py-16 bg-brand-surface/40 border-t border-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ConsultationForm />
          </div>
        </section>
      </div>
    </>
  );
};
