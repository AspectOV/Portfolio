import type { Metadata } from 'next'
import ContactPageClient from '@/components/pages/ContactPageClient'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Jeremy Hayes through the contact form or social channels.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact | Jeremy Hayes',
    description: 'Reach out for collaboration, freelance work, or project inquiries.',
    url: '/contact',
  },
}

export default function ContactPage() {
  return <ContactPageClient />
}
