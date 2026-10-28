import React, { useState, useEffect } from 'react';
import { useDemo } from '../../context/DemoContext';
import {
  Eye,
  Moon,
  Sun,
  ShieldAlert,
  Grid,
  Square,
  Maximize2,
  Video,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';

interface CameraFeed {
  id: number;
  name: string;
  location: string;
  dayImage: string;
  nightImage: string;
  resolution: string;
}

const cameraFeeds: CameraFeed[] = [
  {
    id: 1,
    name: 'CAM 01 — MAIN GATE & DRIVEWAY',
    location: 'North Entrance Pillar',
    dayImage: 'https://images.unsplash.com/photo-1613082390827-02e867518456?auto=format&fit=crop&w=1000&q=80',
    nightImage: 'https://images.unsplash.com/photo-1509114397022-ed747cca3f65?auto=format&fit=crop&w=1000&q=80',
    resolution: '4K ColorVu'
  },
  {
    id: 2,
    name: 'CAM 02 — FRONT PORTICO & FOYER',
    location: 'Main Residence Entry',
    dayImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
    nightImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80',
    resolution: '4K ColorVu'
  },
  {
    id: 3,
    name: 'CAM 03 — EAST BOUNDARY WALL',
    location: 'Perimeter Boundary Tripwire',
    dayImage: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1000&q=80',
    nightImage: 'https://images.unsplash.com/photo-1509114397022-ed747cca3f65?auto=format&fit=crop&w=1000&q=80',
    resolution: '4K Ultra HD'
  },
  {
    id: 4,
    name: 'CAM 04 — REAR GARDEN & POOLSIDE',
    location: 'South Lawn Terrace',
    dayImage: 'https://images.unsplash.com/photo-1558435186-d31d1430097a?auto=format&fit=crop&w=1000&q=80',
    nightImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80',
    resolution: '4K Ultra HD'
  }
];

export const CCTVDemo: React.FC = () => {
  const { state, selectCamera, toggleNightMode, triggerMotion } = useDemo();
  const [viewMode, setViewMode] = useState<'quad' | 'single'>('quad');
  const [liveTime, setLiveTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setLiveTime(now.toLocaleTimeString('en-US', { hour12: false }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const currentCam = cameraFeeds.find(c => c.id === state.activeCameraId) || cameraFeeds[0];

  return (
    <div className="bg-brand-surface border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
      {/* CCTV HUD Top Bar */}
      <div className="bg-slate-950 px-5 py-3.5 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse"></span>
            <span className="font-mono font-bold text-rose-400 tracking-wider">LIVE SURVEILLANCE &bull; 4K NVR</span>
          </div>
          <span className="text-slate-700">|</span>
          <span className="font-mono text-slate-300 font-semibold hidden sm:inline">
            {viewMode === 'quad' ? '4-CAMERA SECURITY WALL' : currentCam.name}
          </span>
        </div>

        <div className="flex items-center gap-3 text-slate-400 font-mono text-xs">
          <span className="text-sky-400 font-bold bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
            {liveTime}
          </span>
          <div className="flex items-center bg-slate-900 border border-slate-800 rounded-lg p-0.5">
            <button
              type="button"
              onClick={() => setViewMode('quad')}
              className={`p-1.5 rounded text-xs flex items-center gap-1 transition-all ${
                viewMode === 'quad'
                  ? 'bg-sky-600 text-white font-bold shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="4-Camera Quad Matrix View"
            >
              <Grid className="w-3.5 h-3.5" />
              <span className="hidden md:inline text-[11px]">4-Screen Wall</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('single')}
              className={`p-1.5 rounded text-xs flex items-center gap-1 transition-all ${
                viewMode === 'single'
                  ? 'bg-sky-600 text-white font-bold shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Single Focused Camera"
            >
              <Square className="w-3.5 h-3.5" />
              <span className="hidden md:inline text-[11px]">Single View</span>
            </button>
          </div>
        </div>
      </div>

      {/* Camera Video Monitor Canvas */}
      {viewMode === 'quad' ? (
        /* 4-Camera Grid View (Quad Screen) */
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 bg-slate-950 p-1 border-b border-slate-800 select-none">
          {cameraFeeds.map(cam => {
            const isAlertCam = cam.id === 1 && state.cctvMotionDetected;
            const isSelected = cam.id === state.activeCameraId;

            return (
              <div
                key={cam.id}
                onClick={() => {
                  selectCamera(cam.id);
                  setViewMode('single');
                }}
                className={`relative h-44 sm:h-56 bg-black overflow-hidden cursor-pointer group border-2 transition-all ${
                  isAlertCam
                    ? 'border-rose-500 shadow-[0_0_15px_#f43f5e]'
                    : isSelected
                    ? 'border-sky-500'
                    : 'border-slate-800 hover:border-slate-600'
                }`}
              >
                <img
                  src={state.cctvNightMode ? cam.nightImage : cam.dayImage}
                  alt={cam.name}
                  className={`w-full h-full object-cover transition-all duration-700 ${
                    state.cctvNightMode ? 'brightness-75 contrast-125' : ''
                  }`}
                />

                {/* Subtitle / Overlay Badge */}
                <div className="absolute top-2 left-2 flex items-center gap-1.5 bg-slate-950/80 backdrop-blur px-2 py-0.5 rounded text-[10px] font-mono text-white border border-slate-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>{cam.name.split('—')[0]}</span>
                </div>

                <div className="absolute top-2 right-2 bg-slate-950/80 backdrop-blur px-1.5 py-0.5 rounded text-[9px] font-mono text-sky-400 border border-slate-800">
                  {cam.resolution}
                </div>

                {/* Intruder AI Detection Box on Camera 1 */}
                {isAlertCam && (
                  <div className="absolute inset-0 border-4 border-rose-500 bg-rose-500/10 flex flex-col justify-between p-3 animate-pulse">
                    <div className="bg-rose-600 text-white font-mono font-bold text-[10px] px-2 py-0.5 rounded w-max flex items-center gap-1">
                      <ShieldAlert className="w-3 h-3" />
                      <span>INTRUDER DETECTED &bull; TRIPWIRE BREACH</span>
                    </div>
                    <div className="bg-slate-950/90 text-rose-300 font-mono text-[9px] px-2 py-1 rounded w-max border border-rose-800">
                      AI HUMAN CONFIDENCE: 98.4%
                    </div>
                  </div>
                )}

                <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[10px] font-mono text-slate-300 bg-slate-950/70 backdrop-blur px-2 py-1 rounded">
                  <span>{cam.location}</span>
                  <span className="text-slate-400 group-hover:text-sky-300 flex items-center gap-1">
                    <span>Click to zoom</span>
                    <Maximize2 className="w-3 h-3" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* Single Focused Camera View */
        <div className="relative h-72 sm:h-96 bg-black overflow-hidden group select-none border-b border-slate-800">
          <img
            src={state.cctvNightMode ? currentCam.nightImage : currentCam.dayImage}
            alt={currentCam.name}
            className={`w-full h-full object-cover transition-all duration-700 ${
              state.cctvNightMode ? 'brightness-75 contrast-125' : ''
            }`}
          />

          {/* AI Bounding Box */}
          {state.cctvMotionDetected && currentCam.id === 1 && (
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-48 h-56 border-2 border-rose-500 bg-rose-500/10 rounded-sm animate-pulse flex flex-col justify-between p-2 z-20">
              <div className="bg-rose-600 text-white font-mono font-bold text-[10px] px-2 py-0.5 rounded w-max uppercase flex items-center gap-1">
                <ShieldAlert className="w-3 h-3" />
                <span>INTRUSION ALERT</span>
              </div>
              <div className="font-mono text-[10px] text-rose-300 bg-slate-950/80 px-2 py-0.5 rounded self-end border border-rose-800">
                AI RECOGNITION: HUMAN
              </div>
            </div>
          )}

          {/* Overlay OSD */}
          <div className="absolute top-4 left-4 flex items-center gap-2 bg-slate-950/80 backdrop-blur px-3 py-1.5 rounded-lg border border-slate-800 text-xs font-mono text-white">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-bold text-sky-400">{currentCam.name}</span>
          </div>

          <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between pointer-events-none z-10 text-xs font-mono">
            <div className="bg-slate-950/85 backdrop-blur-md px-3.5 py-2 rounded-lg border border-slate-800 text-slate-300">
              <div>LOCATION: {currentCam.location}</div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                MODE: {state.cctvNightMode ? 'ColorVu Low-Light Active' : 'Full Spectrum Day Color'}
              </div>
            </div>

            {state.cctvMotionDetected && currentCam.id === 1 ? (
              <div className="bg-rose-950/90 border border-rose-500 text-rose-300 px-3.5 py-2 rounded-lg animate-bounce font-bold flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-rose-400" />
                <span>PERIMETER INTRUSION DETECTED</span>
              </div>
            ) : (
              <div className="bg-slate-950/70 border border-slate-800 text-emerald-400 px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>PERIMETER SECURE</span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Control Console */}
      <div className="p-5 sm:p-6 bg-brand-surface">
        {/* Camera Quick Selectors */}
        <div className="mb-5">
          <div className="flex items-center justify-between mb-2.5">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Select Surveillance Channel:
            </span>
            <span className="text-[11px] font-mono text-slate-400">
              Viewing: Channel 0{state.activeCameraId}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {cameraFeeds.map(cam => (
              <button
                key={cam.id}
                type="button"
                onClick={() => {
                  selectCamera(cam.id);
                  setViewMode('single');
                }}
                className={`p-3 rounded-xl border text-left transition-all ${
                  state.activeCameraId === cam.id && viewMode === 'single'
                    ? 'bg-sky-950/90 border-sky-500 text-white shadow-lg'
                    : 'bg-brand-card/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                <div className="text-[10px] font-mono font-bold text-sky-400">CH 0{cam.id}</div>
                <div className="text-xs font-semibold truncate text-slate-200 mt-0.5">
                  {cam.name.split('—')[1] || cam.name}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Feature Switches */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-800/80">
          <div className="flex flex-wrap items-center gap-2.5">
            <button
              type="button"
              onClick={toggleNightMode}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 border transition-all ${
                state.cctvNightMode
                  ? 'bg-indigo-950 border-indigo-500 text-indigo-300 shadow-lg'
                  : 'bg-slate-800/80 border-slate-700 text-slate-200 hover:bg-slate-700'
              }`}
            >
              {state.cctvNightMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-400" />}
              <span>{state.cctvNightMode ? 'Switch to Daylight Color' : 'ColorVu Low-Light Mode'}</span>
            </button>

            <button
              type="button"
              onClick={triggerMotion}
              className="px-4 py-2.5 rounded-xl text-xs font-bold bg-rose-950/80 hover:bg-rose-900 border border-rose-800 text-rose-200 flex items-center gap-2 transition-all shadow-md active:scale-95"
            >
              <ShieldAlert className="w-4 h-4 text-rose-400" />
              <span>Simulate Intruder Event</span>
            </button>
          </div>

          <div className="text-xs text-slate-400 font-mono">
            Direct NVR Link &bull; On-Premise Encrypted Storage
          </div>
        </div>
      </div>
    </div>
  );
};
