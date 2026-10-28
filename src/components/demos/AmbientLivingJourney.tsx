import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Sparkles,
  Sun,
  Moon,
  Film,
  Play,
  Pause,
  RotateCcw,
  Sliders,
  Smartphone,
  Eye,
  ShieldCheck,
  ChevronRight,
  Maximize2,
  Wind,
  Layers,
  Thermometer,
  Zap,
  Activity,
  Compass
} from 'lucide-react';

interface AngleConfig {
  id: 'living' | 'bedroom' | 'exterior' | 'video_suite';
  label: string;
  subLabel: string;
  frameCount: number;
  basePath: string;
  scenes: {
    name: string;
    description: string;
    frame: number;
    lux: number;
    power: string;
    color: string;
    curtainPct?: number;
    temp?: number;
  }[];
}

const ROOM_ANGLES: AngleConfig[] = [
  {
    id: 'living',
    label: '01. Grand Living & Cinema Suite',
    subLabel: 'Acoustic Wall & Multi-Tier Cove Lighting',
    frameCount: 222,
    basePath: 'https://www.myeglu.com/uploads/images/seequence/tab/video-1/frames-1/frame_',
    scenes: [
      {
        name: 'Midnight Blackout',
        description: 'All interior circuits de-energized. Deep architectural silence.',
        frame: 1,
        lux: 0,
        power: '2 W (Standby)',
        color: '#64748b'
      },
      {
        name: 'Warm Amber Lounge',
        description: '2700K indirect cove glow behind slatted timber acoustic walls.',
        frame: 55,
        lux: 180,
        power: '42 W',
        color: '#f59e0b'
      },
      {
        name: 'Daylight Architectural',
        description: 'High-CRI 4000K balanced illumination across the monolithic lounge.',
        frame: 110,
        lux: 620,
        power: '148 W',
        color: '#38bdf8'
      },
      {
        name: 'Intimate Discussion',
        description: 'Focused perimeter spotlights with dimmed central coffee lounge.',
        frame: 165,
        lux: 260,
        power: '64 W',
        color: '#fbbf24'
      },
      {
        name: 'Cinematic Movie Night',
        description: 'Deep violet ceiling cove with vibrant cyan-indigo backlighting.',
        frame: 222,
        lux: 45,
        power: '36 W',
        color: '#a855f7'
      }
    ]
  },
  {
    id: 'bedroom',
    label: '02. Master Suite & Smart Drapery',
    subLabel: 'Motorized Drapery, Climate & Pendant Glow',
    frameCount: 184,
    basePath: 'https://www.myeglu.com/uploads/images/seequence/tab/video-2/frames-1/frame_',
    scenes: [
      {
        name: 'Morning Natural Vista',
        description: 'Automated drapes fully retracted, revealing panoramic nature views.',
        frame: 46,
        lux: 750,
        power: '0 W (Solar Daylight)',
        color: '#38bdf8',
        curtainPct: 0,
        temp: 24
      },
      {
        name: 'Afternoon Climate Comfort',
        description: 'Inverter AC maintaining 21°C with sheer glare-reducing drapery.',
        frame: 92,
        lux: 420,
        power: '85 W',
        color: '#06b6d4',
        curtainPct: 40,
        temp: 21
      },
      {
        name: 'Evening Bedside Ambiance',
        description: 'Frosted sphere pendant illuminated with warm 2400K nightstand accents.',
        frame: 138,
        lux: 140,
        power: '28 W',
        color: '#f59e0b',
        curtainPct: 75,
        temp: 23
      },
      {
        name: 'Good Night Sleep Sanctuary',
        description: '100% acoustic blackout closure with whisper-quiet sleep climate.',
        frame: 184,
        lux: 8,
        power: '12 W',
        color: '#6366f1',
        curtainPct: 100,
        temp: 22
      }
    ]
  },
  {
    id: 'exterior',
    label: '03. Architectural Villa Facade',
    subLabel: 'Multi-Level Exterior, Landscape & Entrance Flow',
    frameCount: 278,
    basePath: 'https://www.myeglu.com/uploads/images/seequence/tab/video-3/frames-1/frame_',
    scenes: [
      {
        name: 'Dusk Ambient Illumination',
        description: 'Exterior landscape bollards and driveway step strip lights active.',
        frame: 70,
        lux: 95,
        power: '52 W',
        color: '#38bdf8'
      },
      {
        name: 'Master Balcony & Wood Pillar Focus',
        description: 'Fluted timber vertical column backlighting with balcony accent wash.',
        frame: 140,
        lux: 210,
        power: '110 W',
        color: '#f59e0b'
      },
      {
        name: 'Evening Arrival Welcome',
        description: 'Synchronized dual-floor illumination with garage port safety beacon.',
        frame: 210,
        lux: 380,
        power: '190 W',
        color: '#10b981'
      },
      {
        name: 'Estate Night Security Perimeter',
        description: 'Automated garage closure, infrared boundary armed, low architectural wash.',
        frame: 278,
        lux: 60,
        power: '45 W',
        color: '#6366f1'
      }
    ]
  },
  {
    id: 'video_suite',
    label: '04. Cinematic Master Tour (Video Flow)',
    subLabel: '60 FPS Ultra-HD Fluid Architectural Flythrough',
    frameCount: 100,
    basePath: '',
    scenes: [
      {
        name: 'Fluid Bedroom & Living Space Walkthrough',
        description: 'Direct video stream demonstrating continuous motorized scene modulation.',
        frame: 50,
        lux: 220,
        power: 'Adaptive',
        color: '#38bdf8'
      }
    ]
  }
];

export const AmbientLivingJourney: React.FC = () => {
  const [activeAngleIndex, setActiveAngleIndex] = useState<number>(0);
  const currentAngle = ROOM_ANGLES[activeAngleIndex];

  // Current frame state (1 to currentAngle.frameCount)
  const [currentFrame, setCurrentFrame] = useState<number>(55);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);
  const [controlMode, setControlMode] = useState<'wall' | 'app'>('wall');
  const [loadingProgress, setLoadingProgress] = useState<number>(0);
  const [isPreloaded, setIsPreloaded] = useState<boolean>(false);

  // Canvas and animation references
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imageCache = useRef<Map<number, HTMLImageElement>>(new Map());
  const animFrameReq = useRef<number | null>(null);
  const targetFrameRef = useRef<number | null>(null);

  // Helper to format frame path
  const getFrameUrl = useCallback(
    (frame: number, angle: AngleConfig) => {
      const pad = String(frame).padStart(4, '0');
      return `${angle.basePath}${pad}.webp`;
    },
    []
  );

  // Draw a specific frame to the canvas
  const drawFrame = useCallback((img: HTMLImageElement) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set high-DPI internal dimensions match aspect ratio
    const width = 1024;
    const height = 1366;
    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
    }

    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(img, 0, 0, width, height);
  }, []);

  // Render a specific frame number
  const renderFrameNumber = useCallback(
    (frameNum: number) => {
      if (currentAngle.id === 'video_suite') return;
      const clamped = Math.max(1, Math.min(frameNum, currentAngle.frameCount));
      const cached = imageCache.current.get(clamped);

      if (cached && cached.complete && cached.naturalWidth > 0) {
        drawFrame(cached);
      } else {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.src = getFrameUrl(clamped, currentAngle);
        img.onload = () => {
          imageCache.current.set(clamped, img);
          drawFrame(img);
        };
      }
    },
    [currentAngle, drawFrame, getFrameUrl]
  );

  // Preload keyframes when switching room angles
  useEffect(() => {
    if (currentAngle.id === 'video_suite') {
      setIsPreloaded(true);
      return;
    }

    setIsPreloaded(false);
    setLoadingProgress(10);
    imageCache.current.clear();

    // Default start frame for the angle
    const defaultFrame = currentAngle.scenes[1]?.frame || Math.floor(currentAngle.frameCount / 2);
    setCurrentFrame(defaultFrame);

    // Preload key scene frames immediately
    const framesToPreload = new Set<number>();
    currentAngle.scenes.forEach((s) => framesToPreload.add(s.frame));
    // Sample every 4th frame for high performance responsive scrubbing
    const step = 4;
    for (let f = 1; f <= currentAngle.frameCount; f += step) {
      framesToPreload.add(f);
    }
    framesToPreload.add(currentAngle.frameCount);

    const totalToLoad = framesToPreload.size;
    let loadedCount = 0;

    framesToPreload.forEach((frameNum) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.src = getFrameUrl(frameNum, currentAngle);
      img.onload = () => {
        imageCache.current.set(frameNum, img);
        loadedCount++;
        setLoadingProgress(Math.min(100, Math.round((loadedCount / totalToLoad) * 100)));
        if (frameNum === defaultFrame) {
          drawFrame(img);
        }
        if (loadedCount >= Math.min(12, totalToLoad)) {
          setIsPreloaded(true);
        }
      };
      img.onerror = () => {
        loadedCount++;
      };
    });
  }, [currentAngle, getFrameUrl, drawFrame]);

  // Handle smooth transition to target frame
  const transitionToFrame = (target: number) => {
    setIsPlaying(false);
    targetFrameRef.current = target;

    const stepTransition = () => {
      if (targetFrameRef.current === null) return;
      setCurrentFrame((prev) => {
        const diff = targetFrameRef.current! - prev;
        if (Math.abs(diff) <= 2) {
          targetFrameRef.current = null;
          renderFrameNumber(target);
          return target;
        }
        const stepSize = Math.max(1, Math.round(diff * 0.18));
        const next = prev + stepSize;
        renderFrameNumber(next);
        requestAnimationFrame(stepTransition);
        return next;
      });
    };

    requestAnimationFrame(stepTransition);
  };

  // Play / Pause auto-scrub loop
  useEffect(() => {
    if (!isPlaying || currentAngle.id === 'video_suite') return;

    let frame = currentFrame;
    let lastTime = performance.now();
    const fps = 24 * playbackSpeed;
    const interval = 1000 / fps;

    const loop = (now: number) => {
      const elapsed = now - lastTime;
      if (elapsed >= interval) {
        lastTime = now - (elapsed % interval);
        frame = frame >= currentAngle.frameCount ? 1 : frame + 1;
        setCurrentFrame(frame);
        renderFrameNumber(frame);
      }
      animFrameReq.current = requestAnimationFrame(loop);
    };

    animFrameReq.current = requestAnimationFrame(loop);
    return () => {
      if (animFrameReq.current) cancelAnimationFrame(animFrameReq.current);
    };
  }, [isPlaying, currentAngle, playbackSpeed, currentFrame, renderFrameNumber]);

  // Current active scene metadata
  const activeScene =
    currentAngle.scenes.reduce((closest, scene) => {
      return Math.abs(scene.frame - currentFrame) < Math.abs(closest.frame - currentFrame)
        ? scene
        : closest;
    }, currentAngle.scenes[0]) || currentAngle.scenes[0];

  // Dynamic values calculated from frame position
  const progressRatio = currentAngle.frameCount > 0 ? (currentFrame - 1) / (currentAngle.frameCount - 1) : 0;
  const currentCurtain = Math.round(progressRatio * 100);
  const currentTemp = Math.round(26 - progressRatio * 6);

  return (
    <div className="bg-brand-surface border border-slate-800 rounded-3xl overflow-hidden shadow-2xl transition-all">
      {/* =========================================================
          TOP ARCHITECTURAL BAR & ROOM ANGLE TABS
          ========================================================= */}
      <div className="bg-slate-950/95 border-b border-slate-800 px-4 sm:px-8 py-4 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-0.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-sky-400">
              Photorealistic Scene Orchestration &bull; Frame-by-Frame Flow
            </span>
          </div>
          <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
            <span>{currentAngle.label}</span>
            <span className="text-xs text-slate-400 font-normal hidden md:inline">
              &bull; {currentAngle.subLabel}
            </span>
          </h3>
        </div>

        {/* Room Angle Selector Tabs */}
        <div className="flex items-center gap-1 bg-slate-900/90 p-1.5 rounded-2xl border border-slate-800 overflow-x-auto max-w-full">
          {ROOM_ANGLES.map((angle, idx) => (
            <button
              key={angle.id}
              type="button"
              onClick={() => {
                setIsPlaying(false);
                setActiveAngleIndex(idx);
              }}
              className={`px-3 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
                activeAngleIndex === idx
                  ? 'bg-gradient-to-r from-sky-600 to-indigo-600 text-white shadow-lg shadow-sky-500/20'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              {idx === 0 && <Layers className="w-3.5 h-3.5" />}
              {idx === 1 && <Wind className="w-3.5 h-3.5" />}
              {idx === 2 && <Compass className="w-3.5 h-3.5" />}
              {idx === 3 && <Film className="w-3.5 h-3.5" />}
              <span>{angle.label.split('.')[1] || angle.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* =========================================================
          MAIN INTERACTIVE STAGE: CANVAS VIEWPORT + DUAL CONSOLE
          ========================================================= */}
      <div className="relative bg-slate-950 flex flex-col xl:flex-row items-stretch overflow-hidden">
        
        {/* Left: Interactive Canvas Screen */}
        <div className="relative flex-1 min-h-[420px] sm:min-h-[520px] lg:min-h-[640px] bg-black flex items-center justify-center overflow-hidden select-none group">
          
          {/* Loading indicator bar */}
          {!isPreloaded && currentAngle.id !== 'video_suite' && (
            <div className="absolute top-0 inset-x-0 h-1 bg-slate-900 z-30">
              <div
                className="h-full bg-sky-500 transition-all duration-300"
                style={{ width: `${loadingProgress}%` }}
              ></div>
            </div>
          )}

          {/* HTML5 Dynamic Canvas for Sequences (Angles 1, 2, 3) */}
          {currentAngle.id !== 'video_suite' ? (
            <div className="relative w-full h-full flex items-center justify-center p-2 sm:p-4">
              <canvas
                ref={canvasRef}
                className="max-h-[620px] w-auto max-w-full rounded-2xl shadow-2xl object-contain border border-slate-800/80 transition-all duration-300"
              />

              {/* Real-time Atmospheric Glow Accent on Container */}
              <div
                className="absolute inset-0 pointer-events-none opacity-20 blur-3xl transition-all duration-700"
                style={{ backgroundColor: activeScene.color }}
              ></div>
            </div>
          ) : (
            /* Angle 4: 60 FPS Direct Video Stream */
            <div className="relative w-full h-full min-h-[460px] sm:min-h-[560px] flex items-center justify-center p-2 sm:p-4">
              <video
                src="https://cms.www.myeglu.com/uploads/output_living_2_c9a137564c.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="max-h-[620px] w-auto max-w-full rounded-2xl shadow-2xl object-cover border border-slate-800"
              />
            </div>
          )}

          {/* Top-Right Telemetry HUD Overlay */}
          <div className="absolute top-4 right-4 z-20 flex flex-col sm:flex-row gap-2">
            <div className="bg-slate-950/80 backdrop-blur-md border border-slate-800/80 px-3 py-1.5 rounded-xl text-right">
              <div className="text-[9px] font-mono text-slate-400 uppercase">Est. LUX Level</div>
              <div className="text-xs font-bold text-sky-300 flex items-center justify-end gap-1">
                <Sun className="w-3 h-3 text-amber-400" />
                <span>{activeScene.lux} Lux</span>
              </div>
            </div>

            <div className="bg-slate-950/80 backdrop-blur-md border border-slate-800/80 px-3 py-1.5 rounded-xl text-right">
              <div className="text-[9px] font-mono text-slate-400 uppercase">Power Draw</div>
              <div className="text-xs font-bold text-emerald-400 flex items-center justify-end gap-1">
                <Zap className="w-3 h-3 text-emerald-400" />
                <span>{activeScene.power}</span>
              </div>
            </div>
          </div>

          {/* Bottom-Left Room Active Scene HUD */}
          <div className="absolute bottom-16 sm:bottom-20 left-4 z-20 max-w-sm sm:max-w-md bg-slate-950/90 backdrop-blur-md border border-slate-700/80 p-3.5 rounded-2xl shadow-2xl">
            <div className="flex items-center gap-2 mb-1">
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: activeScene.color }}
              ></span>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-sky-400">
                ACTIVE STATE &bull; {activeScene.name}
              </span>
            </div>
            <p className="text-xs text-slate-200 leading-snug">{activeScene.description}</p>
          </div>

          {/* Bottom Timeline Scrubber & Player Controls (for Sequences) */}
          {currentAngle.id !== 'video_suite' && (
            <div className="absolute bottom-3 inset-x-4 z-20 bg-slate-950/90 backdrop-blur-lg border border-slate-800/90 px-4 py-2.5 rounded-2xl shadow-2xl flex items-center gap-3">
              {/* Play / Pause Toggle */}
              <button
                type="button"
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-8 h-8 rounded-xl bg-sky-600 hover:bg-sky-500 text-white flex items-center justify-center transition-all shadow-md shrink-0"
                title={isPlaying ? 'Pause Sequence' : 'Play Sequence Tour'}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
              </button>

              {/* Reset to Frame 1 */}
              <button
                type="button"
                onClick={() => {
                  setIsPlaying(false);
                  setCurrentFrame(1);
                  renderFrameNumber(1);
                }}
                className="w-8 h-8 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center transition-all shrink-0"
                title="Rewind to Start"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>

              {/* Interactive Smooth Scrub Bar */}
              <div className="flex-1 flex flex-col justify-center">
                <input
                  type="range"
                  min={1}
                  max={currentAngle.frameCount}
                  value={currentFrame}
                  onChange={(e) => {
                    setIsPlaying(false);
                    const val = parseInt(e.target.value, 10);
                    setCurrentFrame(val);
                    renderFrameNumber(val);
                  }}
                  className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-400"
                />
                <div className="flex justify-between items-center text-[9px] font-mono text-slate-400 mt-1">
                  <span>Frame {currentFrame} / {currentAngle.frameCount}</span>
                  <span className="hidden sm:inline">Drag scrubber to modulate lighting & shades</span>
                  <span className="text-sky-400">{Math.round(progressRatio * 100)}%</span>
                </div>
              </div>

              {/* Speed Toggle (1x / 2x) */}
              <button
                type="button"
                onClick={() => setPlaybackSpeed(playbackSpeed === 1 ? 2 : 1)}
                className="px-2 py-1 rounded-lg bg-slate-800 text-[10px] font-mono font-bold text-slate-300 hover:text-white shrink-0"
              >
                {playbackSpeed}x Speed
              </button>
            </div>
          )}
        </div>

        {/* =========================================================
            RIGHT: eGLU-STYLE ARCHITECTURAL CONTROL CONSOLE
            ========================================================= */}
        <div className="w-full xl:w-[460px] bg-slate-900/90 border-t xl:border-t-0 xl:border-l border-slate-800 p-5 sm:p-6 flex flex-col justify-between">
          <div>
            {/* Header with Switcher between Wall Touch Panel & Mobile App */}
            <div className="flex items-center justify-between pb-3 mb-5 border-b border-slate-800">
              <div>
                <span className="text-xs font-bold text-white uppercase tracking-wider block">
                  Intelligent Control Interface
                </span>
                <span className="text-[11px] text-slate-400">
                  Select predefined architectural scenes or modulate individual channels:
                </span>
              </div>

              <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800">
                <button
                  type="button"
                  onClick={() => setControlMode('wall')}
                  className={`px-2.5 py-1 rounded-lg text-[10px] font-bold transition-all ${
                    controlMode === 'wall'
                      ? 'bg-sky-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Wall Keypad
                </button>
                <button
                  type="button"
                  onClick={() => setControlMode('app')}
                  className={`px-2.5 py-1 rounded-lg text-[10px] font-bold transition-all ${
                    controlMode === 'app'
                      ? 'bg-sky-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Mobile App
                </button>
              </div>
            </div>

            {/* 1. SCENE PRESET SELECTOR (1-CLICK FLOW) */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-mono font-bold text-slate-300 uppercase flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  Preset Scene Orchestration
                </span>
                <span className="text-[9px] font-mono text-emerald-400">LIVE SYNC</span>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                {currentAngle.scenes.map((scene, i) => {
                  const isSelected = activeScene.name === scene.name;
                  return (
                    <button
                      key={i}
                      type="button"
                      onClick={() => transitionToFrame(scene.frame)}
                      className={`p-3 rounded-2xl border text-left transition-all relative overflow-hidden group ${
                        isSelected
                          ? 'bg-slate-950 border-sky-500 shadow-xl ring-1 ring-sky-500'
                          : 'bg-slate-950/70 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-950'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: scene.color }}
                        ></span>
                        <span className="text-[9px] font-mono text-slate-500">
                          F-{scene.frame}
                        </span>
                      </div>
                      <div className="text-xs font-bold text-white group-hover:text-sky-300 transition-colors">
                        {scene.name}
                      </div>
                      <div className="text-[10px] text-slate-400 mt-1 line-clamp-1">
                        {scene.lux} Lux &bull; {scene.power}
                      </div>
                      {isSelected && (
                        <div
                          className="absolute bottom-0 inset-x-0 h-0.5"
                          style={{ backgroundColor: scene.color }}
                        ></div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. REAL-TIME HARDWARE CHANNEL CONTROLLERS */}
            <div className="space-y-4 pt-4 border-t border-slate-800">
              
              {/* Drapery / Curtains Channel Gauge */}
              <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Sliders className="w-4 h-4 text-sky-400" />
                    <div>
                      <span className="text-xs font-bold text-white block">Motorized Drapery Track</span>
                      <span className="text-[10px] text-slate-400">Somfy 24V Ultra-Quiet Motor</span>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-sky-400 bg-sky-950/60 px-2.5 py-1 rounded-lg border border-sky-800/80">
                    {currentCurtain}% CLOSED
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => transitionToFrame(1)}
                    className="flex-1 py-1.5 text-[10px] font-bold rounded-lg bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-300"
                  >
                    Open (0%)
                  </button>
                  <button
                    type="button"
                    onClick={() => transitionToFrame(Math.floor(currentAngle.frameCount / 2))}
                    className="flex-1 py-1.5 text-[10px] font-bold rounded-lg bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-300"
                  >
                    Sheer (50%)
                  </button>
                  <button
                    type="button"
                    onClick={() => transitionToFrame(currentAngle.frameCount)}
                    className="flex-1 py-1.5 text-[10px] font-bold rounded-lg bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-300"
                  >
                    Blackout (100%)
                  </button>
                </div>
              </div>

              {/* Climate Inverter Thermostat Gauge */}
              <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Thermometer className="w-4 h-4 text-cyan-400" />
                    <div>
                      <span className="text-xs font-bold text-white block">Adaptive Inverter Climate</span>
                      <span className="text-[10px] text-slate-400">VRF / Multi-Split HVAC Integration</span>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-cyan-300 bg-cyan-950/60 px-2.5 py-1 rounded-lg border border-cyan-800/80">
                    {currentTemp}°C ACTIVE
                  </span>
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-400 bg-slate-900 px-3 py-2 rounded-xl">
                  <span>Fan: Auto Whisper (18dB)</span>
                  <span className="text-emerald-400 font-mono">ECO Mode On</span>
                </div>
              </div>

            </div>
          </div>

          {/* Bottom Protocol Footer */}
          <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-500 font-mono">
            <span>MAXDAX &bull; eGlu Ecosystem</span>
            <span className="text-slate-400">Low-Latency RF &bull; Zigbee 3.0</span>
          </div>
        </div>

      </div>
    </div>
  );
};
