"use client";

import { motion } from "framer-motion";
import { PerspectiveGrid } from "./PerspectiveGrid";

type Props = {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
  divider?: boolean;
};

export function SectionShell({ id, eyebrow, title, subtitle, children, divider = true }: Props) {
  return (
    <section id={id} className="relative w-full">
      {divider && (
        <div className="mx-auto max-w-content px-6">
          <PerspectiveGrid variant="divider" />
        </div>
      )}
      <div className="mx-auto max-w-content px-6 py-16 md:py-24">
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="text-xs font-medium uppercase tracking-widest text-accent"
          >
            {eyebrow}
          </motion.p>
        )}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className={`${eyebrow ? "mt-4" : ""} font-display font-bold uppercase tracking-tight text-ink`}
          style={{ fontSize: "clamp(32px, 5vw, 56px)", lineHeight: 1.05 }}
        >
          {title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 max-w-3xl text-base leading-relaxed text-muted md:text-lg"
        >
          {subtitle}
        </motion.p>
        <div className="mt-12 md:mt-16">{children}</div>
      </div>
    </section>
  );
}
