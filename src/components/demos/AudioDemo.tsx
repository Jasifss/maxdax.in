import React from 'react';
import { useDemo } from '../../context/DemoContext';
import { Music, Play, Pause, Volume2, VolumeX, Sparkles, Radio, Disc } from 'lucide-react';

interface AudioTrack {
  zone: 'living' | 'bedroom' | 'pool' | 'all';
  zoneName: string;
  genre: string;
  trackName: string;
  source: string;
}

const audioTracks: Record<string, AudioTrack> = {
  living: {
    zone: 'living',
    zoneName: 'Zone 1: Formal Living Salon',
    genre: 'Acoustic Jazz & Soul',
    trackName: 'Midnight in Kalamassery (Architectural Mix)',
    source: 'Apple AirPlay 2 Hi-Res'
  },
  pool: {
    zone: 'pool',
    zoneName: 'Zone 2: Terrace & Pool Deck',
    genre: 'Chill Sunset Lounge',
    trackName: 'Kerala Backwaters Twilight Pulse',
    source: 'Spotify Connect Lossless'
  },
  bedroom: {
    zone: 'bedroom',
    zoneName: 'Zone 3: Master Bedroom Suite',
    genre: 'Circadian Ambient Piano',
    trackName: 'Solarium Evening Serenity',
    source: 'Tidal Masters 24-bit'
  },
  all: {
    zone: 'all',
    zoneName: 'Synchronized Villa Party Mode',
    genre: 'High-Fidelity Party Stream',
    trackName: 'Whole-Villa Multi-Zone Sync (Zero Latency)',
    source: 'HEOS Multi-Room Matrix'
  }
};

export const AudioDemo: React.FC = () => {
  const { state, toggleAudio, setAudioVolume, setAudioZone } = useDemo();

  const currentTrack = audioTracks[state.activeAudioZone] || audioTracks.living;

  return (
    <div className="bg-brand-surface border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
      {/* Header */}
      <div className="bg-brand-card/80 border-b border-slate-800 px-5 py-3.5 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2.5">
          <Music className="w-4 h-4 text-emerald-400" />
          <span className="font-semibold uppercase tracking-wider text-slate-300">
            Multi-Room Lossless Audio Distribution Demonstration
          </span>
        </div>

        <div className="flex items-center gap-2 font-mono text-[11px]">
          <span className="text-slate-400">AMPLIFIER:</span>
          <span className="text-emerald-400 font-bold">CLASS-D 100W RMS/CH &bull; 24-BIT/192KHZ</span>
        </div>
      </div>

      {/* Visual Canvas - Multi-Zone Equalizer & Media Player */}
      <div className="relative h-60 sm:h-68 bg-gradient-to-b from-slate-950 via-[#0B1525] to-slate-950 overflow-hidden border-b border-slate-800 flex flex-col items-center justify-center p-6 text-center">
        {/* Animated Soundwave Equalizer Bars */}
        <div className="flex items-end justify-center gap-1.5 h-20 mb-4">
          {[20, 45, 68, 30, 85, 95, 60, 40, 75, 90, 55, 35, 70, 80, 50, 30].map((h, i) => (
            <div
              key={i}
              className={`w-1.5 rounded-full transition-all duration-300 ${
                state.audioPlaying
                  ? 'bg-gradient-to-t from-sky-500 to-emerald-400 animate-pulse'
                  : 'bg-slate-700 h-2'
              }`}
              style={{
                height: state.audioPlaying ? `${Math.max(12, h * (state.audioVolume / 100))}px` : '6px',
                animationDelay: `${i * 75}ms`
              }}
            ></div>
          ))}
        </div>

        {/* Current Track Details */}
        <div className="z-10">
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-sky-400 block mb-1">
            {currentTrack.source}
          </span>
          <h3 className="text-base sm:text-lg font-bold text-white mb-0.5">{currentTrack.trackName}</h3>
          <p className="text-xs text-slate-400">{currentTrack.zoneName} &bull; {currentTrack.genre}</p>
        </div>
      </div>

      {/* Control Console */}
      <div className="p-5 sm:p-6 bg-brand-surface">
        {/* Zone Selector */}
        <div className="mb-5">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2.5">
            Select Audio Zone:
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {(['living', 'pool', 'bedroom', 'all'] as const).map(zone => (
              <button
                key={zone}
                type="button"
                onClick={() => setAudioZone(zone)}
                className={`p-2.5 rounded-xl border text-left transition-all ${
                  state.activeAudioZone === zone
                    ? 'bg-emerald-950/80 border-emerald-500 text-white shadow-md'
                    : 'bg-brand-card/60 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                <div className="text-[10px] font-mono font-bold text-emerald-400 uppercase">
                  {zone === 'all' ? 'PARTY SYNC' : zone}
                </div>
                <div className="text-xs font-semibold truncate text-slate-200">
                  {audioTracks[zone].zoneName.split(':')[1] || audioTracks[zone].zoneName}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Playback & Volume Sliders */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-800">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={toggleAudio}
              className={`flex-1 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all active:scale-95 ${
                state.audioPlaying
                  ? 'bg-amber-600 hover:bg-amber-500 text-white'
                  : 'bg-emerald-600 hover:bg-emerald-500 text-white hover:shadow-emerald-500/25'
              }`}
            >
              {state.audioPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              <span>{state.audioPlaying ? 'Pause Stream' : 'Play Hi-Res Stream'}</span>
            </button>
          </div>

          <div>
            <div className="flex items-center justify-between text-xs font-semibold text-slate-300 mb-1.5">
              <span className="flex items-center gap-1.5">
                <Volume2 className="w-4 h-4 text-emerald-400" />
                <span>Zone Master Volume</span>
              </span>
              <span className="font-mono text-emerald-400">{state.audioVolume}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={state.audioVolume}
              onChange={e => setAudioVolume(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
