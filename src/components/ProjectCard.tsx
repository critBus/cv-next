import React from 'react';
import Link from 'next/link';

interface ProjectCardProps {
  name: string;
  description: string;
  technologies: string[];
  link?: string;
  demo?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ name, description, technologies, link, demo }) => {
  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
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
      <div className="flex gap-4">
        {link && (
          <Link 
            href={link}
            target="_blank"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            GitHub
          </Link>
        )}
        {demo && (
          <Link
            href={demo}
            target="_blank"
            className="text-green-600 dark:text-green-400 hover:underline"
          >
            Demo
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
