import { Metadata } from "next";
import cvData from "@/data/cv.json";
import ExperienceSection from "@/components/ExperienceSection";
import HeaderIntroSection from "@/components/HeaderIntroSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mi CV - Portfolio",
  description: "Portfolio personal y CV",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <main className="container mx-auto px-4 py-12 max-w-6xl flex flex-col items-center">
        <HeaderIntroSection />
        <SkillsSection />
        <div className="mb-16 w-full max-w-4xl">
          <ExperienceSection experiences={cvData.experience} />
        </div>
        <div className="mb-16 w-full text-center">
          <h2 className="text-3xl font-bold mb-6">Proyectos</h2>
          <Link 
            href="/projects" 
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Ver todos los proyectos →
          </Link>
        </div>
        <ContactSection />
      </main>
    </div>
  );
}
