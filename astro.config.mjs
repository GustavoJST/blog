import { defineConfig, fontProviders } from "astro/config";
import { I18N } from "./src/consts";
import { remarkModifiedTime } from "./src/lib/remark-modifed-time.mjs";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import pagefind from "astro-pagefind";
import tailwindcss from "@tailwindcss/vite";

const sitemapLocales = Object.fromEntries(
  Object.entries(I18N.LANGUAGES).map(([key, value]) => [
    key,
    value.sitemapCode,
  ]),
);

// https://astro.build/config
export default defineConfig({
  site: "https://gustavojusto.com",
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Geist",
      cssVariable: "--geist-variable",
      weights: ["100 900"],
    },
    {
      provider: fontProviders.fontsource(),
      name: "Geist Sans",
      cssVariable: "--geist-sans",
      weights: ["100 900"],
    },
    {
      provider: fontProviders.fontsource(),
      name: "Geist Mono",
      cssVariable: "--geist-mono",
      weights: ["100 900"],
    },
  ],
  i18n: {
    locales: Object.keys(I18N.LANGUAGES), // ["en", "pt-br", etc]
    defaultLocale: I18N.DEFAULT_LANGUAGE,
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        // All urls that don't contain `es` or `fr` after `https://example.com/` will be treated as default locale, i.e. `en`
        defaultLocale: I18N.DEFAULT_LANGUAGE,
        locales: sitemapLocales,
      },
    }),
    mdx(),
    pagefind(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    shikiConfig: {
      theme: "css-variables",
    },
    remarkPlugins: [remarkModifiedTime],
  },
});
