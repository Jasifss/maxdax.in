import { ProjectItem } from '../types';

export const projectsData: ProjectItem[] = [
  {
    id: 'kalamassery-villa',
    slug: 'kalamassery-contemporary-villa',
    title: 'The Solarium Contemporary Villa',
    category: 'Luxury Villa',
    location: 'Kalamassery, Ernakulam, Kerala',
    completionYear: '2024',
    scopeSummary: 'Complete turnkey automation for a 6,500 sq.ft contemporary architectural villa featuring motorized cantilever gates, full-property 4K CCTV, Video Door Phone integration, DALI tunable architectural lighting, and 4-zone smart garden irrigation.',
    coverImage: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80'
    ],
    solutionsInstalled: [
      'Automated Gate Systems (BFT Heavy Duty)',
      'Video Door Phone (10" Touch Station with Remote Gate Release)',
      '4K Perimeter CCTV with Starlight Night Vision',
      'Smart Architectural Lighting & DALI Dimming',
      'Multi-Zone Smart Irrigation System',
      'Wi-Fi 6 Whole-Villa Mesh Backbone'
    ],
    engineeringHighlights: [
      'Concealed underground cable routing preserving custom Italian granite driveway paving.',
      'Single-button "Arrive Home" preset: opens cantilever gate, activates driveway wash lighting, and unlocks inner foyer.',
      'Weather-adaptive garden irrigation that automatically delays during monsoon downpours.'
    ],
    clientQuote: {
      text: 'MAXDAX delivered what three other automation vendors said was impossible: completely invisible wiring, zero lag on phone controls, and automated gates that never miss a beat even in heavy monsoon rains.',
      authorRole: 'Villa Owner & Architect'
    }
  },
  {
    id: 'marine-drive-penthouse',
    slug: 'marine-drive-panoramic-penthouse',
    title: 'Marine Drive Waterfront Penthouse',
    category: 'Penthouse',
    location: 'Marine Drive, Kochi, Kerala',
    completionYear: '2024',
    scopeSummary: 'Smart luxury retrofit for an expansive 4,800 sq.ft duplex penthouse overlooking the backwaters. Includes motorized dual-roller sheer and blackout drapes, circadian lighting scenes, biometric access, and multi-room lossless audio.',
    coverImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80'
    ],
    solutionsInstalled: [
      'Motorized Drapery & Solar Screen Roller Shades',
      'Circadian Tunable White Lighting Control',
      'Biometric Push-Pull Smart Door Lock',
      'Multi-Room Architectural In-Ceiling Audio',
      'Climate & VRF Central AC Scheduling'
    ],
    engineeringHighlights: [
      'Automated sun-tracking solar blinds that drop progressively during intense afternoon backwater glare, reducing AC loads by 24%.',
      'Frameless architectural in-ceiling speakers painted to match custom textured venetian plaster ceilings.'
    ],
    clientQuote: {
      text: 'The evening scene transformation is breathtaking. One touch dims the lights, draws the motorized sheer curtains, and starts our lounge playlist effortlessly.',
      authorRole: 'Homeowner'
    }
  },
  {
    id: 'kakkanad-tech-residence',
    slug: 'kakkanad-minimalist-residence',
    title: 'The Glass Pavilion Villa',
    category: 'Luxury Villa',
    location: 'Kakkanad, Kochi, Kerala',
    completionYear: '2023',
    scopeSummary: 'Ultra-modern minimalist villa featuring smart motorized sliding gates, automated exterior perimeter security lighting, high-speed AirFiber wireless link, and complete hybrid wired/wireless automation.',
    coverImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80'
    ],
    solutionsInstalled: [
      'Automatic Gate Controller with Obstacle Photocells',
      'AI Smart CCTV with Perimeter Virtual Tripwires',
      'Enterprise Gigabit Wi-Fi 6 APs',
      'Intrusion Detection Sensors & GSM Panic Alarms'
    ],
    engineeringHighlights: [
      'Dedicated isolated IoT virtual LAN ensuring smart devices have zero access to corporate laptops and home NAS drives.',
      'Active deterrence strobe lighting that triggers only when an intruder steps over the boundary fence.'
    ]
  },
  {
    id: 'infopark-commercial-suite',
    slug: 'infopark-executive-corporate-suite',
    title: 'Executive Corporate Innovation Suite',
    category: 'Commercial Office',
    location: 'Infopark, Kakkanad, Ernakulam',
    completionYear: '2024',
    scopeSummary: 'Commercial smart automation for an executive suite and boardroom, featuring automated motorized glass privacy film, integrated conference audio/video, access control, and centralized energy monitoring.',
    coverImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80'
    ],
    solutionsInstalled: [
      'Smart Access Control with RFID & NFC Mobile Badges',
      'Boardroom Motorized Screen & Laser Projection Automation',
      'Automated Daylight Harvesting & DALI Office Lighting',
      'Centralized Energy Consumption Analytics'
    ],
    engineeringHighlights: [
      'Automated "Presentation Mode" dims conference lighting, lowers motorized projection screen, and switches sound matrix automatically.'
    ]
  }
];
