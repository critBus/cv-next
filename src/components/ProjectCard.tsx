import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import TechBadge from './TechBadge';
import { FaGooglePlay, FaGlobe, FaLaptopCode, FaServer, FaCode, FaUser, FaGraduationCap, FaBuilding } from 'react-icons/fa';

interface DemoLink {
  type: string;
  url: string;
}

interface Client {
  type: 'personal' | 'student' | 'company';
  name?: string;
  logo?: string;
}

interface ProjectCardProps {
  name: string;
  description: string[];
  technologies: string[];
  links?: string[];
  demo?: DemoLink[];
  position_occupied: string;
  client?: Client;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  name, 
  description, 
  technologies, 
  links, 
  demo, 
  position_occupied,
  client 
}) => {
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

  const getPositionIcon = () => {
    switch (position_occupied) {
      case 'Frontend':
        return <FaLaptopCode className="inline mr-1" />;
      case 'Backend':
        return <FaServer className="inline mr-1" />;
      case 'Full Stack':
        return <FaCode className="inline mr-1" />;
      default:
        return null;
    }
  };

  const getClientInfo = () => {
    if (!client) return null;

    switch (client.type) {
      case 'personal':
        return (
          <span className="flex items-center text-gray-600 dark:text-gray-300 text-sm">
            <FaUser className="inline mr-1" />
            Proyecto Personal
          </span>
        );
      case 'student':
        return (
          <span className="flex items-center text-gray-600 dark:text-gray-300 text-sm">
            <FaGraduationCap className="inline mr-1" />
            Proyecto Estudiantil
          </span>
        );
      case 'company':
        return (
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 text-sm">
            {client.logo ? (
              <Image
                src={client.logo}
                alt={`${client.name} logo`}
                width={20}
                height={20}
                className="object-contain"
              />
            ) : (
              <FaBuilding className="inline" />
            )}
            <span>{client.name}</span>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
      <div className="flex justify-between items-start mb-4">
        <div className="space-y-2">
          <h3 className="text-xl font-bold">{name}</h3>
          {getClientInfo()}
        </div>
        <span className="text-gray-600 dark:text-gray-300 flex items-center text-sm">
          {getPositionIcon()}
          {position_occupied}
        </span>
      </div>
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
