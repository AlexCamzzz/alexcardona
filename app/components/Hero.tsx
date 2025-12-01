'use client'

export default function Hero() {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20">
    <div className="max-w-5xl w-full">
        {/* Main Content */}
        <div className="space-y-6">
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
        I build <span className="text-[var(--accent-primary)]">complete ecosystems</span>,
    <br />
    not just apps.
    </h2>

    {/* Description */}
    <p className="text-xl text-[var(--foreground-secondary)] max-w-2xl leading-relaxed">
        Full Stack Software Architect specializing in <span className="text-[var(--accent-primary)] font-semibold">.NET</span>,
    <span className="text-[var(--accent-primary)] font-semibold"> Vue/Nuxt</span>, and
        <span className="text-[var(--accent-primary)] font-semibold"> Laravel</span>.
    From desktop to cloud, I architect solutions that solve real-world problems.
    </p>

    {/* CTA Buttons */}
    <div className="flex gap-4 pt-8">
    <button
        onClick={() => scrollToSection('projects')}
    className="px-8 py-4 bg-[var(--accent-primary)] hover:bg-[var(--accent-primary-hover)]
    text-white font-bold rounded-lg transition-all glow-strong"
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

    {/* Decorative Element - Metallic Line */}
    <div className="mt-20 h-px bg-gradient-to-r from-transparent via-[var(--metallic-primary)] to-transparent" />
        </div>
        </section>
)
}