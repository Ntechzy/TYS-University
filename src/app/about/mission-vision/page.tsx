// app/about/mission-vision/page.tsx

import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  BookOpenCheck,
  Compass,
  Eye,
  GraduationCap,
  Lightbulb,
  Quote,
  Sparkles,
  Target,
} from "lucide-react";

import { missionVisionContent } from "@/app/data/aboutContent";
import {
  JsonLd,
  breadcrumbJsonLd,
  webPageJsonLd,
} from "@/app/lib/seo";

const pageTitle = "Mission & Vision";
const pageDescription =
  "Read the mission, vision, principle, and educational philosophy of TYS University.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/about/mission-vision",
  },
};

const philosophyPoints = [
  {
    title: "Purposeful Learning",
    description:
      "Academic experiences designed to connect knowledge with responsibility and meaningful outcomes.",
    icon: BookOpenCheck,
  },
  {
    title: "Practical Exposure",
    description:
      "Learning strengthened through projects, application, experimentation, and real-world understanding.",
    icon: Lightbulb,
  },
  {
    title: "Future Readiness",
    description:
      "Preparing students with confidence, values, adaptability, and professional competence.",
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
        className="h-0.5 w-9 rounded-full bg-[#F2B90D]"
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

export default function MissionVisionPage() {
  const schema = [
    webPageJsonLd({
      name: `About | ${pageTitle}`,
      description: pageDescription,
      path: "/about/mission-vision",
    }),
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
      { name: "Mission & Vision", path: "/about/mission-vision" },
    ]),
  ];

  return (
    <>
      <JsonLd id="mission-vision-page-jsonld" data={schema} />

      <main className="overflow-hidden bg-white">
        <section className="relative isolate py-14 md:py-20">
          <div
            aria-hidden="true"
            className="absolute -left-24 top-32 -z-10 size-80 rounded-full bg-[#F2B90D]/10 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="absolute -right-24 top-1/3 -z-10 size-96 rounded-full bg-[#6B1E23]/[0.06] blur-3xl"
          />

          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            {/* Guiding principle */}
            <section className="grid items-stretch gap-8 lg:grid-cols-[1.05fr_0.95fr]">
              <article className="relative overflow-hidden rounded-[2rem] border border-black/5 bg-[#F5F1EA] p-7 md:p-10 lg:p-12">
                <Sparkles
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-12 -top-12 size-52 rotate-12 text-[#6B1E23] opacity-[0.045]"
                  strokeWidth={1}
                />

                <div className="relative">
                  <SectionLabel>Guiding Principle</SectionLabel>

                  <h1 className="mt-6 max-w-3xl text-3xl font-black leading-[1.12] tracking-tight text-[#171717] sm:text-4xl md:text-5xl">
                    {missionVisionContent.principle}
                  </h1>

                  <div
                    aria-hidden="true"
                    className="mt-6 h-0.5 w-20 rounded-full bg-[#6B1E23]"
                  />

                  <p className="mt-7 max-w-4xl text-base leading-8 text-gray-700 md:text-lg md:leading-9">
                    {missionVisionContent.valueStatement}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    {["Knowledge", "Character", "Innovation"].map((item) => (
                      <span
                        key={item}
                        className="inline-flex rounded-full bg-[#F2B90D] px-4 py-2 text-[11px] font-black uppercase tracking-[0.14em] text-[#6B1E23]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </article>

              {/* Supporting image */}
              <article className="relative min-h-[360px] overflow-hidden rounded-[2rem] bg-[#0B1B3F] lg:min-h-full">
                <Image
                  // Replace this path with the final mission/vision or student image.
                  src="/building/lib.jpeg"
                  alt="TYS University students learning together in a collaborative academic environment"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                />

                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#0B1B3F]/90 via-[#0B1B3F]/20 to-transparent"
                />

                <div className="absolute inset-x-0 bottom-0 p-7 md:p-9">
                  <span className="inline-flex items-center gap-2 rounded-full bg-[#F2B90D] px-4 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-[#0B1B3F]">
                    <Compass className="size-3.5" />
                    Purpose-Led Education
                  </span>

                  <p className="mt-5 max-w-lg text-2xl font-black leading-tight text-white md:text-3xl">
                    Creating an academic culture where knowledge becomes
                    confidence, responsibility, and progress.
                  </p>
                </div>
              </article>
            </section>

            {/* Vision and mission */}
            <section className="mt-10 grid gap-8 lg:grid-cols-2">
              <article className="group relative overflow-hidden rounded-[2rem] bg-[#0B1B3F] p-7 text-white md:p-10">
                <div
                  aria-hidden="true"
                  className="absolute -right-16 -top-16 size-60 rounded-full border-[36px] border-white/[0.035]"
                />

                <div className="relative">
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <SectionLabel light>Vision</SectionLabel>

                      <h2 className="mt-5 text-3xl font-black tracking-tight text-white md:text-4xl">
                        Our Direction for the{" "}
                        <span className="text-[#F2B90D]">Future</span>
                      </h2>
                    </div>

                    <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#F2B90D] backdrop-blur-sm">
                      <Eye className="size-6" />
                    </span>
                  </div>

                  <div className="mt-8 space-y-5">
                    {missionVisionContent.vision.map((paragraph, index) => (
                      <div
                        key={paragraph}
                        className="grid grid-cols-[auto_1fr] gap-4"
                      >
                        <span className="mt-1 flex size-8 items-center justify-center rounded-full bg-white/10 text-xs font-black text-[#F2B90D]">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <p className="text-base leading-8 text-white/75 md:text-lg">
                          {paragraph}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div
                    aria-hidden="true"
                    className="mt-8 h-0.5 w-16 rounded-full bg-[#F2B90D] transition-all duration-300 group-hover:w-28"
                  />
                </div>
              </article>

              <article className="group relative overflow-hidden rounded-[2rem] border border-black/5 bg-[#F5F1EA] p-7 md:p-10">
                <div
                  aria-hidden="true"
                  className="absolute -bottom-24 -right-16 size-64 rounded-full bg-[#6B1E23]/[0.05]"
                />

                <div className="relative">
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <SectionLabel>Mission</SectionLabel>

                      <h2 className="mt-5 text-3xl font-black tracking-tight text-[#171717] md:text-4xl">
                        Turning Purpose into{" "}
                        <span className="text-[#6B1E23]">Action</span>
                      </h2>
                    </div>

                    <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#6B1E23] text-white">
                      <Target className="size-6" />
                    </span>
                  </div>

                  <div className="mt-8 space-y-5">
                    {missionVisionContent.mission.map((paragraph, index) => (
                      <div
                        key={paragraph}
                        className="grid grid-cols-[auto_1fr] gap-4"
                      >
                        <span className="mt-1 flex size-8 items-center justify-center rounded-full bg-white text-xs font-black text-[#6B1E23] shadow-sm">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <p className="text-base leading-8 text-gray-700 md:text-lg">
                          {paragraph}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div
                    aria-hidden="true"
                    className="mt-8 h-0.5 w-16 rounded-full bg-[#F2B90D] transition-all duration-300 group-hover:w-28"
                  />
                </div>
              </article>
            </section>

            {/* Educational philosophy */}
            <section className="mt-10 overflow-hidden rounded-[2rem] border border-[#F2B90D]/25 bg-[linear-gradient(135deg,#fffaf0_0%,#f5ede1_100%)]">
              <div className="grid lg:grid-cols-[0.75fr_1.25fr]">
                <div className="relative min-h-[320px] overflow-hidden bg-[#6B1E23]">
                  <Image
                    // Replace this path with a classroom, laboratory, or faculty image.
                    src="/admission/student-1.png"
                    alt="TYS University faculty guiding students through practical learning"
                    fill
                    sizes="(max-width: 1024px) 100vw, 36vw"
                    className="object-cover"
                  />

                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-[#6B1E23]/35 mix-blend-multiply"
                  />

                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[#0B1B3F]/80 via-transparent to-transparent"
                  />

                  <div className="absolute inset-x-0 bottom-0 p-7">
                    <Quote
                      aria-hidden="true"
                      className="size-10 text-[#F2B90D]"
                      strokeWidth={1.6}
                    />

                    <p className="mt-4 max-w-md text-xl font-bold leading-snug text-white">
                      Learning becomes meaningful when students understand,
                      apply, question, and create.
                    </p>
                  </div>
                </div>

                <div className="p-7 md:p-10 lg:p-12">
                  <SectionLabel>Educational Philosophy</SectionLabel>

                  <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight text-[#171717] md:text-4xl">
                    Learning That Builds{" "}
                    <span className="text-[#6B1E23]">
                      Knowledge and Confidence
                    </span>
                  </h2>

                  <p className="mt-6 max-w-4xl text-lg font-semibold leading-9 text-[#2B2B2B] md:text-xl">
                    {missionVisionContent.learningBelief}
                  </p>

                  <div className="mt-9 grid gap-4 sm:grid-cols-3">
                    {philosophyPoints.map((item, index) => {
                      const Icon = item.icon;

                      return (
                        <article
                          key={item.title}
                          className="group rounded-2xl border border-black/5 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-[#F2B90D]"
                        >
                          <span
                            className={[
                              "flex size-10 items-center justify-center rounded-full text-white",
                              index % 2 === 0
                                ? "bg-[#6B1E23]"
                                : "bg-[#0B1B3F]",
                            ].join(" ")}
                          >
                            <Icon className="size-5" />
                          </span>

                          <h3 className="mt-5 font-bold text-[#171717]">
                            {item.title}
                          </h3>

                          <p className="mt-2 text-sm leading-6 text-gray-600">
                            {item.description}
                          </p>

                          <div
                            aria-hidden="true"
                            className="mt-5 h-0.5 w-8 rounded-full bg-[#F2B90D] transition-all duration-300 group-hover:w-14"
                          />
                        </article>
                      );
                    })}
                  </div>
                </div>
              </div>
            </section>

            {/* Closing statement */}
            <section className="mt-10 rounded-[2rem] bg-[#6B1E23] px-7 py-10 text-white md:px-12 md:py-14">
              <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#F2B90D]">
                    Our Commitment
                  </p>

                  <h2 className="mt-4 max-w-3xl text-3xl font-black leading-tight tracking-tight md:text-4xl">
                    Inspiring students to learn with purpose and lead with
                    responsibility.
                  </h2>
                </div>

                <a
                  href="/about/message-from-chancellor"
                  className="inline-flex w-fit items-center gap-2 rounded-full bg-[#F2B90D] px-6 py-3.5 text-sm font-bold text-[#0B1B3F] transition hover:-translate-y-0.5 hover:bg-white"
                >
                  Chancellor&apos;s Message
                  <ArrowRight className="size-4" />
                </a>
              </div>
            </section>
          </div>
        </section>
      </main>
    </>
  );
}