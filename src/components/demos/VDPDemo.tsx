import React, { useState, useEffect } from 'react';
import { useDemo } from '../../context/DemoContext';
import { Phone, PhoneOff, Unlock, UserCheck, Bell, ShieldCheck, Video, Mic, Volume2 } from 'lucide-react';

export const VDPDemo: React.FC = () => {
  const { state, triggerVdpCall, answerVdpCall, declineVdpCall, releaseGateFromVdp } = useDemo();
  const [callDuration, setCallDuration] = useState(0);

  useEffect(() => {
    let timer: any;
    if (state.vdpCallStatus === 'connected') {
      timer = setInterval(() => setCallDuration(c => c + 1), 1000);
    } else {
      setCallDuration(0);
    }
    return () => clearInterval(timer);
  }, [state.vdpCallStatus]);

  const isRinging = state.vdpCallStatus === 'ringing';
  const isConnected = state.vdpCallStatus === 'connected';
  const isIdle = state.vdpCallStatus === 'idle';
  const isDeclined = state.vdpCallStatus === 'declined';

  return (
    <div className="bg-brand-surface border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
      {/* VDP Monitor Frame Header */}
      <div className="bg-slate-950 px-5 py-3 border-b border-slate-800 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2.5">
          <div className="w-2 h-2 rounded-full bg-sky-400"></div>
          <span className="font-semibold text-slate-300">
            MAXDAX 10" Touch Indoor Station &bull; Villa Intercom
          </span>
        </div>
        <div className="text-[11px] font-mono text-slate-400 flex items-center gap-2">
          <span>IP STATION: 192.168.1.45</span>
          <span className="text-emerald-400 font-bold">&bull; ONLINE</span>
        </div>
      </div>

      {/* Touch Screen Display Area */}
      <div className="p-4 sm:p-6 bg-slate-950 flex flex-col items-center justify-center">
        {/* Modern Framed Indoor Tablet */}
        <div className="w-full max-w-xl bg-slate-900 border-4 border-slate-800 rounded-2xl p-4 shadow-2xl relative overflow-hidden">
          {/* Simulated Screen Content */}
          <div className="relative h-64 sm:h-72 rounded-xl overflow-hidden bg-black flex flex-col justify-between p-4 border border-slate-800">
            {/* Screen Top Bar */}
            <div className="flex items-center justify-between z-10 text-xs font-mono text-slate-300 bg-slate-950/70 backdrop-blur px-3 py-1.5 rounded-lg border border-slate-800/80">
              <span className="flex items-center gap-1.5">
                <Video className="w-3.5 h-3.5 text-sky-400" />
                <span>OUTDOOR MAIN ENTRANCE STATION</span>
              </span>
              <span>
                {isConnected ? (
                  <span className="text-emerald-400 font-bold">
                    CALL ACTIVE 00:{callDuration < 10 ? `0${callDuration}` : callDuration}
                  </span>
                ) : isRinging ? (
                  <span className="text-amber-400 font-bold animate-pulse">INCOMING CALL...</span>
                ) : (
                  <span className="text-slate-400">STANDBY</span>
                )}
              </span>
            </div>

            {/* Main Video Area */}
            {isRinging || isConnected ? (
              <div className="absolute inset-0">
                <img
                  src={state.vdpVisitorImage}
                  alt="Visitor at Gate"
                  className="w-full h-full object-cover brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40"></div>

                {/* Simulated Audio Waveform when connected */}
                {isConnected && (
                  <div className="absolute bottom-16 left-6 right-6 flex items-center justify-center gap-1">
                    {[16, 28, 44, 20, 52, 36, 18, 48, 30, 14].map((h, i) => (
                      <div
                        key={i}
                        className="w-1 bg-sky-400 rounded-full animate-pulse"
                        style={{ height: `${h}px`, animationDelay: `${i * 100}ms` }}
                      ></div>
                    ))}
                  </div>
                )}
              </div>
            ) : isDeclined ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950 text-slate-400 z-10">
                <PhoneOff className="w-10 h-10 text-rose-500 mb-2 animate-bounce" />
                <span className="font-semibold text-sm text-slate-300">Call Dismissed</span>
                <span className="text-xs text-slate-500">Visitor event logged to NVR archive</span>
              </div>
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-slate-900 to-slate-950 text-slate-400">
                <ShieldCheck className="w-12 h-12 text-slate-700 mb-3" />
                <p className="text-xs font-semibold text-slate-400">Entrance Intercom Ready</p>
                <p className="text-[11px] text-slate-500 mt-1">Press the visitor button below to simulate an incoming chime</p>
              </div>
            )}

            {/* Action Bar on Tablet Screen */}
            <div className="z-10 flex items-center justify-center gap-4 mt-auto">
              {isRinging && (
                <>
                  <button
                    type="button"
                    onClick={answerVdpCall}
                    className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2.5 rounded-full font-bold text-xs shadow-lg shadow-emerald-600/30 transition-all active:scale-95 animate-pulse"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Answer Call</span>
                  </button>
                  <button
                    type="button"
                    onClick={declineVdpCall}
                    className="flex items-center gap-2 bg-rose-600 hover:bg-rose-500 text-white px-5 py-2.5 rounded-full font-bold text-xs shadow-lg shadow-rose-600/30 transition-all active:scale-95"
                  >
                    <PhoneOff className="w-4 h-4" />
                    <span>Decline</span>
                  </button>
                </>
              )}

              {isConnected && (
                <>
                  <button
                    type="button"
                    onClick={releaseGateFromVdp}
                    className="flex items-center gap-2 bg-sky-600 hover:bg-sky-500 text-white px-5 py-2.5 rounded-full font-bold text-xs shadow-lg shadow-sky-600/30 transition-all active:scale-95"
                  >
                    <Unlock className="w-4 h-4" />
                    <span>Unlock / Open Gate</span>
                  </button>
                  <button
                    type="button"
                    onClick={declineVdpCall}
                    className="flex items-center gap-2 bg-rose-700 hover:bg-rose-600 text-white px-4 py-2.5 rounded-full font-bold text-xs transition-all active:scale-95"
                  >
                    <PhoneOff className="w-4 h-4" />
                    <span>End</span>
                  </button>
                </>
              )}

              {state.vdpDoorUnlocked && (
                <div className="bg-emerald-500 text-slate-950 font-bold text-xs px-4 py-1.5 rounded-full animate-bounce">
                  Access Granted &bull; Motorized Gate Opening
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Simulation Triggers Outside Tablet */}
        <div className="w-full max-w-xl mt-4 flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-800 text-xs">
          <div>
            <span className="text-slate-400 font-semibold block">Simulate Visitor Action at Gate Pillar:</span>
            <span className="text-[11px] text-slate-500">Trigger entrance call button</span>
          </div>

          <button
            type="button"
            onClick={triggerVdpCall}
            disabled={isRinging || isConnected}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl font-bold transition-all shadow-md ${
              isRinging || isConnected
                ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                : 'bg-amber-500 hover:bg-amber-400 text-slate-950 hover:shadow-amber-500/20 active:scale-95'
            }`}
          >
            <Bell className="w-4 h-4" />
            <span>Simulate Visitor Ringing Gate Call</span>
          </button>
        </div>
      </div>
    </div>
  );
};
