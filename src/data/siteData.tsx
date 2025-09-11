import type { ReactNode } from 'react';
import { 
  SiReact, SiTypescript, SiTailwindcss, SiNodedotjs, SiExpress, SiMongodb, 
  SiGithub, SiLinkedin, 
  SiMysql,
  SiDocker,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiRedux,
  SiGit,
  SiPostman,
  SiFramer,
  SiFirebase,
  SiAppwrite
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
  { name: 'Javascript', icon: <SiJavascript className="text-yellow-400" /> },
  { name: 'HTML5', icon: <SiHtml5 className="text-orange-500" /> },
  { name: 'CSS3', icon: <SiCss3 className="text-blue-500" /> },
  { name: 'Redux', icon: <SiRedux className="text-purple-500" /> },
  { name: 'Github', icon: <SiGithub className="text-neutral-300" /> },
  { name: 'Git', icon: <SiGit className="text-orange-500" /> },
  { name: 'Postman', icon: <SiPostman className="text-orange-400" /> },
  { name: 'Framer', icon: <SiFramer className="text-fuchsia-500" /> },
  { name: 'Firebase', icon: <SiFirebase className="text-amber-400" /> },
  { name: 'TypeScript', icon: <SiTypescript className="text-blue-500" /> },
  { name: 'Tailwind', icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: 'Node.js', icon: <SiNodedotjs className="text-green-500" /> },
  { name: 'Express', icon: <SiExpress className="text-neutral-300" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-emerald-500" /> },
  { name: 'Mysql', icon: <SiMysql className="text-sky-500" /> },
  { name: 'Docker', icon: <SiDocker className="text-blue-400" /> },
  { name: 'Appwrite', icon: <SiAppwrite className="text-rose-500" /> },
];

export const projects: Project[] = [
  {
    id: 'p1',
    title: 'CareerVista',
    description: 'A modern Job Portal application, providing essential features like user authentication, role-based access, job management, and application tracking. Built with Node.js, Express.js, and MongoDB',
    tech: ['React', 'TypeScript', 'Tailwind', 'Node', 'Express', 'MongoDB'],
    repo: 'https://github.com/utkxrsh13/CareerVista-Backend',
  demo: 'https://career-vista.onrender.com/',
  image: '/p2.png',
  featured: true,
  highlight: 'Featured Project'
  },
  {
    id: 'p2',
    title: 'InspiraPix',
    description: 'Built with the MERN stack, the app provides an intuitive interface where users can type in text prompts, and the AI generates images in real time. It aims to explore the potential of AI in creative fields like art, design, and content generation.',
    tech: ['React', 'MongoDB', 'Tailwind', 'Framer-motion'],
  repo: 'https://github.com/utkxrsh13/Text_to_Image',
  demo: 'https://inspirapix.vercel.app/',
  image: '/p1.png',
  featured: true,
  highlight: 'Featured Project'
  },
  {
    id: 'p3',
    title: 'InquiziAI',
    description: 'Built to streamline quiz/test creation for educators, students, and content creators — supports customizable question count, future difficulty levels, and intelligent prompt engineering.',
    tech: ['React', 'Tailwind', 'FastApi','Hugging Face'],
    repo: 'https://github.com/utkxrsh13/Inquizii'
  },
  {
    id: 'p4',
    title: 'Ground Water Level Prediction',
    description: 'Groundwater Level Prediction A machine learning-powered project to predict groundwater levels using historical and environmental data. Utilizes regression models for accurate forecasting to aid sustainable water resource management.',
    tech: ['React', 'Python', 'FastApi','LLMs'],
    repo: 'https://github.com/utkxrsh13/GWLP',
    demo: 'https://gwlp.vercel.app/'
  },
  {
    id: 'p5',
    title: 'File Transfer App',
    description: 'A cross-platform application to transfer files of any type from one person to another, featuring user authentication and secure file transmission using sockets.',
    tech: ['React', 'Tailwind', 'Node.js', 'Socket.io'],
    repo: 'https://github.com/utkxrsh13/Inquizii'
  }
  ,
  {
    id: 'p5',
    title: 'Caffeino',
    description: 'A coffee delivery app with features like user authentication, browsing coffee options, placing orders, and tracking delivery status in real-time.',
    tech: ['React native', 'Zustand', 'typeScript'],
    repo: 'https://github.com/utkxrsh13/Inquizii',
  demo: 'https://github.com/utkxrsh13/Caffeino-App'
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
  { name: 'GitHub', icon: <SiGithub />, url: 'https://github.com/utkxrsh13' },
  { name: 'LinkedIn', icon: <SiLinkedin />, url: 'https://linkedin.com/in/utkxrsh13' },
];
