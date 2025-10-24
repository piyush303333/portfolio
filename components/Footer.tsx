
import React from 'react';
import { GitHubIcon, LinkedInIcon } from './icons/SocialIcons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary border-t border-gray-800">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center">
        <div className="text-dark-text text-sm mb-4 sm:mb-0">
          &copy; {new Date().getFullYear()} Piyush Gokhe. All Rights Reserved.
        </div>
        <div className="flex space-x-6">
          <a href="https://github.com/piyushgokhe" target="_blank" rel="noopener noreferrer" className="text-dark-text hover:text-accent transition-colors">
            <GitHubIcon className="h-6 w-6" />
          </a>
          <a href="https://www.linkedin.com/in/piyush-gokhe-b75578340" target="_blank" rel="noopener noreferrer" className="text-dark-text hover:text-accent transition-colors">
            <LinkedInIcon className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;