import React, { useState } from 'react';
import {
  ShieldCheck,
  Eye,
  Droplets,
  Lightbulb,
  Maximize2,
  Lock,
  Wifi,
  Music,
  Sparkles,
  RotateCcw
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { useDemo } from '../context/DemoContext';
import { VillaExplorer } from '../components/demos/VillaExplorer';
import { GateDemo } from '../components/demos/GateDemo';
import { CCTVDemo } from '../components/demos/CCTVDemo';
import { VDPDemo } from '../components/demos/VDPDemo';
import { IrrigationDemo } from '../components/demos/IrrigationDemo';
import { LightingDemo } from '../components/demos/LightingDemo';
import { CurtainDemo } from '../components/demos/CurtainDemo';
import { SmartLockDemo } from '../components/demos/SmartLockDemo';
import { NetworkDemo } from '../components/demos/NetworkDemo';
import { AudioDemo } from '../components/demos/AudioDemo';
import { ConsultationForm } from '../components/common/ConsultationForm';

export const ExperienceCentrePage: React.FC = () => {
  const { resetAllDemos } = useDemo();
  const [activeTab, setActiveTab] = useState<string>('villa');

  const demoTabs = [
    { id: 'villa', label: 'Villa Master Explorer', icon: Sparkles },
    { id: 'gate', label: 'Gate Automation', icon: ShieldCheck },
    { id: 'cctv', label: '4K CCTV Surveillance', icon: Eye },
    { id: 'vdp', label: 'Video Door Phone', icon: Lock },
    { id: 'irrigation', label: 'Smart Irrigation', icon: Droplets },
    { id: 'lighting', label: 'Lighting & Scenes', icon: Lightbulb },
    { id: 'curtain', label: 'Motorized Drapery', icon: Maximize2 },
    { id: 'lock', label: 'Biometric Access', icon: Lock },
    { id: 'network', label: 'Wi-Fi & AirFiber', icon: Wifi },
    { id: 'audio', label: 'Multi-Room Audio', icon: Music }
  ];

  return (
    <>
      <SEO
        title="Interactive Smart Home Demonstration Centre | MAXDAX"
        description="Experience live interactive demonstrations of automated driveway gates, 4K CCTV surveillance, video door phones, smart irrigation, and architectural lighting."
        canonical="https://maxdax.in/experience-centre"
      />

      <div className="pt-28 pb-20 bg-brand-dark min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 block mb-2">
              Virtual Testing Facility
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">
              Interactive Smart Living Experience Centre
            </h1>
            <p className="text-sm sm:text-base text-slate-300">
              Test drive real-time simulated automation systems in your browser. All demonstrations share a unified ecosystem state model reflecting real-world villa interoperability.
            </p>

            <button
              type="button"
              onClick={resetAllDemos}
              className="mt-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white text-xs font-mono transition-all"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset All Simulated States</span>
            </button>
          </div>

          {/* Navigation Pill Strip */}
          <div className="flex items-center justify-start lg:justify-center overflow-x-auto pb-4 mb-8 gap-2 no-scrollbar">
            {demoTabs.map(tab => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap border transition-all ${
                    activeTab === tab.id
                      ? 'bg-sky-600 border-sky-500 text-white shadow-lg shadow-sky-600/25'
                      : 'bg-brand-surface border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Active Demo Panel */}
          <div className="max-w-5xl mx-auto mb-16">
            {activeTab === 'villa' && <VillaExplorer />}
            {activeTab === 'gate' && <GateDemo />}
            {activeTab === 'cctv' && <CCTVDemo />}
            {activeTab === 'vdp' && <VDPDemo />}
            {activeTab === 'irrigation' && <IrrigationDemo />}
            {activeTab === 'lighting' && <LightingDemo />}
            {activeTab === 'curtain' && <CurtainDemo />}
            {activeTab === 'lock' && <SmartLockDemo />}
            {activeTab === 'network' && <NetworkDemo />}
            {activeTab === 'audio' && <AudioDemo />}
          </div>

          {/* Lead Consultation Block */}
          <div className="max-w-4xl mx-auto">
            <ConsultationForm />
          </div>
        </div>
      </div>
    </>
  );
};
