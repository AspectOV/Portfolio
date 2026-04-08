import type { Metadata } from 'next'
import HomePageClient from '@/components/pages/HomePageClient'

export const metadata: Metadata = {
  title: 'Home',
  description:
    'Jeremy Hayes builds secure software, modern web apps, and gameplay systems with a systems mindset.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Jeremy Hayes | Developer Portfolio',
    description:
      'Explore case studies, technical skills, and collaboration opportunities with Jeremy Hayes.',
    url: '/',
  },
  twitter: {
    title: 'Jeremy Hayes | Developer Portfolio',
    description:
      'Case studies, skills, and contact details for Jeremy Hayes.',
  },
}

export default function HomePage() {
  return <HomePageClient />
}
