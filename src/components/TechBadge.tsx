import React from 'react';
import Image from 'next/image';
import {
  SiJavascript, SiTypescript, SiReact, SiNextdotjs,
  SiNodedotjs, SiExpress, SiPython, SiDjango,
  SiMongodb, SiPostgresql, SiMysql, SiNeo4J,
  SiTailwindcss, SiBootstrap, SiGit, SiDocker,
  SiCss3, SiHtml5, SiTensorflow, SiKeras,
  SiVuedotjs, SiVuetify
} from 'react-icons/si';
import { BiBrain } from 'react-icons/bi';

type IconMapType = {
  [key: string]: (selected?: boolean) => React.ReactNode;
};

const iconMap: IconMapType = {
  'JavaScript': () => <SiJavascript className="text-[#F7DF1E]" />,
  'TypeScript': () => <SiTypescript className="text-[#3178C6]" />,
  'React': () => <SiReact className="text-[#61DAFB]" />,
  'Next.js': () => <SiNextdotjs className="text-gray-900 dark:text-white" />,
  'Node.js': () => <SiNodedotjs className="text-[#339933]" />,
  'Express': () => <SiExpress className="text-gray-900 dark:text-white" />,
  'Python': () => <SiPython className="text-[#3776AB]" />,
  'Django': () => <SiDjango className="text-[#092E20]" />,
  'Django Rest Framework': (selected) => (
    <div className="w-5 h-5 relative flex-shrink-0">
      <Image 
        src="/Django REST.svg" 
        alt="Django REST Framework" 
        fill
        className={`object-contain ${selected ? 'invert' : 'dark:invert'}`}
      />
    </div>
  ),
  'MongoDB': () => <SiMongodb className="text-[#47A248]" />,
  'PostgreSQL': () => <SiPostgresql className="text-[#4169E1]" />,
  'MySQL': () => <SiMysql className="text-[#4479A1]" />,
  'Neo4j': () => <SiNeo4J className="text-[#4581C3]" />,
  'Tailwind CSS': () => <SiTailwindcss className="text-[#06B6D4]" />,
  'Bootstrap': () => <SiBootstrap className="text-[#7952B3]" />,
  'Git': () => <SiGit className="text-[#F05032]" />,
  'Docker': () => <SiDocker className="text-[#2496ED]" />,
  'CSS': () => <SiCss3 className="text-[#1572B6]" />,
  'HTML': () => <SiHtml5 className="text-[#E34F26]" />,
  'IA': () => <BiBrain className="text-[#00A67D]" />,
  'Keras': () => <SiKeras className="text-[#D00000]" />,
  'TensorFlow': () => <SiTensorflow className="text-[#FF6F00]" />,
  'Vue': () => <SiVuedotjs className="text-[#4FC08D]" />,
  'Vuetify': () => <SiVuetify className="text-[#1867C0]" />,
  'Deepface': () => <BiBrain className="text-[#3776AB]" /> // Usando el icono de cerebro en color Python
};

interface TechBadgeProps {
  tech: string;
  onClick?: () => void;
  selected?: boolean;
  variant?: 'default' | 'filter' | 'compact';
}

const TechBadge: React.FC<TechBadgeProps> = ({
  tech,
  onClick,
  selected = false,
  variant = 'default'
}) => {
  const getIcon = iconMap[tech];

  const baseStyles = "flex items-center gap-2 font-medium transition-all transform";
  const variants = {
    default: "px-3 py-1.5 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm hover:scale-105",
    filter: `px-4 py-1.5 rounded-full text-sm ${selected
      ? 'bg-blue-600 text-white shadow-md'
      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
    }`,
    compact: "px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-md text-sm hover:bg-gray-200 dark:hover:bg-gray-600"
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]}`}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      {getIcon && <span className="text-lg flex items-center justify-center">{getIcon(variant === 'filter' && selected)}</span>}
      <span>{tech}</span>
    </button>
  );
};

export default TechBadge;
