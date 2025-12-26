'use client'

import { useRef } from 'react'

interface JourneyCard {
    year: string
    title: string
    description: string
    achievements: string[]
    technologies: string[]
}

const journeyData: JourneyCard[] = [
    {
        year: '2021',
        title: 'Early Beginnings',
        description: 'Started development journey at university',
        achievements: [
            'First production app: Library Management System',
            'Learned C# and WinForms fundamentals',
            'Foundation in strongly-typed OOP'
        ],
        technologies: ['C#', 'WinForms', '.NET']
    },
    {
        year: '2022-2023',
        title: 'Desktop Architecture',
        description: 'Deep dive into enterprise desktop applications',
        achievements: [
            'Migrated from WinForms to WPF/MVVM',
            'Built Prometheus Suite for logistics',
            'Deployed across 16+ branches',
            'Eliminated 100% Excel dependencies'
        ],
        technologies: ['WPF', 'MVVM', 'SQL Server', 'C#']
    },
    {
        year: '2024',
        title: 'Full Stack Expansion',
        description: 'Multi-platform development and recognition',
        achievements: [
            '2nd Place - Proyéctate 2024',
            'Top 30 - DETONAFEST 2024',
            'Principal Consultant at TURBOPAQ',
            'Built mobile, web, and desktop platforms'
        ],
        technologies: ['Flutter', 'Vue 3', 'Laravel', 'Python', 'Docker']
    },
    {
        year: '2025',
        title: 'Cross-Platform & Cloud',
        description: 'Modern stack and enterprise automation',
        achievements: [
            'Innovation Intern at KOSTAL Group',
            'Built FluentFlare (EdTech platform)',
            'Migrated to Avalonia for cross-platform',
            'Deployed cloud-native architectures'
        ],
        technologies: ['Avalonia', 'Nuxt 3', 'MongoDB', 'AWS', 'RPA']
    },
    {
        year: 'Future',
        title: "What's Next?",
        description: 'Expanding technical horizons',
        achievements: [
            'Advanced cloud architectures',
            'Scaling enterprise solutions',
            'Open source contributions',
            'Building the next generation of tools'
        ],
        technologies: ['???']
    }
]

export default function Journey() {
    const scrollRef = useRef<HTMLDivElement>(null)

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const scrollAmount = 400
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            })
        }
    }

    return (
        <section id="journey" className="py-20 px-6 bg-[var(--background-secondary)]">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="mb-12">
                    <h2 className="text-4xl md:text-6xl font-bold text-[var(--foreground)] mb-4">
                        My <span className="text-[var(--accent-primary)]">Journey</span>
                    </h2>
                    <p className="text-xl text-[var(--foreground-secondary)] max-w-2xl">
                        From desktop applications to full-stack ecosystems — a continuous evolution of skills and impact.
                    </p>
                </div>

                {/* Timeline Container */}
                <div className="relative">
                    {/* Scroll Buttons */}
                    <button
                        onClick={() => scroll('left')}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[var(--background-elevated)]
                                 border-2 border-[var(--metallic-light)] hover:border-[var(--accent-primary)]
                                 p-3 rounded-full shadow-lg transition-all glow hidden md:block"
                        aria-label="Scroll left"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="var(--foreground)" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>

                    <button
                        onClick={() => scroll('right')}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[var(--background-elevated)]
                                 border-2 border-[var(--metallic-light)] hover:border-[var(--accent-primary)]
                                 p-3 rounded-full shadow-lg transition-all glow hidden md:block"
                        aria-label="Scroll right"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="var(--foreground)" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>

                    {/* Scrollable Timeline */}
                    <div
                        ref={scrollRef}
                        className="flex gap-6 overflow-x-auto pb-8 px-4 md:px-12 scrollbar-hide scroll-smooth"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {journeyData.map((item, index) => (
                            <div
                                key={index}
                                className="min-w-[320px] md:min-w-[380px] bg-[var(--background-elevated)]
                                         border-2 border-[var(--metallic-light)] rounded-lg p-6
                                         hover:border-[var(--accent-primary)] hover:shadow-lg
                                         transition-all duration-300 group glow"
                            >
                                {/* Year Badge */}
                                <div className="inline-block bg-[var(--accent-primary)] text-white
                                              px-4 py-2 rounded-lg font-bold text-lg mb-4">
                                    {item.year}
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl font-bold text-[var(--foreground)] mb-2">
                                    {item.title}
                                </h3>

                                {/* Description */}
                                <p className="text-[var(--foreground-secondary)] mb-4">
                                    {item.description}
                                </p>

                                {/* Achievements */}
                                <div className="mb-4">
                                    <h4 className="text-sm font-semibold text-[var(--accent-primary)] mb-2 uppercase">
                                        Achievements
                                    </h4>
                                    <ul className="space-y-1">
                                        {item.achievements.map((achievement, i) => (
                                            <li key={i} className="text-sm text-[var(--foreground-secondary)] flex items-start">
                                                <span className="text-[var(--accent-primary)] mr-2">▸</span>
                                                {achievement}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Technologies */}
                                <div>
                                    <h4 className="text-sm font-semibold text-[var(--metallic-primary)] mb-2 uppercase">
                                        Technologies
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {item.technologies.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 bg-[var(--background)] border border-[var(--metallic-light)]
                                                         rounded-full text-xs font-mono text-[var(--foreground-secondary)]
                                                         group-hover:border-[var(--accent-primary)] transition-colors"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Connecting Line (except last card) */}
                                {index < journeyData.length - 1 && (
                                    <div className="absolute top-1/2 -right-3 w-6 h-0.5 bg-[var(--metallic-light)]
                                                  hidden lg:block" />
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Progress Dots */}
                    <div className="flex justify-center gap-2 mt-6">
                        {journeyData.map((_, index) => (
                            <div
                                key={index}
                                className="w-2 h-2 rounded-full bg-[var(--metallic-light)]
                                         hover:bg-[var(--accent-primary)] transition-colors cursor-pointer"
                            />
                        ))}
                    </div>
                </div>

                {/* Decorative Timeline Line */}
                <div className="mt-12 h-1 bg-gradient-to-r from-transparent via-[var(--metallic-primary)] to-transparent" />
            </div>
        </section>
    )
}