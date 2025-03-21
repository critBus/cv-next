import React from 'react';
import Timeline from './Timeline';
import TechBadge from './TechBadge';
import Image from 'next/image';

interface Company {
  type: 'company' | 'personal' | 'student';
  name: string;
  logo?: string;
}

interface Experience {
  id: number;
  company: Company;
  position: string;
  startDate: string;
  endDate: string;
  description: string[];
  technologies: string[];
}

interface ExperienceSectionProps {
  experiences: Experience[];
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experiences }) => {
  const timelineItems = experiences.map(exp => ({
    date: `${exp.startDate} - ${exp.endDate}`,
    title: exp.position,
    subtitle: (
      <div className="flex items-center gap-2">
        {exp.company.logo && (
          <Image
            src={`/${exp.company.logo}`}
            alt={`${exp.company.name} logo`}
            width={24}
            height={24}
            className="object-contain"
          />
        )}
        <span>{exp.company.name}</span>
      </div>
    ),
    description: (
      <>
        <div className="mb-4 space-y-2">
          {exp.description.map((desc, idx) => (
            <p key={idx} >{desc}</p>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {exp.technologies.map((tech, index) => (
            <TechBadge
              key={index}
              tech={tech}
              variant="compact"
            />
          ))}
        </div>
      </>
    ),
  }));

  return (
    <>
      <h2 className="text-3xl font-bold mb-8 text-center">Experiencia Laboral</h2>
      <Timeline items={timelineItems} />
    </>
  );
};

export default ExperienceSection;
