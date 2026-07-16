// FactsAndFiguresSection.tsx
"use client";

import {
  ArrowRight,
  Briefcase,
  CheckCircle2,
  Cpu,
  Sparkles,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
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

type StatItem = {
  value: number;
  suffix: string;
  label: string;
  color: string;
};

type FeatureCard = {
  title: string;
  icon: LucideIcon;
  intro: string;
  subheading: string;
  bullets: string[];
  footer?: string;
  iconBackground: string;
  boldBullets?: boolean;
};

const stats: StatItem[] = [
  {
    value: 20,
    suffix: "+",
    label: "Years of experience in the field of education",
    color: "text-[#6B1E23]",
  },
  {
    value: 250,
    suffix: "+",
    label: "Experienced Faculty Members Across Multidisciplinary Domains",
    color: "text-[#0B1B3F]",
  },
];

const learningPillars = [
  "Industry Perspective",
  "Expert Mentorship",
  "Practical Learning",
];

const advantageItems = [
  "More than a degree.",
  "More than classroom learning.",
  "More than technical knowledge.",
];

const featureCards: FeatureCard[] = [
  {
    title: "AI-Powered Academic Ecosystem",
    icon: Cpu,
    iconBackground: "bg-[#6B1E23]",
    intro:
      "Artificial Intelligence and digital technologies are reshaping education and the workplace. TYS University introduces students to these developments through specialised programmes, practical projects, digital resources, and modern academic facilities.",
    subheading: "Students gain exposure to:",
    bullets: [
      "Artificial Intelligence and Data Science",
      "Digital tools and modern computing",
      "Project-based learning",
      "Technology-enabled classrooms",
      "Analytical and problem-solving skills",
    ],
    footer:
      "Preparing students for opportunities in a technology-driven world.",
  },
  {
    title: "Career-Oriented Curriculum",
    icon: Briefcase,
    iconBackground: "bg-[#0B1B3F]",
    intro:
      "Our programmes combine academic knowledge with practical skills, industry exposure and professional development.",
    subheading: "The learning approach includes:",
    bullets: [
      "Conceptual understanding",
      "Practical and experiential learning",
      "Professional communication",
      "Industry exposure",
      "Career guidance",
    ],
    footer:
      "An academic experience built on competence, confidence and character.",
  },
  {
    title: "Campus to Career Readiness",
    icon: TrendingUp,
    iconBackground: "bg-[#6B1E23]",
    intro:
      "Preparing students to move confidently from campus to career.",
    subheading: "Core principles:",
    bullets: [
      "Technology strengthens learning.",
      "Practical exposure builds confidence.",
      "Innovation encourages new ideas.",
      "Values shape responsible individuals.",
    ],
    boldBullets: true,
  },
];

const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
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

const checklistItemVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -24,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const featureCardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.58,
      ease: "easeOut",
    },
  },
};

function staggerContainer(staggerChildren: number): Variants {
  return {
    hidden: {},
    visible: {
      transition: {
        staggerChildren,
      },
    },
  };
}

function Eyebrow({ children }: { children: string }) {
  return (
    <div className="flex items-center justify-start gap-3">
      <span
        aria-hidden="true"
        className="h-0.5 w-8 shrink-0 rounded-full bg-[#F2B90D]"
      />

      <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#6B1E23] sm:text-sm">
        {children}
      </p>
    </div>
  );
}

function AccentDivider({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`h-0.5 w-10 rounded-full bg-[#F2B90D] transition-all duration-300 group-hover:w-20 ${className}`}
    />
  );
}

function AnimatedNumber({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const isInView = useInView(ref, {
    once: true,
    margin: "-80px",
  });

  const motionValue = useMotionValue(shouldReduceMotion ? value : 0);

  const formattedValue = useTransform(motionValue, (latest) =>
    Math.round(latest).toLocaleString(),
  );

  useEffect(() => {
    if (!isInView) return;

    if (shouldReduceMotion) {
      motionValue.set(value);
      return;
    }

    const controls = animate(motionValue, value, {
      duration: 1.5,
      ease: "easeOut",
    });

    return () => controls.stop();
  }, [isInView, motionValue, shouldReduceMotion, value]);

  const accessibleValue = `${value.toLocaleString()}${suffix}`;

  return (
    <span ref={ref} className="inline-flex items-baseline">
      <span className="sr-only">{accessibleValue}</span>

      <span aria-hidden="true" className="inline-flex items-baseline">
        <motion.span>{formattedValue}</motion.span>
        <span>{suffix}</span>
      </span>
    </span>
  );
}

function StatCard({ stat }: { stat: StatItem }) {
  return (
    <motion.article
      variants={fadeUpVariants}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="group relative overflow-hidden rounded-2xl border border-black/5 bg-white p-7 shadow-[0_12px_35px_rgba(28,24,20,0.06)] transition-[border-color,box-shadow] duration-300 hover:border-[#F2B90D] hover:shadow-[0_20px_50px_rgba(28,24,20,0.12)] md:p-8"
    >
      <div
        aria-hidden="true"
        className="absolute -right-12 -top-12 size-32 rounded-full bg-[#F5F1EA] transition-transform duration-500 group-hover:scale-125"
      />

      <div className="relative">
        <div
          className={`text-5xl font-extrabold leading-none tracking-tight md:text-6xl ${stat.color}`}
        >
          <AnimatedNumber value={stat.value} suffix={stat.suffix} />
        </div>

        <AccentDivider className="mt-5" />

        <p className="mt-5 max-w-md text-base font-medium leading-7 text-gray-700 md:text-lg">
          {stat.label}
        </p>
      </div>
    </motion.article>
  );
}

function FeatureCard({ card }: { card: FeatureCard }) {
  const Icon = card.icon;

  return (
    <motion.article
      variants={featureCardVariants}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2 }}
      className="group flex h-full flex-col rounded-2xl border border-black/5 bg-white p-6 shadow-[0_12px_35px_rgba(28,24,20,0.06)] transition-[border-color,box-shadow] duration-300 hover:border-[#F2B90D] hover:shadow-[0_22px_55px_rgba(28,24,20,0.12)] md:p-8"
    >
      <div
        className={`flex size-12 items-center justify-center rounded-full text-white shadow-[0_8px_22px_rgba(0,0,0,0.14)] ${card.iconBackground}`}
      >
        <Icon aria-hidden="true" size={23} strokeWidth={1.9} />
      </div>

      <h3 className="mt-6 text-xl font-bold leading-tight tracking-tight text-[#171717] md:text-2xl">
        {card.title}
      </h3>

      <AccentDivider className="mt-4" />

      <p className="mt-5 text-sm leading-6 text-gray-600">{card.intro}</p>

      <p className="mt-6 text-sm font-bold uppercase tracking-[0.12em] text-[#6B1E23]">
        {card.subheading}
      </p>

      <ul className="mt-4 space-y-3">
        {card.bullets.map((bullet) => (
          <li key={bullet} className="flex items-start gap-3">
            <ArrowRight
              aria-hidden="true"
              className="mt-0.5 size-4 shrink-0 text-[#F2B90D]"
              strokeWidth={2.5}
            />

            <span
              className={`text-sm leading-6 text-gray-700 ${
                card.boldBullets ? "font-semibold" : "font-medium"
              }`}
            >
              {bullet}
            </span>
          </li>
        ))}
      </ul>

      {card.footer ? (
        <p className="mt-auto border-t border-black/5 pt-6 text-sm italic leading-6 text-gray-500">
          {card.footer}
        </p>
      ) : (
        <div className="mt-auto" />
      )}
    </motion.article>
  );
}

export default function FactsAndFiguresSection() {
  return (
    <section
      id="facts-and-figures"
      aria-labelledby="facts-heading"
      className="relative isolate w-full overflow-hidden bg-white py-20 md:py-28"
    >
      <div
        aria-hidden="true"
        className="absolute left-0 top-0 -z-10 size-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F2B90D]/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute bottom-0 right-0 -z-10 size-[28rem] translate-x-1/3 translate-y-1/3 rounded-full bg-[#6B1E23]/[0.06] blur-3xl"
      />

      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="space-y-16 md:space-y-24">
          {/* Block 1: Header and statistics */}
          <div>
            <motion.header
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="max-w-4xl"
            >
              <Eyebrow>Facts &amp; Figures</Eyebrow>

              <h2
                id="facts-heading"
                className="mt-5 text-3xl font-bold leading-[1.08] tracking-tight text-[#171717] sm:text-4xl md:text-5xl lg:text-6xl"
              >
                Education Built on Experience
              </h2>

              <p className="mt-3 text-2xl font-semibold leading-tight tracking-tight text-[#6B1E23] sm:text-3xl md:text-4xl">
                Learning Designed for Tomorrow
              </p>
            </motion.header>

            <motion.div
              variants={staggerContainer(0.12)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="mt-10 grid grid-cols-1 gap-6 md:mt-14 md:grid-cols-2"
            >
              {stats.map((stat) => (
                <StatCard key={stat.label} stat={stat} />
              ))}
            </motion.div>
          </div>

          {/* Block 2: Introduction statement */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.58, ease: "easeOut" }}
            className="relative overflow-hidden rounded-2xl bg-[#F5F1EA] px-6 py-10 md:px-10 md:py-12 lg:px-14"
          >
            <Sparkles
              aria-hidden="true"
              className="pointer-events-none absolute -right-8 -top-8 size-40 rotate-12 text-[#6B1E23] opacity-[0.045] md:size-56"
              strokeWidth={1}
            />

            <div className="relative z-10">
              <Eyebrow>Where Learning Shapes the Future</Eyebrow>

              <p className="mt-6 max-w-4xl text-base leading-8 text-gray-700 md:text-lg md:leading-9">
                Education today must prepare students not only for examinations,
                but also for evolving technologies, professional responsibility,
                and real-world challenges. At TYS University, learning is
                designed to strengthen knowledge, curiosity, confidence, and the
                ability to apply ideas with purpose. Every academic experience
                is shaped by industry perspective, expert mentorship, and
                practical learning so students are prepared to contribute
                responsibly in their professions and communities.
              </p>

              <div className="mt-8 border-t-2 border-[#6B1E23] pt-6">
                <div className="flex flex-wrap gap-3">
                  {learningPillars.map((pillar) => (
                    <span
                      key={pillar}
                      className="inline-flex rounded-full bg-[#F2B90D] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#6B1E23]"
                    >
                      {pillar}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Block 3: TYS advantage */}
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-[#0B1B3F]">
                The TYS Advantage
              </p>

              <h3 className="mt-4 max-w-md text-3xl font-bold leading-tight tracking-tight text-[#171717] md:text-4xl">
                An Education That Goes{" "}
                <span className="text-[#6B1E23]">Beyond</span>
              </h3>

              <div
                aria-hidden="true"
                className="mt-5 h-0.5 w-12 rounded-full bg-[#F2B90D]"
              />
            </motion.div>

            <motion.ul
              variants={staggerContainer(0.15)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="space-y-4"
            >
              {advantageItems.map((item) => (
                <motion.li
                  key={item}
                  variants={checklistItemVariants}
                  className="flex items-center gap-4 rounded-2xl border border-black/5 bg-[#F5F1EA] px-5 py-5 md:px-6"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
                    <CheckCircle2
                      aria-hidden="true"
                      className="size-6 text-[#F2B90D]"
                      strokeWidth={2.2}
                    />
                  </span>

                  <span className="text-lg font-medium text-gray-800 md:text-xl">
                    {item}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Block 4: Feature cards */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="max-w-3xl"
            >
              <Eyebrow>Our Academic Pillars</Eyebrow>

              <h3 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#171717] md:text-4xl">
                Knowledge, Skills and{" "}
                <span className="text-[#6B1E23]">Career Readiness</span>
              </h3>

              <p className="mt-4 text-base leading-7 text-gray-600 md:text-lg">
                A multidisciplinary learning environment designed to connect
                academic foundations with technology, practice, and
                professional growth.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer(0.12)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3"
            >
              {featureCards.map((card) => (
                <FeatureCard key={card.title} card={card} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}