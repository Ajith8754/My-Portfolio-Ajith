const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
menuToggle.addEventListener('click', () => nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));

const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.filter;
    projectCards.forEach(card => {
      card.hidden = filter !== 'all' && card.dataset.category !== filter;
    });
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(element => observer.observe(element));

/* ════════════════════════════════════════════════════════
   CASE STUDY DATA
   ════════════════════════════════════════════════════════ */
const caseStudies = {

  /* ── SMART RIDE HMI — FULL CASE STUDY ─────────────── */
  'cs-hmi': {
    rich: true,
    type: 'MOBILE APP · UI/UX DESIGN',
    title: 'Smart Ride HMI App',
    subtitle: 'An EV Human Machine Interface — designed for clarity at speed.',
    image: 'assets/HMI app design.png',
    meta: {
      type: 'Mobile App UI/UX Design',
      role: 'UI/UX Designer',
      tools: 'Figma · Canva · FigJam',
      duration: '4 Weeks',
      platform: 'Mobile (iOS / Android)'
    },
    sections: [
      {
        id: 'about',
        label: '01 — About the Project',
        type: 'text',
        content: `Smart Ride is a mobile HMI (Human Machine Interface) app concept designed for electric vehicle (EV) riders. It surfaces the most critical ride data — speed, battery status, navigation, and ride controls — in a clean, glanceable interface that works while in motion. The goal was to design an interface that feels calm, not cluttered, even when carrying a lot of data.`
      },
      {
        id: 'design-process',
        label: '02 — Design Process',
        type: 'process-steps',
        steps: [
          { num: '01', title: 'Understand', desc: 'User research, competitor analysis, qualitative interviews' },
          { num: '02', title: 'Define', desc: 'Problem statement, empathy map, user journey, card sorting' },
          { num: '03', title: 'Ideate', desc: 'Information architecture, user flows, low-fidelity wireframes' },
          { num: '04', title: 'Design', desc: 'High-fidelity UI, design system, typography, colour, grids' },
          { num: '05', title: 'Prototype', desc: 'Figma prototype — login, onboarding, app flow, notifications' },
          { num: '06', title: 'Test', desc: 'Usability testing, feedback analysis, results & improvements' }
        ]
      },
      {
        id: 'problem',
        label: '03 — Problem & Solution',
        type: 'two-col',
        left: {
          heading: 'The Problem',
          content: `EV riders rely on dashboards that show too much information at once — speed, battery, range, temperature, motor status, navigation — often displayed in confusing layouts with poor contrast. During a ride, there is no time to decode a cluttered screen. Existing HMI designs prioritise data density over usability, leading to cognitive overload and unsafe glancing behaviour.`
        },
        right: {
          heading: 'The Solution',
          content: `Design a minimal, hierarchy-driven HMI interface where the most critical information (speed, battery, navigation direction) is immediately visible. Use a dark, high-contrast visual language with large type, clear iconography and colour-coded status cues. Secondary controls are reachable but do not compete for attention. The result is an interface built for eyes that have less than a second to look.`
        }
      },
      {
        id: 'product-thinking',
        label: '04 — Product Thinking',
        type: 'text',
        content: `The core product question was: what does a rider actually need while in motion — not what is technically available? Starting from this, features were ranked by necessity: speed is always visible (largest element), battery range is always visible (second priority), navigation direction is prominent (third). Everything else — music, calls, trip stats — is accessible via a bottom tab but does not appear on the primary riding screen. This forced hierarchy is the product's core design decision.`
      },
      {
        id: 'user-research',
        label: '05 — User Research',
        type: 'research',
        content: 'Conducted qualitative research with 8 EV riders and 4 two-wheeler commuters across age groups 20–35.',
        findings: [
          'Riders glance at the dashboard for less than 1.5 seconds while moving',
          '6 of 8 riders said battery range is their #1 concern at all times',
          'All riders found existing cluster displays too small to read at speed',
          '5 of 8 riders use a phone mounted on handlebars — not a built-in display',
          'Navigation direction (turn arrow) was consistently cited as the most needed HMI feature'
        ]
      },
      {
        id: 'competitor',
        label: '06 — Competitor Analysis',
        type: 'table',
        headers: ['App / Product', 'Strengths', 'Weaknesses'],
        rows: [
          ['Ather App', 'Clean UI, real-time stats', 'Too much info on one screen'],
          ['Ola Electric App', 'Bold design, modern feel', 'Navigation not integrated'],
          ['Tesla (car) HMI', 'Minimal, touch-friendly', 'Car-specific, not for 2-wheelers'],
          ['Google Maps', 'Best-in-class navigation', 'Not an HMI — too detailed for riding'],
          ['Smart Ride (this)', 'Ride-first hierarchy, dark mode, glanceable', 'Concept — not yet built']
        ]
      },
      {
        id: 'qualitative',
        label: '07 — Qualitative Research',
        type: 'quotes',
        quotes: [
          { text: 'I need to see my battery. Everything else can wait.', person: 'EV commuter, 24' },
          { text: 'I look at my phone more than the cluster because the cluster font is too small.', person: 'Daily rider, 28' },
          { text: 'If the speed and battery are big and clear, I am happy. I do not need anything else while moving.', person: 'EV rider, 31' }
        ]
      },
      {
        id: 'empathy',
        label: '08 — Empathy Mapping',
        type: 'empathy',
        sections: [
          { label: 'SAYS', items: ['I need battery info constantly', 'The existing UI is too small', 'I want navigation while I ride'] },
          { label: 'THINKS', items: ['Will I make it to my destination?', 'Is my speed safe right now?', 'Which way do I turn next?'] },
          { label: 'DOES', items: ['Glances quickly while riding', 'Mounts phone on handlebar', 'Charges phone mid-ride'] },
          { label: 'FEELS', items: ['Anxious about battery', 'Frustrated by cluttered screens', 'Confident with simple, clear data'] }
        ]
      },
      {
        id: 'card-sorting',
        label: '09 — Card Sorting',
        type: 'card-sort',
        content: 'Open card sort conducted with 6 participants to understand how riders mentally group HMI features.',
        groups: [
          { label: 'Always Visible', color: '#b5f23d', items: ['Speed', 'Battery %', 'Range (km)', 'Navigation Arrow'] },
          { label: 'On Demand', color: '#5aafff', items: ['Trip Duration', 'Distance Covered', 'Motor Temp', 'Tyre Pressure'] },
          { label: 'Secondary', color: '#ffaa40', items: ['Music Controls', 'Phone Calls', 'Weather', 'Settings'] },
          { label: 'Rarely Needed', color: '#888', items: ['Ride History', 'Firmware Update', 'Bluetooth Devices'] }
        ]
      },
      {
        id: 'ia',
        label: '10 — Information Architecture',
        type: 'ia-tree',
        tree: [
          {
            label: 'Smart Ride App',
            children: [
              { label: 'Riding Screen', children: [{ label: 'Speed' }, { label: 'Battery' }, { label: 'Nav Arrow' }, { label: 'Range' }] },
              { label: 'Trip', children: [{ label: 'Live Map' }, { label: 'Distance' }, { label: 'Duration' }] },
              { label: 'Controls', children: [{ label: 'Music' }, { label: 'Calls' }, { label: 'Smart Lock' }] },
              { label: 'Profile', children: [{ label: 'My Rides' }, { label: 'Settings' }, { label: 'Vehicle Info' }] }
            ]
          }
        ]
      },
      {
        id: 'userflow',
        label: '11 — User Flow',
        type: 'flow',
        flows: [
          { step: '01', label: 'Open App', note: 'Splash → Login / Biometric Auth' },
          { step: '02', label: 'Onboarding', note: 'Vehicle pairing, name, ride preferences' },
          { step: '03', label: 'Home / Riding Screen', note: 'Speed · Battery · Range · Nav Arrow' },
          { step: '04', label: 'Start Ride', note: 'Tap ride mode → all secondary UI hides' },
          { step: '05', label: 'Navigation', note: 'Set destination → arrow updates on riding screen' },
          { step: '06', label: 'Notifications', note: 'Low battery alert, speed limit, turn reminder' },
          { step: '07', label: 'End Ride', note: 'Summary → distance, time, efficiency score' }
        ]
      },
      {
        id: 'lofi',
        label: '12 — Low Fidelity Wireframes',
        type: 'wireframe-grid',
        image: 'assets/HMI app design.png',
        screens: [
          { name: 'Splash Screen', desc: 'Logo centre, dark background, loading indicator' },
          { name: 'Login Screen', desc: 'Email + password fields, biometric option, CTA' },
          { name: 'Onboarding 1', desc: 'Vehicle pairing via Bluetooth / QR scan' },
          { name: 'Onboarding 2', desc: 'Set rider name and preferences' },
          { name: 'Home / Ride Screen', desc: 'Large speed, battery bar, nav arrow, bottom tabs' },
          { name: 'Trip Screen', desc: 'Full map view, stats overlay at bottom' },
          { name: 'Controls Screen', desc: 'Music, call, smart lock toggle cards' },
          { name: 'Notification Panel', desc: 'Alert cards for battery, speed, navigation' }
        ]
      },
      {
        id: 'hifi',
        label: '13 — High Fidelity Wireframes',
        type: 'hifi',
        image: 'assets/HMI app design.png',
        note: 'Refined from low-fi with actual typography, colour tokens, iconography, spacing grid and component library applied.'
      },
      {
        id: 'design-system',
        label: '14 — Typography & Colour',
        type: 'design-system',
        fonts: [
          { name: 'Space Grotesk', weight: '700', use: 'Speed, battery % — primary glanceable numbers', size: '64–80px' },
          { name: 'Space Grotesk', weight: '500', use: 'Labels, section headers, nav labels', size: '12–16px' },
          { name: 'DM Sans', weight: '400', use: 'Body text, descriptions, secondary info', size: '11–14px' }
        ],
        colours: [
          { name: 'Background', hex: '#080a07', role: 'App background' },
          { name: 'Surface', hex: '#0f1410', role: 'Cards, panels' },
          { name: 'Accent Green', hex: '#b5f23d', role: 'Speed, battery, CTAs' },
          { name: 'Warning Amber', hex: '#ffaa40', role: 'Low battery, alerts' },
          { name: 'Danger Red', hex: '#ff4d4d', role: 'Critical alerts, speed limit' },
          { name: 'Text Primary', hex: '#f0f5ee', role: 'Headings, numbers' },
          { name: 'Text Muted', hex: '#8a9485', role: 'Labels, secondary text' }
        ]
      },
      {
        id: 'grid',
        label: '15 — Grid System',
        type: 'grid-spec',
        specs: [
          { label: 'Columns', value: '4-column grid on mobile (375px base)' },
          { label: 'Gutter', value: '16px between columns' },
          { label: 'Margin', value: '24px left and right' },
          { label: 'Base Unit', value: '8px spacing system (8, 16, 24, 32, 48, 64)' },
          { label: 'Touch Target', value: 'Minimum 48×48px for all interactive elements' },
          { label: 'Border Radius', value: '4px for cards, 50% for icons and status dots' }
        ]
      },
      {
        id: 'theme',
        label: '16 — Light to Dark Theme',
        type: 'theme-compare',
        dark: { bg: '#080a07', surface: '#0f1410', text: '#f0f5ee', accent: '#b5f23d' },
        light: { bg: '#f5f7f2', surface: '#e8ede4', text: '#1a1f18', accent: '#3a7a00' },
        note: 'The app ships in dark mode by default — optimal for riding conditions and low-light environments. Light mode is available in Settings for daytime indoor use.'
      },
      {
        id: 'login-flow',
        label: '17 — Login Flow',
        type: 'flow',
        flows: [
          { step: '01', label: 'Splash', note: 'App launches with animated logo — 1.5s' },
          { step: '02', label: 'Auth Choice', note: 'Email login OR biometric (fingerprint / Face ID)' },
          { step: '03', label: 'Email Login', note: 'Email + Password → validate → Home' },
          { step: '04', label: 'Biometric', note: 'Touch sensor / Face scan → instant Home' },
          { step: '05', label: 'First Time?', note: 'Sign up → vehicle pairing → onboarding flow' },
          { step: '06', label: 'Home Screen', note: 'Ride screen loads, vehicle data syncs via BLE' }
        ]
      },
      {
        id: 'onboarding',
        label: '18 — Onboarding & Home Screen',
        type: 'screen-list',
        screens: [
          { name: 'Welcome', desc: 'Full-screen hero with tagline and "Get Started" CTA. Vehicle illustration with animated battery indicator.' },
          { name: 'Vehicle Pairing', desc: 'Bluetooth scan for nearby EV. Tap to connect. QR code alternative for first-time pair.' },
          { name: 'Rider Profile', desc: 'Enter name and select riding style (Eco / Sport / Balanced) which adjusts UI density.' },
          { name: 'Permission Setup', desc: 'Location for navigation, notifications for alerts, Bluetooth for vehicle.' },
          { name: 'Home / Riding Screen', desc: 'Large speed indicator (top-centre), battery % + range (top bar), nav arrow (middle), bottom tab bar.' }
        ]
      },
      {
        id: 'app-flow',
        label: '19 — App Flow',
        type: 'flow',
        flows: [
          { step: '01', label: 'Home Screen', note: 'Speed · Battery · Nav Arrow · Range always visible' },
          { step: '02', label: 'Start Navigation', note: 'Search destination → route loads → arrow appears on riding screen' },
          { step: '03', label: 'Riding Mode', note: 'UI simplifies — only 3 elements visible, bottom tab collapses' },
          { step: '04', label: 'Controls Tab', note: 'Swipe or tap Controls → Music, Smart Lock, Call screen' },
          { step: '05', label: 'Trip Stats', note: 'During ride — real-time distance, time, efficiency visible' },
          { step: '06', label: 'End Ride', note: 'Tap stop → ride summary: distance, duration, Wh used, eco score' }
        ]
      },
      {
        id: 'notification-flow',
        label: '20 — Notification Flow',
        type: 'screen-list',
        screens: [
          { name: 'Low Battery Alert (20%)', desc: 'Amber banner slides in from top. Battery icon pulses. "Find Charging Station" CTA.' },
          { name: 'Critical Battery (5%)', desc: 'Full-width red alert. Navigation auto-reroutes to nearest charger.' },
          { name: 'Speed Limit Warning', desc: 'Subtle red ring around speed number. No popup — minimises distraction.' },
          { name: 'Incoming Call', desc: 'Bottom sheet slides up — caller name, Accept / Reject. Riding screen stays visible behind.' },
          { name: 'Turn Notification', desc: '300m before turn — nav arrow enlarges + vibration haptic pattern.' },
          { name: 'Ride Complete', desc: 'Full screen ride summary with stats card and share option.' }
        ]
      },
      {
        id: 'usability',
        label: '21 — Usability Testing',
        type: 'research',
        content: 'Moderated usability tests conducted with 5 participants using the Figma prototype on a mounted phone.',
        findings: [
          'All 5 users located speed and battery within 1 second on the riding screen',
          '4 of 5 users successfully completed navigation setup without guidance',
          '3 of 5 found the Controls tab label unclear — renamed from "Controls" to "Smart Controls"',
          'All 5 users said the dark theme felt "comfortable" for riding conditions',
          '2 users requested haptic feedback confirmation when tapping ride controls',
          'Average SUS (System Usability Scale) score: 84 / 100 — rated "Excellent"'
        ]
      },
      {
        id: 'results',
        label: '22 — Results & Impact',
        type: 'results',
        stats: [
          { value: '84/100', label: 'SUS Usability Score', note: 'Excellent rating' },
          { value: '<1.5s', label: 'Time to Find Key Info', note: 'Speed & battery located instantly' },
          { value: '5/5', label: 'Dark Mode Preference', note: 'All testers preferred dark' },
          { value: '3 Iterations', label: 'Design Cycles', note: 'From sketch to final UI' }
        ],
        learnings: [
          'Hierarchy is more powerful than aesthetics in safety-critical UI',
          'Riding context forces every design decision — if it needs reading, it fails',
          'Dark mode is not just aesthetic for EV apps — it is a usability requirement',
          'Haptic feedback is an underrated communication channel for eyes-busy contexts',
          'Simple does not mean fewer features — it means smarter prioritisation'
        ]
      },
      {
        id: 'all-screens',
        label: '23 — All Screens',
        type: 'all-screens',
        image: 'assets/HMI app design.png',
        list: ['Splash', 'Login', 'Sign Up', 'Onboarding 1–3', 'Home / Riding Screen', 'Navigation Active', 'Trip Stats', 'Controls', 'Smart Lock', 'Music Player', 'Notification Panel', 'Low Battery Alert', 'Critical Alert', 'Incoming Call', 'End Ride Summary', 'Profile', 'Settings', 'Ride History']
      }
    ]
  },

  /* ── OTHER PROJECTS — STANDARD FORMAT ─────────────── */
  'cs-transport': {
    type: 'WEB DASHBOARD · UI/UX',
    title: 'Transport Management Dashboard',
    image: 'assets/nv.png',
    meta: { type: 'Web Dashboard', role: 'UI/UX Designer', tools: 'Figma', duration: '2 Weeks', platform: 'Web (Desktop)' },
    overview: 'A web dashboard concept enabling transport operators to discover vehicle owners, manage bookings and monitor fleet operations in one unified interface.',
    problem: 'Transport businesses rely on fragmented tools — calls, spreadsheets and manual records — to manage vehicle bookings and owner relationships.',
    goals: ['Centralise booking and fleet management in one dashboard', 'Give operators real-time visibility of vehicle status', 'Simplify owner–operator discovery and communication'],
    audience: 'Transport business operators, fleet managers and vehicle owners aged 25–50.',
    process: ['Mapped the core tasks: search, book, track, review', 'Designed information architecture for a multi-role dashboard', 'Created wireframes for key views: vehicle list, booking status, owner profile', 'Applied consistent data visualisation patterns', 'Built high-fidelity screens with a structured grid layout'],
    outcome: 'A clean, data-dense dashboard with sidebar navigation, filterable vehicle listings, booking status cards and clear action hierarchy.',
    tools: ['Figma', 'Component library', 'Dashboard UI patterns']
  },
  'cs-gym': {
    type: 'MOBILE APP · UI/UX',
    title: 'SK Gym App',
    image: 'assets/gym.png',
    meta: { type: 'Mobile App', role: 'UI/UX Designer', tools: 'Figma', duration: '2 Weeks', platform: 'Mobile' },
    overview: 'A fitness membership and gym experience app to help gym members manage memberships, book classes and track progress.',
    problem: 'Gym members lack a simple way to manage memberships, book classes and track progress from their phone.',
    goals: ['Simplify membership management and renewal', 'Enable class booking in under 3 taps', 'Provide motivating progress tracking'],
    audience: 'Gym members aged 18–40 seeking a simple, motivating fitness companion app.',
    process: ['Identified core user jobs: sign up, book class, track progress, renew', 'Sketched low-fi flows for onboarding and home dashboard', 'Developed a bold visual language with dark backgrounds and accent colours', 'Designed prototype screens for key flows'],
    outcome: 'An energetic gym app with an intuitive booking flow, membership overview and progress tracking screens.',
    tools: ['Figma', 'Prototyping', 'Mobile UI design']
  },
  'cs-sharebox': {
    type: 'MOBILE APP · UI/UX',
    title: 'ShareBox App',
    image: 'assets/share box.png',
    meta: { type: 'Mobile App', role: 'UI/UX Designer', tools: 'Figma', duration: '2 Weeks', platform: 'Mobile' },
    overview: 'A community sharing concept app allowing neighbours and local communities to share items, services and resources simply.',
    problem: 'People own items they rarely use while others nearby need them. Existing platforms are either too complex or not community-focused.',
    goals: ['Make item posting as simple as a photo + description', 'Build community trust through clear request and return flows', 'Make accessibility the default — large targets, plain language'],
    audience: 'Local community members aged 20–55 who want to share or borrow everyday items.',
    process: ['Defined the community sharing model: post, discover, request, return', 'Designed a minimal listing and request flow', 'Focused on accessibility: large touch targets, clear labels, simple language', 'Created key screens: home feed, item detail, request confirmation'],
    outcome: 'A clean, community-first sharing app with welcoming visual tone, easy item posting and transparent request-and-return flow.',
    tools: ['Figma', 'User flow mapping', 'Accessibility-first design']
  },
  'cs-campaign': {
    type: 'AI PRODUCT · UI/UX',
    title: 'CampaignOS',
    image: 'assets/OS.png',
    meta: { type: 'AI Mobile App', role: 'UI/UX Designer', tools: 'Figma', duration: '2 Weeks', platform: 'Mobile' },
    overview: 'An AI-powered campaign assistant mobile app concept helping marketers create, manage and optimise digital campaigns through a conversational interface.',
    problem: 'Marketers spend significant time switching between tools to plan, create and report on campaigns.',
    goals: ['Centralise campaign creation in one conversational AI flow', 'Make AI outputs structured and immediately usable', 'Provide campaign analytics without switching tools'],
    audience: 'Digital marketers, social media managers and small business owners aged 22–40.',
    process: ['Researched AI assistant UX patterns and conversational interfaces', 'Defined the core AI actions: generate copy, suggest targeting, analyse results', 'Designed a chat-first interface with structured output cards', 'Created campaign status and analytics screens'],
    outcome: 'A focused AI campaign assistant with conversational home screen, structured campaign cards and clean analytics.',
    tools: ['Figma', 'AI UX patterns', 'Mobile design']
  },
  'cs-atk': {
    type: 'RESPONSIVE WEBSITE',
    title: 'ATK Poultry & Farm',
    image: 'assets/images (1).jpg',
    liveUrl: 'https://ajith8754.github.io/ATK-WEB/',
    meta: { type: 'Responsive Website', role: 'Designer & Developer', tools: 'HTML · CSS · GitHub Pages', duration: '1 Week', platform: 'Web (Desktop + Mobile)' },
    overview: 'A responsive business website for ATK Poultry & Farm presenting products, services and brand story to customers and partners.',
    problem: 'The business had no online presence, relying entirely on word of mouth.',
    goals: ['Create a professional online presence', 'Showcase products and services clearly', 'Provide easy contact and enquiry access'],
    audience: 'Local customers, wholesale buyers and business partners seeking poultry and farm products.',
    process: ['Gathered business requirements: products, services, contact', 'Designed page structure and visual hierarchy', 'Built fully responsive layout using HTML and CSS', 'Optimised for mobile-first viewing', 'Published via GitHub Pages'],
    outcome: 'A clean, professional multi-section website with hero, product listing, services overview and contact section — fully responsive.',
    tools: ['HTML', 'CSS', 'GitHub Pages', 'Responsive design']
  },
  'cs-asm': {
    type: 'RESPONSIVE WEBSITE',
    title: 'ASM Beauty Parlour',
    image: 'assets/b.jpg',
    liveUrl: 'https://ajith8754.github.io/ASM/',
    meta: { type: 'Responsive Website', role: 'Designer & Developer', tools: 'HTML · CSS · GitHub Pages', duration: '1 Week', platform: 'Web (Desktop + Mobile)' },
    overview: 'A service-led website for ASM Beauty Parlour showcasing beauty services, pricing and enabling customer enquiries.',
    problem: 'Local beauty parlours lack an online presence that reflects their quality and attracts new customers.',
    goals: ['Establish a professional digital presence', 'Showcase services with clear pricing', 'Enable customer enquiries directly from the website'],
    audience: 'Local women aged 18–55 looking for beauty services, and new customers discovering the parlour online.',
    process: ['Defined sections: services, gallery, about, contact', 'Created a warm, feminine visual language', 'Built responsive layout for desktop and mobile', 'Added an enquiry section to convert visitors', 'Deployed via GitHub Pages'],
    outcome: 'An elegant beauty parlour website with clear services layout, gallery section and simple customer enquiry flow.',
    tools: ['HTML', 'CSS', 'GitHub Pages']
  },
  'cs-brand': {
    type: 'BRANDING · VISUAL DESIGN',
    title: 'Brand Identity & Graphics',
    image: 'assets/busniss card.png',
    meta: { type: 'Branding & Visual Design', role: 'Visual Designer', tools: 'Canva · Illustrator · Photoshop', duration: '2 Weeks', platform: 'Print + Digital' },
    overview: 'A collection of brand identity and graphic design work including logos, promotional posters, banners and marketing creatives.',
    problem: 'Businesses needed visual assets that consistently communicated their brand across digital and print channels.',
    goals: ['Create a consistent, recognisable brand identity', 'Design print-ready and digital-ready assets', 'Ensure visual consistency across all touchpoints'],
    audience: 'Business owners, marketing teams and customers interacting with brand materials.',
    process: ['Understood brand personality and target audience', 'Created logo concepts with iterative refinement', 'Designed print-ready posters and digital banners', 'Produced promotional creatives for social media', 'Ensured consistency across all materials'],
    outcome: 'A coherent set of brand assets including logos, posters and promotional materials for effective business communication.',
    tools: ['Canva', 'Adobe Illustrator', 'Adobe Photoshop']
  }
};

/* ════════════════════════════════════════════════════════
   MODAL RENDERER
   ════════════════════════════════════════════════════════ */
function renderRichCS(d) {
  const metaHTML = Object.entries(d.meta).map(([k, v]) =>
    `<div class="cs-meta-item"><span>${k.charAt(0).toUpperCase()+k.slice(1)}</span><b>${v}</b></div>`
  ).join('');

  const sectionsHTML = d.sections.map(sec => {
    let inner = '';
    switch(sec.type) {

      case 'text':
        inner = `<p>${sec.content}</p>`;
        break;

      case 'process-steps':
        inner = `<div class="cs-process-row">${sec.steps.map(s =>
          `<div class="cs-proc-step"><span class="cs-proc-num">${s.num}</span><b>${s.title}</b><p>${s.desc}</p></div>`
        ).join('')}</div>`;
        break;

      case 'two-col':
        inner = `<div class="cs-two-col">
          <div class="cs-col cs-problem"><h4>${sec.left.heading}</h4><p>${sec.left.content}</p></div>
          <div class="cs-col cs-solution"><h4>${sec.right.heading}</h4><p>${sec.right.content}</p></div>
        </div>`;
        break;

      case 'research':
        inner = `<p>${sec.content}</p><ul class="cs-findings">${sec.findings.map(f => `<li>${f}</li>`).join('')}</ul>`;
        break;

      case 'table':
        inner = `<div class="cs-table-wrap"><table class="cs-table">
          <thead><tr>${sec.headers.map(h=>`<th>${h}</th>`).join('')}</tr></thead>
          <tbody>${sec.rows.map(r=>`<tr>${r.map(c=>`<td>${c}</td>`).join('')}</tr>`).join('')}</tbody>
        </table></div>`;
        break;

      case 'quotes':
        inner = `<div class="cs-quotes">${sec.quotes.map(q =>
          `<blockquote class="cs-quote"><p>"${q.text}"</p><cite>— ${q.person}</cite></blockquote>`
        ).join('')}</div>`;
        break;

      case 'empathy':
        inner = `<div class="cs-empathy">${sec.sections.map(e =>
          `<div class="cs-empathy-quad"><span class="cs-eq-label">${e.label}</span><ul>${e.items.map(i=>`<li>${i}</li>`).join('')}</ul></div>`
        ).join('')}</div>`;
        break;

      case 'card-sort':
        inner = `<p>${sec.content}</p><div class="cs-card-sort">${sec.groups.map(g =>
          `<div class="cs-sort-group"><span class="cs-sort-label" style="color:${g.color};border-color:${g.color}">${g.label}</span>
          <div class="cs-sort-items">${g.items.map(i=>`<span>${i}</span>`).join('')}</div></div>`
        ).join('')}</div>`;
        break;

      case 'ia-tree':
        inner = `<div class="cs-ia">${sec.tree.map(root =>
          `<div class="cs-ia-root"><span>${root.label}</span>
          <div class="cs-ia-children">${root.children.map(child =>
            `<div class="cs-ia-node"><b>${child.label}</b>
            ${child.children ? `<div class="cs-ia-leaves">${child.children.map(l=>`<span>${l.label}</span>`).join('')}</div>` : ''}
            </div>`
          ).join('')}</div></div>`
        ).join('')}</div>`;
        break;

      case 'flow':
        inner = `<div class="cs-flow">${sec.flows.map((f, i) =>
          `<div class="cs-flow-step"><div class="cs-flow-num">${f.step}</div>
          <div class="cs-flow-content"><b>${f.label}</b><p>${f.note}</p></div>
          ${i < sec.flows.length - 1 ? '<div class="cs-flow-arrow">↓</div>' : ''}</div>`
        ).join('')}</div>`;
        break;

      case 'wireframe-grid':
        inner = `<img class="cs-img" src="${sec.image}" alt="Wireframes">
        <div class="cs-screen-grid">${sec.screens.map(s =>
          `<div class="cs-screen-item"><div class="cs-screen-box"></div><b>${s.name}</b><p>${s.desc}</p></div>`
        ).join('')}</div>`;
        break;

      case 'hifi':
        inner = `<img class="cs-img" src="${sec.image}" alt="High Fidelity UI">
        <p class="cs-note">${sec.note}</p>`;
        break;

      case 'design-system':
        inner = `<div class="cs-ds-section">
          <h4 class="cs-ds-heading">Typography</h4>
          <div class="cs-type-list">${sec.fonts.map(f =>
            `<div class="cs-type-item"><span class="cs-type-sample" style="font-size:clamp(18px,3vw,28px);font-weight:${f.weight}">${f.name}</span>
            <div><b>${f.name} ${f.weight}</b> · ${f.size}<br><span class="cs-ds-use">${f.use}</span></div></div>`
          ).join('')}</div>
        </div>
        <div class="cs-ds-section">
          <h4 class="cs-ds-heading">Colour Palette</h4>
          <div class="cs-colour-grid">${sec.colours.map(c =>
            `<div class="cs-colour-item"><div class="cs-swatch" style="background:${c.hex}"></div>
            <b>${c.name}</b><code>${c.hex}</code><span>${c.role}</span></div>`
          ).join('')}</div>
        </div>`;
        break;

      case 'grid-spec':
        inner = `<div class="cs-spec-list">${sec.specs.map(s =>
          `<div class="cs-spec-row"><span class="cs-spec-label">${s.label}</span><span class="cs-spec-val">${s.value}</span></div>`
        ).join('')}</div>`;
        break;

      case 'theme-compare':
        inner = `<div class="cs-theme-row">
          <div class="cs-theme-card" style="background:${sec.dark.bg};color:${sec.dark.text};border:1px solid #222">
            <span class="cs-theme-label">DARK MODE (DEFAULT)</span>
            <div class="cs-theme-preview">
              <div class="cs-theme-bar" style="background:${sec.dark.surface}"></div>
              <div class="cs-theme-accent" style="background:${sec.dark.accent}"></div>
            </div>
            <code style="color:${sec.dark.accent}">${sec.dark.bg} · ${sec.dark.accent}</code>
          </div>
          <div class="cs-theme-card" style="background:${sec.light.bg};color:${sec.light.text};border:1px solid #ccc">
            <span class="cs-theme-label" style="color:${sec.light.text}66">LIGHT MODE</span>
            <div class="cs-theme-preview">
              <div class="cs-theme-bar" style="background:${sec.light.surface}"></div>
              <div class="cs-theme-accent" style="background:${sec.light.accent}"></div>
            </div>
            <code style="color:${sec.light.accent}">${sec.light.bg} · ${sec.light.accent}</code>
          </div>
        </div><p class="cs-note" style="margin-top:16px">${sec.note}</p>`;
        break;

      case 'screen-list':
        inner = `<div class="cs-screen-list">${sec.screens.map(s =>
          `<div class="cs-slist-item"><div class="cs-slist-dot"></div><div><b>${s.name}</b><p>${s.desc}</p></div></div>`
        ).join('')}</div>`;
        break;

      case 'results':
        inner = `<div class="cs-stats-row">${sec.stats.map(s =>
          `<div class="cs-stat"><span class="cs-stat-val">${s.value}</span><b>${s.label}</b><p>${s.note}</p></div>`
        ).join('')}</div>
        <h4 style="font:600 10px 'Space Grotesk';letter-spacing:2px;color:var(--accent);margin:28px 0 14px">KEY LEARNINGS</h4>
        <ul class="cs-findings">${sec.learnings.map(l => `<li>${l}</li>`).join('')}</ul>`;
        break;

      case 'all-screens':
        inner = `<img class="cs-img" src="${sec.image}" alt="All Screens">
        <div class="cs-all-screens">${sec.list.map(s =>`<span class="cs-screen-tag">${s}</span>`).join('')}</div>`;
        break;
    }

    return `<div class="cs-section" id="${sec.id}">
      <h3 class="cs-section-title">${sec.label}</h3>
      ${inner}
    </div>`;
  }).join('');

  return `
    <div class="cs-rich-header">
      <span class="cs-type">${d.type}</span>
      <h2>${d.title}</h2>
      <p class="cs-subtitle">${d.subtitle}</p>
      <div class="cs-meta-bar">${metaHTML}</div>
    </div>
    <img class="cs-img cs-hero-img" src="${d.image}" alt="${d.title}">
    <div class="cs-toc">
      ${d.sections.map(s => `<a href="#${s.id}" class="cs-toc-link">${s.label}</a>`).join('')}
    </div>
    ${sectionsHTML}`;
}

function renderStandardCS(d) {
  const metaHTML = d.meta ? Object.entries(d.meta).map(([k,v]) =>
    `<div class="cs-meta-item"><span>${k.charAt(0).toUpperCase()+k.slice(1)}</span><b>${v}</b></div>`
  ).join('') : '';

  const goalsHTML = d.goals ? `<div class="cs-section"><h3 class="cs-section-title">Project Goals</h3><ul class="cs-findings">${d.goals.map(g=>`<li>${g}</li>`).join('')}</ul></div>` : '';
  const audienceHTML = d.audience ? `<div class="cs-section"><h3 class="cs-section-title">Target Audience</h3><p>${d.audience}</p></div>` : '';
  const processHTML = d.process ? `<div class="cs-section"><h3 class="cs-section-title">Design Process</h3><div class="cs-flow">${d.process.map((s,i)=>`<div class="cs-flow-step"><div class="cs-flow-num">0${i+1}</div><div class="cs-flow-content"><p>${s}</p></div>${i<d.process.length-1?'<div class="cs-flow-arrow">↓</div>':''}</div>`).join('')}</div></div>` : '';
  const toolsHTML = d.tools ? `<div class="cs-tools">${d.tools.map(t=>`<span>${t}</span>`).join('')}</div>` : '';

  return `
    <div class="cs-rich-header">
      <span class="cs-type">${d.type}</span>
      <h2>${d.title}</h2>
      ${d.meta ? `<div class="cs-meta-bar">${metaHTML}</div>` : ''}
    </div>
    <img class="cs-img cs-hero-img" src="${d.image}" alt="${d.title}">
    ${d.liveUrl ? `<a class="cs-live" href="${d.liveUrl}" target="_blank" rel="noopener">View live site ↗</a>` : ''}
    <div class="cs-section"><h3 class="cs-section-title">Project Overview</h3><p>${d.overview}</p></div>
    <div class="cs-section"><h3 class="cs-section-title">Problem Statement</h3><p>${d.problem}</p></div>
    ${goalsHTML}${audienceHTML}${processHTML}
    <div class="cs-section"><h3 class="cs-section-title">Outcome & Learnings</h3><p>${d.outcome}</p>${toolsHTML}</div>`;
}

/* ── Modal Logic ─────────────────────────────────────────── */
const overlay = document.getElementById('csOverlay');
const csBody  = document.getElementById('csBody');
const csClose = document.getElementById('csClose');

function openCS(id) {
  const d = caseStudies[id];
  if (!d) return;
  csBody.innerHTML = d.rich ? renderRichCS(d) : renderStandardCS(d);
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  csBody.scrollTop = 0;

  // TOC smooth scroll inside modal
  csBody.querySelectorAll('.cs-toc-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = csBody.querySelector(link.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

function closeCS() {
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

document.querySelectorAll('.cs-btn').forEach(btn => {
  btn.addEventListener('click', e => { e.preventDefault(); openCS(btn.dataset.cs); });
});
csClose.addEventListener('click', closeCS);
overlay.addEventListener('click', e => { if (e.target === overlay) closeCS(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeCS(); });
