export interface SolutionItem {
  id: string;
  slug: string;
  title: string;
  shortTitle?: string;
  category: 'automation' | 'access' | 'security' | 'landscape' | 'networking' | 'audio' | 'commercial';
  categoryLabel: string;
  headline: string;
  description: string;
  iconName: string;
  heroImage: string;
  features: string[];
  capabilities: {
    title: string;
    description: string;
  }[];
  specifications: {
    label: string;
    value: string;
  }[];
  applications: {
    residential: string[];
    commercial: string[];
  };
  compatibleIntegrations: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  interactiveDemoId?: 'gate' | 'cctv' | 'vdp' | 'irrigation' | 'lighting' | 'curtain' | 'lock' | 'network' | 'audio';
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: 'Luxury Villa' | 'Penthouse' | 'Commercial Office' | 'Hospitality';
  location: string;
  completionYear: string;
  scopeSummary: string;
  coverImage: string;
  gallery: string[];
  solutionsInstalled: string[];
  engineeringHighlights: string[];
  clientQuote?: {
    text: string;
    authorRole: string;
  };
}

export interface BrandPartner {
  name: string;
  category: string;
  country: string;
  description: string;
  badge?: string;
}

export type GateStatus = 'closed' | 'opening' | 'open' | 'closing' | 'stopped' | 'obstructed';

export interface DemoState {
  // Gate
  gateStatus: GateStatus;
  gateObstruction: boolean;
  carPosition: 'outside' | 'entering' | 'inside';
  
  // CCTV
  activeCameraId: number;
  cctvNightMode: boolean;
  cctvMotionDetected: boolean;
  
  // VDP
  vdpCallStatus: 'idle' | 'ringing' | 'connected' | 'declined';
  vdpVisitorImage: string;
  vdpDoorUnlocked: boolean;
  
  // Irrigation
  activeIrrigationZone: number; // 0 for all off
  irrigationRunning: boolean;
  rainDelayActive: boolean;
  irrigationProgress: number; // 0-100%
  
  // Lighting
  activeRoom: 'living' | 'bedroom' | 'terrace' | 'garden';
  lightState: {
    living: { on: boolean; brightness: number; colorTemp: string };
    bedroom: { on: boolean; brightness: number; colorTemp: string };
    terrace: { on: boolean; brightness: number; colorTemp: string };
    garden: { on: boolean; brightness: number; colorTemp: string };
  };
  
  // Curtains
  curtainPosition: number; // 0 = closed, 100 = open
  curtainMoving: boolean;
  
  // Smart Locks
  lockState: 'locked' | 'unlocked' | 'tamper_alert';
  recentLockMethod: string;
  
  // Network
  networkStatus: 'optimal' | 'warning';
  activeNode: string;
  
  // Audio
  audioPlaying: boolean;
  audioVolume: number;
  activeAudioZone: 'living' | 'bedroom' | 'pool' | 'all';
  
  // Master Scene active
  activeMasterScene: string | null;
}
