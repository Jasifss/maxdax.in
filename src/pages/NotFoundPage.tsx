import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowRight, ShieldAlert } from 'lucide-react';
import { SEO } from '../components/common/SEO';

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Page Not Found (404) | MAXDAX"
        description="The requested page could not be located on the MAXDAX platform."
      />

      <div className="pt-32 pb-24 bg-brand-dark min-h-screen flex items-center justify-center">
        <div className="max-w-md mx-auto px-4 text-center">
          <div className="w-16 h-16 rounded-2xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 mx-auto mb-6">
            <ShieldAlert className="w-8 h-8" />
          </div>
          <span className="text-xs font-mono font-bold text-sky-400 tracking-widest uppercase block mb-2">
            ERROR CODE 404
          </span>
          <h1 className="text-3xl font-extrabold text-white mb-3">
            System Node Not Found
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mb-8 leading-relaxed">
            The page or resource you are looking for has been reconfigured or moved in the MAXDAX system architecture.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition-all"
            >
              <Home className="w-4 h-4" />
              <span>Return to Homepage</span>
            </Link>
            <Link
              to="/solutions"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-center gap-2"
            >
              <span>Explore Solutions</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
