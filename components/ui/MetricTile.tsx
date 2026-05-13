"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Props = {
  value: number;
  suffix?: string;
  label: string;
  emphasis?: boolean;
  decimals?: number;
  index?: number;
};

export function MetricTile({ value, suffix = "", label, emphasis = false, decimals = 0, index = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) =>
    latest.toLocaleString("en-US", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    })
  );
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    const unsub = rounded.on("change", (v) => setDisplay(v));
    return () => unsub();
  }, [rounded]);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, value, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
    });
    return controls.stop;
  }, [inView, count, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="rounded-2xl border border-border bg-panel p-6 transition-colors hover:border-accentDim md:p-8"
    >
      <div
        className={`font-display font-bold leading-none ${emphasis ? "text-accent" : "text-ink"}`}
        style={{ fontSize: "clamp(40px, 5vw, 64px)" }}
      >
        {display}
        <span className="text-current">{suffix}</span>
      </div>
      <p className="mt-4 text-sm text-muted md:text-base">{label}</p>
    </motion.div>
  );
}
