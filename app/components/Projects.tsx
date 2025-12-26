'use client'

import { useState, useEffect } from 'react'

interface Project {
    id: string
    title: string
    tagline: string
    description: string
    year: string
    category: string
    technologies: string[]
    impact?: string[]
    status: 'Production' | 'Active Development' | 'Completed'
}

const projects: Project[] = [
    {
        id: 'prometheus-suite',
        title: 'Prometheus Suite',
        tagline: 'Enterprise Logistics & Sales Platform',
        description: 'Production desktop application managing logistics and sales across 16+ branches. Built with WPF/MVVM architecture, currently migrating to Avalonia UI for cross-platform support. Handles package tracking, inventory management, and real-time sales analytics.',
        year: '2022-Present',
        category: 'Enterprise Desktop',
        technologies: ['C#', 'WPF', 'Avalonia UI', 'SQL Server', 'MVVM', '.NET 8'],
        impact: [
            'Actively deployed across 16+ branches',
            'Eliminated 100% Excel-based workflows',
            'Real-time logistics tracking system',
            'Cross-platform migration in progress'
        ],
        status: 'Production'
    },
    {
        id: 'turbopaq',
        title: 'TURBOPAQ Ecosystem',
        tagline: 'Multi-Platform Business Management',
        description: 'Complete business ecosystem spanning desktop (C# ERP), mobile (Flutter for branch managers), and web (Vue 3 admin panel). Integrated AI-powered sales forecasting using Python, containerized with Docker and deployed on AWS infrastructure.',
        year: '2024',
        category: 'Full-Stack Ecosystem',
        technologies: ['C#', 'Flutter', 'Vue 3', 'Python', 'MongoDB', 'AWS', 'Docker'],
        impact: [
            '2nd Place - Proyéctate 2024',
            'Top 30 - DETONAFEST 2024',
            'AI sales forecasting module',
            'Unified cross-platform architecture'
        ],
        status: 'Completed'
    },
    {
        id: 'fluentflare',
        title: 'FluentFlare',
        tagline: 'Interactive Language Learning Platform',
        description: 'Full-stack EdTech platform for English learning. Laravel backend with MongoDB for flexible content management, Vue.js + Inertia.js frontend for seamless SPA experience. Designed for scalable, interactive language education with progress tracking.',
        year: '2025',
        category: 'EdTech',
        technologies: ['Laravel', 'MongoDB', 'Vue.js', 'Inertia.js', 'PHP', 'Tailwind CSS'],
        impact: [
            'Modern EdTech architecture',
            'Interactive learning modules',
            'Real-time progress tracking',
            'Scalable content management'
        ],
        status: 'Active Development'
    },
    {
        id: 'secure-distribution',
        title: 'Secure File Distribution System',
        tagline: 'Cloud-Native Access Control',
        description: 'Serverless file distribution platform using Nuxt 3 frontend and AWS Lambda backend. Implements one-time secure access codes for temporary file sharing. Built for scenarios requiring controlled, time-limited document access without traditional authentication.',
        year: '2025',
        category: 'Cloud Infrastructure',
        technologies: ['Nuxt 3', 'AWS Lambda', 'AWS S3', 'TypeScript', 'Serverless'],
        impact: [
            'One-time secure access codes',
            'Serverless architecture',
            'Zero-trust security model',
            'Cost-effective scaling'
        ],
        status: 'Production'
    },
]

const statusConfig = {
    'Production': {
        light: { bg: '#ECFDF5', border: '#10B981', text: '#047857' },
        dark: { bg: '#10B98115', border: '#10B98140', text: '#10B981' }
    },
    'Active Development': {
        light: { bg: '#EFF6FF', border: '#3B82F6', text: '#1D4ED8' },
        dark: { bg: '#3B82F615', border: '#3B82F640', text: '#3B82F6' }
    },
    'Completed': {
        light: { bg: '#F5F3FF', border: '#8B5CF6', text: '#6D28D9' },
        dark: { bg: '#8B5CF615', border: '#8B5CF640', text: '#8B5CF6' }
    }
}

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null)
    const [isDark, setIsDark] = useState(false)

    useEffect(() => {
        const checkTheme = () => {
            const theme = document.documentElement.getAttribute('data-theme')
            setIsDark(theme === 'tron')
        }

        checkTheme()

        const observer = new MutationObserver(checkTheme)
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['data-theme']
        })

        return () => observer.disconnect()
    }, [])

    return (
        <section id="projects" className="py-20 px-6 bg-[var(--background-secondary)]">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="mb-16 text-center">
                    <h2 className="text-4xl md:text-6xl font-bold text-[var(--foreground)] mb-4">
                        Featured <span className="text-[var(--accent-primary)]">Projects</span>
                    </h2>
                    <p className="text-xl text-[var(--foreground-secondary)] max-w-2xl mx-auto">
                        Building production systems from architecture to deployment —
                        desktop applications, cloud platforms, and full-stack ecosystems
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => {
                        const statusStyle = isDark
                            ? statusConfig[project.status].dark
                            : statusConfig[project.status].light

                        return (
                            <div
                                key={project.id}
                                className="group relative bg-[var(--background-elevated)] rounded-2xl border-2
                                         border-[var(--border)] overflow-hidden cursor-pointer
                                         hover:border-[var(--accent-primary)] transition-all duration-300
                                         hover:-translate-y-1"
                                onClick={() => setSelectedProject(project)}
                                style={{
                                    animationDelay: `${index * 100}ms`,
                                }}
                            >
                                {/* Accent bar */}
                                <div
                                    className="h-1 w-full bg-[var(--metallic-primary)] transition-all duration-300
                                             group-hover:h-2"
                                />

                                {/* Content */}
                                <div className="p-6 md:p-8">
                                    {/* Year & Status */}
                                    <div className="flex items-center justify-between gap-3 mb-4">
                                        <span
                                            className="px-3 py-1 rounded-full text-xs font-bold border"
                                            style={{
                                                backgroundColor: 'var(--metallic-light)',
                                                borderColor: 'var(--metallic-primary)',
                                                color: 'var(--metallic-dark)',
                                            }}
                                        >
                                            {project.year}
                                        </span>
                                        <span
                                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium border"
                                            style={{
                                                backgroundColor: statusStyle.bg,
                                                borderColor: statusStyle.border,
                                                color: statusStyle.text,
                                            }}
                                        >
                                            <div
                                                className="w-1.5 h-1.5 rounded-full"
                                                style={{ backgroundColor: statusStyle.text }}
                                            />
                                            {project.status}
                                        </span>
                                    </div>

                                    {/* Category */}
                                    <span className="text-xs text-[var(--foreground-muted)] font-medium uppercase tracking-wide block mb-3">
                                        {project.category}
                                    </span>

                                    {/* Title */}
                                    <h3 className="text-2xl md:text-3xl font-bold text-[var(--foreground)] mb-2
                                                 group-hover:text-[var(--accent-primary)] transition-colors">
                                        {project.title}
                                    </h3>

                                    {/* Tagline */}
                                    <p className="text-base md:text-lg font-semibold text-[var(--accent-primary)] mb-4">
                                        {project.tagline}
                                    </p>

                                    {/* Description */}
                                    <p className="text-[var(--foreground-secondary)] mb-6 leading-relaxed text-sm md:text-base">
                                        {project.description}
                                    </p>

                                    {/* Technologies */}
                                    <div className="mb-6">
                                        <h4 className="text-xs font-semibold text-[var(--foreground-muted)] uppercase tracking-wide mb-3">
                                            Tech Stack
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map((tech, i) => (
                                                <span
                                                    key={i}
                                                    className="px-3 py-1 bg-[var(--background-secondary)] border border-[var(--border)]
                                                             rounded-lg text-xs font-mono text-[var(--foreground)]
                                                             group-hover:border-[var(--metallic-primary)] transition-colors"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Key Impact */}
                                    {project.impact && project.impact.length > 0 && (
                                        <div className="flex items-start gap-2 text-sm text-[var(--foreground-secondary)]">
                                            <svg className="w-5 h-5 flex-shrink-0 text-[var(--metallic-primary)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <span className="font-medium">{project.impact[0]}</span>
                                        </div>
                                    )}

                                    {/* View Details */}
                                    <div className="mt-6 flex items-center gap-2 text-[var(--accent-primary)] font-semibold text-sm
                                                  group-hover:gap-4 transition-all">
                                        <span>View Details</span>
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                            <path d="M13 7l5 5m0 0l-5 5m5-5H6" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                </div>

                                {/* Hover glow effect - sin shadow */}
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-2xl"
                                    style={{
                                        background: 'radial-gradient(circle at center, var(--accent-primary-light), transparent 70%)',
                                        zIndex: -1000,
                                    }}
                                />
                            </div>
                        )
                    })}
                </div>

                {/* Footer Note */}
                <div className="mt-16 text-center">
                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--background-elevated)]
                                  border border-[var(--border)] rounded-lg">
                        <svg className="w-5 h-5 text-[var(--metallic-primary)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="text-sm text-[var(--foreground-secondary)]">
                            Source code for production projects is proprietary
                        </span>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {selectedProject && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm animate-fadeIn"
                    onClick={() => setSelectedProject(null)}
                >
                    <div
                        className="relative max-w-4xl w-full bg-[var(--background-elevated)] rounded-2xl
                                 border-2 border-[var(--metallic-primary)] max-h-[90vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setSelectedProject(null)}
                            className="absolute top-6 right-6 z-10 p-2 bg-[var(--background)] rounded-full
                                     border-2 border-[var(--border)] hover:border-[var(--accent-primary)]
                                     hover:bg-[var(--background-secondary)] transition-all"
                        >
                            <svg className="w-6 h-6 text-[var(--foreground)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>

                        <div className="h-2 w-full bg-[var(--metallic-primary)]" />

                        <div className="p-8 md:p-12">
                            {/* Header */}
                            <div className="mb-8">
                                <div className="flex items-center gap-3 mb-4 flex-wrap">
                                    <span
                                        className="px-3 py-1.5 rounded-full text-sm font-bold border"
                                        style={{
                                            backgroundColor: 'var(--metallic-light)',
                                            borderColor: 'var(--metallic-primary)',
                                            color: 'var(--metallic-dark)',
                                        }}
                                    >
                                        {selectedProject.year}
                                    </span>
                                    <span className="text-sm text-[var(--foreground-muted)] font-medium uppercase tracking-wide">
                                        {selectedProject.category}
                                    </span>
                                    <span
                                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium border ml-auto"
                                        style={{
                                            backgroundColor: (isDark
                                                ? statusConfig[selectedProject.status].dark
                                                : statusConfig[selectedProject.status].light).bg,
                                            borderColor: (isDark
                                                ? statusConfig[selectedProject.status].dark
                                                : statusConfig[selectedProject.status].light).border,
                                            color: (isDark
                                                ? statusConfig[selectedProject.status].dark
                                                : statusConfig[selectedProject.status].light).text,
                                        }}
                                    >
                                        <div
                                            className="w-2 h-2 rounded-full"
                                            style={{
                                                backgroundColor: (isDark
                                                    ? statusConfig[selectedProject.status].dark
                                                    : statusConfig[selectedProject.status].light).text
                                            }}
                                        />
                                        {selectedProject.status}
                                    </span>
                                </div>

                                <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-3">
                                    {selectedProject.title}
                                </h2>
                                <p className="text-xl font-semibold text-[var(--accent-primary)]">
                                    {selectedProject.tagline}
                                </p>
                            </div>

                            {/* Description */}
                            <div className="mb-8">
                                <h3 className="text-lg font-bold text-[var(--foreground)] mb-3 flex items-center gap-2">
                                    <div className="w-1 h-6 bg-[var(--accent-primary)] rounded-full" />
                                    Project Overview
                                </h3>
                                <p className="text-[var(--foreground-secondary)] leading-relaxed text-base">
                                    {selectedProject.description}
                                </p>
                            </div>

                            {/* Technologies */}
                            <div className="mb-8">
                                <h3 className="text-lg font-bold text-[var(--foreground)] mb-4 flex items-center gap-2">
                                    <div className="w-1 h-6 bg-[var(--accent-primary)] rounded-full" />
                                    Tech Stack
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    {selectedProject.technologies.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-4 py-2 bg-[var(--background-secondary)] border-2 border-[var(--metallic-primary)]
                                                     rounded-lg text-sm font-mono text-[var(--foreground)] font-medium
                                                     hover:bg-[var(--background)] transition-colors"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Impact */}
                            {selectedProject.impact && selectedProject.impact.length > 0 && (
                                <div>
                                    <h3 className="text-lg font-bold text-[var(--foreground)] mb-4 flex items-center gap-2">
                                        <div className="w-1 h-6 bg-[var(--accent-primary)] rounded-full" />
                                        Impact & Results
                                    </h3>
                                    <ul className="space-y-3">
                                        {selectedProject.impact.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <svg
                                                    className="w-6 h-6 flex-shrink-0 mt-0.5 text-[var(--metallic-primary)]"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                          strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                                <span className="text-[var(--foreground-secondary)] leading-relaxed">
                                                    {item}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}