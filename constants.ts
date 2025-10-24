import React from 'react';
import {
    ReactIcon,
    TypeScriptIcon,
    NodeIcon,
    NextJSIcon,
    TailwindIcon,
    GitIcon,
    FigmaIcon,
    DockerIcon,
    ReduxIcon,
    GraphQLIcon,
    ViteIcon,
    VercelIcon,
    AWSIcon,
    JestIcon,
    DefaultSkillIcon,
    CodeFileIcon,
    CIcon,
    PythonIcon,
    JavaScriptIcon,
} from './components/icons/SkillIcons';

export interface SkillItem {
    name: string;
    // FIX: Changed type from React.ReactElement to a React Functional Component that accepts className.
    // This allows passing the component itself, not an instance, which is a better pattern and fixes type errors.
    icon: React.FC<{ className?: string }>;
}

export interface SkillCategory {
    title: string;
    items: SkillItem[];
}

export const skills: SkillCategory[] = [
  {
    title: 'Languages & Frameworks',
    items: [
        // FIX: Pass component references instead of instantiated elements.
        { name: 'C', icon: CIcon },
        { name: 'Python', icon: PythonIcon },
        { name: 'TypeScript', icon: TypeScriptIcon },
        { name: 'React', icon: ReactIcon },
        { name: 'HTML5', icon: CodeFileIcon },
        { name: 'CSS3 / SCSS', icon: CodeFileIcon },
        { name: 'Tailwind CSS', icon: TailwindIcon },
    ],
  },
  {
    title: 'State Management & Data',
    items: [
        { name: 'Redux Toolkit', icon: ReduxIcon },
        { name: 'Zustand', icon: DefaultSkillIcon },
        { name: 'React Query', icon: DefaultSkillIcon },
        { name: 'GraphQL (Apollo)', icon: GraphQLIcon },
        { name: 'RESTful APIs', icon: DefaultSkillIcon },
    ],
  },
  {
    title: 'Tools & Platforms',
    items: [
        { name: 'Git & GitHub', icon: GitIcon },
        { name: 'Webpack', icon: DefaultSkillIcon },
        { name: 'Vite', icon: ViteIcon },
        { name: 'Docker', icon: DockerIcon },
        { name: 'Vercel', icon: VercelIcon },
        { name: 'AWS (S3, CloudFront)', icon: AWSIcon },
        { name: 'Jest', icon: JestIcon },
        { name: 'React Testing Library', icon: ReactIcon },
    ],
  },
  {
    title: 'Design & UI/UX',
    items: [
        { name: 'Figma', icon: FigmaIcon },
        { name: 'Responsive Design', icon: DefaultSkillIcon },
        { name: 'Accessibility (WCAG)', icon: DefaultSkillIcon },
        { name: 'Component Libraries', icon: DefaultSkillIcon },
        { name: 'Design Systems', icon: DefaultSkillIcon },
    ],
  }
];

export const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce site with a modern UI, product filtering, shopping cart, and a secure checkout process.',
    imageUrl: 'https://picsum.photos/seed/project1/600/400',
    technologies: ['React', 'Next.js', 'TypeScript', 'Stripe', 'GraphQL', 'Tailwind CSS'],
    liveUrl: '#',
    sourceUrl: '#',
  },
  {
    title: 'Data Visualization Dashboard',
    description: 'An interactive dashboard for visualizing complex datasets with dynamic charts, graphs, and data tables.',
    imageUrl: 'https://picsum.photos/seed/project2/600/400',
    technologies: ['React', 'TypeScript', 'D3.js', 'Recharts', 'Redux Toolkit'],
    liveUrl: '#',
    sourceUrl: '#',
  },
  {
    title: 'Collaborative Project Manager',
    description: 'A real-time project management tool with features like drag-and-drop task boards, comments, and notifications.',
    imageUrl: 'https://picsum.photos/seed/project3/600/400',
    technologies: ['React', 'Firebase', 'TypeScript', 'Zustand', 'Styled Components'],
    liveUrl: '#',
    sourceUrl: '#',
  },
];

export const experiences = [
  {
    title: 'Senior Frontend Engineer',
    company: 'Tech Solutions Inc.',
    duration: 'Jan 2020 - Present',
    responsibilities: [
      'Led the development of a new design system, improving consistency and development speed by 40%.',
      'Architected and built complex, scalable user interfaces for enterprise-level SaaS applications.',
      'Mentored a team of 5 junior and mid-level engineers, conducting code reviews and providing technical guidance.',
      'Improved web application performance by 30% through code splitting, lazy loading, and optimization techniques.',
    ],
  },
  {
    title: 'Frontend Developer',
    company: 'Innovate Co.',
    duration: 'Jun 2017 - Dec 2019',
    responsibilities: [
      'Developed and maintained client-facing web applications using React and Redux.',
      'Collaborated with UI/UX designers to translate wireframes into high-quality, responsive code.',
      'Wrote unit and integration tests using Jest and React Testing Library, increasing code coverage by 50%.',
      'Participated in an agile development process, contributing to sprint planning and retrospectives.',
    ],
  },
];