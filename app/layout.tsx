import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'NEXOVATE 2026 — Intercollegiate Technical Fest | Club Ennovate PESCE Mandya',
  description:
    'NEXOVATE 2026 is the flagship intercollegiate technical fest by Club Ennovate, PESCE Mandya. Featuring 10 events, a 24-hour hackathon, and ₹2,10,000+ in prizes. May 4–5, 2026.',
  keywords: ['NEXOVATE', 'Club Ennovate', 'PESCE Mandya', 'technical fest', 'hackathon', 'robotics'],
  openGraph: {
    title: 'NEXOVATE 2026 — Intercollegiate Technical Fest',
    description: 'Club Ennovate · PESCE Mandya · May 4–5, 2026 · ₹2,10,000+ Prize Pool',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
