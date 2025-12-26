'use client'

import { useState, useMemo } from 'react'

interface Tech {
    name: string
    years: number
    category: 'Desktop' | 'Web Frontend' | 'Backend' | 'Database' | 'Cloud & Tools'
    proficiency: 'expert' | 'advanced' | 'proficient'
}

const technologies: Tech[] = [
    // Desktop (tu especialidad principal)
    { name: 'C# & .NET 8', years: 5, category: 'Desktop', proficiency: 'expert' },
    { name: 'WPF/MVVM', years: 4, category: 'Desktop', proficiency: 'expert' },
    { name: 'Avalonia UI', years: 2, category: 'Desktop', proficiency: 'advanced' },
    { name: 'WinForms', years: 4, category: 'Desktop', proficiency: 'advanced' },

    // Web Frontend
    { name: 'Vue.js 3', years: 3, category: 'Web Frontend', proficiency: 'expert' },
    { name: 'Nuxt 3', years: 3, category: 'Web Frontend', proficiency: 'expert' },
    { name: 'TypeScript', years: 3, category: 'Web Frontend', proficiency: 'advanced' },
    { name: 'Tailwind CSS', years: 3, category: 'Web Frontend', proficiency: 'advanced' },
    { name: 'React', years: 2, category: 'Web Frontend', proficiency: 'proficient' },

    // Backend
    { name: 'ASP.NET Core', years: 3, category: 'Backend', proficiency: 'advanced' },
    { name: 'Node.js', years: 2, category: 'Backend', proficiency: 'proficient' },
    { name: 'Laravel/PHP', years: 1, category: 'Backend', proficiency: 'proficient' },
    { name: 'Python', years: 2, category: 'Backend', proficiency: 'advanced' },

    // Database
    { name: 'SQL Server', years: 4, category: 'Database', proficiency: 'expert' },
    { name: 'MongoDB', years: 2, category: 'Database', proficiency: 'advanced' },

    // Cloud & Tools
    { name: 'AWS', years: 2, category: 'Cloud & Tools', proficiency: 'proficient' },
    { name: 'Docker', years: 2, category: 'Cloud & Tools', proficiency: 'proficient' },
    { name: 'Git', years: 5, category: 'Cloud & Tools', proficiency: 'advanced' },
    { name: 'Power Automate', years: 1, category: 'Cloud & Tools', proficiency: 'proficient' },
]

const categories = ['All', 'Desktop', 'Web Frontend', 'Backend', 'Database', 'Cloud & Tools'] as const
type Category = typeof categories[number]

const categoryColors = {
    'Desktop': '#DC2626',
    'Web Frontend': '#3B82F6',
    'Backend': '#10B981',
    'Database': '#8B5CF6',
    'Cloud & Tools': '#F59E0B',
}

const proficiencyLabels = {
    expert: 'Expert',
    advanced: 'Advanced',
    proficient: 'Proficient',
}

export default function TechStack() {
    const [activeFilter, setActiveFilter] = useState<Category>('All')

    const filteredTechs = useMemo(() => {
        if (activeFilter === 'All') {
            return technologies
        }
        return technologies.filter(tech => tech.category === activeFilter)
    }, [activeFilter])

    const stats = useMemo(() => ({
        total: technologies.length,
        experience: Math.max(...technologies.map(t => t.years)),
        expertise: technologies.filter(t => t.proficiency === 'expert').length,
        active: technologies.filter(t => t.years >= 2).length,
    }), [])

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
                        Specialized in .NET desktop applications and modern web platforms,
                        with a focus on building scalable solutions from architecture to deployment.
                    </p>
                </div>

                {/* Filter buttons */}
                <div className="mb-12">
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

                {/* Tech Grid */}
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
                                            'transition-all duration-300 hover:shadow-xl hover:-translate-y-1',
                                            tech.proficiency === 'expert'
                                                ? 'border-[var(--accent-primary)] p-8'
                                                : 'border-[var(--border)] hover:border-[var(--metallic-primary)] p-6'
                                        ].join(' ')}
                                    >
                                        {/* Header */}
                                        <div className="flex items-start justify-between mb-3 gap-2">
                                            {/* Category badge */}
                                            <span
                                                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium border shrink-0"
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
                                                className="px-3 py-1 rounded-full text-xs font-bold font-mono shrink-0"
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
                                                'font-bold text-[var(--foreground)] leading-tight mb-2',
                                                tech.proficiency === 'expert' ? 'text-3xl' : 'text-xl'
                                            ].join(' ')}
                                        >
                                            {tech.name}
                                        </h3>

                                        {/* Proficiency indicator */}
                                        <div className="flex items-center gap-2">
                                            <div className="flex-1 h-1.5 bg-[var(--background-secondary)] rounded-full overflow-hidden">
                                                <div
                                                    className="h-full rounded-full transition-all duration-500"
                                                    style={{
                                                        width: tech.proficiency === 'expert' ? '100%'
                                                            : tech.proficiency === 'advanced' ? '75%'
                                                                : '50%',
                                                        backgroundColor: categoryColor,
                                                    }}
                                                />
                                            </div>
                                            <span className="text-xs font-medium text-[var(--foreground-secondary)]">
                                                {proficiencyLabels[tech.proficiency]}
                                            </span>
                                        </div>

                                        {/* Expert badge */}
                                        {tech.proficiency === 'expert' && (
                                            <div className="absolute -top-3 -right-3">
                                                <div className="bg-[var(--accent-primary)] text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                                                    ⭐ Expert
                                                </div>
                                            </div>
                                        )}

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
                            { label: 'Technologies', value: stats.total },
                            { label: 'Years Experience', value: stats.experience },
                            { label: 'Expert Level', value: stats.expertise },
                            { label: 'Active Stack', value: stats.active },
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