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
                y: -8,
                scale: 1.03,
              }}
              transition={{ duration: 0.3 }}
              className="group mx-auto flex aspect-square w-full max-w-[270px] flex-col items-center justify-center rounded-full border border-[color:var(--secondary)]/20 bg-[color:var(--background)] px-8 text-center transition-all duration-300 hover:border-[color:var(--primary)] hover:shadow-2xl"
            >
              <h3 className="text-4xl font-extrabold leading-none md:text-5xl">
                {stat.number}
              </h3>

              <p className="mt-8 text-xl font-bold leading-tight">
                {stat.title}
              </p>

              <p className="mt-2 text-lg leading-snug text-[color:var(--secondary)]/80">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
