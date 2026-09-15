import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: {
            DEFAULT: "#F5B800",
            hover: "#E0A800",
            light: "#FEF3C7",
            glow: "rgba(245, 184, 0, 0.4)",
          },
          charcoal: {
            950: "#0D0F12",
            900: "#14171C",
            800: "#1E2229",
            700: "#2B303B",
            600: "#4B5563",
          },
          pill: "#EEF0F4",
        },
      },
      borderRadius: {
        "2.5xl": "1.25rem",
        "3xl": "1.75rem",
        "4xl": "2.25rem",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
