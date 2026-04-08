import type { Metadata } from 'next'
import ContactPageClient from '@/components/pages/ContactPageClient'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Reach out to Jeremy Hayes about internships, freelance work, collaborations, or technical conversations.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact | Jeremy Hayes',
    description:
      'Reach out for collaboration, freelance work, internships, or project inquiries.',
    url: '/contact',
  },
}

export default function ContactPage() {
  return <ContactPageClient />
}
