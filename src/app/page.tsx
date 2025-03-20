import { Metadata } from "next";
import cvData from "@/data/cv.json";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";

export const metadata: Metadata = {
  title: "Mi CV - Portfolio",
  description: "Portfolio personal y CV",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <main className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Header/Intro Section */}
        <section className="mb-16 text-center">
          <h1 className="text-4xl font-bold mb-4">{cvData.personalInfo.name}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">{cvData.personalInfo.title}</p>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {cvData.personalInfo.summary}
          </p>
        </section>

        {/* Experience Timeline */}
        <div className="mb-16">
          <ExperienceSection experiences={cvData.experience} />
        </div>

        {/* Projects Section */}
        <div className="mb-16">
          <ProjectsSection projects={cvData.projects} />
        </div>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Habilidades</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(cvData.skills).map(([category, skills]) => (
              <div key={category} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-4 capitalize">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
