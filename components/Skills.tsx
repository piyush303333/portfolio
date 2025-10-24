import React from 'react';
import SectionWrapper from './SectionWrapper';
import { skills } from '../constants';
import { CodeIcon, DatabaseIcon, ToolIcon, BrushIcon } from './icons/CategoryIcons';

const categoryIcons: { [key: string]: React.ReactNode } = {
  'Languages & Frameworks': <CodeIcon className="w-8 h-8 mr-4 text-accent" />,
  'State Management & Data': <DatabaseIcon className="w-8 h-8 mr-4 text-accent" />,
  'Tools & Platforms': <ToolIcon className="w-8 h-8 mr-4 text-accent" />,
  'Design & UI/UX': <BrushIcon className="w-8 h-8 mr-4 text-accent" />,
};


const Skills: React.FC = () => {
  return (
    <SectionWrapper id="skills" title="Technical Skills">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {skills.map((category) => (
          <div key={category.title} className="bg-primary p-6 rounded-lg shadow-lg border border-gray-800">
            <h3 className="text-2xl font-bold mb-6 flex items-center text-white">
              {categoryIcons[category.title]}
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.items.map((skill) => {
                // FIX: Instead of cloning a React element, we now get the component constructor from props and render it.
                // This is a cleaner pattern and fixes the TypeScript error caused by React.cloneElement with generic elements.
                const Icon = skill.icon;
                return (
                  <span
                    key={skill.name}
                    className="bg-gray-800 text-light-text px-4 py-2 rounded-full text-sm font-medium border border-gray-700 flex items-center gap-2 transition-colors hover:border-accent hover:text-accent"
                  >
                    <Icon className="w-5 h-5" />
                    {skill.name}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;