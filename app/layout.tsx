import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Fraunces, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Dimar - Muebles exactamente a su gusto',
  description:
    'Fabricamos sus salas, comedores y camas de calidad, hechas a su comodidad y adaptados a usted en Colombia',
  icons: {
    icon: '/logo.jpg',
    apple: '/logo.jpg',
  },
  openGraph: {
    title: 'Dimar - Muebles exactamente a su gusto',
    description:
      'Fabricamos sus salas, comedores y camas de calidad, hechas a su comodidad y adaptados a usted en Colombia',
    images: [
      {
        url: '/logo.jpg',
        width: 800,
        height: 600,
        alt: 'Dimar Muebles',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dimar - Muebles exactamente a su gusto',
    description:
      'Fabricamos sus salas, comedores y camas de calidad, hechas a su comodidad y adaptados a usted en Colombia',
    images: ['/logo.jpg'],
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={`${fraunces.variable} ${jakarta.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}