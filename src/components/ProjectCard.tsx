import React from 'react';
import Link from 'next/link';

interface ProjectCardProps {
  name: string;
  description: string[];
  technologies: string[];
  link?: string;
  demo?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ name, description, technologies, link, demo }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
      <ul className="text-gray-600 dark:text-gray-300 mb-4 list-disc list-inside">
        {Array.isArray(description) ? description.map((point, index) => (
          <li key={index}>{point}</li>
        )) : <li>{description}</li>}
      </ul>

      {link && <a href={link} className="text-blue-500 hover:underline">Ver Proyecto</a>}
      {demo && <a href={demo} className="text-blue-500 hover:underline ml-4">Demo</a>}
    </div>
  );
};

export default ProjectCard;
