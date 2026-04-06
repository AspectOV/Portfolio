'use client'

import React from 'react'
import { useAudiencePreference } from '@/components/AudiencePreferenceProvider'

interface AudienceModeToggleProps {
  compact?: boolean
}

const AudienceModeToggle: React.FC<AudienceModeToggleProps> = ({ compact = false }) => {
  const { audience, setAudience } = useAudiencePreference()

  return (
    <div className={compact ? 'inline-flex rounded-xl border border-white/15 bg-black/20 p-1' : 'inline-flex rounded-xl border border-white/15 bg-black/20 p-1 shadow-lg shadow-black/20'}>
      <button
        type="button"
        onClick={() => setAudience('recruiter')}
        className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
          audience === 'recruiter'
            ? 'bg-cyan-400 text-black'
            : 'text-white/75 hover:text-white'
        }`}
        aria-pressed={audience === 'recruiter'}
      >
        Recruiter / Client
      </button>
      <button
        type="button"
        onClick={() => setAudience('viewer')}
        className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
          audience === 'viewer'
            ? 'bg-cyan-400 text-black'
            : 'text-white/75 hover:text-white'
        }`}
        aria-pressed={audience === 'viewer'}
      >
        Viewer
      </button>
    </div>
  )
}

export default AudienceModeToggle
