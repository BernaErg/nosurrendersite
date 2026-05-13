import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#08070C",
        panel: "#100E18",
        panelHi: "#181624",
        border: "#2A2536",
        accent: "#FF1F8F",
        accentDim: "#9E1259",
        ink: "#F5F0FF",
        muted: "#9B95AE",
        signal: "#00E08A",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1280px",
      },
      borderColor: {
        DEFAULT: "#2A2536",
      },
    },
  },
  plugins: [],
};

export default config;
