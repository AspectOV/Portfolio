import type { Metadata } from 'next'
import HomePageClient from '@/components/pages/HomePageClient'

export const metadata: Metadata = {
  title: 'Home',
  description:
    'Jeremy Hayes builds modern web apps, software, and game projects with a focus on performance and usability.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Jeremy Hayes | Developer Portfolio',
    description:
      'Explore featured projects, technical skills, and ways to connect with Jeremy Hayes.',
    url: '/',
  },
  twitter: {
    title: 'Jeremy Hayes | Developer Portfolio',
    description: 'Featured projects, skills, and contact details for Jeremy Hayes.',
  },
}

export default function HomePage() {
  return <HomePageClient />
}
