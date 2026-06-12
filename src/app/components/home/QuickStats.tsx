"use client";

import { motion, type Variants } from "framer-motion";

const stats = [
  {
    number: "20+",
    title: "Programs",
    desc: "across multiple disciplines",
  },
  {
    number: "5000+",
    title: "Student Capacity",
    desc: "for future-ready learning",
  },
  {
    number: "100+",
    title: "Faculty Members",
    desc: "experienced academic experts",
  },
  {
    number: "Modern",
    title: "Campus",
    desc: "with advanced infrastructure",
  },
  {
    number: "Industry",
    title: "Partnerships",
    desc: "for career opportunities",
  },
];

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
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

export default function QuickStats() {
  return (
    <section className="w-full bg-[color:var(--soft-background)] px-5 py-20 text-[color:var(--foreground)] md:px-10 lg:px-16">
      <div className="mx-auto max-w-425">
        <div className="grid gap-10 lg:grid-cols-[280px_1fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="pt-3"
          >
            <h3 className="text-lg font-semibold uppercase tracking-wide">
              Quick Stats
            </h3>

            <div className="mt-3 h-4.5 w-32.5">
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
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="max-w-5xl text-4xl font-bold leading-tight md:text-5xl lg:text-[56px]">
              Explore
              <br />
              the numbers that define our growing university
            </h2>

            <p className="mt-4 max-w-5xl text-base leading-relaxed text-[color:var(--secondary)]/80 md:text-lg">
              Showcasing strong academic strength, modern infrastructure, expert
              faculty, and industry-focused learning opportunities for students.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              transition={{ duration: 0.4 }}
              className="group relative mx-auto flex aspect-square w-full max-w-[250px] flex-col items-center justify-center rounded-full bg-[color:var(--background)] text-center transition-all duration-500 hover:shadow-2xl sm:max-w-[260px] lg:max-w-[280px]"
            >
              {/* Outer decorative ring */}
              <div className="absolute inset-0 rounded-full border border-[color:var(--secondary)]/15 transition-all duration-500 group-hover:scale-[1.07] group-hover:border-[color:var(--primary)]" />
              
              {/* Inner dashed rotating ring */}
              <div className="absolute inset-3 rounded-full border border-dashed border-[color:var(--secondary)]/25 transition-transform duration-700 ease-in-out group-hover:rotate-180 group-hover:border-[color:var(--primary)]/50" />
              
              {/* Soft inner glow on hover */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-b from-transparent to-[color:var(--secondary)]/[0.02] opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:to-[color:var(--primary)]/[0.08]" />

              {/* Content Container - Constrained width strictly prevents text from touching lines */}
              <div className="relative z-10 flex w-[80%] flex-col items-center justify-center sm:w-[75%]">
                <h3
                  className={`font-extrabold leading-none transition-colors duration-300 group-hover:text-[color:var(--primary)] ${
                    stat.number.length > 5
                      ? "text-2xl sm:text-3xl lg:text-4xl"
                      : "text-3xl sm:text-4xl md:text-5xl"
                  }`}
                >
                  {stat.number}
                </h3>

                <p className="mt-3 text-base font-bold leading-tight sm:mt-4 sm:text-lg md:mt-5">
                  {stat.title}
                </p>

                <p className="mt-1.5 text-xs leading-snug text-[color:var(--secondary)]/80 sm:mt-2 sm:text-sm md:text-base">
                  {stat.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}