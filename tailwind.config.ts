import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // Enables dark mode support
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)", // Uses CSS variables from globals.css
        foreground: "var(--foreground)",
      }, fontFamily: {
        first: ["Orbitron","serif"],
        sec: ["Righteous","serif"],
        third: ["Spectral","serif"]
      },   animation: {
        'spin-slow': 'spin 6s linear infinite',  // Custom 4s spin duration
        'spin-fast': 'spin 500ms linear infinite', // Faster spin example
      },
     
    },
  },
  plugins: [],
};

export default config;
