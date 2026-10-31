export type ProjectType = {
  imgSrc: string;
  title: string;
  tags: string[];
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
