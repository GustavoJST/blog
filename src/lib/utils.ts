import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { getCollection } from "astro:content";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function readingTime(html: string) {
  const textOnly = html.replace(/<[^>]+>/g, "");
  const wordCount = textOnly.split(/\s+/).length;
  const readingTimeMinutes = (wordCount / 200 + 1).toFixed();
  return readingTimeMinutes;
}

export async function getBlogPaths(lang: string) {
  const posts = (await getCollection("blog"))
    .filter((post) => !post.data.draft && post.data.lang === lang)
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  return posts.map((post) => {
    return {
      params: { id: post.data.url },
      props: post,
    };
  });
}

export async function getProjectPaths(lang: string) {
  const projects = (await getCollection("projects"))
    .filter((project) => !project.data.draft && project.data.lang == lang)
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  return projects.map((project) => {
    return {
      params: { id: project.data.url },
      props: project,
    };
  });
}

export async function getTagPaths(lang: string) {
  const posts = await getCollection(
    "blog",
    ({ data }) => !data.draft && data.lang == lang,
  );

  // Get unique tags
  const tags = [...new Set(posts.flatMap((post) => post.data.tags || []))];

  // Create paths for each tag
  return tags.map((tag) => ({
    params: { id: tag },
    props: {
      posts: posts.filter((post) => post.data.tags?.includes(tag)),
    },
  }));
}
