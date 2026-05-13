"use client";

import { useState } from "react";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Product } from "@/components/Product";
import { Quality } from "@/components/Quality";
import { Proof } from "@/components/Proof";
import { Markets } from "@/components/Markets";
import { TheBet } from "@/components/TheBet";
import { Footer } from "@/components/Footer";
import { PressKitModal } from "@/components/PressKitModal";
import { ContactModal } from "@/components/ContactModal";

export default function HomePage() {
  const [pressOpen, setPressOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Product />
      <Quality />
      <Proof />
      <Markets />
      <TheBet onPressKit={() => setPressOpen(true)} onContact={() => setContactOpen(true)} />
      <Footer />
      <PressKitModal open={pressOpen} onClose={() => setPressOpen(false)} />
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </main>
  );
}
