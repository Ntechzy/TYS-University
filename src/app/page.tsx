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
import TopRecruiters from "./components/home/Toprecruiters";

const pageTitle = "Best Private University in UP";
const pageDescription =
  "TYS University in Fatehpur, Uttar Pradesh offers undergraduate and postgraduate programs, admissions support, modern infrastructure, and a student-first learning environment.";

export const metadata: Metadata = {
  title: {
    absolute: `TYS University | ${pageTitle}`,
  },
  description: pageDescription,
  alternates: {
    canonical: "/",
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
    title: `TYS University | ${pageTitle}`,
    description: pageDescription,
    url: "/",
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

export default function Home() {
  return (
    <>
      <HeroSection/>
      <AboutUniversity/>
      <CtaBanner 
        backgroundImageUrl="https://img.magnific.com/premium-photo/cheerful-indian-asian-young-group-college-students-friends-laughing-together-while-sitting-standing-walking-campus_466689-8627.jpg?semt=ais_hybrid&w=740&q=80" 
      />
      <WhyChooseUs/>
      <QuickStats/>
      <TopRecruiters/>
      <GallerySection/>
      <AdmissionProcess/>
      <FAQSection/>
      <ApplyNowBell />
    </>
  );
}
