import { defineConfig } from "astro/config";
import { I18N } from "./src/consts";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import pagefind from "astro-pagefind";
import tailwindcss from "@tailwindcss/vite";

const sitemapLocales = Object.fromEntries(
  Object.entries(I18N.LANGUAGES).map(([key, value]) => [
    key,
    value.sitemapCode,
  ])
);

// https://astro.build/config
export default defineConfig({
  site: "https://astro-micro.vercel.app",
  i18n: {
    locales: Object.keys(I18N.LANGUAGES),  // ["en", "pt-br", etc]
    defaultLocale: I18N.DEFAULT_LANGUAGE,
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    }
  },
  integrations: [
    sitemap({
      i18n: {
        // All urls that don't contain `es` or `fr` after `https://example.com/` will be treated as default locale, i.e. `en`
        defaultLocale: I18N.DEFAULT_LANGUAGE,
        locales: sitemapLocales
      },
    }),
    mdx(),
    pagefind()
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    shikiConfig: {
      theme: "css-variables",
    },
  },
});
