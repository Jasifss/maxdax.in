import React, { useState } from 'react';
import { useDemo } from '../../context/DemoContext';
import { Lock, Unlock, Fingerprint, Key, ShieldCheck, AlertCircle, RefreshCw, Smartphone } from 'lucide-react';

export const SmartLockDemo: React.FC = () => {
  const { state, toggleLock, unlockWithMethod } = useDemo();
  const [pinInput, setPinInput] = useState<string>('');
  const [pinError, setPinError] = useState<boolean>(false);
  const [otpGenerated, setOtpGenerated] = useState<string>('849-216');

  const isUnlocked = state.lockState === 'unlocked';

  const handlePinPress = (digit: string) => {
    if (pinInput.length < 6) {
      const next = pinInput + digit;
      setPinInput(next);
      if (next.length === 4) {
        if (next === '1234') {
          unlockWithMethod('Encrypted PIN Code (Master)');
          setPinInput('');
          setPinError(false);
        } else {
          setPinError(true);
          setTimeout(() => {
            setPinInput('');
            setPinError(false);
          }, 1000);
        }
      }
    }
  };

  const generateGuestOtp = () => {
    const code = `${Math.floor(100 + Math.random() * 900)}-${Math.floor(100 + Math.random() * 900)}`;
    setOtpGenerated(code);
  };

  return (
    <div className="bg-brand-surface border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
      {/* Header */}
      <div className="bg-brand-card/80 border-b border-slate-800 px-5 py-3.5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <Lock className="w-4 h-4 text-amber-400" />
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
            Biometric & Smart Access Control Demonstration
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs">
          <span className="text-slate-400">Deadbolt State:</span>
          <span className={`font-mono font-bold uppercase px-2.5 py-0.5 rounded border ${
            isUnlocked
              ? 'bg-emerald-950 text-emerald-400 border-emerald-800'
              : 'bg-slate-800 text-slate-300 border-slate-700'
          }`}>
            {state.lockState}
          </span>
        </div>
      </div>

      {/* Visual Canvas - Luxury Teak Wood Door with Electronic Mortise */}
      <div className="relative h-64 sm:h-76 bg-[#17130F] overflow-hidden border-b border-slate-800 flex items-center justify-center p-6">
        {/* Teak Wood Grain Texture simulation */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:16px_16px]"></div>

        {/* Heavy Stainless Steel Push-Pull Smart Lock Body */}
        <div className="relative z-10 w-28 sm:w-32 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-950 border-2 border-slate-600 rounded-2xl p-4 shadow-2xl flex flex-col items-center">
          {/* FPC Biometric Scanner Window */}
          <div
            onClick={() => unlockWithMethod('3D FPC Biometric Scanner')}
            className={`w-12 h-12 rounded-full border-2 cursor-pointer flex items-center justify-center mb-4 transition-all ${
              isUnlocked
                ? 'border-emerald-400 bg-emerald-500/20 shadow-[0_0_15px_#10b981]'
                : 'border-slate-600 bg-slate-950 hover:border-sky-400'
            }`}
            title="Click to touch biometric fingerprint"
          >
            <Fingerprint className={`w-7 h-7 ${isUnlocked ? 'text-emerald-400' : 'text-slate-400'}`} />
          </div>

          {/* OLED Status & Keypad Indicator */}
          <div className="w-full bg-slate-950 py-1.5 px-2 rounded border border-slate-800 text-center mb-3">
            <span className="font-mono text-[9px] tracking-widest text-sky-400 block">
              {isUnlocked ? 'ACCESS GRANTED' : pinError ? 'INVALID CODE' : pinInput ? '*'.repeat(pinInput.length) : 'ENTER PIN'}
            </span>
          </div>

          {/* Physical Motorized Stainless Bolt Indicator */}
          <div className="w-full flex items-center justify-center gap-2 pt-2 border-t border-slate-800">
            {isUnlocked ? (
              <Unlock className="w-5 h-5 text-emerald-400 animate-bounce" />
            ) : (
              <Lock className="w-5 h-5 text-slate-400" />
            )}
          </div>
        </div>

        {/* Status Toast */}
        <div className="absolute bottom-3 left-6 right-6 flex items-center justify-between text-[11px] font-mono text-slate-400 bg-slate-950/80 px-3 py-1.5 rounded-lg border border-slate-800">
          <span>AUTHENTICATION: {state.recentLockMethod}</span>
          <span className="text-emerald-400 font-bold">AES-256 HARDWARE TOKEN</span>
        </div>
      </div>

      {/* Control Console */}
      <div className="p-5 sm:p-6 bg-brand-surface">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Keypad PIN Entry Simulator */}
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2.5">
              Simulate Touchscreen Keypad PIN (Default: 1234):
            </span>
            <div className="grid grid-cols-3 gap-2 max-w-[200px]">
              {['1', '2', '3', '4', '5', '6', '7', '8', '9', 'C', '0', '#'].map(val => (
                <button
                  key={val}
                  type="button"
                  onClick={() => {
                    if (val === 'C') setPinInput('');
                    else if (val === '#') {
                      if (pinInput === '1234') unlockWithMethod('Keypad PIN Access');
                      else setPinError(true);
                    } else handlePinPress(val);
                  }}
                  className="w-12 h-10 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 font-mono text-sm font-bold flex items-center justify-center active:scale-95 transition-all"
                >
                  {val}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Credential Methods */}
          <div className="flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2.5">
                Multi-Modal Access Credentials:
              </span>
              <div className="space-y-2">
                <button
                  type="button"
                  onClick={() => unlockWithMethod('Registered 3D Fingerprint')}
                  className="w-full flex items-center justify-between p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-sky-500 text-left transition-all"
                >
                  <div className="flex items-center gap-2.5">
                    <Fingerprint className="w-4 h-4 text-sky-400" />
                    <div>
                      <div className="text-xs font-semibold text-slate-200">Simulate Biometric Fingerprint</div>
                      <div className="text-[10px] text-slate-400">&lt; 0.3s Swedish FPC Sensor</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-sky-400 bg-sky-950 px-2 py-0.5 rounded">TRY</span>
                </button>

                <button
                  type="button"
                  onClick={() => unlockWithMethod('Encrypted RFID Keycard')}
                  className="w-full flex items-center justify-between p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500 text-left transition-all"
                >
                  <div className="flex items-center gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <div>
                      <div className="text-xs font-semibold text-slate-200">Simulate RFID Keycard Tap</div>
                      <div className="text-[10px] text-slate-400">13.56 MHz Mifare DesFire</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded">TRY</span>
                </button>
              </div>
            </div>

            {/* Guest OTP Generator */}
            <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-semibold text-slate-300 block">Single-Use Guest OTP:</span>
                <span className="font-mono text-xs font-bold text-amber-400">{otpGenerated}</span>
              </div>
              <button
                type="button"
                onClick={generateGuestOtp}
                className="text-[11px] px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold border border-slate-700 transition-all"
              >
                Generate New OTP
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
