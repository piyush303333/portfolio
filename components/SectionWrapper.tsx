import React from 'react';
import useParallax from '../hooks/useParallax';

interface SectionWrapperProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ id, title, children }) => {
  const titleRef = useParallax<HTMLHeadingElement>(-0.1);

  return (
    <section id={id} className="w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-secondary border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 
          ref={titleRef}
          className="text-3xl sm:text-4xl font-bold text-center mb-12 text-accent transition-transform duration-200 ease-out"
        >
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;