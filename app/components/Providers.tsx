'use client'

import { ReactNode } from 'react'
import { ThemeProvider } from '../lib/ThemeContext'

interface ProvidersProps {
    children: ReactNode
}

export default function Providers({ children }: ProvidersProps) {
    return (
        <ThemeProvider>
            {children}
        </ThemeProvider>
    )
}