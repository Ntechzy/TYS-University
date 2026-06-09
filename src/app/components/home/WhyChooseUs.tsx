"use client";

import { motion, type Variants } from "framer-motion";
import {
  BookOpen,
  Users,
  FlaskConical,
  Library,
  BriefcaseBusiness,
  Building2,
  Microscope,
  MonitorPlay,
} from "lucide-react";

// ── Data ────────────────────────────────────────────────────────────────────

const chooseUsData = [
  {
    title: "Industry-focused Curriculum",
    desc: "Programs built to match current industry standards and real career demands.",
    icon: BookOpen,
    accent: "#5A1F22",
    // image tile: no image, standard card
  },
  {
    title: "Experienced Faculty",
    desc: "Learn from qualified, supportive, and experienced academic professionals.",
    icon: Users,
    accent: "#05498B",
  },
  {
    title: "Modern Labs",
    desc: "Well-equipped laboratories for practical learning and hands-on training.",
    icon: FlaskConical,
    accent: "#5A1F22",
  },
  {
    title: "Digital Library",
    desc: "Access academic resources, journals, books, and digital learning material.",
    icon: Library,
    accent: "#05498B",
  },
  {
    title: "Placement Support",
    desc: "Career guidance, training, and placement assistance for every student.",
    icon: BriefcaseBusiness,
    accent: "#5A1F22",
  },
  {
    title: "Hostel Facilities",
    desc: "Comfortable and secure accommodation for students on campus.",
    icon: Building2,
    accent: "#05498B",
  },
  {
    title: "Research Opportunities",
    desc: "Encouraging innovation, research, and project-based academic growth.",
    icon: Microscope,
    accent: "#5A1F22",
  },
  {
    title: "Smart Classrooms",
    desc: "Technology-enabled classrooms for interactive and modern learning.",
    icon: MonitorPlay,
    accent: "#05498B",
  },
];

// Unsplash photos — university / campus context
const PHOTOS = {
  students:
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80&fit=crop",
  lab: "https://i.pinimg.com/736x/4c/99/e4/4c99e47609111a93dea376e11dd13359.jpg",
  library:
    "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=1200&q=80&fit=crop",
  classroom:
    "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&q=80&fit=crop",
  campus:
    "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=1600&q=80&fit=crop",
  // header avatars
  face1:
    "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=200&q=80&fit=crop&crop=face",
  face2:
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&q=80&fit=crop&crop=face",
  face3:
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80&fit=crop&crop=face",
};

// ── Animations ──────────────────────────────────────────────────────────────

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
  }),
};

// ── Bento config ────────────────────────────────────────────────────────────
// type: "card" | "image-wide" | "image-tall"
// imageKey: keyof PHOTOS
// colSpan: 1 | 2

type TileType =
  | { kind: "card"; dataIdx: number; colSpan: 1 | 2 }
  | { kind: "image"; imageKey: keyof typeof PHOTOS; label: string; colSpan: 1 | 2 };

const tiles: TileType[] = [
  { kind: "card",  dataIdx: 0, colSpan: 1 },
  { kind: "card",  dataIdx: 1, colSpan: 1 },
  // Lab photo — wide
  { kind: "image", imageKey: "lab",       label: "Modern Laboratories",   colSpan: 2 },
  { kind: "card",  dataIdx: 2, colSpan: 1 },
  { kind: "card",  dataIdx: 3, colSpan: 1 },
  { kind: "card",  dataIdx: 4, colSpan: 1 },
  { kind: "card",  dataIdx: 5, colSpan: 1 },
  // Classroom photo — wide
  { kind: "image", imageKey: "classroom", label: "Smart Classrooms",      colSpan: 2 },
  { kind: "card",  dataIdx: 6, colSpan: 1 },
  { kind: "card",  dataIdx: 7, colSpan: 1 },
];

// ── Component ────────────────────────────────────────────────────────────────

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-[#F8F8F8] px-5 py-20 text-[#0E0D0F] md:px-10 lg:px-16">

      {/* Ambient glows */}
      <div className="pointer-events-none absolute -left-40 top-0 h-[520px] w-[520px] rounded-full bg-[#5A1F22]/8 blur-[130px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[520px] w-[520px] rounded-full bg-[#05498B]/10 blur-[140px]" />

      <div className="relative mx-auto max-w-[1400px]">

        {/* ════════════════════════════════════════════════════════════
            HEADER — split: text left | photo collage right
        ════════════════════════════════════════════════════════════ */}
        <div className="mb-14 grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_420px]">

          {/* Left: headline */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65 }}
            viewport={{ once: true }}
          >
            <div className="mb-4 inline-flex items-center gap-3">
              <span className="h-px w-8 bg-[#5A1F22]" />
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#5A1F22]">
                Why Choose Us
              </span>
            </div>

            <h2 className="text-4xl font-black leading-[1.06] tracking-tight text-[#0E0D0F] md:text-5xl lg:text-[56px]">
              Designed for learning,
              <br />
              <span className="relative inline-block">
                growth
                <svg
                  className="absolute -bottom-1 left-0 w-full"
                  viewBox="0 0 160 10"
                  fill="none"
                >
                  <path
                    d="M3 7C45 2 110 2 157 7"
                    stroke="#F6C344"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              &amp; future success
            </h2>

            <p className="mt-6 max-w-lg text-sm leading-relaxed text-neutral-500">
              A modern academic ecosystem — advanced infrastructure, expert
              faculty, practical exposure, and complete student support, all
              under one roof.
            </p>

            {/* Social proof row */}
            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-3">
                {[PHOTOS.face1, PHOTOS.face2, PHOTOS.face3].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="student"
                    className="h-10 w-10 rounded-full border-2 border-white object-cover shadow-sm"
                  />
                ))}
              </div>
              <div>
                <p className="text-sm font-bold text-[#0E0D0F]">12,000+ Alumni</p>
                <p className="text-xs text-neutral-400">across 40+ countries</p>
              </div>
              <div className="ml-4 h-8 w-px bg-black/10" />
              <div>
                <p className="text-sm font-bold text-[#5A1F22]">98%</p>
                <p className="text-xs text-neutral-400">placement rate</p>
              </div>
            </div>
          </motion.div>

          {/* Right: stacked campus photos */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative hidden lg:block"
          >
            {/* Main large photo */}
            <div className="relative h-72 w-full overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={PHOTOS.campus}
                alt="University campus"
                className="h-full w-full object-cover"
              />
              {/* Maroon tint overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#5A1F22]/60 via-transparent to-transparent" />
              {/* Caption chip */}
              <div className="absolute bottom-4 left-4 rounded-xl bg-white/10 px-4 py-2 backdrop-blur-md border border-white/20">
                <p className="text-xs font-semibold text-white">Our Campus</p>
              </div>
            </div>

            {/* Floating mini photo — library */}
            <div className="absolute -bottom-5 -left-6 h-28 w-36 overflow-hidden rounded-2xl border-4 border-[#F8F8F8] shadow-xl">
              <img
                src={PHOTOS.library}
                alt="Library"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Gold badge */}
            <div className="absolute -right-3 -top-3 flex h-16 w-16 flex-col items-center justify-center rounded-full bg-[#F6C344] shadow-lg">
              <span className="text-lg font-black leading-none text-[#340606]">25+</span>
              <span className="text-[9px] font-bold uppercase leading-none text-[#340606]/70">Years</span>
            </div>
          </motion.div>
        </div>

        {/* ════════════════════════════════════════════════════════════
            BENTO GRID
        ════════════════════════════════════════════════════════════ */}
        <div className="grid auto-rows-[190px] grid-cols-2 gap-4 md:auto-rows-[185px] md:grid-cols-4">
          {tiles.map((tile, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.12 }}
              style={{ gridColumn: `span ${tile.colSpan}` }}
              className="group relative overflow-hidden rounded-3xl"
            >
              {tile.kind === "image" ? (
                // ── IMAGE TILE ──────────────────────────────────────
                <div className="relative h-full w-full">
                  <img
                    src={PHOTOS[tile.imageKey]}
                    alt={tile.label}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#5A1F22]/80 via-[#5A1F22]/40 to-transparent" />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <span className="mb-2 inline-block w-fit rounded-full bg-[#F6C344] px-3 py-0.5 text-[10px] font-bold uppercase tracking-widest text-[#340606]">
                      Facility
                    </span>
                    <h3 className="text-xl font-black leading-tight text-white md:text-2xl">
                      {tile.label}
                    </h3>
                    <div className="mt-2 h-[2px] w-0 bg-[#F6C344] transition-all duration-500 group-hover:w-16" />
                  </div>
                </div>
              ) : (
                // ── CARD TILE ───────────────────────────────────────
                (() => {
                  const item = chooseUsData[(tile as Extract<TileType, { kind: "card" }>).dataIdx];
                  const Icon = item.icon;
                  return (
                    <div
                      className="relative h-full w-full border border-black/5 bg-white shadow-[0_4px_24px_rgba(0,0,0,0.05)]
                                 transition-shadow duration-300 hover:shadow-[0_16px_56px_rgba(90,31,34,0.13)]"
                      style={{ borderRadius: "inherit" }}
                    >
                      {/* Gold bottom line */}
                      <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#F6C344] transition-all duration-500 ease-out group-hover:w-full rounded-b-3xl" />

                      {/* Decorative blob */}
                      <div
                        className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full opacity-[0.07] transition-all duration-500 group-hover:scale-[1.6] group-hover:opacity-[0.13]"
                        style={{ background: item.accent }}
                      />

                      <div className="relative z-10 flex h-full flex-col justify-between p-5 md:p-6">
                        {/* Icon */}
                        <div
                          className="flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-md transition-all duration-300 group-hover:scale-110"
                          style={{
                            background: item.accent,
                            boxShadow: `0 6px 18px ${item.accent}35`,
                          }}
                        >
                          <Icon size={22} strokeWidth={2} />
                        </div>

                        {/* Text */}
                        <div>
                          <h3 className="text-sm font-extrabold leading-snug text-[#0E0D0F] md:text-base">
                            {item.title}
                          </h3>
                          <p className="mt-1.5 text-[12px] leading-relaxed text-neutral-500 md:text-[13px]">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })()
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}