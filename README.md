# Geospatial AI Sdn Bhd — Official Website

A modern, responsive React + Vite website for **Geospatial AI Sdn Bhd**, an
Uzma Group company. The site showcases five AI-powered geospatial
intelligence platforms and is themed using the Uzma brand palette
(`#E26F3A` orange · `#7C4109` brown · `#656567` gray).

The site showcases:

1. **Land Use & Building Footprint Detection** — https://uzma-geospatial-ai.github.io/building_footprint_demo/#
2. **Malaysia–Thailand Border Visualization** — https://zh4rif.github.io/MY_TH_BEZ/
3. **MSPO Sustainability Monitoring** — https://mspo.uzmadigitalearth.app/
4. **PalmGrove** — https://palmgrove.uzmadigitalearth.app/
5. **SpaceIn** — https://iot.uzmadigitalearth.app/

Designed as an **Enterprise GIS / Modern SaaS dashboard** with dark-mode
satellite imagery, animated Framer-Motion transitions, and Leaflet map previews
— all themed to the Uzma Group brand identity.

---

## Tech stack

- **React 18 + Vite 5** — fast dev server & build
- **Tailwind CSS 3** — design system + dark/light theme
- **Framer Motion** — page, scroll, and hero animations
- **Leaflet + react-leaflet** — interactive map preview
- **lucide-react** — icon set
- **react-router-dom** — `/` landing + `/demos/:id` per-platform pages

---

## Folder structure

```
showcase/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── vercel.json
├── netlify.toml
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── context/
    │   └── ThemeContext.jsx
    ├── data/
    │   └── platforms.js
    ├── pages/
    │   ├── HomePage.jsx
    │   ├── DemoPage.jsx
    │   └── NotFoundPage.jsx
    └── components/
        ├── Navbar.jsx
        ├── ThemeToggle.jsx
        ├── Hero.jsx
        ├── AnimatedGlobe.jsx
        ├── Solutions.jsx
        ├── IframeFrame.jsx
        ├── InteractiveDemo.jsx
        ├── Technology.jsx
        ├── Applications.jsx
        ├── DashboardMetrics.jsx
        ├── MapPreview.jsx
        ├── Contact.jsx
        └── Footer.jsx
```

---

## Local development

```bash
# 1. install
npm install

# 2. start the dev server
npm run dev
# → http://localhost:5173

# 3. production build
npm run build
npm run preview
```

> Node 18+ recommended.

---

## Sections

| # | Section            | Component               | Anchor          |
|---|--------------------|-------------------------|-----------------|
| 1 | Hero / globe       | `Hero.jsx`              | `#home`         |
| 2 | Solutions cards    | `Solutions.jsx`         | `#solutions`    |
| 3 | Dashboard metrics  | `DashboardMetrics.jsx`  | —               |
| 4 | Technology pipeline| `Technology.jsx`        | `#technology`   |
| 5 | Applications grid  | `Applications.jsx`      | `#applications` |
| 6 | Interactive demos  | `InteractiveDemo.jsx`   | `#demos`        |
| 7 | Contact + map      | `Contact.jsx`           | `#contact`      |

Each solution card opens an embedded iframe at `/demos/<id>` (or the Live Demos
tab inside the home page).

---

## Theming

Dark mode is the default. A toggle in the navbar persists the choice to
`localStorage`. The Tailwind config exposes three Uzma brand palettes:

| Token         | Anchor   | Role                                |
|---------------|----------|-------------------------------------|
| `uzmaorange-*` | `#E26F3A` | Primary accent — CTAs, highlights   |
| `uzmabrown-*`  | `#7C4109` | Secondary depth — gradients, shadows |
| `uzmagray-*`   | `#656567` | Neutral surfaces & supporting text  |

Neutral text uses Tailwind's `stone-*` scale (a warm gray that aligns with
`#656567`) instead of the cooler `slate-*` scale.

---

## Deployment

### Vercel

```bash
npm i -g vercel
vercel             # follow prompts, framework auto-detected as Vite
vercel --prod
```

Or import the repository in the Vercel dashboard — `vercel.json` configures
the build command (`npm run build`), output directory (`dist`), and a SPA
rewrite so React Router routes (`/demos/:id`) work on direct navigation.

### Netlify

```bash
npm i -g netlify-cli
netlify deploy --build           # preview
netlify deploy --prod --build    # production
```

Or connect the repo in the Netlify UI. `netlify.toml` handles the build
settings and SPA history-mode redirect (`/* → /index.html`).

### Static hosts (GitHub Pages, S3, Cloudflare Pages)

```bash
npm run build
# upload the contents of ./dist
```

For GitHub Pages add a `404.html` copy of `index.html` so client-side routing
works on refresh.

---

## Optional backend (FastAPI + PostGIS)

The contact form's `handleSubmit` is a stub. To wire it up to FastAPI:

```python
# main.py
from fastapi import FastAPI
from pydantic import BaseModel, EmailStr

app = FastAPI()

class Lead(BaseModel):
    name: str
    organization: str | None = None
    email: EmailStr
    message: str

@app.post('/api/leads')
def create_lead(lead: Lead):
    # persist to PostgreSQL/PostGIS, send notification, etc.
    return {'ok': True}
```

Then in `src/components/Contact.jsx`:

```js
await fetch(import.meta.env.VITE_API_URL + '/api/leads', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),
});
```

Add `VITE_API_URL=https://api.your-domain.com` to a `.env.local`.

---

## Credits

- Satellite hero image — [Unsplash](https://unsplash.com/photos/blue-and-white-planet-display-pAKCx4y2H6Q)
- Basemap tiles — [CARTO](https://carto.com/) dark theme via OpenStreetMap
- Icons — [Lucide](https://lucide.dev/)
