import type { Metadata, Site, Socials, I18n } from "@types";

export const SITE: Site = {
  TITLE: "Gustavo Justo",
  DESCRIPTION: "Gustavo personal blog", // RSS and SEO related
  EMAIL: "gustavo_justo@outlook.com",
  ENABLE_GISCUS: false,
  ENABLE_PROJECTS: true,
  // On screens narrower than 1536px, the side TOC is hidden and the inline TOC is shown instead (as if ENABLE_SIDE_TOC was false)
  ENABLE_SIDE_TOC: true,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
  NUM_POSTS_ON_HOMEPAGE: 5,
};

export const I18N: I18n = {
  LANGUAGES: {
    "en": {
      "displayText": "English",
      "sitemapCode": "en"
    },
    "pt-br": {
      "displayText": "Português do Brasil",
      "sitemapCode": "pt-BR",
    }
  },
  DEFAULT_LANGUAGE: 'en'
}

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Astro Micro is an accessible theme for Astro.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects with links to repositories and live demos.",
};

export const SOCIALS: Socials = [
  {
    NAME: "LinkedIn",
    HREF: "https://linkedin.com/in/gustavojst/",
  },
  {
    NAME: "GitHub",
    HREF: "https://github.com/gustavojst",
  },
];
