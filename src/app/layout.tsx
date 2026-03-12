import React from 'react'
import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AnimatedBackdrop from '@/components/AnimatedBackdrop'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  title: 'Jeremy Hayes Portfolio',
  description:
    'Jeremy M. Hayes — developer portfolio showcasing projects, skills, and contact information.',
  keywords: ['Jeremy Hayes', 'Jeremy M. Hayes', 'Developer', 'Programmer', 'Portfolio', 'Game Developer', 'Web Developer'],
  authors: [{ name: 'Jeremy M. Hayes' }],
  openGraph: {
    title: 'Jeremy Hayes Portfolio',
    description:
      'Developer portfolio showcasing projects, skills, and contact information.',
    type: 'website',
    url: 'https://jeremymhayes.com',
    siteName: 'Jeremy Hayes Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jeremy Hayes Portfolio',
    description:
      'Developer portfolio showcasing projects, skills, and contact information.',
  },
  icons: {
    icon: '/images/websitelogo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Jeremy M. Hayes',
              jobTitle: 'Developer',
              description: 'Developer | Game Designer | Programmer',
              url: 'https://jeremymhayes.com',
              worksFor: {
                '@type': 'Organization',
                name: 'Freelance',
              },
              sameAs: [
                'https://github.com/aspectov',
                'https://linkedin.com/in/jeremymhayes/',
              ],
            }),
          }}
        />
      </head>

      <body className="text-white antialiased">
        <AnimatedBackdrop />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  )
}