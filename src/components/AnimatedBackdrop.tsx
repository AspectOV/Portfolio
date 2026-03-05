'use client'

import React, { useEffect, useMemo, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

type Point = { x: number; y: number }

const AnimatedBackdrop: React.FC = () => {
  const reduceMotion = useReducedMotion()

  // Track viewport for percentage-based gradients
  const [viewport, setViewport] = useState({ w: 0, h: 0 })

  // Mouse "target" (raw) + "rendered" (smoothed via RAF)
  const target = useRef<Point>({ x: 0, y: 0 })
  const rendered = useRef<Point>({ x: 0, y: 0 })
  const rafId = useRef<number | null>(null)

  const [glowPos, setGlowPos] = useState<Point>({ x: 0, y: 0 })

  useEffect(() => {
    const updateViewport = () => setViewport({ w: window.innerWidth, h: window.innerHeight })
    updateViewport()
    window.addEventListener('resize', updateViewport)
    return () => window.removeEventListener('resize', updateViewport)
  }, [])

  useEffect(() => {
    const onPointerMove = (e: PointerEvent) => {
      target.current.x = e.clientX
      target.current.y = e.clientY

      if (rafId.current != null) return
      rafId.current = window.requestAnimationFrame(() => {
        rafId.current = null

        // Smooth follow (lerp)
        const t = target.current
        const r = rendered.current
        const lerp = 0.14

        r.x = r.x + (t.x - r.x) * lerp
        r.y = r.y + (t.y - r.y) * lerp

        setGlowPos({ x: r.x, y: r.y })
      })
    }

    window.addEventListener('pointermove', onPointerMove, { passive: true })
    return () => {
      window.removeEventListener('pointermove', onPointerMove)
      if (rafId.current != null) window.cancelAnimationFrame(rafId.current)
    }
  }, [])

  // Keep floating dots positions stable
  const dots = useMemo(
    () =>
      Array.from({ length: 6 }).map((_, i) => ({
        id: i,
        left: `${12 + i * 14}%`,
        top: `${18 + (i % 3) * 22}%`,
        size: 6 + i * 1.5,
        duration: 10 + i * 2.2,
        delay: i * 1.2,
      })),
    []
  )

  // Convert pointer to percentages for gradient anchor points
  const px = viewport.w ? Math.round((glowPos.x / viewport.w) * 100) : 50
  const py = viewport.h ? Math.round((glowPos.y / viewport.h) * 100) : 50

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-bg-primary via-bg-tertiary to-bg-primary" />

      {/* Subtle grid (lighter, fewer layers) */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(circle at center, black 55%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black 55%, transparent 80%)',
        }}
      />

      {/* Ambient moving blobs (disable if reduced motion) */}
      {!reduceMotion && (
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(1200px circle at 20% 80%, rgba(0,180,216,0.18) 0%, transparent 55%)',
              'radial-gradient(1000px circle at 80% 20%, rgba(56,189,248,0.16) 0%, transparent 55%)',
              'radial-gradient(1100px circle at 45% 45%, rgba(0,180,216,0.14) 0%, transparent 60%)',
              'radial-gradient(1200px circle at 20% 80%, rgba(0,180,216,0.18) 0%, transparent 55%)',
            ],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
        />
      )}

      {/* Pointer glow (works even with reduced motion; we just stop the spring) */}
      <motion.div
        className="pointer-events-none absolute h-[420px] w-[420px] rounded-full blur-3xl"
        style={{
          background:
            'radial-gradient(circle at center, rgba(34,211,238,0.18) 0%, rgba(34,211,238,0.06) 35%, transparent 70%)',
        }}
        animate={{
          x: glowPos.x - 210,
          y: glowPos.y - 210,
        }}
        transition={
          reduceMotion
            ? { duration: 0 }
            : { type: 'spring', stiffness: 55, damping: 24, mass: 1.2 }
        }
      />

      {/* Extra “focus” vignette that follows pointer using % so it scales nicely */}
      <div
        className="absolute inset-0 opacity-90"
        style={{
          background: `radial-gradient(900px circle at ${px}% ${py}%, rgba(255,255,255,0.06) 0%, transparent 55%)`,
        }}
      />

      {/* Floating dots */}
      {!reduceMotion &&
        dots.map((d) => (
          <motion.div
            key={d.id}
            className="absolute rounded-full bg-white/20"
            style={{ left: d.left, top: d.top, width: d.size, height: d.size }}
            animate={{ y: [0, -90, 0], opacity: [0.18, 0.5, 0.18] }}
            transition={{ duration: d.duration, repeat: Infinity, ease: 'easeInOut', delay: d.delay }}
          />
        ))}

      {/* Noise overlay */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.35'/%3E%3C/svg%3E")`,
          }}
        />
      </div>
    </div>
  )
}

export default AnimatedBackdrop
