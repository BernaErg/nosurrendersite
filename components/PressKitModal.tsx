"use client";

import { useEffect } from "react";
import { X } from "lucide-react";

type Props = {
  open: boolean;
  onClose: () => void;
};

export function PressKitModal({ open, onClose }: Props) {
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
      aria-labelledby="press-kit-title"
      className="fixed inset-0 z-[60] flex items-center justify-center p-6"
    >
      <button
        type="button"
        aria-label="Close press kit"
        onClick={onClose}
        className="absolute inset-0 bg-bg/80 backdrop-blur-sm"
      />
      <div className="relative w-full max-w-lg rounded-2xl border border-border bg-panel p-8">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 rounded-full p-2 text-muted transition-colors hover:bg-panelHi hover:text-ink"
        >
          <X className="h-4 w-4" />
        </button>
        <h2
          id="press-kit-title"
          className="font-display text-2xl font-bold uppercase tracking-tight text-ink"
        >
          Press kit
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Placeholder. Logos, screenshots, founder bio, and one-pager will land here.
        </p>
        <ul className="mt-6 space-y-2 text-sm">
          <li className="flex items-center justify-between rounded-lg border border-border bg-panelHi px-4 py-3 text-muted">
            <span>Logo pack (SVG, PNG)</span>
            <span className="text-xs uppercase tracking-widest text-accent">Soon</span>
          </li>
          <li className="flex items-center justify-between rounded-lg border border-border bg-panelHi px-4 py-3 text-muted">
            <span>One-pager (PDF)</span>
            <span className="text-xs uppercase tracking-widest text-accent">Soon</span>
          </li>
          <li className="flex items-center justify-between rounded-lg border border-border bg-panelHi px-4 py-3 text-muted">
            <span>MVP screenshots</span>
            <span className="text-xs uppercase tracking-widest text-accent">Soon</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
