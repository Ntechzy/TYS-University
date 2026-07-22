// app/about/message-from-chancellor/page.tsx

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/app/components/about/PageBanner";
import {
  ArrowRight,
  Award,
  BookOpen,
  GraduationCap,
  Quote,
  Sparkles,
  Users,
} from "lucide-react";

import { chancellorMessageContent } from "@/app/data/aboutContent";
import {
  JsonLd,
  breadcrumbJsonLd,
  webPageJsonLd,
} from "@/app/lib/seo";

const pageTitle = "Message from the Chancellor";
const pageDescription =
  "Read the Chancellor's message for students and families exploring TYS University.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/about/message-from-chancellor",
  },
};

const leadershipHighlights = [
  {
    title: "Student-Centred Learning",
    description:
      "Creating an academic environment where every student can learn, grow, and contribute.",
    icon: Users,
  },
  {
    title: "Academic Excellence",
    description:
      "Strengthening knowledge through quality teaching, discipline, research, and practical exposure.",
    icon: BookOpen,
  },
  {
    title: "Future-Ready Education",
    description:
      "Preparing students with confidence, professional competence, and responsible leadership.",
    icon: GraduationCap,
  },
];

function SectionLabel({
  children,
  light = false,
}: {
  children: string;
  light?: boolean;
}) {
  return (
    <div className="flex items-center gap-3">
      <span
        aria-hidden="true"
        className="h-0.5 w-9 shrink-0 rounded-full bg-[#F2B90D]"
      />

      <p
        className={[
          "text-[11px] font-bold uppercase tracking-[0.25em] sm:text-xs",
          light ? "text-[#F2B90D]" : "text-[#6B1E23]",
        ].join(" ")}
      >
        {children}
      </p>
    </div>
  );
}

export default function ChancellorMessagePage() {
  const schema = [
    webPageJsonLd({
      name: `About | ${pageTitle}`,
      description: pageDescription,
      path: "/about/message-from-chancellor",
    }),
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
      {
        name: "Message from the Chancellor",
        path: "/about/message-from-chancellor",
      },
    ]),
  ];

  return (
    <>
      <JsonLd id="chancellor-page-jsonld" data={schema} />
      <PageBanner
        eyebrow="Message from the Chancellor"
        title="A leadership welcome to every future TYS University student"
        description="Read the Chancellor's message about academic purpose, practical learning, and the values that shape the university community."
      />

      <main className="overflow-hidden bg-white">
        <section className="relative isolate py-14 md:py-20">
          <div
            aria-hidden="true"
            className="absolute -left-24 top-24 -z-10 size-80 rounded-full bg-[#F2B90D]/10 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="absolute -right-28 top-1/3 -z-10 size-96 rounded-full bg-[#6B1E23]/[0.06] blur-3xl"
          />

          <svg
            aria-hidden="true"
            viewBox="0 0 1440 900"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-0 -z-10 h-full w-full"
          >
            <path
              d="M-100 170C180 20 430 275 750 120C1020 -15 1230 60 1540 215"
              fill="none"
              stroke="#0B1B3F"
              strokeOpacity="0.035"
              strokeWidth="2"
            />
            <path
              d="M-100 720C220 540 500 850 830 670C1110 515 1280 570 1540 750"
              fill="none"
              stroke="#6B1E23"
              strokeOpacity="0.04"
              strokeWidth="2"
            />
          </svg>

          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="grid items-start gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-10">
              {/* Chancellor profile */}
              <aside className="lg:sticky lg:top-36">
                <div className="relative overflow-hidden rounded-[2rem] bg-[#0B1B3F] p-6 text-white md:p-8">
                  <div
                    aria-hidden="true"
                    className="absolute -right-16 -top-16 size-60 rounded-full border-[36px] border-white/[0.035]"
                  />

                  <div
                    aria-hidden="true"
                    className="absolute -bottom-20 -left-16 size-64 rounded-full bg-[#6B1E23]/40 blur-2xl"
                  />

                  <div className="relative">
                    <SectionLabel light>University Leadership</SectionLabel>

                    <div className="relative mx-auto mt-6 aspect-[4/5] w-full max-w-sm">
                      <div
                        aria-hidden="true"
                        className="absolute -left-3 -top-3 h-full w-full rounded-[1.75rem] border border-[#F2B90D]/30"
                      />

                      <div className="relative h-full w-full overflow-hidden rounded-[1.75rem] bg-[#172954]">
                        <Image
                          src={chancellorMessageContent.image}
                          alt={`${chancellorMessageContent.name}, ${chancellorMessageContent.role} of ${chancellorMessageContent.university}`}
                          fill
                          priority
                          sizes="(max-width: 1024px) 100vw, 34vw"
                          className="object-cover object-top"
                        />

                        <div
                          aria-hidden="true"
                          className="absolute inset-0 bg-gradient-to-t from-[#0B1B3F]/75 via-transparent to-transparent"
                        />

                        <div className="absolute inset-x-0 bottom-0 p-5">
                          <span className="inline-flex items-center gap-2 rounded-full bg-[#F2B90D] px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.15em] text-[#0B1B3F]">
                            <Award className="size-3.5" />
                            Leadership
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-7 text-center">
                      <h1 className="text-2xl font-black leading-tight text-white md:text-3xl">
                        {chancellorMessageContent.name}
                      </h1>

                      <p className="mt-3 text-xs font-bold uppercase tracking-[0.18em] text-[#F2B90D]">
                        {chancellorMessageContent.role}
                      </p>

                      <p className="mt-3 text-sm leading-7 text-white/65">
                        {chancellorMessageContent.university}
                      </p>
                    </div>

                    <div className="mt-7 border-t border-white/10 pt-6">
                      <p className="text-center text-sm italic leading-7 text-white/65">
                        “Leadership in education is the responsibility to
                        inspire knowledge, character, and service.”
                      </p>
                    </div>
                  </div>
                </div>
              </aside>

              {/* Message */}
              <article className="relative overflow-hidden rounded-[2rem] border border-black/5 bg-white p-7 shadow-[0_20px_65px_rgba(20,17,12,0.06)] md:p-10 lg:p-12">
                <Quote
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-8 -top-8 size-48 rotate-12 text-[#6B1E23] opacity-[0.035]"
                  strokeWidth={1}
                />

                <Sparkles
                  aria-hidden="true"
                  className="pointer-events-none absolute bottom-8 right-8 size-20 text-[#F2B90D] opacity-[0.08]"
                  strokeWidth={1.2}
                />

                <div className="relative">
                  <SectionLabel>Chancellor&apos;s Message</SectionLabel>

                  <h2 className="mt-6 max-w-4xl text-3xl font-black leading-[1.12] tracking-tight text-[#171717] sm:text-4xl md:text-5xl">
                    A Welcome to Every Future{" "}
                    <span className="text-[#6B1E23]">
                      TYS University Student
                    </span>
                  </h2>

                  <div
                    aria-hidden="true"
                    className="mt-6 h-0.5 w-24 rounded-full bg-[#6B1E23]"
                  />

                  <div className="mt-8 space-y-6">
                    {chancellorMessageContent.message.map(
                      (paragraph, index) => (
                        <div
                          key={paragraph}
                          className="grid grid-cols-[auto_1fr] gap-4"
                        >
                          <span className="mt-1 flex size-8 items-center justify-center rounded-full bg-[#F5F1EA] text-xs font-black text-[#6B1E23]">
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <p className="text-base leading-8 text-gray-700 md:text-lg md:leading-9">
                            {paragraph}
                          </p>
                        </div>
                      ),
                    )}
                  </div>

                  <div className="mt-10 rounded-2xl border-l-4 border-[#F2B90D] bg-[#F5F1EA] px-6 py-6">
                    <p className="text-lg font-semibold leading-8 text-[#2B2B2B] md:text-xl">
                      May your time at TYS University be a journey of knowledge,
                      confidence, responsibility, and meaningful achievement.
                    </p>
                  </div>

                  <div className="mt-10 border-t border-black/[0.06] pt-7">
                    <p className="font-black text-[#171717]">
                      {chancellorMessageContent.name}
                    </p>

                    <p className="mt-1 text-sm font-semibold uppercase tracking-[0.14em] text-[#6B1E23]">
                      {chancellorMessageContent.role}
                    </p>
                  </div>
                </div>
              </article>
            </div>

            {/* Leadership philosophy */}
            <section className="mt-10 rounded-[2rem] bg-[#F5F1EA] p-7 md:p-10 lg:p-12">
              <div className="grid items-end gap-8 lg:grid-cols-[0.75fr_1.25fr]">
                <div>
                  <SectionLabel>Leadership Philosophy</SectionLabel>

                  <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight text-[#171717] md:text-4xl">
                    Guiding Education with{" "}
                    <span className="text-[#6B1E23]">
                      Purpose and Responsibility
                    </span>
                  </h2>
                </div>

                <p className="max-w-2xl text-base leading-8 text-gray-600 lg:justify-self-end md:text-lg">
                  The Chancellor&apos;s message reflects the university&apos;s
                  commitment to student development, academic quality, ethical
                  leadership, and preparation for a rapidly changing world.
                </p>
              </div>

              <div className="mt-10 grid gap-5 md:grid-cols-3">
                {leadershipHighlights.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <article
                      key={item.title}
                      className="group rounded-2xl border border-black/5 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#F2B90D]"
                    >
                      <span
                        className={[
                          "flex size-11 items-center justify-center rounded-full text-white",
                          index % 2 === 0
                            ? "bg-[#6B1E23]"
                            : "bg-[#0B1B3F]",
                        ].join(" ")}
                      >
                        <Icon aria-hidden="true" className="size-5" />
                      </span>

                      <h3 className="mt-5 text-lg font-bold text-[#171717]">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-gray-600">
                        {item.description}
                      </p>

                      <div
                        aria-hidden="true"
                        className="mt-5 h-0.5 w-8 rounded-full bg-[#F2B90D] transition-all duration-300 group-hover:w-16"
                      />
                    </article>
                  );
                })}
              </div>
            </section>

            {/* Closing CTA */}
            <section className="mt-10 overflow-hidden rounded-[2rem] bg-[#6B1E23] px-7 py-10 text-white md:px-12 md:py-14">
              <div
                aria-hidden="true"
                className="absolute h-0 w-0"
              />

              <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#F2B90D]">
                    Begin Your Journey
                  </p>

                  <h2 className="mt-4 max-w-3xl text-3xl font-black leading-tight tracking-tight md:text-4xl">
                    Discover an academic environment committed to your growth,
                    confidence, and future.
                  </h2>
                </div>

                <Link
                  href="/admissions"
                  className="inline-flex w-fit items-center gap-2 rounded-full bg-[#F2B90D] px-6 py-3.5 text-sm font-bold text-[#0B1B3F] transition hover:-translate-y-0.5 hover:bg-white"
                >
                  Explore Admissions
                  <ArrowRight aria-hidden="true" className="size-4" />
                </Link>
              </div>
            </section>
          </div>
        </section>
      </main>
    </>
  );
}
