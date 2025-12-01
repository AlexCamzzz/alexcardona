'use client'

import { useState } from 'react'

interface Project {
    id: string
    title: string
    tagline: string
    description: string
    year: string
    category: string
    technologies: string[]
    achievements?: string[]
    image?: string
    links?: {
        live?: string
        github?: string
        case?: string
    }
}

const projects: Project[] = [
    {
        id: 'turbopaq',
        title: 'TURBOPAQ',
        tagline: 'Complete Logistics Ecosystem',
        description: 'A comprehensive multi-platform logistics system featuring a C# Desktop ERP, Flutter mobile app for branch managers, Vue 3 web admin panel, and AI-powered sales forecasting using Python and Docker deployed on AWS.',
        year: '2024',
        category: 'Full-Stack Ecosystem',
        technologies: ['C#', 'Flutter', 'Vue 3', 'Python', 'MongoDB', 'AWS', 'Docker'],
        achievements: [
            '2nd Place - Proyéctate 2024 Competition',
            'Top 30 Finalist - DETONAFEST 2024',
            'AI-powered sales forecasting module',
            'Unified system across desktop, mobile, and web'
        ],
    },
    {
        id: 'fluentflare',
        title: 'FluentFlare',
        tagline: 'EdTech Learning Platform',
        description: 'Full-stack English learning platform built with Laravel backend and MongoDB, coupled with a Vue.js + Inertia frontend. Designed for scalable, interactive language education.',
        year: '2025',
        category: 'EdTech',
        technologies: ['Laravel', 'MongoDB', 'Vue.js', 'Inertia.js', 'Tailwind CSS'],
        achievements: [
            'Currently in active development',
            'Modern EdTech architecture',
            'Interactive learning modules'
        ],
    },
    {
        id: 'promethean-cloud',
        title: 'Promethean Cloud',
        tagline: 'Secure File Distribution',
        description: 'A secure file distribution system using Nuxt 3 and AWS Lambda, allowing clients to access data via one-time secure codes. Built for Promethean Tech consultancy.',
        year: '2025',
        category: 'Cloud Infrastructure',
        technologies: ['Nuxt 3', 'AWS Lambda', 'AWS S3', 'TypeScript'],
        achievements: [
            'One-time secure access codes',
            'Serverless architecture',
            'Client data security focused'
        ],
    },
    {
        id: 'prometheus-suite',
        title: 'Prometheus Suite',
        tagline: 'Desktop Logistics & Sales Management',
        description: 'Core desktop application for logistics tracking and sales management. Started as WPF, now migrating to Avalonia UI for cross-platform capabilities (Windows/Linux/macOS). Foundation of the TURBOPAQ ecosystem.',
        year: '2022-2025',
        category: 'Desktop Application',
        technologies: ['WPF', 'Avalonia UI', 'C#', '.NET', 'MVVM'],
        achievements: [
            'Powers TURBOPAQ logistics',
            'Cross-platform migration in progress',
            'Sophisticated cash flow algorithms',
            'Package tracking system'
        ],
    },
]

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null)

    return (
        <section id="projects" className="py-20 px-6 bg-[var(--background-secondary)]">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="mb-16 text-center">
                    <h2 className="text-4xl md:text-6xl font-bold text-[var(--foreground)] mb-4">
                        Featured <span className="text-[var(--accent-primary)]">Projects</span>
                    </h2>
                    <p className="text-xl text-[var(--foreground-secondary)] max-w-2xl mx-auto">
                        From award-winning logistics platforms to cutting-edge EdTech — building complete ecosystems, not just apps
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className="group relative bg-[var(--background-elevated)] rounded-2xl border-2
                                     border-[var(--border)] overflow-hidden cursor-pointer
                                     hover:border-[var(--accent-primary)] transition-all duration-300
                                     hover:shadow-2xl hover:-translate-y-1"
                            onClick={() => setSelectedProject(project)}
                            style={{
                                animationDelay: `${index * 100}ms`,
                            }}
                        >
                            {/* Gold accent bar */}
                            <div
                                className="h-1 w-full bg-[var(--metallic-primary)] transition-all duration-300
                                         group-hover:h-2"
                            />

                            {/* Content */}
                            <div className="p-6 md:p-8">
                                {/* Year & Category Badge */}
                                <div className="flex items-center gap-3 mb-4">
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
                                    <span className="text-xs text-[var(--foreground-muted)] font-medium uppercase tracking-wide">
                                        {project.category}
                                    </span>
                                </div>

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

                                {/* Key Achievement Badge */}
                                {project.achievements && project.achievements.length > 0 && (
                                    <div className="flex items-start gap-2 text-sm text-[var(--foreground-secondary)]">
                                        <svg className="w-5 h-5 flex-shrink-0 text-[var(--metallic-primary)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                        <span className="font-medium">{project.achievements[0]}</span>
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

                            {/* Subtle glow on hover */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-2xl"
                                style={{
                                    background: 'radial-gradient(circle at center, var(--accent-primary-light), transparent 70%)',
                                }}
                            />
                        </div>
                    ))}
                </div>

                {/* CTA for More Projects */}
                <div className="mt-16 text-center">
                    <p className="text-[var(--foreground-secondary)] mb-6">
                        These are just highlights — I've built dozens of projects across multiple domains
                    </p>
                    <a
                        href="https://github.com/alexcamzzz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--background-elevated)]
                                 border-2 border-[var(--accent-primary)] text-[var(--accent-primary)]
                                 hover:bg-[var(--accent-primary)] hover:text-white font-bold rounded-lg
                                 transition-all glow"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        View All on GitHub
                    </a>
                </div>
            </div>

            {/* Modal for Project Details */}
            {selectedProject && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm
                               animate-fadeIn"
                    onClick={() => setSelectedProject(null)}
                >
                    <div
                        className="relative max-w-4xl w-full bg-[var(--background-elevated)] rounded-2xl
                                 border-2 border-[var(--metallic-primary)] max-h-[90vh] overflow-y-auto
                                 shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
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

                        {/* Gold Header Bar */}
                        <div className="h-2 w-full bg-[var(--metallic-primary)]" />

                        {/* Content */}
                        <div className="p-8 md:p-12">
                            {/* Title & Meta */}
                            <div className="mb-8">
                                <div className="flex items-center gap-3 mb-4">
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
                                    About the Project
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

                            {/* Achievements */}
                            {selectedProject.achievements && selectedProject.achievements.length > 0 && (
                                <div className="mb-8">
                                    <h3 className="text-lg font-bold text-[var(--foreground)] mb-4 flex items-center gap-2">
                                        <div className="w-1 h-6 bg-[var(--accent-primary)] rounded-full" />
                                        Key Achievements
                                    </h3>
                                    <ul className="space-y-3">
                                        {selectedProject.achievements.map((achievement, i) => (
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
                                                    {achievement}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Links */}
                            {selectedProject.links && (
                                <div className="flex flex-wrap gap-4 pt-6 border-t-2 border-[var(--border)]">
                                    {selectedProject.links.live && (
                                        <a
                                            href={selectedProject.links.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-6 py-3 bg-[var(--accent-primary)] hover:bg-[var(--accent-primary-hover)]
                                                     rounded-lg font-bold text-white transition-all shadow-lg
                                                     hover:shadow-xl hover:scale-105"
                                        >
                                            View Live Project →
                                        </a>
                                    )}
                                    {selectedProject.links.github && (
                                        <a
                                            href={selectedProject.links.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-6 py-3 bg-[var(--background-secondary)] border-2 border-[var(--accent-primary)]
                                                     rounded-lg font-bold text-[var(--accent-primary)] transition-all
                                                     hover:bg-[var(--accent-primary)] hover:text-white"
                                        >
                                            View Code
                                        </a>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}