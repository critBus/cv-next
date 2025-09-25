import React from "react";
import cvData from "@/data/cv.json";
import { FaCode, FaLaptopCode } from "react-icons/fa";

const HeaderIntroSection: React.FC = () => {
  return (
    <section className="relative mb-16 text-center w-full py-16 overflow-hidden">
      {/* Gradient background with animation */}
      <div className="absolute inset-0 bg-gradient-to-r  from-gray-900 to-blue-900">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      </div>

      {/* Floating icons background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-icon left-[10%] top-[20%]">
          <FaCode className="text-blue-800 text-4xl" />
        </div>
        <div className="floating-icon right-[15%] top-[30%]">
          <FaLaptopCode className="text-indigo-800 text-4xl" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r  from-blue-400 to-indigo-400">
          {cvData.personalInfo.name}
        </h1>
        <div className="transform hover:scale-105 transition-transform duration-300">
          <p className="text-2xl text-gray-300 mb-6 font-medium">
            {cvData.personalInfo.title}
          </p>
        </div>
        <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed text-lg">
          {cvData.personalInfo.summary}
        </p>
      </div>
    </section>
  );
};

export default HeaderIntroSection;
