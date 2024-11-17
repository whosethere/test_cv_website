import React from 'react';

interface SkillBadgeProps {
  name: string;
}

export function SkillBadge({ name }: SkillBadgeProps) {
  return (
    <div className="bg-white px-4 py-3 rounded-xl border border-gray-100 text-center hover:border-blue-200 hover:shadow-md transition-all duration-300">
      <span className="font-medium text-gray-700">{name}</span>
    </div>
  );
}