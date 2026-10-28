import React from 'react';
import { useDemo } from '../../context/DemoContext';
import { Maximize2, Play, Square, Pause, Sun, Moon, Sliders } from 'lucide-react';

export const CurtainDemo: React.FC = () => {
  const { state, openCurtains, closeCurtains, stopCurtains, setCurtainPercentage } = useDemo();

  const pos = state.curtainPosition; // 0 = closed, 100 = fully open

  // For visual drapery: 0% open means curtains meet in the middle (width 50% each)
  // 100% open means curtains retracted to edges (width 12% each)
  const draperyWidth = 50 - (pos * 0.38);

  return (
    <div className="bg-brand-surface border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
      {/* Header */}
      <div className="bg-brand-card/80 border-b border-slate-800 px-5 py-3.5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <Maximize2 className="w-4 h-4 text-sky-400" />
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
            Acoustic Motorized Curtain & Blind Automation Demonstration
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono">
          <span className="text-slate-400">POSITION:</span>
          <span className="text-sky-400 font-bold">{pos}% OPEN</span>
          <span className="text-slate-600">|</span>
          <span className="text-slate-400">ACOUSTIC LEVEL: &lt; 28 dB</span>
        </div>
      </div>

      {/* Visual Canvas - Architectural Double-Height Window */}
      <div className="relative h-64 sm:h-72 bg-gradient-to-b from-sky-900/30 via-slate-900 to-slate-950 overflow-hidden border-b border-slate-800 flex items-center justify-center p-4">
        {/* Exterior Landscape View through Window Glass */}
        <div className="absolute inset-x-8 inset-y-4 rounded-lg overflow-hidden border-2 border-slate-700/80 shadow-inner">
          <img
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80"
            alt="Window View"
            className="w-full h-full object-cover brightness-75 contrast-110"
          />
          {/* Glass Glare Sheen */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none"></div>
        </div>

        {/* Top Motor Track Housing */}
        <div className="absolute top-4 inset-x-7 h-3 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 rounded-full shadow-md z-20 flex items-center justify-between px-3">
          <div className="w-1.5 h-1.5 rounded-full bg-sky-400"></div>
          <div className="text-[7px] text-slate-300 font-mono tracking-widest uppercase">SOMFY / DOOYA DUAL TRACK</div>
          <div className="w-1.5 h-1.5 rounded-full bg-sky-400"></div>
        </div>

        {/* Left Motorized Drapery Leaf */}
        <div
          className="absolute top-7 bottom-4 left-8 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-r border-slate-700 shadow-2xl transition-all duration-700 ease-out z-10 flex overflow-hidden"
          style={{ width: `${draperyWidth}%` }}
        >
          {/* S-Fold Ripple Pleats */}
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex-1 h-full border-r border-slate-950/60 shadow-inner bg-gradient-to-r from-slate-800 to-slate-900 opacity-90"></div>
          ))}
        </div>

        {/* Right Motorized Drapery Leaf */}
        <div
          className="absolute top-7 bottom-4 right-8 bg-gradient-to-l from-slate-900 via-slate-800 to-slate-900 border-l border-slate-700 shadow-2xl transition-all duration-700 ease-out z-10 flex overflow-hidden"
          style={{ width: `${draperyWidth}%` }}
        >
          {/* S-Fold Ripple Pleats */}
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex-1 h-full border-l border-slate-950/60 shadow-inner bg-gradient-to-l from-slate-800 to-slate-900 opacity-90"></div>
          ))}
        </div>

        {/* Motion Indicator Badge */}
        {state.curtainMoving && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-950/90 border border-sky-500 text-sky-300 px-4 py-2 rounded-full text-xs font-mono font-bold shadow-2xl z-30 animate-pulse">
            BRUSHLESS MOTOR ENGAGED &bull; GLIDING
          </div>
        )}
      </div>

      {/* Control Console */}
      <div className="p-5 sm:p-6 bg-brand-surface">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Direct Controls */}
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2.5">
              Direct Curtain Motor Commands:
            </span>
            <div className="grid grid-cols-3 gap-2.5">
              <button
                type="button"
                onClick={openCurtains}
                disabled={pos >= 100}
                className={`py-2.5 px-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all ${
                  pos >= 100
                    ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                    : 'bg-sky-600 hover:bg-sky-500 text-white hover:shadow-sky-500/25 active:scale-95'
                }`}
              >
                <Play className="w-4 h-4" />
                <span>Open (100%)</span>
              </button>

              <button
                type="button"
                onClick={closeCurtains}
                disabled={pos <= 0}
                className={`py-2.5 px-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all ${
                  pos <= 0
                    ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                    : 'bg-slate-700 hover:bg-slate-600 text-white active:scale-95'
                }`}
              >
                <Square className="w-4 h-4" />
                <span>Close (0%)</span>
              </button>

              <button
                type="button"
                onClick={stopCurtains}
                className="py-2.5 px-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 active:scale-95"
              >
                <Pause className="w-4 h-4" />
                <span>Stop</span>
              </button>
            </div>

            {/* Percentage Slider */}
            <div className="mt-4 pt-4 border-t border-slate-800">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-300 mb-1.5">
                <span>Micro-Step Position Slider</span>
                <span className="font-mono text-sky-400">{pos}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={pos}
                onChange={e => setCurtainPercentage(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-400"
              />
            </div>
          </div>

          {/* Quick Scene Presets */}
          <div className="bg-brand-card/60 border border-slate-800 rounded-xl p-4">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2.5">
              Architectural Shading Presets:
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <button
                type="button"
                onClick={() => setCurtainPercentage(100)}
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-sky-500 text-left transition-all"
              >
                <Sun className="w-3.5 h-3.5 text-amber-400 mb-1" />
                <div className="font-semibold text-slate-200">Morning Daylight</div>
                <div className="text-[10px] text-slate-400">100% Fully Open</div>
              </button>

              <button
                type="button"
                onClick={() => setCurtainPercentage(45)}
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-sky-500 text-left transition-all"
              >
                <Sliders className="w-3.5 h-3.5 text-sky-400 mb-1" />
                <div className="font-semibold text-slate-200">Afternoon Glare</div>
                <div className="text-[10px] text-slate-400">45% Filtered View</div>
              </button>

              <button
                type="button"
                onClick={() => setCurtainPercentage(0)}
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-sky-500 text-left transition-all"
              >
                <Moon className="w-3.5 h-3.5 text-indigo-400 mb-1" />
                <div className="font-semibold text-slate-200">Total Blackout</div>
                <div className="text-[10px] text-slate-400">0% Absolute Privacy</div>
              </button>

              <button
                type="button"
                onClick={() => setCurtainPercentage(75)}
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-sky-500 text-left transition-all"
              >
                <Sun className="w-3.5 h-3.5 text-emerald-400 mb-1" />
                <div className="font-semibold text-slate-200">Terrace Breezeway</div>
                <div className="text-[10px] text-slate-400">75% Light Air</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
