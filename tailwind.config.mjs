// tailwind.config.mjs
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    './*.html', // Add paths to all of your template files
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // === Colors ===
      colors: {
        'bg-primary': '#0a0a0a',
        'bg-secondary': '#151515',
        'bg-tertiary': '#1a1a1a',
        'bg-nav': 'rgba(10, 10, 10, 0.95)',
        'text-primary': '#ffffff',
        'text-secondary': '#e0e0e0',
        'accent': {
          DEFAULT: '#00b4d8',
          hover: '#00d4f8',
        },
        'border': '#2a2a2a',
        'error': '#ff4444',
        'success': '#00c853',
        'warning': '#ffd600',
      },
      // === Fonts ===
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        mono: ['JetBrains Mono', ...defaultTheme.fontFamily.mono],
      },
      // === Spacing (for padding, margin, gap, etc.) ===
      spacing: {
        'xs': '0.5rem', // 8px
        'sm': '1rem',   // 16px
        'md': '1.5rem', // 24px
        'lg': '2.5rem', // 40px
        'xl': '4rem',   // 64px
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
        'fast': '200ms',
        'normal': '300ms',
        'slow': '500ms',
      },
      // === Keyframes ===
      keyframes: {
        'fade-in': {
          'from': { opacity: 0 },
          'to': { opacity: 1 },
        },
        'slide-up-smooth': {
          'from': {
            opacity: 0,
            transform: 'translateY(30px)',
          },
          'to': {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
        'loading-spinner': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      // === Animations ===
      animation: {
        'fade-in': 'fade-in 0.5s ease forwards',
        'slide-up-smooth': 'slide-up-smooth 0.6s ease forwards',
        'loading-spinner': 'loading-spinner 1s linear infinite',
      },
    },
  },
  plugins: [],
};
