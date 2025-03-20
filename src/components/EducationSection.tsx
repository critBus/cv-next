import React from 'react';
import { FaGraduationCap, FaUniversity } from 'react-icons/fa';
import { HiAcademicCap } from 'react-icons/hi';
import cvData from '@/data/cv.json';

interface Education {
  id: number;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
}

const EducationSection: React.FC = () => {
  return (
    <section className="w-full max-w-4xl mb-16">
      <div className="flex items-center justify-center gap-3 mb-8">
        <HiAcademicCap className="text-3xl text-blue-600 dark:text-blue-400" />
        <h2 className="text-3xl font-bold">Educación</h2>
      </div>

      <div className="space-y-6">
        {cvData.education.map((edu: Education) => (
          <div
            key={edu.id}
            className="group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
              <div className="flex-1">
                <div className="flex items-start gap-3">
                  <FaUniversity className="text-2xl text-blue-600 dark:text-blue-400 mt-1 group-hover:scale-110 transition-transform" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                      {edu.field}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">
                      {edu.institution}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 font-medium bg-gray-50 dark:bg-gray-700/50 px-4 py-2 rounded-full">
                <FaGraduationCap className="text-lg" />
                <span>{edu.startDate} - {edu.endDate}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
