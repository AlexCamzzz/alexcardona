'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

type Theme = 'ruthless' | 'tron'

interface ThemeContextType {
    theme: Theme
    toggleTheme: () => void
    setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

interface ThemeProviderProps {
    children: ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
    const [theme, setThemeState] = useState<Theme>('ruthless')
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        const savedTheme = localStorage.getItem('theme') as Theme | null
        if (savedTheme && (savedTheme === 'ruthless' || savedTheme === 'tron')) {
            setThemeState(savedTheme)
            applyTheme(savedTheme)
        }
    }, [])

    const applyTheme = (newTheme: Theme) => {
        if (newTheme === 'tron') {
            document.documentElement.setAttribute('data-theme', 'tron')
        } else {
            document.documentElement.removeAttribute('data-theme')
        }
    }

    const setTheme = (newTheme: Theme) => {
        setThemeState(newTheme)
        applyTheme(newTheme)
        localStorage.setItem('theme', newTheme)
    }

    const toggleTheme = () => {
        const newTheme: Theme = theme === 'ruthless' ? 'tron' : 'ruthless'
        setTheme(newTheme)
    }

    if (!mounted) {
        return <>{children}</>
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme(): ThemeContextType {
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error('useTheme must be used within ThemeProvider')
    }
    return context
}