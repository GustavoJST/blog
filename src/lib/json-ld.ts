import { SITE, SOCIALS } from "@/consts";
import type { CollectionEntry } from "astro:content";

interface JsonLdOrganization {
  "@context": "https://schema.org";
  "@type": "Organization";
  name: string;
  url: string;
  description: string;
  logo: string;
  sameAs: string[];
}

interface JsonLdBlogPosting {
  "@context": "https://schema.org";
  "@type": "BlogPosting";
  headline: string;
  name: string;
  description: string;
  keywords?: string[];
  inLanguage: string;
  datePublished: string;
  dateModified: string;
  author: { "@type": "Person"; name: string };
  mainEntityOfPage: { "@type": "WebPage"; "@id": string };
  publisher: {
    "@type": "Organization";
    name: string;
    logo: { "@type": "ImageObject"; url: string };
  };
}

export function generateOrganizationJsonLd(
  siteUrl: URL | undefined,
  description: string,
): JsonLdOrganization {
  const origin = siteUrl?.origin ?? "";
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.TITLE,
    url: origin,
    description,
    logo: `${origin}/favicon.ico`,
    sameAs: [...SOCIALS.map((s) => s.HREF), `mailto:${SITE.EMAIL}`],
  };
}

export function generateBlogPostingJsonLd(
  post: CollectionEntry<"blog">,
  canonicalURL: URL | undefined,
  lastModified?: Date,
): JsonLdBlogPosting {
  const validLastModified =
    lastModified && !isNaN(lastModified.getTime())
      ? lastModified
      : post.data.date;
  const dateModified = validLastModified.toISOString();
  const canonicalHref = canonicalURL?.href ?? "";
  const origin = canonicalURL?.origin ?? "";
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.data.title,
    name: post.data.title,
    description: post.data.description,
    keywords: post.data.tags?.length ? post.data.tags : undefined,
    inLanguage: post.data.lang,
    datePublished: post.data.date.toISOString(),
    dateModified,
    author: { "@type": "Person", name: SITE.TITLE },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalHref,
    },
    publisher: {
      "@type": "Organization",
      name: SITE.TITLE,
      logo: {
        "@type": "ImageObject",
        url: `${origin}/favicon.ico`,
      },
    },
  };
}
