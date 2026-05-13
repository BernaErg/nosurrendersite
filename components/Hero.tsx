"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { content } from "@/content";
import { Pill } from "./ui/Pill";
import { PerspectiveGrid } from "./ui/PerspectiveGrid";

export function Hero() {
  const words = content.hero.title.split(" ");

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[40vh] grid-fade-mask">
        <PerspectiveGrid variant="hero" />
      </div>

      <div className="relative mx-auto grid max-w-content grid-cols-1 gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs font-medium uppercase tracking-widest text-accent"
          >
            {content.hero.eyebrow}
          </motion.p>

          <h1
            className="mt-6 font-display font-bold uppercase tracking-tight text-ink"
            style={{ fontSize: "clamp(48px, 8vw, 96px)", lineHeight: 0.98 }}
          >
            {words.map((word, i) => (
              <motion.span
                key={`${word}-${i}`}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="mr-[0.25em] inline-block"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 max-w-xl text-base leading-relaxed text-muted md:text-lg"
          >
            {content.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8"
          >
            <Pill variant="live">{content.hero.pill}</Pill>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex items-center justify-center lg:justify-end"
          aria-hidden
        >
          <div className="relative w-full max-w-md">
            <motion.div
              className="pointer-events-none absolute inset-0 -z-10 rounded-full blur-3xl"
              style={{ background: "radial-gradient(closest-side, rgba(255,31,143,0.45), transparent 70%)" }}
              animate={{ opacity: [0.35, 0.7, 0.35], scale: [0.9, 1.05, 0.9] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              style={{ transformPerspective: 900, transformOrigin: "center" }}
              animate={{ rotateY: [-4, 4, -4], rotateX: [2, -2, 2], y: [-4, 4, -4] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative aspect-[3/4] w-full"
            >
              <Image
                src="/no-surrender-logo.png"
                alt="No Surrender Studio logo"
                fill
                priority
                sizes="(min-width: 1024px) 460px, 80vw"
                className="object-contain drop-shadow-[0_20px_50px_rgba(255,31,143,0.35)]"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
