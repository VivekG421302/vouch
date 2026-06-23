// Vouch Landing Page Configuration
// Edit this file to customize all content, links, and redirects

export const siteConfig = {
  // Brand
  brand: {
    name: 'Vouch',
    tagline: 'Hyper-Automated Audit Delivery',
    logo: 'V',
    description: 'The first geo-fenced attendance platform built exclusively for Chartered Accountants.',
    founded: '2024',
    headquarters: 'Mumbai, Maharashtra, India',
    mission: 'To eliminate manual friction in field audit operations and empower Chartered Accountants with cutting-edge technology.',
    vision: 'To become the de facto operating system for audit firms across India, processing 1 million+ verified audits annually by 2028.',
  },

  // Contact & Social
  contact: {
    email: 'hello@vouch.tech',
    phone: '+91 98765 43210',
    address: 'Maker Maxity, Bandra Kurla Complex, Mumbai - 400051',
    mapLink: 'https://maps.google.com/?q=Mumbai',
  },

  social: {
    twitter: 'https://twitter.com/vouchtech',
    linkedin: 'https://linkedin.com/company/vouch-tech',
    github: 'https://github.com/vouch-tech',
    instagram: 'https://instagram.com/vouch.tech',
    youtube: 'https://youtube.com/@vouchtech',
  },

  // ✅ UPDATED Navigation Links — 4 new pages now have proper routes
  nav: [
    { label: 'Features', href: '/features' },
    { label: 'Career', href: '/career' },
    { label: 'Dashboards', href: '/dashboards' },
    { label: 'Finance', href: '/finance' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'About', href: '/about' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
  ],

  // Footer Links
  footer: {
    product: [
      { label: 'Features', href: '/features' },
      { label: 'Dashboards', href: '/dashboards' },
      { label: 'Finance', href: '/finance' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Security', href: '/security' },
      { label: 'Enterprise', href: '/enterprise' },
      { label: 'Audit Map', href: '/audit-map' },
    ],
    company: [
      { label: 'About', href: '/about' },
      { label: 'Our Journey', href: '/journey' },
      { label: 'Blog', href: '/blog' },
      { label: 'Careers', href: '/career' },
      { label: 'Contact', href: '/contact' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'GST Compliance', href: '/gst' },
      { label: 'Data Localization', href: '/data-localization' },
    ],
  },

  // External Redirects
  redirects: {
    signup: 'https://app.vouch.tech/signup',
    login: 'https://app.vouch.tech/login',
    demo: 'https://cal.com/vouch/demo',
    docs: 'https://docs.vouch.tech',
    support: 'https://support.vouch.tech',
    api: 'https://api.vouch.tech',
  },

  // Hero Stats
  stats: [
    { value: '50K+', label: 'Audits Verified' },
    { value: '200m', label: 'Geo-Fence Radius' },
    { value: '99.8%', label: 'GPS Accuracy' },
  ],

  // Feature Cards (unchanged)
  features: [
    {
      id: 'geo-fence',
      icon: 'Radar',
      title: 'Biometric Geo-Fence',
      description: '200-meter radius validation with real-time GPS + selfie capture. Haversine formula precision ensures auditors are physically present.',
      color: 'blue',
      details: [
        'Haversine formula for sub-meter accuracy',
        'Real-time selfie capture with liveness detection',
        'Tamper-proof timestamp and geolocation data',
        'Instant alerts for boundary violations',
      ],
    },
    {
      id: 'attendance',
      icon: 'CalendarDays',
      title: 'Multi-Dimensional Matrix',
      description: 'View attendance through any lens: CA firm, client company, or individual auditor. Color-coded calendar with real-time sync.',
      color: 'emerald',
      details: [
        'CA Firm view with consolidated reports',
        'Company view with assigned auditor tracking',
        'Auditor view with personal dashboard',
        'Export to Excel, PDF, and Tally formats',
      ],
    },
    {
      id: 'vault',
      icon: 'Shield',
      title: 'Secure Document Vault',
      description: 'Encrypted KYC storage with Aadhaar, PAN, and biometric baseline. Regulatory compliant with immutable audit trails.',
      color: 'violet',
      details: [
        'AES-256 encryption at rest and in transit',
        'Aadhaar eKYC integration with UIDAI',
        'PAN verification via NSDL API',
        'Immutable blockchain audit trail',
      ],
    },
    {
      id: 'payroll',
      icon: 'Banknote',
      title: 'Automated Payroll',
      description: 'TDS-compliant payslip generation with Section 194J deductions. Direct bank integration for seamless disbursement.',
      color: 'amber',
      details: [
        'Auto-calculation of Section 194J TDS',
        'Direct bank integration (NEFT/RTGS/IMPS)',
        'Form 16 generation and e-filing',
        'PF, ESI, and professional tax compliance',
      ],
    },
    {
      id: 'invoice',
      icon: 'FileText',
      title: 'GST Invoice Engine',
      description: 'Auto-compiled billing with HSN codes, CGST/SGST/IGST split, and e-invoice QR generation. One-click email delivery.',
      color: 'rose',
      details: [
        'Auto HSN code detection from service type',
        'CGST/SGST/IGST auto-split based on location',
        'E-invoice QR code generation (IRN)',
        'One-click email and WhatsApp delivery',
      ],
    },
    {
      id: 'ai',
      icon: 'BrainCircuit',
      title: 'AI-Powered Insights',
      description: 'GPT-4o-mini integration for anomaly detection, natural language queries, and predictive scheduling optimization.',
      color: 'cyan',
      details: [
        'Anomaly detection in attendance patterns',
        'Natural language query interface',
        'Predictive scheduling based on auditor availability',
        'Auto-generated audit risk assessment reports',
      ],
    },
  ],

    // Audit Types
    auditTypes: [
      { id: 'statutory', title: 'Statutory Audit', description: 'Comprehensive annual audits mandated by the Companies Act.', icon: 'Scale', color: 'blue', stats: '18,500+ audits completed' },
      { id: 'internal', title: 'Internal Audit', description: 'Independent assurance on internal controls and governance.', icon: 'ShieldCheck', color: 'emerald', stats: '12,300+ audits completed' },
      { id: 'tax', title: 'Tax Audit', description: 'Section 44AB compliance audits and filings.', icon: 'Calculator', color: 'amber', stats: '9,800+ audits completed' },
      { id: 'gst', title: 'GST Audit', description: 'Annual reconciliation of GST filings and records.', icon: 'Receipt', color: 'violet', stats: '7,200+ audits completed' },
      { id: 'stock', title: 'Stock Audit', description: 'Physical verification and reconciliation of inventory.', icon: 'Package', color: 'rose', stats: '5,100+ audits completed' },
      { id: 'forensic', title: 'Forensic Audit', description: 'Investigation of fraud, asset misappropriation, and litigation support.', icon: 'Search', color: 'cyan', stats: '1,400+ audits completed' },
    ],

  // FTR Tiers
  ftrTiers: [
    { name: 'Bronze', range: '0-19 visits', color: 'amber', progress: 20 },
    { name: 'Silver', range: '20-49 visits', color: 'gray', progress: 40 },
    { name: 'Gold', range: '50-99 visits', color: 'amber', progress: 60 },
    { name: 'Elite', range: '100+ visits', color: 'emerald', progress: 100 },
  ],

  // Dashboard Tabs
  dashboardTabs: [
    { id: 'auditor', label: 'Auditor', icon: 'User' },
    { id: 'ca', label: 'CA Firm', icon: 'Building2' },
    { id: 'company', label: 'Company', icon: 'Briefcase' },
    { id: 'admin', label: 'Admin', icon: 'Shield' },
  ],

  // Role Overviews
  roleOverviews: {
    auditor: {
      title: 'Auditor Portal',
      subtitle: 'For field auditors on the ground',
      description: 'Everything an auditor needs for their daily workflow — shift schedules, GPS check-in, expense claims, and payslip visibility — in one clean mobile-first interface.',
      features: [
        'One-tap GPS geo-fence check-in with selfie',
        'Daily shift schedule and client location',
        'Expense claim submission with photo receipts',
        'Monthly payslip and earnings history',
        'Offline mode with auto-sync on reconnect',
      ],
      metrics: [
        { label: 'Check-in Speed', value: '< 10s' },
        { label: 'GPS Accuracy', value: '99.8%' },
        { label: 'Offline Support', value: '24h' },
      ],
    },
    ca: {
      title: 'CA Firm Portal',
      subtitle: 'For Chartered Accountants managing teams',
      description: 'Complete visibility over your entire audit team — who is where, what\'s verified, what\'s pending, and the live P&L of your firm — all in one command center.',
      features: [
        'Live map of all active auditors across Mumbai',
        'Attendance verification with one-click approval',
        'Consolidated billing and invoice generation',
        'Anomaly alerts for geo-fence violations',
        'Monthly revenue analytics per client',
      ],
      metrics: [
        { label: 'Team Visibility', value: '100%' },
        { label: 'Invoice Time', value: '< 30s' },
        { label: 'Report Export', value: '1-click' },
      ],
    },
    company: {
      title: 'Company Portal',
      subtitle: 'For client companies being audited',
      description: 'Real-time visibility into which auditors are on-site, verification status of visits, and audit completion dashboards — without needing to chase your CA firm.',
      features: [
        'Real-time auditor presence confirmation',
        'Visit verification status per location',
        'Historical audit log with timestamps',
        'Direct escalation channel to CA firm',
        'Downloadable visit certificates',
      ],
      metrics: [
        { label: 'Transparency', value: '100%' },
        { label: 'Avg Verification', value: '< 2min' },
        { label: 'Dispute Rate', value: '0.1%' },
      ],
    },
    admin: {
      title: 'Admin Portal',
      subtitle: 'For Vouch platform administrators',
      description: 'The God view — full platform health, KYC approvals, revenue dashboards, user management, and system monitoring across the entire Vouch ecosystem.',
      features: [
        'Platform-wide revenue and usage analytics',
        'KYC verification queue with UIDAI integration',
        'System health monitoring and alerting',
        'User onboarding and role management',
        'Compliance and audit trail for regulators',
      ],
      metrics: [
        { label: 'Platform Uptime', value: '99.99%' },
        { label: 'KYC Processing', value: '< 4hrs' },
        { label: 'Dispute Resolution', value: '< 24hrs' },
      ],
    },
  },

  // Pricing Plans
  pricing: [
    {
      name: 'Starter',
      price: '₹2,999',
      period: '/month',
      description: 'Perfect for small CA firms with up to 5 auditors.',
      features: [
        'Up to 5 auditors',
        'GPS Geo-Fence (200m)',
        'Basic attendance tracking',
        'Email support',
        'GST invoice generation',
      ],
      cta: 'Start Free Trial',
      popular: false,
    },
    {
      name: 'Professional',
      price: '₹7,999',
      period: '/month',
      description: 'For growing firms with advanced compliance needs.',
      features: [
        'Up to 25 auditors',
        'Biometric selfie capture',
        'AI anomaly detection',
        'Priority support',
        'Advanced payroll engine',
        'Custom report builder',
      ],
      cta: 'Start Free Trial',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large audit networks.',
      features: [
        'Unlimited auditors',
        'White-label option',
        'API access',
        'Dedicated account manager',
        'Custom integrations',
        'SLA guarantee',
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ],

  // Team Members
  team: [
    {
      name: 'Amit Sharma',
      role: 'CEO & Co-founder',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
    {
      name: 'Priya Patel',
      role: 'CTO & Co-founder',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
    {
      name: 'Rahul Verma',
      role: 'Head of Product',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
    {
      name: 'Sneha Gupta',
      role: 'Head of Engineering',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
  ],

  // FAQ
  faq: [
    {
      category: 'General',
      question: 'How does the GPS geo-fencing work?',
      answer: 'Our system uses the Haversine formula to calculate precise distances between the auditors device and the client location. A 200-meter radius is enforced, and auditors must capture a selfie for biometric verification before marking attendance.',
    },
    {
      category: 'General',
      question: 'Is Vouch compliant with Indian GST regulations?',
      answer: 'Yes. Vouch generates GST-compliant invoices with proper HSN codes, CGST/SGST/IGST splits, and e-invoice QR codes. All data is stored within Indian borders as per regulatory requirements.',
    },
    {
      category: 'Technical',
      question: 'Can I integrate Vouch with my existing ERP?',
      answer: 'Absolutely. Our Enterprise plan includes API access and custom integrations with popular ERP systems like Tally, SAP, and Oracle. We also provide webhook support for real-time data sync.',
    },
    {
      category: 'Security',
      question: 'What happens to my data if I cancel?',
      answer: 'You can export all your data in standard formats (CSV, JSON, PDF) before cancellation. We retain backups for 30 days as per our data retention policy, after which all data is permanently deleted.',
    },
    {
      category: 'Pricing',
      question: 'Do you offer training for new teams?',
      answer: 'Yes, all Professional and Enterprise plans include onboarding training. We offer live sessions, recorded tutorials, and comprehensive documentation to get your team up to speed quickly.',
    },
    {
      category: 'Technical',
      question: 'Does Vouch work offline?',
      answer: 'Yes, our mobile app supports offline mode. Auditors can mark attendance and capture data even in areas with poor connectivity. Data syncs automatically when the connection is restored.',
    },
    {
      category: 'Security',
      question: 'How is biometric data handled?',
      answer: 'Biometric selfies are encrypted using AES-256 and stored in our secure vault. We use liveness detection to prevent spoofing. Biometric templates are never shared with third parties.',
    },
    {
      category: 'Pricing',
      question: 'Is there a free trial available?',
      answer: 'Yes, we offer a 14-day free trial on all plans. No credit card is required to start. You can upgrade, downgrade, or cancel at any time.',
    },
  ],

  // Journey Timeline
  journey: [
    { year: '2024', month: 'January', title: 'Vouch Founded', description: 'Amit Sharma and Priya Patel founded Vouch with a vision to automate field audit operations for CA firms.', milestone: true },
    { year: '2024', month: 'June', title: 'First 10 CA Firms Onboarded', description: 'Launched the beta platform with GPS geo-fencing and basic attendance tracking.', milestone: false },
    { year: '2024', month: 'September', title: 'Seed Funding Raised', description: 'Raised $2.5M in seed funding from leading Indian fintech investors to scale operations.', milestone: true },
    { year: '2025', month: 'January', title: 'AI Insights Engine Launched', description: 'Introduced GPT-powered anomaly detection and predictive scheduling for audit firms.', milestone: false },
    { year: '2025', month: 'March', title: '500+ CA Firms Milestone', description: 'Crossed 500 active CA firms with 25,000+ verified audits completed on the platform.', milestone: true },
    { year: '2025', month: 'August', title: 'GST Invoice Engine', description: 'Launched fully automated GST-compliant invoicing with e-invoice QR generation.', milestone: false },
    { year: '2026', month: 'January', title: 'Series A Funding', description: 'Raised $12M in Series A to expand to 10+ cities and build enterprise features.', milestone: true },
    { year: '2026', month: 'June', title: '50,000+ Audits Verified', description: 'Reached 50,000 verified audits with 99.8% GPS accuracy and zero compliance failures.', milestone: true },
  ],

  // Mumbai Audit Locations (for the map)
  auditLocations: [
    { id: 1, name: 'ABC Corp', lat: 19.0760, lng: 72.8777, area: 'Andheri', type: 'statutory', status: 'completed', date: '2026-06-15' },
    { id: 2, name: 'XYZ Ltd', lat: 19.1136, lng: 72.8697, area: 'Juhu', type: 'internal', status: 'completed', date: '2026-06-14' },
    { id: 3, name: 'PQR Industries', lat: 19.0178, lng: 72.8478, area: 'Bandra', type: 'tax', status: 'in-progress', date: '2026-06-16' },
    { id: 4, name: 'LMN Solutions', lat: 19.0596, lng: 72.8295, area: 'Worli', type: 'gst', status: 'completed', date: '2026-06-13' },
    { id: 5, name: 'DEF Manufacturing', lat: 19.2183, lng: 72.9781, area: 'Thane', type: 'stock', status: 'completed', date: '2026-06-12' },
    { id: 6, name: 'GHI Retail', lat: 19.1365, lng: 72.8276, area: 'Santacruz', type: 'statutory', status: 'in-progress', date: '2026-06-16' },
    { id: 7, name: 'JKL Logistics', lat: 19.0660, lng: 72.8656, area: 'Vile Parle', type: 'internal', status: 'completed', date: '2026-06-11' },
    { id: 8, name: 'MNO Finance', lat: 18.9947, lng: 72.8258, area: 'Lower Parel', type: 'forensic', status: 'completed', date: '2026-06-10' },
    { id: 9, name: 'STU Pharma', lat: 19.2307, lng: 72.8567, area: 'Borivali', type: 'gst', status: 'in-progress', date: '2026-06-17' },
    { id: 10, name: 'VWX Tech', lat: 19.1551, lng: 72.8679, area: 'Goregaon', type: 'tax', status: 'completed', date: '2026-06-09' },
    { id: 11, name: 'YZA Foods', lat: 19.0410, lng: 72.8500, area: 'Dadar', type: 'stock', status: 'completed', date: '2026-06-08' },
    { id: 12, name: 'BCD Realty', lat: 19.0896, lng: 72.9088, area: 'Powai', type: 'statutory', status: 'in-progress', date: '2026-06-17' },
  ],
};

export default siteConfig;
