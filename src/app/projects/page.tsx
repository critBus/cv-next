import React from 'react';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import cvData from '@/data/cv.json';
import Link from 'next/link';

export default function ProjectsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 md:p-24">
      <Link 
        href="/" 
        className="self-start mb-8 text-blue-500 hover:text-blue-700 flex items-center"
      >
        ← Volver al CV
      </Link>
      
      <ProjectsSection projects={cvData.projects} />
      
      <footer className="w-full mt-16">
        <ContactSection />
      </footer>
    </main>
  );
}
