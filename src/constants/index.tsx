/**
 * Types
 */
import type {
  ActivityType,
  ExperienceType,
  LinksType,
  ProjectType,
  ToolsType,
} from '@/types';

/**
 * Assets
 */
import {
  Briefcase,
  FileText,
  Home,
  Mail,
  User,
  Sparkles
} from 'lucide-react';

import { FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa6';

const navLinks: LinksType[] = [
  { label: 'Home', link: '#hero', icon: Home },
  { label: 'About', link: '#about', icon: User },
  {
    label: 'Projects',
    link: '#projects',
    icon: Briefcase,
  },
  {
    label: 'Activities',
    link: '#activities',
    icon: Sparkles,
  },
  { label: 'Resume', link: '#resume', icon: FileText },
  { label: 'Contact', link: '#contact', icon: Mail },
];

const socialLinks: LinksType[] = [
  {
    icon: FaFacebook,
    label: 'Facebook',
    link: 'https://www.facebook.com/nattasak.chonmanat/',
  },
  {
    icon: FaInstagram,
    label: 'Instagram',
    link: 'https://www.instagram.com/nattasak8/',
  },
  {
    icon: FaGithub,
    label: 'Github',
    link: 'https://github.com/Nattasak-Chonmanat',
  },
];

const projectsData: ProjectType[] = [
  {
    imgSrc: '/images/project-demo-1.png',
    title: 'Health Risk Mapping',
    tags: ['Full Stack', 'Development'],
  },
  {
    imgSrc: '/images/project-demo-2.png',
    title: 'FitJAD',
    tags: ['Back End', 'Development'],
  },
  {
    imgSrc: '/images/project-demo-3.png',
    title: 'Full Stack Link Chat Bot',
    tags: ['Full Stack', 'Development'],
  },
  {
    imgSrc: '/images/project-demo-5.png',
    title: 'End-to-End DevSecOps',
    tags: ['DevOps', 'Cloud'],
  },
];

const activitiesData: ActivityType[] = [
  {
    imgSrc: '/images/p1.jpg',
    title: 'Exchange Program Participant',
    organization: 'Osaka Metropolitan University',
    date: '2025',
    description:
      'Participated in an international exchange program, gaining exposure to different cultures, perspectives, and learning environments while improving communication and adaptability.',
    tags: ['Exchange Program', 'Cross-cultural'],
  },
  {
    imgSrc: '/images/p2.jpg',
    title: 'Hackathon Participant',
    organization: 'Thammasat University',
    date: '2026',
    description:
      'Collaborated with a team to develop a software solution, exchange ideas, and apply technical knowledge to solve real-world problems within a limited timeframe.',
    tags: ['Hackathon', 'Teamwork', 'Development'],
  },
];

const education: ExperienceType[] = [
  {
    year: '2023 – Present',
    title: 'Bachelor of Computer Science',
    institute: 'Thammasat University',
    desc: 'Focused on back-end development, cloud & devops, and web application architecture.',
  },
];

const experience: ExperienceType[] = [
  {
    year: 'June 2026 – Present',
    title: 'Full-Stack Developer Intern',
    institute: 'Cube SoftTech Co.,Ltd.',
    desc: 'Built and optimized responsive websites, collaborating closely with UX/UI designers and developer teams.',
  },
];

const tools: ToolsType[] = [
  {
    label: 'HTML',
    imgSrc:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
  },
  {
    label: 'CSS',
    imgSrc:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
  },
  {
    label: 'Tailwind CSS',
    imgSrc: '/images/tools/tailwindcss.svg',
  },
  {
    label: 'React',
    imgSrc: '/images/tools/react.svg',
  },
  {
    label: 'TypeScript',
    imgSrc:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
  },
  {
    label: 'Node.js',
    imgSrc: '/images/tools/nodejs.svg',
  },
  {
    label: 'Express.js',
    imgSrc: '/images/tools/expressjs.svg',
  },
  // {
  //   label: 'Spring',
  //   imgSrc:
  //     'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg',
  // },
  // {
  //   label: 'PostgresSql',
  //   imgSrc:
  //     'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
  // },
  {
    label: 'AWS',
    imgSrc:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain.svg',
  },
];

export {
  socialLinks,
  projectsData,
  activitiesData,
  education,
  experience,
  tools,
  navLinks,
};


