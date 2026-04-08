import type { Metadata } from 'next'
import AboutPageClient from '@/components/pages/AboutPageClient'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn how Jeremy Hayes approaches secure software, web apps, gameplay systems, and collaborative engineering work.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About | Jeremy Hayes',
    description:
      'Background, experience, and working style for Jeremy Hayes.',
    url: '/about',
  },
}

export default function AboutPage() {
  return <AboutPageClient />
}
