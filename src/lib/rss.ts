import rss from "@astrojs/rss";
import { SITE } from "@/consts";
import { getCollection } from "astro:content";
import { getRelativeLocaleUrl } from "astro:i18n";

export async function generateRSS(locale: string, site: URL) {
  const blog = (await getCollection("blog")).filter(
    (post) =>
      !post.data.draft &&
      post.data.lang == locale &&
      post.data.date <= new Date(),
  );

  const projects = (await getCollection("projects")).filter(
    (project) =>
      !project.data.draft &&
      project.data.lang == locale &&
      project.data.date <= new Date(),
  );

  const items = [...blog, ...projects].sort(
    (a, b) => new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf(),
  );

  return rss({
    title: SITE.TITLE,
    description: SITE.DESCRIPTION,
    site: site,
    trailingSlash: false,
    items: items.map((item) => ({
      title: item.data.title,
      description: item.data.description,
      pubDate: item.data.date,
      link: getRelativeLocaleUrl(locale, `${item.collection}/${item.data.url}`),
    })),
  });
}
