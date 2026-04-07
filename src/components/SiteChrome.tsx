'use client'

import React from 'react'
import Link from 'next/link'
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

const StickyActionBar: React.FC = () => {
  const actionClassName =
    'inline-flex min-h-10 items-center justify-center rounded-lg border border-white/15 bg-white/5 px-4 text-sm font-medium text-white transition-colors duration-200 hover:border-cyan-300/50 hover:bg-cyan-400/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80'

  return (
    <div className="fixed inset-x-0 bottom-4 z-40 px-4 sm:bottom-5">
      <div className="mx-auto flex w-full max-w-xl items-center justify-center gap-2 rounded-2xl border border-white/15 bg-black/70 p-2 shadow-lg shadow-black/40 backdrop-blur-md">
        <Link href="/projects" className={actionClassName}>
          Projects
        </Link>
        <a href="/JeremyHayesResume.pdf" className={actionClassName}>
          Resume
        </a>
        <Link href="/contact" className={actionClassName}>
          Contact
        </Link>
      </div>
    </div>
  )
}

const SiteChrome: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <AudiencePreferenceProvider>
      <Header />
      <AudienceNotice />
      <main id="main-content" className="mt-8 pb-24">{children}</main>
      <Footer />
      <StickyActionBar />
    </AudiencePreferenceProvider>
  )
}

export default SiteChrome
