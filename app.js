/* =========================================================================
   Geospatial AI Sdn Bhd — standalone site logic (standard HTML/CSS/JS)
   No build step, no terminal: just open index.html in a browser.
   All styling lives in styles.css — this file only handles data + behaviour.
   ========================================================================= */

/* ----------------------------- Data ----------------------------- */
const platforms = [
  {
    id: 'footprint',
    title: 'Land Use & Building Footprint Detection',
    short: 'AI-powered building extraction & land-use mapping.',
    description:
      'AI-powered building footprint extraction and land-use classification at national scale, combining deep-learning segmentation with vector GIS analytics.',
    icon: 'building-2',
    accent: 'grad-2',
    features: ['Building footprint extraction', 'Land-use classification', 'Urban monitoring', 'GIS analytics'],
    url: 'https://uzma-geospatial-ai.github.io/building_footprint_demo/#',
    tag: 'Urban · AI Vision',
  },
  {
    id: 'border',
    title: 'Malaysia–Thailand Border Visualization',
    short: 'Interactive WebGIS for cross-border spatial analysis.',
    description:
      'Interactive WebGIS platform for visualizing the Malaysia–Thailand border, terrain context, infrastructure, and regional spatial relationships.',
    icon: 'map',
    accent: 'grad-3',
    features: ['Border mapping', 'Spatial visualization', 'Regional analysis', 'Interactive layers'],
    url: 'https://zh4rif.github.io/MY_TH_BEZ/',
    tag: 'WebGIS · Visualization',
  },
  {
    id: 'palmgrove',
    title: 'PalmGrove',
    short: 'Palm-oil plantation monitoring with AI change detection.',
    description:
      'Monitor palm oil plantations using satellite imagery and AI-powered change detection. Detect deforestation, encroachment, and yield anomalies in near-real time.',
    icon: 'leaf',
    accent: 'grad-1',
    features: ['Deforestation alerts', 'Plantation monitoring', 'ESG compliance', 'Environmental analytics'],
    url: 'https://palmgrove.uzmadigitalearth.app/',
    tag: 'Agriculture · ESG',
    secure: true, // protected platform (login) — can't be embedded, requires a click to launch
  },
  {
    id: 'mspo',
    title: 'MSPO Sustainability Monitoring',
    short: 'Malaysian Sustainable Palm Oil certification monitoring.',
    description:
      'Digital Earth platform for monitoring Malaysian Sustainable Palm Oil (MSPO) certification compliance — tracking plantation boundaries, land use, and sustainability indicators through satellite intelligence.',
    icon: 'badge-check',
    accent: 'grad-2',
    features: ['MSPO certification tracking', 'Plantation boundary mapping', 'Sustainability compliance', 'Satellite monitoring'],
    url: 'https://mspo.uzmadigitalearth.app/',
    tag: 'Sustainability · ESG',
  },
  {
    id: 'spacein',
    title: 'SpaceIn',
    short: 'Satellite-connected IoT monitoring for remote assets.',
    description:
      'Space-based IoT platform linking ground sensors to satellite intelligence — track remote assets, environmental conditions, and field telemetry on a live geospatial dashboard.',
    icon: 'satellite-dish',
    accent: 'grad-3',
    features: ['IoT sensor tracking', 'Satellite connectivity', 'Real-time telemetry', 'Remote asset monitoring'],
    url: 'https://iot.uzmadigitalearth.app/',
    tag: 'IoT · Satellite',
  },
];

const techStack = ['Python', 'FastAPI', 'Leaflet', 'GeoPandas', 'PyTorch', 'Rasterio', 'QGIS', 'PostGIS', 'Machine Learning', 'Remote Sensing', 'HTML', 'CSS', 'SQL', 'Java', 'JavaScript', 'Node.js'];

const pipelineSteps = [
  { label: 'Satellite Imagery', sub: 'Sentinel-2 · Planet · Maxar', icon: 'satellite' },
  { label: 'Data Acquisition', sub: 'STAC · Cloud-Optimised GeoTIFF', icon: 'database' },
  { label: 'AI Processing', sub: 'Tiling · Feature engineering', icon: 'cpu' },
  { label: 'Deep Learning Models', sub: 'U-Net · SAM · YOLO', icon: 'brain' },
  { label: 'Spatial Analytics', sub: 'PostGIS · GeoPandas', icon: 'bar-chart-3' },
  { label: 'Web GIS Dashboard', sub: 'Leaflet · React · FastAPI', icon: 'layout-dashboard' },
];

const applications = [
  { title: 'Agriculture Monitoring', sub: 'Crop health · Yield · Encroachment', icon: 'sprout' },
  { title: 'Urban Planning', sub: 'Zoning · Density · Growth', icon: 'building' },
  { title: 'Building Footprint Detection', sub: 'Cadastre · Census · Insurance', icon: 'home' },
  { title: 'Environmental Monitoring', sub: 'Forests · Water · Air', icon: 'tree-pine' },
  { title: 'Smart Cities', sub: 'Mobility · Utilities · Safety', icon: 'waypoints' },
  { title: 'National Mapping', sub: 'Basemaps · Topography', icon: 'map' },
  { title: 'Disaster Management', sub: 'Flood · Fire · Damage assessment', icon: 'shield-alert' },
  { title: 'Infrastructure Monitoring', sub: 'Power · Roads · Pipelines', icon: 'wrench' },
];

const metrics = [
  { value: 1000000, label: 'Detected Buildings', suffix: '+', format: 'compact' },
  { value: 50000, label: 'Satellite Images', suffix: '+', format: 'compact' },
  { value: 90, label: 'AI Accuracy', suffix: '%', format: 'plain' },
  { value: 24, label: 'Monitoring', suffix: '/7', format: 'plain' },
];

const heroStats = [
  { value: '5', label: 'Platforms' },
  { value: 'AI', label: 'Analytics' },
  { value: '24/7', label: 'Satellite Monitoring' },
  { value: 'WebGIS', label: 'Interactive GIS' },
];

const navItems = [
  { label: 'Home', target: 'home' },
  { label: 'Solutions', target: 'solutions' },
  { label: 'Live Demos', target: 'demos' },
  { label: 'Technology', target: 'technology' },
  { label: 'Applications', target: 'applications' },
  { label: 'Contact', target: 'contact' },
];

const demoTabLabels = { palmgrove: 'PalmGrove', footprint: 'Building Footprint', border: 'Border Visualization', mspo: 'MSPO Monitoring', spacein: 'SpaceIn' };

// Footer "Connect" links — rendered by JS (each <li> parsed individually) so a
// long run of inline-SVG siblings can't trip up the HTML parser.
const socialLinks = [
  { label: 'LinkedIn', url: 'https://www.linkedin.com/company/geospatial-ai', svg: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>' },
  { label: 'Facebook', url: 'https://www.facebook.com/p/Geospatial-AI-Sdn-Bhd-UZMA-Group-61559431393079/', svg: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12a12 12 0 1 0-13.88 11.85v-8.38H7.08V12h3.04V9.36c0-3 1.79-4.67 4.53-4.67 1.31 0 2.68.24 2.68.24v2.95H15.8c-1.49 0-1.95.92-1.95 1.87V12h3.32l-.53 3.47h-2.79v8.38A12 12 0 0 0 24 12z"/></svg>' },
  { label: 'Instagram', url: 'https://www.instagram.com/geospatialai.uzmagroup/', svg: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.6" fill="currentColor"/></svg>' },
  { label: 'TikTok', url: 'https://www.tiktok.com/@geospatialai.uzmagroup', svg: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16.6 5.82A4.28 4.28 0 0 1 15.55 3h-3.27v13.18a2.59 2.59 0 0 1-2.59 2.46 2.59 2.59 0 0 1-2.45-2.59 2.59 2.59 0 0 1 3.3-2.49V7.79a5.86 5.86 0 0 0-.85-.06A5.86 5.86 0 0 0 4 13.59a5.86 5.86 0 0 0 9.94 4.16 5.86 5.86 0 0 0 1.72-4.15V8.51a7.5 7.5 0 0 0 4.34 1.39V6.63a4.28 4.28 0 0 1-3.4-.81z"/></svg>' },
];

/* ----------------------------- Helpers ----------------------------- */
const $ = (sel, root = document) => root.querySelector(sel);
const el = (html) => {
  const t = document.createElement('template');
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
};
const refreshIcons = () => window.lucide && window.lucide.createIcons();

/* ----------------------------- Theme ----------------------------- */
const STORAGE_KEY = 'gsi-theme';
function applyTheme(theme) {
  const root = document.documentElement;
  root.classList.toggle('dark', theme === 'dark');
  root.classList.toggle('light', theme === 'light');
  localStorage.setItem(STORAGE_KEY, theme);
  const btn = $('#theme-toggle');
  if (btn) {
    btn.innerHTML =
      theme === 'dark'
        ? '<i data-lucide="sun" style="color:#fcd34d"></i>'
        : '<i data-lucide="moon" style="color:#44403c"></i>';
    refreshIcons();
  }
}
function initTheme() {
  const stored = localStorage.getItem(STORAGE_KEY);
  applyTheme(stored === 'light' || stored === 'dark' ? stored : 'light');
  $('#theme-toggle').addEventListener('click', () => {
    applyTheme(document.documentElement.classList.contains('dark') ? 'light' : 'dark');
  });
}

/* ----------------------------- Navigation ----------------------------- */
function jumpTo(id) {
  if (!$('#page-demo').classList.contains('hidden')) {
    location.hash = '';
    setTimeout(() => scrollToSection(id), 90);
    return;
  }
  scrollToSection(id);
}
function scrollToSection(id) {
  const node = document.getElementById(id);
  if (node) node.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function initNav() {
  const desktop = $('#desktop-nav');
  const mobile = $('#mobile-nav-links');
  navItems.forEach((item) => {
    desktop.appendChild(el(`<a href="#${item.target}" data-jump="${item.target}" class="nav-link">${item.label}</a>`));
    mobile.appendChild(el(`<a href="#${item.target}" data-jump="${item.target}" class="mobile-link">${item.label}</a>`));
  });

  // One delegated handler for everything with data-jump.
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-jump]');
    if (!trigger) return;
    e.preventDefault();
    $('#mobile-nav').classList.add('hidden');
    jumpTo(trigger.getAttribute('data-jump'));
  });

  $('#mobile-menu-btn').addEventListener('click', () => $('#mobile-nav').classList.toggle('hidden'));

  const header = $('#navbar');
  const onScroll = () => header.classList.toggle('nav--scrolled', window.scrollY > 20);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ----------------------------- Globe surface ----------------------------- */
// Rough continent ellipses [centreX, centreY, radiusX, radiusY] on a 0–200 grid.
const landmasses = [
  [60, 72, 17, 15], [70, 60, 9, 7],     // North America
  [82, 126, 11, 22],                     // South America
  [108, 70, 13, 9],                      // Europe
  [117, 112, 16, 24],                    // Africa
  [150, 84, 28, 18], [134, 70, 10, 8],   // Asia
  [168, 140, 11, 7],                     // Australia
];
const inLand = (x, y) => landmasses.some(([cx, cy, rx, ry]) => ((x - cx) / rx) ** 2 + ((y - cy) / ry) ** 2 <= 1);

function buildGlobe() {
  const svg = $('#globe-surface');
  if (!svg) return;
  const C = 100, R = 92;
  let g = '';

  // Wireframe graticule (parallels + meridians)
  for (let i = 1; i < 6; i++)
    g += `<ellipse cx="100" cy="100" rx="${R}" ry="${(R * i) / 6}" fill="none" stroke="currentColor" stroke-width="0.5" opacity="0.45"/>`;
  for (let i = 1; i < 7; i++)
    g += `<ellipse cx="100" cy="100" rx="${(R * i) / 7}" ry="${R}" fill="none" stroke="currentColor" stroke-width="0.5" opacity="0.45"/>`;
  g += `<line x1="${C - R}" y1="100" x2="${C + R}" y2="100" stroke="currentColor" stroke-width="0.6" opacity="0.55"/>`;
  g += `<circle cx="100" cy="100" r="${R}" fill="none" stroke="currentColor" stroke-width="0.8" opacity="0.65"/>`;

  // Dotted continents — a halftone-style world map
  let dots = '';
  for (let y = 12; y <= 188; y += 4) {
    for (let x = 12; x <= 188; x += 4) {
      const dx = x - C, dy = y - C;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist > R - 3 || !inLand(x, y)) continue;
      const jx = (x + (Math.random() - 0.5) * 2).toFixed(1);
      const jy = (y + (Math.random() - 0.5) * 2).toFixed(1);
      const edgeFade = Math.max(0.3, 1 - dist / R); // dimmer toward the limb
      const bright = Math.random() < 0.12; // a few brighter "city" dots
      const r = (0.7 + Math.random() * 0.7).toFixed(2);
      const op = ((bright ? 0.95 : 0.8) * (0.5 + edgeFade / 2)).toFixed(2);
      dots += `<circle cx="${jx}" cy="${jy}" r="${r}" fill="${bright ? '#ffd9b0' : '#f4b07e'}" opacity="${op}"/>`;
    }
  }
  svg.innerHTML = g + dots;
}

/* ----------------------------- Hero stats ----------------------------- */
function buildHeroStats() {
  const grid = $('#hero-stats');
  if (!grid) return;
  heroStats.forEach((stat) => {
    grid.appendChild(
      el(`<div class="glass stat">
        <div class="stat__value">${stat.value}</div>
        <div class="stat__label">${stat.label}</div>
      </div>`)
    );
  });
}

/* ----------------------------- Solutions ----------------------------- */
function buildSolutions() {
  const grid = $('#solutions-grid');
  platforms.forEach((p) => {
    const features = p.features
      .map((f) => `<li class="feature"><span class="feature__dot ${p.accent}"></span>${f}</li>`)
      .join('');
    grid.appendChild(
      el(`<article class="solution-card reveal">
        <div class="solution-card__glow ${p.accent}"></div>
        <div class="solution-card__head">
          <span class="badge ${p.accent}"><i data-lucide="${p.icon}"></i></span>
          <span class="tag">${p.tag}</span>
        </div>
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <ul class="feature-list">${features}</ul>
        <div class="solution-card__actions">
          <a href="#/demos/${p.id}" class="launch-btn">Launch Demo <i data-lucide="arrow-up-right"></i></a>
        </div>
      </article>`)
    );
  });
}

/* ----------------------------- Metrics + counters ----------------------------- */
function formatCompact(n) {
  if (n >= 1000000) return `${(n / 1000000).toFixed(n % 1000000 === 0 ? 0 : 1)}M`;
  if (n >= 1000) return `${(n / 1000).toFixed(n % 1000 === 0 ? 0 : 1)}K`;
  return `${n}`;
}
function buildMetrics() {
  const grid = $('#metrics-grid');
  metrics.forEach((m) => {
    grid.appendChild(
      el(`<div class="metric">
        <span class="metric__value counter" data-target="${m.value}" data-format="${m.format}">0<span class="metric__suffix">${m.suffix}</span></span>
        <div class="metric__label">${m.label}</div>
      </div>`)
    );
  });
}
function animateCounter(span) {
  const target = Number(span.dataset.target);
  const format = span.dataset.format;
  const suffix = span.querySelector('.metric__suffix');
  const duration = 1.6;
  const start = performance.now();
  const step = (t) => {
    const progress = Math.min((t - start) / 1000 / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = Math.round(target * eased);
    span.childNodes[0].nodeValue = format === 'compact' ? formatCompact(value) : `${value}`;
    span.appendChild(suffix);
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

/* ----------------------------- Technology ----------------------------- */
function buildTechnology() {
  const ol = $('#pipeline');
  pipelineSteps.forEach((step, idx) => {
    const arrow =
      idx < pipelineSteps.length - 1
        ? '<i data-lucide="arrow-down" class="pipeline__arrow"></i>'
        : '';
    ol.appendChild(
      el(`<li class="pipeline__step reveal">
        <div class="pipeline__icon"><i data-lucide="${step.icon}"></i></div>
        <div class="glass pipeline__body"><strong>${step.label}</strong><span>${step.sub}</span></div>
        ${arrow}
      </li>`)
    );
  });

  const stack = $('#techstack');
  techStack.forEach((t) => stack.appendChild(el(`<span class="chip">${t}</span>`)));
}

/* ----------------------------- Applications ----------------------------- */
function buildApplications() {
  const grid = $('#applications-grid');
  applications.forEach((a) => {
    grid.appendChild(
      el(`<div class="app-card reveal">
        <div class="app-card__glow"></div>
        <div class="app-card__icon"><i data-lucide="${a.icon}"></i></div>
        <div class="app-card__title">${a.title}</div>
        <div class="app-card__sub">${a.sub}</div>
      </div>`)
    );
  });
}

/* ----------------------------- Iframe frame ----------------------------- */
// Toggle fullscreen on a given element (enlarges the embed in-page — the URL
// is never shown, unlike opening a new tab).
function toggleFullscreen(elem) {
  if (document.fullscreenElement) document.exitFullscreen();
  else if (elem.requestFullscreen) elem.requestFullscreen();
}

function iframeFrame(src, title, height = 'min(78vh, 720px)') {
  const node = el(`<div class="iframe-shell">
    <div class="iframe-shell__bar">
      <div class="iframe-shell__dots">
        <span class="dot dot--r"></span><span class="dot dot--y"></span><span class="dot dot--g"></span>
        <span class="iframe-shell__label">Live preview</span>
      </div>
      <div class="iframe-shell__actions">
        <button type="button" data-reload class="iframe-shell__btn" title="Reload"><i data-lucide="refresh-cw"></i></button>
        <button type="button" data-maximize class="iframe-shell__btn" title="Enlarge"><i data-lucide="maximize"></i></button>
      </div>
    </div>
    <div class="iframe-wrap" style="height:${height}">
      <div data-loading class="iframe-loading">
        <div class="iframe-loading__inner">
          <i data-lucide="loader-2" class="spinner" style="color:var(--orange-300)"></i>
          <div class="iframe-loading__label">Loading demo…</div>
        </div>
      </div>
      <iframe src="${src}" title="${title}" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
              allow="geolocation; clipboard-read; clipboard-write; fullscreen"></iframe>
    </div>
  </div>`);

  const frame = node.querySelector('iframe');
  const loading = node.querySelector('[data-loading]');
  const spinnerHTML = loading.innerHTML;

  // Some demos send X-Frame-Options / CSP frame-ancestors and refuse to be
  // embedded. The browser blocks the navigation and `load` never fires, so we
  // fall back to a clear "open in new tab" message after a short timeout.
  const showBlocked = () => {
    loading.innerHTML = `<div class="iframe-blocked">
      <i data-lucide="shield-alert" style="color:var(--orange-300)"></i>
      <strong>This demo can't be embedded here</strong>
      <p>Its server blocks framing for security (X-Frame-Options). Open it in a new tab to view the live demo.</p>
      <a href="${src}" target="_blank" rel="noopener noreferrer" class="btn btn--primary btn--sm">
        <i data-lucide="external-link"></i> Open demo in new tab
      </a>
    </div>`;
    refreshIcons();
  };

  let blockTimer = setTimeout(showBlocked, 6000);
  frame.addEventListener('load', () => {
    // Ignore the intermediate about:blank load fired by the reload button.
    if (frame.getAttribute('src') === 'about:blank') return;
    clearTimeout(blockTimer);
    loading.classList.add('hidden');
  });
  node.querySelector('[data-reload]').addEventListener('click', () => {
    loading.innerHTML = spinnerHTML;
    loading.classList.remove('hidden');
    refreshIcons();
    clearTimeout(blockTimer);
    // A genuine reload: blank the frame first, then re-point it at the
    // ORIGINAL demo URL on the next frame. Re-assigning the same src string is
    // treated as a no-op by some browsers and won't return to the original page
    // if the user navigated inside the demo — blanking forces a fresh load and
    // reliably fires the `load` event so the spinner clears.
    frame.src = 'about:blank';
    requestAnimationFrame(() => {
      frame.src = src;
      blockTimer = setTimeout(showBlocked, 6000);
    });
  });
  node.querySelector('[data-maximize]').addEventListener('click', () => toggleFullscreen(node));
  return node;
}

/* ----------------------------- Secure launch gate ----------------------------- */
// Some platforms (PalmGrove, MSPO) are protected by their own login and refuse to be
// framed (X-Frame-Options). Instead of embedding and failing, we show a "gate"
// the visitor must click to open the live platform in a new tab.
function secureGate(platform, height = 'min(78vh, 720px)') {
  return el(`<div class="secure-gate" style="min-height:${height}">
    <div class="secure-gate__inner">
      <div class="secure-gate__badge ${platform.accent}"><i data-lucide="lock-keyhole"></i></div>
      <h4 class="secure-gate__title">Secure platform — login required</h4>
      <p class="secure-gate__text">
        ${platform.title} is a protected platform with its own secure sign-in, so it
        can't be embedded here. Click below to open the live platform in a new tab.
      </p>
      <a href="${platform.url}" target="_blank" rel="noopener noreferrer" class="btn btn--primary">
        <i data-lucide="external-link"></i> Open ${platform.title} <i data-lucide="arrow-up-right"></i>
      </a>
      <div class="secure-gate__url"><i data-lucide="shield-check"></i> ${platform.url}</div>
    </div>
  </div>`);
}

/* ----------------------------- Interactive demo tabs ----------------------------- */
function buildDemos() {
  const tabsWrap = $('#demo-tabs');
  const panel = $('#demo-panel');
  let active = 'footprint'; // default to the first demo tab

  const render = () => {
    tabsWrap.innerHTML = '';
    platforms.forEach((p) => {
      const btn = el(`<button type="button" class="demo-tab${p.id === active ? ' demo-tab--active' : ''}">${demoTabLabels[p.id]}</button>`);
      btn.addEventListener('click', () => {
        active = p.id;
        render();
      });
      tabsWrap.appendChild(btn);
    });

    const current = platforms.find((p) => p.id === active);
    panel.innerHTML = '';
    panel.appendChild(
      el(`<div class="demo-head">
        <div class="demo-head__tag">${current.tag}</div>
        <h3>${current.title}</h3>
        <p>${current.short}</p>
      </div>`)
    );
    panel.appendChild(current.secure ? secureGate(current) : iframeFrame(current.url, current.title));
    refreshIcons();
  };
  render();
}

/* ----------------------------- Contact form ----------------------------- */
function initContactForm() {
  const form = $('#contact-form');
  const success = $('#form-success');
  let timer;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    success.classList.remove('hidden');
    clearTimeout(timer);
    timer = setTimeout(() => {
      success.classList.add('hidden');
      form.reset();
    }, 3500);
  });
}

/* ----------------------------- Leaflet map ----------------------------- */
// Uzma Group offices & operational bases across Southeast Asia.
const mapPins = [
  { name: 'Uzma Tower, Damansara Perdana, Petaling Jaya, Selangor', type: 'Ibu Pejabat (HQ)', coords: [3.1579, 101.6127] },
  { name: 'UZMA House, Fraser Business Park, Kuala Lumpur', type: 'Bekas HQ / Corporate Office', coords: [3.1299, 101.7181] },
  { name: 'Uzma Lab, Temasya Industrial Park, Shah Alam', type: 'Laboratory / Testing Facility', coords: [3.0918, 101.5588] },
  { name: 'Kemaman Supply Base (KSB), Terengganu', type: 'Warehouse / Wireline / Operations', coords: [4.2446, 103.4498] },
  { name: 'Kemaman Office, Terengganu', type: 'Well Services', coords: [4.233, 103.448] },
  { name: 'Labuan', type: 'Offshore Operations Base', coords: [5.2767, 115.2417] },
  { name: 'Miri, Sarawak', type: 'Regional Office', coords: [4.3995, 113.9914] },
  { name: 'Kota Kinabalu, Sabah', type: 'Regional Operations', coords: [5.9804, 116.0735] },
  { name: 'Kuala Muda Solar Farm, Kedah', type: 'Renewable Energy / Solar', coords: [5.641, 100.49] },
  { name: 'Bangkok, Thailand (H-Cape Biz Sector)', type: 'Thailand HQ', coords: [13.7177, 100.6923] },
  { name: 'Rayong, Thailand', type: 'Artificial Lift Operations', coords: [12.6814, 101.2816] },
  { name: 'Songkhla, Thailand', type: 'Operations', coords: [7.2, 100.595] },
  { name: 'Lan Krabue, Kamphaeng Phet, Thailand', type: 'Operations', coords: [16.6, 99.85] },
  { name: 'Tangerang Selatan, Banten, Indonesia', type: 'Indonesia HQ', coords: [-6.3347, 106.6754] },
  { name: 'Carmona, Cavite, Philippines', type: 'Philippines HQ', coords: [14.3134, 121.0529] },
];
function initMap() {
  if (typeof L === 'undefined' || !$('#map')) return;
  const icon = L.icon({
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });
  // scrollWheelZoom: zoom with the mouse wheel.
  const map = L.map('map', { scrollWheelZoom: true });
  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>',
  }).addTo(map);
  mapPins.forEach((p) => {
    const [lat, lng] = p.coords;
    const gmaps = `https://www.google.com/maps?q=${lat},${lng}`;
    L.circleMarker(p.coords, { radius: 12, color: '#e26f3a', weight: 1, fillColor: '#7c4109', fillOpacity: 0.18 }).addTo(map);
    L.marker(p.coords, { icon }).addTo(map).bindPopup(
      `<strong>${p.name}</strong><br>` +
        `<span style="color:#e26f3a">${p.type}</span><br>` +
        `<span style="color:#9a948c;font-size:11px">${lat.toFixed(4)}, ${lng.toFixed(4)}</span><br>` +
        `<a href="${gmaps}" target="_blank" rel="noopener noreferrer" style="color:#e26f3a;font-size:12px;font-weight:600">View on Google Maps ↗</a>`,
      { maxWidth: 240 }
    );
  });
  // Auto-fit the view to show every location.
  map.fitBounds(mapPins.map((p) => p.coords), { padding: [30, 30] });

  // Enlarge (fullscreen) button — Leaflet must recalc its size after a resize.
  const wrap = $('#map').closest('.map-wrap');
  const btn = $('#map-fs');
  if (btn && wrap) {
    btn.addEventListener('click', () => toggleFullscreen(wrap));
    document.addEventListener('fullscreenchange', () => setTimeout(() => map.invalidateSize(), 120));
  }
}

/* ----------------------------- Hero live satellite map (PMTiles) ----------------------------- */
// Renders the raster PNG satellite archive (Kuantan) straight from S3 using
// PMTiles range requests + a tiny custom Leaflet grid layer.
const HERO_PMTILES = 'https://digitalearthbasemap.s3.ap-southeast-1.amazonaws.com/kuantan1.pmtiles';
const KUANTAN_BOUNDS = [[3.68953, 103.253], [3.8887, 103.361]];
function initHeroMap() {
  if (typeof L === 'undefined' || !$('#hero-map')) return;
  const bounds = L.latLngBounds(KUANTAN_BOUNDS);
  const map = L.map('hero-map', {
    zoomControl: false,
    scrollWheelZoom: false,
    minZoom: 8,
    maxZoom: 18,
    maxBounds: bounds.pad(0.6),
    attributionControl: true,
  });
  map.attributionControl.setPrefix(false);

  // Reliable satellite base — Esri World Imagery loads as plain image tiles
  // (no CORS handshake), so it works on any origin / GitHub Pages.
  L.tileLayer(
    'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    { maxZoom: 19, attribution: 'Imagery © Esri · Uzma Digital Earth' }
  ).addTo(map);

  // Open zoomed straight in to level 15 over Kuantan.
  map.setView(bounds.getCenter(), 15);
  L.control.zoom({ position: 'bottomright' }).addTo(map);

  // Try to overlay the exact UzmaSat PMTiles archive on top. This only renders
  // where the S3 bucket's CORS allowlist includes the current origin
  // (localhost + vision.uzmadigitalearth.app today). If the header fetch is
  // blocked, we silently keep the Esri base — no broken tiles, no black box.
  if (typeof pmtiles !== 'undefined') {
    const archive = new pmtiles.PMTiles(HERO_PMTILES);
    archive
      .getHeader()
      .then(() => {
        const PMLayer = L.GridLayer.extend({
          createTile(coords, done) {
            const img = document.createElement('img');
            img.alt = '';
            archive
              .getZxy(coords.z, coords.x, coords.y)
              .then((res) => {
                if (!res || !res.data) { done(null, img); return; }
                const url = URL.createObjectURL(new Blob([res.data]));
                img.onload = () => { URL.revokeObjectURL(url); done(null, img); };
                img.onerror = () => { URL.revokeObjectURL(url); done(null, img); };
                img.src = url;
              })
              .catch((err) => done(err, img));
            return img;
          },
        });
        new PMLayer({ minZoom: 8, maxZoom: 18, bounds, attribution: 'UzmaSat-1 · Digital Earth' }).addTo(map);
      })
      .catch(() => {/* origin not in S3 CORS allowlist — Esri base stays */});
  }

  const coordsEl = $('#hero-map-coords');
  const fmt = (n, pos, neg) => `${Math.abs(n).toFixed(3)}°${n >= 0 ? pos : neg}`;
  const updateCoords = () => {
    if (!coordsEl) return;
    const c = map.getCenter();
    coordsEl.textContent = `${fmt(c.lat, 'N', 'S')} · ${fmt(c.lng, 'E', 'W')}`;
  };
  map.on('move', updateCoords);
  updateCoords();

}

/* ----------------------------- Hero parallax (subtle) ----------------------------- */
function initHeroParallax() {
  const sat = $('.hero-sat');
  if (!sat) return;
  const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;
  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const y = Math.min(window.scrollY, 700);
      sat.style.translate = `0 ${y * 0.12}px`;
      ticking = false;
    });
  };
  window.addEventListener('scroll', onScroll, { passive: true });
}

/* ----------------------------- Scroll reveal ----------------------------- */
function initReveal() {
  const nodes = document.querySelectorAll('.reveal, .counter');
  // Fallback: if the browser lacks IntersectionObserver, just show everything.
  if (!('IntersectionObserver' in window)) {
    nodes.forEach((n) => {
      n.classList.add('is-visible');
      if (n.classList.contains('counter')) animateCounter(n);
    });
    return;
  }
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        if (entry.target.classList.contains('counter')) animateCounter(entry.target);
        obs.unobserve(entry.target);
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
  );
  nodes.forEach((node) => observer.observe(node));
}

/* ----------------------------- Hash router (home vs demo page) ----------------------------- */
function renderDemoPage(id) {
  const platform = platforms.find((p) => p.id === id);
  const page = $('#page-demo');
  page.innerHTML = '';

  if (!platform) {
    page.appendChild(
      el(`<div class="container" style="padding-block:8rem;text-align:center">
        <h1 class="heading">Demo not found</h1>
        <p class="muted" style="margin-top:0.75rem">The demo you're looking for doesn't exist.</p>
        <a href="#" data-jump="home" class="btn btn--secondary" style="margin-top:1.5rem"><i data-lucide="arrow-left"></i> Back home</a>
      </div>`)
    );
    refreshIcons();
    return;
  }

  const features = platform.features
    .map(
      (f) => `<div class="glass demo-feature">
        <div class="demo-feature__label">Feature</div>
        <div class="demo-feature__value">${f}</div>
      </div>`
    )
    .join('');

  const section = el(`<section class="section" style="padding-top:7rem">
    <div class="container">
      <a href="#" data-jump="home" class="back-link"><i data-lucide="arrow-left"></i> Back to portal</a>
      <div class="demo-page__head">
        <div class="demo-page__title">
          <span class="badge badge--lg ${platform.accent}"><i data-lucide="${platform.icon}"></i></span>
          <div>
            <span class="demo-head__tag">${platform.tag}</span>
            <h1>${platform.title}</h1>
            <p>${platform.description}</p>
          </div>
        </div>
        ${platform.secure ? '' : `<button type="button" data-frame-max class="btn btn--secondary">
          <i data-lucide="maximize"></i> Enlarge
        </button>`}
      </div>
      <div style="margin-top:2rem" data-frame></div>
      <div class="demo-features">${features}</div>
    </div>
  </section>`);

  const frame = platform.secure
    ? secureGate(platform, 'min(85vh, 820px)')
    : iframeFrame(platform.url, platform.title, 'min(85vh, 820px)');
  section.querySelector('[data-frame]').appendChild(frame);
  const maxBtn = section.querySelector('[data-frame-max]');
  if (maxBtn) maxBtn.addEventListener('click', () => toggleFullscreen(frame));
  page.appendChild(section);
  refreshIcons();
}

function handleRoute() {
  const home = $('#page-home');
  const demo = $('#page-demo');
  const match = location.hash.match(/^#\/demos\/(.+)$/);

  if (match) {
    home.classList.add('hidden');
    demo.classList.remove('hidden');
    renderDemoPage(match[1]);
    window.scrollTo(0, 0);
  } else {
    demo.classList.add('hidden');
    demo.innerHTML = '';
    home.classList.remove('hidden');
  }
}

/* ----------------------------- HTML includes ----------------------------- */
// Replaces every <div data-include="partials/x.html"></div> with the contents
// of that file. Needs a local server (Live Server) — fetch() is blocked on
// file://, so a double-clicked page would stay blank.
async function loadIncludes() {
  const nodes = Array.from(document.querySelectorAll('[data-include]'));
  await Promise.all(
    nodes.map(async (node) => {
      const url = node.getAttribute('data-include');
      try {
        // ?v= busts any stale browser cache; no-store avoids re-caching.
        const res = await fetch(`${url}?v=${Date.now()}`, { cache: 'no-store' });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const html = await res.text();
        // Parse via <template> so inline SVG and all siblings are kept intact.
        const tpl = document.createElement('template');
        tpl.innerHTML = html;
        node.replaceWith(tpl.content);
      } catch (err) {
        console.error(`Could not load ${url}:`, err);
        node.replaceWith(document.createComment(`failed to load ${url} (are you using a local server?)`));
      }
    })
  );
}

/* ----------------------------- Boot ----------------------------- */
// Run each step in isolation: if one section's partial is missing or a step
// throws, the others (icons, animations, nav…) still run instead of the whole
// page going blank.
function safe(label, fn) {
  try {
    fn();
  } catch (err) {
    console.error(`[init:${label}] ${err && err.message ? err.message : err}`, err);
  }
}

function setFooterYear() {
  const node = $('#footer-copy');
  if (node) node.textContent = `© ${new Date().getFullYear()} Geospatial AI Sdn Bhd · An Uzma Group company. All rights reserved.`;
}

function buildFooterConnect() {
  const ul = $('#footer-connect');
  if (!ul) return;
  socialLinks.forEach((s) => {
    ul.appendChild(
      el(`<li><a href="${s.url}" target="_blank" rel="noopener noreferrer" class="footer-link">${s.svg} ${s.label}</a></li>`)
    );
  });
  ul.appendChild(
    el('<li><a href="#technology" data-jump="technology" class="footer-link"><i data-lucide="book-open"></i> Documentation</a></li>')
  );
}

function init() {
  safe('footer', setFooterYear);
  safe('footerConnect', buildFooterConnect);
  safe('theme', initTheme);
  safe('nav', initNav);
  safe('globe', buildGlobe);
  safe('heroStats', buildHeroStats);
  safe('solutions', buildSolutions);
  safe('metrics', buildMetrics);
  safe('technology', buildTechnology);
  safe('applications', buildApplications);
  safe('demos', buildDemos);
  safe('contactForm', initContactForm);
  safe('map', initMap);
  safe('heroMap', initHeroMap);
  safe('icons', refreshIcons);
  safe('reveal', initReveal);
  window.addEventListener('hashchange', handleRoute);
  safe('route', handleRoute);
}

async function boot() {
  document.documentElement.classList.add('js'); // enables the reveal animations
  await loadIncludes(); // pull in the /partials HTML first…
  init(); // …then wire everything up
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}
