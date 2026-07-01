import type { MetadataRoute } from "next";
import { absoluteUrl, siteUrl } from "./lib/seo";

const lastModified = new Date("2026-06-19");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
      images: [
        absoluteUrl("/hero/hero1.webp"),
        absoluteUrl("/hero/hero2.webp"),
        absoluteUrl("/about/college_gate.webp"),
      ],
    },
    {
      url: `${siteUrl}/programs`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
      images: [absoluteUrl("/logo.png")],
    },
  ];
}
