export type ProjectType = {
  slug: string;
  imgSrc: string;
  images: string[];
  title: string;
  tags: string[];
  description: string[];
  technologies: string[];
  link: string;
  liveUrl?: string;
};

export type ExperienceType = {
  year: string;
  title: string;
  institute: string;
  desc: string;
};

// export type ServiceType = {
//   title: string;
//   desc: string;
//   projects: string;
//   icon: JSX.Element;
// };

export type ToolsType = {
  imgSrc: string;
  label: string;
};

// export type StatsType = {
//   number: string;
//   label: string;
// };

// export type TestimonialsType = {
//   name: string;
//   role: string;
//   image: string;
//   text: string;
//   link: string;
// };

export type LinksType = {
  label: string;
  link: string;
  icon: React.ElementType;
};

export type ActivityType = {
  imgSrc: string;
  title: string;
  organization: string;
  date: string;
  description: string;
  tags: string[];
};
