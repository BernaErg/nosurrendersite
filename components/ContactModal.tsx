"use client";

import { useEffect } from "react";
import { X, MessageCircle, Send, Mail, Instagram, Linkedin, ArrowUpRight } from "lucide-react";
import { content } from "@/content";

type Props = {
  open: boolean;
  onClose: () => void;
};

const iconMap = {
  whatsapp: MessageCircle,
  telegram: Send,
  email: Mail,
  x: XIcon,
  instagram: Instagram,
  linkedin: Linkedin,
} as const;

function XIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M4 4l16 16M20 4L4 20" />
    </svg>
  );
}

export function ContactModal({ open, onClose }: Props) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-title"
      className="fixed inset-0 z-[60] flex items-center justify-center p-6"
    >
      <button
        type="button"
        aria-label="Close contact panel"
        onClick={onClose}
        className="absolute inset-0 bg-bg/80 backdrop-blur-sm"
      />
      <div className="relative w-full max-w-xl rounded-2xl border border-border bg-panel p-6 md:p-8">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 rounded-full p-2 text-muted transition-colors hover:bg-panelHi hover:text-ink"
        >
          <X className="h-4 w-4" />
        </button>
        <p className="text-xs font-medium uppercase tracking-widest text-accent">
          Channels
        </p>
        <h2
          id="contact-title"
          className="mt-3 font-display text-2xl font-bold uppercase tracking-tight text-ink md:text-3xl"
        >
          {content.contact.title}
        </h2>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
          {content.contact.subtitle}
        </p>

        <ul className="mt-7 space-y-2">
          {content.contact.channels.map((ch) => {
            const Icon = iconMap[ch.kind];
            return (
              <li key={ch.kind}>
                <a
                  href={ch.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-xl border border-border bg-panelHi px-4 py-3.5 transition-colors hover:border-accentDim hover:bg-panel"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-bg text-accent transition-colors group-hover:border-accentDim group-hover:bg-accent/10">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="flex min-w-0 flex-1 flex-col">
                    <span className="text-[11px] font-medium uppercase tracking-widest text-muted">
                      {ch.label}
                    </span>
                    <span className="truncate text-sm text-ink">{ch.value}</span>
                  </span>
                  <ArrowUpRight
                    className="h-4 w-4 shrink-0 text-muted transition-colors group-hover:text-accent"
                    aria-hidden
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
