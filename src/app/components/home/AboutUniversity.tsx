"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import {
  Target,
  Rocket,
  Landmark,
  Building2,
  Users,
  BookOpenCheck,
  Globe2,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

const stats = [
  { icon: Landmark, value: "2005", label: "Founded" },
  { icon: Building2, value: "8,000", label: "Sq.m. Campus" },
  { icon: Users, value: "12,500+", label: "Students" },
  { icon: BookOpenCheck, value: "50+", label: "Academic Fields" },
  { icon: Globe2, value: "10+", label: "Collaborations" },
];

const legacyInstitutions = [
  { name: "Thakur Yugraj Singh Mahavidyalaya", year: "2005" },
  { name: "Nivedita Singh Girls Degree College", year: "2008" },
  { name: "Thakur Yugraj Singh Law College", year: "2010" },
  { name: "Thakur Yugraj Singh Pharmacy College", year: "2017" },
  { name: "Thakur Yugraj Singh College of Medical and Sciences", year: "2021" },
];

const latestDevelopment = {
  name: "Thakur Yugraj Singh University",
  year: "2026",
};

const legacyTimelineItems = [...legacyInstitutions, latestDevelopment];

const overviewPoints = [
  "Established in 2005 to expand quality higher education in Fatehpur.",
  "Offers undergraduate and postgraduate programs across arts, science, and commerce.",
  "Built on an 8,000 sq.m. campus with practical, student-focused infrastructure.",
];

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease } },
};

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.75, ease } },
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.75, ease } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const inView = { once: true, amount: 0.15 };

export default function AboutUniversity() {
  return (
    <section className="relative overflow-hidden bg-[#F4F1EC] text-[#0A0905]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: "256px 256px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-425 px-5 pt-16 md:px-10 md:pt-20 lg:px-16">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={inView}
          className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.3em] text-[#8B2C2C]"
        >
          <span className="block h-px w-6 bg-[#8B2C2C]" />
          About University
        </motion.p>

        <div className="mt-6 grid gap-14 md:gap-12 lg:grid-cols-2 lg:gap-10 lg:items-end">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={inView}
          >
            {/* Adjusted clamp for better mobile scaling and added &nbsp; to prevent unwanted wrapping */}
            <h1 className="flex flex-col font-display text-[clamp(2.75rem,9vw,6rem)] font-black leading-[1.02] tracking-tight text-[#0A0905]">
              <span>Thakur</span>
              <em className="not-italic text-[#8B2C2C]">
                Yugraj&nbsp;Singh
              </em>
              <span className="mt-[0.22em]">University</span>
            </h1>
          </motion.div>

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={inView}
            className="relative"
          >
            {/* Adjusted top positioning so it breathes better on stacked mobile layouts */}
            <span
              aria-hidden
              className="absolute -left-2 -top-10 select-none font-display text-[100px] leading-none text-[#D4A96A]/25 md:-top-12 md:text-[120px]"
            >
              &quot;
            </span>

            <blockquote className="relative border-l-2 border-[#D4A96A] pl-5 md:pl-6">
              <p className="text-lg leading-relaxed text-[#3A3226] sm:text-xl md:text-2xl">
                Knowledge, Strength and Character are the pillars that turn raw
                potential into real leadership.
              </p>

              <footer className="mt-5 flex items-center gap-4 md:mt-6">
                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full ring-2 ring-[#D4A96A]/40 md:h-14 md:w-14">
                  <Image
                    src="https://res.cloudinary.com/dhlqc0ymy/image/upload/v1781322513/chancellor_l5obd5.png"
                    alt="Founder and Chancellor"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-xs font-bold tracking-wide text-[#0A0905] md:text-sm">
                    Mr. Abhay Pratap Singh
                  </p>
                  <p className="mt-0.5 text-[10px] font-bold tracking-wide text-[#0A0905] md:text-xs">
                    Founder &amp; Chancellor
                  </p>
                  <p className="mt-0.5 text-[10px] text-[#7A6E62] md:text-xs">
                    Thakur Yugraj Singh University
                  </p>
                </div>
              </footer>
            </blockquote>
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 mt-10 overflow-hidden border-y border-[#D4C9B8] bg-[#0A0905] sm:mt-12 md:mt-14">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={inView}
          className="mx-auto grid max-w-425 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5"
        >
          {stats.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                variants={fadeUp}
                className={`group flex flex-col items-center justify-center gap-2 border-b border-white/10 px-3 py-6 text-center transition-colors duration-300 hover:bg-white/4 ${
                  i % 2 === 0 ? "border-r" : ""
                } sm:border-r sm:px-4 sm:py-7 sm:nth-[3n]:border-r-0 lg:border-b-0 lg:border-r lg:last:border-r-0`}
              >
                <Icon size={18} className="text-[#D4A96A]" />

                <span className="font-display text-2xl font-black leading-none text-white sm:text-3xl md:text-4xl">
                  {item.value}
                </span>

                <span className="max-w-30 text-[9px] font-bold uppercase leading-relaxed tracking-[0.16em] text-white/40 sm:max-w-none sm:text-[10px] sm:tracking-[0.22em]">
                  {item.label}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto max-w-425 px-5 py-10 md:px-10 lg:px-16">
        <div className="grid gap-3 lg:grid-cols-12 lg:grid-rows-[auto_auto]">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={inView}
            className="relative min-h-120 overflow-hidden rounded-3xl lg:col-span-5 lg:row-span-2"
          >
            <Image
              src="https://res.cloudinary.com/dhlqc0ymy/image/upload/v1781322547/student-college_fnc9zm.png"
              alt="Students at TYSU"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-linear-to-t from-[#0A0905]/90 via-[#0A0905]/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 md:p-9">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D4A96A]">
                Legacy since 2005
              </p>
              <h2 className="font-display mt-3 text-3xl font-black leading-tight text-white md:text-4xl">
                A growing academic ecosystem in Fatehpur
              </h2>
            </div>
          </motion.div>

          <PillarCard
            icon={Target}
            title="Our Vision"
            desc="To build a trusted university known for quality education, values, and meaningful progress."
            theme="light"
            className="lg:col-span-4"
          />

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={inView}
            className="relative min-h-55 overflow-hidden rounded-3xl lg:col-span-3"
          >
            <Image
              src="https://res.cloudinary.com/dhlqc0ymy/image/upload/v1781322546/college-1_r7wvxl.png"
              alt="TYSU Campus"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/25 to-transparent" />
          </motion.div>

          <PillarCard
            icon={Rocket}
            title="Our Mission"
            desc="To deliver practical learning, strong support, and better outcomes for every student."
            theme="navy"
            className="lg:col-span-4"
          />

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={inView}
            className="relative min-h-55 overflow-hidden rounded-3xl lg:col-span-3"
          >
            <Image
              src="https://res.cloudinary.com/dhlqc0ymy/image/upload/v1781322547/classroom_g4lpuv.png"
              alt="Smart Classroom"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/25 to-transparent" />
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-425 px-5 pb-20 md:px-10 lg:px-16">
        <div className="grid gap-3 lg:grid-cols-1">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={inView}
            className="rounded-3xl border border-[#D4C9B8] bg-white p-8 md:p-10"
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#8B2C2C]">
                  Institution Overview
                </p>
                <h2 className="font-display mt-3 text-3xl font-black leading-tight text-[#0A0905] md:text-4xl">
                  About Thakur Yugraj Singh University
                </h2>
              </div>
              <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#F4F1EC] md:flex">
                <ArrowUpRight size={22} className="text-[#8B2C2C]" />
              </div>
            </div>

            <div className="mt-8 space-y-4">
              {overviewPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-3 rounded-2xl bg-[#F8F5EF] px-4 py-4 text-[15px] leading-7 text-[#4A4438]"
                >
                  <CheckCircle2
                    size={18}
                    className="mt-1 shrink-0 text-[#8B2C2C]"
                  />
                  <p>{point}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={inView}
            className="relative overflow-hidden rounded-3xl bg-[#0A0905] p-8 text-white md:p-10 lg:hidden"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#D4A96A]/8"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-[#8B2C2C]/20"
            />

            <div className="relative z-10">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D4A96A]">
                Legacy Institutions
              </p>
              <h2 className="mt-2 font-display text-xl font-black leading-tight sm:mt-3 sm:text-2xl md:text-3xl">
                From the first campus to the latest development
              </h2>

              <div className="mt-5 sm:mt-8">
                <div className="relative rounded-3xl border border-white/8 bg-white/[0.03] p-3 sm:p-5">
                  {/* Root Institution */}
                  <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={inView}
                    transition={{ duration: 0.5, ease }}
                    className="relative z-10 flex items-center gap-3 rounded-2xl border border-[#D4A96A]/25 bg-[#D4A96A]/10 px-4 py-4 sm:gap-4 sm:px-5 sm:py-5"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#D4A96A] text-[9px] font-black text-[#0A0905] sm:h-8 sm:w-8 sm:text-[10px]">
                      00
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#D4A96A] sm:text-[10px]">
                        Root
                      </p>
                      <p className="mt-1 text-xs font-bold leading-snug text-white sm:text-sm">
                        Thakur Yugraj Singh Group
                      </p>
                      <p className="mt-1 text-[10px] font-medium tracking-widest text-[#D4A96A]/70 tabular-nums">
                        EST. 2005
                      </p>
                    </div>
                  </motion.div>

                  {/* Timeline Wrapper */}
                  <div className="relative mt-3 space-y-2.5 sm:mt-5 sm:space-y-3">
                    {/* Dynamic Vertical Line */}
                    <div
                      aria-hidden
                      className="absolute bottom-[1.875rem] left-[1.875rem] top-[-0.75rem] w-px bg-linear-to-b from-[#D4A96A] via-[#D4A96A]/45 to-transparent sm:left-[2.375rem] sm:top-[-1.25rem]"
                    />

                    {legacyTimelineItems.map((item, i) => {
                      const isLatest = i === legacyTimelineItems.length - 1;

                      return (
                        <motion.div
                          key={item.name}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={inView}
                          transition={{ duration: 0.5, delay: i * 0.08, ease }}
                          className="group relative ml-[3.375rem] flex items-center gap-3 rounded-2xl border border-white/8 bg-white/4 px-4 py-3.5 transition-all duration-300 hover:border-[#D4A96A]/40 hover:bg-white/[0.07] sm:ml-[5.125rem] sm:gap-4 sm:px-5 sm:py-4"
                        >
                          {/* Horizontal Connection Line */}
                          <span
                            aria-hidden
                            className="absolute -left-6 top-1/2 h-px w-6 -translate-y-1/2 bg-[#D4A96A]/45 transition-colors group-hover:bg-[#D4A96A]/70 sm:-left-11 sm:w-11"
                          />

                          {/* Institution Number */}
                          <span
                            className={`relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-[9px] font-black tabular-nums transition-colors sm:h-8 sm:w-8 sm:text-[10px] ${
                              isLatest
                                ? "border-[#D4A96A] bg-[#D4A96A] text-[#0A0905]"
                                : "border-[#D4A96A]/30 bg-[#0A0905] text-[#D4A96A] group-hover:border-[#D4A96A]/60"
                            }`}
                          >
                            {String(i + 1).padStart(2, "0")}
                          </span>

                          {/* Content */}
                          <div className="min-w-0 flex-1">
                            <p className="text-xs font-medium leading-snug text-white/80 transition-colors group-hover:text-white sm:text-sm">
                              {item.name}
                            </p>
                            <div className="mt-1.5 flex items-center gap-2.5">
                              <span className="text-[10px] font-medium tracking-widest text-white/40 tabular-nums transition-colors group-hover:text-[#D4A96A]/80">
                                EST. {item.year}
                              </span>
                              {isLatest && (
                                <>
                                  <span className="h-1 w-1 shrink-0 rounded-full bg-[#D4A96A]/40" />
                                  <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#D4A96A] sm:text-[10px]">
                                    Latest
                                  </span>
                                </>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="mt-5 flex items-start gap-2 text-xs text-white/35 sm:mt-6 sm:items-center">
                <CheckCircle2
                  size={14}
                  className="shrink-0 text-[#D4A96A] sm:w-[13px]"
                />
                <span className="leading-tight sm:leading-normal">
                  Part of the wider TYSU academic ecosystem
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={inView}
          className="mt-6 hidden lg:block"
        >
          <div className="relative overflow-hidden rounded-3xl border border-[#D4C9B8] bg-[#0A0905] px-10 pb-12 pt-10 text-white">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-linear-to-b from-[#D4A96A]/16 to-transparent"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -right-28 top-14 h-72 w-72 rounded-full bg-[#8B2C2C]/18 blur-3xl"
            />

            <div className="relative z-10 mb-8 flex items-end justify-between gap-8">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D4A96A]">
                  Legacy Institutions
                </p>
                <h2 className="mt-3 font-display text-4xl font-black leading-tight">
                  From the first campus to the latest development
                </h2>
              </div>
              <p className="max-w-112 text-sm leading-6 text-white/55">
                The history of our university network, from the original institution to the latest development.
              </p>
            </div>

            <div className="relative z-10 mx-auto max-w-330">
              <div className="rounded-t-[2rem] border border-white/15 bg-[#1A1712] p-4 shadow-2xl shadow-black/35">
                <div className="overflow-hidden rounded-t-[1.35rem] border border-white/10 bg-[#070604]">
                  <div className="flex h-9 items-center justify-between border-b border-white/8 bg-white/[0.04] px-4">
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#E0655C]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#D4A96A]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#6EA96A]" />
                    </div>
                    <span className="rounded-full bg-white/7 px-5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white/35">
                      TYSU Legacy Map
                    </span>
                    <span className="h-2 w-2 rounded-full bg-white/20" />
                  </div>

                  <div className="relative min-h-142 overflow-hidden bg-[#0E0C08] px-8 py-9">
                    <div
                      aria-hidden
                      className="absolute inset-0 opacity-[0.08]"
                      style={{
                        backgroundImage:
                          "linear-gradient(#D4A96A 1px, transparent 1px), linear-gradient(90deg, #D4A96A 1px, transparent 1px)",
                        backgroundSize: "34px 34px",
                      }}
                    />

                    <div className="relative z-10 flex flex-col items-center">
                      <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={inView}
                        transition={{ duration: 0.5, ease }}
                        className="relative rounded-2xl border border-[#D4A96A]/35 bg-[#D4A96A]/12 px-8 py-5 text-center shadow-xl shadow-[#D4A96A]/5"
                      >
                        <span className="text-[10px] font-black uppercase tracking-[0.24em] text-[#D4A96A]">
                          Root • 2005
                        </span>
                        <p className="mt-2 text-lg font-black leading-tight">
                          Thakur Yugraj Singh Group
                        </p>
                      </motion.div>

                      <div className="h-12 w-px bg-[#D4A96A]/55" />

                      <div className="relative w-full">
                        <div
                          aria-hidden
                          className="absolute left-[10%] right-[10%] top-0 h-px bg-[#D4A96A]/45"
                        />
                        <div className="grid grid-cols-5 gap-4 pt-10">
                          {legacyInstitutions.map((item, i) => {
                            return (
                              <motion.div
                                key={item.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={inView}
                                transition={{
                                  duration: 0.5,
                                  delay: i * 0.08,
                                  ease,
                                }}
                                className="relative"
                              >
                                <span
                                  aria-hidden
                                  className="absolute left-1/2 top-[-2.5rem] h-10 w-px -translate-x-1/2 bg-[#D4A96A]/45"
                                />
                                <div
                                  className="min-h-50 rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#D4A96A]/35 hover:bg-white/[0.07]"
                                >
                                  <span
                                    className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-[#D4A96A]/35 bg-[#0A0905] text-[11px] font-black text-[#D4A96A] tabular-nums"
                                  >
                                    {String(i + 1).padStart(2, "0")}
                                  </span>
                                  <p className="mt-4 text-[11px] font-black uppercase tracking-[0.18em] text-[#D4A96A] tabular-nums">
                                    {item.year}
                                  </p>
                                  <p className="mt-3 text-sm font-semibold leading-snug text-white/82">
                                    {item.name}
                                  </p>
                                </div>
                              </motion.div>
                            );
                          })}
                        </div>
                      </div>

                      <div className="relative flex justify-center pt-12">
                        <span
                          aria-hidden
                          className="absolute left-1/2 top-0 h-12 w-px -translate-x-1/2 bg-[#D4A96A]/55"
                        />
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={inView}
                          transition={{
                            duration: 0.5,
                            delay: legacyInstitutions.length * 0.08,
                            ease,
                          }}
                          className="relative w-full max-w-94 rounded-2xl border border-[#D4A96A] bg-[#D4A96A]/16 px-8 py-6 text-center shadow-xl shadow-[#D4A96A]/10 transition-all duration-300 hover:-translate-y-1"
                        >
                          <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border border-[#D4A96A] bg-[#D4A96A] text-[11px] font-black text-[#0A0905] tabular-nums">
                            {String(legacyTimelineItems.length).padStart(
                              2,
                              "0",
                            )}
                          </span>
                          <p className="mt-4 text-[11px] font-black uppercase tracking-[0.18em] text-[#D4A96A] tabular-nums">
                            {latestDevelopment.year}
                          </p>
                          <p className="mt-3 text-base font-black leading-snug text-white">
                            {latestDevelopment.name}
                          </p>
                          <p className="mx-auto mt-4 inline-flex rounded-full bg-[#D4A96A]/15 px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-[#D4A96A]">
                            Latest development
                          </p>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mx-auto h-5 w-[92%] rounded-b-[2rem] border-x border-b border-white/10 bg-linear-to-b from-[#2A261F] to-[#14110D] shadow-2xl shadow-black/30" />
              <div className="mx-auto h-3 w-[36%] rounded-b-3xl bg-[#D4A96A]/20" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

interface PillarCardProps {
  icon: React.ElementType;
  title: string;
  desc: string;
  theme: "light" | "navy";
  className?: string;
}

function PillarCard({
  icon: Icon,
  title,
  desc,
  theme,
  className = "",
}: PillarCardProps) {
  const isLight = theme === "light";

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={inView}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 340, damping: 28 }}
      className={`group relative min-h-55 overflow-hidden rounded-3xl p-7 md:p-8 ${
        isLight ? "border border-[#D4C9B8] bg-white" : "bg-[#05316E] text-white"
      } ${className}`}
    >
      <div
        aria-hidden
        className={`pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full transition-transform duration-500 group-hover:scale-125 ${
          isLight ? "bg-[#F4F1EC]" : "bg-white/8"
        }`}
      />

      <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#D4A96A] transition-all duration-500 group-hover:w-full" />

      <div className="relative z-10">
        <span
          className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${
            isLight
              ? "bg-[#EDF4FB] text-[#05316E]"
              : "bg-[#D4A96A] text-[#0A0905]"
          }`}
        >
          <Icon size={24} />
        </span>

        <h3
          className={`font-display mt-6 text-2xl font-black ${
            isLight ? "text-[#0A0905]" : "text-white"
          }`}
        >
          {title}
        </h3>

        <p
          className={`mt-3 text-sm leading-relaxed md:text-base ${
            isLight ? "text-[#5A5248]" : "text-white/65"
          }`}
        >
          {desc}
        </p>
      </div>
    </motion.div>
  );
}
