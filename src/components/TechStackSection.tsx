import React from 'react';
import { 
  SiJavascript, SiTypescript, SiReact, SiNextdotjs, 
  SiNodedotjs, SiExpress, SiPython, SiDjango,
  SiMongodb, SiPostgresql, SiMysql, SiNeo4J,
  SiTailwindcss, SiBootstrap, SiGit, SiDocker
} from 'react-icons/si';
import cvData from '@/data/cv.json';

type IconMapType = {
  [key: string]: React.ReactNode;
};

const iconMap: IconMapType = {
  'JavaScript': <SiJavascript className="text-[#F7DF1E]" />,
  'TypeScript': <SiTypescript className="text-[#3178C6]" />,
  'React': <SiReact className="text-[#61DAFB]" />,
  'Next.js': <SiNextdotjs className="text-gray-900 dark:text-white" />,
  'Node.js': <SiNodedotjs className="text-[#339933]" />,
  'Express': <SiExpress className="text-gray-900 dark:text-white" />,
  'Python': <SiPython className="text-[#3776AB]" />,
  'Django': <SiDjango className="text-[#092E20]" />,
  'MongoDB': <SiMongodb className="text-[#47A248]" />,
  'PostgreSQL': <SiPostgresql className="text-[#4169E1]" />,
  'MySQL': <SiMysql className="text-[#4479A1]" />,
  'Neo4j': <SiNeo4J className="text-[#4581C3]" />,
  'Tailwind CSS': <SiTailwindcss className="text-[#06B6D4]" />,
  'Bootstrap': <SiBootstrap className="text-[#7952B3]" />,
  'Git': <SiGit className="text-[#F05032]" />,
  'Docker': <SiDocker className="text-[#2496ED]" />
};

const TechStackSection: React.FC = () => {
  const { skills } = cvData;

  const stackCategories = [
    {
      title: "Frontend",
      skills: ["JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Bootstrap"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "Python", "Django"]
    },
    {
      title: "Bases de Datos",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Neo4j"]
    },
    {
      title: "DevOps & Herramientas",
      skills: ["Git", "Docker"]
    }
  ];

  return (
    <section className="w-full max-w-4xl mb-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Stack Tecnológico</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {stackCategories.map((category, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
              {category.title}
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {category.skills.map((skill, skillIdx) => (
                <div
                  key={skillIdx}
                  className="flex flex-col items-center gap-2 p-3 rounded-lg bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
                >
                  <div className="text-2xl transform group-hover:scale-110 transition-transform">
                    {iconMap[skill]}
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStackSection;
