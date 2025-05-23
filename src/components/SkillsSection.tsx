import React from "react";
import cvData from "@/data/cv.json";
const SkillsSection: React.FC = () => {
  return (
    <section className="mb-16 w-full max-w-5xl">
      <h2 className="text-3xl font-bold mb-8 text-center">Habilidades</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {Object.entries(cvData.skills).map(([category, skills]) => (
          <div key={category} className="bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4 capitalize text-center">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-900 text-blue-100 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default SkillsSection;
