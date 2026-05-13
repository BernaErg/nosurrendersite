# No Surrender Studio — Website Brief

**Goal:** A single-page public website for No Surrender Studio that introduces the studio, its first product (Legendary Club Owner), the proof from the Turkey MVP, and the verified-user infrastructure thesis. The audience is investors, fintech partners, press, and curious players.

**Domain:** nosurrender.studio

---

## 1. Tech stack

- **Framework:** Next.js 14 (App Router) + TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion (only for hero text reveal, scroll-triggered fade-ins, and metric counter animations — nothing flashy)
- **Fonts:** Inter (body) + Space Grotesk (headings) via `next/font`
- **Icons:** lucide-react
- **Deployment target:** Vercel
- **Image optimization:** next/image
- **No CMS** — content lives in a single typed `content.ts` file at the project root for easy editing
- **No analytics for v1** — leave a `// TODO: analytics` comment in the layout

Project should be production-ready, mobile-responsive, accessible (a11y), and lighthouse-score-friendly out of the box.

---

## 2. Brand & visual direction

The mock from the founder uses a cyber/grid aesthetic with hot magenta accent on near-black. Keep that DNA but reduce visual noise — currently every section has 4–8 cards stacked, which fights the message. Target: 3 cards max per section, more whitespace, larger headlines, fewer words.

### Color tokens

```ts
// tailwind.config.ts
colors: {
  bg:        '#08070C',  // near-black, near-page background
  panel:     '#100E18',  // slightly lighter for cards
  panelHi:   '#181624',  // top card / hover state
  border:    '#2A2536',  // subtle card border
  accent:    '#FF1F8F',  // hot magenta — primary accent
  accentDim: '#9E1259',  // dim magenta for borders/hovers
  ink:       '#F5F0FF',  // primary text (slight purple-white)
  muted:     '#9B95AE',  // secondary text
  signal:    '#00E08A',  // tiny accent green — used only for "live" status dots
}
```

### Typography

- Headings: `font-display` (Space Grotesk), uppercase, tracking-tight, weight 700
- Body: `font-sans` (Inter), 16px base, leading-relaxed
- Hero title: clamp(48px, 8vw, 96px), uppercase
- Section title: clamp(32px, 5vw, 56px), uppercase
- Card title: 18–20px, semibold
- Body / card body: 14–16px, muted color

### Background motif

- Page background: solid `bg` color
- A **subtle perspective grid** drawn as inline SVG positioned at the bottom of the hero and faintly behind each section divider (NOT on every section — that's the patron's mistake)
- Hot magenta line accents that hint at the grid lines fading toward the horizon
- One large 3D logo/text block as hero visual on the right (placeholder for now — render the word "NO SURRENDER" with a 3D extruded look using CSS transforms + drop shadow; replace with real asset later)

### Layout rules

- Max content width: 1280px, centered
- Section vertical padding: py-24 (mobile py-16)
- Card gaps: gap-6
- Border radius: rounded-2xl on cards, rounded-full on chips/pills
- Card border: 1px solid `border`, on hover `accentDim`
- No shadow except on the hero 3D block

### Animation rules

- Hero headline: word-by-word fade-up on mount (Framer Motion stagger 0.05s)
- Section headlines & cards: fade-up on scroll-into-view, threshold 0.2
- Metric numbers in Proof section: count up from 0 on scroll-into-view
- NO parallax. NO video backgrounds. NO mouse-follow cursor effects.

---

## 3. Information architecture (6 sections only)

The patron's mock has 9 sections. Cut to 6. Drop "Branches come first / new products later" (folds into closing), drop "Trust standard" (folds into Quality section). Final order:

1. **Hero** — Verified fan economies start here
2. **Product** — What Legendary Club Owner actually is (3 layers)
3. **Quality** — Why this player base is different
4. **Proof** — Turkey MVP numbers
5. **Markets** — One game, native names per market
6. **The Bet** — Closing thesis + contact

Then footer.

### Top navigation

Sticky, transparent on hero, gains `bg/80 backdrop-blur` on scroll.

Items: `PRODUCT  ·  QUALITY  ·  PROOF  ·  MARKETS  ·  CONTACT`

Left side: small "NO SURRENDER" wordmark logo. Right side: a single button `Press kit →` that opens a modal with download links (placeholder for now).

---

## 4. Section content (canonical — use these exact texts unless explicitly told to revise)

### Section 1 — HERO

- **Eyebrow tag** (small magenta uppercase): `NO SURRENDER STUDIO  /  PUBLIC THESIS`
- **Title:** `VERIFIED FAN ECONOMIES START HERE.`
- **Subtitle (one paragraph, max 2 sentences):**
  > Football is the world's most-played mobile genre. Nobody knows who's actually playing. We do — every user is national-ID verified, matched against a regulated fintech account, and rewarded only when they prove real intent.
- **Inline pill (under subtitle):**
  > 🟢 LIVE  ·  Efsane Başkan MVP — 24,861 verified users · 142% ROAS D90 · 3.20x K-factor
- **Right side:** large 3D "NO SURRENDER" logo block. Use a transformed div stack to fake 3D extrusion until the real asset is delivered.

### Section 2 — PRODUCT

- **Eyebrow:** `01  ·  PRODUCT`
- **Title:** `ONE GAME. THREE LAYERS.`
- **Subtitle:**
  > Legendary Club Owner is a football empire game with a card-collection meta and a real-reward economy on top — built so every player has to be a verifiable human first.
- **3 cards (grid, equal width):**

  | # | Card title | Card body |
  |---|---|---|
  | 1 | **Build your empire** | Manage a football club from the ground up. Stadium, training, scouting, finance, sponsorships. A strategy city-builder dressed in football. |
  | 2 | **Collect the squad** | Discover, upgrade, and trade player cards. Card collection is the meta layer — depth for strategy players, fantasy for football fans. |
  | 3 | **Earn real rewards** | Compete in 90-day seasons. Verified users share a transparent, audited prize pool, paid out via licensed fintech partners. |

  Each card: small icon (lucide-react: `Building2`, `Layers`, `Trophy`), title, 2-line body.

### Section 3 — QUALITY

- **Eyebrow:** `02  ·  QUALITY LAYER`
- **Title:** `QUALITY OVER VOLUME.`
- **Subtitle:**
  > The question is not how many people you can push through a funnel. It is how many real fans trust the loop enough to verify, play, return, and invite others.
- **3 cards (NOT four — drop one to reduce clutter):**

  | # | Card title | Card body |
  |---|---|---|
  | 1 | **Verified humans only** | National ID + regulated fintech account match. Bots, farms, and multi-accounts are blocked at signup, not after damage. |
  | 2 | **Transparent rewards** | The prize pool is public, audited, and paid out by licensed partners. No black-box drops, no whale-only economies. |
  | 3 | **Skill, not wallet** | Zero pay-to-win mechanics. Outcomes are decided by tactics and time invested — never by spend. |

### Section 4 — PROOF

- **Eyebrow:** `03  ·  MEASURED ACTUALS`
- **Title:** `WHAT THE TURKEY MVP PROVED.`
- **Subtitle:**
  > Live behavior from a real product, not a projection. The Turkey MVP ran on the App Store and Google Play with 100% organic acquisition and a $30K UA test budget.
- **Metric grid (6 tiles, 3 columns × 2 rows on desktop, 2×3 on tablet, 1×6 on mobile):**

  | Metric | Big number | Label |
  |---|---|---|
  | 1 | `94 min` | Average daily session length |
  | 2 | `24,861` | KYC-verified users onboarded |
  | 3 | `37%` | D30 retention |
  | 4 | `16.77%` | D90 retention |
  | 5 | `3.20×` | K-factor (industry top: under 1) |
  | 6 | `142%` | ROAS D90 |

  Each tile: huge number in `font-display` (clamp 48px–80px), `accent` color for numbers 1, 3, 5 and `ink` color for 2, 4, 6 (alternating pattern adds visual rhythm without overusing the accent).

- **Footnote strip (full-width below grid, small muted text):**
  > Sample: first 10,120 users with a 90-day minimum trading lifetime. Source: internal analytics + Paribu / Bybit TR fintech partner reporting.

### Section 5 — MARKETS

- **Eyebrow:** `04  ·  ONE GAME, NATIVE NAMES`
- **Title:** `BUILT GLOBAL. NAMED LOCAL.`
- **Subtitle:**
  > Same product, same business model, same verified-user spine — with native names and local fintech partners in each market. In English-speaking football culture the figurehead is the club owner; in continental Europe it is the president. We honor both.
- **Market grid (6 cards, 3 columns × 2 rows):**

  | # | Flag | Market | Local name | Status |
  |---|---|---|---|---|
  | 1 | 🇹🇷 | Turkey | **Efsane Başkan** | 🟢 Live — MVP shipped |
  | 2 | 🇪🇸 | Spain | **Presi Legendario** | May 2026 — Rewarded launch |
  | 3 | 🇫🇷 | France | **Président Légendaire** | May 2026 — Rewarded launch |
  | 4 | 🇬🇧 | United Kingdom | **Legendary Club Owner** | July 2026 — Rewarded launch |
  | 5 | 🇩🇪 | Germany | **Legendärer Präsident** | Post-WC 2026 |
  | 6 | 🇮🇹 | Italy | **Presidente Leggendario** | Post-WC 2026 |

  Each card: flag emoji (top-left), country eyebrow (small uppercase), local name (font-display, ink color, big), status pill (rounded-full, magenta if live, muted otherwise).

### Section 6 — THE BET (closing)

- **Eyebrow:** `05  ·  SIGNAL LOCK`
- **Title:** `THE FIRST PRODUCT IS PROOF. THE INFRASTRUCTURE IS THE BET.`
- **Subtitle:**
  > Start with one football empire, deeply localized. Prove that verified fan behavior is real, measurable, and monetizable. Then carry the same business model — and the same compliance spine — into every market football already owns.
- **Two CTA buttons (side by side):**
  - Primary (magenta filled): `Contact founder →` (mailto:berke@nosurrender.studio)
  - Secondary (border, magenta text): `Download press kit` (opens modal, placeholder content for now)

### Footer

- Left: small "NO SURRENDER" wordmark + tagline: `Verified fan-economy infrastructure. Legendary Club Owner is the first product.`
- Right: `Contact`, `Press kit`, `LinkedIn`, `Twitter / X`
- Below, full width, smallest muted text: `No Surrender Inc. (Delaware) · No Surrender A.Ş. (Türkiye) · © 2026`

---

## 5. What NOT to do — common cluttering mistakes from the existing mock

- **Don't put 6–8 cards in a single section.** Three is the visual ceiling. Anything more goes into a sub-page or gets cut.
- **Don't repeat the grid background on every section.** Use it only on the hero and as a subtle divider between sections (a thin perspective line, not a full grid).
- **Don't write tautological copy.** "Legendary Club Owner is the product. Efsane Başkan is Turkey." — sentences like this say nothing. Every line on the page must either deliver new information or sharpen the brand.
- **Don't use placeholder Lorem text anywhere** — use the canonical copy above. If you need to extend, write in the same tone (short, declarative, no marketing fluff).
- **Don't decorate with hexagons / glowing orbs / animated particles.** The accent is hot magenta on near-black. Restraint is the brand.
- **Don't make the K-factor smaller than 3.20×.** Some earlier drafts said 0.784 — that's a different cohort number and was misleading. The headline K-factor is 3.20× (peak from the MVP).
- **Don't reuse the founder's exact section titles when they confuse rather than clarify.** Specifically rewrite/cut: "Legendary Club Owner is the product. Efsane Başkan is Turkey." and "Branches come first. New products come later." (the second one folds into Section 6).

---

## 6. Project structure

```
/
├── app/
│   ├── layout.tsx              // root layout, fonts, metadata
│   ├── page.tsx                // composes all six sections
│   └── globals.css             // tailwind directives + perspective grid SVG
├── components/
│   ├── Nav.tsx
│   ├── Hero.tsx
│   ├── Product.tsx
│   ├── Quality.tsx
│   ├── Proof.tsx
│   ├── Markets.tsx
│   ├── TheBet.tsx
│   ├── Footer.tsx
│   ├── ui/
│   │   ├── SectionShell.tsx    // eyebrow + title + subtitle + children
│   │   ├── Card.tsx
│   │   ├── MetricTile.tsx      // with count-up animation
│   │   ├── Pill.tsx
│   │   └── PerspectiveGrid.tsx // inline SVG component
├── content.ts                  // all canonical text from section 4 above, typed
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

Content typing:

```ts
// content.ts
export const content = {
  hero: { eyebrow, title, subtitle, pill },
  product: { eyebrow, title, subtitle, cards: [{ icon, title, body }] },
  quality: { ... },
  proof: { eyebrow, title, subtitle, metrics: [{ value, label }], footnote },
  markets: { eyebrow, title, subtitle, items: [{ flag, country, name, status, isLive }] },
  theBet: { eyebrow, title, subtitle, ctaPrimary, ctaSecondary },
  footer: { tagline, links: [{ label, href }] },
} as const;
```

---

## 7. Build order

1. Scaffold Next.js + Tailwind + TS + Framer Motion
2. Add fonts, color tokens, base layout
3. Build `SectionShell`, `Card`, `MetricTile`, `Pill`, `PerspectiveGrid` primitives
4. Populate `content.ts` with everything from section 4
5. Build Hero (most important — get this right before moving on)
6. Build the other 5 sections using the shared primitives
7. Add scroll-triggered animations
8. Mobile pass — confirm everything stacks cleanly under 768px
9. Lighthouse pass — aim for 95+ on all four scores
10. Add `<meta>` OG tags and a placeholder `og-image.png`

---

## 8. Final acceptance criteria

- Page is one scrollable route at `/`, no client-side routing
- All copy comes from `content.ts` — no inline strings in components
- Mobile (375px), tablet (768px), desktop (1280px+) all look intentional
- Lighthouse performance ≥ 95, accessibility ≥ 95
- Hero loads in under 1 second on a fast 3G simulation
- No console errors, no accessibility violations from axe
- Magenta accent appears at most 4–5 times per viewport (don't oversaturate)
- Every section can be linked to directly via hash anchor (`#product`, `#quality`, `#proof`, `#markets`, `#contact`)
