# Vouch Landing Page

A stunning, futuristic glassmorphism landing page for Vouch — an automated HRMS & Compliance platform for CAs and Auditors.

## Features

- **Dark/Light Mode** — Seamless theme switching with persistent preference
- **Scroll Animations** — Framer Motion powered scroll-triggered and scroll-linked animations
- **3D Glassmorphism** — Interactive 3D card tilts, floating orbs, glass effects
- **Working Navigation** — All pages functional with React Router
- **Config Page** — Admin panel at `/config` to manage all redirects, contact info, social links
- **Interactive Mumbai Audit Map** — Leaflet-powered map with clickable markers, filters, and add-location functionality
- **FAQ with Categories** — Filterable FAQ with accordion animations
- **Journey Timeline** — Animated company timeline with milestones
- **Audit Types** — 6 different audit types with detailed descriptions
- **Responsive** — Mobile-first design, works on all devices
- **Vercel Ready** — One-click deployment

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Landing page with all sections |
| Pricing | `/pricing` | 3-tier pricing plans |
| About | `/about` | Company info, mission, vision, team |
| Contact | `/contact` | Contact form + info cards |
| FAQ | `/faq` | Filterable accordion FAQ |
| Journey | `/journey` | Animated company timeline |
| Audit Map | `/audit-map` | Interactive Mumbai map with Leaflet |
| Config | `/config` | Admin config panel |
| Security | `/security` | Security practices |
| Enterprise | `/enterprise` | Enterprise solutions |
| Blog | `/blog` | Blog articles |
| Careers | `/careers` | Open positions |
| Privacy | `/privacy` | Privacy policy |
| Terms | `/terms` | Terms of service |
| GST | `/gst` | GST compliance info |
| Data Localization | `/data-localization` | Data residency info |

## Tech Stack

- React 18 + Vite
- React Router v6
- Framer Motion (animations)
- Tailwind CSS
- Lucide React (icons)
- Leaflet + React-Leaflet (map)

## Getting Started

```bash
npm install
npm run dev
```

## Build for Production

```bash
npm run build
```

## Deploy to Vercel

1. Push to GitHub
2. Import to Vercel
3. Deploy!

Or use Vercel CLI:
```bash
vercel --prod
```

## Configuration

Visit `/config` to manage:
- Brand name, tagline, description
- Contact email, phone, address
- Social media links
- External redirects (signup, demo, docs, etc.)

All changes are reactive and update across the site instantly.

## Map Features

The Audit Map (`/audit-map`) allows you to:
- View all audit locations across Mumbai
- Filter by audit type and status
- Click anywhere on the map to add new locations
- See location details in popup markers
- View stats for total/completed/in-progress locations
