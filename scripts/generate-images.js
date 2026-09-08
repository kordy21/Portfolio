const fs = require('fs');
const path = require('path');

const projects = [
  { slug: 'carehub', title: 'CareHub', subtitle: 'Healthcare Platform & Dashboard', color1: '#0f172a', color2: '#0369a1', badge: 'Next.js • Redux • Healthcare' },
  { slug: 'work-brand', title: 'Work Brand', subtitle: 'Office & Studio Space Management', color1: '#111827', color2: '#2563eb', badge: 'React • Admin Dashboard' },
  { slug: 'elamwal', title: 'Elamwal', subtitle: 'Financial Markets News & CMS', color1: '#090d16', color2: '#0284c7', badge: 'React • Editorial CMS' },
  { slug: 'jasour', title: 'Jasour', subtitle: 'Community & Service Connectivity', color1: '#0f172a', color2: '#3b82f6', badge: 'React • Web Platform' },
  { slug: 'tamayoz', title: 'Tamayoz', subtitle: 'Modern E-Learning & Courses', color1: '#0a101d', color2: '#1d4ed8', badge: 'React • EdTech' },
  { slug: 'elmonjez', title: 'Elmonjez', subtitle: 'Task & Workflow Productivity Platform', color1: '#1e1b4b', color2: '#2563eb', badge: 'React • Productivity' },
  { slug: 'speedegy', title: 'Speedegy', subtitle: 'High-Performance Web Solutions', color1: '#0c1322', color2: '#0ea5e9', badge: 'Performance • Core Web Vitals' },
  { slug: 'artzksa', title: 'Artzk', subtitle: 'Visual Art & Creative Showcases', color1: '#18181b', color2: '#38bdf8', badge: 'React • Creative Portfolio' },
  { slug: 'truennorth', title: 'TrueNorth', subtitle: 'Strategic Growth & Business Hub', color1: '#0f172a', color2: '#1e40af', badge: 'Corporate • Strategy' },
  { slug: 'marktita', title: 'Marktita', subtitle: 'Modern E-Commerce Marketplace', color1: '#172554', color2: '#0284c7', badge: 'E-Commerce • Shopping' }
];

function createCoverSvg(p) {
  return `<svg width="1280" height="720" viewBox="0 0 1280 720" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${p.color1}" />
      <stop offset="100%" stop-color="${p.color2}" />
    </linearGradient>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.07)" stroke-width="1"/>
    </pattern>
    <linearGradient id="cardGlow" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.22" />
      <stop offset="100%" stop-color="#1d4ed8" stop-opacity="0.08" />
    </linearGradient>
  </defs>

  <rect width="1280" height="720" fill="url(#bg)" />
  <rect width="1280" height="720" fill="url(#grid)" />
  
  <circle cx="1020" cy="180" r="320" fill="#38bdf8" opacity="0.14" />
  <circle cx="200" cy="560" r="260" fill="#2563eb" opacity="0.16" />

  <!-- Mockup Container -->
  <g transform="translate(140, 100)">
    <rect width="1000" height="520" rx="16" fill="#090d16" stroke="rgba(56, 189, 248, 0.3)" stroke-width="1.5" />
    <rect width="1000" height="520" rx="16" fill="url(#cardGlow)" />

    <!-- Browser Header -->
    <rect width="1000" height="44" rx="16" fill="#050811" />
    <circle cx="24" cy="22" r="6" fill="#ef4444" opacity="0.8" />
    <circle cx="42" cy="22" r="6" fill="#f59e0b" opacity="0.8" />
    <circle cx="60" cy="22" r="6" fill="#10b981" opacity="0.8" />

    <rect x="120" y="10" width="400" height="24" rx="6" fill="rgba(255,255,255,0.06)" />
    <text x="135" y="26" fill="rgba(255,255,255,0.6)" font-family="monospace" font-size="11">https://${p.slug}.production-app.io</text>

    <!-- Content Area -->
    <g transform="translate(60, 100)">
      <rect x="0" y="0" width="220" height="28" rx="14" fill="rgba(56, 189, 248, 0.15)" stroke="rgba(56, 189, 248, 0.4)" />
      <text x="16" y="18" fill="#38bdf8" font-family="monospace" font-size="11" font-weight="bold">${p.badge}</text>

      <text x="0" y="80" fill="#ffffff" font-family="sans-serif" font-size="44" font-weight="bold">${p.title}</text>
      <text x="0" y="118" fill="#94a3b8" font-family="sans-serif" font-size="20">${p.subtitle}</text>

      <!-- Dashboard mockup preview cards -->
      <g transform="translate(0, 160)">
        <rect x="0" y="0" width="260" height="160" rx="10" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" />
        <rect x="20" y="20" width="80" height="12" rx="6" fill="rgba(56, 189, 248, 0.5)" />
        <rect x="20" y="45" width="150" height="24" rx="6" fill="rgba(255,255,255,0.85)" />
        <path d="M 20 130 C 60 90, 120 140, 180 80 L 240 100" fill="none" stroke="#38bdf8" stroke-width="3" />

        <rect x="290" y="0" width="260" height="160" rx="10" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" />
        <rect x="310" y="20" width="100" height="12" rx="6" fill="rgba(99, 102, 241, 0.5)" />
        <circle cx="420" cy="95" r="35" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="12" />
        <circle cx="420" cy="95" r="35" fill="none" stroke="#2563eb" stroke-width="12" stroke-dasharray="140 220" />

        <rect x="580" y="0" width="290" height="160" rx="10" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" />
        <rect x="600" y="25" width="250" height="10" rx="5" fill="rgba(255,255,255,0.12)" />
        <rect x="600" y="50" width="210" height="10" rx="5" fill="rgba(255,255,255,0.12)" />
        <rect x="600" y="75" width="230" height="10" rx="5" fill="rgba(255,255,255,0.12)" />
        <rect x="600" y="110" width="100" height="28" rx="6" fill="#2563eb" />
      </g>
    </g>
  </g>
</svg>`;
}

function createGallerySvg(p, num) {
  return `<svg width="1280" height="720" viewBox="0 0 1280 720" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="gBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070c18" />
      <stop offset="100%" stop-color="#121e36" />
    </linearGradient>
  </defs>
  <rect width="1280" height="720" fill="url(#gBg)" />
  <rect x="80" y="60" width="1120" height="600" rx="14" fill="#040711" stroke="rgba(56, 189, 248, 0.25)" stroke-width="1.5" />
  <text x="120" y="130" fill="#ffffff" font-family="sans-serif" font-size="28" font-weight="bold">${p.title} — Detail View ${num}</text>
  <text x="120" y="165" fill="#38bdf8" font-family="monospace" font-size="14">${p.subtitle}</text>
  <g transform="translate(120, 210)">
    <rect width="1040" height="400" rx="10" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.07)" />
    <rect x="30" y="30" width="280" height="340" rx="8" fill="rgba(56,189,248,0.06)" stroke="rgba(56,189,248,0.2)" />
    <rect x="340" y="30" width="670" height="70" rx="8" fill="rgba(255,255,255,0.04)" />
    <rect x="340" y="120" width="670" height="250" rx="8" fill="rgba(37,99,235,0.07)" stroke="rgba(37,99,235,0.2)" />
  </g>
</svg>`;
}

projects.forEach(p => {
  const dir = path.join('public', 'images', 'projects', p.slug);
  fs.writeFileSync(path.join(dir, 'cover.webp'), createCoverSvg(p));
  fs.writeFileSync(path.join(dir, '01.webp'), createGallerySvg(p, '01'));
  fs.writeFileSync(path.join(dir, '02.webp'), createGallerySvg(p, '02'));
});

// Profile image for About section & Hero
const profileSvg = `<svg width="800" height="800" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="profBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#080d1a" />
      <stop offset="50%" stop-color="#172554" />
      <stop offset="100%" stop-color="#0369a1" />
    </linearGradient>
    <linearGradient id="accentLine" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#38bdf8" />
      <stop offset="100%" stop-color="#2563eb" />
    </linearGradient>
  </defs>
  <rect width="800" height="800" rx="32" fill="url(#profBg)" />
  <circle cx="400" cy="300" r="150" fill="#0f172a" stroke="url(#accentLine)" stroke-width="4" />
  <circle cx="400" cy="270" r="75" fill="#38bdf8" opacity="0.95" />
  <path d="M 270 450 C 270 360, 530 360, 530 450" fill="#2563eb" opacity="0.9" />
  <rect x="180" y="550" width="440" height="4" rx="2" fill="url(#accentLine)" />
  <text x="400" y="615" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-size="34" font-weight="bold">Mohamed Abdelhamed</text>
  <text x="400" y="660" text-anchor="middle" fill="#38bdf8" font-family="monospace" font-size="16" letter-spacing="3">FRONTEND ENGINEER • CAIRO</text>
</svg>`;

fs.writeFileSync(path.join('public', 'images', 'profile.jpg'), profileSvg);

console.log('Project images generated successfully!');
