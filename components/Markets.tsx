"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { content } from "@/content";
import { SectionShell } from "./ui/SectionShell";
import { Card } from "./ui/Card";
import { Pill } from "./ui/Pill";

export function Markets() {
  return (
    <SectionShell
      id="markets"
      eyebrow={content.markets.eyebrow}
      title={content.markets.title}
      subtitle={content.markets.subtitle}
    >
      <motion.figure
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="relative mb-12 overflow-hidden rounded-2xl border border-border bg-panel md:mb-16"
      >
        <div className="relative aspect-[16/7] w-full">
          <Image
            src={content.markets.heroImage.src}
            alt={content.markets.heroImage.alt}
            fill
            sizes="(min-width: 1280px) 1280px, 100vw"
            className="object-cover"
          />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(8,7,12,0.05) 0%, rgba(8,7,12,0.15) 60%, rgba(8,7,12,0.55) 100%)",
            }}
          />
        </div>
        <figcaption className="absolute bottom-4 left-6 right-6 text-xs uppercase tracking-widest text-muted">
          Club owner. President. Same game, different cultural figureheads.
        </figcaption>
      </motion.figure>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {content.markets.items.map((item, i) => (
          <Card key={item.country} index={i}>
            <div className="flex items-start justify-between">
              <div className="text-3xl leading-none" aria-hidden>
                {item.flag}
              </div>
              <span className="text-xs font-medium uppercase tracking-widest text-muted">
                {item.country}
              </span>
            </div>
            <h3
              className="mt-8 font-display font-bold text-ink"
              style={{ fontSize: "clamp(22px, 2.4vw, 30px)", lineHeight: 1.1 }}
            >
              {item.name}
            </h3>
            <div className="mt-6">
              {item.isLive ? (
                <Pill variant="live">{item.status}</Pill>
              ) : (
                <Pill variant="muted">{item.status}</Pill>
              )}
            </div>
          </Card>
        ))}
      </div>
    </SectionShell>
  );
}
