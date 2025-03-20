"use client"
import React, { useState, useMemo } from 'react';
import ProjectCard from './ProjectCard';

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

  return (
    <section className="w-full">
      <h2 className="text-3xl font-bold mb-8 text-center">Proyectos</h2>

      {/* Technology filters */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 justify-center mb-4">
          {allTechnologies.map(tech => (
            <button
              key={tech}
              onClick={() => toggleTechnology(tech)}
              className={`px-3 py-1 rounded-full text-sm transition-colors ${selectedTechnologies.includes(tech)
                  ? 'bg-blue-600 text-white'
                  : 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100'
                }`}
            >
              {tech}
            </button>
          ))}
        </div>
        {selectedTechnologies.length > 0 && (
          <div className="flex justify-center">
            <button
              onClick={clearFilters}
              className="text-blue-600 hover:text-blue-800 text-sm underline"
            >
              Limpiar filtros
            </button>
          </div>
        )}
      </div>

      {/* Projects list */}
      {Object.entries(filteredProjects).map(([language, projectList]) => (
        projectList.length > 0 && (
          <div key={language} className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-center">{language}</h3>
            <div className="flex flex-col justify-center gap-6">
              {projectList.map((project) => (
                <div key={project.id} className="w-full">
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
    </section>
  );
};

export default ProjectsSection;
