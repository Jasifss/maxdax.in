import React, { useState, useEffect } from 'react';
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
  ChevronRight,
  Play,
  RotateCcw
} from 'lucide-react';

export const AmbientLivingJourney: React.FC = () => {
  const [activeArea, setActiveArea] = useState<'living' | 'bedroom' | 'exterior'>('living');

  // Living Room Modes
  // 'guest' | 'task' | 'discussion' | 'movie'
  const [livingMode, setLivingMode] = useState<'guest' | 'task' | 'discussion' | 'movie'>('guest');

  // Bedroom Modes
  // 'night' | 'morning' | 'reading'
  const [bedroomMode, setBedroomMode] = useState<'morning' | 'night' | 'reading'>('morning');

  // Exterior Gate Animation State
  // 'closed' | 'opening' | 'open' | 'transiting' | 'closing'
  const [gateAnimState, setGateAnimState] = useState<'closed' | 'opening' | 'open' | 'transiting' | 'closing'>('closed');

  // Gate automatic sequence trigger
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
        }, 3000);
      }, 1000);
    }, 2500);
  };

  return (
    <div className="bg-brand-surface border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
      {/* Top Space Switcher Navigation (Living -> Bedroom -> Exterior Gate) */}
      <div className="bg-slate-950/90 border-b border-slate-800 px-4 sm:px-8 py-4 flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-sky-400 block mb-0.5">
            Ambience Mastery & Automated Storytelling
          </span>
          <h3 className="text-sm sm:text-base font-bold text-white">
            Experience Living in a MAXDAX Smart Home
          </h3>
        </div>

        {/* Space Selector Tabs */}
        <div className="flex items-center gap-1.5 bg-slate-900 p-1 rounded-2xl border border-slate-800">
          <button
            type="button"
            onClick={() => setActiveArea('living')}
            className={`px-3.5 sm:px-5 py-2 rounded-xl text-xs font-bold transition-all ${
              activeArea === 'living'
                ? 'bg-sky-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            01. Living Room
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
            03. Exterior & Gate
          </button>
        </div>
      </div>

      {/* Main Interactive Stage */}
      <div className="relative min-h-[460px] sm:min-h-[520px] bg-black overflow-hidden flex flex-col lg:flex-row items-stretch">
        
        {/* =========================================
            ROOM 1: LIVING ROOM (AMBIENCE MASTERY)
           ========================================= */}
        {activeArea === 'living' && (
          <>
            {/* Visual Room Canvas */}
            <div className="relative flex-1 min-h-[320px] lg:min-h-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85"
                alt="Modern Smart Living Room"
                className={`w-full h-full object-cover transition-all duration-1000 ${
                  livingMode === 'guest'
                    ? 'brightness-[0.88] contrast-[1.05]'
                    : livingMode === 'task'
                    ? 'brightness-[1.05] contrast-[1.12]'
                    : livingMode === 'discussion'
                    ? 'brightness-[0.70] contrast-[1.15]'
                    : 'brightness-[0.45] contrast-[1.25]' // Movie mode
                }`}
              />

              {/* Dynamic Lighting Overlay */}
              <div
                className="absolute inset-0 transition-all duration-1000 pointer-events-none"
                style={{
                  backgroundColor:
                    livingMode === 'guest'
                      ? 'rgba(217, 119, 6, 0.15)' // Warm golden amber
                      : livingMode === 'task'
                      ? 'rgba(255, 255, 255, 0.08)' // Crisp daylight white
                      : livingMode === 'discussion'
                      ? 'rgba(180, 83, 9, 0.22)' // Intimate warm recessed
                      : 'rgba(2, 132, 199, 0.25)', // Movie night deep azure
                  boxShadow:
                    livingMode === 'movie'
                      ? 'inset 0 0 150px rgba(0,0,0,0.9)'
                      : 'none'
                }}
              ></div>

              {/* Simulated Motorized Window Drapes Effect */}
              <div
                className="absolute top-0 bottom-0 right-0 bg-slate-950/90 transition-all duration-1000 ease-in-out border-l border-slate-700/50 shadow-2xl flex items-center justify-center pointer-events-none"
                style={{
                  width:
                    livingMode === 'movie'
                      ? '70%' // Blinds closed for cinema
                      : livingMode === 'discussion'
                      ? '40%'
                      : livingMode === 'guest'
                      ? '25%'
                      : '8%' // Task mode blinds fully open
                }}
              >
                {livingMode === 'movie' && (
                  <span className="text-[10px] font-mono font-bold text-slate-400 rotate-90 tracking-widest uppercase">
                    BLACKOUT DRAPES CLOSED (100%)
                  </span>
                )}
              </div>

              {/* Live Room Status Badge */}
              <div className="absolute bottom-5 left-5 bg-slate-950/85 backdrop-blur-md border border-slate-700 px-4 py-2 rounded-2xl shadow-xl flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <div>
                  <div className="text-[10px] font-mono font-bold text-sky-400 uppercase">
                    ACTIVE ATMOSPHERE
                  </div>
                  <div className="text-xs font-bold text-white">
                    {livingMode === 'guest' && 'Guest Mode &bull; Warm Luxury Lighting & Relaxed Curtains'}
                    {livingMode === 'task' && 'Task Mode &bull; 4500K Focused White Daylight & Open View'}
                    {livingMode === 'discussion' && 'Discussion Mode &bull; Soft Accent Cove Ambience'}
                    {livingMode === 'movie' && 'Movie Night &bull; Ambient Backlight & Motorized Blackouts'}
                  </div>
                </div>
              </div>
            </div>

            {/* Sleek Mobile Phone App Controller */}
            <div className="w-full lg:w-96 bg-brand-surface border-t lg:border-t-0 lg:border-l border-slate-800 p-6 flex flex-col justify-center">
              <div className="max-w-xs mx-auto w-full">
                {/* Mobile Phone Mockup Frame */}
                <div className="bg-slate-950 border-4 border-slate-800 rounded-[36px] p-5 shadow-2xl relative">
                  {/* Phone Speaker Notch */}
                  <div className="w-16 h-3 bg-slate-800 rounded-full mx-auto mb-4"></div>

                  <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-800/80">
                    <div className="flex items-center gap-1.5">
                      <Smartphone className="w-4 h-4 text-sky-400" />
                      <span className="text-xs font-bold text-white font-mono">MAXDAX Living</span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400">CONNECT OK</span>
                  </div>

                  <p className="text-[11px] text-slate-400 mb-3">
                    Tap a mode to instantly transform the room's lighting and curtains:
                  </p>

                  {/* Mode Buttons */}
                  <div className="space-y-2">
                    <button
                      type="button"
                      onClick={() => setLivingMode('guest')}
                      className={`w-full p-3 rounded-2xl border text-left flex items-center justify-between transition-all ${
                        livingMode === 'guest'
                          ? 'bg-amber-950/80 border-amber-500 text-amber-200 shadow-lg ring-1 ring-amber-400/50'
                          : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <Users className={`w-4 h-4 ${livingMode === 'guest' ? 'text-amber-400' : 'text-slate-400'}`} />
                        <div>
                          <div className="text-xs font-bold text-white">Guest Mode</div>
                          <div className="text-[10px] text-slate-400">Warm 2700K &bull; 70% Curtains</div>
                        </div>
                      </div>
                      {livingMode === 'guest' && <span className="w-2 h-2 rounded-full bg-amber-400"></span>}
                    </button>

                    <button
                      type="button"
                      onClick={() => setLivingMode('task')}
                      className={`w-full p-3 rounded-2xl border text-left flex items-center justify-between transition-all ${
                        livingMode === 'task'
                          ? 'bg-sky-950/80 border-sky-400 text-sky-200 shadow-lg ring-1 ring-sky-400/50'
                          : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <Briefcase className={`w-4 h-4 ${livingMode === 'task' ? 'text-sky-400' : 'text-slate-400'}`} />
                        <div>
                          <div className="text-xs font-bold text-white">Task Mode</div>
                          <div className="text-[10px] text-slate-400">Crisp Daylight &bull; Blinds Open</div>
                        </div>
                      </div>
                      {livingMode === 'task' && <span className="w-2 h-2 rounded-full bg-sky-400"></span>}
                    </button>

                    <button
                      type="button"
                      onClick={() => setLivingMode('discussion')}
                      className={`w-full p-3 rounded-2xl border text-left flex items-center justify-between transition-all ${
                        livingMode === 'discussion'
                          ? 'bg-amber-950/60 border-amber-600 text-amber-200 shadow-lg ring-1 ring-amber-500/50'
                          : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <Coffee className={`w-4 h-4 ${livingMode === 'discussion' ? 'text-amber-500' : 'text-slate-400'}`} />
                        <div>
                          <div className="text-xs font-bold text-white">Discussion Mode</div>
                          <div className="text-[10px] text-slate-400">Soft Recessed Cove Ambience</div>
                        </div>
                      </div>
                      {livingMode === 'discussion' && <span className="w-2 h-2 rounded-full bg-amber-500"></span>}
                    </button>

                    <button
                      type="button"
                      onClick={() => setLivingMode('movie')}
                      className={`w-full p-3 rounded-2xl border text-left flex items-center justify-between transition-all ${
                        livingMode === 'movie'
                          ? 'bg-indigo-950/80 border-indigo-500 text-indigo-200 shadow-lg ring-1 ring-indigo-400/50'
                          : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <Film className={`w-4 h-4 ${livingMode === 'movie' ? 'text-indigo-400' : 'text-slate-400'}`} />
                        <div>
                          <div className="text-xs font-bold text-white">Movie Night</div>
                          <div className="text-[10px] text-slate-400">Cinematic Glow &bull; Blackouts Closed</div>
                        </div>
                      </div>
                      {livingMode === 'movie' && <span className="w-2 h-2 rounded-full bg-indigo-400"></span>}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* =========================================
            ROOM 2: MASTER BEDROOM (DIFFERENT PERSPECTIVE)
           ========================================= */}
        {activeArea === 'bedroom' && (
          <>
            <div className="relative flex-1 min-h-[320px] lg:min-h-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=85"
                alt="Modern Smart Bedroom Architecture"
                className={`w-full h-full object-cover transition-all duration-1000 ${
                  bedroomMode === 'morning'
                    ? 'brightness-[1.0] contrast-[1.1]'
                    : bedroomMode === 'reading'
                    ? 'brightness-[0.70] contrast-[1.2]'
                    : 'brightness-[0.25] contrast-[1.3]' // Good night mode
                }`}
              />

              {/* Dynamic Bedroom Atmosphere Overlay */}
              <div
                className="absolute inset-0 transition-all duration-1000 pointer-events-none"
                style={{
                  backgroundColor:
                    bedroomMode === 'morning'
                      ? 'rgba(251, 191, 36, 0.12)' // Morning sun warmth
                      : bedroomMode === 'reading'
                      ? 'rgba(245, 158, 11, 0.20)'
                      : 'rgba(15, 23, 42, 0.75)' // Night darkness
                }}
              ></div>

              {/* Motorized Bedroom Drapes */}
              <div
                className="absolute top-0 bottom-0 left-0 bg-slate-950/90 transition-all duration-1000 ease-in-out border-r border-slate-700/50 shadow-2xl flex items-center justify-center pointer-events-none"
                style={{
                  width:
                    bedroomMode === 'night'
                      ? '50%'
                      : bedroomMode === 'reading'
                      ? '25%'
                      : '6%' // Morning wakeup curtains open
                }}
              ></div>

              <div
                className="absolute top-0 bottom-0 right-0 bg-slate-950/90 transition-all duration-1000 ease-in-out border-l border-slate-700/50 shadow-2xl flex items-center justify-center pointer-events-none"
                style={{
                  width:
                    bedroomMode === 'night'
                      ? '50%'
                      : bedroomMode === 'reading'
                      ? '25%'
                      : '6%'
                }}
              ></div>

              {/* Live Room Status Badge */}
              <div className="absolute bottom-5 left-5 bg-slate-950/85 backdrop-blur-md border border-slate-700 px-4 py-2 rounded-2xl shadow-xl flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-sky-400 animate-pulse"></span>
                <div>
                  <div className="text-[10px] font-mono font-bold text-sky-400 uppercase">
                    BEDROOM PERSPECTIVE
                  </div>
                  <div className="text-xs font-bold text-white">
                    {bedroomMode === 'morning' && 'Morning Wakeup &bull; Curtains Glide Open & Sunlight Streams In'}
                    {bedroomMode === 'reading' && 'Reading Mode &bull; Cozy Focused Warm Beam'}
                    {bedroomMode === 'night' && 'Good Night &bull; Absolute Blackout & Gentle Night Glow'}
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Phone Mockup Controller for Bedroom */}
            <div className="w-full lg:w-96 bg-brand-surface border-t lg:border-t-0 lg:border-l border-slate-800 p-6 flex flex-col justify-center">
              <div className="max-w-xs mx-auto w-full">
                <div className="bg-slate-950 border-4 border-slate-800 rounded-[36px] p-5 shadow-2xl relative">
                  <div className="w-16 h-3 bg-slate-800 rounded-full mx-auto mb-4"></div>

                  <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-800/80">
                    <div className="flex items-center gap-1.5">
                      <Smartphone className="w-4 h-4 text-sky-400" />
                      <span className="text-xs font-bold text-white font-mono">Master Bedroom</span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400">ONLINE</span>
                  </div>

                  <p className="text-[11px] text-slate-400 mb-3">
                    Select a bedroom scene preset:
                  </p>

                  <div className="space-y-2.5">
                    <button
                      type="button"
                      onClick={() => setBedroomMode('morning')}
                      className={`w-full p-3 rounded-2xl border text-left flex items-center justify-between transition-all ${
                        bedroomMode === 'morning'
                          ? 'bg-amber-950/80 border-amber-400 text-amber-200 shadow-lg ring-1 ring-amber-400/50'
                          : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <Sun className={`w-4 h-4 ${bedroomMode === 'morning' ? 'text-amber-400' : 'text-slate-400'}`} />
                        <div>
                          <div className="text-xs font-bold text-white">Morning Wakeup</div>
                          <div className="text-[10px] text-slate-400">Curtains Open &bull; Sunlight In</div>
                        </div>
                      </div>
                      {bedroomMode === 'morning' && <span className="w-2 h-2 rounded-full bg-amber-400"></span>}
                    </button>

                    <button
                      type="button"
                      onClick={() => setBedroomMode('reading')}
                      className={`w-full p-3 rounded-2xl border text-left flex items-center justify-between transition-all ${
                        bedroomMode === 'reading'
                          ? 'bg-sky-950/80 border-sky-400 text-sky-200 shadow-lg ring-1 ring-sky-400/50'
                          : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <Coffee className={`w-4 h-4 ${bedroomMode === 'reading' ? 'text-sky-400' : 'text-slate-400'}`} />
                        <div>
                          <div className="text-xs font-bold text-white">Reading Mode</div>
                          <div className="text-[10px] text-slate-400">Restful Headboard Spot</div>
                        </div>
                      </div>
                      {bedroomMode === 'reading' && <span className="w-2 h-2 rounded-full bg-sky-400"></span>}
                    </button>

                    <button
                      type="button"
                      onClick={() => setBedroomMode('night')}
                      className={`w-full p-3 rounded-2xl border text-left flex items-center justify-between transition-all ${
                        bedroomMode === 'night'
                          ? 'bg-indigo-950/80 border-indigo-500 text-indigo-200 shadow-lg ring-1 ring-indigo-400/50'
                          : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <Moon className={`w-4 h-4 ${bedroomMode === 'night' ? 'text-indigo-400' : 'text-slate-400'}`} />
                        <div>
                          <div className="text-xs font-bold text-white">Good Night</div>
                          <div className="text-[10px] text-slate-400">Drapes Closed &bull; Nightglow</div>
                        </div>
                      </div>
                      {bedroomMode === 'night' && <span className="w-2 h-2 rounded-full bg-indigo-400"></span>}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* =========================================
            SCENE 3: EXTERIOR VILLA GATE & MOVING CAR CLIMAX
           ========================================= */}
        {activeArea === 'exterior' && (
          <>
            <div className="relative flex-1 min-h-[340px] lg:min-h-full overflow-hidden bg-gradient-to-b from-slate-950 via-[#0B1528] to-slate-950 flex flex-col justify-end p-6">
              {/* Architectural Villa Exterior Driveway Backdrop */}
              <img
                src="https://images.unsplash.com/photo-1613082390827-02e867518456?auto=format&fit=crop&w=1600&q=85"
                alt="Villa Driveway & Gate"
                className="absolute inset-0 w-full h-full object-cover brightness-[0.6] contrast-[1.1]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

              {/* Physical Gate Structure Layer */}
              <div className="relative w-full max-w-xl mx-auto h-44 flex items-end justify-between z-20">
                {/* Left Pillar */}
                <div className="w-10 sm:w-12 h-40 bg-gradient-to-r from-slate-800 to-slate-700 rounded-t border-t border-x border-slate-600 shadow-xl relative">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-3 bg-amber-500/80 rounded-full blur-[2px]"></div>
                </div>

                {/* Motorized Sliding Gate Leaf that moves smoothly */}
                <div
                  className="absolute bottom-1 left-12 right-12 h-36 border-2 border-slate-500 rounded-t-sm shadow-2xl transition-all duration-1000 ease-in-out flex items-center justify-evenly bg-slate-900/95 backdrop-blur-sm"
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
                  {[...Array(12)].map((_, i) => (
                    <div key={i} className="w-1.5 h-full bg-gradient-to-b from-slate-400 via-slate-600 to-slate-800 rounded-full opacity-80"></div>
                  ))}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-slate-950 border border-slate-700 rounded text-[9px] font-bold text-sky-400 font-mono">
                    MAXDAX AUTOMATION
                  </div>
                </div>

                {/* Right Pillar with Motor Housing */}
                <div className="w-10 sm:w-12 h-40 bg-gradient-to-l from-slate-800 to-slate-700 rounded-t border-t border-x border-slate-600 shadow-xl relative">
                  <div className={`absolute -top-4 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full transition-all duration-300 ${
                    gateAnimState === 'opening' || gateAnimState === 'closing'
                      ? 'bg-amber-400 shadow-[0_0_15px_#f59e0b] animate-ping-slow'
                      : 'bg-slate-700'
                  }`}></div>
                </div>
              </div>

              {/* Animated Vehicle Transiting Simulation */}
              {gateAnimState === 'transiting' && (
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 animate-in fade-in zoom-in duration-700">
                  <div className="flex items-center gap-3 bg-slate-950/95 border-2 border-sky-400 text-sky-300 px-6 py-2.5 rounded-full shadow-2xl animate-bounce">
                    <Car className="w-5 h-5 text-sky-400" />
                    <span className="text-xs font-bold tracking-wider uppercase font-mono">
                      Vehicle Entering Villa Driveway...
                    </span>
                  </div>
                </div>
              )}

              {/* Status Badge */}
              <div className="relative z-20 mt-4 max-w-xl mx-auto w-full bg-slate-950/85 backdrop-blur-md border border-slate-700 px-4 py-2 rounded-2xl shadow-xl flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-bold text-white font-mono">
                    {gateAnimState === 'closed' && 'Gate Closed & Perimeter Secure'}
                    {gateAnimState === 'opening' && 'Command Received &bull; Gate Opening...'}
                    {gateAnimState === 'open' && 'Gate Fully Open &bull; Driveway Clear'}
                    {gateAnimState === 'transiting' && 'Authorized Vehicle Passing Through Photocells'}
                    {gateAnimState === 'closing' && 'Vehicle Clear &bull; Auto-Closing Gate...'}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-sky-400 font-bold uppercase">
                  {gateAnimState}
                </span>
              </div>
            </div>

            {/* Mobile Phone Mockup Controller for Exterior Gate */}
            <div className="w-full lg:w-96 bg-brand-surface border-t lg:border-t-0 lg:border-l border-slate-800 p-6 flex flex-col justify-center">
              <div className="max-w-xs mx-auto w-full">
                <div className="bg-slate-950 border-4 border-slate-800 rounded-[36px] p-5 shadow-2xl relative">
                  <div className="w-16 h-3 bg-slate-800 rounded-full mx-auto mb-4"></div>

                  <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-800/80">
                    <div className="flex items-center gap-1.5">
                      <Smartphone className="w-4 h-4 text-amber-400" />
                      <span className="text-xs font-bold text-white font-mono">Gate Access</span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400">READY</span>
                  </div>

                  <p className="text-[11px] text-slate-400 mb-4">
                    Tap to trigger the full automated gate sequence:
                  </p>

                  <button
                    type="button"
                    onClick={runGateSequence}
                    disabled={gateAnimState !== 'closed'}
                    className={`w-full py-4 px-4 rounded-2xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xl transition-all ${
                      gateAnimState !== 'closed'
                        ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                        : 'bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-amber-500/20 active:scale-95 animate-pulse'
                    }`}
                  >
                    <Car className="w-5 h-5" />
                    <span>
                      {gateAnimState === 'closed' ? 'Simulate Car Arrival & Gate Open' : 'Sequence In Progress...'}
                    </span>
                  </button>

                  <p className="text-[10px] text-slate-500 mt-4 leading-relaxed text-center">
                    Simulates smartphone geofencing or RFID long-range transponder opening the motorized gate, vehicle entry, and auto-close.
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
