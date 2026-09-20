export interface ServiceSEOData {
  slug: string;
  number: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  h1: string;
  tagline: string;
  description: string;
  longDescription: string;
  heroImage: string;
  features: string[];
  specifications: { label: string; value: string }[];
  supportedBrands: string[];
  applications: string[];
  faqs: { question: string; answer: string }[];
  relatedServices: { title: string; slug: string; description: string }[];
}

export const SITE_CONFIG = {
  name: "TechSmart Systems",
  legalName: "Tech Smart Systems",
  url: "https://techsmartsystems.co.in",
  tagline: "Think Smart. Stay Secure.",
  foundingYear: 1999,
  address: {
    street: "Punnathanam, Asramam P.O.",
    city: "Kollam",
    state: "Kerala",
    postalCode: "691002",
    country: "IN",
    countryName: "India",
  },
  geo: {
    latitude: 8.8932,
    longitude: 76.5866,
  },
  contact: {
    landline: "0474 276 6666",
    landlineTel: "+914742766666",
    mobile: "+91 9048 171 666",
    mobileTel: "+919048171666",
    whatsapp: "919048171666",
    email: "techsmartsystemskollam@gmail.com",
  },
  hours: {
    openingDays: "Monday to Saturday",
    openingHours: "09:00 - 19:00",
    emergencySupport: "Sunday by Appointment",
  },
  serviceAreas: [
    "Kollam",
    "Asramam",
    "Kadavoor",
    "Chinnakada",
    "Tangasseri",
    "Eravipuram",
    "Karunagappally",
    "Kottarakkara",
    "Kundara",
    "Paravur",
    "Chathannoor",
    "Adoor",
    "Punalur",
    "Anchal",
    "Sasthamkotta",
    "Kottiyam",
    "Oachira",
    "Kayamkulam",
    "Attingal",
    "Varkala",
    "Thiruvananthapuram",
    "Pathanamthitta",
    "Alappuzha",
    "Kottayam",
    "Ernakulam",
    "Thrissur",
    "Palakkad",
    "Malappuram",
    "Kozhikode",
    "Wayanad",
    "Kannur",
    "Kasaragod",
    "Idukki",
    "Kerala",
  ],
  brands: [
    "Hikvision",
    "CP PLUS",
    "Matrix Security Solutions",
    "UNV (Uniview)",
    "Prama",
    "HiFocus",
    "eSSL",
  ],
};

export const SERVICES_DATA: Record<string, ServiceSEOData> = {
  "cctv-installation": {
    slug: "cctv-installation",
    number: "01",
    title: "CCTV Camera Installation & Surveillance Systems",
    metaTitle: "CCTV Camera Installation in Kollam, Kerala | TechSmart Systems",
    metaDescription:
      "Expert CCTV camera installation in Kollam and across Kerala. HD, 4K IP, AI smart surveillance cameras, color night vision, and remote mobile viewing since 1999.",
    keywords: [
      "CCTV camera installation near me",
      "CCTV camera installation Kollam",
      "CCTV installation Kerala",
      "CCTV camera price in Kerala with installation",
      "best CCTV dealers in Kollam",
      "Hikvision CCTV camera installation Kollam",
      "CP PLUS CCTV camera installation Kerala",
      "IP camera installation Kollam",
      "wireless CCTV camera for home Kerala",
      "4K CCTV surveillance system Kerala",
      "home security camera installation near me",
      "CCTV repair service near me Kollam",
      "CCTV AMC service in Kerala",
      "CCTV camera technician in Kollam",
      "night vision CCTV camera Kerala",
      "commercial CCTV security solutions",
      "remote phone CCTV camera live view",
      "bullet camera dome camera PTZ camera Kollam",
      "CCTV installation Karunagappally",
      "CCTV installation Kottarakkara",
      "CCTV camera dealers Kundara",
      "CCTV installation Paravur Kollam",
      "CCTV installation Chathannoor",
      "CCTV camera price 4 channel 8 channel Kerala",
    ],
    h1: "CCTV Camera Installation & Surveillance Solutions in Kollam, Kerala",
    tagline: "Ultra HD 4K, Color Night Vision & AI-Powered Surveillance Architecture",
    description:
      "Comprehensive 24/7 high-definition and IP video surveillance systems engineered for residences, commercial businesses, and industrial facilities across Kerala.",
    longDescription:
      "With over 25 years of field-tested engineering excellence since 1999, TechSmart Systems provides complete CCTV camera installation and surveillance architecture in Kollam and throughout Kerala. We deploy enterprise-grade Hikvision, CP PLUS, Matrix, and UNV surveillance hardware featuring 4K ultra-high definition, AI human and vehicle classification, smart perimeter tripwires, 50m color night vision, and weatherproof IP67 enclosures. From single-villa security to multi-building commercial camera arrays, our engineers handle site risk analysis, concealed cabling, NVR network configuration, and zero-latency mobile live viewing setup.",
    heroImage: "/images/services/cctv-camera-installation-surveillance-kollam.jpg",
    features: [
      "Crystal-clear 1080p Full HD, 4MP, 5MP, and 4K Ultra HD IP cameras",
      "Full-color low-light and Smart Infrared (IR) night vision up to 50 meters",
      "AI-driven human and vehicle classification reducing false alarms by 95%",
      "Weatherproof, vandal-resistant IP67 outdoor dome and bullet housings",
      "Remote mobile streaming on iOS & Android with 24/7 instant motion alerts",
      "MicroSD edge storage and high-capacity network video recorder (NVR) backup",
    ],
    specifications: [
      { label: "Camera Resolutions", value: "2MP (1080p), 4MP, 5MP, 8MP (4K UHD)" },
      { label: "Lens Options", value: "2.8mm wide angle, 3.6mm, 6mm, Motorized Varifocal" },
      { label: "Night Vision Range", value: "Up to 50 meters with ColorVu & Smart IR" },
      { label: "Ingress Protection", value: "IP67 Weatherproof & IK10 Vandal-Proof" },
      { label: "Cabling Standard", value: "Cat6 Pure Copper / Shielded RG59 Coaxial" },
      { label: "Warranty Support", value: "Standard 2-Year Manufacturer Warranty + Tech Support" },
    ],
    supportedBrands: ["Hikvision", "CP PLUS", "Matrix", "UNV", "Prama", "HiFocus"],
    applications: [
      "Residential Villas & Gated Communities",
      "Retail Shops, Supermarkets & Showrooms",
      "Commercial Offices & Corporate Complexes",
      "Industrial Plants, Factories & Warehouses",
      "Schools, Colleges & Educational Campuses",
      "Hospitals, Clinics & Healthcare Facilities",
    ],
    faqs: [
      {
        question: "How much does a complete CCTV camera installation cost in Kerala?",
        answer:
          "CCTV installation costs depend on the number of cameras (4, 8, 16+ channels), camera technology (HD Analog vs IP 4K), storage drive capacity (1TB to 8TB+), and cabling length. TechSmart Systems provides free on-site property evaluations in Kollam and tailored quotes to fit residential, commercial, or industrial budgets.",
      },
      {
        question: "What is the difference between HD analog and IP CCTV cameras?",
        answer:
          "HD analog cameras transmit video over coaxial cables (RG59) to a DVR, making them cost-effective for basic home security. IP cameras transmit digital data over Cat6 Ethernet cables to an NVR, providing superior 4K clarity, advanced AI smart video analytics, easier scalability, and Power-over-Ethernet (PoE) convenience.",
      },
      {
        question: "Can I view my CCTV camera live footage on my mobile phone from anywhere?",
        answer:
          "Yes, all modern CCTV installations configured by TechSmart Systems feature encrypted mobile streaming on iOS and Android smartphones, allowing live viewing, synchronized footage playback, two-way audio, and instant push alerts anywhere in the world.",
      },
      {
        question: "How many days of CCTV recording storage will I get?",
        answer:
          "Storage duration depends on camera count, resolution, and recording mode (continuous vs motion-triggered). With H.265+ smart video compression and surveillance-grade hard drives, we typically configure 15 to 60+ days of seamless loop backup with auto-overwrite.",
      },
    ],
    relatedServices: [
      {
        title: "DVR & NVR Storage Solutions",
        slug: "dvr-nvr",
        description: "Enterprise video recording stations with redundant surveillance hard drives.",
      },
      {
        title: "Remote CCTV Monitoring",
        slug: "remote-monitoring",
        description: "Encrypted mobile app viewing and real-time security alerts.",
      },
      {
        title: "CCTV Maintenance & AMC",
        slug: "cctv-maintenance-amc",
        description: "Annual maintenance contracts, routine servicing, and rapid repairs.",
      },
    ],
  },

  "security-systems": {
    slug: "security-systems",
    number: "02",
    title: "Security Systems & Intrusion Detection Alarms",
    metaTitle: "Security Systems & Intrusion Alarms in Kollam, Kerala | TechSmart Systems",
    metaDescription:
      "Integrated electronic security systems and intrusion detection alarm solutions in Kerala. Perimeter infrared beams, motion sensors, GSM alarm alerts, and sirens.",
    keywords: [
      "security systems Kollam",
      "electronic security systems Kerala",
      "home security systems Kerala",
      "burglar alarm system Kollam",
      "perimeter security infrared beams",
      "GSM intruder alarm system Kerala",
      "motion sensor security alarm near me",
      "security systems dealer in Kollam",
      "commercial security alarm installation",
      "house security alarm price Kerala",
      "vibration sensor alarm for home",
      "security alarm system near me",
      "intrusion detection system Kerala",
      "commercial security solutions Kollam",
    ],
    h1: "Integrated Electronic Security Systems & Alarm Solutions in Kerala",
    tagline: "Multi-Layered Intrusion Detection & Instant Real-Time Alert Automation",
    description:
      "Engineered multi-layered perimeter defense combining infrared beam barriers, motion sensors, glass-break detectors, and GSM smartphone alarms.",
    longDescription:
      "TechSmart Systems engineers integrated electronic security systems customized specifically around your property perimeter and interior vulnerabilities. By combining active infrared perimeter beam barriers, dual-technology PIR motion sensors, magnetic door contacts, vibration detectors, and high-decibel outdoor sirens with central GSM/IP alarm panels, our security architectures guarantee immediate intrusion deterrence and instant smartphone alerts during any unauthorized breach.",
    heroImage: "/images/services/electronic-security-systems-alarm-solutions.jpg",
    features: [
      "Wired and wireless perimeter infrared beam barriers for compound walls",
      "Dual-technology PIR motion detectors with pet-immunity intelligence",
      "Magnetic door and window intrusion contact sensors",
      "Multi-channel GSM/Wi-Fi centralized alarm control panels",
      "High-decibel outdoor strobe sirens with vandal tamper switches",
      "Instant SMS, automated voice call, and push notification alerts",
    ],
    specifications: [
      { label: "Sensor Range", value: "Infrared Beams: up to 100m; PIR Motion: 12m x 12m" },
      { label: "Connectivity", value: "GSM Cellular + Wi-Fi / IP Dual Path" },
      { label: "Battery Backup", value: "Up to 24–48 hours built-in rechargeable standby" },
      { label: "Alarm Siren Output", value: "110dB – 120dB with flashing visual strobe" },
      { label: "Zone Capacity", value: "8 to 64 independent security zones" },
      { label: "Control Interface", value: "LCD Keypad, RFID Tag & Mobile App" },
    ],
    supportedBrands: ["Matrix", "Hikvision", "Honeywell", "Bosch", "DSC"],
    applications: [
      "Independent Luxury Villas & Estates",
      "Jewelry Showrooms & Financial Banks",
      "Commercial Warehouses & Storage Yards",
      "Remote Properties & Agricultural Farmhouses",
      "Corporate Facilities & Server Rooms",
    ],
    faqs: [
      {
        question: "How does a perimeter intrusion alarm system work?",
        answer:
          "Perimeter security uses invisible multi-beam infrared sensors along compound walls or fences. When an intruder breaks the invisible light beam, the system immediately triggers high-decibel sirens and dispatches instant phone calls and SMS alerts to the property owner.",
      },
      {
        question: "Will the alarm trigger false alarms due to birds or stray animals?",
        answer:
          "No, we deploy advanced dual-beam and pet-immune PIR sensors that require multiple simultaneous beam interruptions or significant mass before triggering, filtering out birds, falling leaves, and small pets.",
      },
      {
        question: "Does the security alarm work during electricity power cuts?",
        answer:
          "Yes, all central alarm panels installed by TechSmart Systems include built-in rechargeable battery backup providing 24 to 48 hours of continuous operation during grid power failures.",
      },
    ],
    relatedServices: [
      {
        title: "CCTV Surveillance Systems",
        slug: "cctv-installation",
        description: "Pair intrusion alarms with visual video verification for total security.",
      },
      {
        title: "Access Control Systems",
        slug: "access-control",
        description: "Biometric and RFID electronic door locking solutions.",
      },
      {
        title: "Remote Monitoring",
        slug: "remote-monitoring",
        description: "Manage alarm states and live cameras on your smartphone.",
      },
    ],
  },

  "dvr-nvr": {
    slug: "dvr-nvr",
    number: "03",
    title: "DVR & NVR Storage Solutions",
    metaTitle: "DVR & NVR CCTV Recording Storage in Kollam, Kerala | TechSmart Systems",
    metaDescription:
      "Enterprise DVR and NVR video recording systems in Kollam, Kerala. 4 to 64 channel network video recorders, H.265+ video compression, and surveillance HDDs.",
    keywords: [
      "DVR installation Kollam",
      "NVR installation Kerala",
      "NVR 8 channel 16 channel price in Kerala",
      "DVR NVR CCTV hard disk Kollam",
      "surveillance hard drive Western Digital Purple Kerala",
      "Hikvision NVR dealer Kollam",
      "CP PLUS DVR price in Kerala",
      "IP camera NVR setup and cabling",
      "CCTV storage recording setup",
      "Seagate SkyHawk CCTV hard disk Kerala",
      "network video recorder Kollam",
      "digital video recorder Kerala",
      "4 channel 8 channel 16 channel NVR",
      "H.265 compression NVR storage",
    ],
    h1: "DVR & NVR CCTV Recording & Storage Solutions in Kerala",
    tagline: "High-Capacity Continuous Recording Stations with Smart Search Playback",
    description:
      "Enterprise-grade Digital Video Recorders (DVR) and Network Video Recorders (NVR) engineered for continuous duty and rapid video retrieval.",
    longDescription:
      "Reliable video recording requires robust recording stations and purpose-built surveillance storage. TechSmart Systems installs 4, 8, 16, 32, and 64-channel DVR and NVR units powered by Western Digital Purple and Seagate SkyHawk surveillance-grade hard drives. Utilizing state-of-the-art H.265+ smart video encoding, our recording setups conserve up to 70% storage bandwidth while providing crisp multi-channel synchronized playback, AI event bookmarking, and automated cloud or NAS archiving.",
    heroImage: "/images/services/dvr-nvr-cctv-video-storage-systems.jpg",
    features: [
      "4 to 64 channel standalone NVR and hybrid DVR multi-camera stations",
      "H.265+ & H.264+ ultra-efficient video compression saving 70% drive space",
      "Surveillance-grade 24/7 continuous duty hard disks (1TB up to 64TB arrays)",
      "Multi-channel simultaneous playback with smart timeline search and clip export",
      "PoE (Power over Ethernet) plug-and-play ports for clean IP camera cabling",
      "Redundant RAID configurations and automated scheduled NAS/cloud backups",
    ],
    specifications: [
      { label: "Channel Capacities", value: "4, 8, 16, 32, 64 Channel Inputs" },
      { label: "Supported Incoming Bandwidth", value: "Up to 320 Mbps on Enterprise NVRs" },
      { label: "Storage Interface", value: "1 to 8 SATA Bays supporting up to 10TB per bay" },
      { label: "Video Outputs", value: "4K HDMI, VGA, Spot Monitor Output" },
      { label: "Power Supply", value: "Integrated PoE / PoE+ 802.3af/at standard" },
      { label: "Network Protocol", value: "ONVIF, RTSP, IPv4/IPv6, HTTPS, P2P Cloud" },
    ],
    supportedBrands: ["Hikvision", "CP PLUS", "Matrix", "UNV", "Seagate", "Western Digital"],
    applications: [
      "Commercial Multi-Branch Offices",
      "Hotels, Resorts & Hospitality Centers",
      "Gated Residential Communities",
      "Shopping Malls & Large Retail Stores",
      "Logistics Warehouses & Transport Terminals",
    ],
    faqs: [
      {
        question: "What is the difference between a DVR and an NVR?",
        answer:
          "A DVR (Digital Video Recorder) processes analog video signals directly through coaxial cables and encodes them into digital files. An NVR (Network Video Recorder) receives pre-encoded digital video streams over Ethernet IP network cables, offering higher resolution support (up to 4K/12MP), PoE simplicity, and advanced AI features.",
      },
      {
        question: "Why should I use surveillance hard drives instead of desktop computer hard drives?",
        answer:
          "Desktop hard drives are designed for intermittent 8-hour daily use. Surveillance drives (such as WD Purple or Seagate SkyHawk) are engineered for 24/7 continuous multi-channel video writing, high-temperature tolerance, and vibration resistance, preventing frame loss and drive failure.",
      },
      {
        question: "Can I export video footage to a USB pen drive when an incident occurs?",
        answer:
          "Yes, all our DVRs and NVRs include front-panel USB ports and mobile app clip download tools, allowing you to export MP4/AVI video clips with watermarked date and time stamps in seconds.",
      },
    ],
    relatedServices: [
      {
        title: "CCTV Surveillance Systems",
        slug: "cctv-installation",
        description: "HD & 4K IP camera arrays engineered for seamless recording.",
      },
      {
        title: "Remote Monitoring",
        slug: "remote-monitoring",
        description: "Access your NVR recordings on mobile devices anywhere.",
      },
      {
        title: "CCTV Maintenance & AMC",
        slug: "cctv-maintenance-amc",
        description: "Hard drive health monitoring, firmware patching, and maintenance.",
      },
    ],
  },

  "home-automation": {
    slug: "home-automation",
    number: "04",
    title: "Smart Home & Building Automation Systems",
    metaTitle: "Smart Home Automation in Kollam, Kerala | TechSmart Systems",
    metaDescription:
      "Transform your Kerala home with smart automation solutions from TechSmart Systems. Automated lighting, motorized gate integration, climate control, and app controls.",
    keywords: [
      "smart home automation in Kerala price",
      "home automation companies in Kollam",
      "home automation Kollam",
      "smart home automation Kerala",
      "smart touch switches Kerala",
      "Alexa smart home setup Kollam",
      "home automation lighting and gate control",
      "smart home retrofit switchboard",
      "Tuya smart home automation Kerala",
      "smart home automation dealers near me",
      "building automation Kerala",
      "smart lighting control Kollam",
      "voice controlled smart home Kerala",
    ],
    h1: "Smart Home & Building Automation Solutions in Kerala",
    tagline: "Effortless Control of Lighting, Gates, Climate & Security via Touch and Voice",
    description:
      "Modern smart automation controls enabling seamless management of lighting scenes, motorized gates, air conditioning, and appliances from sleek touch panels or mobile apps.",
    longDescription:
      "TechSmart Systems brings the comfort and convenience of next-generation smart home automation to villas, luxury residences, and commercial establishments across Kerala. We configure smart modular touch switches, automated scene lighting, motorized security curtains, smart gate synchronization, and remote appliance switching. Controlled via intuitive mobile applications, elegant glass touch panels, or voice assistants (Google Assistant and Amazon Alexa), our automation designs optimize energy efficiency and elevate daily living.",
    heroImage: "/images/services/smart-home-automation-lighting-iot-kerala.jpg",
    features: [
      "Smart lighting automation with dimming, scene creation, and scheduled timers",
      "Motorized gate, garage door, and motorized curtain integration",
      "Voice assistant compatibility with Amazon Alexa and Google Home",
      "Energy monitoring, automated AC temperature control, and appliance switching",
      "Sleek capacitive touch switchboards matching luxury interior aesthetics",
      "Unified mobile app dashboard for home security and automation controls",
    ],
    specifications: [
      { label: "Wireless Protocol", value: "Wi-Fi, Zigbee 3.0, Z-Wave, BLE Mesh" },
      { label: "Control Interfaces", value: "Smart Glass Touch Panels, iOS/Android App, Voice" },
      { label: "Compatibility", value: "Amazon Alexa, Google Assistant, Apple HomeKit compatible" },
      { label: "Operating Voltage", value: "110V – 240V AC, 50/60 Hz" },
      { label: "Retrofit Capability", value: "Fits standard Indian modular electrical wall boxes" },
      { label: "Security Encryption", value: "AES-128 / AES-256 end-to-end encrypted signals" },
    ],
    supportedBrands: ["Tuya Smart", "Matrix", "Schneider", "Legrand", "Sonoff"],
    applications: [
      "Contemporary Luxury Residences & Villas",
      "Smart Commercial Offices & Conference Rooms",
      "Boutique Hotels, Homestays & Resorts",
      "Auditoriums & Multi-Media Rooms",
    ],
    faqs: [
      {
        question: "Can home automation be installed in an existing home without rewiring?",
        answer:
          "Yes! We offer smart retrofit automation modules that fit inside your existing modular electrical wall boxes behind standard switches. No structural demolition, wall chasing, or complex rewiring is required.",
      },
      {
        question: "What happens to the automation if the internet goes down?",
        answer:
          "All physical wall touch switches continue to work normally as traditional switches even without internet. Local Zigbee network hubs ensure local automated schedules and sensor triggers continue operating uninterrupted.",
      },
      {
        question: "Can I automate my entrance gate with my home automation app?",
        answer:
          "Yes, we can seamlessly connect your automatic sliding or swing gate motor with your smart home app, allowing you to open or close the gate for visitors directly from your phone.",
      },
    ],
    relatedServices: [
      {
        title: "Gate Automation Systems",
        slug: "gate-automation",
        description: "Motorized automatic sliding and swing gates for residential properties.",
      },
      {
        title: "Video Door Phone",
        slug: "video-door-phone",
        description: "Two-way video doorbells integrated with smart door lock release.",
      },
      {
        title: "Access Control Systems",
        slug: "access-control",
        description: "Digital smart door locks with fingerprint, keypad, and app access.",
      },
    ],
  },

  "access-control": {
    slug: "access-control",
    number: "05",
    title: "Door Access Control Systems & Smart Locks",
    metaTitle: "Access Control Systems & Smart Door Locks in Kollam, Kerala | TechSmart Systems",
    metaDescription:
      "Secure door access control systems and digital smart door locks in Kollam, Kerala. Biometric fingerprint, RFID cards, PIN, magnetic locks, and visitor intercoms.",
    keywords: [
      "smart door lock with fingerprint Kerala",
      "biometric door lock price in Kerala",
      "digital smart door lock installation Kollam",
      "access control system Kollam",
      "RFID card door access control system",
      "electromagnetic EM lock installation Kerala",
      "commercial office door access control Kollam",
      "keypad door lock for home and office",
      "smart deadbolt lock Kerala",
      "smart door lock Kerala",
      "biometric door lock Kollam",
      "RFID access control Kerala",
      "magnetic door lock installation",
    ],
    h1: "Door Access Control Systems & Smart Locks in Kollam, Kerala",
    tagline: "Strict Perimeter Security & Authorized Entry Management for Homes & Offices",
    description:
      "Enterprise access management systems for offices, commercial warehouses, institutions, and premium residences featuring biometric readers, smart locks, and RFID gateways.",
    longDescription:
      "TechSmart Systems provides state-of-the-art electronic door access control solutions to prevent unauthorized physical entry and maintain auditable entry logs. We install electromagnetic door locks (EM locks), motorized digital deadbolts, biometric fingerprint readers, RFID proximity card scanners, and Bluetooth/Wi-Fi smart locks. Our systems cater to corporate headquarters, server rooms, research laboratories, bank vaults, clinics, and modern residential front doors.",
    heroImage: "/images/services/door-access-control-biometric-smart-locks.jpg",
    features: [
      "Multi-modal verification: Biometric fingerprint, RFID keycard, PIN code, and mobile NFC",
      "Smart digital door locks with mechanical key override and anti-tamper alarms",
      "Electromagnetic EM locks with 600 lbs to 1200 lbs holding force for glass and wooden doors",
      "Time-restricted employee and visitor access scheduling with detailed audit trail logs",
      "Emergency fire alarm integration with automatic fail-safe door release",
      "Standalone and centralized multi-door network controllers",
    ],
    specifications: [
      { label: "Authentication Methods", value: "Fingerprint, RFID Card, PIN, Face, Smartphone App" },
      { label: "Door Compatibility", value: "Frameless Glass, Wooden, Metal, Aluminum, Fire Doors" },
      { label: "Lock Types", value: "Electromagnetic Locks (600/1200 lbs), Dropbolts, Rim Locks" },
      { label: "Verification Speed", value: "<0.5 seconds high-accuracy matching" },
      { label: "Log Capacity", value: "Up to 100,000 offline transaction records" },
      { label: "Communication", value: "TCP/IP, RS485, Wi-Fi, Wiegand 26/34" },
    ],
    supportedBrands: ["eSSL", "Matrix", "Hikvision", "CP PLUS", "Yale", "Dormakaba"],
    applications: [
      "Corporate Offices, Server Rooms & IT Centers",
      "Financial Institutions & Bank Branches",
      "Hospitals, Laboratories & Restricted Zones",
      "Residential Apartments & Premium Villas",
      "Gyms, Fitness Centers & Membership Clubs",
    ],
    faqs: [
      {
        question: "Can an access control system be installed on a frameless glass door?",
        answer:
          "Yes, we use specialized U-brackets and frameless glass clamp mounts with magnetic locks and exit buttons designed specifically for commercial glass doors without drilling or damaging the glass.",
      },
      {
        question: "What happens during a power failure with electronic door locks?",
        answer:
          "We configure systems with dedicated battery backup units (SMPS with 12V 7Ah battery) to keep doors secured during outages. For emergency safety, systems can be configured as 'Fail-Safe' (unlocked upon power loss/fire trigger) or 'Fail-Secure' based on fire safety norms.",
      },
      {
        question: "Can I manage employee entry permissions from my computer?",
        answer:
          "Yes, our network access control controllers connect over your local LAN or cloud software, enabling HR and security administrators to add/remove users, set shift schedules, and generate entry reports with a few clicks.",
      },
    ],
    relatedServices: [
      {
        title: "Biometric Attendance Systems",
        slug: "biometric-attendance",
        description: "Combine access control with automated workforce time attendance.",
      },
      {
        title: "Video Door Phone",
        slug: "video-door-phone",
        description: "Screen visitors with two-way video before granting door access.",
      },
      {
        title: "Home Automation",
        slug: "home-automation",
        description: "Integrate smart digital locks with full smart home control.",
      },
    ],
  },

  "biometric-attendance": {
    slug: "biometric-attendance",
    number: "06",
    title: "Biometric Time Attendance & Face Recognition Systems",
    metaTitle: "Biometric Attendance & Face Recognition in Kollam, Kerala | TechSmart Systems",
    metaDescription:
      "High-accuracy biometric attendance systems and AI facial recognition terminals in Kollam, Kerala. eSSL biometric supplier, fingerprint readers, and payroll integration.",
    keywords: [
      "biometric attendance machine price in Kerala",
      "eSSL biometric machine dealers in Kollam",
      "facial recognition attendance machine Kerala",
      "fingerprint attendance machine for office near me",
      "staff attendance biometric machine with payroll software",
      "touchless face attendance terminal Kollam",
      "Matrix biometric attendance system Kerala",
      "biometric attendance system Kollam",
      "fingerprint attendance Kerala",
      "face recognition attendance machine",
      "time attendance software Kerala",
      "office biometric machine installation",
    ],
    h1: "Biometric Attendance & Facial Recognition Systems in Kerala",
    tagline: "High-Accuracy Workforce Time Management & Instant Payroll Software Sync",
    description:
      "Precision biometric time-attendance and identity verification terminals built for transparent workforce logging, shift tracking, and payroll export integration.",
    longDescription:
      "TechSmart Systems supplies and configures industry-leading biometric time-attendance systems and AI face recognition terminals across Kollam and Kerala. Partnering with market leader eSSL and Matrix Security, we deliver solutions that eliminate buddy punching, automate complex shift calculations, and seamlessly export clean attendance records to major payroll and HR software. From small retail shops to large factories with hundreds of staff, our biometric devices offer lightning-fast recognition and long-term durability.",
    heroImage: "/images/services/biometric-attendance-time-tracking-systems.jpg",
    features: [
      "Touchless AI facial recognition matching in under 0.2 seconds, even with masks",
      "Optical fingerprint sensors with dry, wet, and rough finger recognition algorithms",
      "RFID card and PIN backup authentication for multi-modal flexibility",
      "Automated cloud and local LAN attendance reporting with CSV/Excel payroll export",
      "Built-in battery backup ensuring uninterrupted clock-ins during power cuts",
      "Multi-location synchronization for businesses with multiple branches across Kerala",
    ],
    specifications: [
      { label: "User Capacity", value: "500 to 10,000+ Fingerprint / Face Profiles" },
      { label: "Transaction Capacity", value: "100,000 to 500,000 log records" },
      { label: "Recognition Speed", value: "≤ 0.2 seconds (Face); ≤ 0.5 seconds (Fingerprint)" },
      { label: "Display Screen", value: "2.8-inch to 4.3-inch Color TFT Touchscreen" },
      { label: "Connectivity", value: "TCP/IP Ethernet, Wi-Fi, USB Host, 4G SIM Optional" },
      { label: "Software Compatibility", value: "eTimeTrackLite, Matrix COSEC, Payroll ERPs" },
    ],
    supportedBrands: ["eSSL", "Matrix", "Hikvision", "ZKTeco", "Realtime"],
    applications: [
      "Corporate Offices & IT Tech Parks",
      "Retail Stores, Supermarkets & Showrooms",
      "Hospitals, Nursing Homes & Medical Laboratories",
      "Factories, Cashew Processing & Manufacturing Units",
      "Colleges, Schools & Training Institutions",
    ],
    faqs: [
      {
        question: "Which biometric machine is better: Fingerprint or Face Recognition?",
        answer:
          "Fingerprint machines are cost-effective and reliable for clean indoor environments. Face recognition terminals offer touchless, hygienic clock-in in less than 0.2 seconds and are ideal for high-throughput offices, hospitals, and industrial environments where workers may have wet, dusty, or worn fingerprints.",
      },
      {
        question: "Can the attendance software calculate overtime, late marks, and leaves?",
        answer:
          "Yes, the companion desktop and cloud attendance software lets you configure multiple shifts, grace periods, lunch breaks, weekly offs, overtime calculations, and leave balances automatically.",
      },
      {
        question: "Do you provide on-site installation and software training in Kollam?",
        answer:
          "Yes! TechSmart Systems handles device wall mounting, network cabling, attendance software installation, device configuration, and comprehensive training for your HR and administrative staff.",
      },
    ],
    relatedServices: [
      {
        title: "Access Control Systems",
        slug: "access-control",
        description: "Combine staff attendance tracking with secure door locking.",
      },
      {
        title: "Security Systems",
        slug: "security-systems",
        description: "Commercial intruder alarms and facility security integration.",
      },
      {
        title: "CCTV Surveillance",
        slug: "cctv-installation",
        description: "Surveillance camera coverage for staff attendance points.",
      },
    ],
  },

  "remote-monitoring": {
    slug: "remote-monitoring",
    number: "07",
    title: "Remote CCTV Monitoring & Mobile Surveillance",
    metaTitle: "Remote CCTV Monitoring & Mobile Surveillance in Kerala | TechSmart Systems",
    metaDescription:
      "24/7 remote CCTV monitoring and mobile viewing systems in Kollam, Kerala. Encrypted live streaming on iOS and Android smartphones, two-way audio, and instant alerts.",
    keywords: [
      "remote CCTV monitoring on phone",
      "how to connect CCTV to mobile phone Kerala",
      "Hik-Connect mobile app CCTV setup",
      "CP PLUS gCMOB mobile viewing",
      "NRI home remote surveillance Kerala",
      "live CCTV viewing on iPhone and Android",
      "cloud CCTV surveillance without static IP",
      "remote CCTV monitoring Kollam",
      "mobile CCTV surveillance Kerala",
      "online CCTV viewing app",
      "smartphone CCTV setup Kerala",
      "remote security camera monitoring",
    ],
    h1: "Remote CCTV Monitoring & Mobile Surveillance in Kerala",
    tagline: "Live HD Video Feeds & Instant Threat Alerts Directly on Your Smartphone",
    description:
      "Seamless live camera feed streaming and instant security alerts directly on iOS and Android smartphones from anywhere across the globe.",
    longDescription:
      "Never lose sight of what matters most. TechSmart Systems configures ultra-reliable, encrypted remote CCTV monitoring across iOS, Android, macOS, and Windows PC platforms. Whether you are traveling abroad or managing multiple business branches across Kerala, our remote surveillance setup provides low-latency HD live streaming, motion-triggered instant push notifications, remote PTZ camera steering, two-way audio talkback, and fast remote footage playback without requiring static IP addresses.",
    heroImage: "/images/services/remote-cctv-live-monitoring-mobile-app.jpg",
    features: [
      "Encrypted low-latency live HD video streaming on iOS, Android, Windows, and Mac",
      "Real-time instant push notifications on human motion, line-crossing, or intrusion",
      "Two-way audio communication through camera built-in microphones and speakers",
      "Multi-user permission levels for family members or department managers",
      "Remote footage search, video clipping, and instant WhatsApp/email sharing",
      "Cloud P2P technology enabling effortless setup without expensive static IPs",
    ],
    specifications: [
      { label: "Supported Platforms", value: "iOS (iPhone/iPad), Android (Phones/Tablets), Windows, macOS" },
      { label: "Security Encryption", value: "TLS 1.3 / AES-128 / HTTPS End-to-End Encryption" },
      { label: "Streaming Resolutions", value: "Main Stream (4K/HD) + Sub Stream (Smooth Mobile Bandwidth)" },
      { label: "Audio Features", value: "Two-Way Audio Talkback with Noise Suppression" },
      { label: "Multi-Screen Layout", value: "1, 4, 9, 16, 32 simultaneous camera views" },
      { label: "P2P Cloud Protocol", value: "Hik-Connect, CP PLUS gCMOB, Matrix SATATYA, UNV EZView" },
    ],
    supportedBrands: ["Hikvision", "CP PLUS", "Matrix", "UNV", "Prama"],
    applications: [
      "NRI Homeowners Monitoring Properties in Kerala from Abroad",
      "Business Owners Overseeing Multiple Retail Branches",
      "Parents Monitoring Children, Elderly Family Members & Home Care",
      "Warehouses, Factories & Construction Sites",
    ],
    faqs: [
      {
        question: "Do I need a high-speed internet connection at my property for remote CCTV viewing?",
        answer:
          "A standard broadband Wi-Fi connection (BSNL, Airtel, JioFiber, Asianet, or a 4G Wi-Fi router) with at least 5 to 10 Mbps upload speed is sufficient for smooth multi-camera streaming.",
      },
      {
        question: "Is remote CCTV viewing secure against hackers?",
        answer:
          "Yes. We configure multi-factor authentication, strong custom passwords, disabled default credentials, and encrypted P2P data tunnels (TLS/AES), ensuring only authorized devices have access.",
      },
      {
        question: "Can multiple family members view the cameras on separate phones?",
        answer:
          "Yes, the primary account administrator can easily share view-only access with family members or managers with granular permission controls.",
      },
    ],
    relatedServices: [
      {
        title: "CCTV Surveillance Systems",
        slug: "cctv-installation",
        description: "HD & 4K camera installations ready for remote viewing.",
      },
      {
        title: "DVR & NVR Storage",
        slug: "dvr-nvr",
        description: "Network recording hubs for remote footage search and playback.",
      },
      {
        title: "Security Systems",
        slug: "security-systems",
        description: "Combine live video feeds with real-time intrusion alarms.",
      },
    ],
  },

  "cctv-maintenance-amc": {
    slug: "cctv-maintenance-amc",
    number: "08",
    title: "CCTV Maintenance, Repair & AMC Contracts",
    metaTitle: "CCTV Maintenance, Repair & AMC Services in Kollam, Kerala | TechSmart Systems",
    metaDescription:
      "Professional CCTV maintenance, camera repair, and Annual Maintenance Contracts (AMC) in Kollam, Kerala. Fast on-site technicians, cable testing, and camera servicing.",
    keywords: [
      "CCTV repair service near me Kollam",
      "CCTV camera service technician Kollam",
      "CCTV AMC contract price in Kerala",
      "security camera repair service Kerala",
      "CCTV camera not working repair",
      "annual maintenance contract for CCTV Kerala",
      "CCTV cable replacement and camera servicing",
      "CCTV AMC Kollam",
      "CCTV maintenance Kerala",
      "CCTV repair service Kollam",
      "CCTV technician Kollam",
      "CCTV camera servicing near me",
    ],
    h1: "CCTV Maintenance, Repair & Annual Maintenance Contracts (AMC) in Kerala",
    tagline: "Preventive Care, Rapid Repair Dispatch & Guaranteed Zero-Downtime Operation",
    description:
      "Professional structured cabling checkups, lens cleaning, power supply diagnostics, firmware updates, and comprehensive Annual Maintenance Contracts (AMC) across Kerala.",
    longDescription:
      "A security system is only as good as its reliability when you need it most. With over 25 years of service experience since 1999, TechSmart Systems provides dedicated CCTV repair, preventive maintenance, and Annual Maintenance Contracts (AMC) for residences, commercial enterprises, and institutions throughout Kerala. Our experienced field engineers perform periodic lens cleaning, camera focus recalibration, power supply unit (SMPS) testing, cable health audits, hard disk bad-sector scans, and rapid emergency on-site repair dispatch.",
    heroImage: "/images/services/cctv-maintenance-amc-repair-services-kerala.jpg",
    features: [
      "Comprehensive & Non-Comprehensive Annual Maintenance Contracts (AMC)",
      "Routine quarterly preventive maintenance inspections and camera lens cleaning",
      "Prompt on-site emergency technician dispatch across all Kerala districts",
      "Surveillance hard disk diagnostic checks and recording integrity verification",
      "Power supply SMPS, BNC/RJ45 connector, and surge protector health testing",
      "Firmware patching and cybersecurity vulnerability hardening",
    ],
    specifications: [
      { label: "AMC Contract Types", value: "Comprehensive (with parts) & Non-Comprehensive (labor & service)" },
      { label: "Visit Frequency", value: "Quarterly Preventive Checks + Unlimited Emergency Breakdown Calls" },
      { label: "Response Time", value: "Within 24 to 48 hours across Kerala districts" },
      { label: "Diagnostic Coverage", value: "Cameras, DVR/NVR, HDDs, Power Supplies, Conduit Cabling, Network" },
      { label: "Standby Hardware", value: "Standby cameras and power adapters provided during repairs" },
    ],
    supportedBrands: ["Hikvision", "CP PLUS", "Matrix", "UNV", "Prama", "HiFocus", "eSSL"],
    applications: [
      "Residential Apartments & Housing Societies",
      "Commercial Shopping Complexes & Malls",
      "Government Offices & Public Infrastructure",
      "Banks, Financial Institutions & ATMs",
      "Factories, Industrial Warehouses & Schools",
    ],
    faqs: [
      {
        question: "What is included in a CCTV Annual Maintenance Contract (AMC)?",
        answer:
          "Our CCTV AMC includes scheduled preventive visits (camera cleaning, focus adjustment, recording verification, power check), priority emergency breakdown response, cable inspection, firmware updates, and repair labor. Comprehensive AMCs also cover replacement parts.",
      },
      {
        question: "My CCTV camera shows 'No Video' or a black screen. Can you repair it?",
        answer:
          "Yes! Black screens or 'No Video' errors are typically caused by faulty power adapters, damaged cables, loose connectors, or failed camera sensors. Our technicians carry diagnostic tools and replacement parts for fast on-site resolution.",
      },
      {
        question: "Can TechSmart Systems take over maintenance of CCTV systems installed by another vendor?",
        answer:
          "Yes. We perform an initial site audit to evaluate your existing cameras, cabling, and recording hardware, rectify any existing faults, and onboard your property under our reliable AMC coverage.",
      },
    ],
    relatedServices: [
      {
        title: "CCTV Surveillance Systems",
        slug: "cctv-installation",
        description: "Upgrade aging cameras with high-resolution 4K and IP systems.",
      },
      {
        title: "DVR & NVR Storage",
        slug: "dvr-nvr",
        description: "Hard drive testing and recording station upgrades.",
      },
      {
        title: "Remote Monitoring",
        slug: "remote-monitoring",
        description: "Restore offline mobile viewing and network connectivity.",
      },
    ],
  },

  "gate-automation": {
    slug: "gate-automation",
    number: "09",
    title: "Automatic Gate Automation Systems",
    metaTitle: "Automatic Gate Automation in Kollam, Kerala | TechSmart Systems",
    metaDescription:
      "Automated sliding and swing gate systems in Kollam, Kerala. Heavy-duty gate motors, remote controls, mobile app operation, and safety sensor integration.",
    keywords: [
      "automatic sliding gate motor price in Kerala",
      "automatic gate installation Kollam",
      "motorized gate automation Kerala",
      "sliding gate motor dealers near me",
      "Nice gate motor installation Kerala",
      "remote control gate motor price",
      "automatic swing gate motor Kerala",
      "gate automation Kollam",
      "automatic gate Kerala",
      "sliding gate motor Kollam",
      "electric gate installation Kerala",
      "remote control gate Kerala",
    ],
    h1: "Automatic Sliding & Swing Gate Automation Systems in Kerala",
    tagline: "Heavy-Duty Motorized Gates with Remote Controls & Smart Mobile Automation",
    description:
      "Heavy-duty motorized automatic sliding and swing gate systems offering effortless remote and smartphone operation with safety obstacle detection.",
    longDescription:
      "Upgrade your property entrance with motorized gate automation systems installed by TechSmart Systems in Kollam and across Kerala. Designed for residential villa gates, commercial entrances, and industrial factory gates, our heavy-duty Italian and European engineered gate motors handle gates from 400kg up to 2000kg. Equipped with wireless RF remote keyfobs, infrared safety anti-crush photobeams, smartphone Wi-Fi app triggers, and manual key overrides during power cuts, our automatic gates deliver unmatched luxury and security.",
    heroImage: "/images/products/automatic-motorized-sliding-swing-gate.jpg",
    features: [
      "Heavy-duty Italian-engineered sliding gate motors (400kg to 2000kg capacity)",
      "Articulated arm and underground swing gate automation systems",
      "Long-range wireless remote control keyfobs (up to 50 meters range)",
      "Infrared safety photobeam sensors preventing gate closure on vehicles or pedestrians",
      "Smartphone Wi-Fi app integration for remote opening from anywhere in the world",
      "Keyed mechanical manual clutch release for easy manual opening during power cuts",
    ],
    specifications: [
      { label: "Gate Types Supported", value: "Sliding Gates, Dual Swing Gates, Single Swing Gates, Cantilever Gates" },
      { label: "Motor Weight Capacity", value: "400 kg, 600 kg, 800 kg, 1200 kg, 2000 kg" },
      { label: "Operating Speed", value: "10 to 14 meters/minute smooth rack travel" },
      { label: "Safety Features", value: "Infrared Photobeams, Auto-Reverse Obstacle Detection" },
      { label: "Control Methods", value: "RF Remote Keyfob, Smartphone App, Push Button, Video Intercom" },
      { label: "Power & Backup", value: "230V AC with 24V DC battery backup options available" },
    ],
    supportedBrands: ["Nice", "CAME", "BFT", "Somfy", "FAAC"],
    applications: [
      "Private Residences & Luxury Gated Villas",
      "Gated Communities & Apartment Entrances",
      "Commercial Complexes & Corporate Offices",
      "Industrial Plants, Warehouses & Logistics Hubs",
    ],
    faqs: [
      {
        question: "How do automatic gates work during Kerala power cuts?",
        answer:
          "All gate motors installed by TechSmart Systems come with a personalized mechanical key clutch release that allows you to easily push the gate open manually during power cuts. We also offer 24V DC battery backup systems and inverter integration for motorized operation during outages.",
      },
      {
        question: "Can an existing manual gate be converted to an automatic gate?",
        answer:
          "Yes! In 95% of cases, your existing sliding or swing gate can be automated without rebuilding the gate. Our engineers inspect the gate track, rollers, and hinges to ensure smooth manual movement before installing the motor gear rack.",
      },
      {
        question: "Is it safe if a car or child is standing in the gate's path?",
        answer:
          "Yes. Our installations include active infrared safety photobeams across the gate pillars. If a vehicle, person, or pet crosses the safety beam while the gate is closing, the motor instantly stops and reverses automatically to prevent any collision.",
      },
    ],
    relatedServices: [
      {
        title: "Video Door Phone",
        slug: "video-door-phone",
        description: "See visitors at your gate and unlock it directly from your indoor screen.",
      },
      {
        title: "Home Automation",
        slug: "home-automation",
        description: "Control your motorized gate through your smart home mobile app.",
      },
      {
        title: "Access Control Systems",
        slug: "access-control",
        description: "Integrate automatic gates with RFID vehicle tags and boom barriers.",
      },
    ],
  },

  "video-door-phone": {
    slug: "video-door-phone",
    number: "10",
    title: "Video Door Phone & Smart Intercom Systems",
    metaTitle: "Video Door Phone & Intercom Systems in Kollam, Kerala | TechSmart Systems",
    metaDescription:
      "High-definition video door phones and smart intercom systems in Kollam, Kerala. Color video screens, night vision doorbells, mobile app viewing, and electronic lock release.",
    keywords: [
      "video door phone for home Kerala",
      "video door phone price with installation",
      "Hikvision video door phone dealers Kollam",
      "smart video doorbell with mobile app viewing",
      "video intercom system for apartment and villa Kerala",
      "video door phone with electronic door lock release",
      "video door phone Kollam",
      "video door phone Kerala",
      "smart video doorbell Kerala",
      "intercom system Kollam",
      "villa video door phone",
      "apartment intercom Kerala",
      "touchscreen video door phone",
    ],
    h1: "Video Door Phone & Smart Intercom Systems in Kerala",
    tagline: "Two-Way Visual Screening, Mobile Alerts & One-Touch Door Unlock",
    description:
      "High-definition color video door phones and smart intercom systems enabling clear two-way communication and electronic door release for villas and apartments.",
    longDescription:
      "Enhance front-door security with high-definition video door phone (VDP) and smart intercom systems installed by TechSmart Systems across Kerala. Combining weather-resistant outdoor camera doorbells with crystal-clear 7-inch indoor color touchscreen monitors, our systems let you see, hear, and speak to visitors before opening the door. With smartphone app integration and electric lock triggers, you can greet visitors and unlock your main door or perimeter gate from your couch or while away from home.",
    heroImage: "/images/products/ip-video-door-phone-intercom-display.jpg",
    features: [
      "7-inch to 10-inch high-resolution color indoor touchscreen monitors",
      "Wide-angle HD 1080p outdoor doorbell camera with night vision illumination",
      "Two-way hands-free audio talkback with active noise suppression",
      "One-touch electronic door lock and motorized gate release button",
      "Smartphone Wi-Fi mobile forwarding: receive visitor calls on your phone anywhere",
      "Automated snapshot and video recording of all visitors on SD card memory",
    ],
    specifications: [
      { label: "Screen Sizes", value: "7-Inch / 10-Inch Color TFT / IPS Touchscreen" },
      { label: "Camera Resolution", value: "2MP (1080p Full HD) Wide-Angle 130° FOV" },
      { label: "Night Vision", value: "Smart Infrared LEDs with automatic Day/Night IR-cut filter" },
      { label: "Doorbell Ingress Rating", value: "IP65 Weatherproof Metal Alloy Housing" },
      { label: "Lock Control", value: "Dry Contact Relay for EM Lock / Electric Strike / Gate Motor" },
      { label: "System Architecture", value: "Analog 4-Wire / Digital IP PoE / Wireless Wi-Fi" },
    ],
    supportedBrands: ["Hikvision", "CP PLUS", "Panasonic", "Matrix", "eSSL"],
    applications: [
      "Independent Residential Villas & Bungalows",
      "Multi-Floor Family Homes & Duplexes",
      "Apartment Buildings & Gated Enclaves",
      "Commercial Reception Desks & Doctor Clinics",
    ],
    faqs: [
      {
        question: "Can I unlock my front door or entrance gate from the video door phone monitor?",
        answer:
          "Yes! The indoor monitor has dedicated lock release buttons. When connected to an electromagnetic door lock or motorized gate, you can press a button on the monitor or your smartphone to unlock the gate for verified visitors.",
      },
      {
        question: "What happens when a visitor rings the bell while I am away from home?",
        answer:
          "Our Wi-Fi IP video door phones forward the visitor call directly to your smartphone app in real time. You can see the visitor, talk to them via two-way audio, and even unlock the door remotely if needed.",
      },
      {
        question: "Can we connect multiple indoor monitors in a multi-floor home?",
        answer:
          "Yes. We can install master and slave monitors on different floors (e.g., ground floor living room, first floor bedroom, and kitchen) with an internal intercom feature allowing room-to-room audio calls.",
      },
    ],
    relatedServices: [
      {
        title: "Access Control Systems",
        slug: "access-control",
        description: "Electronic magnetic locks and digital smart door handles.",
      },
      {
        title: "Gate Automation",
        slug: "gate-automation",
        description: "Open your motorized gate from your video door phone screen.",
      },
      {
        title: "CCTV Surveillance",
        slug: "cctv-installation",
        description: "Comprehensive 24/7 video recording around your property entrance.",
      },
    ],
  },
};
