import { About } from "@/components/About";
import { Achievements } from "@/components/Achievements";
import { CodeSnippet } from "@/components/CodeSnippet";
import { Contact, Footer } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { TechMarquee } from "@/components/TechMarquee";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CodeSnippet />
        <TechMarquee />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
