
import React from 'react';
import { GitHubIcon, LinkedInIcon } from './icons/SocialIcons';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="w-full min-h-screen flex items-center justify-center bg-primary px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-4xl animate-fade-in-up">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white">
          Hello, I'm <span className="text-accent">Piyush Gokhe</span>
        </h1>
        <p className="mt-4 text-lg sm:text-xl md:text-2xl text-light-text">
          A second-year engineering student deeply passionate about programming, software development, logical thinking, and Data Structures & Algorithms (DSA).
        </p>
        <div className="mt-8 flex justify-center space-x-6">
          <a href="https://github.com/piyushgokhe" target="_blank" rel="noopener noreferrer" className="text-dark-text hover:text-accent transition-colors duration-300">
            <GitHubIcon className="h-8 w-8" />
          </a>
          <a href="https://www.linkedin.com/in/piyush-gokhe-b75578340" target="_blank" rel="noopener noreferrer" className="text-dark-text hover:text-accent transition-colors duration-300">
            <LinkedInIcon className="h-8 w-8" />
          </a>
        </div>
        <div className="mt-10">
          <a
            href="#contact"
            className="inline-block bg-accent text-primary font-bold py-3 px-8 rounded-full text-lg hover:bg-[#00b86b] transition-transform transform hover:scale-105 duration-300"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;