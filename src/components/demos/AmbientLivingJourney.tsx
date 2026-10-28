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
  Sliders,
  ShieldCheck,
  ChevronRight,
  Volume2,
  Eye,
  Check,
  Power,
  Layers,
  Compass,
  Activity,
  Zap,
  Radio,
  Minimize2,
  Maximize2
} from 'lucide-react';

export const AmbientLivingJourney: React.FC = () => {
  // Master Space Selector
  const [activeTab, setActiveTab] = useState<'living' | 'bedroom' | 'exterior'>('living');

  // =========================================================================
  // SCENE 1: LIVING ROOM STATES
  // =========================================================================
  const [livingMode, setLivingMode] = useState<'guest' | 'task' | 'reading' | 'movie'>('guest');
  const [curtainsClosedLiving, setCurtainsClosedLiving] = useState<boolean>(false);
  const [fingerTapPosition, setFingerTapPosition] = useState<{ x: number; y: number; active: boolean }>({
    x: 0,
    y: 0,
    active: false
  });
  const [isAutoTourRunning, setIsAutoTourRunning] = useState<boolean>(false);
  const [phoneMinimized, setPhoneMinimized] = useState<boolean>(false);

  // Trigger living mode with realistic finger-tap animation
  const handleModeTap = (mode: 'guest' | 'task' | 'reading' | 'movie', event?: React.MouseEvent) => {
    if (event) {
      const rect = event.currentTarget.getBoundingClientRect();
      setFingerTapPosition({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
        active: true
      });
      setTimeout(() => setFingerTapPosition((prev) => ({ ...prev, active: false })), 750);
    }

    setLivingMode(mode);
    if (mode === 'movie') {
      setCurtainsClosedLiving(true);
    } else if (mode === 'task') {
      setCurtainsClosedLiving(false);
    }
  };

  // Scroll / Auto-Tour across modes
  useEffect(() => {
    if (!isAutoTourRunning) return;
    const modes: ('guest' | 'task' | 'reading' | 'movie')[] = ['guest', 'task', 'reading', 'movie'];
    let idx = modes.indexOf(livingMode);

    const interval = setInterval(() => {
      idx = (idx + 1) % modes.length;
      handleModeTap(modes[idx]);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoTourRunning, livingMode]);

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
      setTimeout(() => setAlexaTriggered(false), 3000);
    }, 700);
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

    // 1. Amber safety flasher activates & gate glides open
    setCarDepartureState('opening_gate');

    // 2. Gate opens -> Car headlights turn on & car smoothly exits
    setTimeout(() => {
      setCarDepartureState('car_moving');

      // 3. Car exits -> Gate smoothly auto-closes
      setTimeout(() => {
        setCarDepartureState('closing_gate');

        // 4. Gate fully closed & perimeter locked
        setTimeout(() => {
          setCarDepartureState('completed');
        }, 2600);
      }, 3400);
    }, 2200);
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
      <div className="bg-slate-950/95 border-b border-slate-800 px-4 sm:px-8 py-3.5 flex flex-wrap items-center justify-between gap-4 z-40 relative">
        <div>
          <div className="flex items-center gap-2 mb-0.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-sky-400">
              Photorealistic Widescreen Orchestration &bull; 60 FPS Architectural Flow
            </span>
          </div>
          <h3 className="text-base sm:text-lg font-extrabold text-white flex items-center gap-2">
            {activeTab === 'living' && '01. Grand Living Suite & Immersive Cinema'}
            {activeTab === 'bedroom' && '02. Master Suite & Alexa Sleep Sanctuary'}
            {activeTab === 'exterior' && '03. Villa Landscape, Garage & Automated Gate'}
          </h3>
        </div>

        {/* Space Navigation Tabs */}
        <div className="flex items-center gap-1.5 bg-slate-900 p-1.5 rounded-2xl border border-slate-800">
          <button
            type="button"
            onClick={() => setActiveTab('living')}
            className={`px-3.5 sm:px-5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeTab === 'living'
                ? 'bg-gradient-to-r from-sky-600 to-indigo-600 text-white shadow-lg shadow-sky-500/20'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Tv className="w-4 h-4" />
            <span>Living Suite</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('bedroom')}
            className={`px-3.5 sm:px-5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeTab === 'bedroom'
                ? 'bg-gradient-to-r from-sky-600 to-indigo-600 text-white shadow-lg shadow-sky-500/20'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Mic className="w-4 h-4" />
            <span>Master Bedroom</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('exterior')}
            className={`px-3.5 sm:px-5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeTab === 'exterior'
                ? 'bg-gradient-to-r from-sky-600 to-indigo-600 text-white shadow-lg shadow-sky-500/20'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Car className="w-4 h-4" />
            <span>Villa & Gate</span>
          </button>
        </div>
      </div>

      {/* =====================================================================
          MAIN FULL-WINDOW IMMERSIVE ARCHITECTURAL VIEWPORT
          ===================================================================== */}
      <div className="relative w-full min-h-[580px] sm:min-h-[680px] lg:min-h-[760px] bg-black overflow-hidden select-none">
        
        {/* ===================================================================
            SPACE 1: GRAND LIVING ROOM (FULL-WINDOW IMMERSIVE WIDESCREEN)
            =================================================================== */}
        {activeTab === 'living' && (
          <div className="relative w-full h-full min-h-[580px] sm:min-h-[680px] lg:min-h-[760px] overflow-hidden">
            
            {/* 1. ROOM ARCHITECTURAL BASE BACKGROUND */}
            <img
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2400&q=90"
              alt="Architectural Living Room"
              className={`w-full h-full object-cover transition-all duration-1000 ${
                livingMode === 'guest'
                  ? 'brightness-[0.96] contrast-[1.1] saturate-[1.25]'
                  : livingMode === 'task'
                  ? 'brightness-[1.2] contrast-[1.15] saturate-[1.0]'
                  : livingMode === 'reading'
                  ? 'brightness-[0.68] contrast-[1.2] saturate-[1.1]'
                  : 'brightness-[0.38] contrast-[1.35] saturate-[1.2]' // Movie Mode
              }`}
            />

            {/* 2. BUTTERY-SMOOTH COLOR TEMPERATURE OVERLAY (2700K Warm / 4500K Task / Indigo Cinema) */}
            <div
              className="absolute inset-0 pointer-events-none transition-all duration-1000"
              style={{
                backgroundColor:
                  livingMode === 'guest'
                    ? 'rgba(245, 158, 11, 0.22)' // 2700K Warm Golden Amber
                    : livingMode === 'task'
                    ? 'rgba(240, 249, 255, 0.12)' // 4500K Daylight White
                    : livingMode === 'reading'
                    ? 'rgba(217, 119, 6, 0.16)' // Focused ambient
                    : 'rgba(30, 27, 75, 0.65)', // Deep Cinema Indigo
                mixBlendMode: livingMode === 'movie' ? 'multiply' : 'screen'
              }}
            ></div>

            {/* 3. CEILING ARCHITECTURAL COVE LIGHTING STRIP */}
            <div
              className="absolute top-0 inset-x-0 h-24 pointer-events-none blur-2xl transition-all duration-1000"
              style={{
                backgroundColor:
                  livingMode === 'guest'
                    ? 'rgba(251, 191, 36, 0.55)'
                    : livingMode === 'task'
                    ? 'rgba(255, 255, 255, 0.45)'
                    : livingMode === 'reading'
                    ? 'rgba(245, 158, 11, 0.2)'
                    : 'rgba(129, 140, 248, 0.85)' // Glowing Cyan/Violet Cove
              }}
            ></div>

            {/* 4. NATURAL FLOOR-TO-CEILING ARCHITECTURAL MOTORIZED CURTAINS (ON ROOM WINDOW) */}
            {/* The window is integrated into the room architecture on the right side */}
            <div className="absolute top-0 bottom-0 right-0 w-[42%] lg:w-[38%] pointer-events-none z-10 overflow-hidden flex">
              {/* Natural Window Glass Looking Out to Landscape */}
              <div className="absolute inset-0 z-0">
                <img
                  src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1200&q=85"
                  alt="Window Landscape View"
                  className="w-full h-full object-cover transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-slate-950/20"></div>
              </div>

              {/* Recessed Ceiling Pelmet Cove with LED Downlight on Curtains */}
              <div className="absolute top-0 inset-x-0 h-6 bg-gradient-to-b from-stone-900 to-transparent z-30 flex items-center justify-between px-3">
                <span className="text-[8px] font-mono text-stone-400">RECESSED CEILING PELMET TRACK</span>
                <span className="text-[8px] font-mono text-emerald-400">
                  {curtainsClosedLiving ? '100% BLACKOUT CLOSED' : '0% OPEN'}
                </span>
              </div>

              {/* Left Motorized Curtain Drape (Full-Height Floor-to-Ceiling Drapery) */}
              <div
                className="h-full bg-gradient-to-r from-stone-900 via-stone-800 to-stone-900 border-r border-stone-700/80 shadow-2xl transition-all duration-[1200ms] ease-in-out relative z-20 flex justify-evenly"
                style={{
                  width: curtainsClosedLiving ? '50%' : '10%'
                }}
              >
                {[...Array(7)].map((_, i) => (
                  <div key={i} className="w-1 h-full bg-stone-950/80 opacity-70"></div>
                ))}
              </div>

              {/* Right Motorized Curtain Drape (Full-Height Floor-to-Ceiling Drapery) */}
              <div
                className="h-full ml-auto bg-gradient-to-l from-stone-900 via-stone-800 to-stone-900 border-l border-stone-700/80 shadow-2xl transition-all duration-[1200ms] ease-in-out relative z-20 flex justify-evenly"
                style={{
                  width: curtainsClosedLiving ? '50%' : '10%'
                }}
              >
                {[...Array(7)].map((_, i) => (
                  <div key={i} className="w-1 h-full bg-stone-950/80 opacity-70"></div>
                ))}
              </div>
            </div>

            {/* 5. 85" EMBEDDED OLED HOME CINEMA DISPLAY (POWERS ON IN MOVIE MODE) */}
            <div
              className={`absolute top-[20%] left-[24%] w-[42%] aspect-[16/9] rounded-xl overflow-hidden border-4 transition-all duration-1000 z-10 shadow-2xl flex items-center justify-center ${
                livingMode === 'movie'
                  ? 'border-indigo-400/90 shadow-[0_0_90px_rgba(99,102,241,0.75)] scale-100 opacity-100'
                  : 'border-slate-800 bg-black/95 scale-[0.98] opacity-75'
              }`}
            >
              {livingMode === 'movie' ? (
                <div className="relative w-full h-full bg-slate-950 flex items-center justify-center overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=85"
                    alt="4K Dolby Cinema"
                    className="w-full h-full object-cover animate-pulse duration-[3500ms]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-3">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping"></span>
                      <span className="text-[10px] font-mono font-bold text-white uppercase tracking-wider">
                        4K DOLBY CINEMA &bull; SURROUND AUDIO PLAYING
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center p-2 text-slate-500 font-mono text-[10px]">
                  <Tv className="w-6 h-6 mx-auto mb-1 opacity-40 text-slate-400" />
                  <span>85" FLUSH OLED DISPLAY &bull; STANDBY</span>
                </div>
              )}
            </div>

            {/* 6. PHYSICAL FLOOR READING LAMP (LIGHTS ON IN READING MODE) */}
            <div className="absolute top-[26%] right-[38%] z-10 flex flex-col items-center pointer-events-none">
              <div
                className={`w-14 h-9 rounded-t-full border border-amber-300/40 transition-all duration-700 ${
                  livingMode === 'reading'
                    ? 'bg-amber-300 shadow-[0_0_60px_rgba(251,191,36,0.95)]'
                    : 'bg-stone-800'
                }`}
              ></div>
              <div className="w-1.5 h-44 bg-stone-700 shadow-md"></div>
              <div className="w-12 h-2.5 bg-stone-800 rounded-full"></div>

              {/* Downward Focused Spotlight Beam Cone onto Reading Area */}
              {livingMode === 'reading' && (
                <div
                  className="absolute top-9 w-52 h-72 pointer-events-none animate-in fade-in duration-700"
                  style={{
                    background: 'radial-gradient(ellipse at top, rgba(251, 191, 36, 0.75) 0%, rgba(245, 158, 11, 0.25) 60%, transparent 100%)',
                    clipPath: 'polygon(30% 0%, 70% 0%, 100% 100%, 0% 100%)'
                  }}
                ></div>
              )}
            </div>

            {/* 7. REAL-TIME AMBIENCE TELEMETRY BADGE (BOTTOM-LEFT) */}
            <div className="absolute bottom-6 left-6 z-20 max-w-sm bg-slate-950/90 backdrop-blur-md border border-slate-700/80 p-4 rounded-2xl shadow-2xl">
              <div className="flex items-center gap-2 mb-1.5">
                <span
                  className="w-3 h-3 rounded-full animate-ping"
                  style={{
                    backgroundColor:
                      livingMode === 'guest'
                        ? '#f59e0b'
                        : livingMode === 'task'
                        ? '#38bdf8'
                        : livingMode === 'reading'
                        ? '#fbbf24'
                        : '#818cf8'
                  }}
                ></span>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-sky-400">
                  LIVING SUITE &bull; SCENE ACTIVE
                </span>
              </div>
              <h4 className="text-sm font-bold text-white mb-1">
                {livingMode === 'guest' && 'Guest Mode &bull; Warm 2700K Amber Ambient Glow'}
                {livingMode === 'task' && 'Task Mode &bull; 4500K Focused White Daylight'}
                {livingMode === 'reading' && 'Reading Mode &bull; Armchair Spotlight Cone'}
                {livingMode === 'movie' && 'Movie Night &bull; Full-Height Blackouts & TV ON'}
              </h4>
              <div className="text-[10px] text-slate-300 font-mono">
                Curtains: {curtainsClosedLiving ? '100% Blackout Closed' : 'Open (Natural View)'} &bull; Light Level:{' '}
                {livingMode === 'task' ? '700 Lux' : livingMode === 'guest' ? '280 Lux' : livingMode === 'reading' ? '180 Lux' : '35 Lux'}
              </div>
            </div>

            {/* 8. FLOATING ACTIVE SMARTPHONE CONTROLLER (OVERLAID SEAMLESSLY IN THE SAME VIEW) */}
            <div
              className={`absolute z-30 transition-all duration-500 ${
                phoneMinimized
                  ? 'bottom-6 right-6 w-auto'
                  : 'bottom-6 right-6 sm:right-10 w-72 sm:w-80'
              }`}
            >
              {phoneMinimized ? (
                /* Minimized Phone Badge */
                <button
                  type="button"
                  onClick={() => setPhoneMinimized(false)}
                  className="px-4 py-2.5 bg-slate-950/95 border-2 border-sky-400 text-white rounded-2xl shadow-2xl flex items-center gap-2 text-xs font-bold hover:scale-105 transition-transform"
                >
                  <Smartphone className="w-4 h-4 text-sky-400" />
                  <span>Show Mobile Controller</span>
                  <Maximize2 className="w-3.5 h-3.5 text-slate-400 ml-1" />
                </button>
              ) : (
                /* Full Floating Smartphone Glass Hardware */
                <div className="bg-slate-950/95 backdrop-blur-xl rounded-[40px] p-3 border-4 border-slate-700 shadow-[0_25px_60px_rgba(0,0,0,0.9)] relative">
                  {/* Dynamic Island Top */}
                  <div className="flex items-center justify-between px-3 pt-1 mb-2">
                    <div className="w-20 h-4 bg-black rounded-full flex items-center justify-between px-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-800"></div>
                      <div className="w-2 h-2 rounded-full bg-slate-900"></div>
                    </div>
                    {/* Minimize Controller Button */}
                    <button
                      type="button"
                      onClick={() => setPhoneMinimized(true)}
                      className="text-slate-400 hover:text-white p-1 rounded-full hover:bg-slate-800 transition-colors"
                      title="Minimize Controller"
                    >
                      <Minimize2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Mobile Screen Glass UI */}
                  <div className="bg-slate-900/90 rounded-[28px] p-3.5 border border-slate-800 space-y-2 shadow-inner">
                    {/* Phone Header */}
                    <div className="flex items-center justify-between pb-1.5 border-b border-slate-800">
                      <div>
                        <div className="text-[8px] font-bold text-sky-400 font-mono">MAXDAX SMART LIVING</div>
                        <div className="text-[11px] font-bold text-white">Tap Mode to Orchestrate:</div>
                      </div>
                      <span className="text-[8px] font-mono text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded-full border border-emerald-800">
                        LIVE SYNC
                      </span>
                    </div>

                    {/* 4 INTERACTIVE SCENE MODES */}
                    <div className="space-y-1.5">
                      {/* GUEST MODE */}
                      <button
                        type="button"
                        onClick={(e) => handleModeTap('guest', e)}
                        className={`w-full p-2 rounded-xl border text-left flex items-center justify-between transition-all ${
                          livingMode === 'guest'
                            ? 'bg-amber-950/80 border-amber-400 text-amber-200 shadow-md ring-1 ring-amber-400'
                            : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <Sun className="w-3.5 h-3.5 text-amber-400" />
                          <div>
                            <div className="text-[11px] font-bold">Guest Mode</div>
                            <div className="text-[8px] text-slate-400">Warm 2700K Ambient Glow</div>
                          </div>
                        </div>
                        {livingMode === 'guest' && <Check className="w-3.5 h-3.5 text-amber-400" />}
                      </button>

                      {/* TASK MODE (DAYLIGHT WHITE WITH HAND-TAP INDICATOR) */}
                      <button
                        type="button"
                        onClick={(e) => handleModeTap('task', e)}
                        className={`w-full p-2 rounded-xl border text-left flex items-center justify-between transition-all relative ${
                          livingMode === 'task'
                            ? 'bg-sky-950/80 border-sky-400 text-sky-200 shadow-md ring-1 ring-sky-400'
                            : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                          <div>
                            <div className="text-[11px] font-bold flex items-center gap-1">
                              <span>Task Mode</span>
                              <span className="text-[7px] font-mono text-sky-400 bg-sky-950 px-1 py-0.2 rounded border border-sky-800">
                                4500K
                              </span>
                            </div>
                            <div className="text-[8px] text-slate-400">Crisp Daylight White</div>
                          </div>
                        </div>
                        {livingMode === 'task' && <Check className="w-3.5 h-3.5 text-sky-400" />}
                      </button>

                      {/* READING MODE (READING FLOOR LAMP) */}
                      <button
                        type="button"
                        onClick={(e) => handleModeTap('reading', e)}
                        className={`w-full p-2 rounded-xl border text-left flex items-center justify-between transition-all ${
                          livingMode === 'reading'
                            ? 'bg-amber-950/80 border-amber-500 text-amber-200 shadow-md ring-1 ring-amber-500'
                            : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <Lamp className="w-3.5 h-3.5 text-amber-500" />
                          <div>
                            <div className="text-[11px] font-bold">Reading Mode</div>
                            <div className="text-[8px] text-slate-400">Side Floor Lamp Cone Active</div>
                          </div>
                        </div>
                        {livingMode === 'reading' && <Check className="w-3.5 h-3.5 text-amber-500" />}
                      </button>

                      {/* MOVIE / GAME MODE (TV ON + CURTAINS CLOSE + CINEMA COVE) */}
                      <button
                        type="button"
                        onClick={(e) => handleModeTap('movie', e)}
                        className={`w-full p-2 rounded-xl border text-left flex items-center justify-between transition-all ${
                          livingMode === 'movie'
                            ? 'bg-indigo-950/90 border-indigo-400 text-indigo-200 shadow-md ring-1 ring-indigo-400'
                            : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <Tv className="w-3.5 h-3.5 text-indigo-400" />
                          <div>
                            <div className="text-[11px] font-bold">Movie / Cinema Mode</div>
                            <div className="text-[8px] text-slate-400">TV ON &bull; Blackouts Close</div>
                          </div>
                        </div>
                        {livingMode === 'movie' && <Check className="w-3.5 h-3.5 text-indigo-400" />}
                      </button>
                    </div>

                    {/* Direct Curtains Manual Toggle */}
                    <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
                      <span className="text-[9px] font-mono text-slate-400">Curtains:</span>
                      <div className="flex gap-1">
                        <button
                          type="button"
                          onClick={() => setCurtainsClosedLiving(false)}
                          className={`px-2 py-0.5 rounded text-[9px] font-bold border transition-all ${
                            !curtainsClosedLiving
                              ? 'bg-sky-600 border-sky-400 text-white'
                              : 'bg-slate-950 border-slate-800 text-slate-400'
                          }`}
                        >
                          Open
                        </button>
                        <button
                          type="button"
                          onClick={() => setCurtainsClosedLiving(true)}
                          className={`px-2 py-0.5 rounded text-[9px] font-bold border transition-all ${
                            curtainsClosedLiving
                              ? 'bg-sky-600 border-sky-400 text-white'
                              : 'bg-slate-950 border-slate-800 text-slate-400'
                          }`}
                        >
                          Close (100%)
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* FINGER TAP HAPTIC PULSE EFFECT (Directly on screen when clicked) */}
            {fingerTapPosition.active && (
              <div
                className="fixed pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-2 border-sky-400 bg-sky-400/30 animate-ping"
                style={{ left: fingerTapPosition.x, top: fingerTapPosition.y }}
              ></div>
            )}
          </div>
        )}

        {/* ===================================================================
            SPACE 2: MASTER BEDROOM (ALEXA SLEEPING SANCTUARY)
            =================================================================== */}
        {activeTab === 'bedroom' && (
          <div className="relative w-full h-full min-h-[580px] sm:min-h-[680px] lg:min-h-[760px] overflow-hidden">
            {/* 1. BEDROOM BASE BACKGROUND */}
            <img
              src="https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=2400&q=90"
              alt="Master Bedroom Suite"
              className={`w-full h-full object-cover transition-all duration-1000 ${
                bedroomSleepingMode
                  ? 'brightness-[0.32] contrast-[1.3] saturate-[0.8]' // Deep night dark
                  : 'brightness-[1.1] contrast-[1.1] saturate-[1.15]' // Bright daylight
              }`}
            />

            {/* 2. SLEEP AMBIENCE OVERLAY */}
            <div
              className="absolute inset-0 pointer-events-none transition-all duration-1000"
              style={{
                backgroundColor: bedroomSleepingMode
                  ? 'rgba(15, 23, 42, 0.72)' // Night silence
                  : 'rgba(251, 191, 36, 0.12)',
                mixBlendMode: bedroomSleepingMode ? 'multiply' : 'screen'
              }}
            ></div>

            {/* 3. WALL-MOUNTED INVERTER AC UNIT WITH COOL BREEZE STREAM */}
            <div className="absolute top-6 left-[28%] z-20 flex flex-col items-center pointer-events-none">
              {/* AC Body */}
              <div className="w-60 sm:w-72 h-14 bg-gradient-to-b from-stone-100 to-stone-300 rounded-xl shadow-2xl border border-stone-400/60 p-2 flex items-center justify-between">
                <div className="text-[8px] font-mono font-bold text-stone-600 pl-2">
                  DAIKIN VRV INVERTER
                </div>
                {/* Digital LED Display */}
                <div className="flex items-center gap-1.5 bg-black/85 px-2.5 py-1 rounded text-[10px] font-mono font-bold text-cyan-300 border border-cyan-800">
                  <Wind className="w-3.5 h-3.5 text-cyan-400 animate-spin" />
                  <span>{acRunning ? '22°C COOL' : 'STANDBY'}</span>
                </div>
              </div>

              {/* Animated Cool Airflow Stream */}
              {acRunning && (
                <div className="w-60 h-44 pointer-events-none flex justify-around overflow-hidden mt-1 opacity-75">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1.5 h-full bg-gradient-to-b from-cyan-400 via-sky-300 to-transparent rounded-full animate-bounce"
                      style={{
                        animationDelay: `${i * 160}ms`,
                        animationDuration: '1.2s'
                      }}
                    ></div>
                  ))}
                </div>
              )}
            </div>

            {/* 4. BEDSIDE PENDANT LIGHT */}
            <div className="absolute top-[34%] left-[16%] z-10 flex flex-col items-center pointer-events-none">
              <div className="w-0.5 h-32 bg-stone-500"></div>
              <div
                className={`w-10 h-10 rounded-full border transition-all duration-700 ${
                  readingPendantOn
                    ? 'bg-amber-300 border-amber-200 shadow-[0_0_60px_rgba(251,191,36,0.95)]'
                    : 'bg-stone-800 border-stone-700'
                }`}
              ></div>
            </div>

            {/* 5. NATURAL ARCHITECTURAL FULL-HEIGHT BEDROOM CURTAINS */}
            <div className="absolute top-0 bottom-0 right-0 w-[44%] lg:w-[40%] pointer-events-none z-10 overflow-hidden flex">
              <div className="absolute inset-0 z-0">
                <img
                  src="https://images.unsplash.com/photo-1509114397022-ed747cca3f65?auto=format&fit=crop&w=1200&q=85"
                  alt="Night Sky View"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-slate-950/40"></div>
              </div>

              {/* Left Curtain */}
              <div
                className="h-full bg-gradient-to-r from-stone-900 via-stone-800 to-stone-900 border-r border-stone-700/80 shadow-2xl transition-all duration-[1200ms] ease-in-out relative z-20 flex justify-evenly"
                style={{
                  width: curtainsClosedBedroom ? '50%' : '10%'
                }}
              >
                {[...Array(7)].map((_, i) => (
                  <div key={i} className="w-1 h-full bg-stone-950/80 opacity-70"></div>
                ))}
              </div>

              {/* Right Curtain */}
              <div
                className="h-full ml-auto bg-gradient-to-l from-stone-900 via-stone-800 to-stone-900 border-l border-stone-700/80 shadow-2xl transition-all duration-[1200ms] ease-in-out relative z-20 flex justify-evenly"
                style={{
                  width: curtainsClosedBedroom ? '50%' : '10%'
                }}
              >
                {[...Array(7)].map((_, i) => (
                  <div key={i} className="w-1 h-full bg-stone-950/80 opacity-70"></div>
                ))}
              </div>
            </div>

            {/* 6. ALEXA ACTIVE SPEECH TOAST */}
            {alexaTriggered && (
              <div className="absolute top-6 inset-x-6 sm:inset-x-24 z-30 bg-slate-950/95 border-2 border-cyan-400 p-4 rounded-2xl shadow-[0_0_50px_rgba(6,182,212,0.7)] flex items-center justify-between animate-in fade-in zoom-in duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-cyan-500/20 border-2 border-cyan-400 flex items-center justify-center">
                    <Mic className="w-5 h-5 text-cyan-300 animate-pulse" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-white">"Alexa, Sleeping Mode Activated"</div>
                    <div className="text-[10px] text-cyan-300">
                      Closing Full-Height Blackout Curtains &bull; Inverter AC Cooling at 22°C &bull; Lights Soft-Dimmed to 5%
                    </div>
                  </div>
                </div>
                <span className="text-[9px] font-mono text-cyan-400 border border-cyan-700 px-2 py-0.5 rounded-full">
                  ALEXA MESH ROUTINE
                </span>
              </div>
            )}

            {/* 7. BEDROOM TELEMETRY (BOTTOM-LEFT) */}
            <div className="absolute bottom-6 left-6 z-20 max-w-sm bg-slate-950/90 backdrop-blur-md border border-slate-700/80 p-4 rounded-2xl shadow-2xl">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-3 h-3 rounded-full bg-cyan-400 animate-ping"></span>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-400">
                  MASTER SUITE STATUS
                </span>
              </div>
              <h4 className="text-sm font-bold text-white mb-1">
                {bedroomSleepingMode
                  ? 'Sleep Sanctuary &bull; Blackouts Closed & AC 22°C Whisper Flow'
                  : 'Daytime Suite &bull; Ambient Daylight & Mountain Vista'}
              </h4>
              <div className="text-[10px] text-slate-300 font-mono">
                Curtains: {curtainsClosedBedroom ? '100% Blackout' : 'Open'} &bull; Climate: {acRunning ? '22°C Active (18dB Fan)' : 'Standby'} &bull; Lights: {bedroomSleepingMode ? '5% Dimmed' : '100%'}
              </div>
            </div>

            {/* 8. FLOATING ALEXA VOICE HUB (BOTTOM-RIGHT) */}
            <div className="absolute bottom-6 right-6 sm:right-10 z-30 w-72 sm:w-80 bg-slate-950/95 backdrop-blur-xl border-2 border-cyan-500/70 rounded-[32px] p-4 shadow-[0_25px_60px_rgba(0,0,0,0.9)]">
              <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></div>
                  <span className="text-[10px] font-mono font-bold text-cyan-300 uppercase">
                    Amazon Alexa Voice AI
                  </span>
                </div>
                <Volume2 className="w-3.5 h-3.5 text-cyan-400" />
              </div>

              <div className="text-xs font-extrabold text-white mb-1">
                "Alexa, Sleeping Mode"
              </div>
              <p className="text-[10px] text-slate-300 leading-relaxed mb-3">
                Tap below to trigger the voice routine. Curtains glide shut, Inverter AC starts cooling at 22°C, and all lights dim to 5%.
              </p>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={activateAlexaSleepingMode}
                  className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-600 hover:from-cyan-400 hover:to-sky-500 text-slate-950 font-black text-xs transition-all shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-1.5"
                >
                  <Mic className="w-3.5 h-3.5" />
                  <span>Activate Sleep Mode</span>
                </button>
                <button
                  type="button"
                  onClick={resetBedroom}
                  className="py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold transition-all"
                  title="Reset Bedroom"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ===================================================================
            SPACE 3: VILLA EXTERIOR, GARAGE, SPRINKLERS & AUTOMATED GATE
            =================================================================== */}
        {activeTab === 'exterior' && (
          <div className="relative w-full h-full min-h-[580px] sm:min-h-[680px] lg:min-h-[760px] overflow-hidden">
            {/* 1. VILLA EXTERIOR BACKGROUND */}
            <img
              src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=2400&q=90"
              alt="Luxury Modern Villa Facade"
              className={`w-full h-full object-cover transition-all duration-1000 ${
                exteriorLights
                  ? 'brightness-[0.92] contrast-[1.15]'
                  : 'brightness-[0.5] contrast-[1.2]'
              }`}
            />
            <div className="absolute inset-0 bg-slate-950/30 pointer-events-none"></div>

            {/* 2. MOTORIZED GARAGE SHUTTER (ROLLS UP/DOWN) */}
            <div className="absolute bottom-[20%] left-[8%] w-52 sm:w-64 h-40 bg-slate-900/90 rounded-t-xl border-2 border-slate-700/80 shadow-2xl overflow-hidden z-10 flex flex-col justify-end">
              <div className="absolute inset-0 bg-stone-900 p-2 flex flex-col items-center justify-center">
                <div className="text-[9px] font-mono text-amber-400 font-bold mb-1">GARAGE BAY 01</div>
                <Car className="w-12 h-12 text-stone-400" />
              </div>
              <div
                className="w-full bg-gradient-to-b from-stone-800 via-stone-700 to-stone-900 border-t-2 border-stone-500 transition-all duration-1000 ease-in-out relative z-20 flex flex-col justify-between"
                style={{ height: garageOpen ? '15%' : '100%' }}
              >
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="w-full h-0.5 bg-stone-950/80"></div>
                ))}
                <div className="text-[8px] font-mono text-center text-stone-400 pb-1">
                  {garageOpen ? 'OPEN' : 'ROLLING SHUTTER CLOSED'}
                </div>
              </div>
            </div>

            {/* 3. LUSH LAWN WITH ANIMATED ROTARY WATER SPRINKLERS */}
            <div className="absolute bottom-2 left-[30%] w-72 sm:w-96 h-32 pointer-events-none z-10">
              {sprinklersActive && (
                <div className="relative w-full h-full">
                  <div className="absolute bottom-2 left-6 flex flex-col items-center">
                    <div className="w-2.5 h-3 bg-stone-800 rounded-t border border-stone-600"></div>
                    <div className="w-28 h-20 border-t-2 border-l-2 border-cyan-400/85 rounded-tl-full opacity-80 animate-ping"></div>
                  </div>
                  <div className="absolute bottom-4 left-36 flex flex-col items-center">
                    <div className="w-2.5 h-3 bg-stone-800 rounded-t border border-stone-600"></div>
                    <div className="w-28 h-20 border-t-2 border-r-2 border-cyan-400/85 rounded-tr-full opacity-80 animate-ping" style={{ animationDelay: '300ms' }}></div>
                  </div>
                  <div className="absolute bottom-2 right-8 flex flex-col items-center">
                    <div className="w-2.5 h-3 bg-stone-800 rounded-t border border-stone-600"></div>
                    <div className="w-28 h-20 border-t-2 border-l-2 border-cyan-400/85 rounded-tl-full opacity-80 animate-ping" style={{ animationDelay: '600ms' }}></div>
                  </div>
                </div>
              )}
            </div>

            {/* 4. LUXURY CAR WITH SMOOTH DRIVE-OUT TRANSIT ANIMATION */}
            <div
              className={`absolute bottom-4 z-20 transition-all duration-[3200ms] ease-in-out flex items-center ${
                carDepartureState === 'idle' || carDepartureState === 'opening_gate'
                  ? 'left-[16%] opacity-100 scale-90'
                  : carDepartureState === 'car_moving'
                  ? 'left-[70%] opacity-100 scale-100'
                  : 'left-[110%] opacity-0 scale-105' // Driven away
              }`}
            >
              <div className="relative bg-slate-950 p-2.5 rounded-2xl border-2 border-slate-700 shadow-2xl flex items-center gap-2">
                <Car className="w-9 h-9 text-white" />
                <div className="text-[10px] font-mono font-bold text-sky-400 pr-1">
                  MERCEDES-BENZ
                </div>
                <div
                  className="absolute -right-24 top-1/2 -translate-y-1/2 w-28 h-12 pointer-events-none"
                  style={{
                    background: 'radial-gradient(ellipse at left, rgba(255, 255, 255, 0.95) 0%, rgba(56, 189, 248, 0.25) 70%, transparent 100%)'
                  }}
                ></div>
              </div>
            </div>

            {/* 5. HEAVY MOTORIZED SLIDING VILLA ENTRANCE GATE */}
            <div className="absolute bottom-0 right-0 w-72 sm:w-96 h-40 border-t-2 border-slate-700 z-30 pointer-events-none overflow-hidden">
              {/* Yellow Safety Flasher Light */}
              <div className="absolute top-2 right-4 flex items-center gap-1.5 z-40 bg-slate-950/90 border border-slate-700 px-2 py-0.5 rounded-lg shadow-xl">
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

              {/* Sliding Gate Steel Leaf */}
              <div
                className="h-full bg-gradient-to-r from-stone-900 via-stone-800 to-stone-950 border-2 border-stone-600 shadow-2xl transition-all duration-1000 ease-in-out relative flex justify-around"
                style={{
                  transform:
                    carDepartureState === 'car_moving' || carDepartureState === 'opening_gate'
                      ? 'translateX(85%)'
                      : 'translateX(0%)'
                }}
              >
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="w-1.5 h-full bg-stone-700 border-x border-stone-950"></div>
                ))}
              </div>
            </div>

            {/* 6. EXTERIOR TELEMETRY (BOTTOM-LEFT) */}
            <div className="absolute bottom-6 left-6 z-40 max-w-sm bg-slate-950/90 backdrop-blur-md border border-slate-700/80 p-4 rounded-2xl shadow-2xl">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping"></span>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-400">
                  ESTATE PERIMETER AUTOMATION
                </span>
              </div>
              <h4 className="text-sm font-bold text-white mb-1">
                {carDepartureState === 'opening_gate' && 'Automated Gate Opening &bull; Flasher Alert Active'}
                {carDepartureState === 'car_moving' && 'Vehicle Departing &bull; Photocell Beam Disengaged'}
                {carDepartureState === 'closing_gate' && 'Auto-Close Cycle Active &bull; Locking Steel Leaf'}
                {carDepartureState === 'completed' && 'Car Departed &bull; Villa Gate Locked & Perimeter Secured'}
                {carDepartureState === 'idle' && 'Villa Facade &bull; Sprinklers & Gate Automation Active'}
              </h4>
              <div className="text-[10px] text-slate-300 font-mono">
                Garage: {garageOpen ? 'Open' : 'Secured'} &bull; Sprinklers: {sprinklersActive ? 'Active Spray' : 'Off'} &bull; Sconces: {exteriorLights ? 'On' : 'Off'}
              </div>
            </div>

            {/* 7. FLOATING EXTERIOR REMOTE CONTROLLER (BOTTOM-RIGHT) */}
            <div className="absolute bottom-6 right-6 sm:right-10 z-40 w-72 sm:w-80 bg-slate-950/95 backdrop-blur-xl border-2 border-indigo-500/70 rounded-[32px] p-4 shadow-[0_25px_60px_rgba(0,0,0,0.9)]">
              <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-slate-800">
                <span className="text-[10px] font-mono font-bold text-indigo-400 uppercase flex items-center gap-1.5">
                  <Car className="w-3.5 h-3.5 text-sky-400" />
                  Vehicle Gate Sequence
                </span>
                <span className="text-[8px] font-mono text-emerald-400">1-TAP FLOW</span>
              </div>

              <p className="text-[10px] text-slate-300 leading-relaxed mb-3">
                Flasher alerts pedestrians, sliding gate glides open, car drives through, and gate locks automatically.
              </p>

              <div className="flex gap-2 mb-3">
                <button
                  type="button"
                  onClick={runCarDepartureSequence}
                  disabled={carDepartureState !== 'idle' && carDepartureState !== 'completed'}
                  className={`flex-1 py-2.5 px-3 rounded-xl font-black text-xs transition-all shadow-lg flex items-center justify-center gap-1.5 ${
                    carDepartureState === 'idle' || carDepartureState === 'completed'
                      ? 'bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white cursor-pointer'
                      : 'bg-slate-800 text-slate-500 cursor-not-allowed'
                  }`}
                >
                  <Play className="w-3.5 h-3.5" />
                  <span>
                    {carDepartureState === 'idle' || carDepartureState === 'completed'
                      ? 'Start Drive-Out Cycle'
                      : 'In Progress...'}
                  </span>
                </button>
                <button
                  type="button"
                  onClick={resetExterior}
                  className="py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold transition-all"
                  title="Reset Exterior"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Hardware Quick Toggles */}
              <div className="grid grid-cols-2 gap-1.5 pt-2 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setGarageOpen(!garageOpen)}
                  className={`py-1.5 px-2 rounded-lg text-[9px] font-bold border transition-all ${
                    garageOpen ? 'bg-amber-500 text-slate-950 border-amber-400' : 'bg-slate-900 border-slate-800 text-slate-300'
                  }`}
                >
                  Garage: {garageOpen ? 'Open' : 'Closed'}
                </button>
                <button
                  type="button"
                  onClick={() => setSprinklersActive(!sprinklersActive)}
                  className={`py-1.5 px-2 rounded-lg text-[9px] font-bold border transition-all ${
                    sprinklersActive ? 'bg-cyan-500 text-slate-950 border-cyan-400' : 'bg-slate-900 border-slate-800 text-slate-300'
                  }`}
                >
                  Sprinklers: {sprinklersActive ? 'On' : 'Off'}
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
