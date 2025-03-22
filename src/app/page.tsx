import { Metadata } from "next";
import cvData from "@/data/cv.json";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import TechStackSection from "@/components/TechStackSection";
import ThesisSection from "@/components/ThesisSection";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";

export const metadata: Metadata = {
  title: "Mi CV - Full Stack Developer",
  description: "Portfolio profesional de René Lázaro Collado Arteaga - Desarrollador Full Stack especializado en JavaScript, TypeScript, React, Node.js y más.",
};

export default function Home() {
  return (
    <>
      <TechStackSection />
      <div className="mb-16 w-full max-w-4xl">
        <ExperienceSection experiences={cvData.experience} />
      </div>
      <div className="mb-16 w-full text-center">
        <h2 className="text-3xl font-bold mb-6">Proyectos Destacados</h2>
        <div className="flex justify-center">
          <Link
            href="/projects"
            className="inline-flex items-center bg-white dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700 px-6 py-3 text-blue-500 hover:text-blue-700 hover:border-blue-500 transition-colors group"
          >
            <span>Ver todos los proyectos</span>
            <HiArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
      <EducationSection />
      <ThesisSection />
    </>
  );
}
