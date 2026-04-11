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
        gruvbox: {
          bg: "#0d0e0f",
          surface: "#1a1b1c",
          elevated: "#222324",
          border: "#2a2b2c",
          "border-light": "#3a3b3c",
          "text-primary": "#d4be98",
          "text-secondary": "#928374",
          "text-muted": "#665c54",
          green: "#a9b665",
          yellow: "#d8a657",
          orange: "#e78a4e",
          aqua: "#89b482",
          red: "#ea6962",
          purple: "#d3869b",
        },
      },
      fontFamily: {
        mono: ["var(--font-mono)", "'JetBrains Mono'", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
