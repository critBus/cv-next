import React from "react";
import { FaGraduationCap, FaUniversity } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi";
import cvData from "@/data/cv.json";
import TechBadge from "./TechBadge";

interface Thesis {
  id: number;
  title: string;
  description: string[];
  technologies: string[];
  links: string[];
  demo: string[];
}

const ThesisSection: React.FC = () => {
  return (
    <section className="w-full max-w-4xl mb-16">
      <div className="flex items-center justify-center gap-3 mb-8">
        <HiAcademicCap className="text-3xl text-blue-400" />
        <h2 className="text-3xl font-bold">Tesis</h2>
      </div>

      <div className="space-y-6">
        {cvData.thesis.map((thesis: Thesis) => (
          <div
            key={thesis.id}
            className="group bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
              <div className="flex-1">
                <div className="flex items-start gap-3">
                  <div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <FaUniversity className="text-2xl text-blue-400 group-hover:scale-110 transition-transform flex-shrink-0" />
                      <h3 className="text-xl font-semibold text-white">
                        {thesis.title}
                      </h3>
                      <div className="grow text-right items-end flex flex-col  gap-4 text-gray-400">
                        {thesis.links.length > 0 && (
                          <a
                            href={thesis.links[0]}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                          >
                            <FaGraduationCap className="text-lg" />
                            <span>Código Fuente</span>
                          </a>
                        )}
                        {thesis.demo.length > 0 && (
                          <a
                            href={thesis.demo[0]}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                          >
                            <FaGraduationCap className="text-lg" />
                            <span>Demo</span>
                          </a>
                        )}
                      </div>
                    </div>
                    <div className="mt-4 space-y-3">
                      {thesis.description.map((desc, idx) => (
                        <p key={idx} className="text-gray-300">
                          {desc}
                        </p>
                      ))}
                    </div>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {thesis.technologies.map((tech, index) => (
                        <TechBadge key={index} tech={tech} variant="compact" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ThesisSection;
