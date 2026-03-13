import Hero from "@/components/Hero";

export default function Home() {
    return (
        <main>
            <Hero />

            <section id="about">
                <h2>About</h2>
                <p>
                    I design and build polished digital experiences across web,
                    branding, and creative technology.
                </p>
            </section>

            <section id="projects">
                <h2>Featured Projects</h2>
                <p>Selected work will go here.</p>
            </section>

            <section id="contact">
                <h2>Contact</h2>
                <p>Email, form, or links will go here.</p>
            </section>
        </main>
    );
}