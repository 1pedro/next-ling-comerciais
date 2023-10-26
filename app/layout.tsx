import './globals.css'
import type {Metadata} from 'next'
// const inter = Dancing_Script({ subsets: ['latin'] })
import {Open_Sans} from 'next/font/google'

const inter = Open_Sans({subsets: ['latin']})

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
