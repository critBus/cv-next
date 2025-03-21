import React from 'react';
import TechBadge from './TechBadge';
import cvData from '@/data/cv.json';

const TechStackSection: React.FC = () => {
  const { skills } = cvData;

  return (
    <section className="w-full max-w-4xl mb-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Stack Tecnológico</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(skills).map(([category, categorySkills], idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
              {category}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {categorySkills.map((skill: string, skillIdx: number) => (
                <div
                  key={skillIdx}
                  className="flex flex-col items-center gap-2 p-3 rounded-lg bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
                >
                  <TechBadge tech={skill} variant="compact" />
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
