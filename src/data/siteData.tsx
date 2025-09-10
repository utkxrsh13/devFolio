import type { ReactNode } from 'react';
import { 
  SiReact, SiTypescript, SiTailwindcss, SiNodedotjs, SiExpress, SiMongodb, 
  SiGithub, SiLinkedin 
} from 'react-icons/si';

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  repo?: string;
  demo?: string;
  image?: string; // path to project image
  featured?: boolean;
  highlight?: string; // optional short badge or category
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  stack?: string[];
  bullets?: string[];
}

export interface SkillItem { name: string; icon: ReactNode }

export const skills: SkillItem[] = [
  { name: 'React', icon: <SiReact className="text-sky-400" /> },
  { name: 'TypeScript', icon: <SiTypescript className="text-blue-500" /> },
  { name: 'Tailwind', icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: 'Node.js', icon: <SiNodedotjs className="text-green-500" /> },
  { name: 'Express', icon: <SiExpress className="text-neutral-300" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-400" /> },
];

export const projects: Project[] = [
  {
    id: 'p1',
    title: 'Project One',
    description: 'A modern web application demonstrating fullstack capabilities and clean architecture.',
    tech: ['React', 'TypeScript', 'Tailwind', 'Node', 'Express', 'MongoDB'],
    repo: 'https://github.com/username/project-one',
  demo: 'https://project-one.demo',
  featured: true,
  highlight: 'Featured Project'
  },
  {
    id: 'p2',
    title: 'Realtime Dashboard',
    description: 'Interactive realtime analytics dashboard with websockets and modular components.',
    tech: ['React', 'TypeScript', 'Tailwind', 'Socket.io'],
  repo: 'https://github.com/username/realtime-dashboard',
  featured: true,
  highlight: 'Featured Project'
  },
  {
    id: 'p3',
    title: 'Design System Kit',
    description: 'Reusable component library and tokens for rapid UI development.',
    tech: ['React', 'TypeScript', 'Tailwind', 'Storybook'],
    repo: 'https://github.com/username/design-system'
  }
];

export const experience: ExperienceItem[] = [
  {
    id: 'e1',
    role: 'React Developer',
    company: 'Celebal Technologies',
    period: 'July 2025 - August 2025',
    description: 'Building performant, accessible interfaces with React and modern tooling.',
    stack: ['React', 'TypeScript', 'Tailwind'],
    bullets: [
      'Developed and maintained 15+ reusable React components used across multiple projects',
      'Collaborated with cross-functional teams to implement scalable web applications',
      'Optimized application performance resulting in 40% faster load times',
      'Mentored junior developers and conducted code reviews',
      'Implemented responsive designs following modern UI/UX principles'
    ]
  },
  {
    id: 'e2',
    role: 'Frontend Developer',
    company: 'RetoIndia',
    period: 'March 2025 - May 2025',
    description: 'Developed end-to-end MERN applications with focus on security and scalability.',
    stack: ['MERN', 'Cloud'],
    bullets: [
      'Built visually appealing, responsive eCommerce platform serving 1000+ daily users',
      'Developed custom animations and interactive elements using Framer',
      'Collaborated with design team to ensure pixel-perfect implementation',
      'Reduced page load time by 35% through code optimization and asset management',
    ]
  },
  {
    id: 'e3',
    role: 'Fullstack Developer',
    company: 'Freelance',
    period: 'January 2025 - Present',
    description: 'Developed end-to-end MERN applications with focus on security and scalability.',
    stack: ['MERN', 'Payment Integration'],
    bullets: [
      'Completed 2+ successful client projects ranging from portfolios to web applications',
      'Specialized in converting designs to pixel-perfect, responsive websites',
      'Implemented modern JavaScript frameworks and libraries',
      'Maintained 98% client satisfaction rate with timely project delivery',
      'Provided ongoing maintenance and support for deployed applications',
    ]
  }
];

export interface SocialLink { name: string; icon: ReactNode; url: string }
export type { SocialLink as TSocialLink };
export const socials: SocialLink[] = [
  { name: 'GitHub', icon: <SiGithub />, url: 'https://github.com/username' },
  { name: 'LinkedIn', icon: <SiLinkedin />, url: 'https://linkedin.com/in/username' },
];
