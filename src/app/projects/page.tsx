import React from 'react';
import ProjectsSection from '@/components/ProjectsSection';
import cvData from '@/data/cv.json';
import Link from 'next/link';

export default function ProjectsPage() {
  return (
    <div className="w-full max-w-5xl">
      <div className="flex items-center justify-center mb-6">
        <Link
          href="/"
          className="inline-flex items-center bg-white dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700 px-4 py-2 text-blue-500 hover:text-blue-700 hover:border-blue-500 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
          Volver al CV
        </Link>
      </div>

      <ProjectsSection projects={cvData.projects} />
    </div>
  );
}
