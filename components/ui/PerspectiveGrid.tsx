type Props = {
  variant?: "hero" | "divider";
  className?: string;
};

export function PerspectiveGrid({ variant = "hero", className = "" }: Props) {
  if (variant === "divider") {
    return (
      <svg
        aria-hidden
        viewBox="0 0 1280 1"
        preserveAspectRatio="none"
        className={`w-full h-px ${className}`}
      >
        <defs>
          <linearGradient id="dividerGrad" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0" stopColor="#FF1F8F" stopOpacity="0" />
            <stop offset="0.5" stopColor="#FF1F8F" stopOpacity="0.5" />
            <stop offset="1" stopColor="#FF1F8F" stopOpacity="0" />
          </linearGradient>
        </defs>
        <line x1="0" y1="0.5" x2="1280" y2="0.5" stroke="url(#dividerGrad)" strokeWidth="1" />
      </svg>
    );
  }

  const verticals = Array.from({ length: 21 }, (_, i) => {
    const x = (i / 20) * 1280;
    const horizon = 640;
    return <line key={`v-${i}`} x1={x} y1="320" x2={horizon} y2="0" stroke="#FF1F8F" strokeOpacity="0.18" strokeWidth="1" />;
  });

  const horizontals = Array.from({ length: 8 }, (_, i) => {
    const t = i / 7;
    const y = 320 - Math.pow(t, 1.8) * 320;
    const opacity = 0.4 - t * 0.35;
    return (
      <line key={`h-${i}`} x1="0" y1={y} x2="1280" y2={y} stroke="#FF1F8F" strokeOpacity={opacity} strokeWidth="1" />
    );
  });

  return (
    <svg
      aria-hidden
      viewBox="0 0 1280 320"
      preserveAspectRatio="none"
      className={`w-full h-full ${className}`}
    >
      {verticals}
      {horizontals}
    </svg>
  );
}
