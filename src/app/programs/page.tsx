import type { Metadata } from "next";
import ProgramsDirectory from "@/app/components/programs/ProgramsDirectory";

const pageTitle = "Programs";
const pageDescription =
  "Explore brochure-listed programs at TYS University across arts, science, commerce, management, engineering, agriculture, nursing, pharmacy, and law.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/programs",
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
    title: `TYS University | ${pageTitle}`,
    description: pageDescription,
    url: "/programs",
    siteName: "TYS University",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/logo.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `TYS University | ${pageTitle}`,
    description: pageDescription,
    images: ["/logo.png"],
  },
};

export default function ProgramsPage() {
  return <ProgramsDirectory />;
}
