'use client'

import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AudienceModeToggle from '@/components/AudienceModeToggle'
import { AudiencePreferenceProvider, useAudiencePreference } from '@/components/AudiencePreferenceProvider'

const AudienceNotice: React.FC = () => {
  const { audience } = useAudiencePreference()

  return (
    <div className="mx-auto mt-28 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-white/75">
          Current experience: <span className="font-semibold text-cyan-200">{audience === 'recruiter' ? 'Recruiter / Client' : 'Viewer'}</span>
        </p>
        <AudienceModeToggle compact />
      </div>
    </div>
  )
}

const SiteChrome: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <AudiencePreferenceProvider>
      <Header />
      <AudienceNotice />
      <main id="main-content" className="mt-8">{children}</main>
      <Footer />
    </AudiencePreferenceProvider>
  )
}

export default SiteChrome
