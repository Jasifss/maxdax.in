import React, { useState, useEffect, useRef } from 'react';
import {
  Smartphone,
  Tv,
  Lamp,
  Wind,
  Mic,
  Car,
  Droplets,
  Warehouse,
  Sparkles,
  Sun,
  Moon,
  Play,
  RotateCcw,
  CheckCircle2,
  Sliders,
  ShieldCheck,
  ChevronRight,
  Volume2,
  Eye,
  Check,
  Power
} from 'lucide-react';

export const AmbientLivingJourney: React.FC = () => {
  // Active Space: 1 = Living Room, 2 = Master Bedroom, 3 = Villa Exterior & Gate
  const [activeTab, setActiveTab] = useState<'living' | 'bedroom' | 'exterior'>('living');

  // =========================================================================
  // SCENE 1: LIVING ROOM STATES
  // =========================================================================
  // Modes: 'guest' (warm 2700K), 'task' (crisp white 4500K), 'reading' (reading lamp), 'movie' (curtains close + TV on + cyan/violet cove)
  const [livingMode, setLivingMode] = useState<'guest' | 'task' | 'reading' | 'movie'>('guest');
  const [curtainsClosedLiving, setCurtainsClosedLiving] = useState<boolean>(false);
  const [handTapActive, setHandTapActive] = useState<string | null>(null);

  // When switching to movie mode, automatically close curtains
  const triggerLivingMode = (mode: 'guest' | 'task' | 'reading' | 'movie') => {
    setHandTapActive(mode);
    setTimeout(() => setHandTapActive(null), 700);

    setLivingMode(mode);
    if (mode === 'movie') {
      setCurtainsClosedLiving(true);
    } else if (mode === 'task') {
      // Open curtains for natural daylight if in task mode
      setCurtainsClosedLiving(false);
    }
  };

  // =========================================================================
  // SCENE 2: BEDROOM STATES (Alexa Sleeping Mode)
  // =========================================================================
  const [bedroomSleepingMode, setBedroomSleepingMode] = useState<boolean>(false);
  const [curtainsClosedBedroom, setCurtainsClosedBedroom] = useState<boolean>(false);
  const [acRunning, setAcRunning] = useState<boolean>(false);
  const [alexaTriggered, setAlexaTriggered] = useState<boolean>(false);
  const [readingPendantOn, setReadingPendantOn] = useState<boolean>(true);

  const activateAlexaSleepingMode = () => {
    setAlexaTriggered(true);
    setTimeout(() => {
      setBedroomSleepingMode(true);
      setCurtainsClosedBedroom(true);
      setAcRunning(true);
      setReadingPendantOn(false);
      setTimeout(() => setAlexaTriggered(false), 2500);
    }, 600);
  };

  const resetBedroom = () => {
    setBedroomSleepingMode(false);
    setCurtainsClosedBedroom(false);
    setAcRunning(false);
    setReadingPendantOn(true);
    setAlexaTriggered(false);
  };

  // =========================================================================
  // SCENE 3: EXTERIOR VILLA, GARAGE, SPRINKLERS & GATE
  // =========================================================================
  const [garageOpen, setGarageOpen] = useState<boolean>(false);
  const [exteriorLights, setExteriorLights] = useState<boolean>(true);
  const [sprinklersActive, setSprinklersActive] = useState<boolean>(true);
  const [carDepartureState, setCarDepartureState] = useState<'idle' | 'opening_gate' | 'car_moving' | 'closing_gate' | 'completed'>('idle');

  const runCarDepartureSequence = () => {
    if (carDepartureState !== 'idle' && carDepartureState !== 'completed') return;

    // Step 1: Flasher alerts & Gate starts opening
    setCarDepartureState('opening_gate');

    // Step 2: Gate is open -> Car starts driving out
    setTimeout(() => {
      setCarDepartureState('car_moving');

      // Step 3: Car has passed -> Gate automatically starts closing
      setTimeout(() => {
        setCarDepartureState('closing_gate');

        // Step 4: Gate fully closed & secured
        setTimeout(() => {
          setCarDepartureState('completed');
        }, 2600);
      }, 3000);
    }, 2000);
  };

  const resetExterior = () => {
    setCarDepartureState('idle');
    setGarageOpen(false);
    setSprinklersActive(true);
    setExteriorLights(true);
  };

  return (
    <div className="bg-brand-surface border border-slate-800 rounded-3xl overflow-hidden shadow-2xl transition-all">
      {/* =====================================================================
          TOP NAVIGATION BAR: 3 ARCHITECTURAL SPACES
          ===================================================================== */}
      <div className="bg-slate-950/95 border-b border-slate-800 px-4 sm:px-8 py-4 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-sky-400">
              Interactive Architectural Automation &bull; Live Simulation
            </span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
            {activeTab === 'living' && '01. Grand Living Suite & Home Cinema'}
            {activeTab === 'bedroom' && '02. Master Suite & Alexa Sleep Ecosystem'}
            {activeTab === 'exterior' && '03. Villa Landscape, Garage & Automated Gate'}
          </h3>
        </div>

        {/* Space Navigation Tabs */}
        <div className="flex items-center gap-1.5 bg-slate-900 p-1.5 rounded-2xl border border-slate-800">
          <button
            type="button"
            onClick={() => setActiveTab('living')}
            className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'living'
                ? 'bg-gradient-to-r from-sky-600 to-indigo-600 text-white shadow-lg'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Tv className="w-3.5 h-3.5" />
            <span>Living & Cinema</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('bedroom')}
            className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'bedroom'
                ? 'bg-gradient-to-r from-sky-600 to-indigo-600 text-white shadow-lg'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Mic className="w-3.5 h-3.5" />
            <span>Bedroom & Alexa</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('exterior')}
            className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'exterior'
                ? 'bg-gradient-to-r from-sky-600 to-indigo-600 text-white shadow-lg'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Car className="w-3.5 h-3.5" />
            <span>Landscape & Gate</span>
          </button>
        </div>
      </div>

      {/* =====================================================================
          MAIN INTERACTIVE CONTAINER
          ===================================================================== */}
      <div className="relative min-h-[560px] lg:min-h-[640px] bg-slate-950 flex flex-col xl:flex-row items-stretch overflow-hidden">
        
        {/* ===================================================================
            SPACE 1: GRAND LIVING ROOM & HOME CINEMA
            =================================================================== */}
        {activeTab === 'living' && (
          <>
            {/* Visual Living Room Canvas */}
            <div className="relative flex-1 min-h-[440px] lg:min-h-[580px] bg-black overflow-hidden select-none">
              {/* Ultra-High-End Modern Living Room Background */}
              <img
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=85"
                alt="Architectural Living Room"
                className={`w-full h-full object-cover transition-all duration-1000 ${
                  livingMode === 'guest'
                    ? 'brightness-[0.95] contrast-[1.08] saturate-[1.2]'
                    : livingMode === 'task'
                    ? 'brightness-[1.18] contrast-[1.15] saturate-[0.98]'
                    : livingMode === 'reading'
                    ? 'brightness-[0.72] contrast-[1.2] saturate-[1.1]'
                    : 'brightness-[0.4] contrast-[1.3] saturate-[1.2]' // Movie Mode
                }`}
              />

              {/* Dynamic Overall Ambient Light Glow Filter */}
              <div
                className="absolute inset-0 pointer-events-none transition-all duration-1000"
                style={{
                  backgroundColor:
                    livingMode === 'guest'
                      ? 'rgba(245, 158, 11, 0.22)' // 2700K Warm Golden Amber
                      : livingMode === 'task'
                      ? 'rgba(240, 249, 255, 0.12)' // 4500K Pure Daylight White
                      : livingMode === 'reading'
                      ? 'rgba(217, 119, 6, 0.18)' // Intimate focused warm tone
                      : 'rgba(30, 27, 75, 0.55)', // Deep Cinema Indigo
                  mixBlendMode: livingMode === 'movie' ? 'multiply' : 'screen'
                }}
              ></div>

              {/* Ceiling Cove Lighting Strip */}
              <div
                className="absolute top-0 inset-x-0 h-14 pointer-events-none blur-lg transition-all duration-1000"
                style={{
                  backgroundColor:
                    livingMode === 'guest'
                      ? 'rgba(251, 191, 36, 0.55)'
                      : livingMode === 'task'
                      ? 'rgba(255, 255, 255, 0.45)'
                      : livingMode === 'reading'
                      ? 'rgba(245, 158, 11, 0.25)'
                      : 'rgba(129, 140, 248, 0.75)' // Glowing Cyan/Violet Cove in Movie Mode
                }}
              ></div>

              {/* ---------------------------------------------------------------
                  85" HOME CINEMA DISPLAY (POWERS ON IN MOVIE MODE)
                  --------------------------------------------------------------- */}
              <div
                className={`absolute top-[18%] left-[28%] w-[42%] aspect-[16/9] rounded-xl overflow-hidden border-4 transition-all duration-1000 z-10 shadow-2xl flex items-center justify-center ${
                  livingMode === 'movie'
                    ? 'border-indigo-400/90 shadow-[0_0_60px_rgba(99,102,241,0.6)] scale-100 opacity-100'
                    : 'border-slate-800 bg-black/95 scale-[0.98] opacity-80'
                }`}
              >
                {livingMode === 'movie' ? (
                  <div className="relative w-full h-full bg-slate-950 flex items-center justify-center overflow-hidden">
                    {/* Animated Cinematic Movie Visual */}
                    <img
                      src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80"
                      alt="4K Movie Screen"
                      className="w-full h-full object-cover animate-pulse duration-[3000ms]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-3">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
                        <span className="text-[10px] font-mono font-bold text-white uppercase tracking-wider">
                          4K DOLBY ATMOS &bull; CINEMA PLAYING
                        </span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center p-2 text-slate-600 font-mono text-[10px]">
                    <Tv className="w-6 h-6 mx-auto mb-1 opacity-40 text-slate-500" />
                    <span>OLED DISPLAY &bull; STANDBY</span>
                  </div>
                )}
              </div>

              {/* ---------------------------------------------------------------
                  READING LAMP (TURNS ON SPECIFICALLY IN READING MODE)
                  --------------------------------------------------------------- */}
              <div className="absolute top-[28%] right-[14%] z-10 flex flex-col items-center pointer-events-none">
                {/* Floor Lamp Top Shade */}
                <div
                  className={`w-12 h-8 rounded-t-full border border-amber-300/40 transition-all duration-700 ${
                    livingMode === 'reading'
                      ? 'bg-amber-300 shadow-[0_0_40px_rgba(251,191,36,0.9)]'
                      : 'bg-stone-800'
                  }`}
                ></div>
                {/* Lamp Pole */}
                <div className="w-1 h-36 bg-stone-700"></div>

                {/* Downward Focused Spotlight Beam Cone */}
                {livingMode === 'reading' && (
                  <div
                    className="absolute top-6 w-44 h-56 pointer-events-none animate-in fade-in duration-700"
                    style={{
                      background: 'radial-gradient(ellipse at top, rgba(251, 191, 36, 0.65) 0%, rgba(245, 158, 11, 0.15) 60%, transparent 100%)',
                      clipPath: 'polygon(35% 0%, 65% 0%, 100% 100%, 0% 100%)'
                    }}
                  ></div>
                )}
              </div>

              {/* ---------------------------------------------------------------
                  REALISTIC MOTORIZED BLACKOUT CURTAINS
                  (Glides smoothly closed in Movie Mode or via toggle)
                  --------------------------------------------------------------- */}
              <div className="absolute top-4 bottom-14 right-2 w-56 sm:w-72 rounded-2xl overflow-hidden border-2 border-slate-800 shadow-2xl pointer-events-none z-20 flex">
                {/* Window Exterior Landscape Glass */}
                <div className="absolute inset-0 z-0">
                  <img
                    src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=600&q=80"
                    alt="Window Exterior View"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-slate-950/30"></div>
                </div>

                {/* Motor Track Top Housing */}
                <div className="absolute top-0 inset-x-0 h-4 bg-slate-900 border-b border-slate-700 z-30 flex items-center justify-between px-2 text-[8px] font-mono text-slate-300">
                  <span>SOMFY 24V MOTOR</span>
                  <span className={curtainsClosedLiving ? 'text-amber-400' : 'text-emerald-400'}>
                    {curtainsClosedLiving ? 'CLOSED 100%' : 'OPEN 0%'}
                  </span>
                </div>

                {/* Left Motorized Curtain Drape */}
                <div
                  className="h-full bg-gradient-to-r from-stone-900 via-stone-800 to-stone-900 border-r border-stone-700/80 shadow-2xl transition-all duration-1000 ease-in-out relative z-20 flex justify-evenly"
                  style={{
                    width: curtainsClosedLiving ? '50%' : '8%'
                  }}
                >
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="w-0.5 h-full bg-stone-950/70 opacity-60"></div>
                  ))}
                </div>

                {/* Right Motorized Curtain Drape */}
                <div
                  className="h-full ml-auto bg-gradient-to-l from-stone-900 via-stone-800 to-stone-900 border-l border-stone-700/80 shadow-2xl transition-all duration-1000 ease-in-out relative z-20 flex justify-evenly"
                  style={{
                    width: curtainsClosedLiving ? '50%' : '8%'
                  }}
                >
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="w-0.5 h-full bg-stone-950/70 opacity-60"></div>
                  ))}
                </div>
              </div>

              {/* Status Pill Badge */}
              <div className="absolute bottom-4 left-4 z-20 bg-slate-950/90 backdrop-blur-md border border-slate-700/80 px-4 py-2 rounded-2xl shadow-2xl">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    {livingMode === 'guest' && 'Guest Mode &bull; Warm 2700K Amber Glow'}
                    {livingMode === 'task' && 'Task Mode &bull; 4500K Focused White Daylight'}
                    {livingMode === 'reading' && 'Reading Mode &bull; Side Armchair Spotlight'}
                    {livingMode === 'movie' && 'Movie Mode &bull; TV Screen Active & Blackout Drapes Closed'}
                  </span>
                </div>
                <div className="text-[10px] text-slate-400 mt-0.5 font-mono">
                  Curtains: {curtainsClosedLiving ? '100% Closed' : 'Retracted Open'} &bull; Light Level: {livingMode === 'task' ? '650 Lux' : livingMode === 'guest' ? '280 Lux' : livingMode === 'reading' ? '180 Lux' : '35 Lux'}
                </div>
              </div>
            </div>

            {/* Right: Photorealistic Interactive Smartphone Controller */}
            <div className="w-full xl:w-[440px] bg-slate-900/95 border-t xl:border-t-0 xl:border-l border-slate-800 p-5 sm:p-6 flex flex-col justify-between items-center">
              <div className="w-full">
                <div className="text-center mb-4">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-sky-400 block mb-1">
                    Virtual Smartphone Scene Controller
                  </span>
                  <p className="text-xs text-slate-300">
                    Tap the modes on the phone screen to trigger real-time lighting, TV, and motorized drapery:
                  </p>
                </div>

                {/* -------------------------------------------------------------
                    IPHONE HARDWARE MOCKUP WITH ACTIVE TOUCH SCREEN
                    ------------------------------------------------------------- */}
                <div className="w-72 sm:w-80 mx-auto bg-slate-950 rounded-[44px] p-3.5 border-4 border-slate-700 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative">
                  {/* Dynamic Island Pill */}
                  <div className="w-24 h-4 bg-black rounded-full mx-auto mb-2 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-slate-800 ml-auto mr-2"></div>
                  </div>

                  {/* Phone Screen Glass UI */}
                  <div className="bg-slate-900 rounded-[32px] p-4 border border-slate-800 shadow-inner space-y-3 relative overflow-hidden">
                    {/* Header */}
                    <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                      <div>
                        <div className="text-[10px] font-bold text-sky-400 font-mono">MAXDAX SMART LIVING</div>
                        <div className="text-xs font-bold text-white">Living Room Controller</div>
                      </div>
                      <span className="text-[9px] font-mono text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded-full border border-emerald-800">
                        ONLINE
                      </span>
                    </div>

                    {/* Mode Buttons on Mobile Screen */}
                    <div className="space-y-2">
                      {/* 1. GUEST MODE (WARM LIGHT) */}
                      <button
                        type="button"
                        onClick={() => triggerLivingMode('guest')}
                        className={`w-full p-2.5 rounded-xl border text-left flex items-center justify-between transition-all relative ${
                          livingMode === 'guest'
                            ? 'bg-amber-950/80 border-amber-400 text-amber-200 shadow-lg ring-1 ring-amber-400'
                            : 'bg-slate-950/80 border-slate-800 text-slate-300 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <Sun className="w-4 h-4 text-amber-400" />
                          <div>
                            <div className="text-xs font-bold">Guest Mode</div>
                            <div className="text-[9px] text-slate-400">Warm 2700K Ambient Glow</div>
                          </div>
                        </div>
                        {livingMode === 'guest' && <Check className="w-4 h-4 text-amber-400" />}

                        {/* Hand Tap Visual Feedback */}
                        {handTapActive === 'guest' && (
                          <div className="absolute right-4 w-7 h-7 rounded-full bg-amber-400/50 animate-ping pointer-events-none"></div>
                        )}
                      </button>

                      {/* 2. TASK MODE (CRISP WHITE DAYLIGHT) */}
                      <button
                        type="button"
                        onClick={() => triggerLivingMode('task')}
                        className={`w-full p-2.5 rounded-xl border text-left flex items-center justify-between transition-all relative ${
                          livingMode === 'task'
                            ? 'bg-sky-950/80 border-sky-400 text-sky-200 shadow-lg ring-1 ring-sky-400'
                            : 'bg-slate-950/80 border-slate-800 text-slate-300 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <Sparkles className="w-4 h-4 text-sky-400" />
                          <div>
                            <div className="text-xs font-bold">Task Mode</div>
                            <div className="text-[9px] text-slate-400">Crisp Daylight 4500K</div>
                          </div>
                        </div>
                        {livingMode === 'task' && <Check className="w-4 h-4 text-sky-400" />}

                        {handTapActive === 'task' && (
                          <div className="absolute right-4 w-7 h-7 rounded-full bg-sky-400/50 animate-ping pointer-events-none"></div>
                        )}
                      </button>

                      {/* 3. READING MODE (READING LAMP BEAM) */}
                      <button
                        type="button"
                        onClick={() => triggerLivingMode('reading')}
                        className={`w-full p-2.5 rounded-xl border text-left flex items-center justify-between transition-all relative ${
                          livingMode === 'reading'
                            ? 'bg-amber-950/80 border-amber-500 text-amber-200 shadow-lg ring-1 ring-amber-500'
                            : 'bg-slate-950/80 border-slate-800 text-slate-300 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <Lamp className="w-4 h-4 text-amber-500" />
                          <div>
                            <div className="text-xs font-bold">Reading Mode</div>
                            <div className="text-[9px] text-slate-400">Side Floor Lamp Cone Active</div>
                          </div>
                        </div>
                        {livingMode === 'reading' && <Check className="w-4 h-4 text-amber-500" />}

                        {handTapActive === 'reading' && (
                          <div className="absolute right-4 w-7 h-7 rounded-full bg-amber-500/50 animate-ping pointer-events-none"></div>
                        )}
                      </button>

                      {/* 4. MOVIE / GAME MODE (TV ON + CURTAINS CLOSE + CINEMA COVE) */}
                      <button
                        type="button"
                        onClick={() => triggerLivingMode('movie')}
                        className={`w-full p-2.5 rounded-xl border text-left flex items-center justify-between transition-all relative ${
                          livingMode === 'movie'
                            ? 'bg-indigo-950/90 border-indigo-400 text-indigo-200 shadow-lg ring-1 ring-indigo-400'
                            : 'bg-slate-950/80 border-slate-800 text-slate-300 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <Tv className="w-4 h-4 text-indigo-400" />
                          <div>
                            <div className="text-xs font-bold">Movie / Game Mode</div>
                            <div className="text-[9px] text-slate-400">TV ON &bull; Blackout Curtains Close</div>
                          </div>
                        </div>
                        {livingMode === 'movie' && <Check className="w-4 h-4 text-indigo-400" />}

                        {handTapActive === 'movie' && (
                          <div className="absolute right-4 w-7 h-7 rounded-full bg-indigo-400/50 animate-ping pointer-events-none"></div>
                        )}
                      </button>
                    </div>

                    {/* Quick Motorized Curtain Slider Toggle on Phone */}
                    <div className="pt-2 border-t border-slate-800">
                      <div className="flex items-center justify-between text-[10px] text-slate-300 mb-1">
                        <span className="font-bold flex items-center gap-1">
                          <Sliders className="w-3 h-3 text-sky-400" />
                          Motorized Window Curtains:
                        </span>
                        <span className="font-mono text-sky-400">
                          {curtainsClosedLiving ? '100% Closed' : 'Open'}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => setCurtainsClosedLiving(false)}
                          className={`py-1 rounded-lg text-[10px] font-bold border transition-all ${
                            !curtainsClosedLiving
                              ? 'bg-sky-600 border-sky-400 text-white'
                              : 'bg-slate-950 border-slate-800 text-slate-400'
                          }`}
                        >
                          Open Curtains
                        </button>
                        <button
                          type="button"
                          onClick={() => setCurtainsClosedLiving(true)}
                          className={`py-1 rounded-lg text-[10px] font-bold border transition-all ${
                            curtainsClosedLiving
                              ? 'bg-sky-600 border-sky-400 text-white'
                              : 'bg-slate-950 border-slate-800 text-slate-400'
                          }`}
                        >
                          Close Curtains
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 text-[10px] font-mono text-slate-500 text-center">
                MAXDAX &bull; eGlu Touch Protocol &bull; RF Synchronized
              </div>
            </div>
          </>
        )}

        {/* ===================================================================
            SPACE 2: MASTER BEDROOM & ALEXA SLEEPING ECOSYSTEM
            =================================================================== */}
        {activeTab === 'bedroom' && (
          <>
            {/* Visual Master Bedroom Canvas */}
            <div className="relative flex-1 min-h-[440px] lg:min-h-[580px] bg-black overflow-hidden select-none">
              {/* Luxury Master Bedroom Background */}
              <img
                src="https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1800&q=85"
                alt="Luxury Master Bedroom"
                className={`w-full h-full object-cover transition-all duration-1000 ${
                  bedroomSleepingMode
                    ? 'brightness-[0.38] contrast-[1.25] saturate-[0.85]' // Deep dimmed night
                    : 'brightness-[1.05] contrast-[1.08] saturate-[1.1]' // Bright day/evening
                }`}
              />

              {/* Ambient Glow / Darkness Overlay */}
              <div
                className="absolute inset-0 pointer-events-none transition-all duration-1000"
                style={{
                  backgroundColor: bedroomSleepingMode
                    ? 'rgba(15, 23, 42, 0.65)' // Deep night dark
                    : 'rgba(251, 191, 36, 0.12)', // Warm daytime comfort
                  mixBlendMode: bedroomSleepingMode ? 'multiply' : 'screen'
                }}
              ></div>

              {/* ---------------------------------------------------------------
                  WALL-MOUNTED INVERTER AC UNIT WITH DISPLAY & AIRFLOW BREEZE
                  --------------------------------------------------------------- */}
              <div className="absolute top-6 left-[32%] z-20 flex flex-col items-center">
                {/* Modern AC Body */}
                <div className="w-56 sm:w-64 h-14 bg-gradient-to-b from-stone-100 to-stone-300 rounded-lg shadow-2xl border border-stone-400/60 p-2 flex items-center justify-between">
                  <div className="text-[8px] font-mono font-bold text-stone-600 pl-2">
                    DAIKIN VRV INVERTER
                  </div>
                  {/* Digital Temperature LED Display */}
                  <div className="flex items-center gap-1 bg-black/80 px-2 py-0.5 rounded text-[10px] font-mono font-bold text-cyan-300 border border-cyan-800">
                    <Wind className="w-3 h-3 text-cyan-400 animate-spin" />
                    <span>{acRunning ? '22°C COOL' : 'OFF'}</span>
                  </div>
                </div>

                {/* Animated Cool Airflow Waves Streaming Down */}
                {acRunning && (
                  <div className="w-52 h-36 pointer-events-none flex justify-around overflow-hidden mt-1 opacity-70">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="w-1.5 h-full bg-gradient-to-b from-cyan-400 via-sky-300 to-transparent rounded-full animate-bounce"
                        style={{
                          animationDelay: `${i * 180}ms`,
                          animationDuration: '1.2s'
                        }}
                      ></div>
                    ))}
                  </div>
                )}
              </div>

              {/* ---------------------------------------------------------------
                  BEDSIDE DESIGNER PENDANT LIGHT
                  --------------------------------------------------------------- */}
              <div className="absolute top-[34%] left-[18%] z-10 flex flex-col items-center pointer-events-none">
                <div className="w-0.5 h-28 bg-stone-500"></div>
                <div
                  className={`w-9 h-9 rounded-full border transition-all duration-700 ${
                    readingPendantOn
                      ? 'bg-amber-300 border-amber-200 shadow-[0_0_50px_rgba(251,191,36,0.9)]'
                      : 'bg-stone-800 border-stone-700'
                  }`}
                ></div>
              </div>

              {/* ---------------------------------------------------------------
                  MOTORIZED BEDROOM CURTAINS (100% BLACKOUT IN SLEEP MODE)
                  --------------------------------------------------------------- */}
              <div className="absolute top-6 bottom-14 right-4 w-60 sm:w-80 rounded-2xl overflow-hidden border-2 border-slate-800 shadow-2xl pointer-events-none z-20 flex">
                {/* Exterior Night Glass View */}
                <div className="absolute inset-0 z-0">
                  <img
                    src="https://images.unsplash.com/photo-1509114397022-ed747cca3f65?auto=format&fit=crop&w=600&q=80"
                    alt="Night Sky Landscape"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-slate-950/40"></div>
                </div>

                {/* Left Curtain */}
                <div
                  className="h-full bg-gradient-to-r from-stone-900 via-stone-800 to-stone-900 border-r border-stone-700/80 shadow-2xl transition-all duration-1000 ease-in-out relative z-20 flex justify-evenly"
                  style={{
                    width: curtainsClosedBedroom ? '50%' : '10%'
                  }}
                >
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="w-0.5 h-full bg-stone-950/70 opacity-60"></div>
                  ))}
                </div>

                {/* Right Curtain */}
                <div
                  className="h-full ml-auto bg-gradient-to-l from-stone-900 via-stone-800 to-stone-900 border-l border-stone-700/80 shadow-2xl transition-all duration-1000 ease-in-out relative z-20 flex justify-evenly"
                  style={{
                    width: curtainsClosedBedroom ? '50%' : '10%'
                  }}
                >
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="w-0.5 h-full bg-stone-950/70 opacity-60"></div>
                  ))}
                </div>
              </div>

              {/* Pulsating Alexa Wave Toast */}
              {alexaTriggered && (
                <div className="absolute top-6 inset-x-8 sm:inset-x-24 z-30 bg-slate-950/95 border-2 border-cyan-400 p-4 rounded-2xl shadow-[0_0_40px_rgba(6,182,212,0.6)] flex items-center justify-between animate-in fade-in zoom-in duration-300">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-cyan-500/20 border border-cyan-400 flex items-center justify-center">
                      <Mic className="w-5 h-5 text-cyan-300 animate-pulse" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">"Alexa, Sleeping Mode Activated"</div>
                      <div className="text-[10px] text-cyan-300">
                        Closing Blackout Drapes &bull; Starting Inverter AC at 22°C &bull; Dimming Lights to 5%
                      </div>
                    </div>
                  </div>
                  <span className="text-[9px] font-mono text-cyan-400 border border-cyan-700 px-2 py-0.5 rounded-full">
                    SMART HOME MESH
                  </span>
                </div>
              )}

              {/* Status Badge */}
              <div className="absolute bottom-4 left-4 z-20 bg-slate-950/90 backdrop-blur-md border border-slate-700/80 px-4 py-2.5 rounded-2xl shadow-2xl">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    {bedroomSleepingMode
                      ? 'Sleep Sanctuary &bull; Blackout Curtains Closed & AC 22°C'
                      : 'Daytime Bedroom &bull; Ambient Light & Daylight Vista'}
                  </span>
                </div>
                <div className="text-[10px] text-slate-400 mt-1 font-mono">
                  Curtains: {curtainsClosedBedroom ? '100% Blackout' : 'Open'} &bull; Climate: {acRunning ? '22°C Active (Whisper Fan)' : 'Standby'} &bull; Lights: {bedroomSleepingMode ? '5% Dimmed' : '100%'}
                </div>
              </div>
            </div>

            {/* Right: Alexa Voice Hub & Manual Ecosystem Panel */}
            <div className="w-full xl:w-[440px] bg-slate-900/95 border-t xl:border-t-0 xl:border-l border-slate-800 p-5 sm:p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 mb-5 border-b border-slate-800">
                  <div>
                    <span className="text-xs font-bold text-white uppercase tracking-wider block">
                      Voice & Ecosystem Controller
                    </span>
                    <span className="text-[11px] text-slate-400">
                      Trigger the Alexa Sleeping Mode command:
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950 px-2.5 py-1 rounded-full border border-cyan-800">
                    AMAZON ALEXA / SIRI
                  </span>
                </div>

                {/* 1. HERO ALEXA ONE-TAP VOICE TRIGGER CARD */}
                <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950/40 border-2 border-cyan-500/60 rounded-3xl p-5 shadow-2xl mb-6 relative overflow-hidden group">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-cyan-400 animate-ping"></div>
                      <span className="text-xs font-mono font-bold text-cyan-300 uppercase">
                        Voice Assistant Trigger
                      </span>
                    </div>
                    <Volume2 className="w-4 h-4 text-cyan-400" />
                  </div>

                  <h4 className="text-base font-extrabold text-white mb-1">
                    "Alexa, Good Night / Sleeping Mode"
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    Instantly closes all window curtains, powers on the AC cooling cycle at 22°C, and smoothly dims all bedroom lights into deep restful silence.
                  </p>

                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={activateAlexaSleepingMode}
                      className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-600 hover:from-cyan-400 hover:to-sky-500 text-slate-950 font-black text-xs transition-all shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2"
                    >
                      <Mic className="w-4 h-4" />
                      <span>Trigger "Alexa Sleeping Mode"</span>
                    </button>

                    <button
                      type="button"
                      onClick={resetBedroom}
                      className="py-3 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold transition-all"
                      title="Reset Bedroom"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* 2. MANUAL OVERRIDE TILES */}
                <div className="space-y-3">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
                    Direct Device Modulation
                  </span>

                  {/* Motorized Curtain Toggle */}
                  <div className="bg-slate-950 p-3.5 rounded-2xl border border-slate-800 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-white">Motorized Curtains</div>
                      <div className="text-[10px] text-slate-400">Somfy Acoustic Blackout Track</div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setCurtainsClosedBedroom(!curtainsClosedBedroom)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                        curtainsClosedBedroom
                          ? 'bg-sky-600 text-white'
                          : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      {curtainsClosedBedroom ? 'Closed (100%)' : 'Open (0%)'}
                    </button>
                  </div>

                  {/* Inverter AC Toggle */}
                  <div className="bg-slate-950 p-3.5 rounded-2xl border border-slate-800 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-white">Daikin Inverter AC</div>
                      <div className="text-[10px] text-slate-400">22°C Whisper Flow Integration</div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setAcRunning(!acRunning)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                        acRunning
                          ? 'bg-cyan-500 text-slate-950 font-black'
                          : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      {acRunning ? 'ON (22°C)' : 'OFF'}
                    </button>
                  </div>

                  {/* Bedside Reading Lamp Toggle */}
                  <div className="bg-slate-950 p-3.5 rounded-2xl border border-slate-800 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-white">Bedside Sphere Pendant</div>
                      <div className="text-[10px] text-slate-400">2400K Warm Filament Glow</div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setReadingPendantOn(!readingPendantOn)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                        readingPendantOn
                          ? 'bg-amber-500 text-slate-950 font-black'
                          : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      {readingPendantOn ? 'ON' : 'OFF'}
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800 text-[10px] font-mono text-slate-500 text-center">
                MAXDAX Cloud &bull; Alexa / Google Assistant / Apple HomeKit
              </div>
            </div>
          </>
        )}

        {/* ===================================================================
            SPACE 3: VILLA EXTERIOR, GARAGE, SPRINKLERS & AUTOMATED GATE
            =================================================================== */}
        {activeTab === 'exterior' && (
          <>
            {/* Visual Villa Exterior Canvas */}
            <div className="relative flex-1 min-h-[460px] lg:min-h-[580px] bg-black overflow-hidden select-none">
              {/* Luxury Architectural Villa Exterior Background */}
              <img
                src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1800&q=85"
                alt="Luxury Modern Villa Facade"
                className={`w-full h-full object-cover transition-all duration-1000 ${
                  exteriorLights
                    ? 'brightness-[0.9] contrast-[1.15]'
                    : 'brightness-[0.5] contrast-[1.2]'
                }`}
              />

              {/* Twilight Atmosphere Night Overlay */}
              <div className="absolute inset-0 bg-slate-950/30 pointer-events-none"></div>

              {/* ---------------------------------------------------------------
                  MOTORIZED GARAGE DOOR (Rolls open/closed)
                  --------------------------------------------------------------- */}
              <div className="absolute bottom-[20%] left-[8%] w-48 sm:w-56 h-36 bg-slate-900/90 rounded-t-xl border-2 border-slate-700/80 shadow-2xl overflow-hidden z-10 flex flex-col justify-end">
                {/* Garage Interior when open */}
                <div className="absolute inset-0 bg-stone-900 p-2 flex flex-col items-center justify-center">
                  <div className="text-[9px] font-mono text-amber-400 font-bold mb-1">GARAGE BAY 01</div>
                  <Car className="w-10 h-10 text-stone-400" />
                </div>

                {/* Motorized Sectional Shutter Leaf */}
                <div
                  className="w-full bg-gradient-to-b from-stone-800 via-stone-700 to-stone-900 border-t-2 border-stone-500 transition-all duration-1000 ease-in-out relative z-20 flex flex-col justify-between"
                  style={{
                    height: garageOpen ? '15%' : '100%'
                  }}
                >
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="w-full h-0.5 bg-stone-950/80"></div>
                  ))}
                  <div className="text-[8px] font-mono text-center text-stone-400 pb-1">
                    {garageOpen ? 'OPEN' : 'ROLLING SHUTTER CLOSED'}
                  </div>
                </div>
              </div>

              {/* ---------------------------------------------------------------
                  LUSH LAWN WITH ANIMATED WATER SPRINKLERS
                  --------------------------------------------------------------- */}
              <div className="absolute bottom-2 left-[32%] w-64 sm:w-80 h-28 pointer-events-none z-10">
                {sprinklersActive && (
                  <div className="relative w-full h-full">
                    {/* Sprinkler 1 */}
                    <div className="absolute bottom-2 left-6 flex flex-col items-center">
                      <div className="w-2.5 h-3 bg-stone-800 rounded-t border border-stone-600"></div>
                      {/* Water Arc Animation */}
                      <div className="w-24 h-16 border-t-2 border-l-2 border-cyan-400/80 rounded-tl-full opacity-80 animate-ping"></div>
                    </div>

                    {/* Sprinkler 2 */}
                    <div className="absolute bottom-4 left-32 flex flex-col items-center">
                      <div className="w-2.5 h-3 bg-stone-800 rounded-t border border-stone-600"></div>
                      <div className="w-24 h-16 border-t-2 border-r-2 border-cyan-400/80 rounded-tr-full opacity-80 animate-ping" style={{ animationDelay: '300ms' }}></div>
                    </div>

                    {/* Sprinkler 3 */}
                    <div className="absolute bottom-2 right-8 flex flex-col items-center">
                      <div className="w-2.5 h-3 bg-stone-800 rounded-t border border-stone-600"></div>
                      <div className="w-24 h-16 border-t-2 border-l-2 border-cyan-400/80 rounded-tl-full opacity-80 animate-ping" style={{ animationDelay: '600ms' }}></div>
                    </div>
                  </div>
                )}
              </div>

              {/* ---------------------------------------------------------------
                  LUXURY CAR WITH SMOOTH DRIVE-OUT TRANSIT ANIMATION
                  --------------------------------------------------------------- */}
              <div
                className={`absolute bottom-4 z-20 transition-all duration-[2800ms] ease-in-out flex items-center ${
                  carDepartureState === 'idle' || carDepartureState === 'opening_gate'
                    ? 'left-[16%] opacity-100 scale-90'
                    : carDepartureState === 'car_moving'
                    ? 'left-[70%] opacity-100 scale-100'
                    : 'left-[105%] opacity-0 scale-105' // Driven away
                }`}
              >
                {/* Car Silhouette with Headlights */}
                <div className="relative bg-slate-950 p-2 rounded-2xl border-2 border-slate-700 shadow-2xl flex items-center gap-2">
                  <Car className="w-8 h-8 text-white" />
                  <div className="text-[10px] font-mono font-bold text-sky-400 pr-1">
                    MERCEDES-BENZ
                  </div>
                  {/* Glowing Headlight Beam */}
                  <div
                    className="absolute -right-16 top-1/2 -translate-y-1/2 w-20 h-10 pointer-events-none"
                    style={{
                      background: 'radial-gradient(ellipse at left, rgba(255, 255, 255, 0.8) 0%, rgba(56, 189, 248, 0.2) 70%, transparent 100%)'
                    }}
                  ></div>
                </div>
              </div>

              {/* ---------------------------------------------------------------
                  HEAVY MOTORIZED SLIDING VILLA ENTRANCE GATE
                  --------------------------------------------------------------- */}
              <div className="absolute bottom-0 right-0 w-64 sm:w-80 h-36 border-t-2 border-slate-700 z-30 pointer-events-none overflow-hidden">
                {/* Yellow Safety Warning Flasher Light on Gate Pillar */}
                <div className="absolute top-2 right-4 flex items-center gap-1.5 z-40 bg-slate-950/90 border border-slate-700 px-2 py-0.5 rounded-lg">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      carDepartureState === 'opening_gate' || carDepartureState === 'car_moving' || carDepartureState === 'closing_gate'
                        ? 'bg-amber-400 animate-ping'
                        : 'bg-stone-600'
                    }`}
                  ></div>
                  <span className="text-[8px] font-mono font-bold text-amber-400">
                    {carDepartureState === 'opening_gate'
                      ? 'GATE OPENING'
                      : carDepartureState === 'car_moving'
                      ? 'TRANSIT IN PROGRESS'
                      : carDepartureState === 'closing_gate'
                      ? 'GATE CLOSING'
                      : 'GATE LOCKED'}
                  </span>
                </div>

                {/* Motorized Sliding Gate Steel Leaf */}
                <div
                  className="h-full bg-gradient-to-r from-stone-900 via-stone-800 to-stone-950 border-2 border-stone-600 shadow-2xl transition-all duration-1000 ease-in-out relative flex justify-around"
                  style={{
                    transform:
                      carDepartureState === 'car_moving' || carDepartureState === 'opening_gate'
                        ? 'translateX(85%)' // Gate pulled open to the right
                        : 'translateX(0%)' // Gate fully closed shut
                  }}
                >
                  {/* Vertical Steel Bars */}
                  {[...Array(10)].map((_, i) => (
                    <div key={i} className="w-1.5 h-full bg-stone-700 border-x border-stone-950"></div>
                  ))}
                </div>
              </div>

              {/* Status Badge */}
              <div className="absolute bottom-4 left-4 z-40 bg-slate-950/90 backdrop-blur-md border border-slate-700/80 px-4 py-2.5 rounded-2xl shadow-2xl">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    {carDepartureState === 'opening_gate' && 'Automated Gate Opening &bull; Flasher Alert Active'}
                    {carDepartureState === 'car_moving' && 'Vehicle Departing &bull; Photocell Beam Disengaged'}
                    {carDepartureState === 'closing_gate' && 'Auto-Close Cycle Active &bull; Locking Steel Leaf'}
                    {carDepartureState === 'completed' && 'Car Departed &bull; Villa Gate Locked & Perimeter Secured'}
                    {carDepartureState === 'idle' && 'Exterior Villa Facade &bull; Sprinklers & Security Ready'}
                  </span>
                </div>
                <div className="text-[10px] text-slate-400 mt-1 font-mono">
                  Garage: {garageOpen ? 'Open' : 'Secured'} &bull; Sprinklers: {sprinklersActive ? 'Active (Smart Cycle)' : 'Off'} &bull; Landscape Lights: {exteriorLights ? 'Active' : 'Off'}
                </div>
              </div>
            </div>

            {/* Right: Exterior Landscape & Gate Mobile Control Console */}
            <div className="w-full xl:w-[440px] bg-slate-900/95 border-t xl:border-t-0 xl:border-l border-slate-800 p-5 sm:p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 mb-5 border-b border-slate-800">
                  <div>
                    <span className="text-xs font-bold text-white uppercase tracking-wider block">
                      Exterior & Perimeter Automation
                    </span>
                    <span className="text-[11px] text-slate-400">
                      Operate the garage, sprinklers, and automated gate:
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                    BENINCA 800KG MOTOR
                  </span>
                </div>

                {/* 1. HERO VEHICLE DRIVE-OUT ACTION CARD */}
                <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950/50 border-2 border-indigo-500/60 rounded-3xl p-5 shadow-2xl mb-6 relative overflow-hidden group">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-indigo-400 uppercase flex items-center gap-1.5">
                      <Car className="w-4 h-4 text-sky-400" />
                      Vehicle Departure Automation
                    </span>
                    <span className="text-[9px] font-mono text-emerald-400">1-TAP SEQUENCE</span>
                  </div>

                  <h4 className="text-sm font-bold text-white mb-1">
                    "Car Drive-Out & Gate Cycle"
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    Sliding gate smoothly glides open, safety flasher alerts pedestrians, vehicle exits seamlessly through photocell beams, and the gate secures behind it automatically.
                  </p>

                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={runCarDepartureSequence}
                      disabled={carDepartureState !== 'idle' && carDepartureState !== 'completed'}
                      className={`flex-1 py-3 px-4 rounded-xl font-black text-xs transition-all shadow-lg flex items-center justify-center gap-2 ${
                        carDepartureState === 'idle' || carDepartureState === 'completed'
                          ? 'bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white shadow-sky-500/25 cursor-pointer'
                          : 'bg-slate-800 text-slate-500 cursor-not-allowed'
                      }`}
                    >
                      <Play className="w-4 h-4" />
                      <span>
                        {carDepartureState === 'idle' || carDepartureState === 'completed'
                          ? 'Start Drive-Out Sequence'
                          : 'Sequence In Progress...'}
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={resetExterior}
                      className="py-3 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold transition-all"
                      title="Reset Exterior"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* 2. DIRECT EXTERIOR TOGGLES */}
                <div className="space-y-3">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
                    Landscape & Garage Hardware
                  </span>

                  {/* Motorized Garage Door Toggle */}
                  <div className="bg-slate-950 p-3.5 rounded-2xl border border-slate-800 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-white flex items-center gap-1.5">
                        <Warehouse className="w-3.5 h-3.5 text-amber-400" />
                        <span>Motorized Garage Shutter</span>
                      </div>
                      <div className="text-[10px] text-slate-400">Somfy 230V Sectional Roller</div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setGarageOpen(!garageOpen)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                        garageOpen
                          ? 'bg-amber-500 text-slate-950 font-black'
                          : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      {garageOpen ? 'Open (Rolling Up)' : 'Close Garage'}
                    </button>
                  </div>

                  {/* Smart Sprinklers Toggle */}
                  <div className="bg-slate-950 p-3.5 rounded-2xl border border-slate-800 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-white flex items-center gap-1.5">
                        <Droplets className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Smart Lawn Sprinklers</span>
                      </div>
                      <div className="text-[10px] text-slate-400">Hunter Pop-up Rotary Nozzles</div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setSprinklersActive(!sprinklersActive)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                        sprinklersActive
                          ? 'bg-cyan-500 text-slate-950 font-black'
                          : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      {sprinklersActive ? 'Active Spray' : 'Sprinklers Off'}
                    </button>
                  </div>

                  {/* Exterior Facade Lights Toggle */}
                  <div className="bg-slate-950 p-3.5 rounded-2xl border border-slate-800 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-white flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                        <span>Landscape & Facade Sconces</span>
                      </div>
                      <div className="text-[10px] text-slate-400">IP65 Warm 3000K Bollard Lights</div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setExteriorLights(!exteriorLights)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                        exteriorLights
                          ? 'bg-sky-500 text-slate-950 font-black'
                          : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      {exteriorLights ? 'Lights On' : 'Lights Off'}
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800 text-[10px] font-mono text-slate-500 text-center">
                MAXDAX &bull; Beninca Gate Automation &bull; Hunter Smart Irrigation
              </div>
            </div>
          </>
        )}

      </div>
    </div>
  );
};
