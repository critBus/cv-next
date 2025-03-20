import React from 'react';
import ProjectsSection from '@/components/ProjectsSection';
import cvData from '@/data/cv.json';
import Link from 'next/link';

export default function ProjectsPage() {
  return (
    <div className="w-full max-w-5xl">
      <Link
        href="/"
        className="inline-flex items-center text-blue-500 hover:text-blue-700 mb-12 transition-colors"
      >
        <span className="mr-2">←</span>
        Volver al CV
      </Link>

      <ProjectsSection projects={cvData.projects} />
    </div>
  );
}
