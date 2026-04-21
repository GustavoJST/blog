export type Site = {
  TITLE: string;
  DESCRIPTION: string;
  EMAIL: string;
  NUM_POSTS_ON_HOMEPAGE: number;
  NUM_PROJECTS_ON_HOMEPAGE: number;
  ENABLE_GISCUS: boolean;
  ENABLE_PROJECTS: boolean;
  ENABLE_SIDE_TOC: boolean;
};

export type I18n = {
  LANGUAGES: Record<string, string>;
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
