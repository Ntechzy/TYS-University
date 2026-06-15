import type { MetadataRoute } from "next";

const siteUrl = "https://tysuniversity.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/programs`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];
}
