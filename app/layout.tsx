import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import './globals.css'

export const metadata: Metadata = {
    title: 'Alexandro Cardona | Software Architect',
    description: 'Full Stack Software Architect specializing in .NET, Vue/Nuxt, and Laravel',
}

interface RootLayoutProps {
    children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
        <body>
        {children}
        </body>
        </html>
    )
}