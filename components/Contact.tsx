
import React from 'react';
import SectionWrapper from './SectionWrapper';
import { MailIcon } from './icons/ActionIcons';

const Contact: React.FC = () => {
  return (
    <SectionWrapper id="contact" title="Get In Touch">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-lg text-light-text mb-8">
          I'm currently open to new opportunities and collaborations. If you have a project in mind or just want to say hello, feel free to reach out. Let's build something amazing together!
        </p>
        <a
          href="mailto:piyush.gokhe@example.com"
          className="inline-flex items-center bg-accent text-primary font-bold py-3 px-8 rounded-full text-lg hover:bg-[#00b86b] transition-transform transform hover:scale-105 duration-300"
        >
          <MailIcon className="w-6 h-6 mr-3" />
          Say Hello
        </a>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
