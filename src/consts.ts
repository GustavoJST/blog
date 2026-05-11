import type { Metadata, Site, Socials, I18n } from "@types";

export const SITE: Site = {
  TITLE: "Gustavo Justo",
  DESCRIPTION: "Gustavo personal blog", // RSS and SEO related
  EMAIL: "gustavo_justo@outlook.com",
  ENABLE_GISCUS: false,
  ENABLE_PROJECTS: false,
  // On screens narrower than 1536px, the side TOC is hidden and the inline TOC is shown instead (as if ENABLE_SIDE_TOC was false)
  ENABLE_SIDE_TOC: true,
  // Enable a "last updated" field on blog posts that have more than one commit
  // Implemented using a remark plugin: https://docs.astro.build/en/recipes/modified-time/
  ENABLE_BLOG_LAST_UPDATED: true,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
  NUM_POSTS_ON_HOMEPAGE: 5,
  // Enables displaying the website's latest build timestamp in the footer,
  // along with a link to the commit associated with that build
  ENABLE_FOOTER_LAST_BUILD: true,
  // Base URL used to generate the link to the commit associated with the latest build
  //
  // Examples:
  // GitHub: https://github.com/GustavoJST/blog/commit
  // GitLab: https://gitlab.rnp.br/[group]/[project]/-/commit
  //
  // Do not include a trailing slash in the URL
  FOOTER_LAST_BUILD_COMMIT_URL: "https://github.com/GustavoJST/blog/commit",
};

export const I18N: I18n = {
  LANGUAGES: {
    en: {
      displayText: "English",
      sitemapCode: "en",
      // IANA timezone code
      timeZone: "America/New_York",
    },
    "pt-br": {
      displayText: "Português do Brasil",
      sitemapCode: "pt-BR",
      timeZone: "America/Sao_Paulo",
    },
  },
  DEFAULT_LANGUAGE: "en",
};

// Link/social preview card configuration
// ------------------------------------------------------------------------------
// Set the image to be used for the link preview card.
// Image must reside in the "/public" directory.
// An empty value means no image will be used
export const PREVIEW_IMAGE: string = "";

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "A personal blog about Linux, Kubernetes, DevOps, and more.",
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
// ------------------------------------------------------------------------------

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
