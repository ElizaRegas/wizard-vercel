import Hero from "@/components/Hero";
import AboutAlt from "@/components/AboutAlt";
import SelectedWork from "@/components/SelectedWork";
import Process from "@/components/Process";
import Contact from "@/components/Contact";

export default function Home() {
    return (
        <main>
            <Hero />
            <div className="section-divider-glass" aria-hidden />
            <AboutAlt />
            <div className="section-divider-glass" aria-hidden />
            <SelectedWork />
            <div className="section-divider-glass" aria-hidden />
            <Process />
            <div className="section-divider-glass" aria-hidden />

            <Contact />
        </main>
    );
}
