// tailwind.config.mjs
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // === Colors ===
      // Renamed for clarity and to avoid conflicts.
      // Now you'll use classes like `bg-background-primary`, `text-content-primary`, `bg-accent`.
      colors: {
        background: {
          primary: '#0a0a0a',
          secondary: '#151515',
          tertiary: '#1a1a1a',
          nav: 'rgba(10, 10, 10, 0.95)',
        },
        content: {
          primary: '#ffffff',
          secondary: '#e0e0e0',
        },
        accent: {
          DEFAULT: '#00b4d8',
          hover: '#00d4f8',
        },
        border: '#2a2a2a',
        error: '#ff4444',
        success: '#00c853',
        warning: '#ffd600',
      },
      // === Fonts ===
      fontFamily: {
        sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
        mono: ['var(--font-jetbrains-mono)', ...defaultTheme.fontFamily.mono],
      },
      // === Spacing ===
      spacing: {
        'xs': '0.5rem',
        'sm': '1rem',
        'md': '1.5rem',
        'lg': '2.5rem',
        'xl': '4rem',
      },
      // === Border Radius ===
      borderRadius: {
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'full': '9999px',
      },
      // === Box Shadow ===
      boxShadow: {
        'sm': '0 2px 4px rgba(0, 0, 0, 0.2)',
        'md': '0 4px 12px rgba(0, 0, 0, 0.3)',
        'lg': '0 8px 24px rgba(0, 0, 0, 0.4)',
      },
      // === Transitions ===
      transitionDuration: {
        DEFAULT: '300ms',
        fast: '200ms',
        normal: '300ms',
        slow: '500ms',
      },
      // === Keyframes & Animations ===
      keyframes: {
        'fade-in': {
          'from': { opacity: 0 },
          'to': { opacity: 1 },
        },
        'slide-up': {
          'from': { opacity: 0, transform: 'translateY(30px)' },
          'to': { opacity: 1, transform: 'translateY(0)' },
        },
        spinner: {
          'to': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease forwards',
        'slide-up': 'slide-up 0.6s ease forwards',
        spinner: 'spinner 1s linear infinite',
      },
    },
  },
  plugins: [],
};
