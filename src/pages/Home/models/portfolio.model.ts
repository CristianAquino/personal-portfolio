export interface Data {
  user: User;
  projects: Project[];
  skills: Skill[];
}
export interface Social {
  name: string;
  url: string;
  color: string;
}
export interface User {
  name: string;
  description: string;
  avatar: string;
  social: Social[];
  email: {
    send: string;
    color: string;
  };
  curriculum: {
    url: string;
  };
}
export interface Project {
  name: string;
  description: string;
  technologies: [
    {
      name: string;
      icon: string;
    }
  ];
  url: string;
  image: {
    thumbnail: string;
  };
}
export interface Skill {
  languages: {
    name: string;
    icon: string;
  }[];
  frameworks: {
    name: string;
    icon: string;
  }[];
  clouds: {
    name: string;
    icon: string;
  }[];
  tools: {
    name: string;
    icon: string;
  }[];
}
