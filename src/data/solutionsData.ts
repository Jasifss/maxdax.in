import { SolutionItem } from '../types';

export const solutionsData: SolutionItem[] = [
  {
    id: 'gate-automation',
    slug: 'gate-automation',
    title: 'Automated Gate Systems',
    shortTitle: 'Gate Automation',
    category: 'access',
    categoryLabel: 'Perimeter Access',
    headline: 'Effortless, High-Torque Swing & Sliding Gate Automation',
    description: 'Transform your entrance with whisper-quiet, industrial-grade motorized gate automation. Engineered for Kerala weather conditions with anti-crush safety beams, smartphone app control, and seamless video door phone integration.',
    iconName: 'ShieldCheck',
    heroImage: 'https://images.unsplash.com/photo-1613082390827-02e867518456?auto=format&fit=crop&w=1200&q=80',
    interactiveDemoId: 'gate',
    features: [
      'Heavy-duty Italian & European gate motors (BFT, DEA)',
      'Dual safety obstacle detection & infrared photocells',
      'Battery backup system for uninterrupted monsoon operation',
      'Integration with Video Door Phone and RFID long-range tags',
      'Encrypted rolling-code remotes and smartphone app control'
    ],
    capabilities: [
      {
        title: 'Sliding & Cantilever Gate Motors',
        description: 'Engineered for gates up to 2,000 kg with grease-bath gearboxes for silent operation and extended lifespan.'
      },
      {
        title: 'Articulated & Linear Swing Arms',
        description: 'Underground concealed or pillar-mounted electro-mechanical arms for contemporary and traditional ornamental gates.'
      },
      {
        title: 'Automatic Obstacle Safety Reversal',
        description: 'Active photocells detect vehicles, children, and pets instantly, reversing direction before any contact.'
      }
    ],
    specifications: [
      { label: 'Gate Weight Capacity', value: 'Up to 2,000 kg (Sliding) / 800 kg per leaf (Swing)' },
      { label: 'Operating Speed', value: '12 - 25 meters/minute' },
      { label: 'Ingress Protection', value: 'IP54 / IP67 Weatherproof rating' },
      { label: 'Power Backup', value: 'Integrated 24V DC battery emergency kit' },
      { label: 'Control Protocols', value: '433MHz Rolling Code, Wi-Fi, Dry Contact' }
    ],
    applications: {
      residential: ['Private gated luxury villas', 'Beachfront holiday homes', 'Apartment basement gates', 'Farmhouses'],
      commercial: ['Corporate tech parks', 'Logistics warehouses', 'Gated township perimeters', 'Hospital ambulance bays']
    },
    compatibleIntegrations: ['Video Door Phone (VDP)', 'CCTV ANPR Number Plate Cameras', 'RFID Long-Range Vehicle Readers', 'Home Automation Scenes'],
    faqs: [
      {
        question: 'What happens during a power failure in Kerala?',
        answer: 'All our automated gate setups come standard with 24V DC battery backups allowing 30+ full open/close cycles, plus a high-security mechanical manual release key.'
      },
      {
        question: 'Can the gate be opened automatically when my car approaches?',
        answer: 'Yes! We configure long-range RFID windshield tags or smartphone geofencing so your gate opens automatically upon your arrival.'
      },
      {
        question: 'Can I open the gate for delivery drivers while I am away at work?',
        answer: 'Absolutely. When someone rings your Video Door Phone, you receive an instant HD video call on your phone and can open the gate with one tap.'
      }
    ]
  },
  {
    id: 'cctv-surveillance',
    slug: 'cctv-surveillance',
    title: 'CCTV & Perimeter Surveillance',
    shortTitle: 'CCTV Surveillance',
    category: 'security',
    categoryLabel: 'Perimeter Defense',
    headline: 'Ultra HD Vision, Smart Night Color & AI Perimeter Detection',
    description: 'Protect your estate with continuous 4K HDR optical surveillance, color night vision, intelligent human/vehicle classification, and encrypted remote streaming on iOS and Android.',
    iconName: 'Eye',
    heroImage: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=80',
    interactiveDemoId: 'cctv',
    features: [
      'True 4K UHD resolution with optical zoom lenses',
      'Full-color night vision with warm supplemental matrix LEDs',
      'AI AcuSense human and vehicle detection filtering false alarms',
      'Active deterrence sirens and strobe flashing on tripwire breach',
      'Dual recording redundancy (On-premise NVR + Encrypted remote access)'
    ],
    capabilities: [
      {
        title: 'Perimeter Tripwire & Intrusion Zones',
        description: 'Draw virtual boundary lines along boundary walls; receive instant alerts only when humans or vehicles cross.'
      },
      {
        title: 'DarkFighter & Starlight Technology',
        description: 'Vivid, razor-sharp color video in pitch-black conditions without glaring external floodlights.'
      },
      {
        title: 'Centralized Villa Network Video Recording',
        description: 'Industrial-grade Western Digital Purple storage with 30-60 days continuous archival recording.'
      }
    ],
    specifications: [
      { label: 'Sensor Resolution', value: '4K (3840 x 2160) at 30 fps' },
      { label: 'Night Vision Range', value: 'Up to 60 meters with Smart IR & ColorVu' },
      { label: 'Enclosure Rating', value: 'IP67 Vandal-proof IK10 aluminum alloy' },
      { label: 'Storage Architecture', value: 'PoE 4K NVR with RAID redundancy' },
      { label: 'Audio', value: 'Two-way noise-canceling microphone & speaker' }
    ],
    applications: {
      residential: ['Boundary walls & driveways', 'Poolside & garden perimeters', 'Main foyer entry', 'Home parking areas'],
      commercial: ['Retail showrooms', 'Factory perimeters', 'Office corridors', 'Construction site monitoring']
    },
    compatibleIntegrations: ['Gate Automation Systems', 'Outdoor Security Lighting', 'Video Door Phone Monitors', 'Centralized Security Alarms'],
    faqs: [
      {
        question: 'Do stray animals and heavy rain trigger false alarm notifications?',
        answer: 'No. Our cameras use hardware deep-learning algorithms that specifically classify human bodies and motor vehicles, ignoring rain, trees, and domestic animals.'
      },
      {
        question: 'Can I view multiple properties from one single mobile app?',
        answer: 'Yes, our enterprise mobile application aggregates all your residential villas, offices, and holiday homes into a unified, secure dashboard.'
      }
    ]
  },
  {
    id: 'video-door-phone',
    slug: 'video-door-phone',
    title: 'Video Door Phone (VDP) Intercom',
    shortTitle: 'Video Door Phone',
    category: 'access',
    categoryLabel: 'Visitor Management',
    headline: 'Crystal-Clear Two-Way Video Intercom with Instant Gate Release',
    description: 'Never miss a visitor or delivery. High-definition wide-angle camera outdoor stations paired with sleek indoor touchscreens and worldwide smartphone video forwarding.',
    iconName: 'Tv',
    heroImage: 'https://images.unsplash.com/photo-1519223400929-716447593c6f?auto=format&fit=crop&w=1200&q=80',
    interactiveDemoId: 'vdp',
    features: [
      '1080p Full HD wide-angle camera with night vision illuminators',
      '7" or 10" luxury IPS indoor capacitive touch panels',
      'Smartphone app answering with two-way HD audio',
      'Direct one-touch command to open automated gate or unlock main door',
      'Automatic visitor snapshot and video voicemail recording'
    ],
    capabilities: [
      {
        title: 'Multi-Station Calling',
        description: 'Ring simultaneously across all floor monitors, living room panels, and family members’ smartphones.'
      },
      {
        title: 'Integrated Access Control',
        description: 'Outdoor stations include built-in RFID card readers and keypad PIN options for domestic staff entry.'
      },
      {
        title: 'CCTV Live Monitor Integration',
        description: 'View any perimeter CCTV camera directly on your kitchen or master bedroom VDP station.'
      }
    ],
    specifications: [
      { label: 'Display Resolution', value: '1024 x 600 / 1920 x 1080 Capacitive Touch' },
      { label: 'Camera Lens Field', value: '180° Ultra-wide Fisheye Lens' },
      { label: 'Cabling Infrastructure', value: 'CAT6 PoE (Power over Ethernet) or 2-Wire IP' },
      { label: 'Relay Outputs', value: 'Dual Relays for Motorized Gate & Magnetic Door Strike' }
    ],
    applications: {
      residential: ['Multi-floor contemporary villas', 'Duplex penthouses', 'Private family compounds'],
      commercial: ['Executive offices', 'Medical clinics', 'Consultancy studios']
    },
    compatibleIntegrations: ['Automated Driveway Gates', 'Smart Digital Door Locks', 'Perimeter CCTV Systems'],
    faqs: [
      {
        question: 'Can I speak to someone at the gate if I am traveling abroad?',
        answer: 'Yes. As long as your phone has internet connectivity, you receive an instant push notification with live video and clear two-way audio worldwide.'
      }
    ]
  },
  {
    id: 'smart-irrigation',
    slug: 'smart-irrigation',
    title: 'Smart Garden & Landscape Irrigation',
    shortTitle: 'Smart Irrigation',
    category: 'landscape',
    categoryLabel: 'Landscape Automation',
    headline: 'Lush Tropical Lawns with Weather-Adaptive Water Conservation',
    description: 'Intelligent multi-zone garden watering customized for Kerala’s climate. Combines soil moisture sensors, weather forecasting, and automated solenoid valves for effortless landscaping care.',
    iconName: 'Droplets',
    heroImage: 'https://images.unsplash.com/photo-1558435186-d31d1430097a?auto=format&fit=crop&w=1200&q=80',
    interactiveDemoId: 'irrigation',
    features: [
      'Independent multi-zone scheduling (Front lawn, borders, planter boxes, vertical gardens)',
      'Automated Rain Delay halts watering during heavy monsoon downpours',
      'Capacitive soil moisture sensors prevent overwatering and root rot',
      'High-pressure brass solenoid valves with manual bypass overrides',
      'Smartphone scheduling with water consumption analytics'
    ],
    capabilities: [
      {
        title: 'Micro-Drip & Pop-Up Sprinkler Control',
        description: 'Precise hydration for fragile exotic plants and wide lawn coverage with concealed pop-up nozzles.'
      },
      {
        title: 'Local Weather Forecast Sync',
        description: 'Automatically pauses scheduled watering when the local forecast predicts rain over Kalamassery/Ernakulam.'
      }
    ],
    specifications: [
      { label: 'Valve Voltage', value: '24V AC Commercial Solenoid Valves' },
      { label: 'Zones Supported', value: '4 to 16 expandable independent zones' },
      { label: 'Sensor Inputs', value: 'Rain sensor, Soil moisture, Flow meter' },
      { label: 'Connectivity', value: 'Wi-Fi / Zigbee / Ethernet Gateway' }
    ],
    applications: {
      residential: ['Villa expansive lawns', 'Courtyard Zen gardens', 'Terrace planter boxes'],
      commercial: ['Resort landscaped pathways', 'Corporate office green walls', 'Sports club turfs']
    },
    compatibleIntegrations: ['Outdoor Evening Lighting Scenes', 'CCTV Garden Cameras', 'Rainwater Harvesting Tanks'],
    faqs: [
      {
        question: 'Will it stop watering if it starts raining?',
        answer: 'Yes! An integrated digital rain sensor or live local forecast triggers an instant automatic Rain Pause, saving water and protecting plants.'
      }
    ]
  },
  {
    id: 'smart-lighting',
    slug: 'smart-lighting',
    title: 'Smart Architectural Lighting',
    shortTitle: 'Smart Lighting',
    category: 'automation',
    categoryLabel: 'Atmosphere & Scenes',
    headline: 'Tunable White, Precision Dimming & Cinematic Lighting Scenes',
    description: 'Transform every room into an architectural masterpiece. From warm 2200K twilight relaxation to daylight concentration and vibrant RGB cove lighting, tailored to your circadian rhythm.',
    iconName: 'Lightbulb',
    heroImage: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1200&q=80',
    interactiveDemoId: 'lighting',
    features: [
      'Smooth trailing-edge and 0-10V flicker-free dimming (0.1% to 100%)',
      'Tunable White (2700K Warm Amber to 6500K Cool White)',
      'Circadian rhythm synchronization imitating natural sunlight',
      'Architectural multi-gang touch switches with metallic and glass finishes',
      'One-touch scene recall (Welcome, Dinner, Movie, Night Watch)'
    ],
    capabilities: [
      {
        title: 'Centralized & Retrofit Modules',
        description: 'Compatible with both new constructions with DB panels and existing homes via concealed in-wall modules without rewiring.'
      },
      {
        title: 'RGBW Indirect Cove Ambience',
        description: 'Concealed LED strip control with 16 million colors for false ceilings, stair treads, and media walls.'
      }
    ],
    specifications: [
      { label: 'Dimming Protocols', value: 'Trailing-Edge, DALI-2, 0-10V, Phase Cut' },
      { label: 'Switch Finishes', value: 'Brushed Aluminum, Matt Black, Toughened Glass' },
      { label: 'Wireless Standards', value: 'Zigbee 3.0, Matter, KNX Hybrid' }
    ],
    applications: {
      residential: ['Living salons', 'Dining rooms', 'Home cinemas', 'Master bedrooms', 'Landscape facades'],
      commercial: ['Fine dining restaurants', 'Art galleries', 'Executive boardrooms']
    },
    compatibleIntegrations: ['Motorized Curtains & Blinds', 'Home Theatre Audio', 'Motion Presence Sensors'],
    faqs: [
      {
        question: 'Can I keep my existing designer light fixtures?',
        answer: 'Yes. Our smart dimmers and controllers install behind your switch plates or inside the ceiling, allowing you to retain any premium light fixture.'
      }
    ]
  },
  {
    id: 'curtain-automation',
    slug: 'curtain-automation',
    title: 'Motorized Curtain & Drapery Systems',
    shortTitle: 'Curtain Automation',
    category: 'automation',
    categoryLabel: 'Window Automation',
    headline: 'Whisper-Quiet Motorized Drapery with Touch-Motion Technology',
    description: 'Glide heavy velvet drapes and sheer curtains effortlessly. Features gentle touch-pull manual trigger, scheduled astronomical sunrise opening, and silent brushless motors.',
    iconName: 'Maximize2',
    heroImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    interactiveDemoId: 'curtain',
    features: [
      'Ultra-silent acoustic motors (< 30 dB operating sound)',
      'Touch-Motion: Gentle pull by hand activates full opening/closing',
      'Custom heavy-duty aluminum tracks up to 12 meters length',
      'Dual track setups (Sheer + Blackout drapes on independent motors)',
      'Astronomical clock scheduling: Open with Kerala sunrise, close at sunset'
    ],
    capabilities: [
      {
        title: 'Percentage Positioning',
        description: 'Set custom positions like 30% morning daylight or 75% afternoon shade via app or voice control.'
      },
      {
        title: 'Manual Override Clutch',
        description: 'Curtains can still be operated manually during power outages without any resistance.'
      }
    ],
    specifications: [
      { label: 'Track Weight Rating', value: 'Up to 60 kg per motor' },
      { label: 'Acoustic Level', value: 'Under 30 decibels' },
      { label: 'Track Configuration', value: 'Straight, 90° Curved, S-Fold, Pinch Pleat' }
    ],
    applications: {
      residential: ['High-ceiling double-height villas', 'Master bedrooms', 'Private home theatres'],
      commercial: ['Luxury hotel suites', 'Auditoriums', 'Executive suites']
    },
    compatibleIntegrations: ['Smart Lighting Scenes', 'Climate AC Control', 'Movie Night Preset'],
    faqs: [
      {
        question: 'Can curved bay window tracks be motorized?',
        answer: 'Yes, we custom-bend heavy-duty aluminum tracks to match any architectural radius or 90° corner.'
      }
    ]
  },
  {
    id: 'blind-automation',
    slug: 'blind-automation',
    title: 'Motorized Roller & Venetian Blinds',
    shortTitle: 'Blind Automation',
    category: 'automation',
    categoryLabel: 'Window Automation',
    headline: 'Precision Solar Shading & Motorized Venetian Tilt',
    description: 'Custom motorized roller shades, Roman blinds, and wooden Venetian slats designed for heat rejection and modern minimalist privacy control.',
    iconName: 'Sliders',
    heroImage: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=80',
    interactiveDemoId: 'curtain',
    features: [
      'Tubular rechargeable battery or hardwired 230V AC motors',
      'Micro-step slat tilting for Venetian blinds',
      'UV-blocking solar screen fabrics for tropical heat reduction',
      'Synchronized multi-window rolling for clean architectural lines'
    ],
    capabilities: [
      {
        title: 'Solar Tracking Integration',
        description: 'Automatically drop western-facing blinds during afternoon peak heat to slash AC electrical bills.'
      }
    ],
    specifications: [
      { label: 'Motor Type', value: 'Concealed Tubular Motor with Electronic Limits' },
      { label: 'Noise Rating', value: '< 35 dB' }
    ],
    applications: {
      residential: ['Balcony enclosures', 'Study rooms', 'Contemporary kitchens'],
      commercial: ['Glass boardrooms', 'Floor-to-ceiling office facades']
    },
    compatibleIntegrations: ['AC Temperature Control', 'Scene Automation'],
    faqs: [
      {
        question: 'What if there is no power outlet near the window?',
        answer: 'We provide long-life lithium rechargeable motors that operate 6 to 9 months on a single USB-C charge or continuous solar panel trickle charger.'
      }
    ]
  },
  {
    id: 'digital-locks',
    slug: 'digital-locks',
    title: 'Biometric & Smart Digital Door Locks',
    shortTitle: 'Digital Locks',
    category: 'access',
    categoryLabel: 'Main Door Access',
    headline: 'Military-Grade Keyless Entry with 3D Face & Fingerprint Access',
    description: 'Elevate your main door security with premium smart locks featuring 3D semiconductor fingerprint recognition, scrambled PIN codes, RFID keycards, and one-time guest access codes.',
    iconName: 'Lock',
    heroImage: 'https://images.unsplash.com/photo-1558002038-1091a1661116?auto=format&fit=crop&w=1200&q=80',
    interactiveDemoId: 'lock',
    features: [
      'Swedish FPC 3D biometric fingerprint scanner (< 0.3s unlock)',
      'Scramble anti-peep PIN entry preventing code theft',
      'Encrypted RFID keycards & mechanical anti-drill emergency keys',
      'Temporary OTP generation for visiting guests, domestic staff, or deliveries',
      'Tamper alarm & forced-entry auto lockdown'
    ],
    capabilities: [
      {
        title: 'Push-Pull Automatic Mortise',
        description: 'Heavy stainless steel automatic multi-bolt mortise locks instantly upon door closure without turning handles.'
      },
      {
        title: 'Real-Time Access Log',
        description: 'Receive smartphone notifications showing exactly which family member entered and at what timestamp.'
      }
    ],
    specifications: [
      { label: 'Recognition Speed', value: 'Less than 0.3 seconds' },
      { label: 'Mortise Material', value: 'SUS304 Stainless Steel triple-latch' },
      { label: 'Battery Life', value: '12-14 months (4x AA batteries with USB-C emergency jumpstart)' }
    ],
    applications: {
      residential: ['Main entrance teak wood doors', 'Master bedroom doors', 'Home office doors'],
      commercial: ['Server rooms', 'Executive cabins', 'Co-working suites']
    },
    compatibleIntegrations: ['Video Door Phone Integration', 'Home Welcome Scenes', 'CCTV Entrance View'],
    faqs: [
      {
        question: 'What happens if the lock battery dies completely?',
        answer: 'You will receive low-battery warnings weeks in advance. If it ever fully drains, plug any standard USB-C power bank to jumpstart it instantly, or use the high-security mechanical key.'
      }
    ]
  },
  {
    id: 'wifi-solutions',
    slug: 'wifi-solutions',
    title: 'Enterprise High-Speed Wi-Fi Solutions',
    shortTitle: 'Wi-Fi Solutions',
    category: 'networking',
    categoryLabel: 'Connectivity',
    headline: 'Zero-Dead-Zone Gigabit Mesh Wi-Fi 6 Across Every Square Foot',
    description: 'Eliminate buffering and dropped calls. Seamless ceiling-mounted Wi-Fi 6 access points with zero-handoff roaming across sprawling multi-floor villas, thick concrete walls, and outdoor poolside gardens.',
    iconName: 'Wifi',
    heroImage: 'https://images.unsplash.com/photo-1544197150-b99a580bbcbf?auto=format&fit=crop&w=1200&q=80',
    interactiveDemoId: 'network',
    features: [
      'Wi-Fi 6 (802.11ax) dual-band & tri-band speeds up to 5.4 Gbps',
      'Seamless 802.11k/v/r roaming without video call disconnects',
      'Dedicated IoT isolated VLAN keeping smart home gadgets secure',
      'Aesthetic disc ceiling-mount access points powered via PoE',
      'Outdoor weatherproof APs for terrace and swimming pool coverage'
    ],
    capabilities: [
      {
        title: 'Multi-Floor Concrete Penetration',
        description: 'Engineered specifically for South Indian reinforced concrete (RCC) slab construction.'
      }
    ],
    specifications: [
      { label: 'Throughput', value: 'Up to 5,400 Mbps Wi-Fi 6' },
      { label: 'Concurrent Devices', value: '300+ active devices per AP without lag' },
      { label: 'Power Source', value: '802.3af/at PoE' }
    ],
    applications: {
      residential: ['3-story luxury villas', 'Garden lawns', 'Basement entertainment rooms'],
      commercial: ['Cafes and boutique hotels', 'Multi-room corporate spaces']
    },
    compatibleIntegrations: ['Smart Home Controllers', 'CCTV NVR Streams', 'AirFiber Backhaul'],
    faqs: [
      {
        question: 'Why do consumer routers fail in Kerala villas?',
        answer: 'Thick concrete pillars and brick walls severely degrade radio waves. We deploy wired Gigabit PoE backbones to ceiling access points on every floor for seamless, full-signal roaming.'
      }
    ]
  },
  {
    id: 'home-audio',
    slug: 'home-audio',
    title: 'Architectural Multi-Room Audio & Home Theatres',
    shortTitle: 'Home Audio',
    category: 'audio',
    categoryLabel: 'Acoustics & Audio',
    headline: 'Audiophile Sound Engineered Flush into Your Architecture',
    description: 'Fill every living space with pristine, immersive sound. Edgeless magnetic in-ceiling speakers, Dolby Atmos home theatre acoustic calibration, and multi-zone streaming via Apple AirPlay 2 and Spotify Connect.',
    iconName: 'Music',
    heroImage: 'https://images.unsplash.com/photo-1574950578143-858c6fc58922?auto=format&fit=crop&w=1200&q=80',
    interactiveDemoId: 'audio',
    features: [
      'Frameless paintable magnetic grilles flush with ceiling plaster',
      'Independent multi-room streaming (Jazz in kitchen, Rock in gym, Lounge in pool)',
      'Party Mode: Synchronize all villa zones with zero delay',
      'Audiophile Class-D multi-channel matrix amplifiers',
      'Dedicated Dolby Atmos 7.2.4 private cinema design and room acoustic treatment'
    ],
    capabilities: [
      {
        title: 'True Multi-Zone Control',
        description: 'Control volume and playlist selections per room directly from wall keypads or family smartphones.'
      }
    ],
    specifications: [
      { label: 'Frequency Response', value: '35 Hz - 25,000 Hz' },
      { label: 'Amplifier Topology', value: 'High-efficiency Class-D 100W RMS per channel' },
      { label: 'Streaming Protocols', value: 'AirPlay 2, Spotify Connect, Tidal Hi-Fi, Bluetooth 5.2' }
    ],
    applications: {
      residential: ['Living rooms', 'Kitchens & dining halls', 'Poolside patios', 'Private home theatres'],
      commercial: ['Upscale dining', 'Executive conference rooms', 'Spas']
    },
    compatibleIntegrations: ['Movie Night Lighting Scenes', 'Voice Assistants', 'Curtain Automation'],
    faqs: [
      {
        question: 'Can the ceiling speakers be painted to match our ceiling color?',
        answer: 'Yes! The magnetic speaker grilles are specifically engineered for architectural painting, making them virtually invisible.'
      }
    ]
  },
  {
    id: 'smart-home-automation',
    slug: 'smart-home-automation',
    title: 'Complete Smart Home Automation',
    shortTitle: 'Home Automation',
    category: 'automation',
    categoryLabel: 'Intelligent Living',
    headline: 'Unified Centralized Intelligence for Lighting, Climate & Safety',
    description: 'Experience effortless control of your entire residence through one intuitive interface. Orchestrate lighting, curtains, climate, audio, security, and gate systems into harmonious daily lifestyle scenes.',
    iconName: 'Home',
    heroImage: 'https://images.unsplash.com/photo-1558002038-1091a1661116?auto=format&fit=crop&w=1200&q=80',
    interactiveDemoId: 'lighting',
    features: [
      'Unified mobile app for iOS and Android',
      'Voice control integration with Apple Siri, Amazon Alexa, and Google Assistant',
      'Hybrid wired (KNX/Bus) and wireless (Zigbee 3.0/Matter) architectures',
      'Local offline processing ensuring scenes work even if internet drops',
      'Comprehensive energy consumption monitoring'
    ],
    capabilities: [
      {
        title: 'Automated Lifestyle Scenarios',
        description: 'Wake up to gradual natural lighting, enjoy preset movie acoustics, and secure your residence with a single tap.'
      }
    ],
    specifications: [
      { label: 'Architecture', value: 'Hybrid IP / Zigbee 3.0 / KNX' },
      { label: 'Local Server', value: 'Dedicated low-latency edge automation controller' },
      { label: 'Security', value: '256-bit AES local token encryption' }
    ],
    applications: {
      residential: ['New luxury villa constructions', 'Retrofit renovations', 'Penthouse residences'],
      commercial: ['Smart corporate boardrooms', 'Luxury boutique resorts']
    },
    compatibleIntegrations: ['Every MAXDAX smart sub-system seamlessly unified'],
    faqs: [
      {
        question: 'Will my automation still work if our internet connection goes down?',
        answer: 'Yes! All MAXDAX systems utilize local edge processing. Your wall switches, remotes, sensors, and schedule routines function normally even without internet.'
      }
    ]
  },
  {
    id: 'airfiber-wireless',
    slug: 'airfiber-wireless',
    title: 'AirFiber High-Speed Wireless Connectivity',
    shortTitle: 'AirFiber Internet',
    category: 'networking',
    categoryLabel: 'Connectivity',
    headline: 'Carrier-Grade Wireless Backhaul Where Fiber Cannot Reach',
    description: 'High-throughput point-to-point and point-to-multipoint wireless links connecting remote farmhouses, perimeter security posts, and large estate outbuildings with multi-gigabit speeds.',
    iconName: 'Radio',
    heroImage: 'https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&w=1200&q=80',
    interactiveDemoId: 'network',
    features: [
      'Speeds up to 1+ Gbps over distances of up to 15+ kilometers',
      'Immune to Kerala roadwork fiber cuts and trenching restrictions',
      'Low latency (< 2ms) ideal for real-time CCTV streaming',
      'Surge-protected outdoor rugged enclosures'
    ],
    capabilities: [
      {
        title: 'Estate Perimeter Linking',
        description: 'Connect security guard posts, automated gates, and perimeter cameras without digging up manicured lawns.'
      }
    ],
    specifications: [
      { label: 'Operating Frequency', value: '5 GHz / 60 GHz Wave Technology' },
      { label: 'Range', value: 'Up to 20 km line-of-sight' }
    ],
    applications: {
      residential: ['Large estate compounds', 'Plantation bungalows', 'Outhouse links'],
      commercial: ['Branch office connectivity', 'Warehouses', 'Campuses']
    },
    compatibleIntegrations: ['CCTV NVR Surveillance', 'Wi-Fi Mesh Access Points'],
    faqs: [
      {
        question: 'Does heavy rain affect the AirFiber wireless link?',
        answer: 'We engineer link budgets with 20dB+ fade margin specifically for Kerala monsoon rainfall, ensuring stable 99.9% uptime year-round.'
      }
    ]
  },
  {
    id: 'shutter-automation',
    slug: 'shutter-automation',
    title: 'Automated Rolling Shutters & Garage Doors',
    shortTitle: 'Shutter Automation',
    category: 'access',
    categoryLabel: 'Access & Storage',
    headline: 'High-Security Motorized Rolling Shutters & Sectional Doors',
    description: 'Motorized roller shutter automation with wireless remote and smart app operation for residential vehicle garages, boutique storefronts, and commercial warehouses.',
    iconName: 'Warehouse',
    heroImage: 'https://images.unsplash.com/photo-1599818821816-09758532db2f?auto=format&fit=crop&w=1200&q=80',
    interactiveDemoId: 'gate',
    features: [
      'Heavy-duty side-mount and tubular center motors',
      'Manual chain or clutch override in case of power interruption',
      'Safety edge auto-reverse on obstacle contact',
      'Smartphone operation with open/closed status notification'
    ],
    capabilities: [
      {
        title: 'Sectional Overhead Garage Doors',
        description: 'Thermal-insulated overhead doors gliding silently under the garage ceiling.'
      }
    ],
    specifications: [
      { label: 'Lifting Capacity', value: 'Up to 800 kg' },
      { label: 'Operating Speed', value: '10 - 15 cm/second' }
    ],
    applications: {
      residential: ['Villa garage parking', 'Home tool sheds'],
      commercial: ['Commercial showrooms', 'Warehouse loading docks']
    },
    compatibleIntegrations: ['Smart Home App', 'Entrance CCTV View'],
    faqs: [
      {
        question: 'Can I operate the shutter if the remote is lost?',
        answer: 'Yes, shutters can be controlled via your mobile app, an encrypted wall key switch, or an emergency manual chain mechanism.'
      }
    ]
  },
  {
    id: 'intrusion-detection-security',
    slug: 'intrusion-detection-security',
    title: 'Intrusion Detection & Complete Villa Security',
    shortTitle: 'Complete Security',
    category: 'security',
    categoryLabel: 'Security Systems',
    headline: '360° Perimeter Alarms, Glass-Break & Fire Warning Systems',
    description: 'Grade-2 security architecture featuring wireless vibration sensors, glass-break acoustic detectors, outdoor dual-PIR beams, and instant siren triggering with automated phone dispatch.',
    iconName: 'ShieldAlert',
    heroImage: 'https://images.unsplash.com/photo-1588610385960-49279a405c56?auto=format&fit=crop&w=1200&q=80',
    interactiveDemoId: 'cctv',
    features: [
      'Wireless dual-element PIR motion sensors with pet immunity',
      'Magnetic door & window intrusion contacts',
      'High-decibel outdoor solar strobe sirens',
      'Dual-path GSM SIM card and IP communication for zero-tamper reporting',
      'Integrated optical smoke and LPG gas leak emergency alerts'
    ],
    capabilities: [
      {
        title: 'Night Perimeter Armed Mode',
        description: 'Arm external boundary sensors while family members move freely inside the villa during night hours.'
      }
    ],
    specifications: [
      { label: 'Wireless Range', value: 'Up to 1,500m open field' },
      { label: 'Battery Lifespan', value: 'Up to 5 years per wireless detector' }
    ],
    applications: {
      residential: ['Luxury standalone residences', 'Vacation holiday villas'],
      commercial: ['Jewellery showrooms', 'Pharmacies', 'Offices']
    },
    compatibleIntegrations: ['CCTV Video Verification', 'Exterior Security Floodlights'],
    faqs: [
      {
        question: 'Will our pet dog trigger the indoor alarm?',
        answer: 'No. Our detectors incorporate pet immunity algorithms that ignore animals weighing up to 25 kg moving at floor level.'
      }
    ]
  },
  {
    id: 'scene-automation',
    slug: 'scene-automation',
    title: 'Intelligent Lifestyle Scene Automation',
    shortTitle: 'Scene Automation',
    category: 'automation',
    categoryLabel: 'Intelligent Living',
    headline: 'Synchronized Multi-Device Environmental Orchestration',
    description: 'Bring your home to life with one touch. Coordinate ambient lighting, air conditioning, motorized drapes, and high-fidelity acoustics into cohesive moods.',
    iconName: 'Sparkles',
    heroImage: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1200&q=80',
    interactiveDemoId: 'lighting',
    features: ['Custom scene programming', 'Time-of-day triggers', 'Presence-based activation'],
    capabilities: [{ title: 'Mood Presets', description: 'Configure Dinner, Party, Cinema, and Relaxation atmospheres.' }],
    specifications: [{ label: 'Trigger Types', value: 'Wall Keypad, Voice, Schedule, Geofence' }],
    applications: { residential: ['Luxury living spaces'], commercial: ['Hospitality lounges'] },
    compatibleIntegrations: ['Lighting', 'Curtains', 'Audio', 'HVAC'],
    faqs: [{ question: 'Can I create and edit my own scenes?', answer: 'Yes, our mobile app allows you to customize and save your own scenes anytime.' }]
  },
  {
    id: 'smart-switches-controllers',
    slug: 'smart-switches-controllers',
    title: 'Designer Smart Switches & Micro-Controllers',
    shortTitle: 'Smart Switches',
    category: 'automation',
    categoryLabel: 'Hardware & Control',
    headline: 'Tactile European Design Meets Micro-Second Responsiveness',
    description: 'Replace standard plastic wall switches with anodized aluminum, glass, and brass luxury capacitive touchplates featuring haptic feedback and LED status backlighting.',
    iconName: 'ToggleRight',
    heroImage: 'https://images.unsplash.com/photo-1558002038-1091a1661116?auto=format&fit=crop&w=1200&q=80',
    interactiveDemoId: 'lighting',
    features: ['Toughened crystal glass panels', 'Custom engraved icons with RGB LED backlights', 'Concealed retrofit relays'],
    capabilities: [{ title: 'Multi-Way Switching', description: 'Reconfigure 2-way and 3-way staircase switching without changing wall wiring.' }],
    specifications: [{ label: 'Voltage', value: '110-240V AC' }, { label: 'Load Per Gang', value: 'Up to 500W Resistive' }],
    applications: { residential: ['All residential rooms'], commercial: ['Hotel guest suites'] },
    compatibleIntegrations: ['Smart Lighting', 'Ceiling Fans', 'Drapes'],
    faqs: [{ question: 'Do I need neutral wires in the switch boxes?', answer: 'We offer both neutral and no-neutral modules, making them suitable for any electrical wiring setup.' }]
  },
  {
    id: 'climate-control',
    slug: 'climate-control',
    title: 'Smart AC & Climate Thermostat Control',
    shortTitle: 'Climate Control',
    category: 'automation',
    categoryLabel: 'Energy & Climate',
    headline: 'Optimal Comfort with Efficient Energy Consumption',
    description: 'Intelligent control for split, VRF, and ducted air-conditioning systems. Automatically adjusts temperature based on room occupancy and outdoor humidity.',
    iconName: 'Wind',
    heroImage: 'https://images.unsplash.com/photo-1544197150-b99a580bbcbf?auto=format&fit=crop&w=1200&q=80',
    interactiveDemoId: 'lighting',
    features: ['VRF/VRV central AC gateway integration', 'Smart IR emitters for split AC units', 'Pre-cooling on arrival geofence'],
    capabilities: [{ title: 'Energy Optimization', description: 'Cuts AC electricity consumption by up to 30% through intelligent setback schedules.' }],
    specifications: [{ label: 'Compatibility', value: 'Daikin, Mitsubishi, Panasonic, LG, Carrier' }],
    applications: { residential: ['Villas & bedrooms'], commercial: ['Offices & retail'] },
    compatibleIntegrations: ['Curtains & Blinds', 'Occupancy Sensors'],
    faqs: [{ question: 'Can I turn on the AC before reaching home?', answer: 'Yes, turn on your AC from your phone so your home is cooled to perfection upon your arrival.' }]
  },
  {
    id: 'automatic-gate-controllers',
    slug: 'automatic-gate-controllers',
    title: 'Heavy-Duty Automatic Gate Controllers',
    shortTitle: 'Gate Controllers',
    category: 'access',
    categoryLabel: 'Perimeter Access',
    headline: 'High-Torque Electronic Control Boards & Gearmotors',
    description: 'Precision microprocessor control panels for sliding, swing, and telescopic driveway gates, featuring soft start/stop and auto-diagnostic displays.',
    iconName: 'Cpu',
    heroImage: 'https://images.unsplash.com/photo-1613082390827-02e867518456?auto=format&fit=crop&w=1200&q=80',
    interactiveDemoId: 'gate',
    features: ['Soft start and slow deceleration', 'Adjustable pedestrian opening width', 'Dual motor synchronization'],
    capabilities: [{ title: 'Diagnostic Display', description: 'Built-in LCD readout simplifies maintenance and troubleshooting.' }],
    specifications: [{ label: 'Operating Temp', value: '-20°C to +65°C' }],
    applications: { residential: ['Villa gates'], commercial: ['Factory gates'] },
    compatibleIntegrations: ['VDP Intercoms', 'Photocell Safety Sensors'],
    faqs: [{ question: 'Can the gate open halfway for pedestrians?', answer: 'Yes, a designated button opens the gate just 1 meter for pedestrian passage.' }]
  },
  {
    id: 'smart-access-control',
    slug: 'smart-access-control',
    title: 'Smart RFID & Keyless Access Control',
    shortTitle: 'Access Control',
    category: 'access',
    categoryLabel: 'Access & Storage',
    headline: 'Centralized Credential & Personnel Access Management',
    description: 'Manage who enters your property, when, and where. High-frequency RFID cards, PIN keypads, and touchless mobile credentials for staff and residents.',
    iconName: 'Key',
    heroImage: 'https://images.unsplash.com/photo-1558002038-1091a1661116?auto=format&fit=crop&w=1200&q=80',
    interactiveDemoId: 'lock',
    features: ['Time-restricted domestic staff permissions', 'Audit trail access logging', 'Electro-magnetic fail-secure locks'],
    capabilities: [{ title: 'Schedule Restrictions', description: 'Allow garden and cleaning staff access only during specific morning hours.' }],
    specifications: [{ label: 'Card Standard', value: '13.56 MHz Mifare / NFC' }],
    applications: { residential: ['Villa service doors'], commercial: ['Offices & gyms'] },
    compatibleIntegrations: ['CCTV Video Verification', 'Time Attendance'],
    faqs: [{ question: 'Can staff access be revoked remotely?', answer: 'Yes, revoke or modify any card or PIN code instantly from your administrator app.' }]
  },
  {
    id: 'garden-landscape-automation',
    slug: 'garden-landscape-automation',
    title: 'Garden & Landscape Architectural Automation',
    shortTitle: 'Landscape Automation',
    category: 'landscape',
    categoryLabel: 'Landscape Automation',
    headline: 'Synchronized Outdoor Illumination, Water Fountains & Mist',
    description: 'Bring outdoor spaces alive at dusk. Synchronize landscape pathway bollards, tree uplights, water fountains, and cooling mist systems with sunset timers.',
    iconName: 'Sun',
    heroImage: 'https://images.unsplash.com/photo-1558435186-d31d1430097a?auto=format&fit=crop&w=1200&q=80',
    interactiveDemoId: 'irrigation',
    features: ['Low-voltage 12V/24V IP68 waterproof lighting', 'Water feature pump automation', 'Cooling misting nozzles'],
    capabilities: [{ title: 'Dusk-to-Dawn Automation', description: 'Illuminates architectural trees and pathways automatically as dusk falls.' }],
    specifications: [{ label: 'Protection Rating', value: 'IP68 Submersible' }],
    applications: { residential: ['Villa gardens & pools'], commercial: ['Resorts & clubs'] },
    compatibleIntegrations: ['Smart Irrigation', 'Perimeter CCTV'],
    faqs: [{ question: 'Are outdoor lights safe around children and pets?', answer: 'Yes, we use low-voltage 12V/24V DC transformers, completely eliminating any shock hazard.' }]
  },
  {
    id: 'networking-infrastructure',
    slug: 'networking-infrastructure',
    title: 'Structured Gigabit Networking Infrastructure',
    shortTitle: 'Networking Infrastructure',
    category: 'networking',
    categoryLabel: 'Connectivity',
    headline: 'The Rock-Solid Backbone for Every Smart Home System',
    description: 'Professional CAT6A cabling, wall-mounted server racks, managed PoE switches, and uninterrupted UPS power management for flawless smart-living reliability.',
    iconName: 'Server',
    heroImage: 'https://images.unsplash.com/photo-1544197150-b99a580bbcbf?auto=format&fit=crop&w=1200&q=80',
    interactiveDemoId: 'network',
    features: ['Structured 10G copper & fiber cabling', 'VLAN traffic segmentation for CCTV & IoT', 'Rack-mounted managed PoE switches'],
    capabilities: [{ title: 'Clean Rack Dressing', description: 'Organized, color-coded patch panels and labeled runs in a ventilated server enclosure.' }],
    specifications: [{ label: 'Cable Standards', value: 'CAT6A 500MHz Low Smoke Zero Halogen' }],
    applications: { residential: ['Luxury multi-floor villas'], commercial: ['Office IT infrastructure'] },
    compatibleIntegrations: ['Wi-Fi 6 APs', 'CCTV NVRs', 'Automation Hubs'],
    faqs: [{ question: 'Why is structured cabling important during home construction?', answer: 'Cabling installed before plastering ensures high-bandwidth connectivity for decades without messy exterior cables.' }]
  },
  {
    id: 'multi-room-audio',
    slug: 'multi-room-audio',
    title: 'Multi-Room Audio Distribution',
    shortTitle: 'Multi-Room Audio',
    category: 'audio',
    categoryLabel: 'Acoustics & Audio',
    headline: 'Seamless Audio Streaming Across Independent Living Zones',
    description: 'Listen to your favorite podcast in the master suite while the children enjoy music on the terrace. Controlled effortlessly from in-wall touch panels or phones.',
    iconName: 'Speaker',
    heroImage: 'https://images.unsplash.com/photo-1574950578143-858c6fc58922?auto=format&fit=crop&w=1200&q=80',
    interactiveDemoId: 'audio',
    features: ['Multi-source multi-zone audio matrices', 'Lossless 24-bit/192kHz audio streaming', 'Party sync mode'],
    capabilities: [{ title: 'Individual Volume Trim', description: 'Balance audio levels per zone so conversation remains comfortable everywhere.' }],
    specifications: [{ label: 'Audio Quality', value: 'Hi-Res Lossless 24-bit FLAC / ALAC' }],
    applications: { residential: ['Whole villa audio'], commercial: ['Multi-floor venues'] },
    compatibleIntegrations: ['Smart Scenes', 'Voice Control'],
    faqs: [{ question: 'Can each family member play their own music simultaneously?', answer: 'Yes! Every room can stream independent playlists or sync together in party mode.' }]
  },
  {
    id: 'home-theatre-entertainment',
    slug: 'home-theatre-entertainment',
    title: 'Custom Private Home Theatres & Media Rooms',
    shortTitle: 'Home Theatre',
    category: 'audio',
    categoryLabel: 'Acoustics & Audio',
    headline: 'Dolby Atmos 3D Audio, 4K Laser Projection & Acoustic Paneling',
    description: 'Bring the true magic of the cinema into your home. Tailored acoustic design, 4K HDR laser projectors, motorized acoustically transparent screens, and reclining cinema seating.',
    iconName: 'Film',
    heroImage: 'https://images.unsplash.com/photo-1574950578143-858c6fc58922?auto=format&fit=crop&w=1200&q=80',
    interactiveDemoId: 'audio',
    features: ['Dolby Atmos 7.2.4 & 9.4.6 audio configurations', '4K HDR Laser projection with anamorphic lens', 'Custom acoustic fabric wall calibration'],
    capabilities: [{ title: 'Single-Touch Cinema Preset', description: 'Drapes close, room lights dim down, projector fires up, and audio calibrates automatically.' }],
    specifications: [{ label: 'Audio Standards', value: 'Dolby Atmos, DTS:X Pro, IMAX Enhanced' }],
    applications: { residential: ['Dedicated villa cinema rooms'], commercial: ['VIP screening rooms'] },
    compatibleIntegrations: ['Motorized Curtains', 'Lighting Control'],
    faqs: [{ question: 'Do you provide acoustic soundproofing so movie sounds do not leak into bedrooms?', answer: 'Yes, we provide end-to-end sound isolation, bass traps, and acoustic wall panels.' }]
  },
  {
    id: 'residential-automation',
    slug: 'residential-automation',
    title: 'Custom Residential Automation Architecture',
    shortTitle: 'Residential Automation',
    category: 'automation',
    categoryLabel: 'Intelligent Living',
    headline: 'Turnkey Technology Engineering for Modern Luxury Residences',
    description: 'Holistic automation design for architects, interior designers, and homeowners. We harmonize gates, security, lighting, HVAC, and entertainment into a cohesive luxury lifestyle.',
    iconName: 'Building',
    heroImage: 'https://images.unsplash.com/photo-1613082390827-02e867518456?auto=format&fit=crop&w=1200&q=80',
    interactiveDemoId: 'lighting',
    features: ['End-to-end electrical schematics & site coordination', 'Premium switchgear integration', 'Personalized handover training'],
    capabilities: [{ title: 'Turnkey Delivery', description: 'From initial conduit layout to final software commissioning and annual maintenance.' }],
    specifications: [{ label: 'Warranty Support', value: '2-Year On-Site Installation Warranty' }],
    applications: { residential: ['Private contemporary villas', 'Luxury apartments'], commercial: ['Residential clubhouses', 'Gated communities'] },
    compatibleIntegrations: ['All MAXDAX solutions'],
    faqs: [{ question: 'At what stage of home construction should we contact MAXDAX?', answer: 'The ideal stage is during initial architectural planning or brickwork before electrical conduit piping begins.' }]
  },
  {
    id: 'commercial-automation',
    slug: 'commercial-automation',
    title: 'Commercial & Institutional Smart Solutions',
    shortTitle: 'Commercial Automation',
    category: 'commercial',
    categoryLabel: 'Commercial',
    headline: 'Intelligent Building Energy, Access & Automated Security',
    description: 'Enterprise smart automation for corporate headquarters, retail flagship stores, hotels, and healthcare clinics. Optimize energy consumption and streamline facility access control.',
    iconName: 'Briefcase',
    heroImage: 'https://images.unsplash.com/photo-1544197150-b99a580bbcbf?auto=format&fit=crop&w=1200&q=80',
    interactiveDemoId: 'network',
    features: ['Centralized building management (BMS)', 'Automated daylight harvesting', 'High-capacity visitor and barrier management'],
    capabilities: [{ title: 'Energy Dashboards', description: 'Monitor power consumption by floor and subsystem to meet green building targets.' }],
    specifications: [{ label: 'Protocols', value: 'BACnet, Modbus, KNX, DALI' }],
    applications: { residential: ['Home offices & studios'], commercial: ['Corporate offices', 'Retail malls', 'Hospitals', 'Hotels'] },
    compatibleIntegrations: ['Enterprise CCTV', 'Access Gates'],
    faqs: [{ question: 'Can existing commercial buildings be retrofitted?', answer: 'Yes, we specialize in wireless and hybrid retrofits that minimize downtime and disruption.' }]
  },
  {
    id: 'integrated-smart-living',
    slug: 'integrated-smart-living',
    title: 'Integrated Smart-Living Ecosystems',
    shortTitle: 'Integrated Living',
    category: 'automation',
    categoryLabel: 'Intelligent Living',
    headline: 'Where Hardware, Software & Architecture Become One',
    description: 'Experience true connected living where every subsystem communicates seamlessly with zero friction. One unified ecosystem tailored precisely around the way you live.',
    iconName: 'Layers',
    heroImage: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1200&q=80',
    interactiveDemoId: 'lighting',
    features: ['Total interoperability across 10+ technology domains', 'Zero-cloud local failover reliability', 'Long-term firmware & upgrade support'],
    capabilities: [{ title: 'Ecosystem Harmony', description: 'When your gate opens, lights welcome you, the AC cools to perfection, and your home awaits.' }],
    specifications: [{ label: 'Protocols Supported', value: 'KNX, Matter, Zigbee, DALI, Wi-Fi 6, Z-Wave' }],
    applications: { residential: ['Luxury smart residences'], commercial: ['Executive retreats'] },
    compatibleIntegrations: ['All certified devices'],
    faqs: [{ question: 'Can new devices be added to the system years later?', answer: 'Yes, our modular architecture allows you to easily add new rooms, devices, or features anytime.' }]
  }
];
