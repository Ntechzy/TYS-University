import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import ChatBot from "./components/ChatBot";
import {
  JsonLd,
  campusAddress,
  contactEmail,
  siteDescription,
  siteLanguage,
  siteLocale,
  siteLogo,
  siteName,
  siteOgImage,
  siteUrl,
  tollFreeNumber,
} from "./lib/seo";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  referrer: "origin-when-cross-origin",
  category: "education",
  keywords: [
    "TYS University",
    "TYS University Fatehpur",
    "private university in Uttar Pradesh",
    "best private university in UP",
    "university admissions",
    "undergraduate programs",
    "postgraduate programs",
    "Fatehpur university",
    "higher education in India",
  ],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      [siteLanguage]: "/",
      "x-default": "/",
    },
  },
  openGraph: {
    title: siteName,
    description: siteDescription,
    url: "/",
    siteName,
    type: "website",
    locale: siteLocale,
    images: [
      {
        url: siteOgImage,
        width: 1200,
        height: 630,
        alt: `${siteName} logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    images: [
      {
        url: siteOgImage,
        alt: `${siteName} logo`,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon",
    apple: "/logo.png",
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["CollegeOrUniversity", "EducationalOrganization"],
    "@id": `${siteUrl}/#organization`,
    name: siteName,
    url: siteUrl,
    logo: siteLogo,
    image: siteOgImage,
    description: siteDescription,
    email: contactEmail,
    telephone: tollFreeNumber,
    address: {
      "@type": "PostalAddress",
      ...campusAddress,
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: siteName,
    url: siteUrl,
    description: siteDescription,
    publisher: {
      "@id": `${siteUrl}/#organization`,
    },
    inLanguage: siteLanguage,
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <JsonLd id="ld-json" data={[organizationSchema, websiteSchema]} />
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
        <ChatBot />
      </body>
    </html>
  );
}
