import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import MainLayout from '@/components/MainLayout'
import ViewSourceButton from '@/components/ViewSourceButton'

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
        <MainLayout>
          {children}
        </MainLayout>
        <ViewSourceButton />
      </body>
    </html>
  )
}
