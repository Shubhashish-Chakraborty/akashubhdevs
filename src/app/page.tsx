import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import GitHubContributions from "@/components/GitHubContributions";
import ExperienceAndProjects from "@/components/Projects";
import ContentMarquee from "@/components/ContentMarquee";
import CodeRainBackground from "@/components/CodeRainBackground";
import Footer from "@/components/Footer";
import LatestContent from "@/components/LatestContent";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <CodeRainBackground />
      <Nav />
      <Hero />
      <GitHubContributions />
      {/* <ExperienceAndProjects /> */}
      <LatestContent/>
      <ContentMarquee />
      <Footer />
    </main>
  );
}
