'use client'

import { useState, useMemo } from 'react'

interface Tech {
    name: string
    years: number
    category: 'Frontend' | 'Backend' | 'Platforms' | 'Infrastructure'
    size: 'small' | 'medium' | 'large'
}

const technologies: Tech[] = [
    // Frontend
    { name: 'TypeScript', years: 3, category: 'Frontend', size: 'large' },
    { name: 'Vue & Nuxt', years: 3, category: 'Frontend', size: 'medium' },
    { name: 'React', years: 2, category: 'Frontend', size: 'medium' },
    { name: 'Tailwind CSS', years: 3, category: 'Frontend', size: 'medium' },
    { name: 'Inertia.js', years: 1, category: 'Frontend', size: 'small' },
    { name: 'Next.js', years: 1, category: 'Frontend', size: 'small' },

    // Backend
    { name: 'C#', years: 5, category: 'Backend', size: 'large' },
    { name: 'ASP.NET Core', years: 3, category: 'Backend', size: 'medium' },
    { name: 'Laravel', years: 1, category: 'Backend', size: 'small' },
    { name: 'Django', years: 1, category: 'Backend', size: 'small' },
    { name: 'PHP', years: 2, category: 'Backend', size: 'small' },

    // Platforms
    { name: 'WPF', years: 3, category: 'Platforms', size: 'medium' },
    { name: 'Flutter', years: 2, category: 'Platforms', size: 'medium' },
    { name: 'Avalonia UI', years: 1, category: 'Platforms', size: 'small' },
    { name: 'WinForms', years: 4, category: 'Platforms', size: 'small' },

    // Infrastructure
    { name: 'SQL Server', years: 4, category: 'Infrastructure', size: 'medium' },
    { name: 'MongoDB', years: 2, category: 'Infrastructure', size: 'small' },
    { name: 'AWS', years: 2, category: 'Infrastructure', size: 'small' },
    { name: 'Docker', years: 2, category: 'Infrastructure', size: 'small' },
]

const categories = ['All', 'Frontend', 'Backend', 'Platforms', 'Infrastructure'] as const
type Category = typeof categories[number]

const categoryColors = {
    Frontend: '#3B82F6',
    Backend: '#10B981',
    Platforms: '#8B5CF6',
    Infrastructure: '#F59E0B',
}

export default function TechStack() {
    const [activeFilter, setActiveFilter] = useState<Category>('All')

    const filteredTechs = useMemo(() => {
        if (activeFilter === 'All') {
            return technologies
        }
        return technologies.filter(tech => tech.category === activeFilter)
    }, [activeFilter])

    return (
        <section
            id="stack"
            className="relative py-24 md:py-32 px-6 bg-[var(--background)]"
        >
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div
                    className="absolute inset-0 opacity-[0.02]"
                    style={{
                        backgroundImage: `
                            linear-gradient(to right, var(--foreground) 1px, transparent 1px),
                            linear-gradient(to bottom, var(--foreground) 1px, transparent 1px)
                        `,
                        backgroundSize: '80px 80px',
                    }}
                />
            </div>

            <div className="relative max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-16 text-center space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border)] bg-[var(--background-secondary)]">
                        <div className="w-2 h-2 rounded-full bg-[var(--accent-primary)] animate-pulse" />
                        <span className="text-xs md:text-sm font-medium text-[var(--foreground-secondary)] uppercase tracking-wider">
                            Technology Stack
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-bold text-[var(--foreground)] tracking-tight">
                        Skills & Expertise
                    </h2>

                    <p className="text-base md:text-lg text-[var(--foreground-secondary)] max-w-2xl mx-auto leading-relaxed">
                        A comprehensive overview of the technologies I work with,
                        from frontend frameworks to cloud infrastructure.
                    </p>
                </div>

                {/* Controls */}
                <div className="mb-12">
                    {/* Filter buttons */}
                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveFilter(category)}
                                className={[
                                    'px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300',
                                    'border-2 hover:scale-105 active:scale-95',
                                    activeFilter === category
                                        ? 'border-[var(--accent-primary)] bg-[var(--accent-primary)] text-white shadow-lg'
                                        : 'border-[var(--border)] bg-[var(--background-secondary)] text-[var(--foreground-secondary)] hover:border-[var(--metallic-primary)]'
                                ].join(' ')}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Masonry Grid */}
                {filteredTechs.length > 0 ? (
                    <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
                        {filteredTechs.map((tech, index) => {
                            const categoryColor = categoryColors[tech.category]

                            return (
                                <div
                                    key={tech.name}
                                    className="break-inside-avoid animate-fadeIn"
                                    style={{
                                        animationDelay: `${index * 0.05}s`,
                                        animationFillMode: 'both'
                                    }}
                                >
                                    <article
                                        className={[
                                            'group relative rounded-2xl border-2 bg-[var(--background-elevated)]',
                                            'transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-[var(--metallic-primary)]',
                                            tech.size === 'large' ? 'p-8' : tech.size === 'medium' ? 'p-6' : 'p-5',
                                            'border-[var(--border)]'
                                        ].join(' ')}
                                    >
                                        {/* Header */}
                                        <div className="flex items-start justify-between mb-4">
                                            {/* Category badge */}
                                            <span
                                                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium border"
                                                style={{
                                                    backgroundColor: `${categoryColor}15`,
                                                    borderColor: `${categoryColor}40`,
                                                    color: categoryColor,
                                                }}
                                            >
                                                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: categoryColor }} />
                                                {tech.category}
                                            </span>

                                            {/* Years badge */}
                                            <span
                                                className="px-3 py-1 rounded-full text-xs font-bold font-mono"
                                                style={{
                                                    backgroundColor: 'var(--metallic-light)',
                                                    color: 'var(--metallic-dark)',
                                                }}
                                            >
                                                {tech.years}y
                                            </span>
                                        </div>

                                        {/* Tech name */}
                                        <h3
                                            className={[
                                                'font-bold text-[var(--foreground)] leading-tight',
                                                tech.size === 'large' ? 'text-3xl' : tech.size === 'medium' ? 'text-2xl' : 'text-xl'
                                            ].join(' ')}
                                        >
                                            {tech.name}
                                        </h3>

                                        {/* Hover glow effect */}
                                        <div
                                            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none -z-10"
                                            style={{
                                                background: `radial-gradient(circle at 50% 0%, ${categoryColor}15, transparent 70%)`,
                                            }}
                                        />
                                    </article>
                                </div>
                            )
                        })}
                    </div>
                ) : (
                    // Empty state
                    <div className="text-center py-20">
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[var(--background-secondary)] mb-6">
                            <svg
                                className="w-10 h-10 text-[var(--foreground-muted)]"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-[var(--foreground)] mb-2">
                            No technologies in this category
                        </h3>
                        <p className="text-[var(--foreground-secondary)] mb-6">
                            Try selecting a different filter
                        </p>
                        <button
                            onClick={() => setActiveFilter('All')}
                            className="px-6 py-2.5 rounded-full bg-[var(--accent-primary)] text-white font-medium hover:bg-[var(--accent-primary-hover)] transition-colors"
                        >
                            View all technologies
                        </button>
                    </div>
                )}

                {/* Stats footer */}
                <div className="mt-20 pt-12 border-t-2 border-[var(--border)]">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { label: 'Technologies', value: technologies.length },
                            { label: 'Years Experience', value: '5' },
                            { label: 'Projects Delivered', value: '10+' },
                            { label: 'Masteries', value: '4' },
                        ].map((stat, i) => (
                            <div key={i} className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-[var(--accent-primary)] mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-[var(--foreground-secondary)] font-medium">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}