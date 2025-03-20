import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import HeaderIntroSection from '@/components/HeaderIntroSection'
import ContactSection from '@/components/ContactSection'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mi CV',
  description: 'Curriculum Vitae profesional',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <main className="min-h-screen p-8 max-w-6xl mx-auto">
          <HeaderIntroSection />
          {children}
          <ContactSection />
        </main>
      </body>
    </html>
  )
}
