"use client"
import React, { useState, useMemo, useEffect, useRef } from 'react';
import ProjectCard from './ProjectCard';
import { FaArrowUp } from 'react-icons/fa';

interface Project {
  id: number;
  name: string;
  description: string[];
  technologies: string[];
  links?: string[];
  demo?: string;
}

interface ProjectsSectionProps {
  projects: Record<string, Project[]>;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const filtersRef = useRef<HTMLDivElement>(null);

  // Extract all unique technologies from all projects
  const allTechnologies = useMemo(() => {
    const techSet = new Set<string>();
    Object.values(projects).forEach(projectList => {
      projectList.forEach(project => {
        project.technologies.forEach(tech => techSet.add(tech));
      });
    });
    return Array.from(techSet).sort();
  }, [projects]);

  // Filter projects based on selected technologies
  const filteredProjects = useMemo(() => {
    if (selectedTechnologies.length === 0) return projects;

    const filtered: Record<string, Project[]> = {};
    Object.entries(projects).forEach(([category, projectList]) => {
      filtered[category] = projectList.filter(project =>
        selectedTechnologies.every(tech => project.technologies.includes(tech))
      );
    });
    return filtered;
  }, [projects, selectedTechnologies]);

  // Count total filtered projects
  const totalFilteredProjects = useMemo(() => {
    return Object.values(filteredProjects).reduce((acc, projectList) => acc + projectList.length, 0);
  }, [filteredProjects]);

  const toggleTechnology = (tech: string) => {
    setSelectedTechnologies(prev =>
      prev.includes(tech)
        ? prev.filter(t => t !== tech)
        : [...prev, tech]
    );
  };

  const clearFilters = () => {
    setSelectedTechnologies([]);
  };

  const scrollToFilters = () => {
    filtersRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = 500; // Show button after scrolling 500px
      setShowScrollButton(scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="w-full">
      <h2 className="text-3xl font-bold mb-8 text-center">Proyectos</h2>

      {/* Technology filters */}
      <div ref={filtersRef} className="mb-12 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {allTechnologies.map(tech => (
              <button
                key={tech}
                onClick={() => toggleTechnology(tech)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all transform hover:scale-105 ${selectedTechnologies.includes(tech)
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                style={{ cursor: 'pointer' }}
              >
                {tech}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {selectedTechnologies.length > 0 && (
              <>
                <button
                  onClick={clearFilters}
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium hover:underline transition-colors"
                >
                  Limpiar filtros
                </button>
                <span className="text-sm text-gray-500 dark:text-gray-400">•</span>
              </>
            )}
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {totalFilteredProjects} proyecto{totalFilteredProjects !== 1 ? 's' : ''} encontrado{totalFilteredProjects !== 1 ? 's' : ''}
            </span>
          </div>
        </div>
      </div>

      {/* Projects list */}
      <div className="space-y-16">
        {Object.entries(filteredProjects).map(([language, projectList]) => (
          projectList.length > 0 && (
            <div key={language}>
              <h3 className="text-2xl font-semibold mb-8 text-center">{language}</h3>
              <div className="flex flex-col gap-8">
                {projectList.map((project) => (
                  <div key={project.id}>
                    <ProjectCard
                      name={project.name}
                      description={project.description}
                      technologies={project.technologies}
                      links={project.links}
                      demo={project.demo}
                    />
                  </div>
                ))}
              </div>
            </div>
          )
        ))}
      </div>

      {/* Floating scroll to top button */}
      <button
        onClick={scrollToFilters}
        className={`fixed bottom-8 right-8 p-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all transform hover:scale-110 ${
          showScrollButton ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
        }`}
        aria-label="Scroll to filters"
      >
        <FaArrowUp className="text-xl" />
      </button>
    </section>
  );
};

export default ProjectsSection;
