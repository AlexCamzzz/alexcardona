'use client'

import Link from 'next/link'
import ThemeToggle from './ThemeToggle'

export default function Header() {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[var(--background)]/80 border-b border-[var(--border)]">
            <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo/Name */}
                <Link href="/" className="text-2xl font-bold">
                    <span className="text-[var(--foreground)]">AC</span>
                    <span className="text-[var(--accent-primary)]">.</span>
                </Link>

                {/* Navigation Links */}
                <div className="hidden md:flex gap-8 items-center">
                    <button
                        onClick={() => scrollToSection('hero')}
                        className="text-[var(--foreground-secondary)] hover:text-[var(--accent-primary)] transition-colors"
                    >
                        About
                    </button>
                    <button
                        onClick={() => scrollToSection('journey')}
                        className="text-[var(--foreground-secondary)] hover:text-[var(--accent-primary)] transition-colors"
                    >
                        Journey
                    </button>
                    <button
                        onClick={() => scrollToSection('stack')}
                        className="text-[var(--foreground-secondary)] hover:text-[var(--accent-primary)] transition-colors"
                    >
                        Tech Stack
                    </button>
                    <button
                        onClick={() => scrollToSection('projects')}
                        className="text-[var(--foreground-secondary)] hover:text-[var(--accent-primary)] transition-colors"
                    >
                        Projects
                    </button>
                    <button
                        onClick={() => scrollToSection('contact')}
                        className="text-[var(--foreground-secondary)] hover:text-[var(--accent-primary)] transition-colors"
                    >
                        Contact
                    </button>

                    <ThemeToggle />
                </div>

                {/* Mobile Theme Toggle */}
                <div className="md:hidden">
                    <ThemeToggle />
                </div>
            </nav>
        </header>
    )
}