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
        'bg-primary': '#0a0a0a',
        'bg-secondary': '#151515',
        'bg-tertiary': '#1a1a1a',
        'text-primary': '#ffffff',
        'text-secondary': '#e0e0e0',
        'accent': '#00b4d8',
        'accent-hover': '#00d4f8',
        'border': '#2a2a2a',
        'error': '#ff4444',
        'success': '#00c853',
        'warning': '#ffd600',
      },
      spacing: {
        'xs': '0.5rem',
        'sm': '1rem',
        'md': '1.5rem',
        'lg': '2.5rem',
        'xl': '4rem',
      },
      borderRadius: {
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'full': '9999px',
      },
      keyframes: {
        gradient: {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' },
        }
      },
      animation: {
        gradient: 'gradient 8s ease infinite',
      }
    },
  },
  plugins: [],
};
export default config;
