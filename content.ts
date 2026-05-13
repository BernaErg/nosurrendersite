export const content = {
  nav: {
    items: [
      { label: "PRODUCT", href: "#product" },
      { label: "METRICS", href: "#proof" },
      { label: "MARKETS", href: "#markets" },
      { label: "CONTACT", href: "#contact" },
    ],
    cta: "Press kit →",
  },
  hero: {
    eyebrow: "NO SURRENDER STUDIO",
    title: "VERIFIED FAN ECONOMIES START HERE.",
    subtitle:
      "Football is the world's most-played mobile genre. Nobody knows who's actually playing. We do — users are national-ID verified, matched against regulated fintech accounts, and rewarded only when they prove real intent.",
    pill: "LIVE  ·  Efsane Başkan MVP — 24,861 verified users · 3.20× K-factor",
  },
  product: {
    eyebrow: "01  ·  PRODUCT",
    title: "ONE GAME. THREE LAYERS.",
    subtitle:
      "Legendary Club Owner is a football empire game with a card-collection meta and a real-reward economy on top — built so every player has to be a verifiable human first.",
    cards: [
      {
        icon: "Building2" as const,
        title: "Build your empire",
        body: "Manage a football club from the ground up. Stadium, training, scouting, finance, sponsorships. A strategy city-builder dressed in football.",
      },
      {
        icon: "Layers" as const,
        title: "Collect the squad",
        body: "Discover, upgrade, and trade player cards. Card collection is the meta layer — depth for strategy players, fantasy for football fans.",
      },
      {
        icon: "Trophy" as const,
        title: "Earn real rewards",
        body: "Compete in 90-day seasons. Verified users share a transparent, audited prize pool, paid out via licensed fintech partners.",
      },
    ],
  },
  quality: {
    eyebrow: "02  ·  QUALITY LAYER",
    title: "QUALITY OVER VOLUME.",
    subtitle:
      "The question is not how many people you can push through a funnel. It is how many real fans trust the loop enough to verify, play, return, and invite others.",
    cards: [
      {
        title: "Verified humans only",
        body: "National ID + regulated fintech account match. Bots, farms, and multi-accounts are blocked at signup, not after damage.",
      },
      {
        title: "Transparent rewards",
        body: "The prize pool is public, audited, and paid out by licensed partners. No black-box drops, no whale-only economies.",
      },
      {
        title: "Skill, not wallet",
        body: "Zero pay-to-win mechanics. Outcomes are decided by tactics and time invested — never by spend.",
      },
    ],
  },
  proof: {
    eyebrow: "03  ·  MEASURED ACTUALS",
    title: "WHAT THE TURKEY MVP PROVED.",
    subtitle:
      "Live behavior from a real product, not a projection. The Turkey MVP ran on the App Store and Google Play with organic acquisition.",
    metrics: [
      { value: 180, prefix: "", suffix: "K+", label: "Downloads", emphasis: true, decimals: 0 },
      { value: 24861, prefix: "", suffix: "", label: "KYC-verified users onboarded", emphasis: false, decimals: 0 },
      { value: 94, prefix: "", suffix: " min", label: "Average daily session length", emphasis: true, decimals: 0 },
      { value: 17.56, prefix: "", suffix: " hrs", label: "Average engagement time per user", emphasis: false, decimals: 2 },
      { value: 3.2, prefix: "", suffix: "×", label: "K-factor", emphasis: true, decimals: 2 },
      { value: 1.7, prefix: "", suffix: "M+", label: "Hours of gameplay", emphasis: false, decimals: 1 },
      { value: 1.5, prefix: "", suffix: "M+", label: "Messages in social channels", emphasis: true, decimals: 1 },
      { value: 26, prefix: "", suffix: "M+", label: "Ad impressions", emphasis: false, decimals: 0 },
      { value: 343950, prefix: "$", suffix: "", label: "Distributed and rollover reward pool", emphasis: true, decimals: 0 },
    ],
  },
  markets: {
    eyebrow: "04  ·  ONE GAME, NATIVE NAMES",
    title: "BUILT GLOBAL. NAMED LOCAL.",
    subtitle:
      "Same product, same business model, same verified-user spine — with native names and local fintech partners in each market. In English-speaking football culture the figurehead is the club owner; in continental Europe it is the president. We honor both.",
    heroImage: {
      src: "/two-presidents.png",
      alt: "Two presidents facing each other — the club owner and the president, the two cultural figureheads of football fandom",
    },
    items: [
      { flag: "🇹🇷", country: "Turkey", name: "Efsane Başkan", status: "Live — MVP shipped", isLive: true },
      { flag: "🇪🇸", country: "Spain", name: "Presi Legendario", status: "May 2026 — Rewarded launch", isLive: false },
      { flag: "🇫🇷", country: "France", name: "Président Légendaire", status: "May 2026 — Rewarded launch", isLive: false },
      { flag: "🇬🇧", country: "United Kingdom", name: "Legendary Club Owner", status: "July 2026 — Rewarded launch", isLive: false },
      { flag: "🇩🇪", country: "Germany", name: "Legendärer Präsident", status: "Post-WC 2026", isLive: false },
      { flag: "🇮🇹", country: "Italy", name: "Presidente Leggendario", status: "Post-WC 2026", isLive: false },
    ],
  },
  theBet: {
    eyebrow: "05  ·  OPEN CHANNELS",
    title: "A COMMUNITY THAT TALKS. A TEAM THAT LISTENS.",
    subtitle:
      "Efsane Başkan didn't grow from ads — it grew from a loud, daily community that shows up across five live channels. Players, partners, press, curious investors: whichever channel fits, we'd love to hear from you.",
    ctaPrimary: { label: "Contact us →" },
    ctaSecondary: { label: "Download press kit" },
  },
  contact: {
    title: "Get in touch",
    subtitle:
      "Players, partners, press, and curious investors — pick whichever channel fits. We answer all of them.",
    channels: [
      {
        kind: "whatsapp" as const,
        label: "WhatsApp Support",
        value: "+90 533 319 05 72",
        href: "https://wa.me/905333190572",
      },
      {
        kind: "telegram" as const,
        label: "Telegram Community",
        value: "t.me/efsanebaskantopluluk",
        href: "https://t.me/efsanebaskantopluluk",
      },
      {
        kind: "email" as const,
        label: "Email",
        value: "community@nosurrender.studio",
        href: "mailto:community@nosurrender.studio",
      },
      {
        kind: "x" as const,
        label: "X",
        value: "@efsanebaskanapp",
        href: "https://x.com/efsanebaskanapp",
      },
      {
        kind: "instagram" as const,
        label: "Instagram",
        value: "@efsanebaskanapp",
        href: "https://www.instagram.com/efsanebaskanapp/",
      },
      {
        kind: "linkedin" as const,
        label: "LinkedIn",
        value: "linkedin.com/company/nosurrender",
        href: "https://www.linkedin.com/company/nosurrender",
      },
    ],
  },
  footer: {
    wordmark: "NO SURRENDER",
    tagline: "Verified fan-economy infrastructure. Legendary Club Owner is the first product.",
    links: [],
    legal: "No Surrender Inc. (Delaware) · No Surrender A.Ş. (Türkiye) · © 2026",
  },
} as const;

export type Content = typeof content;
