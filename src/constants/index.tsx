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
import { Briefcase, FileText, Home, Mail, User, Sparkles } from 'lucide-react';

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
    slug: 'end-to-end-devsecops',
    imgSrc: '/images/project-demo-5.png',
    images: ['/images/project-demo-5.png'],
    title: 'End-to-End DevSecOps',
    tags: ['DevOps', 'Cloud'],
    description: [
      'An end-to-end DevSecOps project focused on building an automated software delivery pipeline on AWS. The project combines cloud infrastructure provisioning, continuous integration, security analysis, and automated deployment into a unified workflow.',
      'The infrastructure is provisioned using Terraform, including an Amazon EKS cluster and a Jenkins server hosted on EC2. Jenkins automates the application build and testing process, while Docker is used to package the application into container images.',
      'The pipeline integrates SonarQube for code quality analysis, Trivy for container image vulnerability scanning, and OWASP Dependency-Check for identifying vulnerable dependencies. After the image is built and pushed to Docker Hub, ArgoCD manages the deployment to Kubernetes using GitOps practices.',
    ],
    technologies: [
      'AWS',
      'Docker',
      'Jenkins',
      'ArgoCD',
      'Terraform',
      'Kubernetes ',
    ],
    link: 'https://github.com/Suphawit-Hngosakul/CS365'
  },
  {
    slug: 'n-sound-line-chat-bot',
    imgSrc: '/images/project-demo-3.png',
    images: ['/images/project-demo-3.png'],
    title: `N'Sound Line Chat Bot`,
    tags: ['Full Stack', 'Cloud', 'Development'],
    description: [
      "N'Sound is a LINE-based chatbot developed to simplify the collection of acoustic survey data during an exchange program in Japan. The system provides a convenient way for participants to complete surveys directly through LINE, eliminating the need for traditional paper-based questionnaires.",
      'The platform includes a web-based survey management interface where users can create and customize questionnaires by defining questions and response formats. These configurations are converted into JSON and delivered to the chatbot, allowing it to dynamically guide respondents through the survey one question at a time using the LINE Messaging API.',
      'In addition to collecting survey responses, the chatbot captures GPS location data to associate each submission with its geographical coordinates. This enables the collected acoustic data to be analyzed alongside location information, supporting further research and spatial analysis of environmental sound conditions.',
    ],
    technologies: ['HTML', 'CSS', 'Python', 'AWS', 'Line API'],
    link: 'https://github.com/Nattasak-Chonmanat/N-Sound-2.0'
  },
  {
    slug: 'health-risk-mapping',
    imgSrc: '/images/project-demo-1.png',
    images: ['/images/project-demo-1.png'],
    title: 'Health Risk Mapping',
    tags: ['Full Stack', 'Data Visualization', 'Development'],
    description: [
      'Health Risk Mapping is a web-based application developed during an exchange program in Japan to make acoustic survey data more accessible and easier to understand. The platform transforms collected field survey data into an interactive map, allowing users to explore environmental sound conditions across different locations.',
      "The application visualizes geographical data collected from the N'Sound acoustic survey, including ambient noise levels measured in decibels (dB) and participants' heart rates. By plotting these measurements on a map, users can explore how noise levels and physiological responses vary across different areas.",
      'The project focuses on presenting complex survey data through an intuitive geospatial interface, making environmental information easier for the general public to explore and understand while supporting further analysis of noise exposure and its potential relationship with human health.',
    ],
    technologies: ['HTML', 'CSS', 'JS', 'Postgres'],
    link: 'https://github.com/Nattasak-Chonmanat/health-risk-mapping'
  },
  {
    slug: 'fitjad',
    imgSrc: '/images/project-demo-2.png',
    images: ['/images/project-demo-2.png'],
    title: 'FitJAD',
    tags: ['Back End', 'REST API', 'Development'],
    description: [
      'FitJAD is a fitness management application developed to provide backend services for a fitness center platform. Built with Spring Boot, the project exposes RESTful APIs to support communication between the application and its underlying database, providing a structured foundation for managing fitness-related data.',
      'The backend integrates with a MySQL database to persist application data and uses Docker Compose to orchestrate the Spring Boot application and database services. This containerized setup simplifies environment configuration and makes the application easier to build, run, and maintain across different development environments.',
      'The project also integrates Swagger UI for API documentation and testing, allowing developers to explore available endpoints and interact with the backend directly. Overall, FitJAD demonstrates practical experience in REST API development, relational database integration, and containerized application deployment.',
    ],
    technologies: ['Spring Boot', 'MySQL', 'Docker', 'Swagger UI'],
    link: 'https://github.com/Nattasak-Chonmanat/fitness_backend_cs251'
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
    desc: 'Built and optimized responsive websites, collaborating closely with UX/UI designers and developer team.',
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
