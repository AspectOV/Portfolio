import React from 'react'
import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AnimatedBackdrop from '@/components/AnimatedBackdrop'
import WebVitalsReporter from '@/components/WebVitalsReporter'
import { projects } from '@/content/siteContent'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '600'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://jeremymhayes.com'),
  title: {
    default: 'Jeremy Hayes Portfolio',
    template: '%s | Jeremy Hayes',
  },
  description:
    'Jeremy M. Hayes — developer portfolio showcasing projects, skills, and contact information.',
  keywords: ['Jeremy Hayes', 'Jeremy M. Hayes', 'Developer', 'Programmer', 'Portfolio', 'Game Developer', 'Web Developer'],
  authors: [{ name: 'Jeremy M. Hayes' }],
  alternates: {
    canonical: '/',
  },
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
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
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
                url: `https://jeremymhayes.com${project.link === '#' ? '/projects' : project.link}`,
              })),
            }),
          }}
        />

      <body className="text-white antialiased">
        <WebVitalsReporter />
        <AnimatedBackdrop />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
