import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { validateEnv } from '@/lib/env'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Watch Tower | SolMates',
    template: '%s | SolMates'
  },
  description: 'Real-time scam detection and monitoring for Solana',
  keywords: ['solana', 'security', 'scam detection', 'blockchain', 'monitoring'],
  authors: [{ name: 'SolMates Team' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://solmates.club',
    siteName: 'SolMates',
    images: [{
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'SolMates'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Watch Tower | SolMates',
    description: 'Real-time scam detection and monitoring for Solana',
    images: ['/og-image.png']
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  if (process.env.NODE_ENV === 'production') {
    validateEnv()
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

