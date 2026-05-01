import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { EducationSection } from "@/components/EducationSection";
import { Footer } from "@/components/Footer";
import { experience } from "@/data/resume";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <ExperienceSection jobs={experience} />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
      </main>
      <Footer />
    </>
  );
}
