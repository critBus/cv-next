import React from 'react';

interface TimelineItem {
  date: string;
  title: string;
  subtitle?: string | React.ReactNode;
  description?: string | React.ReactNode;
}

interface TimelineProps {
  items: TimelineItem[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className="relative">
      <div className="absolute left-4 h-full w-0.5 bg-gray-200"></div>
      {items.map((item, index) => (
        <div key={index} className="mb-8 flex items-start">
          <div className="absolute left-4 -ml-2 h-4 w-4 rounded-full bg-blue-500"></div>
          <div className="ml-12">
            <span className="block text-sm font-semibold text-gray-500">{item.date}</span>
            <h3 className="mt-1 text-xl font-bold">{item.title}</h3>
            {item.subtitle && (
              <h4 className="text-md font-semibold text-gray-600">{item.subtitle}</h4>
            )}
            {item.description && (
              <div className="mt-2 text-gray-600">{item.description}</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
