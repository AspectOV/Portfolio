import type { Metadata } from 'next'
import AboutPageClient from '@/components/pages/AboutPageClient'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about Jeremy Hayes, his technical focus areas, education, and software development experience.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About | Jeremy Hayes',
    description: 'Background, experience, and technical interests of Jeremy Hayes.',
    url: '/about',
  },
}

export default function AboutPage() {
  return <AboutPageClient />
}
