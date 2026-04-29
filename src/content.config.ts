import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { I18N } from "@consts";

type Language = keyof typeof I18N.LANGUAGES;
const LANGS = Object.keys(I18N.LANGUAGES) as Language[];

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    url: z.string(),
    lang: z.enum(LANGS as [Language, ...Language[]]),
    draft: z.boolean().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    url: z.string(),
    lang: z.enum(LANGS as [Language, ...Language[]]),
    draft: z.boolean().optional(),
    demoURL: z.string().optional(),
    repoURL: z.string().optional(),
  }),
});

export const collections = { blog, projects };
