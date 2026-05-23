# The AfroKreate Academy — Website

Premium, uncluttered marketing website for **The AfroKreate Academy**, built as a static
site for **GitHub Pages** and Meta business verification.

- **Primary channel:** WhatsApp Business — **+256 752 195995** → [https://wa.me/256752195995](https://wa.me/256752195995)
- **Stack:** React 19 · Vite · Tailwind CSS 3 · GSAP 3 (ScrollTrigger) · React Router (HashRouter) · Lucide React
- **Routes:** `/` · `/programs` · `/about` · `/contact`

> The Navigator WhatsApp bot, admin dashboard, and any backend code live in a **separate**
> repository. This repo is a static site only.

---

## Local development

```bash
npm install
npm run dev
```

Visit `http://localhost:5173/afrokreate-website/`. The trailing path matches the
`base` set in `vite.config.js`.

### Build + preview

```bash
npm run build
npm run preview
```

---

## Deploy to GitHub Pages

The repository name **must** match the `base` in `vite.config.js`. The default in this
project is `/afrokreate-website/`. Update `vite.config.js` if you choose a different
repo name.

### One-time setup

1. Create a new **public** repository on GitHub named `afrokreate-website`.
2. From this project folder:

   ```bash
   git init
   git add .
   git commit -m "Initial AfroKreate Academy website"
   git branch -M main
   git remote add origin https://github.com/<YOUR_USERNAME>/afrokreate-website.git
   git push -u origin main
   ```

3. Confirm `base` in `vite.config.js` is `'/afrokreate-website/'`.
4. First deploy:

   ```bash
   npm install
   npm run deploy
   ```

   This runs `vite build` and pushes the `dist/` folder to a `gh-pages` branch via the
   `gh-pages` package.

5. On GitHub: **Settings → Pages → Source → Deploy from branch → Branch: `gh-pages`,
   folder `/ (root)` → Save**.
6. Wait ~1–3 minutes. Site goes live at:

   ```
   https://<YOUR_USERNAME>.github.io/afrokreate-website/
   ```

### Every update after that

```bash
git add .
git commit -m "Describe your change"
git push origin main
npm run deploy
```

---

## Pre-Meta-verification checklist

Before sending the URL to Meta, walk through this on a real device:

- [ ] Homepage loads over **HTTPS** (padlock visible).
- [ ] Contact page shows the full **Kampala address**, **both emails**, and **phone**.
- [ ] About page explains what the academy does (not "coming soon").
- [ ] All nav links work — HashRouter URLs look like `.../afrokreate-website/#/programs` (this is normal and fine for Meta).
- [ ] Mobile layout is readable and the hamburger menu opens cleanly.
- [ ] **WhatsApp** buttons open `https://wa.me/256752195995` — on phone they jump straight into WhatsApp; on desktop they open WhatsApp Web.
- [ ] Floating WhatsApp button is visible bottom-right on every page.

### URL to give Meta

```
https://<YOUR_USERNAME>.github.io/afrokreate-website/
```

Use the homepage. Meta may also crawl Contact / About if linked from the nav (they are).

---

## Custom domain (later, optional)

1. Buy the domain (e.g. `afrokreateacademy.org`).
2. Add a `public/CNAME` file containing only the domain (e.g. `www.afrokreateacademy.org`).
3. Change `vite.config.js` `base` to `'/'`.
4. Update DNS: CNAME `www` → `<YOUR_USERNAME>.github.io`.
5. GitHub → **Settings → Pages → Custom domain** → enter the domain → enforce HTTPS.
6. Update Meta verification with the new URL.

---

## Project structure

```
afrokreate-website/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── home/                 # Hero, ProblemBand, Features, Manifesto, ProgramsTeaser, Testimonials, CTABand
│   │   ├── Accordion.jsx
│   │   ├── FloatingWhatsApp.jsx
│   │   ├── Footer.jsx
│   │   ├── Logo.jsx
│   │   ├── Navbar.jsx
│   │   ├── PageHeader.jsx
│   │   ├── ScrollToTop.jsx
│   │   └── WhatsAppIcon.jsx
│   ├── constants/
│   │   └── contact.js            # Single source of truth for WhatsApp / phone / email / address
│   ├── hooks/
│   │   └── useReveal.js          # GSAP reveal helper (scroll-triggered)
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Programs.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

---

## Editing brand-critical content

Almost everything is content-driven from a few obvious places:

- **Contact details** (WhatsApp, phone, email, address) — `src/constants/contact.js`.
  Change them once and every page updates.
- **Testimonials** — `src/components/home/Testimonials.jsx` (sample names noted in
  comments; replace with real learner quotes when collected).
- **Leadership / co-founders** — `src/pages/About.jsx`.
- **Programmes copy** — `src/pages/Programs.jsx`.

---

## Wiring a real form backend (optional)

The Contact form falls back to a `mailto:` link, so the site works without any backend.
To wire a real submission endpoint (recommended on production):

1. Create a free [Formspree](https://formspree.io/) form (or Web3Forms, etc.).
2. In `src/pages/Contact.jsx`, find the `<form>` inside `ContactForm` and replace:

   ```jsx
   <form onSubmit={onSubmit} ...>
   ```

   with:

   ```jsx
   <form action="https://formspree.io/f/<your-id>" method="POST" ...>
   ```

3. Remove the `onSubmit` handler. Submissions will hit Formspree directly.

---

## License

© The AfroKreate Academy. All rights reserved.
