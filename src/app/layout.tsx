import React from 'react'
import type { Metadata } from 'next'
import { IBM_Plex_Mono, Public_Sans, Space_Grotesk } from 'next/font/google'
import './globals.css'
import AnimatedBackdrop from '@/components/AnimatedBackdrop'
import WebVitalsReporter from '@/components/WebVitalsReporter'
import SiteChrome from '@/components/SiteChrome'
import { getProjectHref, projects } from '@/content/siteContent'

const publicSans = Public_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-body',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '700'],
  display: 'swap',
  variable: '--font-display',
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '600'],
  display: 'swap',
  variable: '--font-mono',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://jeremymhayes.com'),
  title: {
    default: 'Jeremy Hayes | Secure Software, Web Apps, and Gameplay Systems',
    template: '%s | Jeremy Hayes',
  },
  description:
    'Jeremy M. Hayes is a student developer building secure software, modern web apps, and gameplay systems with a systems mindset.',
  keywords: [
    'Jeremy Hayes',
    'Jeremy M. Hayes',
    'Developer',
    'Programmer',
    'Portfolio',
    'Game Developer',
    'Web Developer',
    'Secure Software',
    'Next.js Developer',
    'Roblox Systems',
  ],
  authors: [{ name: 'Jeremy M. Hayes' }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Jeremy Hayes | Secure Software, Web Apps, and Gameplay Systems',
    description:
      'Case studies, technical projects, and contact information for Jeremy M. Hayes.',
    type: 'website',
    url: 'https://jeremymhayes.com',
    siteName: 'Jeremy Hayes Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jeremy Hayes | Secure Software, Web Apps, and Gameplay Systems',
    description:
      'Case studies and project work across secure software, web apps, and gameplay systems.',
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
    <html
      lang="en"
      className={`${publicSans.variable} ${spaceGrotesk.variable} ${ibmPlexMono.variable}`}
      data-theme="dark"
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var k='portfolio-theme';var s=localStorage.getItem(k);var t=s||(window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark');document.documentElement.dataset.theme=t;}catch(e){document.documentElement.dataset.theme='dark';}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Jeremy M. Hayes',
              jobTitle: 'Student Developer',
              description:
                'Student developer focused on secure software, modern web apps, and gameplay systems.',
              url: 'https://jeremymhayes.com',
              worksFor: {
                '@type': 'Organization',
                name: 'Freelance',
              },
              knowsAbout: [
                'Next.js',
                'TypeScript',
                'Roblox systems',
                'Secure software',
                'Desktop applications',
              ],
              sameAs: [
                'https://github.com/aspectov',
                'https://linkedin.com/in/jeremymhayes/',
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ItemList',
              itemListElement: projects.map((project, index) => ({
                '@type': 'CreativeWork',
                position: index + 1,
                name: project.title,
                description: project.description,
                url: `https://jeremymhayes.com${getProjectHref(project.slug)}`,
              })),
            }),
          }}
        />
      </head>

      <body className="antialiased">
        <WebVitalsReporter />
        <AnimatedBackdrop />
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  )
}
