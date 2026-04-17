import type { MetadataRoute } from "next";

const baseUrl = "https://grovex.az";

const routes = [
  "",
  "/audit",
  "/fertilizer-recipe",
  "/climate-plan",
  "/pest-disease",
  "/irrigation-plan",
  "/training",
  "/packages",
  "/full-control",
  "/our-greenhouse",
  "/partners",
  "/about",
  "/contact",
];

const locales = ["az", "en", "ru"];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const route of routes) {
    for (const locale of locales) {
      entries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: route === "" ? 1 : 0.8,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${baseUrl}/${l}${route}`])
          ),
        },
      });
    }
  }

  return entries;
}
