import type { Metadata } from 'next'
import PrivacyPolicyPageClient from '@/components/pages/PrivacyPolicyPageClient'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Read how this portfolio site handles and protects visitor information.',
  alternates: { canonical: '/privacy-policy' },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyPageClient />
}
