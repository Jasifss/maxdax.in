import React, { createContext, useContext, useState, useEffect } from 'react';
import { DemoState, GateStatus } from '../types';

interface DemoContextType {
  state: DemoState;
  // Gate actions
  openGate: () => void;
  closeGate: () => void;
  stopGate: () => void;
  toggleObstruction: () => void;
  
  // CCTV actions
  selectCamera: (id: number) => void;
  toggleNightMode: () => void;
  triggerMotion: () => void;
  
  // VDP actions
  triggerVdpCall: () => void;
  answerVdpCall: () => void;
  declineVdpCall: () => void;
  releaseGateFromVdp: () => void;
  
  // Irrigation actions
  selectIrrigationZone: (zoneId: number) => void;
  startIrrigation: () => void;
  stopIrrigation: () => void;
  toggleRainDelay: () => void;
  
  // Lighting actions
  toggleLight: (room: 'living' | 'bedroom' | 'terrace' | 'garden') => void;
  setBrightness: (room: 'living' | 'bedroom' | 'terrace' | 'garden', val: number) => void;
  setColorTemp: (room: 'living' | 'bedroom' | 'terrace' | 'garden', temp: string) => void;
  
  // Curtain actions
  openCurtains: () => void;
  closeCurtains: () => void;
  stopCurtains: () => void;
  setCurtainPercentage: (percent: number) => void;
  
  // Lock actions
  toggleLock: () => void;
  unlockWithMethod: (method: string) => void;
  
  // Audio actions
  toggleAudio: () => void;
  setAudioVolume: (vol: number) => void;
  setAudioZone: (zone: 'living' | 'bedroom' | 'pool' | 'all') => void;
  
  // Master Scenes
  triggerMasterScene: (sceneName: string) => void;
  resetAllDemos: () => void;
}

const defaultState: DemoState = {
  gateStatus: 'closed',
  gateObstruction: false,
  carPosition: 'outside',
  
  activeCameraId: 1,
  cctvNightMode: false,
  cctvMotionDetected: false,
  
  vdpCallStatus: 'idle',
  vdpVisitorImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
  vdpDoorUnlocked: false,
  
  activeIrrigationZone: 1,
  irrigationRunning: false,
  rainDelayActive: false,
  irrigationProgress: 0,
  
  activeRoom: 'living',
  lightState: {
    living: { on: true, brightness: 80, colorTemp: '#FFE5B4' },
    bedroom: { on: false, brightness: 40, colorTemp: '#FFD79E' },
    terrace: { on: true, brightness: 60, colorTemp: '#38BDF8' },
    garden: { on: false, brightness: 50, colorTemp: '#4ADE80' },
  },
  
  curtainPosition: 30,
  curtainMoving: false,
  
  lockState: 'locked',
  recentLockMethod: 'Biometric Touch',
  
  networkStatus: 'optimal',
  activeNode: 'Core Router & Fiber Gateway',
  
  audioPlaying: false,
  audioVolume: 65,
  activeAudioZone: 'living',
  
  activeMasterScene: null,
};

const DemoContext = createContext<DemoContextType | undefined>(undefined);

export const DemoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<DemoState>(defaultState);

  // Simulated Gate Movement Timer
  useEffect(() => {
    let timer: any;
    if (state.gateStatus === 'opening') {
      timer = setTimeout(() => {
        setState(prev => ({ ...prev, gateStatus: 'open' }));
      }, 3500);
    } else if (state.gateStatus === 'closing') {
      if (state.gateObstruction) {
        setState(prev => ({ ...prev, gateStatus: 'obstructed' }));
      } else {
        timer = setTimeout(() => {
          setState(prev => ({ ...prev, gateStatus: 'closed' }));
        }, 3500);
      }
    }
    return () => clearTimeout(timer);
  }, [state.gateStatus, state.gateObstruction]);

  // Simulated Irrigation Progress Timer
  useEffect(() => {
    let interval: any;
    if (state.irrigationRunning) {
      interval = setInterval(() => {
        setState(prev => {
          if (prev.irrigationProgress >= 100) {
            return { ...prev, irrigationRunning: false, irrigationProgress: 0 };
          }
          return { ...prev, irrigationProgress: prev.irrigationProgress + 10 };
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [state.irrigationRunning]);

  // Gate actions
  const openGate = () => {
    setState(prev => ({ ...prev, gateStatus: 'opening', gateObstruction: false }));
  };

  const closeGate = () => {
    if (state.gateObstruction) {
      setState(prev => ({ ...prev, gateStatus: 'obstructed' }));
      return;
    }
    setState(prev => ({ ...prev, gateStatus: 'closing' }));
  };

  const stopGate = () => {
    setState(prev => ({ ...prev, gateStatus: 'stopped' }));
  };

  const toggleObstruction = () => {
    setState(prev => {
      const nextObstruction = !prev.gateObstruction;
      let nextStatus: GateStatus = prev.gateStatus;
      if (nextObstruction && prev.gateStatus === 'closing') {
        nextStatus = 'obstructed';
      } else if (!nextObstruction && prev.gateStatus === 'obstructed') {
        nextStatus = 'stopped';
      }
      return { ...prev, gateObstruction: nextObstruction, gateStatus: nextStatus };
    });
  };

  // CCTV actions
  const selectCamera = (id: number) => {
    setState(prev => ({ ...prev, activeCameraId: id, cctvMotionDetected: false }));
  };

  const toggleNightMode = () => {
    setState(prev => ({ ...prev, cctvNightMode: !prev.cctvNightMode }));
  };

  const triggerMotion = () => {
    setState(prev => ({ ...prev, cctvMotionDetected: true }));
    setTimeout(() => {
      setState(prev => ({ ...prev, cctvMotionDetected: false }));
    }, 4000);
  };

  // VDP actions
  const triggerVdpCall = () => {
    setState(prev => ({ ...prev, vdpCallStatus: 'ringing', vdpDoorUnlocked: false }));
  };

  const answerVdpCall = () => {
    setState(prev => ({ ...prev, vdpCallStatus: 'connected' }));
  };

  const declineVdpCall = () => {
    setState(prev => ({ ...prev, vdpCallStatus: 'declined' }));
    setTimeout(() => {
      setState(prev => ({ ...prev, vdpCallStatus: 'idle' }));
    }, 2500);
  };

  const releaseGateFromVdp = () => {
    setState(prev => ({ ...prev, vdpDoorUnlocked: true, gateStatus: 'opening' }));
    setTimeout(() => {
      setState(prev => ({ ...prev, vdpCallStatus: 'idle', vdpDoorUnlocked: false }));
    }, 4000);
  };

  // Irrigation actions
  const selectIrrigationZone = (zoneId: number) => {
    setState(prev => ({ ...prev, activeIrrigationZone: zoneId, irrigationProgress: 0 }));
  };

  const startIrrigation = () => {
    if (state.rainDelayActive) return;
    setState(prev => ({ ...prev, irrigationRunning: true, irrigationProgress: 0 }));
  };

  const stopIrrigation = () => {
    setState(prev => ({ ...prev, irrigationRunning: false, irrigationProgress: 0 }));
  };

  const toggleRainDelay = () => {
    setState(prev => {
      const nextRain = !prev.rainDelayActive;
      return {
        ...prev,
        rainDelayActive: nextRain,
        irrigationRunning: nextRain ? false : prev.irrigationRunning
      };
    });
  };

  // Lighting actions
  const toggleLight = (room: 'living' | 'bedroom' | 'terrace' | 'garden') => {
    setState(prev => ({
      ...prev,
      lightState: {
        ...prev.lightState,
        [room]: {
          ...prev.lightState[room],
          on: !prev.lightState[room].on
        }
      }
    }));
  };

  const setBrightness = (room: 'living' | 'bedroom' | 'terrace' | 'garden', val: number) => {
    setState(prev => ({
      ...prev,
      lightState: {
        ...prev.lightState,
        [room]: {
          ...prev.lightState[room],
          brightness: val,
          on: val > 0 ? true : prev.lightState[room].on
        }
      }
    }));
  };

  const setColorTemp = (room: 'living' | 'bedroom' | 'terrace' | 'garden', temp: string) => {
    setState(prev => ({
      ...prev,
      lightState: {
        ...prev.lightState,
        [room]: {
          ...prev.lightState[room],
          colorTemp: temp
        }
      }
    }));
  };

  // Curtains
  const openCurtains = () => {
    setState(prev => ({ ...prev, curtainPosition: 100, curtainMoving: true }));
    setTimeout(() => setState(p => ({ ...p, curtainMoving: false })), 2000);
  };

  const closeCurtains = () => {
    setState(prev => ({ ...prev, curtainPosition: 0, curtainMoving: true }));
    setTimeout(() => setState(p => ({ ...p, curtainMoving: false })), 2000);
  };

  const stopCurtains = () => {
    setState(prev => ({ ...prev, curtainMoving: false }));
  };

  const setCurtainPercentage = (percent: number) => {
    setState(prev => ({ ...prev, curtainPosition: Math.max(0, Math.min(100, percent)) }));
  };

  // Lock
  const toggleLock = () => {
    setState(prev => ({
      ...prev,
      lockState: prev.lockState === 'locked' ? 'unlocked' : 'locked',
      recentLockMethod: prev.lockState === 'locked' ? 'Smartphone App Override' : 'Auto Secure'
    }));
  };

  const unlockWithMethod = (method: string) => {
    setState(prev => ({
      ...prev,
      lockState: 'unlocked',
      recentLockMethod: method
    }));
    setTimeout(() => {
      setState(p => ({ ...p, lockState: 'locked' }));
    }, 5000);
  };

  // Audio
  const toggleAudio = () => {
    setState(prev => ({ ...prev, audioPlaying: !prev.audioPlaying }));
  };

  const setAudioVolume = (vol: number) => {
    setState(prev => ({ ...prev, audioVolume: vol }));
  };

  const setAudioZone = (zone: 'living' | 'bedroom' | 'pool' | 'all') => {
    setState(prev => ({ ...prev, activeAudioZone: zone }));
  };

  // Master Orchestrated Scenes
  const triggerMasterScene = (sceneName: string) => {
    setState(prev => ({ ...prev, activeMasterScene: sceneName }));

    switch (sceneName) {
      case 'welcome_home':
        // Gate opens, driveway & living room lights activate, curtains open to 80%
        setState(prev => ({
          ...prev,
          gateStatus: 'opening',
          carPosition: 'entering',
          lockState: 'unlocked',
          recentLockMethod: 'Geofence Welcome Scene',
          curtainPosition: 80,
          lightState: {
            ...prev.lightState,
            living: { on: true, brightness: 90, colorTemp: '#FFE5B4' },
            terrace: { on: true, brightness: 100, colorTemp: '#38BDF8' }
          },
          audioPlaying: true,
          activeAudioZone: 'living'
        }));
        setTimeout(() => {
          setState(prev => ({ ...prev, gateStatus: 'closing', carPosition: 'inside' }));
        }, 5000);
        break;

      case 'movie_night':
        // Living lights dim to 20%, curtains close, audio ready
        setState(prev => ({
          ...prev,
          curtainPosition: 0,
          lightState: {
            ...prev.lightState,
            living: { on: true, brightness: 20, colorTemp: '#0284C7' },
            bedroom: { on: false, brightness: 0, colorTemp: '#FFD79E' }
          },
          audioPlaying: true,
          audioVolume: 80,
          activeAudioZone: 'living'
        }));
        break;

      case 'good_night':
        // Curtains closed, all interior lights off, terrace security glow, gate locked
        setState(prev => ({
          ...prev,
          gateStatus: 'closed',
          lockState: 'locked',
          recentLockMethod: 'Night Lockdown Mode',
          curtainPosition: 0,
          audioPlaying: false,
          cctvNightMode: true,
          lightState: {
            living: { on: false, brightness: 0, colorTemp: '#FFE5B4' },
            bedroom: { on: true, brightness: 10, colorTemp: '#FFD79E' },
            terrace: { on: true, brightness: 30, colorTemp: '#38BDF8' },
            garden: { on: false, brightness: 0, colorTemp: '#4ADE80' }
          }
        }));
        break;

      case 'away_vacation':
        // Gate locked, locks engaged, irrigation scheduled, CCTV surveillance active
        setState(prev => ({
          ...prev,
          gateStatus: 'closed',
          lockState: 'locked',
          curtainPosition: 0,
          audioPlaying: false,
          cctvMotionDetected: false,
          cctvNightMode: false,
          lightState: {
            living: { on: false, brightness: 0, colorTemp: '#FFE5B4' },
            bedroom: { on: false, brightness: 0, colorTemp: '#FFD79E' },
            terrace: { on: true, brightness: 40, colorTemp: '#38BDF8' },
            garden: { on: false, brightness: 0, colorTemp: '#4ADE80' }
          }
        }));
        break;

      case 'garden_evening':
        // Garden lights on, terrace on, irrigation zone active
        setState(prev => ({
          ...prev,
          lightState: {
            ...prev.lightState,
            garden: { on: true, brightness: 100, colorTemp: '#4ADE80' },
            terrace: { on: true, brightness: 80, colorTemp: '#FFE5B4' }
          },
          activeIrrigationZone: 2,
          audioPlaying: true,
          activeAudioZone: 'pool'
        }));
        break;

      default:
        break;
    }
  };

  const resetAllDemos = () => {
    setState(defaultState);
  };

  return (
    <DemoContext.Provider
      value={{
        state,
        openGate,
        closeGate,
        stopGate,
        toggleObstruction,
        selectCamera,
        toggleNightMode,
        triggerMotion,
        triggerVdpCall,
        answerVdpCall,
        declineVdpCall,
        releaseGateFromVdp,
        selectIrrigationZone,
        startIrrigation,
        stopIrrigation,
        toggleRainDelay,
        toggleLight,
        setBrightness,
        setColorTemp,
        openCurtains,
        closeCurtains,
        stopCurtains,
        setCurtainPercentage,
        toggleLock,
        unlockWithMethod,
        toggleAudio,
        setAudioVolume,
        setAudioZone,
        triggerMasterScene,
        resetAllDemos
      }}
    >
      {children}
    </DemoContext.Provider>
  );
};

export const useDemo = () => {
  const context = useContext(DemoContext);
  if (!context) {
    throw new Error('useDemo must be used within a DemoProvider');
  }
  return context;
};
