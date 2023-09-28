import './globals.css'
import type { Metadata } from 'next'
import { Dancing_Script } from 'next/font/google'

const inter = Dancing_Script({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sistemas de Pedidos',
  description: 'Linguagens Comerciais',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
