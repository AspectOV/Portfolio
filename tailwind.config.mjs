import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#0a0a0a',
          secondary: '#151515',
          tertiary: '#1a1a1a',
          nav: 'rgba(10, 10, 10, 0.95)',
        },
        text: {
          primary: '#ffffff',
          secondary: '#e0e0e0',
        },
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
      fontFamily: {
        sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
        mono: ['var(--font-jetbrains-mono)', ...defaultTheme.fontFamily.mono],
      },
      keyframes: {
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'slide-up': {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        spinner: {
          to: { transform: 'rotate(360deg)' },
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
}
