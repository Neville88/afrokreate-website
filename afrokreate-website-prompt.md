# AfroKreate Academy — Website Build Prompt

> **Use this in a new Cursor project** (`AfroKreate-Website`), separate from the Navigator bot repo.  
> Derived from the cinematic builder spec, tuned for AfroKreate’s real brand, PDF mockup content, and **GitHub Pages** hosting.

---

## Role

Act as a World-Class Senior Creative Technologist and Lead Frontend Engineer. Build a **premium, uncluttered, cinematic** marketing site for **The AfroKreate Academy** — not a generic NGO template, not an overcrowded brochure.

Every scroll should feel intentional. Animations are **weighted and subtle** — never flashy for its own sake. Eradicate generic AI patterns (purple gradients, “Revolutionize your…”, stock startup copy, 12 sections on one page).

**Do not ask the user four discovery questions.** All brand answers are below. **Build.**

---

## Brand Brief (AUTHORITATIVE)

| Field | Value |
|-------|--------|
| **Legal / brand name** | The AfroKreate Academy |
| **One-line purpose** | Equipping Africa’s youth with creative and entrepreneurial skills to thrive in work, business, and community. |
| **Region** | East Africa (Uganda HQ; pan-African vision) |
| **Audience** | Youth 16–30, parents, partners, donors, Meta business verification reviewers |
| **Primary CTA** | **Chat on WhatsApp** — opens AfroKreate Business WhatsApp (see below) |
| **Secondary CTA** | **Apply for admission** → Contact page form or WhatsApp |
| **Tertiary CTA** | **Donate** (nav, subtle) |

### Three value propositions (Features section)

1. **Creative skills development** — Design, digital art, music, film, and hands-on craft for Africa’s creative industries.  
2. **Entrepreneurship focus** — Practical business knowledge to turn ideas into sustainable ventures.  
3. **Youth-centered learning** — Mentorship, cohort community, and real-world experience — not lecture-hall theory alone.

### Two flagship programmes (Protocol / Programs — not pricing)

1. **Youth Mentorship Programme** — 12-month mentorship & coaching: cohort meetings with mentors, peer sessions, 1:1 guidance, entrepreneurial pathways.  
2. **Business Incubation Hub** — For mentorship graduates; startup support with Corp Ops Development Consultants; ILO Start & Improve Your Business (SIYB) framework (GYB → SYB → IYB → EYB). Summarize on site; full detail on Programs section only.

### Problem stats (one row, three cards — scannable)

- **7 million** — Young graduates Africa produces yearly; only ~3 million jobs.  
- **3 years** — Average time for a university graduate in Africa to land first employment.  
- **45%** — Employers who report a skills gap in young applicants.

### Philosophy contrast (Manifesto section)

- **Most education** focuses on: degrees and theory without clear paths to income.  
- **We focus on:** **practical skills**, entrepreneurship, and mentorship that lead to jobs or businesses youth build themselves.

### Leadership (compact — home shows teaser only)

- **Feaona Nakishero** — Head of The AfroKreate Academy (short welcome; “Contact” → contact page).  
- **Co-founders (About page):** Enoch Joel Kazibwe (Co-Founder & Team Leader), Allan G. Nkonge (Finance & Strategic Planning), David Clemy Kawooya (Social Entrepreneur & Mentor). One-line bios only on About; no essay-length blocks on home.

### Mission & values (About page)

- **Mission:** A world where every young person in Africa is equipped with critical work-readiness skills as a gateway to meaningful and decent work.  
- **Values:** Accountability, Passion, Creativity, Inclusivity, Resilience, Teamwork — one sentence each, icon optional.

### Contact (footer + Contact page — required for Meta)

- **Address:** Impresoras House, Plot 1852 Crane Road, Kazinga, Bweyogerere, Kampala Industrial Business Park, Namanve, Uganda  
- **Email:** afrokreateacademy@gmail.com · info@corpopsdevtconsult.com  
- **Phone (calls):** +256 772 195995  
- **WhatsApp Business:** +256 752 195995 — **primary channel for youth to reach the academy and Navigator bot**

### WhatsApp Business (MANDATORY — implement everywhere below)

Use these **exact values** in a shared constant (e.g. `src/constants/contact.js`):

| Constant | Value |
|----------|--------|
| `WHATSAPP_E164` | `256752195995` (no `+`, no spaces — for `wa.me`) |
| `WHATSAPP_DISPLAY` | `+256 752 195995` |
| `WHATSAPP_URL` | `https://wa.me/256752195995` |
| `WHATSAPP_URL_WITH_MESSAGE` | `https://wa.me/256752195995?text=Hello%20The%20AfroKreate%20Academy%2C%20I%20would%20like%20to%20learn%20more.` |

**Rules**

- All WhatsApp buttons/links open in a **new tab** (`target="_blank"`, `rel="noopener noreferrer"`).
- Use the official WhatsApp green `#25D366` only for the WhatsApp icon / floating button — keep site palette navy/gold for everything else.
- Label buttons clearly: **“Chat on WhatsApp”** or **“Message us on WhatsApp”** (Lucide `MessageCircle` or simple WhatsApp SVG icon).
- This number connects learners to the **AfroKreate Navigator** on WhatsApp Business (pathways, mentorship info, JOIN/HELP). Do not use a broken or placeholder link.

**Where to place WhatsApp CTAs (visible but not cluttered)**

1. **Navbar** — outline or green-accent button: “WhatsApp” (desktop); include in mobile menu.  
2. **Hero** — secondary button beside Apply: **“Chat on WhatsApp”** → `WHATSAPP_URL_WITH_MESSAGE`.  
3. **CTA band** (home) — three actions: WhatsApp (primary green outline), Apply, Contact.  
4. **Programs page** — after programme descriptions: “Questions? Chat with us on WhatsApp.”  
5. **Contact page** — prominent card at top: WhatsApp number, one-click button, short line: *“Get instant guidance via our WhatsApp Navigator.”*  
6. **Footer** — clickable `+256 752 195995` → `WHATSAPP_URL`.  
7. **Floating action button (FAB)** — fixed bottom-right on all pages; WhatsApp icon; `aria-label="Chat on WhatsApp"`; subtle pulse on first visit only (optional, tasteful).

**Optional:** On small screens, FAB can hide when user scrolls down and reappear on scroll up — only if easy; otherwise always visible.

### Social proof

- Use: *“Trusted by learners across East Africa”* — **do not** claim “5000+” unless the owner confirms the number.  
- Testimonials: max **3** real-style cards on home; **no Lorem ipsum**. Use placeholder names only if owner has not supplied quotes yet — label as “Sample” in HTML comment.

### What NOT to build

- Admin dashboard, API, Supabase, bot logic (that lives in the **Navigator** repo).  
- Duplicate About sections from the old PDF (merge into one About page).  
- Pricing tiers (“Essential / Performance / Enterprise”) — this is an academy, not SaaS.  
- Dense SIYB course breakdown on the homepage (Programs page or expandable accordion only).  
- “System Operational” footer gimmick — replace with professional footer status: © year, legal, contact.

---

## Aesthetic Preset — **“AfroKreate Heritage”** (CUSTOM — use this, not A/B/C/D)

Bridge **East African heritage** with **modern editorial luxury** — think academy + atelier, not biotech clinic or brutalist control room.

| Token | Value |
|-------|--------|
| **Identity** | Warm, aspirational, credible — youth see themselves; parents and Meta see a real institution. |
| **Primary (navy)** | `#1A1A2E` |
| **Accent (gold)** | `#D4A017` |
| **Support (green)** | `#1B7A4E` — CTAs, success states, sparingly |
| **Background (cream)** | `#F5F0E8` |
| **Text** | `#1A1A1A` on cream; `#FAFAFA` on navy |
| **Typography** | Headings: **Outfit** (tight tracking). Drama / quotes: **Cormorant Garamond** italic. Body: **DM Sans**. Optional data labels: **IBM Plex Mono**. |
| **Image mood** | East African youth in workshops, mentorship, creative tools, entrepreneurship — diverse, dignified, natural light. Unsplash keywords: `african youth workshop`, `creative education africa`, `mentorship students`. |
| **Pattern** | Subtle African geometric border **only** on hero bottom band + footer top — not on every card. SVG or CSS, low opacity gold/navy. |
| **Hero line pattern** | “Invest in futures,” (Bold Sans) / “build communities.” (Massive Serif Italic) — or “Build your skills,” / “shape your future.” |

Align with the existing Navigator admin dashboard palette so the brand feels unified.

---

## Fixed Design System (from premium spec — KEEP)

### Visual texture
- Global CSS noise overlay (SVG `feTurbulence`, **~0.04 opacity**) on cream sections only — not on hero photo.  
- Border radius: `rounded-2xl` to `rounded-3xl` on cards; `rounded-full` on nav pill.

### Micro-interactions
- Buttons: magnetic hover `scale(1.03)`, `cubic-bezier(0.25, 0.46, 0.45, 0.94)`.  
- Primary CTA: gold gradient or solid gold on navy; hover slide layer optional.  
- Links: subtle `translateY(-1px)` on hover.

### Animation (GSAP + ScrollTrigger)
- `gsap.context()` in `useEffect`; always `ctx.revert()` on cleanup.  
- Easing: `power3.out` entrances, `power2.inOut` morphs.  
- Stagger: `0.08` text, `0.12` cards.  
- **Restraint:** max ~6 scroll-triggered scenes on the entire home page. No animation on every paragraph.

---

## Information Architecture — **ANTI-CONGESTION RULES**

**4 routes only** (React Router or multi-page Vite — your choice; prefer SPA with hash or path routes):

| Route | Purpose |
|-------|---------|
| `/` | Home — hero, problem stats, 3 features, 2 programme teasers, 3 testimonials, CTA band |
| `/programs` | Youth Mentorship + Incubation Hub (full copy, SIYB summary accordion) |
| `/about` | Mission, values, head’s message, leadership grid |
| `/contact` | Address, emails, phone, FAQ (5 questions), contact form (client-side only — Formspree-ready `action` comment) |

**Home page max sections: 7** (Nav, Hero, Problem, Features, Programs teaser, Testimonials, CTA + Footer).  
**No** sticky stacking 3 full-screen protocol cards on home — move stacking teaser to **Programs** page only (2 cards max) or replace with simple horizontal scroll.

---

## Component Architecture (ADAPTED — content fixed, structure flexible)

### A. Navbar — “Floating Island”
- Fixed centered pill; transparent over hero → cream/blur on scroll.  
- Links: Home, Programs, About, Contact.  
- CTAs: **WhatsApp** (green icon or outline), Donate (ghost), Apply (gold).

### B. Hero — “Opening Shot”
- `min-h-[90dvh]` (not always 100 — avoids mobile cramming).  
- Full-bleed youth photography + gradient `from-[#1A1A2E]/90 to-transparent`.  
- Bottom-left: eyebrow “BUILD YOUR SKILLS, SHAPE YOUR FUTURE”, headline pattern, 2-line subcopy, **two buttons**: primary **Chat on WhatsApp** (green), secondary **Apply** (gold), small trust line.  
- Right side (desktop): 3 short pillars (Creative / Entrepreneurship / Youth-centered) — **text only**, no extra cards.  
- GSAP stagger fade-up on load.

### C. Problem — “The Urgency” (dark band)
- Navy background, 3 stat cards with gold accent borders (subtle geometric corner).  
- One sentence intro; no wall of text.

### D. Features — “Three Pillars” (SIMPLIFIED from generic GEMINI)
Use **elegant static cards** with icon (Lucide), heading, 2 sentences, and **one subtle motion each** — not three heavy micro-UIs on one page:

1. Card A: gentle icon pulse or line-draw SVG (creative).  
2. Card B: typewriter **one line only** (entrepreneurship tagline), not a full fake terminal.  
3. Card C: simple hover lift + checklist reveal (youth-centered).

Avoid Diagnostic Shuffler + full Cursor Scheduler on home — too busy for an academy site.

### E. Philosophy — “Manifesto”
- Full-width navy; parallax texture at 15% opacity.  
- Two-line contrast (most education / we focus on).  
- Word or line fade-up on scroll.

### F. Programs Teaser — “Two Doors”
- Two large image cards side by side: Mentorship | Incubation Hub.  
- 80-word max each + “Learn more →” to `/programs`.  
- Third slim banner or inline link: **“Talk to us now — WhatsApp Navigator”** → `WHATSAPP_URL_WITH_MESSAGE` (connects youth to +256 752 195995).

### G. Testimonials
- 3 cards, cream background, stars, photo circle, quote, name + role.  
- No fourth card with placeholder text.

### H. CTA Band
- “Ready to take the next step?” + **WhatsApp** (primary) + Apply + Contact.  
- Cream or green-tinted background.

### I. Footer
- Navy, `rounded-t-[3rem]`, geometric top border.  
- Columns: Brand + tagline, Quick links, Contact block (full address for Meta, **WhatsApp link**), Social placeholders.  
- © 2026 The AfroKreate Academy.

### Programs page extras
- Sticky stacking **2** cards max (Mentorship + Hub) OR vertical timeline — pick one, not both.  
- SIYB: 4-step accordion (GYB, SYB, IYB, EYB) — collapsed by default.

### About page
- Mission + 6 values grid (2×3).  
- Head’s message: photo placeholder + Feaona quote (short).  
- Leadership: 3 co-founder cards.

### Contact page
- **Top:** WhatsApp hero card (large button, display number `+256 752 195995`, link to `WHATSAPP_URL_WITH_MESSAGE`).  
- Split below: left = contact info + FAQ accordion; right = form (Name, Email, Phone, Subject, Message).  
- `mailto:` fallback button if form backend not wired.

**FAQ must include:**

- *How do I reach AfroKreate quickly?* → Chat on WhatsApp at +256 752 195995 (button).  
- *What is The AfroKreate Academy?* — short academy description.  
- *Who can join?* — Youth seeking skills, direction, entrepreneurship support.  
- *Do I need a university degree?* — No; practical pathways and mentorship.  
- *What programmes do you offer?* — Youth Mentorship Programme + Business Incubation Hub (link to Programs).

---

## Technical Requirements

### Stack
- **React 19** + **Vite** + **Tailwind CSS v3.4** + **GSAP 3** (ScrollTrigger) + **Lucide React** + **React Router DOM**.  
- Fonts: Google Fonts links in `index.html` (Outfit, Cormorant Garamond, DM Sans).  
- Images: real Unsplash URLs matching image mood; `loading="lazy"` below fold.

### GitHub Pages hosting (MANDATORY)

**No server-side API** — static site only. Contact form: Formspree-ready markup, or `mailto:` fallback.

#### Vite config (set during build)

Repo name example: `afrokreate-website` → live URL: `https://<github-username>.github.io/afrokreate-website/`

```js
// vite.config.js
export default defineConfig({
  base: '/afrokreate-website/', // MUST match GitHub repo name exactly (leading + trailing slash)
  plugins: [react()],
});
```

```json
// package.json scripts
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "deploy": "vite build && npx gh-pages -d dist"
}
```

- Install **`gh-pages`** as a devDependency (`npm install -D gh-pages`).
- Use **`HashRouter`** from `react-router-dom` (not `BrowserRouter`) so routes like `/programs` work on GitHub Pages without server rewrite rules. URLs will look like `.../afrokreate-website/#/programs` — this is normal and fine for Meta verification.

#### README must include: “Deploy to GitHub Pages” (copy this section into project README)

**One-time setup**

1. Create a new **public** repository on GitHub named `afrokreate-website` (name must match `base` in `vite.config.js`).
2. In the website project folder:
   ```bash
   git init
   git add .
   git commit -m "Initial AfroKreate Academy website"
   git branch -M main
   git remote add origin https://github.com/<YOUR_USERNAME>/afrokreate-website.git
   git push -u origin main
   ```
3. Ensure `base` in `vite.config.js` is `/afrokreate-website/`.
4. First deploy:
   ```bash
   npm install
   npm run deploy
   ```
   This pushes the `dist/` folder to the **`gh-pages`** branch.

5. On GitHub: **Settings → Pages** → Source: **Deploy from branch** → Branch: **`gh-pages`** → folder **`/ (root)`** → Save.
6. Wait 1–3 minutes. Site live at: `https://<YOUR_USERNAME>.github.io/afrokreate-website/`

**Every update after that**

```bash
git add .
git commit -m "Describe your change"
git push origin main
npm run deploy
```

**Verify before sending URL to Meta**

- [ ] Homepage loads over **HTTPS** (padlock in browser).
- [ ] Contact page shows full **Kampala address**, **both emails**, **phone**.
- [ ] About page explains what the academy does (not “coming soon” only).
- [ ] All nav links work (HashRouter paths).
- [ ] Mobile layout readable.
- [ ] **WhatsApp** buttons open `https://wa.me/256752195995` on phone and desktop (desktop opens WhatsApp Web).

**URL to give Meta business verification**

```text
https://<YOUR_USERNAME>.github.io/afrokreate-website/
```

Use the **homepage** URL; Meta may also crawl Contact/About if linked from nav.

**Custom domain later (optional)**

1. Buy domain (e.g. `afrokreateacademy.org`).
2. Add `public/CNAME` file containing only the domain (e.g. `www.afrokreateacademy.org`).
3. Change `vite.config.js` `base` to `'/'`.
4. In domain DNS: CNAME `www` → `<username>.github.io`.
5. GitHub **Settings → Pages → Custom domain** → enter domain → enforce HTTPS.
6. Update Meta verification with the new URL.

### File structure
```
afrokreate-website/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/   (Navbar, Hero, Footer, …)
│   ├── pages/        (Home, Programs, About, Contact)
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
└── README.md
```

### Quality bar
- Lighthouse: aim 90+ performance, 100 accessibility basics (alt text, contrast, focus states).  
- Mobile-first; hamburger nav on small screens.  
- Semantic HTML: one `h1` per page, proper landmarks.  
- Meta tags: title, description, og:image (hero), canonical when domain known.

### Responsive
- Stack all multi-column sections on `md` breakpoint.  
- Reduce drama serif size on mobile.  
- Hero pillars move below CTA on mobile.

---

## Copy Tone

- Warm, direct, aspirational — **not** corporate jargon.  
- Short sentences. Active voice.  
- Uganda/East Africa grounded; inclusive “Africa’s youth” where appropriate.  
- Avoid: “revolutionize”, “synergy”, “leverage”, “game-changer”, purple-on-white gradients.

---

## Build Sequence

1. Scaffold Vite React project; set `base` for GitHub Pages.  
2. Configure Tailwind + fonts + noise overlay + preset tokens as CSS variables.  
3. Build layout shell: Router, Navbar, Footer.  
4. Build pages in order: Home → Programs → About → Contact.  
5. Wire GSAP animations (hero + manifesto + scroll reveals only).  
6. Add README with deploy steps and Meta verification note (“public HTTPS URL required”).  
7. Run `npm run build` — zero errors.  
8. Do not commit `node_modules`; include `.gitignore`.

---

## Execution Directive

Build a **classy, breathable, credible** academy website — a digital experience that feels as intentional as a luxury editorial site, but honest and human for youth and parents in East Africa.

**Not** a crowded PDF paste. **Not** a SaaS landing page. **Not** the Navigator admin app.

When complete, the owner should be able to run `npm run deploy` and send the GitHub Pages URL to Meta for business verification.

---

## Reference

- Design source: `AFQ_Website_Feedback_Rvsd_ek_pn_10.12.24` (Dec 2024 mockup).  
- Sibling product: AfroKreate Navigator (WhatsApp bot + admin dashboard) — separate repository; public entry point is **+256 752 195995** on WhatsApp Business.
