import React from 'react';
import Timeline from './Timeline';

interface Experience {
  id: number;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
  technologies: string[];
}

interface ExperienceSectionProps {
  experiences: Experience[];
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experiences }) => {
  const timelineItems = experiences.map(exp => ({
    date: `${exp.startDate} - ${exp.endDate}`,
    title: exp.position,
    subtitle: exp.company,
    description: (
      <>
        <p className="mb-2 text-center">{exp.description}</p>
        <div className="flex flex-wrap gap-2 justify-center">
          {exp.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-md text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </>
    ),
  }));

  return (
    <section className="w-full">
      <h2 className="text-3xl font-bold mb-8 text-center">Experiencia Laboral</h2>
      <Timeline items={timelineItems} />
    </section>
  );
};

export default ExperienceSection;
