import type { Metadata } from "next";
import ProgramsDirectory from "@/app/components/programs/ProgramsDirectory";
import { programCatalog } from "@/app/data/programs";
import {
  JsonLd,
  absoluteUrl,
  breadcrumbJsonLd,
  siteLanguage,
  siteName,
  siteOgImage,
  webPageJsonLd,
} from "@/app/lib/seo";

const pageTitle = "Programs";
const pageDescription =
  "Explore brochure-listed programs at TYS University across arts, science, commerce, management, engineering, agriculture, nursing, pharmacy, and law.";
const absoluteTitle = `${pageTitle} | ${siteName}`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/programs",
    languages: {
      [siteLanguage]: "/programs",
      "x-default": "/programs",
    },
  },
  keywords: [
    "TYS University programs",
    "TYS University courses",
    "undergraduate programs",
    "postgraduate programs",
    "doctoral programs",
    "diploma programs",
    "Fatehpur university courses",
  ],
  openGraph: {
    title: absoluteTitle,
    description: pageDescription,
    url: "/programs",
    siteName,
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: siteOgImage,
        width: 1200,
        height: 630,
        alt: `${siteName} programs and courses`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: absoluteTitle,
    description: pageDescription,
    images: [
      {
        url: siteOgImage,
        alt: `${siteName} programs and courses`,
      },
    ],
  },
};

export default function ProgramsPage() {
  const courses = programCatalog.flatMap((faculty) =>
    faculty.programs.map((program) => ({
      "@type": "Course",
      name: `${program.name} at ${siteName}`,
      description: [
        faculty.description,
        program.specializations?.length
          ? `Specializations: ${program.specializations.join(", ")}.`
          : undefined,
        program.eligibility ? `Eligibility: ${program.eligibility}.` : undefined,
      ]
        .filter(Boolean)
        .join(" "),
      provider: {
        "@type": "CollegeOrUniversity",
        name: siteName,
        sameAs: absoluteUrl("/"),
      },
      educationalLevel: program.category,
      timeToComplete: program.duration,
      url: absoluteUrl(`/programs#${faculty.sectionId}`),
    })),
  );

  const programsSchema = [
    webPageJsonLd({
      name: absoluteTitle,
      description: pageDescription,
      path: "/programs",
    }),
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: pageTitle, path: "/programs" },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: `${siteName} programs`,
      description: pageDescription,
      url: absoluteUrl("/programs"),
      itemListElement: courses.map((course, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: course,
      })),
    },
  ];

  return (
    <>
      <JsonLd id="programs-json-ld" data={programsSchema} />
      <ProgramsDirectory />
    </>
  );
}
