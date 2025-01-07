import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ksu: {
          gold: '#ffc629',    // Hooty Hoo Gold
          black: '#2D2926',   // Legacy Black
          gray: '#B2B4B2',    // Slap Rock Gray
          white: '#FFFFFF',   // Bachelor's White
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
