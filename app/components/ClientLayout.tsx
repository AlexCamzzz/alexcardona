'use client'

import { ReactNode } from 'react'
import { ThemeProvider } from '../lib/ThemeContext'
import Header from './Header'

interface ClientLayoutProps {
    children: ReactNode
}

export default function ClientLayout({ children }: ClientLayoutProps) {
    return (
        <ThemeProvider>
            <Header />
            {children}
        </ThemeProvider>
    )
}