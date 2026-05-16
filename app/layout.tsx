import type { Metadata, Viewport } from 'next'
import { Inter, Fira_Code } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: '--font-fira-code',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Ibrahim Khan | Full-Stack Developer & AI Engineer',
  description: 'Portfolio of MD Ibrahim Khan — Full-Stack Developer & AI Engineer. B.Tech CST at MAIT Delhi. Building production-grade AI-powered applications with real-time streaming, LLM integrations, and scalable architectures. Oracle Certified Generative AI Professional.',
  keywords: ['Ibrahim Khan', 'full-stack developer', 'AI engineer', 'portfolio', 'Next.js', 'React', 'LLM', 'generative AI', 'web development', 'MAIT Delhi', 'software engineer'],
  authors: [{ name: 'MD Ibrahim Khan' }],
  creator: 'MD Ibrahim Khan',
  openGraph: {
    title: 'Ibrahim Khan | Full-Stack Developer & AI Engineer',
    description: 'Building production-grade AI-powered applications with real-time streaming, LLM integrations, and scalable architectures.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ibrahim Khan | Full-Stack Developer & AI Engineer',
    description: 'Building production-grade AI-powered applications with real-time streaming, LLM integrations, and scalable architectures.',
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
      <body className={`${inter.variable} ${firaCode.variable} font-sans antialiased`} suppressHydrationWarning>
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
