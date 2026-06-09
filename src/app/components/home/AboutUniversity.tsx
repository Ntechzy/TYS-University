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
  { name: "Thakur Yugraj Singh University", year: "2005" },
  { name: "Thakur Yugraj Singh College of Medical and Sciences", year: "2021" },
  { name: "Thakur Yugraj Singh Pharmacy College", year: "2017" },
  { name: "Thakur Yugraj Singh Law College", year: "2010" },
  { name: "Nivedita Singh Girls Degree College", year: "2008" },
];

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
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
          backgroundSize: "256px 256px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-425 px-5 pt-20 md:px-10 lg:px-16">
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

        <div className="mt-6 grid gap-10 lg:grid-cols-2 lg:items-end">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={inView}
          >
            <h1 className="font-display text-[clamp(3rem,6vw,6rem)] font-black leading-[0.93] tracking-tight text-[#0A0905]">
              Thakur
              <br />
              <em className="not-italic text-[#8B2C2C]">Yugraj&nbsp;Singh</em>
              <br />
              University
            </h1>
          </motion.div>

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={inView}
            className="relative"
          >
            <span
              aria-hidden
              className="font-display absolute -left-2 -top-8 select-none text-[120px] leading-none text-[#D4A96A]/25"
            >
              "
            </span>

            <blockquote className="relative border-l-2 border-[#D4A96A] pl-6">
              <p className="text-xl leading-relaxed text-[#3A3226] md:text-2xl">
                Knowledge, Strength and Character are the pillars that turn raw
                potential into real leadership.
              </p>

              <footer className="mt-6 flex items-center gap-4">
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full ring-2 ring-[#D4A96A]/40">
                  <Image
                    src="/about/chancellor.png"
                    alt="Founder and Chancellor"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-bold tracking-wide text-[#0A0905]">
                    Founder &amp; Chancellor
                  </p>
                  <p className="mt-0.5 text-xs text-[#7A6E62]">
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
              src="/about/student-college.png"
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
              src="/about/college-1.png"
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
              src="/about/classroom.png"
              alt="Smart Classroom"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/25 to-transparent" />
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-425 px-5 pb-20 md:px-10 lg:px-16">
        <div className="grid gap-3 lg:grid-cols-[1.5fr_0.9fr]">
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
                  <CheckCircle2 size={18} className="mt-1 shrink-0 text-[#8B2C2C]" />
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
            className="relative overflow-hidden rounded-3xl bg-[#0A0905] p-8 text-white md:p-10"
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
              <h2 className="font-display mt-3 text-2xl font-black leading-tight md:text-3xl">
                Key institutions in the TYSU group
              </h2>

              <div className="mt-8 space-y-3">
                {legacyInstitutions.slice(0, 4).map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={inView}
                    transition={{ duration: 0.5, delay: i * 0.08, ease }}
                    className="group flex items-center gap-4 rounded-2xl border border-white/8 bg-white/4 px-5 py-4 transition-all duration-300 hover:border-[#D4A96A]/40 hover:bg-white/[0.07]"
                  >
                    <span className="w-8 shrink-0 text-[10px] font-black uppercase tracking-widest text-[#D4A96A]/50 tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="flex-1 text-sm font-medium leading-snug text-white/75 transition-colors group-hover:text-white">
                      {item.name}
                    </p>
                    <span className="shrink-0 rounded-full bg-[#D4A96A]/15 px-2.5 py-1 text-[10px] font-bold text-[#D4A96A] tabular-nums">
                      {item.year}
                    </span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-2 text-xs text-white/35">
                <CheckCircle2 size={13} className="text-[#D4A96A]" />
                Part of the wider TYSU academic ecosystem
              </div>
            </div>
          </motion.div>
        </div>
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
            isLight ? "bg-[#EDF4FB] text-[#05316E]" : "bg-[#D4A96A] text-[#0A0905]"
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
