'use client'

import { useTheme } from '../lib/ThemeContext'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
    const [mounted, setMounted] = useState(false)

    // Montar primero, LUEGO usar el contexto
    useEffect(() => {
        setMounted(true)
    }, [])

    // No renderizar hasta que esté montado
    if (!mounted) {
        return (
            <div className="w-12 h-12 rounded-lg border-2 border-[var(--metallic-light)] bg-[var(--background-elevated)]" />
        )
    }

    // Ahora sí, usar el hook DENTRO de un componente hijo
    return <ThemeToggleButton />
}

function ThemeToggleButton() {
    const { theme, toggleTheme } = useTheme()

    return (
        <button
            onClick={toggleTheme}
            className="p-3 rounded-lg border-2 bg-[var(--background-elevated)]
                 border-[var(--metallic-light)] hover:border-[var(--accent-primary)]
                 transition-all glow"
            aria-label="Toggle theme"
            title={theme === 'ruthless' ? 'Switch to TRON' : 'Switch to Ruthless'}
        >
            {theme === 'ruthless' ? (
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="var(--foreground)"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                >
                    <rect x="3" y="3" width="7" height="7" />
                    <rect x="14" y="3" width="7" height="7" />
                    <rect x="14" y="14" width="7" height="7" />
                    <rect x="3" y="14" width="7" height="7" />
                </svg>
            ) : (
                <svg
                    className="w-6 h-6"
                    fill="var(--foreground)"
                    viewBox="0 0 24 24"
                >
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
                          stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
            )}
        </button>
    )
}