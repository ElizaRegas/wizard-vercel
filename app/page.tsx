import Hero from "@/components/Hero";
import About from "@/components/About";
import SelectedWork from "@/components/SelectedWork";
import Process from "@/components/Process";
import StackedServiceCards from "@/components/StackedServiceCards";
import Contact from "@/components/Contact";

export default function Home() {
    return (
        <main>
            <Hero />
            <div className="section-divider-glass" aria-hidden />
            <About />
            <div className="section-divider-glass" aria-hidden />
            <SelectedWork />
            <div className="section-divider-glass" aria-hidden />
            <Process />
            <div className="section-divider-glass" aria-hidden />
            <StackedServiceCards />
            <div className="section-divider-glass" aria-hidden />

            <Contact />
        </main>
    );
}