import React from 'react';
import Link from 'next/link';
import TechBadge from './TechBadge';
import { FaGooglePlay, FaGlobe } from 'react-icons/fa';

interface DemoLink {
  type: string;
  url: string;
}

interface ProjectCardProps {
  name: string;
  description: string[];
  technologies: string[];
  links?: string[];
  demo?: DemoLink[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ name, description, technologies, links, demo }) => {
  const getDemoIcon = (type: string) => {
    switch (type) {
      case 'Google Play Store':
        return <FaGooglePlay className="inline mr-1" />;
      case 'Web':
        return <FaGlobe className="inline mr-1" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <TechBadge key={index} tech={tech} />
        ))}
      </div>
      <ul className="text-gray-600 dark:text-gray-300 mb-4 list-disc list-inside">
        {Array.isArray(description) ? description.map((point, index) => (
          <li key={index}>{point}</li>
        )) : <li>{description}</li>}
      </ul>

      <div className="flex gap-4">
        {links && links.length > 0 && links.map((link, index) => (
          <a key={index} href={link} className="text-blue-500 hover:underline">
            {`Repositorio ${links.length > 1 ? (index + 1) : ''}`}
          </a>
        ))}
        {demo && demo.map((demoLink, index) => (
          <a key={index} href={demoLink.url} className="text-blue-500 hover:underline flex items-center">
            {getDemoIcon(demoLink.type)}
            {demoLink.type}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
