type Props = {
  children: React.ReactNode;
  variant?: "live" | "muted" | "magenta";
  className?: string;
};

export function Pill({ children, variant = "magenta", className = "" }: Props) {
  const styles = {
    live: "border-signal/40 text-signal bg-signal/5",
    muted: "border-border text-muted bg-panel",
    magenta: "border-accentDim text-accent bg-accent/5",
  }[variant];

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wider ${styles} ${className}`}
    >
      {variant === "live" && (
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
        </span>
      )}
      {children}
    </span>
  );
}
