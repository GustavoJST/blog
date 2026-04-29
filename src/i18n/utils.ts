import { ui } from "./ui";
import { I18N } from "@consts";

const defaultLang = I18N.DEFAULT_LANGUAGE as keyof typeof ui;

export function getLangFromPath(path: string) {
  const [, lang] = path.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return key in ui[lang] ? (ui[lang] as any)[key] : ui[defaultLang][key];
  };
}

/**
 * Normalizes a language tag's region casing.
 *
 * - "pt-br" → "pt-BR" (upper mode, default)
 * - "pt-BR" → "pt-br" (lower mode)
 * - "pt" → "pt" (unchanged. Casing unaltered)
 *
 * @param lang - The language tag (e.g. "pt-BR", "en-US", "pt")
 * @param mode - Whether to uppercase or lowercase the region part
 * @returns The normalized language tag
 */
export function normalizeRegionCode(
  lang: string,
  mode: "upper" | "lower" = "upper",
): string {
  const parts = lang.split("-");

  if (parts.length !== 2) return lang.toLowerCase();

  const [language, region] = parts;

  return mode === "upper"
    ? `${language.toLowerCase()}-${region.toUpperCase()}`
    : `${language.toLowerCase()}-${region.toLowerCase()}`;
}
