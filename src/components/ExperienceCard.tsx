import React from 'react';

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
}

export function ExperienceCard({ title, company, period, responsibilities }: ExperienceCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
        <div>
          <h3 className="font-bold text-xl text-gray-800">{title}</h3>
          <p className="text-blue-600 font-medium">{company}</p>
        </div>
        <p className="text-sm text-gray-500 mt-1 md:mt-0">{period}</p>
      </div>
      <ul className="space-y-2 text-gray-600">
        {responsibilities.map((responsibility, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="text-blue-500 mt-1.5">•</span>
            <span>{responsibility}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}