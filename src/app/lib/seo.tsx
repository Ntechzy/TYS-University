import type { ReactNode } from "react";

export const siteUrl = "https://tysuniversity.com";
export const siteName = "TYS University";
export const siteLocale = "en_IN";
export const siteLanguage = "en-IN";
export const siteDescription =
  "TYS University is a private university in Fatehpur, Uttar Pradesh, offering undergraduate and postgraduate education with a student-focused campus, admissions support, and modern learning spaces.";
export const siteLogo = `${siteUrl}/logo.png`;
export const siteOgImage = `${siteUrl}/logo.png`;
export const contactEmail = "admissions@tysuniversity.edu.in";
export const tollFreeNumber = "18008901705";
export const campusAddress = {
  streetAddress: "Shanti Nagar",
  addressLocality: "Fatehpur",
  addressRegion: "Uttar Pradesh",
  addressCountry: "IN",
};

export const absoluteUrl = (path = "/") => new URL(path, siteUrl).toString();

export function JsonLd({ data, id }: { data: unknown; id?: string }): ReactNode {
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export function breadcrumbJsonLd(
  items: Array<{
    name: string;
    path: string;
  }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function webPageJsonLd({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url: absoluteUrl(path),
    isPartOf: {
      "@type": "WebSite",
      name: siteName,
      url: siteUrl,
    },
    about: {
      "@type": "CollegeOrUniversity",
      name: siteName,
      url: siteUrl,
    },
    inLanguage: siteLanguage,
  };
}
