import React from 'react';
import { useDemo } from '../../context/DemoContext';
import { ShieldCheck, AlertTriangle, Play, Square, Pause, Car, Eye, Unlock, RotateCcw } from 'lucide-react';

export const GateDemo: React.FC = () => {
  const { state, openGate, closeGate, stopGate, toggleObstruction, triggerMasterScene } = useDemo();

  const isClosed = state.gateStatus === 'closed';
  const isOpen = state.gateStatus === 'open';
  const isOpening = state.gateStatus === 'opening';
  const isClosing = state.gateStatus === 'closing';
  const isObstructed = state.gateStatus === 'obstructed';
  const isStopped = state.gateStatus === 'stopped';

  // Calculate sliding percentage for the visual gate leaf
  let gateOffset = '0%';
  if (isOpen) gateOffset = '85%';
  else if (isOpening) gateOffset = '50%';
  else if (isClosing) gateOffset = '30%';
  else if (isObstructed) gateOffset = '35%';
  else if (isStopped) gateOffset = '45%';

  return (
    <div className="bg-brand-surface border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
      {/* Simulation Header */}
      <div className="bg-brand-card/80 border-b border-slate-800 px-5 py-3.5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
              isObstructed ? 'bg-amber-400' : isOpening || isClosing ? 'bg-sky-400' : 'bg-emerald-400'
            }`}></span>
            <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${
              isObstructed ? 'bg-amber-500' : isOpening || isClosing ? 'bg-sky-500' : 'bg-emerald-500'
            }`}></span>
          </span>
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
            Automated Gate Telemetry &bull; Active Simulation
          </span>
        </div>

        {/* Status Badge */}
        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-400">Current Status:</span>
          <span className={`text-xs font-bold uppercase px-2.5 py-1 rounded-md border ${
            isClosed
              ? 'bg-slate-800/80 text-slate-300 border-slate-700'
              : isOpen
              ? 'bg-emerald-950/70 text-emerald-400 border-emerald-800/60'
              : isObstructed
              ? 'bg-amber-950/70 text-amber-300 border-amber-800/60 animate-pulse'
              : 'bg-sky-950/70 text-sky-300 border-sky-800/60'
          }`}>
            {state.gateStatus}
          </span>
        </div>
      </div>

      {/* Visual Canvas Area */}
      <div className="relative h-72 sm:h-80 bg-gradient-to-b from-slate-950 via-[#0B132B] to-slate-950 overflow-hidden border-b border-slate-800 flex items-end justify-center px-4">
        {/* Architectural Background Silhouette */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-6 left-12 w-64 h-36 border border-slate-700/50 rounded-lg"></div>
          <div className="absolute top-14 right-16 w-52 h-44 border border-slate-700/50 rounded-lg"></div>
          {/* Ambient Modern Villa Lights */}
          <div className="absolute top-10 left-36 w-8 h-8 rounded-full bg-amber-400/20 blur-md"></div>
          <div className="absolute top-16 right-32 w-10 h-10 rounded-full bg-sky-400/20 blur-md"></div>
        </div>

        {/* Driveway Ground */}
        <div className="absolute bottom-0 inset-x-0 h-28 bg-[#131B2E] border-t border-slate-800">
          {/* Driveway Paver Grid Lines */}
          <div className="w-full h-full opacity-20 bg-[linear-gradient(to_right,#38bdf815_1px,transparent_1px),linear-gradient(to_bottom,#38bdf815_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          {/* Center Driveway Lane Marker */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 border-b border-dashed border-slate-600/50"></div>
        </div>

        {/* Safety Photocell Beam (Infrared Line) */}
        <div className="absolute bottom-16 inset-x-8 flex items-center justify-between pointer-events-none z-10">
          <div className="w-3 h-5 bg-slate-700 rounded-sm border border-slate-600 shadow-md"></div>
          <div className={`h-0.5 flex-1 transition-all duration-300 ${
            state.gateObstruction
              ? 'bg-amber-400 shadow-[0_0_8px_#f59e0b] border-t border-dashed border-amber-300'
              : 'bg-red-500/40 shadow-[0_0_4px_#ef4444]'
          }`}></div>
          <div className="w-3 h-5 bg-slate-700 rounded-sm border border-slate-600 shadow-md"></div>
        </div>

        {/* Gate Pillars & Track Frame */}
        <div className="relative w-full max-w-xl h-44 flex items-end justify-between z-20">
          {/* Left Pillar */}
          <div className="w-10 sm:w-12 h-40 bg-gradient-to-r from-slate-800 to-slate-700 rounded-t border-t border-x border-slate-600 shadow-xl relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-3 bg-amber-500/80 rounded-full blur-[2px]"></div>
            <div className="absolute top-6 left-1/2 -translate-x-1/2 text-[9px] font-bold text-slate-400 tracking-wider rotate-90">
              PILLAR
            </div>
          </div>

          {/* Motorized Sliding Gate Leaf */}
          <div
            className="absolute bottom-1 left-12 right-12 h-36 border-2 border-slate-500/80 rounded-t-sm shadow-2xl transition-all duration-1000 ease-in-out flex items-center justify-evenly bg-slate-900/90 backdrop-blur-sm"
            style={{
              transform: `translateX(${gateOffset})`,
              opacity: isOpen ? 0.25 : 1
            }}
          >
            {/* Architectural Vertical Slats */}
            {[...Array(14)].map((_, i) => (
              <div key={i} className="w-1.5 h-full bg-gradient-to-b from-slate-400 via-slate-600 to-slate-800 rounded-full opacity-80"></div>
            ))}
            {/* Center Brand Emblem */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-slate-950/90 border border-slate-700 rounded text-[9px] font-bold text-sky-400 tracking-wider">
              MAXDAX &bull; BFT
            </div>
          </div>

          {/* Right Pillar with Heavy-Duty Motor Housing */}
          <div className="w-10 sm:w-12 h-40 bg-gradient-to-l from-slate-800 to-slate-700 rounded-t border-t border-x border-slate-600 shadow-xl relative">
            {/* Flashing Warning Beacon when moving */}
            <div className={`absolute -top-4 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full transition-all duration-300 ${
              isOpening || isClosing
                ? 'bg-amber-400 shadow-[0_0_15px_#f59e0b] animate-ping-slow'
                : 'bg-slate-700'
            }`}></div>

            {/* Motor Box */}
            <div className="absolute bottom-2 -left-4 w-7 h-10 bg-slate-900 border border-slate-700 rounded shadow-md flex items-center justify-center">
              <span className="text-[7px] text-sky-400 font-mono">24V</span>
            </div>
          </div>
        </div>

        {/* Animated Vehicle Entering simulation */}
        {(state.carPosition === 'entering' || state.carPosition === 'inside') && (
          <div
            className={`absolute bottom-6 left-1/2 -translate-x-1/2 z-30 transition-all duration-1000 ${
              state.carPosition === 'inside' ? 'translate-y-[-40px] scale-90 opacity-80' : 'translate-y-2'
            }`}
          >
            <div className="flex items-center gap-2 bg-slate-950/90 border border-sky-500/60 text-sky-300 px-3 py-1.5 rounded-full text-xs shadow-lg">
              <Car className="w-4 h-4 text-sky-400" />
              <span>Authorized Vehicle Transiting</span>
            </div>
          </div>
        )}

        {/* Safety Obstruction Alert Banner */}
        {isObstructed && (
          <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-amber-950/90 border border-amber-500/80 text-amber-200 px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 shadow-xl z-40 animate-bounce">
            <AlertTriangle className="w-4 h-4 text-amber-400" />
            <span>Infrared Photocell Beam Interrupted — Movement Automatically Reversed for Safety</span>
          </div>
        )}
      </div>

      {/* Interactive Controls & Telemetry Dashboard */}
      <div className="p-5 sm:p-6 bg-brand-surface">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Main Controls */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              Direct Motor Controller Commands
            </h4>
            <div className="grid grid-cols-3 gap-2.5">
              <button
                type="button"
                onClick={openGate}
                disabled={isOpening || isOpen}
                className={`flex items-center justify-center gap-2 py-3 px-3 rounded-xl font-semibold text-xs sm:text-sm transition-all shadow-md ${
                  isOpening || isOpen
                    ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                    : 'bg-sky-600 hover:bg-sky-500 text-white hover:shadow-sky-500/25 active:scale-95'
                }`}
              >
                <Play className="w-4 h-4" />
                <span>Open</span>
              </button>

              <button
                type="button"
                onClick={closeGate}
                disabled={isClosing || isClosed}
                className={`flex items-center justify-center gap-2 py-3 px-3 rounded-xl font-semibold text-xs sm:text-sm transition-all shadow-md ${
                  isClosing || isClosed
                    ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                    : 'bg-slate-700 hover:bg-slate-600 text-white hover:shadow-slate-600/25 active:scale-95'
                }`}
              >
                <Square className="w-4 h-4" />
                <span>Close</span>
              </button>

              <button
                type="button"
                onClick={stopGate}
                disabled={isStopped || isClosed || isOpen}
                className={`flex items-center justify-center gap-2 py-3 px-3 rounded-xl font-semibold text-xs sm:text-sm transition-all shadow-md ${
                  isStopped || isClosed || isOpen
                    ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                    : 'bg-rose-900/80 hover:bg-rose-800 text-rose-200 border border-rose-700 active:scale-95'
                }`}
              >
                <Pause className="w-4 h-4" />
                <span>Stop</span>
              </button>
            </div>

            {/* Safety Beam Obstacle Simulator */}
            <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-slate-200">Simulate Safety Beam Obstacle</p>
                <p className="text-[11px] text-slate-400">Trigger simulated car, pedestrian, or pet across sensor path</p>
              </div>
              <button
                type="button"
                onClick={toggleObstruction}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all border ${
                  state.gateObstruction
                    ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-md font-bold'
                    : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                }`}
              >
                {state.gateObstruction ? 'Clear Obstacle' : 'Trip Beam'}
              </button>
            </div>
          </div>

          {/* Live System Diagnostics */}
          <div className="bg-brand-card/60 border border-slate-800/80 rounded-xl p-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center justify-between">
              <span>Controller Telemetry</span>
              <span className="text-[10px] text-emerald-400 font-mono">BFT RIGEL 6 IP</span>
            </h4>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
                <span className="text-slate-400 block text-[10px] uppercase">Motor Output</span>
                <span className="font-mono font-semibold text-slate-200">
                  {isOpening || isClosing ? '24V DC / 180W Active' : 'Standby (0.8W)'}
                </span>
              </div>
              <div className="bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
                <span className="text-slate-400 block text-[10px] uppercase">Photocell Bus</span>
                <span className={`font-mono font-semibold ${state.gateObstruction ? 'text-amber-400' : 'text-emerald-400'}`}>
                  {state.gateObstruction ? 'BEAM_BLOCKED' : 'BEAM_SECURE'}
                </span>
              </div>
              <div className="bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
                <span className="text-slate-400 block text-[10px] uppercase">Battery Reserve</span>
                <span className="font-mono font-semibold text-emerald-400">100% (27.4V Floated)</span>
              </div>
              <div className="bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
                <span className="text-slate-400 block text-[10px] uppercase">Mechanical Limit</span>
                <span className="font-mono font-semibold text-slate-200">
                  {isClosed ? 'CLOSED_STOP' : isOpen ? 'OPEN_STOP' : 'TRANSITING'}
                </span>
              </div>
            </div>

            {/* Quick Demonstration Scenarios */}
            <div className="mt-3.5 pt-3 border-t border-slate-800/80">
              <span className="text-[11px] font-semibold text-slate-400 block mb-2">Automated Ecosystem Scenarios:</span>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => triggerMasterScene('welcome_home')}
                  className="px-2.5 py-1 rounded bg-sky-950/60 hover:bg-sky-900/80 border border-sky-800/60 text-sky-300 text-[11px] flex items-center gap-1.5 transition-all"
                >
                  <Car className="w-3 h-3" />
                  <span>Arrive Home Sequence</span>
                </button>
                <button
                  type="button"
                  onClick={() => triggerMasterScene('good_night')}
                  className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 text-[11px] flex items-center gap-1.5 transition-all"
                >
                  <ShieldCheck className="w-3 h-3 text-emerald-400" />
                  <span>Night Lockdown</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
