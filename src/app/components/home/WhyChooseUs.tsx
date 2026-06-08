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

const chooseUsData = [
  {
    title: "Industry-focused Curriculum",
    desc: "Programs designed to match current industry standards and career demands.",
    icon: BookOpen,
  },
  {
    title: "Experienced Faculty",
    desc: "Learn from qualified, supportive, and experienced academic professionals.",
    icon: Users,
  },
  {
    title: "Modern Labs",
    desc: "Well-equipped laboratories for practical learning and hands-on training.",
    icon: FlaskConical,
  },
  {
    title: "Digital Library",
    desc: "Access academic resources, journals, books, and digital learning material.",
    icon: Library,
  },
  {
    title: "Placement Support",
    desc: "Career guidance, training, and placement assistance for students.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Hostel Facilities",
    desc: "Comfortable and secure accommodation facilities for students.",
    icon: Building2,
  },
  {
    title: "Research Opportunities",
    desc: "Encouraging innovation, research, and project-based academic growth.",
    icon: Microscope,
  },
  {
    title: "Smart Classrooms",
    desc: "Technology-enabled classrooms for interactive and modern learning.",
    icon: MonitorPlay,
  },
];

const containerVariant: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 45,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-[#F8F8F8] px-5 py-20 text-[#0E0D0F] md:px-10 lg:px-16">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-32 top-10 h-105 w-105 rounded-full bg-[#5A1F22]/10 blur-[100px]" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-105 w-105 rounded-full bg-[#05498B]/15 blur-[110px]" />

      <div className="relative mx-auto max-w-425">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[300px_1fr]">
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65 }}
            viewport={{ once: true }}
            className="pt-2"
          >
            <h3 className="text-lg font-bold uppercase tracking-wide text-[#5A1F22]">
              Why Choose Us
            </h3>

            <div className="mt-3 h-4.5 w-35">
              <svg
                viewBox="0 0 160 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-full w-full"
              >
                <path
                  d="M5 18C45 6 95 6 150 18"
                  stroke="#F6C344"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
                <path
                  d="M55 19C68 13 82 13 96 20"
                  stroke="#F6C344"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
            viewport={{ once: true }}
          >
            <h2 className="max-w-5xl text-4xl font-black leading-tight tracking-tight md:text-5xl lg:text-[64px]">
              Designed for learning,
              <br />
              growth and future success
            </h2>

            <p className="mt-5 max-w-4xl text-base leading-relaxed text-neutral-700 md:text-lg">
              Our university provides a modern academic ecosystem with advanced
              infrastructure, expert faculty, practical exposure, and complete
              student support.
            </p>
          </motion.div>
        </div>

        {/* Cards */}
        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {chooseUsData.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                variants={cardVariant}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                transition={{ duration: 0.3 }}
                className="group relative min-h-65 overflow-hidden rounded-[28px] border border-black/5 bg-white p-7 shadow-[0_20px_60px_rgba(0,0,0,0.06)] transition-all duration-300 hover:border-[#F6C344]/70 hover:shadow-[0_28px_80px_rgba(90,31,34,0.16)]"
              >
                {/* Decorative Circle */}
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#E8F6FD] transition-all duration-500 group-hover:scale-[1.4] group-hover:bg-[#5A1F22]" />

                {/* Index */}
                <span className="absolute right-6 top-5 text-5xl font-black text-black/4 transition-all duration-300 group-hover:text-white/10">
                  0{index + 1}
                </span>

                {/* Icon */}
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#5A1F22] text-white shadow-lg shadow-[#5A1F22]/20 transition-all duration-300 group-hover:bg-[#F6C344] group-hover:text-[#340606]">
                  <Icon size={30} strokeWidth={2.2} />
                </div>

                <div className="relative z-10 mt-8">
                  <h3 className="text-xl font-extrabold leading-snug text-[#0E0D0F] transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-neutral-600 md:text-base">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom Line */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#F6C344] transition-all duration-500 group-hover:w-full" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
