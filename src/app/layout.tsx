import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AnimatedBackdrop from '@/components/AnimatedBackdrop'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jeremy Hayes Portfolio',
  description: 'Jeremy M. Hayes – Developer portfolio showcasing projects, skills, and contact information.',
  keywords: 'Jeremy Hayes, Developer, Game Designer, Programmer, Portfolio',
  authors: [{ name: 'Jeremy M. Hayes' }],
  openGraph: {
    title: 'Jeremy Hayes Portfolio',
    description: 'Developer portfolio showcasing projects, skills, and contact information.',
    type: 'website',
    url: 'https://jeremymhayes.com',
  },
  twitter: {
    card: 'summary_large_image',
  },
  icons: {
    icon: '/images/websitelogo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Jeremy M. Hayes",
              "jobTitle": "Developer",
              "description": "Developer | Game Designer | Programmer",
              "url": "https://jeremymhayes.com",
              "worksFor": {
                "@type": "Organization",
                "name": "Freelance"
              },
              "sameAs": [
                "https://github.com/aspectov",
                "https://linkedin.com/in/jeremymhayes/"
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <AnimatedBackdrop />
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <script dangerouslySetInnerHTML={{
          __html: `document.addEventListener('contextmenu', event => event.preventDefault());`
        }} />
      </body>
    </html>
  )
} 