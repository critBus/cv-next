import React from 'react';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import cvData from '@/data/cv.json';
import Link from 'next/link';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <main className="container mx-auto px-4 py-12 max-w-6xl flex flex-col items-center">
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
      </main>
    </div>
  );
}
