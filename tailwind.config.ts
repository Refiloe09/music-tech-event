import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // **Core Theme Colors**
        "event-black": "#0D0D0D", // Deep Black (Background)
        "event-white": "#F5F5F5", // Soft Off-White (Text & Contrast)
        "event-gray": "#1C1C1C", // Dark Gray (Cards & Sections)
        "event-border": "#2A2A2A", // Subtle Border Color

        // **Accent Colors**
        "event-silver": "#CCCCCC", // Light Silver (Minimal Highlights)
        "event-glow": "#FFFFFF", // Pure White Glow for Effects
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(circle, rgba(255,255,255,0.08) 0%, rgba(0,0,0,1) 100%)",
      },

      animation: {
        "subtle-pulse": "subtle-pulse 1.8s infinite ease-in-out",
      },

      keyframes: {
        "subtle-pulse": {
          "0%, 100%": { opacity: "1", filter: "drop-shadow(0 0 5px rgba(255,255,255,0.2))" },
          "50%": { opacity: "0.9", filter: "drop-shadow(0 0 10px rgba(255,255,255,0.4))" },
        },
      },

      fontFamily: {
        "event-sans": ["Inter", "sans-serif"],
        "event-mono": ["IBM Plex Mono", "monospace"],
      },
    },
  },
  plugins: [typography],
} satisfies Config;
