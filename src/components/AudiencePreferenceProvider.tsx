'use client'

import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

export type AudienceType = 'recruiter' | 'viewer'

interface AudiencePreferenceContextValue {
  audience: AudienceType
  setAudience: (next: AudienceType) => void
}

const STORAGE_KEY = 'portfolio-audience'

const AudiencePreferenceContext = createContext<AudiencePreferenceContextValue | null>(null)

export const AudiencePreferenceProvider: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  const [audience, setAudience] = useState<AudienceType>('viewer')

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY)
      if (saved === 'recruiter' || saved === 'viewer') {
        setAudience(saved)
      }
    } catch {
      setAudience('viewer')
    }
  }, [])

  const handleSetAudience = (next: AudienceType) => {
    setAudience(next)

    try {
      window.localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // Ignore localStorage failures (private mode / disabled storage).
    }
  }

  const value = useMemo(
    () => ({ audience, setAudience: handleSetAudience }),
    [audience]
  )

  return (
    <AudiencePreferenceContext.Provider value={value}>
      {children}
    </AudiencePreferenceContext.Provider>
  )
}

export const useAudiencePreference = () => {
  const context = useContext(AudiencePreferenceContext)

  if (!context) {
    throw new Error('useAudiencePreference must be used within AudiencePreferenceProvider')
  }

  return context
}
