import type { Metadata } from "next";
import HeroSection from '@/app/components/home/HeroSection'
import FAQSection from './components/home/FAQSection';
import CtaBanner from './components/home/CtaBanner';
import QuickStats from './components/home/QuickStats';
import AdmissionProcess from './components/home/AdmissionProcess';
import WhyChooseUs from './components/home/WhyChooseUs';
import AboutUniversity from './components/home/AboutUniversity';
import GallerySection from './components/home/GallerySection';
import ApplyNowBell from './components/home/ApplyNowBell';
import {
  JsonLd,
  breadcrumbJsonLd,
  siteLanguage,
  siteName,
  siteOgImage,
  webPageJsonLd,
} from './lib/seo';

const pageTitle = "Best Private University in UP";
const pageDescription =
  "TYS University in Fatehpur, Uttar Pradesh offers undergraduate and postgraduate programs, admissions support, modern infrastructure, and a student-first learning environment.";
const absoluteTitle = `TYS University | ${pageTitle}`;

const homepageFaqs = [
  {
    question: "Multicultural Campus",
    answer:
      "Our campus is home to students from 68+ countries, offering a truly global environment where diverse perspectives shape every learning experience.",
  },
  {
    question: "Global Collaborations",
    answer:
      "530+ partnerships with top-ranked universities worldwide. Dual-degree programs, joint research, and international faculty exchanges open doors globally.",
  },
  {
    question: "Scholarships and Financial Support",
    answer:
      "Merit-based scholarships, need-based aid, and flexible payment support help students from different backgrounds access a quality university education.",
  },
  {
    question: "Admissions Guidance",
    answer:
      "Our admissions team supports applicants at every step, from program selection and documentation to counseling, deadlines, and final enrollment.",
  },
];

export const metadata: Metadata = {
  title: {
    absolute: absoluteTitle,
  },
  description: pageDescription,
  alternates: {
    canonical: "/",
    languages: {
      [siteLanguage]: "/",
      "x-default": "/",
    },
  },
  keywords: [
    "TYS University",
    "Best private university in UP",
    "Private university in Fatehpur",
    "University admissions Uttar Pradesh",
    "Undergraduate admission",
    "Postgraduate admission",
    "Campus life in Fatehpur",
    "Higher education in Uttar Pradesh",
  ],
  openGraph: {
    title: absoluteTitle,
    description: pageDescription,
    url: "/",
    siteName,
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: siteOgImage,
        width: 1200,
        height: 630,
        alt: `${siteName} campus admissions`,
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
        alt: `${siteName} campus admissions`,
      },
    ],
  },
};

export default function Home() {
  const homeSchema = [
    webPageJsonLd({
      name: absoluteTitle,
      description: pageDescription,
      path: "/",
    }),
    breadcrumbJsonLd([{ name: "Home", path: "/" }]),
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: homepageFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ];

  return (
    <>
      <JsonLd id="home-json-ld" data={homeSchema} />
      <HeroSection/>
      <AboutUniversity/>
      <CtaBanner 
        backgroundImageUrl="https://img.magnific.com/premium-photo/cheerful-indian-asian-young-group-college-students-friends-laughing-together-while-sitting-standing-walking-campus_466689-8627.jpg?semt=ais_hybrid&w=740&q=80" 
      />
      <WhyChooseUs/>
      <QuickStats/>
      <GallerySection/>
      <AdmissionProcess/>
      <FAQSection/>
      <ApplyNowBell />
    </>
  );
}
