import React, { useState } from 'react';
import { useDemo } from '../../context/DemoContext';
import {
  ShieldCheck,
  Eye,
  Droplets,
  Lightbulb,
  Maximize2,
  Lock,
  Wifi,
  Music,
  Play,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface Hotspot {
  id: string;
  name: string;
  x: string;
  y: string;
  icon: any;
  category: string;
  summary: string;
  statusText: (state: any) => string;
  link: string;
}

const villaHotspots: Hotspot[] = [
  {
    id: 'gate',
    name: 'Perimeter Entrance & Motorized Gate',
    x: '16%',
    y: '78%',
    icon: ShieldCheck,
    category: 'Access Automation',
    summary: 'Italian high-torque sliding motor with anti-crush safety beams and vehicle transponder recognition.',
    statusText: state => `Gate Status: ${state.gateStatus.toUpperCase()}`,
    link: '/solutions/gate-automation'
  },
  {
    id: 'vdp',
    name: 'Front Portico & Video Door Phone',
    x: '42%',
    y: '65%',
    icon: Lock,
    category: 'Visitor Management',
    summary: '1080p wide-angle camera with night vision, 10" indoor touchscreen, and remote gate release.',
    statusText: state => (state.vdpDoorUnlocked ? 'ACCESS UNLOCKED' : 'INTERCOM STANDBY'),
    link: '/solutions/video-door-phone'
  },
  {
    id: 'living',
    name: 'Double-Height Living Salon',
    x: '52%',
    y: '42%',
    icon: Lightbulb,
    category: 'Architectural Lighting',
    summary: 'DALI-2 tunable white circadian lighting, motorized sheer drapes, and high-fidelity flush audio.',
    statusText: state => `Living: ${state.lightState.living.brightness}% Brightness`,
    link: '/solutions/smart-lighting'
  },
  {
    id: 'curtain',
    name: 'Master Suite & Glazing',
    x: '72%',
    y: '28%',
    icon: Maximize2,
    category: 'Motorized Drapery',
    summary: 'Whisper-quiet acoustic drapery motors with sunrise schedule and astronomical sun-tracking.',
    statusText: state => `Curtains: ${state.curtainPosition}% Open`,
    link: '/solutions/curtain-automation'
  },
  {
    id: 'garden',
    name: 'Landscape Grounds & Irrigation',
    x: '82%',
    y: '80%',
    icon: Droplets,
    category: 'Smart Irrigation',
    summary: 'Multi-zone solenoid valves with rain forecasting delay and capacitive soil moisture telemetry.',
    statusText: state => (state.irrigationRunning ? `Watering Zone 0${state.activeIrrigationZone}` : 'Irrigation Scheduled'),
    link: '/solutions/smart-irrigation'
  },
  {
    id: 'cctv',
    name: 'Perimeter 4K Optical Surveillance',
    x: '28%',
    y: '22%',
    icon: Eye,
    category: 'Perimeter Security',
    summary: 'Continuous 4K UHD color recording with AcuSense human & vehicle classification tripwires.',
    statusText: state => (state.cctvMotionDetected ? 'MOTION EVENT DETECTED' : 'Perimeter Armed & Recording'),
    link: '/solutions/cctv-surveillance'
  }
];

export const VillaExplorer: React.FC = () => {
  const { state, triggerMasterScene } = useDemo();
  const [activeHotspotId, setActiveHotspotId] = useState<string>('gate');

  const activeHotspot = villaHotspots.find(h => h.id === activeHotspotId) || villaHotspots[0];
  const IconComponent = activeHotspot.icon;

  return (
    <div className="bg-brand-surface border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
      {/* Visual Canvas of Architectural Smart Villa */}
      <div className="relative min-h-[420px] sm:min-h-[500px] bg-slate-950 overflow-hidden flex items-end">
        {/* Luxury Villa Architectural Photo Backdrop */}
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85"
          alt="MAXDAX Smart Villa Architecture"
          className="absolute inset-0 w-full h-full object-cover brightness-[0.72] contrast-[1.08]"
        />

        {/* Ambient Dark Gradient Vignette for Tech Aesthetics */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent pointer-events-none"></div>

        {/* Top Floating Telemetry Pills */}
        <div className="absolute top-5 inset-x-5 flex flex-wrap items-center justify-between gap-3 z-20 pointer-events-none">
          <div className="bg-slate-950/85 backdrop-blur-md border border-slate-700/80 px-3.5 py-1.5 rounded-full flex items-center gap-2.5 shadow-xl">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-xs font-mono font-semibold text-slate-200">
              VILLA ECOSYSTEM: SYNCHRONIZED (9 SUBSYSTEMS)
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-2 bg-slate-950/85 backdrop-blur-md border border-slate-700/80 px-3 py-1 rounded-full text-[11px] font-mono text-sky-400">
            <span>KALAMASSERY &bull; EDGE CONTROLLER OK</span>
          </div>
        </div>

        {/* Interactive Clickable Hotspots across Villa Facade */}
        {villaHotspots.map(spot => {
          const SpotIcon = spot.icon;
          const isSelected = activeHotspotId === spot.id;

          return (
            <div
              key={spot.id}
              style={{ left: spot.x, top: spot.y }}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
            >
              <button
                type="button"
                onClick={() => setActiveHotspotId(spot.id)}
                className={`relative group flex items-center justify-center transition-all ${
                  isSelected ? 'scale-125' : 'hover:scale-110'
                }`}
                aria-label={spot.name}
              >
                {/* Pulsing Glow Rings */}
                <span
                  className={`absolute w-11 h-11 rounded-full animate-ping-slow ${
                    isSelected ? 'bg-sky-400/50' : 'bg-slate-400/20 group-hover:bg-sky-400/30'
                  }`}
                ></span>

                {/* Core Hotspot Circle */}
                <span
                  className={`w-9 h-9 rounded-full flex items-center justify-center shadow-xl border-2 transition-all ${
                    isSelected
                      ? 'bg-sky-500 border-white text-slate-950 ring-4 ring-sky-500/30'
                      : 'bg-slate-900/90 border-slate-400/60 text-slate-200 group-hover:border-sky-400'
                  }`}
                >
                  <SpotIcon className="w-4 h-4" />
                </span>

                {/* Hover Tooltip Label */}
                <span className="absolute top-11 whitespace-nowrap bg-slate-950/90 backdrop-blur-md border border-slate-800 text-slate-200 text-[10px] font-mono font-semibold px-2 py-0.5 rounded shadow-lg pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                  {spot.name}
                </span>
              </button>
            </div>
          );
        })}

        {/* Dynamic Selected Subsystem Inspection Drawer */}
        <div className="relative z-30 w-full p-5 sm:p-7 bg-gradient-to-t from-brand-dark via-brand-dark/95 to-transparent">
          <div className="bg-brand-surface/90 backdrop-blur-xl border border-slate-700/80 rounded-2xl p-5 shadow-2xl flex flex-col md:flex-row md:items-center justify-between gap-5">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 shrink-0 shadow-inner">
                <IconComponent className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-sky-400 bg-sky-950/60 px-2 py-0.5 rounded border border-sky-800/60">
                    {activeHotspot.category}
                  </span>
                  <span className="text-xs font-mono font-semibold text-emerald-400">
                    &bull; {activeHotspot.statusText(state)}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-1">{activeHotspot.name}</h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                  {activeHotspot.summary}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0 pt-3 md:pt-0 border-t md:border-t-0 border-slate-800">
              <Link
                to={activeHotspot.link}
                className="flex items-center gap-2 bg-sky-600 hover:bg-sky-500 text-white px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm shadow-lg shadow-sky-600/25 transition-all hover:translate-x-0.5"
              >
                <span>Explore Solution</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Global Orchestration Control Strip */}
      <div className="bg-brand-card/90 border-t border-slate-800 px-6 py-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Simulate Whole-Residence Scenarios:
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <button
            type="button"
            onClick={() => triggerMasterScene('welcome_home')}
            className="px-3.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-sky-500 text-slate-200 text-xs font-semibold transition-all active:scale-95 flex items-center gap-1.5"
          >
            <Play className="w-3.5 h-3.5 text-sky-400" />
            <span>Arrive Home</span>
          </button>

          <button
            type="button"
            onClick={() => triggerMasterScene('movie_night')}
            className="px-3.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-amber-500 text-slate-200 text-xs font-semibold transition-all active:scale-95 flex items-center gap-1.5"
          >
            <Play className="w-3.5 h-3.5 text-amber-400" />
            <span>Cinema Immersion</span>
          </button>

          <button
            type="button"
            onClick={() => triggerMasterScene('garden_evening')}
            className="px-3.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-emerald-500 text-slate-200 text-xs font-semibold transition-all active:scale-95 flex items-center gap-1.5"
          >
            <Play className="w-3.5 h-3.5 text-emerald-400" />
            <span>Terrace Soiree</span>
          </button>

          <button
            type="button"
            onClick={() => triggerMasterScene('good_night')}
            className="px-3.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-indigo-500 text-slate-200 text-xs font-semibold transition-all active:scale-95 flex items-center gap-1.5"
          >
            <Play className="w-3.5 h-3.5 text-indigo-400" />
            <span>Night Guard</span>
          </button>
        </div>
      </div>
    </div>
  );
};
