import { Metadata } from "next";
import cvData from "@/data/cv.json";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import HeaderIntroSection from "@/components/HeaderIntroSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Mi CV - Portfolio",
  description: "Portfolio personal y CV",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <main className="container mx-auto px-4 py-12 max-w-6xl flex flex-col items-center">
        {/* Header/Intro Section */}
        <HeaderIntroSection />

        {/* Experience Timeline */}
        <div className="mb-16 w-full max-w-4xl">
          <ExperienceSection experiences={cvData.experience} />
        </div>

        {/* Projects Section */}
        <div className="mb-16 w-full">
          <ProjectsSection projects={cvData.projects} />
        </div>

        {/* Skills Section */}
        <SkillsSection />

        {/* Contact Section */}
        <ContactSection />
      </main>
    </div>
  );
}
