import React from 'react';
import { useDemo } from '../../context/DemoContext';
import {
  Droplets,
  CloudRain,
  Play,
  Square,
  CheckCircle2,
  Smartphone,
  Sparkles,
  Waves
} from 'lucide-react';

interface GardenZone {
  id: number;
  name: string;
  type: string;
  duration: string;
  moisture: number;
}

const gardenZones: GardenZone[] = [
  { id: 1, name: 'Zone 1: Front Villa Lawn', type: 'Pop-Up Rotator Sprinklers', duration: '12 mins', moisture: 38 },
  { id: 2, name: 'Zone 2: Tropical Courtyard & Palms', type: 'Pressure-Compensated Drip', duration: '15 mins', moisture: 42 },
  { id: 3, name: 'Zone 3: Pergola Green Wall', type: 'Fine Mist Micro-Emitters', duration: '8 mins', moisture: 35 },
  { id: 4, name: 'Zone 4: Rear Poolside Turf', type: 'Concealed Pop-Up Jets', duration: '20 mins', moisture: 40 }
];

export const IrrigationDemo: React.FC = () => {
  const { state, selectIrrigationZone, startIrrigation, stopIrrigation, toggleRainDelay } = useDemo();

  const currentZone = gardenZones.find(z => z.id === state.activeIrrigationZone) || gardenZones[0];

  return (
    <div className="bg-brand-surface border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
      {/* Header Bar */}
      <div className="bg-slate-950 px-5 py-3.5 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2.5">
          <Droplets className="w-4 h-4 text-sky-400" />
          <span className="font-semibold text-slate-200">
            SMART LANDSCAPE IRRIGATION &bull; HUNTER / RAIN BIRD AUTOMATION
          </span>
        </div>

        <div className="flex items-center gap-2">
          {state.rainDelayActive ? (
            <span className="bg-amber-950/80 text-amber-300 border border-amber-800/80 px-3 py-1 rounded-full font-semibold flex items-center gap-1.5 text-[11px]">
              <CloudRain className="w-3.5 h-3.5" />
              <span>Monsoon Rain Sensor Active (Watering Suspended)</span>
            </span>
          ) : (
            <span className="bg-emerald-950/80 text-emerald-300 border border-emerald-800/80 px-3 py-1 rounded-full font-semibold flex items-center gap-1.5 text-[11px]">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>System Ready &bull; Solenoid Valves Online</span>
            </span>
          )}
        </div>
      </div>

      {/* Visual Canvas of Landscaped Garden & Sprinklers */}
      <div className="relative h-80 sm:h-96 overflow-hidden select-none border-b border-slate-800">
        {/* Real Landscape Lawn Photo Backdrop */}
        <img
          src="https://images.unsplash.com/photo-1592150621744-aca64f48394a?auto=format&fit=crop&w=1600&q=85"
          alt="Lush Villa Garden"
          className="w-full h-full object-cover brightness-[0.75] contrast-[1.05]"
        />

        {/* Ambient Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent pointer-events-none"></div>

        {/* Active Sprinkler Spray Water Animation Overlay */}
        {state.irrigationRunning && !state.rainDelayActive && (
          <div className="absolute inset-0 pointer-events-none z-10 flex items-end justify-around pb-12 px-6">
            {/* Pop-up Sprinkler Jet 1 */}
            <div className="relative flex flex-col items-center">
              <div className="w-20 sm:w-36 h-28 border-t-4 border-dashed border-sky-300/90 rounded-t-full animate-pulse shadow-[0_0_20px_#38bdf8] -rotate-12"></div>
              <div className="w-2.5 h-6 bg-slate-800 rounded-t border-t border-slate-400"></div>
              <div className="w-24 h-6 bg-sky-400/30 rounded-full blur-md animate-ping"></div>
            </div>

            {/* Pop-up Sprinkler Jet 2 (Center) */}
            <div className="relative flex flex-col items-center">
              <div className="w-28 sm:w-48 h-36 border-t-4 border-dashed border-sky-200/90 rounded-t-full animate-pulse shadow-[0_0_25px_#38bdf8]"></div>
              <div className="w-3 h-8 bg-slate-800 rounded-t border-t border-slate-400"></div>
              <div className="w-32 h-8 bg-sky-400/40 rounded-full blur-md animate-ping"></div>
            </div>

            {/* Pop-up Sprinkler Jet 3 */}
            <div className="relative flex flex-col items-center">
              <div className="w-20 sm:w-36 h-28 border-t-4 border-dashed border-sky-300/90 rounded-t-full animate-pulse shadow-[0_0_20px_#38bdf8] rotate-12"></div>
              <div className="w-2.5 h-6 bg-slate-800 rounded-t border-t border-slate-400"></div>
              <div className="w-24 h-6 bg-sky-400/30 rounded-full blur-md animate-ping"></div>
            </div>

            {/* Water Mist Fog Layer across Lawn */}
            <div className="absolute inset-x-0 bottom-4 h-24 bg-gradient-to-t from-sky-400/20 via-sky-300/10 to-transparent blur-md pointer-events-none animate-pulse"></div>
          </div>
        )}

        {/* Floating Mobile Controller Card Overlay */}
        <div className="absolute top-4 right-4 max-w-xs bg-slate-950/85 backdrop-blur-md border border-slate-700/80 rounded-2xl p-4 shadow-2xl z-20">
          <div className="flex items-center gap-2 mb-2 text-xs font-mono text-sky-400 font-bold uppercase">
            <Smartphone className="w-4 h-4" />
            <span>Mobile App Control</span>
          </div>

          <h3 className="text-sm font-bold text-white mb-0.5">{currentZone.name}</h3>
          <p className="text-[11px] text-slate-400 mb-3">{currentZone.type}</p>

          {/* Progress bar */}
          <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden mb-2">
            <div
              className="bg-gradient-to-r from-sky-500 to-emerald-400 h-full transition-all duration-500 rounded-full"
              style={{ width: `${state.irrigationRunning ? state.irrigationProgress : 0}%` }}
            ></div>
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
            <span>STATUS:</span>
            {state.rainDelayActive ? (
              <span className="text-amber-400 font-bold">RAIN PAUSE</span>
            ) : state.irrigationRunning ? (
              <span className="text-sky-400 font-bold animate-pulse">
                SPRAYING ({state.irrigationProgress}%)
              </span>
            ) : (
              <span className="text-slate-400 font-bold">STANDBY</span>
            )}
          </div>
        </div>

        {/* Bottom Lawn Details */}
        <div className="absolute bottom-4 left-4 z-20 bg-slate-950/85 backdrop-blur-md border border-slate-800 px-4 py-2.5 rounded-xl text-xs font-mono text-slate-300">
          <div className="flex items-center gap-2 text-sky-400 font-bold">
            <Waves className="w-4 h-4" />
            <span>SOIL MOISTURE SENSOR: {currentZone.moisture}%</span>
          </div>
          <div className="text-[11px] text-slate-400 mt-0.5">
            Auto-Schedule: 06:00 AM &bull; Duration: {currentZone.duration}
          </div>
        </div>
      </div>

      {/* Control Console */}
      <div className="p-5 sm:p-6 bg-brand-surface">
        {/* Zone Selector */}
        <div className="mb-5">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-2.5">
            Select Garden Zone:
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {gardenZones.map(zone => (
              <button
                key={zone.id}
                type="button"
                onClick={() => selectIrrigationZone(zone.id)}
                className={`p-3 rounded-xl border text-left transition-all ${
                  state.activeIrrigationZone === zone.id
                    ? 'bg-sky-950/90 border-sky-500 text-white shadow-lg'
                    : 'bg-brand-card/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                <div className="text-[10px] font-mono font-bold text-sky-400">ZONE 0{zone.id}</div>
                <div className="text-xs font-semibold truncate text-slate-200 mt-0.5">
                  {zone.name.split(':')[1] || zone.name}
                </div>
                <div className="text-[10px] text-slate-400 mt-0.5">Moisture: {zone.moisture}%</div>
              </button>
            ))}
          </div>
        </div>

        {/* Action Controls */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800/80">
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={startIrrigation}
              disabled={state.irrigationRunning || state.rainDelayActive}
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm shadow-md transition-all ${
                state.irrigationRunning || state.rainDelayActive
                  ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                  : 'bg-sky-600 hover:bg-sky-500 text-white shadow-sky-600/30 active:scale-95'
              }`}
            >
              <Play className="w-4 h-4 fill-current" />
              <span>Turn On Sprinklers</span>
            </button>

            <button
              type="button"
              onClick={stopIrrigation}
              disabled={!state.irrigationRunning}
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                !state.irrigationRunning
                  ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                  : 'bg-slate-700 hover:bg-slate-600 text-white active:scale-95'
              }`}
            >
              <Square className="w-4 h-4" />
              <span>Turn Off</span>
            </button>
          </div>

          <div className="flex items-center justify-between bg-brand-card/60 border border-slate-800 rounded-xl px-4 py-2.5">
            <div>
              <span className="text-xs font-semibold text-slate-200 block">Monsoon Rain Sensor</span>
              <span className="text-[11px] text-slate-400">Simulate rain pause trigger</span>
            </div>
            <button
              type="button"
              onClick={toggleRainDelay}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold border transition-all ${
                state.rainDelayActive
                  ? 'bg-amber-500 text-slate-950 border-amber-400'
                  : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
              }`}
            >
              {state.rainDelayActive ? 'Deactivate Rain Delay' : 'Simulate Rain Pause'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
