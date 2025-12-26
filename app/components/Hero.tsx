'use client'

import Image from 'next/image'

export default function Hero() {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20">
            <div className="max-w-6xl w-full">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    {/* Main Content */}
                    <div className="space-y-6 lg:w-2/3">
                        {/* Greeting */}
                        <p className="text-[var(--accent-primary)] text-lg font-mono">
                            Hi, my name is
                        </p>

                        {/* Name */}
                        <h1 className="text-6xl md:text-8xl font-bold">
                            <span className="text-[var(--foreground)]">Alexandro</span>
                            <br />
                            <span className="text-[var(--foreground-secondary)]">Cardona</span>
                        </h1>

                        {/* Tagline */}
                        <h2 className="text-3xl md:text-5xl font-bold text-[var(--foreground-secondary)]">
                            I build <span className="text-[var(--accent-primary)]">production systems</span>,
                            <br />
                            from architecture to deployment.
                        </h2>

                        {/* Description */}
                        <p className="text-xl text-[var(--foreground-secondary)] max-w-2xl leading-relaxed">
                            Full Stack Software Engineer specializing in{' '}
                            <span className="text-[var(--accent-primary)] font-semibold">.NET desktop applications</span>
                            {' '}and{' '}
                            <span className="text-[var(--accent-primary)] font-semibold">modern web platforms</span>.
                            Currently building automation solutions at KOSTAL Group.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex gap-4 pt-8 flex-wrap">
                            <button
                                onClick={() => scrollToSection('projects')}
                                className="px-8 py-4 bg-[var(--accent-primary)] hover:bg-[var(--accent-primary-hover)]
                                text-white font-bold rounded-lg transition-all"
                            >
                                View My Work
                            </button>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="px-8 py-4 border-2 border-[var(--accent-primary)] text-[var(--accent-primary)]
                                hover:bg-[var(--accent-primary)] hover:text-white font-bold rounded-lg
                                transition-all"
                            >
                                Get In Touch
                            </button>
                        </div>
                    </div>

                    {/* Photo */}
                    <div className="relative lg:w-1/3 flex justify-center">
                        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden
                                      border-2 border-[var(--accent-primary)] transition-all duration-300
                                      hover:border-[var(--metallic-primary)] hover:-translate-y-1">
                            <Image
                                src="/Hero.jpg"
                                alt="Alexandro Cardona - Full Stack Software Engineer"
                                fill
                                className="object-cover object-[center_20%]"
                                priority
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                    </div>
                </div>

                {/* Decorative Element - Metallic Line */}
                <div className="mt-20 h-px bg-gradient-to-r from-transparent via-[var(--metallic-primary)] to-transparent" />
            </div>
        </section>
    )
}