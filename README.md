# Atlas Bistro — Premium Restaurant Website

A fictional luxury restaurant website built as a **portfolio demonstration**, not as a real restaurant business.

![Stack](https://img.shields.io/badge/React-18-61DAFB) ![Vite](https://img.shields.io/badge/Vite-6-646CFF) ![Tailwind](https://img.shields.io/badge/Tailwind-3-38B2AC)

## Features

- Premium, responsive design (black / ivory / brushed gold).
- French / English toggle; user's choice is saved locally.
- Interactive menu filtering (all / starters / mains / desserts).
- Responsive mobile navigation.
- Gallery lightbox that closes by button, backdrop click, or Escape.
- Reservation form with validation, future dates, time slots, guest count, and clear **demo-only** notice.
- Basic accessibility: skip link, keyboard focus states, semantic headings, input labels, reduced-motion support.
- SEO basics: title, description, favicon, Open Graph metadata.
- Separate content, data, and reusable React components.
- Pure validation utility with Node tests.

## Quick start

Requirements: **Node.js 20.19+** (22 recommended), npm.

```bash
npm install
npm run dev
```

Open the local address printed by Vite (usually `http://localhost:5173`).

To test the form logic:

```bash
npm test
```

Build production files:

```bash
npm run build
npm run preview
```

## Project organization

```text
atlas-bistro/
├─ public/favicon.svg
├─ src/
│  ├─ components/
│  │  ├─ layout/Header.jsx, Footer.jsx
│  │  ├─ sections/Hero.jsx, Story.jsx, Menu.jsx,
│  │  │  Experience.jsx, Gallery.jsx, Quote.jsx, Reservation.jsx
│  │  └─ ui/Icons.jsx, SectionHeading.jsx
│  ├─ data/content.js       # French / English copy
│  ├─ data/menu.js          # Demo dishes and prices
│  ├─ data/images.js        # Demo photo links
│  ├─ utils/reservation.js  # Validation (no backend)
│  ├─ App.jsx
│  ├─ main.jsx
│  └─ styles.css            # Tailwind + design system
├─ tests/reservation.test.js
├─ index.html
├─ package.json
├─ vite.config.js
├─ tailwind.config.js
└─ postcss.config.js
```

## Design system

| Token | Value | Meaning |
|---|---|---|
| Ink | `#0D0E0B` | Main dark background |
| Charcoal | `#171913` | Secondary surfaces |
| Ivory | `#EFE9DD` | Warm light sections / text |
| Gold | `#C6A46A` | Accent and CTAs |
| Gold-light | `#E4CA95` | Accessible light accent |
| Body | Manrope | UI and paragraphs |
| Display | Cormorant Garamond | Restaurant editorial headings |

## Important limitations

1. **The restaurant, menu, prices, address and testimonials/phrases are fictional**. Use this as a *demo project*, not as a real restaurant website.
2. **No reservation is sent anywhere**. No backend, emails, payments or persistent bookings. A successful submission only validates input and displays a demo confirmation.
3. **Photos are loaded at runtime from Unsplash CDN**, so internet access is required. Replace these with properly licensed/original client photos before delivering a commercial site. Confirm each asset's license and suitability.
4. No analytics, legal notices or cookie consent are implemented. Add them as required for a real business.
5. Build dependencies require `npm install` the first time; do not commit `node_modules`.

## Deployment to Vercel or Netlify

- Create a GitHub repo, push the project.
- Import that repo into Vercel or Netlify.
- Build command: `npm run build`.
- Publish directory: `dist`.
- No environment variables needed for this demo.
- Test the mobile version and all links after deployment.

## Next steps for a stronger portfolio

- Replace all placeholder stock photos with consistent visual assets.
- Add a real backend (.NET Web API) and a database if you want live reservation management.
- Add server-side validation, email notifications, and rate limiting before collecting real reservations.
- Add automated E2E checks, Lighthouse performance checks and basic analytics (with compliant consent if needed).

## Suggested Upwork portfolio title

**Atlas Bistro — Luxury Restaurant Website | React, Tailwind CSS**

Suggested description: "Designed and developed a fictional fine-dining website concept with responsive layouts, bilingual content, a filterable menu, an image gallery, and a sample reservation form. Built with reusable React components and a premium black, ivory and gold visual identity. Personal portfolio project; not a commissioned client project."
