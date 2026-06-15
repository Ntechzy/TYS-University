"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const admissionSteps = [
  {
    number: "01",
    title: "Apply Online or Offline",
    desc: "Fill out the application form on our website or collect it from the campus and submit it offline.",
  },
  {
    number: "02",
    title: "Entrance Test / Merit Based",
    desc: "Appear for the entrance test if applicable, or get shortlisted based on your academic performance.",
  },
  {
    number: "03",
    title: "Counselling & Document Verification",
    desc: "Attend the counselling session and submit all required documents for verification.",
  },
  {
    number: "04",
    title: "Admission Confirmation",
    desc: "Once selected, confirm your admission by paying the admission fee within the given timeframe.",
  },
  {
    number: "05",
    title: "Enrollment & Registration",
    desc: "Complete your enrollment by providing additional details and selecting your preferred programs.",
  },
  {
    number: "06",
    title: "Start Your Journey",
    desc: "Receive your confirmation and welcome details. You’re all set to begin your academic journey with us.",
  },
];

const containerVariant: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariant: Variants = {
  hidden: {
    opacity: 0,
    x: -30,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function AdmissionProcess() {
  return (
    <section id="apply" className="relative min-h-screen scroll-mt-36 overflow-hidden bg-[#F8F8F8] px-4 py-6 text-white md:px-8 lg:px-10">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-0 top-0 h-105 w-105 rounded-full bg-[#5A1F22]/15 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-115 w-[460px] rounded-full bg-[#05498B]/20 blur-[110px]" />

      <div className="relative mx-auto grid min-h-[calc(100vh-48px)] max-w-[1700px] overflow-hidden rounded-[36px] bg-[#340606] shadow-2xl lg:grid-cols-[1.1fr_0.9fr]">
        {/* Left Section */}
        <div className="relative z-10 flex flex-col justify-center overflow-hidden px-5 py-10 md:px-10 lg:px-14">
          {/* Decorative Pattern */}
          <div className="absolute inset-0 opacity-[0.08]">
            <div className="absolute -left-20 top-10 h-72 w-72 rounded-full border border-white" />
            <div className="absolute bottom-12 right-12 h-48 w-48 rounded-full border border-white" />
            <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white" />
          </div>

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
              viewport={{ once: true }}
              className="mb-5 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-md"
            >
              <span className="h-2 w-2 rounded-full bg-[#F6C344]" />
              <span className="text-sm font-semibold uppercase tracking-[0.22em] text-white/80">
                Admissions Open
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75 }}
              viewport={{ once: true }}
              className="max-w-3xl text-4xl font-black uppercase leading-[0.95] tracking-tight md:text-6xl lg:text-[76px]"
            >
              Admission
              <span className="block text-[#F6C344]">Process</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.15 }}
              viewport={{ once: true }}
              className="mt-5 max-w-2xl text-sm leading-relaxed text-white/70 md:text-base"
            >
              Follow these simple steps to start your academic journey with
              Thakur Yugraj Singh University.
            </motion.p>

            <motion.div
              variants={containerVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              className="relative mt-8 grid max-h-[54vh] gap-3 overflow-y-auto pr-2 scrollbar-thin scrollbar-track-white/10 scrollbar-thumb-white/30 md:grid-cols-2 lg:max-h-none"
            >
              {admissionSteps.map((step) => (
                <motion.div
                  key={step.number}
                  variants={itemVariant}
                  whileHover={{ y: -5, scale: 1.015 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.08] p-4 backdrop-blur-xl transition-all duration-300 hover:border-[#F6C344]/60 hover:bg-white/[0.12]"
                >
                  <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-[#F6C344]/10 transition-all duration-300 group-hover:bg-[#F6C344]/20" />

                  <div className="relative z-10 flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F6C344] text-sm font-black text-[#340606] shadow-lg shadow-black/20">
                      {step.number}
                    </div>

                    <div>
                      <h3 className="text-sm font-extrabold uppercase leading-snug tracking-wide text-white md:text-[15px]">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-xs leading-relaxed text-white/65 md:text-sm">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative hidden min-h-full overflow-hidden bg-[#05498B] lg:block">
          {/* Background Image */}
          <Image
            src="/images/admission-bg.jpg"
            alt="University campus background"
            fill
            className="object-cover opacity-35"
            priority
          />

          {/* Blue / Maroon Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#05498B]/95 via-[#05498B]/70 to-[#340606]/80" />

          {/* Large SVG Shape Behind Girl */}
          <motion.svg
            initial={{ opacity: 0, scale: 0.8, rotate: -12 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="absolute left-1/2 top-1/2 z-0 h-[680px] w-[680px] -translate-x-1/2 -translate-y-1/2"
            viewBox="0 0 600 600"
            fill="none"
          >
            <motion.circle
              cx="300"
              cy="300"
              r="230"
              stroke="#F6C344"
              strokeWidth="3"
              strokeDasharray="16 18"
              animate={{ rotate: 360 }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                transformOrigin: "center",
              }}
            />

            <motion.circle
              cx="300"
              cy="300"
              r="180"
              stroke="rgba(255,255,255,0.35)"
              strokeWidth="2"
              strokeDasharray="8 12"
              animate={{ rotate: -360 }}
              transition={{
                duration: 45,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                transformOrigin: "center",
              }}
            />

            <path
              d="M138 360C185 225 294 145 440 180C402 272 418 364 486 450C329 503 190 465 138 360Z"
              fill="#5A1F22"
              opacity="0.9"
            />

            <path
              d="M176 180C260 92 394 112 450 216C360 200 282 229 220 315C177 279 150 226 176 180Z"
              fill="#F6C344"
              opacity="0.2"
            />
          </motion.svg>

          {/* Floating Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="absolute right-8 top-8 z-30 rounded-3xl border border-white/15 bg-white/10 p-5 text-right backdrop-blur-xl"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#F6C344]">
              Your Future
            </p>
            <h3 className="mt-2 text-3xl font-black leading-tight">
              Shape Dreams
              <br />
              Build Future
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            viewport={{ once: true }}
            className="absolute bottom-10 left-8 z-30 max-w-[260px] rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur-xl"
          >
            <p className="text-4xl font-black text-[#F6C344]">6</p>
            <p className="mt-1 text-lg font-bold">Simple Steps</p>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              From application to enrollment, everything is designed to be clear
              and student-friendly.
            </p>
          </motion.div>

          {/* Girl Image */}
          <motion.div
            initial={{ opacity: 0, y: 80, scale: 0.92 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="absolute bottom-0 left-1/2 z-20 h-[88%] w-[88%] -translate-x-1/2"
          >
            <Image
              src="https://res.cloudinary.com/dhlqc0ymy/image/upload/v1781323192/student-1_oidjua.png"
              alt="Student admission"
              fill
              className="object-contain object-bottom drop-shadow-2xl"
              priority
            />
          </motion.div>

          {/* Bottom Fade */}
          <div className="absolute inset-x-0 bottom-0 z-20 h-52 bg-gradient-to-t from-[#05498B] via-[#05498B]/60 to-transparent" />
        </div>

        {/* Mobile Image Section */}
        <div className="relative min-h-[520px] overflow-hidden bg-[#05498B] lg:hidden">
          <Image
            src="/admission/admission-bg.png"
            alt="University campus background"
            fill
            className="object-cover opacity-35"
          />

          <div className="absolute inset-0 bg-gradient-to-br from-[#05498B]/95 to-[#340606]/80" />

          <motion.svg
            className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2"
            viewBox="0 0 600 600"
            fill="none"
          >
            <motion.circle
              cx="300"
              cy="300"
              r="210"
              stroke="#F6C344"
              strokeWidth="3"
              strokeDasharray="16 18"
              animate={{ rotate: 360 }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{ transformOrigin: "center" }}
            />

            <path
              d="M138 360C185 225 294 145 440 180C402 272 418 364 486 450C329 503 190 465 138 360Z"
              fill="#5A1F22"
              opacity="0.9"
            />
          </motion.svg>

          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.94 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="absolute bottom-0 left-1/2 z-20 h-[88%] w-[90%] -translate-x-1/2"
          >
            <Image
              src="https://res.cloudinary.com/dhlqc0ymy/image/upload/v1781323192/student-1_oidjua.png"
              alt="Student admission"
              fill
              className="object-contain object-bottom drop-shadow-2xl"
            />
          </motion.div>

          <div className="absolute inset-x-0 bottom-0 z-20 h-40 bg-gradient-to-t from-[#05498B] to-transparent" />
        </div>
      </div>
    </section>
  );
}
