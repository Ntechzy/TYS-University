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

/* ─── Data ─────────────────────────────────────────────────────────────── */
const stats = [
  { icon: Landmark,     value: "2005",    label: "Founded"          },
  { icon: Building2,    value: "8,000",   label: "Sq.m. Campus"     },
  { icon: Users,        value: "12,500+", label: "Students"         },
  { icon: BookOpenCheck,value: "50+",     label: "Academic Fields"  },
  { icon: Globe2,       value: "10+",     label: "Collaborations"   },
];

const legacyInstitutions = [
  { name: "Thakur Yugraj Singh University",                     year: "2005" },
  { name: "Thakur Yugraj Singh College of Medical and Sciences", year: "2021" },
  { name: "Thakur Yugraj Singh Pharmacy College",               year: "2017" },
  { name: "Thakur Yugraj Singh Law College",                    year: "2010" },
  { name: "Nivedita Singh Girls Degree College",                year: "2008" },
];

/* ─── Motion variants ───────────────────────────────────────────────────── */
const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease } },
};

const fadeLeft: Variants = {
  hidden:  { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.75, ease } },
};

const fadeRight: Variants = {
  hidden:  { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.75, ease } },
};

const stagger: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const inView = { once: true, amount: 0.15 };

/* ─── Component ─────────────────────────────────────────────────────────── */
export default function AboutUniversity() {
  return (
    <section className="relative bg-[#F4F1EC] text-[#0A0905] overflow-hidden">

      {/* ── Decorative grain overlay ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "256px 256px",
        }}
      />

      {/* ══════════════════════════════════════════════════════════════════
          HERO BAND — tag + headline + chancellor pull quote
      ══════════════════════════════════════════════════════════════════ */}
      <div className="relative z-10 px-5 pt-20 pb-0 md:px-10 lg:px-16 max-w-425 mx-auto">

        {/* eyebrow */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={inView}
          className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.3em] uppercase text-[#8B2C2C]"
        >
          <span className="block h-px w-6 bg-[#8B2C2C]" />
          About University
        </motion.p>

        <div className="mt-6 grid gap-10 lg:grid-cols-2 lg:items-end">

          {/* Big headline */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={inView}
          >
            <h1 className="font-display text-[clamp(3rem,6vw,6rem)] font-black leading-[0.93] tracking-tight text-[#0A0905]">
              Thakur<br />
              <em className="not-italic text-[#8B2C2C]">Yugraj&nbsp;Singh</em><br />
              University
            </h1>
          </motion.div>

          {/* Chancellor pull‑quote */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={inView}
            className="relative"
          >
            {/* big decorative quote mark */}
            <span
              aria-hidden
              className="font-display absolute -top-8 -left-2 text-[120px] leading-none text-[#D4A96A]/25 select-none"
            >
              "
            </span>

            <blockquote className="relative pl-6 border-l-2 border-[#D4A96A]">
              <p className="text-xl leading-relaxed text-[#3A3226] md:text-2xl">
                Knowledge, Strength and Character are the pillars that turn
                raw potential into real leadership.
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
                  <p className="text-sm font-bold tracking-wide text-[#0A0905]">Founder &amp; Chancellor</p>
                  <p className="mt-0.5 text-xs text-[#7A6E62]">Thakur Yugraj Singh University</p>
                </div>
              </footer>
            </blockquote>
          </motion.div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════
          STATS TICKER ROW
      ══════════════════════════════════════════════════════════════════ */}
<div className="relative z-10 mt-10 overflow-hidden border-y border-[#D4C9B8] bg-[#0A0905] sm:mt-12 md:mt-14">
  <motion.div
    variants={stagger}
    initial="hidden"
    whileInView="visible"
    viewport={inView}
    className="mx-auto grid max-w-[1700px] grid-cols-2 sm:grid-cols-3 lg:grid-cols-5"
  >
    {stats.map((item, i) => {
      const Icon = item.icon;

      return (
        <motion.div
          key={i}
          variants={fadeUp}
          className={`
            group flex flex-col items-center justify-center gap-2 px-3 py-6 text-center
            transition-colors duration-300 hover:bg-white/[0.04]
            border-white/10
            border-b
            ${i % 2 === 0 ? "border-r" : ""}
            sm:border-r sm:[&:nth-child(3n)]:border-r-0
            lg:border-b-0 lg:border-r lg:last:border-r-0
            sm:px-4 sm:py-7
          `}
        >
          <Icon size={18} className="text-[#D4A96A]" />

          <span className="font-display text-2xl font-black leading-none text-white sm:text-3xl md:text-4xl">
            {item.value}
          </span>

          <span className="max-w-[120px] text-[9px] font-bold uppercase leading-relaxed tracking-[0.16em] text-white/40 sm:max-w-none sm:text-[10px] sm:tracking-[0.22em]">
            {item.label}
          </span>
        </motion.div>
      );
    })}
  </motion.div>
</div>

      {/* ══════════════════════════════════════════════════════════════════
          MAIN BENTO GRID
      ══════════════════════════════════════════════════════════════════ */}
      <div className="relative z-10 px-5 py-10 md:px-10 lg:px-16 max-w-[1700px] mx-auto">

        <div className="grid gap-3 lg:grid-cols-12 lg:grid-rows-[auto_auto]">

          {/* ── 1. Large hero photo ── */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={inView}
            className="relative overflow-hidden rounded-3xl lg:col-span-5 lg:row-span-2 min-h-[480px]"
          >
            <Image
              src="/about/student-college.png"
              alt="Students at TYSU"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* caption strip */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0905]/90 via-[#0A0905]/20 to-transparent" />
            <div className="absolute bottom-0 inset-x-0 p-7 md:p-9">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D4A96A]">
                Legacy since 2005
              </p>
              <h2 className="font-display mt-3 text-3xl font-black leading-tight text-white md:text-4xl">
                A growing academic ecosystem in Fatehpur
              </h2>
            </div>
          </motion.div>

          {/* ── 2. Vision card ── */}
          <PillarCard
            icon={Target}
            title="Our Vision"
            desc="To become a world-class institution of academic excellence with commitment to quality education, research, ethics, human values, society, and environment."
            theme="light"
            className="lg:col-span-4"
          />

          {/* ── 3. Campus photo ── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={inView}
            className="relative overflow-hidden rounded-3xl min-h-[220px] lg:col-span-3"
          >
            <Image
              src="/about/college-1.png"
              alt="TYSU Campus"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
          </motion.div>

          {/* ── 4. Mission card ── */}
          <PillarCard
            icon={Rocket}
            title="Our Mission"
            desc="To provide quality educational experiences, support services, career-focused learning, critical thinking, communication, creativity, and student achievement."
            theme="navy"
            className="lg:col-span-4"
          />

          {/* ── 5. Classroom photo ── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={inView}
            className="relative overflow-hidden rounded-3xl min-h-[220px] lg:col-span-3"
          >
            <Image
              src="/about/classroom.png"
              alt="Smart Classroom"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
          </motion.div>

        </div>

        {/* ── Why Established — full‑width marquee card ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={inView}
          className="mt-3 relative overflow-hidden rounded-3xl bg-[#8B2C2C] px-8 py-10 md:px-12"
        >
          {/* background decorations */}
          <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/10" />
          <div aria-hidden className="pointer-events-none absolute -left-16 -bottom-20 h-56 w-56 rounded-full border border-white/10" />
          <div aria-hidden className="pointer-events-none absolute right-0 bottom-0 h-40 w-80 rounded-tl-full bg-white/5" />

          <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-5">
              <span className="mt-0.5 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#D4A96A] text-[#3A0000]">
                <Landmark size={24} />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#D4A96A]">
                  Why Established
                </p>
                <h3 className="font-display mt-2 max-w-xl text-2xl font-black leading-snug text-white md:text-3xl">
                  Founded to provide excellent educational opportunities in Fatehpur
                </h3>
              </div>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-white/65 md:text-base">
              Building a future-focused academic ecosystem with national opportunities — bridging structural legacy with premium higher education.
            </p>
          </div>
        </motion.div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════
          BOTTOM SECTION — about text + legacy institutions
      ══════════════════════════════════════════════════════════════════ */}
      <div className="relative z-10 px-5 pb-20 md:px-10 lg:px-16 max-w-[1700px] mx-auto">
        <div className="grid gap-3 lg:grid-cols-[1.3fr_1fr]">

          {/* About body text */}
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
              <div className="hidden shrink-0 h-12 w-12 items-center justify-center rounded-2xl bg-[#F4F1EC] md:flex">
                <ArrowUpRight size={22} className="text-[#8B2C2C]" />
              </div>
            </div>

            <div className="mt-8 grid gap-5 text-[15px] leading-[1.75] text-[#4A4438] md:grid-cols-2">
              <p>
                Thakur Yugraj Singh University was founded in 2005. It is one of
                the oldest self-finance institutions in Fatehpur district, Uttar
                Pradesh, built to provide accessible, purposeful and quality
                education in a region that needed strong academic development.
              </p>
              <p>
                The university offers postgraduate programmes in Hindi, English,
                History, Political Science, Sociology, Economics, Home Science,
                Zoology, Botany, Physics, Chemistry and Mathematics, along with
                bachelor programmes in Science, Commerce and Arts.
              </p>
              <p className="md:col-span-2">
                Built on an 8,000 sq.m. campus in Shanti Nagar, Fatehpur, the
                university features three-storey buildings with green-building
                features including rainwater harvesting, solar panels, and
                waste-management systems for bio, chemical, and e-waste.
              </p>
            </div>
          </motion.div>

          {/* Legacy institutions */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={inView}
            className="relative overflow-hidden rounded-3xl bg-[#0A0905] p-8 text-white md:p-10"
          >
            {/* accent blobs */}
            <div aria-hidden className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#D4A96A]/8" />
            <div aria-hidden className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-[#8B2C2C]/20" />

            <div className="relative z-10">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D4A96A]">
                Legacy Institutions
              </p>
              <h2 className="font-display mt-3 text-2xl font-black leading-tight md:text-3xl">
                Excellence united under one roof
              </h2>

              <div className="mt-8 space-y-3">
                {legacyInstitutions.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={inView}
                    transition={{ duration: 0.5, delay: i * 0.08, ease }}
                    className="group flex items-center gap-4 rounded-2xl border border-white/8 bg-white/[0.04] px-5 py-4 transition-all duration-300 hover:border-[#D4A96A]/40 hover:bg-white/[0.07]"
                  >
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#D4A96A]/50 tabular-nums w-8 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="flex-1 text-sm font-medium leading-snug text-white/75 group-hover:text-white transition-colors">
                      {item.name}
                    </p>
                    <span className="shrink-0 rounded-full bg-[#D4A96A]/15 px-2.5 py-1 text-[10px] font-bold text-[#D4A96A] tabular-nums">
                      {item.year}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* footer check line */}
              <div className="mt-6 flex items-center gap-2 text-xs text-white/35">
                <CheckCircle2 size={13} className="text-[#D4A96A]" />
                All institutions form the TYSU ecosystem
              </div>
            </div>
          </motion.div>

        </div>
      </div>

    </section>
  );
}

/* ─── PillarCard ─────────────────────────────────────────────────────────── */
interface PillarCardProps {
  icon: React.ElementType;
  title: string;
  desc: string;
  theme: "light" | "navy";
  className?: string;
}

function PillarCard({ icon: Icon, title, desc, theme, className = "" }: PillarCardProps) {
  const isLight = theme === "light";

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={inView}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 340, damping: 28 }}
      className={`group relative overflow-hidden rounded-3xl p-7 md:p-8 min-h-[220px] ${
        isLight
          ? "bg-white border border-[#D4C9B8]"
          : "bg-[#05316E] text-white"
      } ${className}`}
    >
      {/* decorative corner circle */}
      <div
        aria-hidden
        className={`pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full transition-transform duration-500 group-hover:scale-125 ${
          isLight ? "bg-[#F4F1EC]" : "bg-white/8"
        }`}
      />

      {/* bottom accent line */}
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
