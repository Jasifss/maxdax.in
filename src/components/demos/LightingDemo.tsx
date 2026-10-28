import React, { useState } from 'react';
import { useDemo } from '../../context/DemoContext';
import { Lightbulb, Sun, Sparkles, Moon, Film, Utensils, Home } from 'lucide-react';

export const LightingDemo: React.FC = () => {
  const { state, toggleLight, setBrightness, setColorTemp, triggerMasterScene } = useDemo();
  const [selectedRoom, setSelectedRoom] = useState<'living' | 'bedroom' | 'terrace' | 'garden'>('living');

  const currentRoomState = state.lightState[selectedRoom];

  const colorPresets = [
    { label: 'Candlelight (2200K)', hex: '#FFB347' },
    { label: 'Warm Amber (2700K)', hex: '#FFE5B4' },
    { label: 'Architectural Neutral (4000K)', hex: '#F8FAFC' },
    { label: 'Sky Azure (Accent)', hex: '#38BDF8' },
    { label: 'Royal Champagne', hex: '#E5B869' }
  ];

  return (
    <div className="bg-brand-surface border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
      {/* Lighting Header */}
      <div className="bg-brand-card/80 border-b border-slate-800 px-5 py-3.5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <Lightbulb className="w-4 h-4 text-amber-400" />
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
            DALI-2 / 0-10V Tunable Architectural Lighting Demonstration
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono">
          <span className="text-slate-400">BUS VOLTAGE: 24V DALI &bull;</span>
          <span className={currentRoomState.on ? 'text-amber-400 font-bold' : 'text-slate-500'}>
            {currentRoomState.on ? `ACTIVE (${currentRoomState.brightness}%)` : 'STANDBY (0%)'}
          </span>
        </div>
      </div>

      {/* Visual Room Lighting Canvas */}
      <div
        className="relative h-64 sm:h-76 transition-all duration-700 overflow-hidden border-b border-slate-800 flex items-center justify-center p-6"
        style={{
          backgroundColor: '#070A11',
          boxShadow: currentRoomState.on
            ? `inset 0 0 100px ${currentRoomState.colorTemp}${Math.round(currentRoomState.brightness * 0.4).toString(16).padStart(2, '0')}`
            : 'none'
        }}
      >
        {/* Architectural Pendant Fixture */}
        <div className="relative flex flex-col items-center">
          {/* Ceiling Cord */}
          <div className="w-0.5 h-16 bg-slate-500"></div>
          {/* Modern Minimalist Glass Ring Fixture */}
          <div
            className="w-32 h-10 rounded-full border-2 border-slate-600 transition-all duration-500 relative flex items-center justify-center"
            style={{
              borderColor: currentRoomState.on ? currentRoomState.colorTemp : '#475569',
              boxShadow: currentRoomState.on
                ? `0 0 ${currentRoomState.brightness * 0.8}px ${currentRoomState.colorTemp}`
                : 'none'
            }}
          >
            {/* Inner Glowing Core */}
            <div
              className="w-24 h-4 rounded-full transition-all duration-500 blur-[2px]"
              style={{
                backgroundColor: currentRoomState.on ? currentRoomState.colorTemp : '#1e293b',
                opacity: currentRoomState.on ? currentRoomState.brightness / 100 : 0.2
              }}
            ></div>
          </div>

          {/* Cast Floor Glow Cone */}
          {currentRoomState.on && (
            <div
              className="absolute top-24 w-80 h-36 rounded-full blur-2xl pointer-events-none transition-all duration-700"
              style={{
                backgroundColor: currentRoomState.colorTemp,
                opacity: (currentRoomState.brightness / 100) * 0.35
              }}
            ></div>
          )}
        </div>

        {/* Room Label Badge */}
        <div className="absolute bottom-4 left-6 bg-slate-950/80 backdrop-blur border border-slate-800 px-3 py-1.5 rounded-lg text-xs font-mono text-slate-300">
          ROOM: <span className="text-amber-400 font-bold uppercase">{selectedRoom}</span> &bull; {currentRoomState.brightness}% BRIGHTNESS
        </div>
      </div>

      {/* Control Console */}
      <div className="p-5 sm:p-6 bg-brand-surface">
        {/* Room Switcher Tabs */}
        <div className="mb-5">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
            Select Architectural Space:
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {(['living', 'bedroom', 'terrace', 'garden'] as const).map(room => (
              <button
                key={room}
                type="button"
                onClick={() => setSelectedRoom(room)}
                className={`py-2 px-3 rounded-xl border text-xs font-semibold capitalize transition-all ${
                  selectedRoom === room
                    ? 'bg-amber-950/70 border-amber-500 text-amber-300 shadow-md'
                    : 'bg-brand-card/60 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                {room} Space
              </button>
            ))}
          </div>
        </div>

        {/* Dimmer & CCT Controls */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-5 border-b border-slate-800">
          <div>
            <div className="flex items-center justify-between text-xs font-semibold text-slate-300 mb-2">
              <span className="flex items-center gap-1.5">
                <Sun className="w-3.5 h-3.5 text-amber-400" />
                <span>Precision Dimmer Slider</span>
              </span>
              <span className="font-mono text-amber-400">{currentRoomState.brightness}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={currentRoomState.on ? currentRoomState.brightness : 0}
              onChange={e => setBrightness(selectedRoom, Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
              <span>0% (OFF)</span>
              <span>50%</span>
              <span>100% (FULL)</span>
            </div>
          </div>

          <div>
            <span className="text-xs font-semibold text-slate-300 block mb-2">
              Color Temperature (CCT) & Mood:
            </span>
            <div className="flex flex-wrap gap-2">
              {colorPresets.map(preset => (
                <button
                  key={preset.hex}
                  type="button"
                  onClick={() => setColorTemp(selectedRoom, preset.hex)}
                  className={`w-7 h-7 rounded-full border-2 transition-all active:scale-90 ${
                    currentRoomState.colorTemp === preset.hex ? 'border-white scale-110 shadow-lg' : 'border-slate-700'
                  }`}
                  style={{ backgroundColor: preset.hex }}
                  title={preset.label}
                ></button>
              ))}
              <button
                type="button"
                onClick={() => toggleLight(selectedRoom)}
                className={`ml-auto px-3 py-1 rounded-lg text-xs font-bold border transition-all ${
                  currentRoomState.on
                    ? 'bg-rose-950/80 border-rose-800 text-rose-300'
                    : 'bg-emerald-950/80 border-emerald-800 text-emerald-300'
                }`}
              >
                {currentRoomState.on ? 'Turn Off Room' : 'Turn On Room'}
              </button>
            </div>
          </div>
        </div>

        {/* Global Multi-System Scene Recalls */}
        <div className="pt-4">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2.5">
            Synchronized Lifestyle Scene Presets:
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            <button
              type="button"
              onClick={() => triggerMasterScene('welcome_home')}
              className="p-2.5 rounded-xl bg-brand-card hover:bg-slate-800 border border-slate-800 hover:border-sky-500 text-left transition-all group"
            >
              <Home className="w-4 h-4 text-sky-400 mb-1 group-hover:scale-110 transition-transform" />
              <div className="text-xs font-semibold text-slate-200">Welcome Home</div>
              <div className="text-[10px] text-slate-400">Warm foyer & gate entry</div>
            </button>

            <button
              type="button"
              onClick={() => triggerMasterScene('movie_night')}
              className="p-2.5 rounded-xl bg-brand-card hover:bg-slate-800 border border-slate-800 hover:border-amber-500 text-left transition-all group"
            >
              <Film className="w-4 h-4 text-amber-400 mb-1 group-hover:scale-110 transition-transform" />
              <div className="text-xs font-semibold text-slate-200">Cinema Immersion</div>
              <div className="text-[10px] text-slate-400">20% dim & drapes closed</div>
            </button>

            <button
              type="button"
              onClick={() => triggerMasterScene('garden_evening')}
              className="p-2.5 rounded-xl bg-brand-card hover:bg-slate-800 border border-slate-800 hover:border-emerald-500 text-left transition-all group"
            >
              <Sparkles className="w-4 h-4 text-emerald-400 mb-1 group-hover:scale-110 transition-transform" />
              <div className="text-xs font-semibold text-slate-200">Terrace Soiree</div>
              <div className="text-[10px] text-slate-400">Outdoor facade glow</div>
            </button>

            <button
              type="button"
              onClick={() => triggerMasterScene('good_night')}
              className="p-2.5 rounded-xl bg-brand-card hover:bg-slate-800 border border-slate-800 hover:border-indigo-500 text-left transition-all group"
            >
              <Moon className="w-4 h-4 text-indigo-400 mb-1 group-hover:scale-110 transition-transform" />
              <div className="text-xs font-semibold text-slate-200">Good Night</div>
              <div className="text-[10px] text-slate-400">All interior lights off</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
