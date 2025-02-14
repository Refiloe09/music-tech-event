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
        // Primary Theme Colors
        "event-orange": "#FF4500", // Electric Orange (Main Theme Color)
        "event-black": "#111111", // Deep Black (For Backgrounds)
        "event-white": "#FFFFFF", // Clean White (For Text & Contrast)

        // Secondary & Accent Colors
        "dark-gray": "#222222", // Slightly lighter than black
        "light-gray": "#EAEAEA", // Soft Gray for Borders
      },
      animation: {
        "pulse-glow": "pulse-glow 1.5s ease-in-out infinite",
      },
      keyframes: {
        "pulse-glow": {
          "0%, 100%": { opacity: "1", filter: "drop-shadow(0 0 5px #FF4500)" },
          "50%": { opacity: "0.8", filter: "drop-shadow(0 0 10px #FF4500)" },
        },
      },
      fontFamily: {
        "event-sans": ["Satoshi", "sans-serif"],
      },
    },
  },
  plugins: [typography],
} satisfies Config;
