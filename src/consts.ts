import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Antonio Padilla",
  EMAIL: "hi@tonio.io",
  NUM_POSTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Antonio Padilla",
  DESCRIPTION: "Product Designer and Developer",
};

export const SOCIALS: Socials = [
  {
    NAME: "Dribbble",
    HREF: "https://dribbble.com/heytonio",
  },
  {
    NAME: "Behance",
    HREF: "https://www.behance.net/toniopadilla",
  },
  {
    NAME: "Github",
    HREF: "https://github.com/heytonio",
  },
  {
    NAME: "LinkedIn",
    HREF: "https://www.linkedin.com/in/heytonio/",
  },
];

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const PORTFOLIO: Metadata = {
  TITLE: "Portfolio",
  DESCRIPTION: "A collection of my work and side projects.",
};
