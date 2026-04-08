'use client'

import React from 'react'
import { Moon, Sun } from 'lucide-react'

type Theme = 'light' | 'dark'

interface ThemeToggleProps {
  className?: string
}

const storageKey = 'portfolio-theme'

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '' }) => {
  const [theme, setTheme] = React.useState<Theme>('dark')
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    const savedTheme = window.localStorage.getItem(storageKey)
    const normalizedSavedTheme: Theme | null =
      savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : null
    const preferredTheme =
      normalizedSavedTheme ??
      (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark')

    document.documentElement.dataset.theme = preferredTheme
    setTheme(preferredTheme)
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    const nextTheme: Theme = theme === 'dark' ? 'light' : 'dark'
    setTheme(nextTheme)
    document.documentElement.dataset.theme = nextTheme
    window.localStorage.setItem(storageKey, nextTheme)
  }

  const label = mounted
    ? theme === 'dark'
      ? 'Switch to light mode'
      : 'Switch to dark mode'
    : 'Toggle color theme'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      className={[
        'interactive-lift inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white/80 shadow-sm backdrop-blur-sm hover:border-cyan-300/35 hover:bg-cyan-400/10 hover:text-cyan-100 active:scale-[0.98]',
        className,
      ].join(' ')}
    >
      {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  )
}
