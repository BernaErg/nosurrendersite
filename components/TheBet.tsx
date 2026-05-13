"use client";

import { motion } from "framer-motion";
import { content } from "@/content";
import { PerspectiveGrid } from "./ui/PerspectiveGrid";

type Props = {
  onPressKit: () => void;
  onContact: () => void;
};

export function TheBet({ onPressKit, onContact }: Props) {
  return (
    <section id="contact" className="relative w-full">
      <div className="mx-auto max-w-content px-6">
        <PerspectiveGrid variant="divider" />
      </div>
      <div className="mx-auto max-w-content px-6 py-16 md:py-24">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-xs font-medium uppercase tracking-widest text-accent"
        >
          {content.theBet.eyebrow}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-4 max-w-5xl font-display font-bold uppercase tracking-tight text-ink"
          style={{ fontSize: "clamp(32px, 5vw, 56px)", lineHeight: 1.05 }}
        >
          {content.theBet.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 max-w-3xl text-base leading-relaxed text-muted md:text-lg"
        >
          {content.theBet.subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <button
            type="button"
            onClick={onContact}
            className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-widest text-bg transition-colors hover:bg-accentDim hover:text-ink"
          >
            {content.theBet.ctaPrimary.label}
          </button>
          <button
            type="button"
            onClick={onPressKit}
            className="inline-flex items-center justify-center rounded-full border border-accentDim px-6 py-3 text-sm font-semibold uppercase tracking-widest text-accent transition-colors hover:bg-accent/10"
          >
            {content.theBet.ctaSecondary.label}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
