import React, { useState } from 'react';
import {
  Sparkles,
  Sun,
  Moon,
  Users,
  Briefcase,
  Coffee,
  Film,
  Car,
  ShieldCheck,
  Smartphone,
  Sliders,
  CheckCircle2,
  Tv,
  Power,
  ChevronRight,
  Maximize2
} from 'lucide-react';

export const AmbientLivingJourney: React.FC = () => {
  const [activeArea, setActiveArea] = useState<'living' | 'bedroom' | 'exterior'>('living');

  // Living Room Scene Mode
  const [livingMode, setLivingMode] = useState<'guest' | 'task' | 'discussion' | 'movie'>('guest');

  // Bedroom Scene Mode
  const [bedroomMode, setBedroomMode] = useState<'morning' | 'reading' | 'night'>('morning');

  // Active control source animation feedback ('wall' | 'phone')
  const [lastActionSource, setLastActionSource] = useState<'wall' | 'phone'>('wall');

  // Exterior Gate Animation State
  const [gateAnimState, setGateAnimState] = useState<'closed' | 'opening' | 'open' | 'transiting' | 'closing'>('closed');

  const triggerLivingScene = (mode: 'guest' | 'task' | 'discussion' | 'movie', source: 'wall' | 'phone') => {
    setLivingMode(mode);
    setLastActionSource(source);
  };

  const triggerBedroomScene = (mode: 'morning' | 'reading' | 'night', source: 'wall' | 'phone') => {
    setBedroomMode(mode);
    setLastActionSource(source);
  };

  const runGateSequence = () => {
    if (gateAnimState !== 'closed') return;
    setGateAnimState('opening');
    setTimeout(() => {
      setGateAnimState('open');
      setTimeout(() => {
        setGateAnimState('transiting');
        setTimeout(() => {
          setGateAnimState('closing');
          setTimeout(() => {
            setGateAnimState('closed');
          }, 2500);
        }, 2800);
      }, 1000);
    }, 2200);
  };

  return (
    <div className="bg-brand-surface border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
      {/* Top Space Switcher Navigation */}
      <div className="bg-slate-950/95 border-b border-slate-800 px-4 sm:px-8 py-4 flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-sky-400 block mb-0.5">
            Ambience Mastery &bull; Architectural Storytelling
          </span>
          <h3 className="text-sm sm:text-base font-bold text-white">
            Interactive Living Space Demonstration
          </h3>
        </div>

        {/* Space Selector Tabs */}
        <div className="flex items-center gap-1.5 bg-slate-900 p-1.5 rounded-2xl border border-slate-800">
          <button
            type="button"
            onClick={() => setActiveArea('living')}
            className={`px-3.5 sm:px-5 py-2 rounded-xl text-xs font-bold transition-all ${
              activeArea === 'living'
                ? 'bg-sky-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            01. Living Room Space
          </button>

          <button
            type="button"
            onClick={() => setActiveArea('bedroom')}
            className={`px-3.5 sm:px-5 py-2 rounded-xl text-xs font-bold transition-all ${
              activeArea === 'bedroom'
                ? 'bg-sky-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            02. Master Suite
          </button>

          <button
            type="button"
            onClick={() => setActiveArea('exterior')}
            className={`px-3.5 sm:px-5 py-2 rounded-xl text-xs font-bold transition-all ${
              activeArea === 'exterior'
                ? 'bg-amber-500 text-slate-950 shadow-md font-black'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            03. Exterior Villa Gate
          </button>
        </div>
      </div>

      {/* Main Interactive Stage */}
      <div className="relative min-h-[500px] lg:min-h-[560px] bg-slate-950 flex flex-col xl:flex-row items-stretch overflow-hidden">
        
        {/* ====================================================
            SCENE 1: LUXURY LIVING ROOM INTERIOR
           ==================================================== */}
        {activeArea === 'living' && (
          <>
            {/* Visual Living Room Canvas */}
            <div className="relative flex-1 min-h-[360px] lg:min-h-[480px] overflow-hidden select-none">
              {/* Authentic High-End Interior Living Room Photo */}
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80"
                alt="Luxury Modern Living Room Interior"
                className={`w-full h-full object-cover transition-all duration-1000 ${
                  livingMode === 'guest'
                    ? 'brightness-[0.92] contrast-[1.08] saturate-[1.15]'
                    : livingMode === 'task'
                    ? 'brightness-[1.12] contrast-[1.15] saturate-[1.0]'
                    : livingMode === 'discussion'
                    ? 'brightness-[0.75] contrast-[1.18] saturate-[1.2]'
                    : 'brightness-[0.42] contrast-[1.3] saturate-[0.9]' // Movie Mode
                }`}
              />

              {/* Dynamic Atmospheric Lighting Glow Overlay */}
              <div
                className="absolute inset-0 transition-all duration-1000 pointer-events-none"
                style={{
                  backgroundColor:
                    livingMode === 'guest'
                      ? 'rgba(245, 158, 11, 0.16)' // Warm golden amber 2700K
                      : livingMode === 'task'
                      ? 'rgba(240, 249, 255, 0.08)' // Crisp daylight white 4500K
                      : livingMode === 'discussion'
                      ? 'rgba(217, 119, 6, 0.24)' // Intimate warm recessed cove 2400K
                      : 'rgba(30, 58, 138, 0.35)', // Deep cinematic indigo for Movie Night
                  mixBlendMode: 'screen'
                }}
              ></div>

              {/* Ceiling Cove Lighting Strip (Glows based on Mode) */}
              <div
                className="absolute top-0 inset-x-0 h-10 transition-all duration-1000 pointer-events-none blur-md"
                style={{
                  backgroundColor:
                    livingMode === 'guest'
                      ? 'rgba(251, 191, 36, 0.45)'
                      : livingMode === 'task'
                      ? 'rgba(255, 255, 255, 0.35)'
                      : livingMode === 'discussion'
                      ? 'rgba(245, 158, 11, 0.35)'
                      : 'rgba(56, 189, 248, 0.65)' // Glowing Cyan/Indigo Cove in Movie Mode
                }}
              ></div>

              {/* Floor Lamp & Recessed Spotlight Radial Beam */}
              <div
                className="absolute top-1/4 left-1/3 w-80 h-80 rounded-full transition-all duration-1000 pointer-events-none blur-3xl"
                style={{
                  backgroundColor:
                    livingMode === 'guest'
                      ? 'rgba(245, 158, 11, 0.25)'
                      : livingMode === 'task'
                      ? 'rgba(255, 255, 255, 0.18)'
                      : livingMode === 'discussion'
                      ? 'rgba(217, 119, 6, 0.28)'
                      : 'rgba(14, 165, 233, 0.15)'
                }}
              ></div>

              {/* ====================================================
                  REALISTIC ARCHITECTURAL WINDOW WITH MOTORIZED CURTAINS
                  Positioned precisely where the window opening exists!
                 ==================================================== */}
              <div className="absolute top-4 bottom-12 right-4 w-72 sm:w-96 rounded-2xl overflow-hidden border-2 border-slate-700/60 shadow-2xl pointer-events-none z-10 flex">
                {/* Window Exterior View (Day / Twilight / Night View through the glass) */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={
                      livingMode === 'task'
                        ? 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80' // Bright daylight view
                        : livingMode === 'movie'
                        ? 'https://images.unsplash.com/photo-1509114397022-ed747cca3f65?auto=format&fit=crop&w=800&q=80' // Night stars view
                        : 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80' // Warm sunset view
                    }
                    alt="Window Exterior Landscape"
                    className="w-full h-full object-cover transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-slate-950/20"></div>
                </div>

                {/* Motorized Curtain Track Top Housing */}
                <div className="absolute top-0 inset-x-0 h-4 bg-slate-900 border-b border-slate-700 z-30 flex items-center justify-between px-2 text-[8px] font-mono text-slate-400">
                  <span>SOMFY 24V MOTOR TRACK</span>
                  <span className="text-emerald-400">
                    {livingMode === 'movie' ? 'CLOSED 100%' : livingMode === 'discussion' ? '50%' : livingMode === 'guest' ? '25%' : 'OPEN 0%'}
                  </span>
                </div>

                {/* Left Motorized Curtain Drape (Pleated Fabric) */}
                <div
                  className="h-full bg-gradient-to-r from-stone-900 via-stone-800 to-stone-900 border-r border-stone-700/80 shadow-2xl transition-all duration-1000 ease-in-out relative z-20 flex justify-evenly"
                  style={{
                    width:
                      livingMode === 'movie'
                        ? '50%' // Fully closed together in middle
                        : livingMode === 'discussion'
                        ? '25%'
                        : livingMode === 'guest'
                        ? '15%'
                        : '6%' // Task mode pulled back to edges
                  }}
                >
                  {/* Fabric Pleat Lines */}
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="w-0.5 h-full bg-stone-950/70 opacity-60"></div>
                  ))}
                </div>

                {/* Right Motorized Curtain Drape (Pleated Fabric) */}
                <div
                  className="h-full ml-auto bg-gradient-to-l from-stone-900 via-stone-800 to-stone-900 border-l border-stone-700/80 shadow-2xl transition-all duration-1000 ease-in-out relative z-20 flex justify-evenly"
                  style={{
                    width:
                      livingMode === 'movie'
                        ? '50%' // Fully closed together in middle
                        : livingMode === 'discussion'
                        ? '25%'
                        : livingMode === 'guest'
                        ? '15%'
                        : '6%'
                  }}
                >
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="w-0.5 h-full bg-stone-950/70 opacity-60"></div>
                  ))}
                </div>

                {/* Center Badge when Curtains are closing/closed */}
                {livingMode === 'movie' && (
                  <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none animate-in fade-in duration-700">
                    <div className="bg-slate-950/90 border border-slate-700 px-3 py-1.5 rounded-lg text-center backdrop-blur shadow-2xl">
                      <div className="text-[10px] font-mono font-bold text-sky-400 uppercase">
                        Blackout Drapes Closed
                      </div>
                      <div className="text-[9px] text-slate-300">Cinema Room Isolation</div>
                    </div>
                  </div>
                )}
              </div>

              {/* Active Room Atmosphere Overlay Badge */}
              <div className="absolute bottom-4 left-4 z-20 bg-slate-950/90 backdrop-blur-md border border-slate-700/80 px-4 py-2.5 rounded-2xl shadow-2xl">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-[10px] font-mono font-bold text-sky-400 uppercase">
                    LIVING ROOM &bull; SCENE ORCHESTRATION
                  </span>
                </div>
                <div className="text-xs sm:text-sm font-bold text-white">
                  {livingMode === 'guest' && 'Guest Mode &bull; Warm 2700K Amber Glow & 75% Window View'}
                  {livingMode === 'task' && 'Task Mode &bull; 4500K Focused White Daylight & Drapes Open'}
                  {livingMode === 'discussion' && 'Discussion Mode &bull; Soft Accent Cove Ambience'}
                  {livingMode === 'movie' && 'Movie Night &bull; Backlit Azure Glow & Motorized Blackouts Closed'}
                </div>
                <div className="text-[10px] text-slate-400 mt-1 font-mono">
                  Triggered via: {lastActionSource === 'wall' ? 'Wall Smart Glass Switch' : 'MAXDAX Mobile App'}
                </div>
              </div>
            </div>

            {/* ====================================================
                DUAL CONTROLLER CONSOLE (WALL SWITCH + SMARTPHONE)
               ==================================================== */}
            <div className="w-full xl:w-[480px] bg-brand-surface border-t xl:border-t-0 xl:border-l border-slate-800 p-5 sm:p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
                  <div>
                    <span className="text-xs font-bold text-white uppercase tracking-wider block">
                      Synchronized Dual Controls
                    </span>
                    <span className="text-[11px] text-slate-400">
                      Operate from the wall touch plate or virtual smartphone:
                    </span>
                  </div>
                  <span className="text-[10px] font-mono bg-sky-950 text-sky-300 px-2 py-0.5 rounded border border-sky-800">
                    RF / ZIGBEE 3.0
                  </span>
                </div>

                {/* Control Panel Grid: Wall Switch Panel + Mobile App Side-by-Side */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* 1. ARCHITECTURAL SMART GLASS WALL TOUCH SWITCH */}
                  <div className="bg-slate-950 border-2 border-slate-700/80 rounded-2xl p-3.5 shadow-xl flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-slate-800">
                        <span className="text-[10px] font-mono font-bold text-slate-300 uppercase">
                          Wall Touch Panel
                        </span>
                        <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                      </div>
                      <p className="text-[10px] text-slate-400 mb-2.5">
                        Capacitive Glass Keypad:
                      </p>

                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => triggerLivingScene('guest', 'wall')}
                          className={`p-2.5 rounded-xl border text-center transition-all ${
                            livingMode === 'guest'
                              ? 'bg-amber-950 border-amber-400 text-amber-200 shadow-lg ring-1 ring-amber-400'
                              : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                          }`}
                        >
                          <Users className="w-4 h-4 mx-auto mb-1 text-amber-400" />
                          <div className="text-[10px] font-bold">Guest</div>
                        </button>

                        <button
                          type="button"
                          onClick={() => triggerLivingScene('task', 'wall')}
                          className={`p-2.5 rounded-xl border text-center transition-all ${
                            livingMode === 'task'
                              ? 'bg-sky-950 border-sky-400 text-sky-200 shadow-lg ring-1 ring-sky-400'
                              : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                          }`}
                        >
                          <Briefcase className="w-4 h-4 mx-auto mb-1 text-sky-400" />
                          <div className="text-[10px] font-bold">Task</div>
                        </button>

                        <button
                          type="button"
                          onClick={() => triggerLivingScene('discussion', 'wall')}
                          className={`p-2.5 rounded-xl border text-center transition-all ${
                            livingMode === 'discussion'
                              ? 'bg-amber-950 border-amber-500 text-amber-200 shadow-lg ring-1 ring-amber-500'
                              : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                          }`}
                        >
                          <Coffee className="w-4 h-4 mx-auto mb-1 text-amber-500" />
                          <div className="text-[10px] font-bold">Relax</div>
                        </button>

                        <button
                          type="button"
                          onClick={() => triggerLivingScene('movie', 'wall')}
                          className={`p-2.5 rounded-xl border text-center transition-all ${
                            livingMode === 'movie'
                              ? 'bg-indigo-950 border-indigo-400 text-indigo-200 shadow-lg ring-1 ring-indigo-400'
                              : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                          }`}
                        >
                          <Film className="w-4 h-4 mx-auto mb-1 text-indigo-400" />
                          <div className="text-[10px] font-bold">Cinema</div>
                        </button>
                      </div>
                    </div>

                    <div className="text-[9px] font-mono text-slate-500 mt-3 pt-2 border-t border-slate-900 text-center">
                      Haptic Feedback &bull; Backlit LED
                    </div>
                  </div>

                  {/* 2. SMARTPHONE APP CONTROLLER */}
                  <div className="bg-slate-950 border-2 border-slate-700/80 rounded-2xl p-3.5 shadow-xl flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-slate-800">
                        <div className="flex items-center gap-1">
                          <Smartphone className="w-3.5 h-3.5 text-sky-400" />
                          <span className="text-[10px] font-mono font-bold text-slate-300 uppercase">
                            MAXDAX App
                          </span>
                        </div>
                        <span className="text-[9px] font-mono text-emerald-400">ONLINE</span>
                      </div>

                      <div className="space-y-1.5">
                        <button
                          type="button"
                          onClick={() => triggerLivingScene('guest', 'phone')}
                          className={`w-full px-2.5 py-1.5 rounded-lg border text-left flex items-center justify-between text-xs transition-all ${
                            livingMode === 'guest'
                              ? 'bg-amber-950/80 border-amber-400 text-amber-200 font-bold'
                              : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                          }`}
                        >
                          <span>Guest Ambiance</span>
                          <span className="text-[9px] font-mono text-amber-400">2700K</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => triggerLivingScene('task', 'phone')}
                          className={`w-full px-2.5 py-1.5 rounded-lg border text-left flex items-center justify-between text-xs transition-all ${
                            livingMode === 'task'
                              ? 'bg-sky-950/80 border-sky-400 text-sky-200 font-bold'
                              : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                          }`}
                        >
                          <span>Daylight Task</span>
                          <span className="text-[9px] font-mono text-sky-400">4500K</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => triggerLivingScene('discussion', 'phone')}
                          className={`w-full px-2.5 py-1.5 rounded-lg border text-left flex items-center justify-between text-xs transition-all ${
                            livingMode === 'discussion'
                              ? 'bg-amber-950/80 border-amber-500 text-amber-200 font-bold'
                              : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                          }`}
                        >
                          <span>Discussion Mood</span>
                          <span className="text-[9px] font-mono text-amber-500">Cove</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => triggerLivingScene('movie', 'phone')}
                          className={`w-full px-2.5 py-1.5 rounded-lg border text-left flex items-center justify-between text-xs transition-all ${
                            livingMode === 'movie'
                              ? 'bg-indigo-950/80 border-indigo-400 text-indigo-200 font-bold'
                              : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                          }`}
                        >
                          <span>Movie Night</span>
                          <span className="text-[9px] font-mono text-indigo-400">Blackout</span>
                        </button>
                      </div>
                    </div>

                    {/* Curtain Slider Indicator in App */}
                    <div className="mt-3 pt-2 border-t border-slate-800/80 text-[10px] text-slate-400">
                      <div className="flex justify-between font-mono mb-1">
                        <span>Drape Position</span>
                        <span className="text-white font-bold">
                          {livingMode === 'movie' ? '100% Closed' : livingMode === 'discussion' ? '50%' : livingMode === 'guest' ? '25%' : '0% (Open)'}
                        </span>
                      </div>
                      <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                        <div
                          className="bg-sky-400 h-full transition-all duration-700"
                          style={{
                            width:
                              livingMode === 'movie' ? '100%' : livingMode === 'discussion' ? '50%' : livingMode === 'guest' ? '25%' : '5%'
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Feature Notes */}
              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                <span>Tunable White CCT &bull; 0.1% Dimming Curve</span>
                <span className="text-sky-400 font-mono font-bold">DALI-2 / KNX</span>
              </div>
            </div>
          </>
        )}

        {/* ====================================================
            SCENE 2: MASTER BEDROOM SUITE INTERIOR
           ==================================================== */}
        {activeArea === 'bedroom' && (
          <>
            <div className="relative flex-1 min-h-[360px] lg:min-h-[480px] overflow-hidden select-none">
              {/* Authentic High-End Master Bedroom Interior Photo */}
              <img
                src="https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1600&q=80"
                alt="Luxury Master Bedroom Suite"
                className={`w-full h-full object-cover transition-all duration-1000 ${
                  bedroomMode === 'morning'
                    ? 'brightness-[1.05] contrast-[1.1] saturate-[1.1]'
                    : bedroomMode === 'reading'
                    ? 'brightness-[0.78] contrast-[1.15] saturate-[1.1]'
                    : 'brightness-[0.32] contrast-[1.3] saturate-[0.85]' // Good night mode
                }`}
              />

              {/* Dynamic Bedroom Atmosphere Overlay */}
              <div
                className="absolute inset-0 transition-all duration-1000 pointer-events-none"
                style={{
                  backgroundColor:
                    bedroomMode === 'morning'
                      ? 'rgba(251, 191, 36, 0.14)' // Golden sunrise daylight
                      : bedroomMode === 'reading'
                      ? 'rgba(245, 158, 11, 0.22)' // Warm cozy reading spot
                      : 'rgba(15, 23, 42, 0.65)', // Deep calm midnight
                  mixBlendMode: 'screen'
                }}
              ></div>

              {/* Bedroom Panoramic Terrace Window with Motorized Curtains */}
              <div className="absolute top-4 bottom-12 right-4 w-64 sm:w-80 rounded-2xl overflow-hidden border-2 border-slate-700/60 shadow-2xl pointer-events-none z-10 flex">
                <div className="absolute inset-0 z-0">
                  <img
                    src={
                      bedroomMode === 'night'
                        ? 'https://images.unsplash.com/photo-1509114397022-ed747cca3f65?auto=format&fit=crop&w=800&q=80'
                        : 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80'
                    }
                    alt="Terrace Garden Horizon"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Left Drape */}
                <div
                  className="h-full bg-gradient-to-r from-slate-900 to-slate-800 border-r border-slate-700 shadow-xl transition-all duration-1000 ease-in-out relative z-20"
                  style={{
                    width: bedroomMode === 'night' ? '50%' : bedroomMode === 'reading' ? '25%' : '6%'
                  }}
                ></div>

                {/* Right Drape */}
                <div
                  className="h-full ml-auto bg-gradient-to-l from-slate-900 to-slate-800 border-l border-slate-700 shadow-xl transition-all duration-1000 ease-in-out relative z-20"
                  style={{
                    width: bedroomMode === 'night' ? '50%' : bedroomMode === 'reading' ? '25%' : '6%'
                  }}
                ></div>

                {bedroomMode === 'night' && (
                  <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none animate-in fade-in">
                    <span className="text-[10px] font-mono font-bold text-indigo-300 bg-slate-950/80 px-2.5 py-1 rounded border border-slate-700">
                      Sleep Blackouts Active
                    </span>
                  </div>
                )}
              </div>

              {/* Active Room Atmosphere Overlay Badge */}
              <div className="absolute bottom-4 left-4 z-20 bg-slate-950/90 backdrop-blur-md border border-slate-700/80 px-4 py-2.5 rounded-2xl shadow-2xl">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-sky-400 animate-pulse"></span>
                  <span className="text-[10px] font-mono font-bold text-sky-400 uppercase">
                    MASTER SUITE &bull; PERSPECTIVE
                  </span>
                </div>
                <div className="text-xs sm:text-sm font-bold text-white">
                  {bedroomMode === 'morning' && 'Morning Wakeup &bull; Curtains Glide Open with Sunrise Ambient Glow'}
                  {bedroomMode === 'reading' && 'Reading Mode &bull; Focused 2700K Headboard Light & Relaxed Drapes'}
                  {bedroomMode === 'night' && 'Good Night &bull; Dual Blackouts 100% Shut & Path Nightglow (5%)'}
                </div>
              </div>
            </div>

            {/* Bedroom Controls */}
            <div className="w-full xl:w-[480px] bg-brand-surface border-t xl:border-t-0 xl:border-l border-slate-800 p-5 sm:p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
                  <div>
                    <span className="text-xs font-bold text-white uppercase tracking-wider block">
                      Bedside Keypad & Mobile Sync
                    </span>
                    <span className="text-[11px] text-slate-400">
                      Select a morning, reading, or sleep scene:
                    </span>
                  </div>
                  <span className="text-[10px] font-mono bg-sky-950 text-sky-300 px-2 py-0.5 rounded border border-sky-800">
                    BEDSIDE MASTER
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Bedside Glass Keypad */}
                  <div className="bg-slate-950 border-2 border-slate-700/80 rounded-2xl p-3.5 shadow-xl">
                    <span className="text-[10px] font-mono font-bold text-slate-300 uppercase block mb-3">
                      Bedside Touch Keypad
                    </span>
                    <div className="space-y-2">
                      <button
                        type="button"
                        onClick={() => triggerBedroomScene('morning', 'wall')}
                        className={`w-full p-2.5 rounded-xl border text-left flex items-center justify-between transition-all ${
                          bedroomMode === 'morning'
                            ? 'bg-amber-950 border-amber-400 text-amber-200 ring-1 ring-amber-400 font-bold'
                            : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <Sun className="w-4 h-4 text-amber-400" />
                          <span className="text-xs">Wake Up</span>
                        </div>
                        <span className="text-[10px] text-slate-400">07:00 AM</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => triggerBedroomScene('reading', 'wall')}
                        className={`w-full p-2.5 rounded-xl border text-left flex items-center justify-between transition-all ${
                          bedroomMode === 'reading'
                            ? 'bg-sky-950 border-sky-400 text-sky-200 ring-1 ring-sky-400 font-bold'
                            : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <Coffee className="w-4 h-4 text-sky-400" />
                          <span className="text-xs">Reading</span>
                        </div>
                        <span className="text-[10px] text-slate-400">Spotlight</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => triggerBedroomScene('night', 'wall')}
                        className={`w-full p-2.5 rounded-xl border text-left flex items-center justify-between transition-all ${
                          bedroomMode === 'night'
                            ? 'bg-indigo-950 border-indigo-400 text-indigo-200 ring-1 ring-indigo-400 font-bold'
                            : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <Moon className="w-4 h-4 text-indigo-400" />
                          <span className="text-xs">Good Night</span>
                        </div>
                        <span className="text-[10px] text-slate-400">Blackout</span>
                      </button>
                    </div>
                  </div>

                  {/* Mobile App */}
                  <div className="bg-slate-950 border-2 border-slate-700/80 rounded-2xl p-3.5 shadow-xl flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-mono font-bold text-slate-300 uppercase block mb-3">
                        Curtain & HVAC Status
                      </span>

                      <div className="bg-slate-900/80 rounded-xl p-2.5 border border-slate-800 mb-2">
                        <div className="text-[10px] text-slate-400 uppercase font-mono">Motorized Sheers</div>
                        <div className="text-xs font-bold text-white mt-0.5">
                          {bedroomMode === 'night' ? '100% Closed' : bedroomMode === 'reading' ? '50% Relaxed' : 'Fully Open'}
                        </div>
                      </div>

                      <div className="bg-slate-900/80 rounded-xl p-2.5 border border-slate-800">
                        <div className="text-[10px] text-slate-400 uppercase font-mono">Climate Temperature</div>
                        <div className="text-xs font-bold text-emerald-400 mt-0.5">
                          {bedroomMode === 'night' ? '23°C &bull; Night Breeze' : '24°C &bull; Auto Fan'}
                        </div>
                      </div>
                    </div>

                    <div className="text-[9px] font-mono text-slate-500 mt-3 text-center">
                      Automated Circadian Rhythm
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] text-slate-400 flex justify-between">
                <span>Whisper-Quiet Somfy Glydea Motors (&lt;38 dB)</span>
                <span className="text-sky-400 font-mono">ZIGBEE 3.0</span>
              </div>
            </div>
          </>
        )}

        {/* ====================================================
            SCENE 3: EXTERIOR VILLA GATE & VEHICLE ARRIVAL CLIMAX
           ==================================================== */}
        {activeArea === 'exterior' && (
          <>
            <div className="relative flex-1 min-h-[360px] lg:min-h-[480px] overflow-hidden bg-slate-950 flex flex-col justify-end p-6 select-none">
              {/* Verified High-Resolution Villa Driveway Backdrop */}
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80"
                alt="Contemporary Villa Driveway"
                className="absolute inset-0 w-full h-full object-cover brightness-[0.65] contrast-[1.1]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>

              {/* Physical Gate Structure Layer */}
              <div className="relative w-full max-w-xl mx-auto h-48 flex items-end justify-between z-20">
                {/* Left Pillar */}
                <div className="w-12 h-44 bg-gradient-to-r from-slate-800 to-slate-700 rounded-t border-t border-x border-slate-600 shadow-2xl relative">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-7 h-3.5 bg-amber-500/80 rounded-full blur-[2px]"></div>
                  <div className="absolute top-10 left-1/2 -translate-x-1/2 text-[9px] font-bold text-slate-400 tracking-wider rotate-90">
                    PILLAR A
                  </div>
                </div>

                {/* Motorized Sliding Gate Leaf that slides smoothly */}
                <div
                  className="absolute bottom-1 left-12 right-12 h-40 border-2 border-slate-400 rounded-t shadow-2xl transition-all duration-1000 ease-in-out flex items-center justify-evenly bg-slate-900/95 backdrop-blur-sm"
                  style={{
                    transform:
                      gateAnimState === 'open' || gateAnimState === 'transiting'
                        ? 'translateX(85%)'
                        : gateAnimState === 'opening'
                        ? 'translateX(45%)'
                        : gateAnimState === 'closing'
                        ? 'translateX(25%)'
                        : 'translateX(0%)',
                    opacity: gateAnimState === 'open' || gateAnimState === 'transiting' ? 0.35 : 1
                  }}
                >
                  {[...Array(14)].map((_, i) => (
                    <div key={i} className="w-1.5 h-full bg-gradient-to-b from-slate-300 via-slate-500 to-slate-800 rounded-full opacity-80"></div>
                  ))}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 px-2.5 py-0.5 bg-slate-950 border border-slate-700 rounded text-[9px] font-bold text-sky-400 font-mono">
                    MAXDAX AUTOMATION
                  </div>
                </div>

                {/* Right Pillar with Motor Housing & Warning Beacon */}
                <div className="w-12 h-44 bg-gradient-to-l from-slate-800 to-slate-700 rounded-t border-t border-x border-slate-600 shadow-2xl relative">
                  <div className={`absolute -top-5 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full transition-all duration-300 ${
                    gateAnimState === 'opening' || gateAnimState === 'closing'
                      ? 'bg-amber-400 shadow-[0_0_20px_#f59e0b] animate-ping'
                      : 'bg-slate-700'
                  }`}></div>
                  <div className="absolute top-10 left-1/2 -translate-x-1/2 text-[9px] font-bold text-slate-400 tracking-wider -rotate-90">
                    PILLAR B
                  </div>
                </div>
              </div>

              {/* Animated Vehicle Transiting Simulation */}
              {gateAnimState === 'transiting' && (
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 animate-in fade-in zoom-in duration-700">
                  <div className="flex items-center gap-3 bg-slate-950/95 border-2 border-sky-400 text-sky-300 px-6 py-3 rounded-full shadow-2xl animate-bounce">
                    <Car className="w-5 h-5 text-sky-400" />
                    <span className="text-xs font-bold tracking-wider uppercase font-mono">
                      Vehicle Entering Villa Driveway...
                    </span>
                  </div>
                </div>
              )}

              {/* Status Badge */}
              <div className="relative z-20 mt-4 max-w-xl mx-auto w-full bg-slate-950/90 backdrop-blur-md border border-slate-700 px-4 py-2.5 rounded-2xl shadow-xl flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-bold text-white font-mono">
                    {gateAnimState === 'closed' && 'Gate Closed & Perimeter Armed'}
                    {gateAnimState === 'opening' && 'Opening Command &bull; Beacon Active...'}
                    {gateAnimState === 'open' && 'Gate Fully Open &bull; Driveway Clear'}
                    {gateAnimState === 'transiting' && 'Authorized Vehicle Passing Safety Photocell'}
                    {gateAnimState === 'closing' && 'Vehicle Clear &bull; Gate Auto-Closing...'}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-sky-400 font-bold uppercase">
                  {gateAnimState}
                </span>
              </div>
            </div>

            {/* Gate Remote & Phone App Control Console */}
            <div className="w-full xl:w-[480px] bg-brand-surface border-t xl:border-t-0 xl:border-l border-slate-800 p-5 sm:p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
                  <div>
                    <span className="text-xs font-bold text-white uppercase tracking-wider block">
                      Perimeter Gate Automation
                    </span>
                    <span className="text-[11px] text-slate-400">
                      Geofence auto-entry or smartphone remote:
                    </span>
                  </div>
                  <span className="text-[10px] font-mono bg-amber-950 text-amber-300 px-2 py-0.5 rounded border border-amber-800">
                    BFT / DEA 24V
                  </span>
                </div>

                <div className="bg-slate-950 border-2 border-slate-700/80 rounded-2xl p-4 shadow-xl">
                  <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-800">
                    <div className="flex items-center gap-1.5">
                      <Smartphone className="w-4 h-4 text-amber-400" />
                      <span className="text-xs font-bold text-white font-mono">Gate Access Remote</span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400">ONLINE</span>
                  </div>

                  <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                    Tap to trigger the full automated gate sequence (flasher beacon lights up, motor slides the gate open, car drives through, safety photocells verify clearance, gate auto-closes):
                  </p>

                  <button
                    type="button"
                    onClick={runGateSequence}
                    disabled={gateAnimState !== 'closed'}
                    className={`w-full py-4 px-4 rounded-2xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xl transition-all ${
                      gateAnimState !== 'closed'
                        ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                        : 'bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-amber-500/20 active:scale-95'
                    }`}
                  >
                    <Car className="w-5 h-5" />
                    <span>
                      {gateAnimState === 'closed' ? 'Simulate Car Arrival & Gate Open' : 'Sequence In Progress...'}
                    </span>
                  </button>

                  <div className="grid grid-cols-2 gap-2 mt-4 text-[10px] font-mono text-slate-400">
                    <div className="bg-slate-900 p-2 rounded-lg border border-slate-800">
                      <span className="text-slate-500 block">Photocell Beam:</span>
                      <span className="text-emerald-400 font-bold">ALIGNED & SECURE</span>
                    </div>
                    <div className="bg-slate-900 p-2 rounded-lg border border-slate-800">
                      <span className="text-slate-500 block">Backup Battery:</span>
                      <span className="text-emerald-400 font-bold">100% CHARGED</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] text-slate-400 flex justify-between">
                <span>Heavy-Duty Italian Sliding Motor (Up to 1200kg)</span>
                <span className="text-amber-400 font-mono">IP67 WEATHERPROOF</span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
