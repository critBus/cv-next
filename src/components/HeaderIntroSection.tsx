import React from 'react';
import cvData from '@/data/cv.json';
const HeaderIntroSection: React.FC = () => {
    return (
        <section className="mb-16 text-center w-full">
            <h1 className="text-4xl font-bold mb-4">{cvData.personalInfo.name}</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">{cvData.personalInfo.title}</p>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                {cvData.personalInfo.summary}
            </p>
        </section>
    );
};
export default HeaderIntroSection;
