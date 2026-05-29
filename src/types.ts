export type Site = {
  TITLE: string;
  DESCRIPTION: string;
  EMAIL: string;
  NUM_POSTS_ON_HOMEPAGE: number;
  NUM_PROJECTS_ON_HOMEPAGE: number;
  ENABLE_GISCUS: boolean;
  ENABLE_PROJECTS: boolean;
  ENABLE_SIDE_TOC: boolean;
  ENABLE_BLOG_LAST_UPDATED: boolean;
  ENABLE_BLOG_LAST_UPDATED_COMMIT_LINK: boolean;
  ENABLE_FOOTER_LAST_BUILD: boolean;
  GIT_REPO_COMMIT_URL: string;
};

export type LanguageConfig = {
  displayText: string;
  sitemapCode: string;
  timeZone: string;
};

export type I18n = {
  LANGUAGES: Record<string, LanguageConfig>;
  DEFAULT_LANGUAGE: string;
};

export type Metadata = {
  TITLE: string;
  DESCRIPTION: string;
};

export type Socials = {
  NAME: string;
  HREF: string;
}[];
