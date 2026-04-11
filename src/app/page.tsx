import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ExperienceAndProjects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Nav />
      <Hero />
      <ExperienceAndProjects />
      <Footer />
    </main>
  );
}
