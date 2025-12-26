'use client'

import { useState } from 'react'

interface ContactForm {
    name: string
    email: string
    subject: string
    message: string
}

export default function Contact() {
    const [formData, setFormData] = useState<ContactForm>({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        setTimeout(() => {
            setIsSubmitting(false)
            setSubmitStatus('success')
            setFormData({ name: '', email: '', subject: '', message: '' })
            setTimeout(() => setSubmitStatus('idle'), 5000)
        }, 1500)
    }

    const socialLinks = [
        {
            name: 'LinkedIn',
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
            ),
            url: 'https://www.linkedin.com/in/alexandrocardona',
            color: 'hover:text-[#0A66C2]'
        },
        {
            name: 'Email',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            ),
            url: 'mailto:alexandrocamz@gmail.com',
            color: 'hover:text-[var(--accent-primary)]'
        },
    ]

    return (
        <section id="contact" className="relative py-24 md:py-32 px-6 bg-[var(--background)]">
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute inset-0 opacity-[0.02]" style={{backgroundImage: `linear-gradient(to right, var(--foreground) 1px, transparent 1px), linear-gradient(to bottom, var(--foreground) 1px, transparent 1px)`, backgroundSize: '80px 80px'}} />
            </div>

            <div className="relative max-w-6xl mx-auto">
                <div className="mb-16 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border)] bg-[var(--background-secondary)] mb-6">
                        <div className="w-2 h-2 rounded-full bg-[var(--accent-primary)] animate-pulse" />
                        <span className="text-xs md:text-sm font-medium text-[var(--foreground-secondary)] uppercase tracking-wider">Get In Touch</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold text-[var(--foreground)] mb-6 tracking-tight">Let&apos;s Work <span className="text-[var(--accent-primary)]">Together</span></h2>
                    <p className="text-base md:text-lg text-[var(--foreground-secondary)] max-w-2xl mx-auto leading-relaxed">Have a project in mind or want to discuss opportunities? I&apos;m always open to new challenges and collaborations.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
                    <div className="lg:col-span-2 space-y-8">
                        <div className="space-y-4">
                            <h3 className="text-lg font-bold text-[var(--foreground)] mb-4 flex items-center gap-2">
                                <div className="w-1 h-6 bg-[var(--accent-primary)] rounded-full" />
                                Contact Information
                            </h3>

                            <a href="mailto:alexandrocamz@gmail.com" className="group block p-6 bg-[var(--background-elevated)] border-2 border-[var(--border)] rounded-xl hover:border-[var(--accent-primary)] transition-all duration-300 hover:-translate-y-1">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-[var(--background-secondary)] rounded-lg border border-[var(--border)] group-hover:border-[var(--accent-primary)] transition-colors">
                                        <svg className="w-6 h-6 text-[var(--accent-primary)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-xs font-medium text-[var(--foreground-muted)] uppercase tracking-wide mb-1">Email</p>
                                        <p className="font-semibold text-[var(--foreground)] group-hover:text-[var(--accent-primary)] transition-colors">alexandrocamz@gmail.com</p>
                                    </div>
                                </div>
                            </a>

                            <div className="p-6 bg-[var(--background-elevated)] border-2 border-[var(--border)] rounded-xl">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-[var(--background-secondary)] rounded-lg border border-[var(--border)]">
                                        <svg className="w-6 h-6 text-[var(--metallic-primary)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-xs font-medium text-[var(--foreground-muted)] uppercase tracking-wide mb-1">Location</p>
                                        <p className="font-semibold text-[var(--foreground)]">Querétaro, México</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold text-[var(--foreground)] mb-4 flex items-center gap-2">
                                <div className="w-1 h-6 bg-[var(--accent-primary)] rounded-full" />
                                Connect With Me
                            </h3>
                            <div className="flex gap-4">
                                {socialLinks.map((social) => (
                                    <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className={`p-4 bg-[var(--background-elevated)] border-2 border-[var(--border)] rounded-xl transition-all duration-300 hover:scale-110 hover:border-[var(--metallic-primary)] text-[var(--foreground-secondary)] ${social.color}`} aria-label={social.name}>
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="p-6 bg-[var(--background-secondary)] border-2 border-[var(--metallic-primary)] rounded-xl relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-[var(--metallic-primary)]" />
                            <div className="flex items-center gap-3 mb-2">
                                <div className="relative">
                                    <div className="w-3 h-3 bg-[var(--success)] rounded-full animate-pulse" />
                                    <div className="absolute inset-0 w-3 h-3 bg-[var(--success)] rounded-full animate-ping" />
                                </div>
                                <span className="font-bold text-[var(--foreground)]">Available for Work</span>
                            </div>
                            <p className="text-sm text-[var(--foreground-secondary)]">Currently open to freelance projects and full-time opportunities</p>
                        </div>
                    </div>

                    <div className="lg:col-span-3">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-semibold text-[var(--foreground)] mb-2">Name *</label>
                                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 bg-[var(--background-elevated)] border-2 border-[var(--border)] rounded-xl text-[var(--foreground)] placeholder:text-[var(--foreground-muted)] focus:border-[var(--accent-primary)] focus:outline-none transition-colors" placeholder="Your name" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-semibold text-[var(--foreground)] mb-2">Email *</label>
                                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 bg-[var(--background-elevated)] border-2 border-[var(--border)] rounded-xl text-[var(--foreground)] placeholder:text-[var(--foreground-muted)] focus:border-[var(--accent-primary)] focus:outline-none transition-colors" placeholder="your.email@example.com" />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-semibold text-[var(--foreground)] mb-2">Subject *</label>
                                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required className="w-full px-4 py-3 bg-[var(--background-elevated)] border-2 border-[var(--border)] rounded-xl text-[var(--foreground)] placeholder:text-[var(--foreground-muted)] focus:border-[var(--accent-primary)] focus:outline-none transition-colors" placeholder="What's this about?" />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold text-[var(--foreground)] mb-2">Message *</label>
                                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={6} className="w-full px-4 py-3 bg-[var(--background-elevated)] border-2 border-[var(--border)] rounded-xl text-[var(--foreground)] placeholder:text-[var(--foreground-muted)] focus:border-[var(--accent-primary)] focus:outline-none transition-colors resize-none" placeholder="Tell me about your project or opportunity..." />
                            </div>

                            <button type="submit" disabled={isSubmitting} className="w-full px-8 py-4 bg-[var(--accent-primary)] hover:bg-[var(--accent-primary-hover)] text-white font-bold rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-3 group">
                                {isSubmitting ? (
                                    <>
                                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                        </svg>
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </>
                                )}
                            </button>

                            {submitStatus === 'success' && (
                                <div className="p-4 bg-[var(--success)]/10 border-2 border-[var(--success)] rounded-xl flex items-center gap-3 animate-fadeIn">
                                    <svg className="w-6 h-6 text-[var(--success)] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    <div>
                                        <p className="font-semibold text-[var(--foreground)]">Message sent successfully!</p>
                                        <p className="text-sm text-[var(--foreground-secondary)]">I&apos;ll get back to you as soon as possible.</p>
                                    </div>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}