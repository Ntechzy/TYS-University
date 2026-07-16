// FutureReadySection.tsx
"use client";

import Image from "next/image";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
  type Variants,
} from "motion/react";
import { useEffect, useRef } from "react";

const copyContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const copyItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

function AnimatedPercentage() {
  const ref = useRef<HTMLSpanElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const isInView = useInView(ref, {
    once: true,
    margin: "-80px",
  });

  const value = useMotionValue(shouldReduceMotion ? 100 : 0);

  const formattedValue = useTransform(
    value,
    (latest) => `${Math.round(latest)}%`,
  );

  useEffect(() => {
    if (!isInView) return;

    if (shouldReduceMotion) {
      value.set(100);
      return;
    }

    const controls = animate(value, 100, {
      duration: 1.4,
      ease: "easeOut",
    });

    return () => controls.stop();
  }, [isInView, shouldReduceMotion, value]);

  return (
    <span ref={ref} className="inline-flex">
      <span className="sr-only">100%</span>

      <motion.span aria-hidden="true">
        {formattedValue}
      </motion.span>
    </span>
  );
}

function BackgroundWaves() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1200 700"
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-0 -z-10 h-full w-full"
    >
      <path
        d="M-80 120C170 5 330 205 585 100C820 5 950 20 1280 150"
        fill="none"
        stroke="#0B1B3F"
        strokeWidth="2"
        strokeOpacity="0.05"
      />

      <path
        d="M-120 205C135 70 350 265 620 145C890 25 1040 100 1320 215"
        fill="none"
        stroke="#0B1B3F"
        strokeWidth="2"
        strokeOpacity="0.05"
      />

      <path
        d="M-100 535C165 400 390 625 670 500C930 385 1090 410 1300 545"
        fill="none"
        stroke="#6B1E23"
        strokeWidth="2"
        strokeOpacity="0.05"
      />

      <path
        d="M-140 625C130 485 380 690 665 585C910 495 1070 500 1310 640"
        fill="none"
        stroke="#6B1E23"
        strokeWidth="2"
        strokeOpacity="0.05"
      />
    </svg>
  );
}

export default function FutureReadySection() {
  return (
    <section
      id="future-ready"
      aria-labelledby="future-ready-heading"
      className="relative isolate w-full overflow-hidden bg-white py-16 md:py-24"
    >
      <BackgroundWaves />

      <div
        aria-hidden="true"
        className="absolute left-0 top-0 -z-10 size-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F2B90D]/[0.06] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute bottom-0 right-0 -z-10 size-96 translate-x-1/3 translate-y-1/3 rounded-full bg-[#6B1E23]/[0.04] blur-3xl"
      />

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        {/* Image column */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.65,
            ease: "easeOut",
          }}
          className="relative mx-auto w-full max-w-xl lg:mx-0"
        >
          <div
            aria-hidden="true"
            className="absolute -left-4 -top-5 h-[92%] w-[92%] rounded-[2rem] bg-gradient-to-br from-sky-100 to-sky-50 sm:-left-7 sm:-top-7"
          />

          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#F5F1EA]">
            <Image
              // Replace this placeholder path with the final uploaded student image.
              src="/feature-image/future-student.png"
              alt="TYS University student wearing a VR headset, representing technology-driven learning"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 46vw"
              className="object-cover object-top"
            />

            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-[#0B1B3F]/10 via-transparent to-white/5"
            />
          </div>
        </motion.div>

        {/* Copy column */}
        <motion.div
          variants={copyContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center lg:text-left"
        >
          <motion.div
            variants={copyItemVariants}
            className="flex items-center justify-center gap-4 lg:justify-start"
          >
            <span
              aria-hidden="true"
              className="hidden h-0.5 w-10 shrink-0 rounded-full bg-[#2B2B2B] lg:block"
            />

            <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-gray-700 sm:text-xs md:tracking-[0.28em]">
              The Next Generation of Education
            </p>
          </motion.div>

          <motion.h2
            id="future-ready-heading"
            variants={copyItemVariants}
            className="mt-6 font-extrabold uppercase leading-[0.88] tracking-[-0.07em] text-[#2B2B2B]"
          >
            <span className="block text-[15vw] sm:text-[7.5rem] lg:text-[5.5rem] xl:text-[6.6rem]">
              Futur
              <motion.span
                initial={{
                  opacity: 0,
                  y: -18,
                  rotate: -8,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  rotate: -6,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: 0.35,
                  ease: "easeOut",
                }}
                className="inline-block origin-bottom text-[#6B1E23]"
              >
                e
              </motion.span>
            </span>

            <span className="block text-[15vw] sm:text-[7.5rem] lg:text-[5.5rem] xl:text-[6.6rem]">
              Ready
            </span>
          </motion.h2>

          <motion.div
            variants={copyItemVariants}
            className="mt-8 md:mt-10"
          >
            <div className="text-6xl font-extrabold leading-none tracking-tight text-[#6B1E23] md:text-7xl">
              <AnimatedPercentage />
            </div>

            <p className="mx-auto mt-5 max-w-md text-lg font-extrabold uppercase leading-tight tracking-[-0.02em] text-[#2B2B2B] md:text-xl lg:mx-0">
              <span
                aria-hidden="true"
                className="mr-2 inline-block text-2xl text-[#6B1E23]"
              >
                #
              </span>
              Curriculum Designed by Industry Experts
            </p>

            <div
              aria-hidden="true"
              className="mx-auto mt-6 h-0.5 w-24 rounded-full bg-[#6B1E23] lg:mx-0"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}