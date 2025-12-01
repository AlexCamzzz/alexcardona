import Hero from '@/app/components/Hero'
import Header from '@/app/components/Header'
import Providers from '@/app/components/Providers'
import Journey from "@/app/components/Journey";
import TechStack from "@/app/components/TechStack";
import Projects from "@/app/components/Projects";
import Contact from "@/app/components/Contact";

export default function Home() {
    return (
        <Providers>
            <Header />
            <main className="flex flex-col">
                <Hero/>
                <Journey/>
                <TechStack/>
                <Projects/>
                <Contact/>
            </main>
        </Providers>
    )
}