import React from 'react';
import SectionWrapper from './SectionWrapper';
import { projects } from '../constants';
import { GitHubIcon } from './icons/SocialIcons';
import { ExternalLinkIcon } from './icons/ActionIcons';
import useParallax from '../hooks/useParallax';

const ProjectCard: React.FC<typeof projects[0]> = ({ title, description, imageUrl, technologies, liveUrl, sourceUrl }) => {
    return (
        <div className="bg-primary rounded-lg shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl border border-gray-800 flex flex-col h-full">
            <img className="w-full h-56 object-cover" src={imageUrl} alt={title} />
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-2 text-white">{title}</h3>
                <p className="text-dark-text mb-4 flex-grow">{description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {technologies.map((tech) => (
                        <span key={tech} className="bg-secondary text-accent text-xs font-semibold px-3 py-1 rounded-full">{tech}</span>
                    ))}
                </div>
                <div className="mt-auto pt-4 flex items-center justify-end space-x-4 border-t border-gray-800">
                    <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-dark-text hover:text-accent transition-colors duration-300">
                        <ExternalLinkIcon className="w-5 h-5 mr-2" />
                        Live Demo
                    </a>
                    <a href={sourceUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-dark-text hover:text-accent transition-colors duration-300">
                        <GitHubIcon className="w-5 h-5 mr-2" />
                        Source
                    </a>
                </div>
            </div>
        </div>
    );
};

const ParallaxProjectCard: React.FC<typeof projects[0]> = (project) => {
    const cardRef = useParallax<HTMLDivElement>(-0.05);
    return (
        <div ref={cardRef} className="transition-transform duration-200 ease-out">
            <ProjectCard {...project} />
        </div>
    );
};


const Projects: React.FC = () => {
  return (
    <SectionWrapper id="projects" title="My Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ParallaxProjectCard key={index} {...project} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Projects;