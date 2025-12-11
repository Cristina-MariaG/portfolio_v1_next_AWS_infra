import type { Config } from "tailwindcss";

export default {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // background: "var(--background)",
        // foreground: "var(--foreground)",
        'home': 'var(--home)',
        'light': 'var(--light)',
        'black': 'var(--black)',
        'grey': 'var(--grey)',
      },
    },
  },
  plugins: [],
} satisfies Config;
