'use client'

import React, { useEffect, useMemo } from 'react'
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  type Transition,
} from 'framer-motion'

interface Dot {
  id: number
  left: string
  top: string
  size: number
  duration: number
  delay: number
}

const floatTransition = (duration: number, delay = 0): Transition => ({
  duration,
  delay,
  repeat: Infinity,
  repeatType: 'mirror',
  ease: 'easeInOut',
})

const AnimatedBackdrop: React.FC = () => {
  const reduceMotion = useReducedMotion()

  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)

  const glowX = useSpring(pointerX, {
    stiffness: reduceMotion ? 1000 : 60,
    damping: reduceMotion ? 500 : 24,
    mass: reduceMotion ? 0.2 : 1.1,
  })

  const glowY = useSpring(pointerY, {
    stiffness: reduceMotion ? 1000 : 60,
    damping: reduceMotion ? 500 : 24,
    mass: reduceMotion ? 0.2 : 1.1,
  })

  const pointerGlow = useMotionTemplate`
    radial-gradient(
      420px circle at ${glowX}px ${glowY}px,
      rgba(34, 211, 238, 0.18) 0%,
      rgba(34, 211, 238, 0.06) 35%,
      transparent 70%
    )
  `

  const pointerFocus = useMotionTemplate`
    radial-gradient(
      900px circle at ${glowX}px ${glowY}px,
      rgba(255, 255, 255, 0.06) 0%,
      transparent 55%
    )
  `

  useEffect(() => {
    const setCenter = () => {
      pointerX.set(window.innerWidth / 2)
      pointerY.set(window.innerHeight / 2)
    }

    const handlePointerMove = (event: PointerEvent) => {
      pointerX.set(event.clientX)
      pointerY.set(event.clientY)
    }

    setCenter()

    window.addEventListener('resize', setCenter)
    window.addEventListener('pointermove', handlePointerMove, { passive: true })

    return () => {
      window.removeEventListener('resize', setCenter)
      window.removeEventListener('pointermove', handlePointerMove)
    }
  }, [pointerX, pointerY])

  const dots = useMemo<Dot[]>(
    () =>
      Array.from({ length: 6 }).map((_, index) => ({
        id: index,
        left: `${12 + index * 14}%`,
        top: `${18 + (index % 3) * 22}%`,
        size: 6 + index * 1.5,
        duration: 10 + index * 2.2,
        delay: index * 1.2,
      })),
    []
  )

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 15% 10%, rgba(34, 211, 238, 0.12), transparent 32%),
            radial-gradient(circle at 85% 0%, rgba(56, 189, 248, 0.10), transparent 28%),
            radial-gradient(circle at 50% 100%, rgba(59, 130, 246, 0.08), transparent 38%),
            linear-gradient(180deg, rgba(255, 255, 255, 0.015), transparent 18%),
            #06080f
          `,
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(circle at center, black 55%, transparent 80%)',
          WebkitMaskImage:
            'radial-gradient(circle at center, black 55%, transparent 80%)',
        }}
      />

      {!reduceMotion && (
        <>
          <motion.div
            className="absolute -left-32 top-[-8rem] h-[28rem] w-[28rem] rounded-full bg-cyan-400/10 blur-3xl"
            animate={{
              x: [-20, 30, -10],
              y: [0, 40, -20],
              scale: [1, 1.08, 0.98],
              opacity: [0.22, 0.3, 0.2],
            }}
            transition={floatTransition(18)}
          />

          <motion.div
            className="absolute right-[-8rem] top-[8%] h-[24rem] w-[24rem] rounded-full bg-sky-400/10 blur-3xl"
            animate={{
              x: [0, -35, 20],
              y: [0, -20, 30],
              scale: [1, 0.96, 1.06],
              opacity: [0.16, 0.24, 0.18],
            }}
            transition={floatTransition(20, 1.5)}
          />

          <motion.div
            className="absolute bottom-[-10rem] left-[30%] h-[26rem] w-[26rem] rounded-full bg-blue-500/10 blur-3xl"
            animate={{
              x: [0, 24, -18],
              y: [0, -28, 12],
              scale: [1, 1.04, 0.97],
              opacity: [0.14, 0.2, 0.15],
            }}
            transition={floatTransition(22, 0.75)}
          />
        </>
      )}

      <motion.div
        className="absolute inset-0 opacity-90"
        style={{ background: pointerGlow }}
      />

      <motion.div
        className="absolute inset-0 opacity-90"
        style={{ background: pointerFocus }}
      />

      {!reduceMotion &&
        dots.map((dot) => (
          <motion.div
            key={dot.id}
            className="absolute rounded-full bg-white/20"
            style={{
              left: dot.left,
              top: dot.top,
              width: dot.size,
              height: dot.size,
            }}
            animate={{
              y: [0, -90, 0],
              opacity: [0.18, 0.5, 0.18],
            }}
            transition={{
              duration: dot.duration,
              delay: dot.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}

      <div className="absolute inset-0 opacity-[0.05]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.35'/%3E%3C/svg%3E")`,
          }}
        />
      </div>
    </div>
  )
}

export default AnimatedBackdrop
