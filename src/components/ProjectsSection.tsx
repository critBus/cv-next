import React from 'react';
import ProjectCard from './ProjectCard';

interface Project {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  link?: string;
  demo?: string;
}

interface ProjectsSectionProps {
  projects: Record<string, Project[]>;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  return (
    <section className="w-full">
      <h2 className="text-3xl font-bold mb-8">Proyectos</h2>
      {Object.entries(projects).map(([language, projectList]) => (
        projectList.length > 0 && (
          <div key={language} className="mb-12">
            <h3 className="text-2xl font-semibold mb-6">{language}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projectList.map((project) => (
                <ProjectCard
                  key={project.id}
                  name={project.name}
                  description={project.description}
                  technologies={project.technologies}
                  link={project.link}
                  demo={project.demo}
                />
              ))}
            </div>
          </div>
        )
      ))}
    </section>
  );
};

export default ProjectsSection;
