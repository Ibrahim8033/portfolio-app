import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

export const metadata: Metadata = {
  title: 'MD Ibrahim Khan | Full-Stack Developer & Software Engineer',
  description: 'Portfolio of MD Ibrahim Khan — 4th-year B.Tech CST student at MAIT Delhi. Full-Stack Developer with hands-on experience in React, Next.js, Node.js, TypeScript, PostgreSQL, and AI-powered applications. Oracle Certified Generative AI Professional.',
  keywords: ['MD Ibrahim Khan', 'Ibrahim Khan', 'Full-Stack Developer', 'Software Engineer', 'AI Engineer', 'Next.js', 'React', 'Node.js', 'PostgreSQL', 'MAIT Delhi', 'Oracle Certified Generative AI Professional'],
  authors: [{ name: 'MD Ibrahim Khan' }],
  creator: 'MD Ibrahim Khan',
  openGraph: {
    title: 'MD Ibrahim Khan | Full-Stack Developer & Software Engineer',
    description: 'Portfolio of MD Ibrahim Khan — 4th-year B.Tech CST student at MAIT Delhi. Full-Stack Developer experienced in React, Next.js, Node.js, TypeScript, PostgreSQL, and AI-powered applications.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MD Ibrahim Khan | Full-Stack Developer & Software Engineer',
    description: 'Portfolio of MD Ibrahim Khan — 4th-year B.Tech CST student at MAIT Delhi. Full-Stack Developer experienced in React, Next.js, Node.js, TypeScript, PostgreSQL, and AI-powered applications.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8fafc' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased overflow-x-hidden min-h-screen" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
