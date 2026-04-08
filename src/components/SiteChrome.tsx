'use client'

import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const SiteChrome: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
    </>
  )
}

export default SiteChrome
