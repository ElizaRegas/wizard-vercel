import Hero from "@/components/Hero";
import About from "@/components/About";

export default function Home() {
    return (
        <main>
            <Hero />
            <div className="section-divider-glass" aria-hidden />
            <About />
            <section id="projects">
                <h2>Featured Projects</h2>
                <p>Selected work will go here.</p>
            </section>

            <section id="services">
                <h2>Services</h2>
                <p>Design, development, and creative technology.</p>
            </section>

            <section id="contact">
                <h2>Contact</h2>
                <p>Email, form, or links will go here.</p>
            </section>
        </main>
    );
}