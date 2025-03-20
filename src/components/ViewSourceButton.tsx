import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss } from 'react-icons/si';

const ViewSourceButton = () => {
  return (
    <div className="fixed bottom-8 left-8 z-50">
      <a
        href="https://github.com/critBus/cv-next"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 px-4 py-2 bg-white/90 dark:bg-gray-800/90 rounded-full shadow-lg hover:shadow-xl transition-all backdrop-blur-sm border border-gray-200 dark:border-gray-700"
      >
        <FaGithub className="text-xl text-gray-700 dark:text-gray-300 group-hover:rotate-12 transition-transform" />
        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
          <SiNextdotjs className="text-lg" />
          <span>+</span>
          <SiTailwindcss className="text-lg text-[#06B6D4]" />
        </div>
      </a>
    </div>
  );
};

export default ViewSourceButton;
