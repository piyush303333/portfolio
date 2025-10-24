
import React from 'react';
import SectionWrapper from './SectionWrapper';

const About: React.FC = () => {
  return (
    <SectionWrapper id="about" title="About Me">
      <div className="max-w-3xl mx-auto text-center text-lg text-light-text leading-relaxed">
        <p className="mb-4">
          I enjoy tackling complex problems and am eager to expand my understanding of coding and software engineering. My passion for technology drives me to constantly learn and grow in this ever-evolving field.
        </p>
        <p>
          I’m actively looking to connect with like-minded individuals who share my enthusiasm for learning and collaboration. Let's build something amazing together!
        </p>
      </div>
    </SectionWrapper>
  );
};

export default About;