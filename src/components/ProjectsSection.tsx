"use client"
import React, { useState, useMemo, useEffect, useRef } from 'react';
import ProjectCard from './ProjectCard';
import { FaArrowUp } from 'react-icons/fa';
import TechBadge from './TechBadge';

interface Project {
  id: number;
  name: string;
  description: string[];
  technologies: string[];
  links?: string[];
  demo?: {
    type: string;
    url: string;
  }[];
  position_occupied: string;
  client?: {
    type: string;
    name?: string;
    logo?: string;
  };
}

interface ProjectsSectionProps {
  projects: Record<string, Project[]>;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);
  const [selectedPositions, setSelectedPositions] = useState<string[]>([]);
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

  // Extract all unique positions from all projects
  const allPositions = useMemo(() => {
    const positionSet = new Set<string>();
    Object.values(projects).forEach(projectList => {
      projectList.forEach(project => {
        positionSet.add(project.position_occupied);
      });
    });
    const all_positions = Array.from(positionSet).sort()
    // console.log(all_positions)
    return all_positions;
  }, [projects]);

  // Filter projects based on selected technologies and positions
  const filteredProjects = useMemo(() => {
    if (selectedTechnologies.length === 0 && selectedPositions.length === 0) return projects;

    const filtered: Record<string, Project[]> = {};
    Object.entries(projects).forEach(([category, projectList]) => {
      filtered[category] = projectList.filter(project => {
        const matchesTech = selectedTechnologies.length === 0 ||
          selectedTechnologies.every(tech => project.technologies.includes(tech));
        const matchesPosition = selectedPositions.length === 0 ||
          selectedPositions.includes(project.position_occupied);
        return matchesTech && matchesPosition;
      });
    });
    return filtered;
  }, [projects, selectedTechnologies, selectedPositions]);

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

  const togglePosition = (position: string) => {
    setSelectedPositions(prev =>
      prev.includes(position)
        ? prev.filter(p => p !== position)
        : [...prev, position]
    );
  };

  const clearFilters = () => {
    setSelectedTechnologies([]);
    setSelectedPositions([]);
  };

  const scrollToFilters = () => {
    filtersRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = 500;
      setShowScrollButton(scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="w-full">
      <h2 className="text-3xl font-bold mb-8 text-center">Proyectos</h2>

      {/* Filters */}
      <div ref={filtersRef} className="mb-12 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
        <div className="flex flex-col items-center gap-6">
          {/* Technology filters */}
          <div className="w-full">
            <h3 className="text-lg font-semibold mb-3 text-center">Tecnologías</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {allTechnologies.map(tech => (
                <TechBadge
                  key={tech}
                  tech={tech}
                  onClick={() => toggleTechnology(tech)}
                  selected={selectedTechnologies.includes(tech)}
                  variant="filter"
                />
              ))}
            </div>
          </div>

          {/* Position filters */}
          <div className="w-full">
            <h3 className="text-lg font-semibold mb-3 text-center">Posiciones</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {allPositions.map(position => (
                <button
                  key={position}
                  onClick={() => togglePosition(position)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                    ${selectedPositions.includes(position)
                      ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
                    }`}
                >
                  {position}
                </button>
              ))}
            </div>
          </div>

          {/* Filter status and clear button */}
          <div className="flex items-center gap-4">
            {(selectedTechnologies.length > 0 || selectedPositions.length > 0) && (
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
        {Object.entries(filteredProjects).map(([language, projectList]) =>
          projectList.length > 0 &&
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
                    position_occupied={project.position_occupied}
                    client={project.client}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Floating scroll to top button */}
      <button
        onClick={scrollToFilters}
        className={`fixed bottom-8 right-8 p-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all transform hover:scale-110 ${showScrollButton ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
          }`}
        aria-label="Scroll to filters"
      >
        <FaArrowUp className="text-xl" />
      </button>
    </section>
  );
};

export default ProjectsSection;
