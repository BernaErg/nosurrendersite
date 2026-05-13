import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

// TODO: analytics

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "No Surrender Studio — Verified fan economies start here",
  description:
    "No Surrender Studio builds verified fan-economy infrastructure. Legendary Club Owner is the first product — a football empire game with national-ID verified users and a real-reward economy.",
  metadataBase: new URL("https://nosurrender.studio"),
  openGraph: {
    title: "No Surrender Studio — Verified fan economies start here",
    description:
      "Football is the world's most-played mobile genre. We know who's actually playing. Every user is national-ID verified, matched against a regulated fintech account.",
    url: "https://nosurrender.studio",
    siteName: "No Surrender Studio",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "No Surrender Studio",
    description: "Verified fan-economy infrastructure.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans bg-bg text-ink antialiased">{children}</body>
    </html>
  );
}
