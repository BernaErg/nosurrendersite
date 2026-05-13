"use client";

import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  className?: string;
  index?: number;
};

export function Card({ children, className = "", index = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`group rounded-2xl border border-border bg-panel p-6 transition-colors duration-300 hover:border-accentDim md:p-8 ${className}`}
    >
      {children}
    </motion.div>
  );
}
