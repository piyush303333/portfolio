
import React from 'react';
import SectionWrapper from './SectionWrapper';
import { experiences } from '../constants';

const ExperienceItem: React.FC<typeof experiences[0]> = ({ title, company, duration, responsibilities }) => {
  return (
    <div className="relative pl-10 pb-10 border-l-2 border-gray-700">
      <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-accent"></span>
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="font-semibold text-accent mb-1">{company}</p>
      <p className="text-sm text-dark-text mb-3">{duration}</p>
      <ul className="list-disc list-inside text-light-text space-y-2">
        {responsibilities.map((resp, index) => (
          <li key={index}>{resp}</li>
        ))}
      </ul>
    </div>
  );
};

const Experience: React.FC = () => {
  return (
    <SectionWrapper id="experience" title="Work Experience">
      <div className="max-w-3xl mx-auto">
        {experiences.map((exp, index) => (
          <ExperienceItem key={index} {...exp} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Experience;
