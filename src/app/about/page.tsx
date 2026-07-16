// app/about/page.tsx

import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowUpRight,
  BookOpen,
  Building2,
  CheckCircle2,
  GraduationCap,
  MapPin,
  Sparkles,
  Users,
} from "lucide-react";

import { aboutPageContent } from "@/app/data/aboutContent";
import PageBanner from "@/app/components/about/PageBanner";
import {
  JsonLd,
  breadcrumbJsonLd,
  webPageJsonLd,
} from "@/app/lib/seo";

const pageTitle = "About TYS University";
const pageDescription =
  "Learn about TYS University in Fatehpur, its academic journey, multidisciplinary growth, and campus development.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/about",
  },
};

const universityStats = [
  {
    value: "20+",
    label: "Years of Academic Legacy",
    icon: GraduationCap,
  },
  {
    value: "250+",
    label: "Experienced Faculty Members",
    icon: Users,
  },
  {
    value: "20+",
    label: "Multidisciplinary Programmes",
    icon: BookOpen,
  },
  {
    value: "Modern",
    label: "Learning Infrastructure",
    icon: Building2,
  },
];

const institutionalValues = [
  {
    title: "Knowledge",
    description:
      "Building strong academic foundations through structured and meaningful learning.",
  },
  {
    title: "Character",
    description:
      "Encouraging integrity, discipline, responsibility, and respect in every student.",
  },
  {
    title: "Innovation",
    description:
      "Promoting curiosity, practical thinking, research, and technology-led education.",
  },
];

export default function AboutPage() {
  const schema = [
    webPageJsonLd({
      name: pageTitle,
      description: pageDescription,
      path: "/about",
    }),
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
    ]),
  ];

  return (
    <>
      <JsonLd id="about-page-jsonld" data={schema} />
      <PageBanner
        eyebrow="About TYS University"
        title="Discover the university, its legacy, and its future direction"
        description="Explore the TYS University story, its academic journey, and the campus vision built for future-ready education in Fatehpur."
      />

      <main className="overflow-hidden bg-white">
        {/* Hero */}
        <section className="relative isolate overflow-hidden bg-[#F5F1EA]">
          <div
            aria-hidden="true"
            className="absolute -left-24 top-0 -z-10 size-80 rounded-full bg-[#F2B90D]/10 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="absolute -right-32 bottom-0 -z-10 size-[28rem] rounded-full bg-[#6B1E23]/10 blur-3xl"
          />

          <svg
            aria-hidden="true"
            viewBox="0 0 1440 700"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-0 -z-10 h-full w-full"
          >
            <path
              d="M-80 160C260 10 480 290 790 130C1060 -10 1240 50 1530 210"
              fill="none"
              stroke="#0B1B3F"
              strokeOpacity="0.05"
              strokeWidth="2"
            />
            <path
              d="M-100 570C250 390 520 680 850 500C1120 350 1280 420 1530 600"
              fill="none"
              stroke="#6B1E23"
              strokeOpacity="0.06"
              strokeWidth="2"
            />
          </svg>

          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 md:py-20 lg:grid-cols-[0.92fr_1.08fr] lg:px-10 lg:py-24">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-9 rounded-full bg-[#F2B90D]" />
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#6B1E23]">
                  About TYS University
                </p>
              </div>

              <h1 className="mt-6 max-w-3xl text-4xl font-black leading-[1.05] tracking-tight text-[#171717] sm:text-5xl lg:text-6xl">
                A Legacy of Learning.
                <span className="block text-[#6B1E23]">
                  A Future of Possibilities.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-gray-600 md:text-lg">
                {aboutPageContent.subtitle}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#6B1E23] px-5 py-3 text-sm font-semibold text-white">
                  <MapPin className="size-4" />
                  Fatehpur, Uttar Pradesh
                </span>

                <span className="inline-flex items-center gap-2 rounded-full border border-[#6B1E23]/15 bg-white px-5 py-3 text-sm font-semibold text-[#0B1B3F]">
                  <Sparkles className="size-4 text-[#F2B90D]" />
                  Legacy Since 2005
                </span>
              </div>
            </div>

            {/* Hero image composition */}
            <div className="relative mx-auto w-full max-w-2xl">
              <div
                aria-hidden="true"
                className="absolute -left-5 -top-5 h-[88%] w-[90%] rounded-[2rem] bg-gradient-to-br from-[#0B1B3F] to-[#16295a]"
              />

              <div
                aria-hidden="true"
                className="absolute -bottom-5 -right-4 h-48 w-44 rounded-[2rem] bg-[#F2B90D]"
              />

              <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] bg-gray-200">
                <Image
                  // Replace with your actual university campus image.
                  src="/building/Building1.png"
                  alt="TYS University campus and academic building"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 52vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B3F]/55 via-transparent to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F2B90D]">
                    Education • Excellence • Empowerment
                  </p>
                  <p className="mt-2 max-w-md text-xl font-bold leading-snug text-white sm:text-2xl">
                    A multidisciplinary campus built to shape confident,
                    responsible professionals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="relative z-10 -mt-2 pb-16 md:-mt-8 md:pb-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="grid overflow-hidden rounded-[2rem] border border-black/5 bg-white shadow-[0_24px_70px_rgba(20,17,12,0.08)] sm:grid-cols-2 lg:grid-cols-4">
              {universityStats.map((stat, index) => {
                const Icon = stat.icon;

                return (
                  <article
                    key={stat.label}
                    className={`group relative p-6 md:p-8 ${
                      index < universityStats.length - 1
                        ? "border-b border-black/5 sm:border-r lg:border-b-0"
                        : ""
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-3xl font-black tracking-tight text-[#6B1E23] md:text-4xl">
                          {stat.value}
                        </p>
                        <p className="mt-2 text-sm font-semibold leading-6 text-gray-600">
                          {stat.label}
                        </p>
                      </div>

                      <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#F5F1EA] text-[#0B1B3F] transition-colors group-hover:bg-[#F2B90D]">
                        <Icon className="size-5" />
                      </span>
                    </div>

                    <div className="mt-6 h-0.5 w-10 rounded-full bg-[#F2B90D] transition-all duration-300 group-hover:w-20" />
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="pb-16 md:pb-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="grid gap-8 lg:grid-cols-[1.12fr_0.88fr] lg:gap-10">
              <article className="rounded-[2rem] border border-black/5 bg-white p-7 shadow-[0_18px_60px_rgba(20,17,12,0.06)] md:p-10 lg:p-12">
                <div className="flex items-center gap-3">
                  <span className="h-0.5 w-9 rounded-full bg-[#F2B90D]" />
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#6B1E23]">
                    University Overview
                  </p>
                </div>

                <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight text-[#171717] md:text-4xl">
                  {aboutPageContent.title}
                </h2>

                <div className="mt-8 space-y-6">
                  {aboutPageContent.overview.map((paragraph, index) => (
                    <div
                      key={paragraph}
                      className="grid grid-cols-[auto_1fr] gap-4"
                    >
                      <span className="mt-1 flex size-8 items-center justify-center rounded-full bg-[#F5F1EA] text-xs font-black text-[#6B1E23]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <p className="text-base leading-8 text-gray-600 md:text-lg">
                        {paragraph}
                      </p>
                    </div>
                  ))}
                </div>
              </article>

              <aside className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
                {/* Secondary image */}
                <div className="relative min-h-[310px] overflow-hidden rounded-[2rem] bg-gray-200">
                  <Image
                    // Replace with an actual classroom, laboratory, or student image.
                    src="/building/computerlab.jpeg"
                    alt="Students learning in a modern TYS University classroom"
                    fill
                    sizes="(max-width: 1024px) 100vw, 38vw"
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-7">
                    <span className="inline-flex rounded-full bg-[#F2B90D] px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] text-[#0B1B3F]">
                      Student-Centred Learning
                    </span>

                    <p className="mt-4 text-xl font-bold leading-snug text-white">
                      Learning experiences designed to connect knowledge,
                      practice, and professional growth.
                    </p>
                  </div>
                </div>

                <div className="rounded-[2rem] bg-[#0B1B3F] p-7 text-white md:p-8">
                  <MapPin className="size-8 text-[#F2B90D]" />

                  <p className="mt-5 text-xs font-bold uppercase tracking-[0.24em] text-[#F2B90D]">
                    Campus Location
                  </p>

                  <p className="mt-3 text-xl font-bold leading-snug">
                    {aboutPageContent.location}
                  </p>

                  <div className="mt-6 space-y-4">
                    {aboutPageContent.campus.map((point) => (
                      <div key={point} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-1 size-4 shrink-0 text-[#F2B90D]" />
                        <p className="text-sm leading-7 text-white/75">
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="bg-[#F5F1EA] py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="grid items-end gap-6 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-0.5 w-9 rounded-full bg-[#F2B90D]" />
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#6B1E23]">
                    Key Highlights
                  </p>
                </div>

                <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight text-[#171717] md:text-4xl">
                  An Academic Environment Built for{" "}
                  <span className="text-[#6B1E23]">Meaningful Growth</span>
                </h2>
              </div>

              <p className="max-w-2xl text-base leading-8 text-gray-600 lg:justify-self-end">
                TYS University brings together academic expertise, modern
                infrastructure, multidisciplinary programmes, and a supportive
                campus culture to help students prepare for evolving
                professional opportunities.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {aboutPageContent.highlights.map((item, index) => (
                <article
                  key={item}
                  className="group flex items-start gap-5 rounded-2xl border border-black/5 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#F2B90D] hover:shadow-[0_16px_45px_rgba(20,17,12,0.08)]"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#6B1E23] text-sm font-black text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <p className="font-semibold leading-7 text-[#2B2B2B]">
                      {item}
                    </p>

                    <div className="mt-4 h-0.5 w-8 rounded-full bg-[#F2B90D] transition-all duration-300 group-hover:w-16" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#6B1E23]">
                Our Foundation
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight text-[#171717] md:text-4xl">
                Knowledge, Character and{" "}
                <span className="text-[#6B1E23]">Innovation</span>
              </h2>

              <p className="mt-5 text-base leading-8 text-gray-600">
                The university&apos;s academic culture is rooted in values that
                support intellectual development, personal responsibility, and
                future-ready learning.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {institutionalValues.map((value, index) => (
                <article
                  key={value.title}
                  className={`relative overflow-hidden rounded-[2rem] p-8 ${
                    index === 1
                      ? "bg-[#0B1B3F] text-white"
                      : "border border-black/5 bg-white text-[#171717]"
                  }`}
                >
                  <span
                    className={`text-6xl font-black leading-none ${
                      index === 1
                        ? "text-white/10"
                        : "text-[#6B1E23]/10"
                    }`}
                  >
                    0{index + 1}
                  </span>

                  <h3
                    className={`mt-8 text-2xl font-black ${
                      index === 1 ? "text-white" : "text-[#171717]"
                    }`}
                  >
                    {value.title}
                  </h3>

                  <div className="mt-4 h-0.5 w-12 rounded-full bg-[#F2B90D]" />

                  <p
                    className={`mt-5 text-sm leading-7 ${
                      index === 1 ? "text-white/70" : "text-gray-600"
                    }`}
                  >
                    {value.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Closing banner */}
        <section className="pb-16 md:pb-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="relative overflow-hidden rounded-[2rem] bg-[#6B1E23] px-7 py-10 text-white md:px-12 md:py-14 lg:px-16">
              <div
                aria-hidden="true"
                className="absolute -right-16 -top-16 size-64 rounded-full border-[40px] border-white/[0.05]"
              />

              <div
                aria-hidden="true"
                className="absolute bottom-0 right-1/4 h-32 w-32 rounded-full bg-[#F2B90D]/10 blur-2xl"
              />

              <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#F2B90D]">
                    Discover TYS University
                  </p>

                  <h2 className="mt-4 max-w-3xl text-3xl font-black leading-tight tracking-tight md:text-4xl">
                    Be part of an institution committed to education,
                    excellence, and nation-building.
                  </h2>
                </div>

                <a
                  href="/admissions"
                  className="inline-flex w-fit items-center gap-2 rounded-full bg-[#F2B90D] px-6 py-3.5 text-sm font-bold text-[#0B1B3F] transition hover:-translate-y-0.5 hover:bg-white"
                >
                  Explore Admissions
                  <ArrowUpRight className="size-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
