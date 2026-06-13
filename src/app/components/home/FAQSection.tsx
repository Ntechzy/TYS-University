"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
  {
    id: 1,
    question: "Multicultural Campus",
    answer:
      "Our campus is home to students from 68+ countries, offering a truly global environment where diverse perspectives shape every learning experience.",
    tag: "Campus Life",
    accent: "#E8F6FD",
    image:
      "https://res.cloudinary.com/dhlqc0ymy/image/upload/v1781320774/multicultural_campus_dzibl0.png",
  },
  {
    id: 2,
    question: "Global Collaborations",
    answer:
      "530+ partnerships with top-ranked universities worldwide. Dual-degree programs, joint research, and international faculty exchanges open doors globally.",
    tag: "Global",
    accent: "#F6C344",
    image: "https://res.cloudinary.com/dhlqc0ymy/image/upload/v1781320775/global_collaboration_adqr3y.png",
  },
  {
    id: 3,
    question: "Language and Culture",
    answer:
      "Immersive language labs, cultural festivals, and dedicated international student support make transitioning to campus life seamless and enriching.",
    tag: "Culture",
    accent: "#5A1F22",
    image: "https://res.cloudinary.com/dhlqc0ymy/image/upload/v1781320774/language_cultural_xkbyi7.png",
  },
  {
    id: 4,
    question: "International Research Projects",
    answer:
      "Collaborate on funded research with faculty and peers across disciplines. Projects span 30+ countries and address real-world challenges.",
    tag: "Research",
    accent: "#05498B",
    image: "https://res.cloudinary.com/dhlqc0ymy/image/upload/v1781320775/international_research_project_yfzhkz.png",
  },
  {
    id: 5,
    question: "International Faculty",
    answer:
      "Learn from world-class professors representing over 40 nationalities. Their diverse expertise and global industry experience enrich every classroom.",
    tag: "Faculty",
    accent: "#E8F6FD",
    image: "https://res.cloudinary.com/dhlqc0ymy/image/upload/v1781320776/international_faculty_dcepjf.png",
  },
  {
    id: 6,
    question: "Career Pathways",
    answer:
      "Our placement cell connects you with 500+ global employers. From internships to full-time offers, every student gets dedicated career coaching.",
    tag: "Careers",
    accent: "#F6C344",
    image: "https://res.cloudinary.com/dhlqc0ymy/image/upload/v1781320775/career_pathways_gmnxtt.png",
  },
  {
    id: 7,
    question: "Scholarships and Financial Support",
    answer:
      "Merit-based scholarships, need-based aid, and flexible payment support help students from different backgrounds access a quality university education.",
    tag: "Scholarships",
    accent: "#05498B",
    image: "https://res.cloudinary.com/dhlqc0ymy/image/upload/v1781320776/scholarship_bukj1q.png",
  },
  {
    id: 8,
    question: "Modern Learning Spaces",
    answer:
      "Smart classrooms, advanced labs, collaborative studios, and digital libraries give students the tools they need for hands-on and future-ready learning.",
    tag: "Facilities",
    accent: "#E8F6FD",
    image: "https://res.cloudinary.com/dhlqc0ymy/image/upload/v1781320776/modern_learning_spaces_tj6tqo.png",
  },
  {
    id: 9,
    question: "Student Clubs and Events",
    answer:
      "From technical societies to cultural clubs and sports events, students can build leadership skills, friendships, and strong campus memories beyond academics.",
    tag: "Student Life",
    accent: "#F6C344",
    image: "https://res.cloudinary.com/dhlqc0ymy/image/upload/v1781320774/student_clubs_ajr7q8.png",
  },
  {
    id: 10,
    question: "Hostel and Accommodation",
    answer:
      "Safe, comfortable accommodation options with round-the-clock support, study areas, and community spaces make campus living simple and welcoming.",
    tag: "Accommodation",
    accent: "#5A1F22",
    image: "https://res.cloudinary.com/dhlqc0ymy/image/upload/v1781320774/hostel_accomodation_d6ukfj.png",
  },
  {
    id: 11,
    question: "Industry Exposure",
    answer:
      "Students benefit from expert talks, live projects, industrial visits, and internship programs that connect classroom learning with real professional practice.",
    tag: "Industry",
    accent: "#05498B",
    image: "https://res.cloudinary.com/dhlqc0ymy/image/upload/v1781320774/industry_visits_iom91p.png",
  },
  {
    id: 12,
    question: "Admissions Guidance",
    answer:
      "Our admissions team supports applicants at every step, from program selection and documentation to counseling, deadlines, and final enrollment.",
    tag: "Admissions",
    accent: "#E8F6FD",
    image: "https://res.cloudinary.com/dhlqc0ymy/image/upload/v1781320774/admissions_guidance_hdaslz.png",
  },
];

export default function FAQSection() {
  const [activeId, setActiveId] = useState<number | null>(1);
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="w-full overflow-hidden bg-[color:var(--background)] px-4 py-16 font-sans sm:px-6 md:px-12 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto mb-10 max-w-3xl text-center md:mb-14"
      >
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--secondary)]/70">
          Everything you need to know
        </p>
        <h2 className="font-display text-3xl font-bold leading-tight text-[color:var(--foreground)] sm:text-4xl md:text-5xl">
          Frequently Asked{" "}
          <span className="font-normal italic text-[color:var(--primary)]/70">
            Questions
          </span>
        </h2>
      </motion.div>

      <div className="mx-auto grid max-w-3xl gap-3 md:hidden">
        {faqs.map((faq, index) => {
          const isActive = activeId === faq.id;

          return (
            <motion.button
              key={faq.id}
              type="button"
              aria-expanded={isActive}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.35 }}
              onClick={() => setActiveId(isActive ? null : faq.id)}
              className="overflow-hidden rounded-2xl border border-[color:var(--secondary)]/12 bg-[color:var(--soft-background)] text-left shadow-sm"
            >
              <div className="flex items-start justify-between gap-4 px-5 py-4">
                <div>
                  <span className="mb-2 inline-block rounded-full bg-[color:var(--accent)]/20 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[color:var(--primary)]">
                    {faq.tag}
                  </span>
                  <h3 className="font-display text-lg font-bold leading-snug text-[color:var(--foreground)]">
                    {faq.question}
                  </h3>
                </div>

                <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[color:var(--primary)] text-white">
                  <motion.span
                    animate={{ rotate: isActive ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-lg leading-none"
                  >
                    +
                  </motion.span>
                </span>
              </div>

              <AnimatePresence initial={false}>
                {isActive && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-[color:var(--secondary)]/10">
                      <div
                        className="aspect-video w-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${faq.image})` }}
                      />
                      <div className="px-5 pb-5 pt-4">
                        <p className="text-sm leading-relaxed text-[color:var(--foreground)]/80">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          );
        })}
      </div>

      <div className="mx-auto hidden max-w-7xl md:block">
        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto pb-6 scrollbar-hide"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {faqs.map((faq, index) => {
            const isActive = activeId === faq.id;

            return (
              <motion.div
                key={faq.id}
                layout
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  layout: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                  opacity: { delay: index * 0.07, duration: 0.5 },
                  y: { delay: index * 0.07, duration: 0.5 },
                }}
                onClick={() => setActiveId(isActive ? null : faq.id)}
                className="group relative min-w-0 cursor-pointer overflow-hidden rounded-2xl border border-[color:var(--secondary)]/12"
                style={{
                  flexBasis: 0,
                  flexGrow: isActive ? 7 : 1,
                  flexShrink: 1,
                  minHeight: "480px",
                  backgroundColor: "var(--primary)",
                  scrollSnapAlign: "center",
                  transition: "flex-grow 0.5s cubic-bezier(0.22,1,0.36,1)",
                }}
              >
                {isActive && (
                  <motion.div
                    key="image"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{
                      background: faq.image
                        ? `url(${faq.image}) center/cover no-repeat`
                        : `linear-gradient(135deg, ${faq.accent}cc, var(--primary))`,
                    }}
                  />
                )}

                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.15) 40%, rgba(14,13,15,0.75) 75%, rgba(14,13,15,0.92) 100%)",
                  }}
                />

                <div className="absolute right-4 top-4 z-20">
                  <motion.div
                    animate={{ rotate: isActive ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex h-7 w-7 items-center justify-center rounded-full border border-white/40 bg-[color:var(--secondary)]/25 backdrop-blur-sm"
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <line
                        x1="6"
                        y1="1"
                        x2="6"
                        y2="11"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <line
                        x1="1"
                        y1="6"
                        x2="11"
                        y2="6"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </motion.div>
                </div>

                <AnimatePresence>
                  {!isActive && (
                    <motion.div
                      key="collapsed"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0 z-10 flex flex-col items-center justify-end pb-6"
                    >
                      <span className="mb-4 text-[10px] font-medium tracking-widest text-white/55">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div
                        className="text-sm font-semibold tracking-wide text-white"
                        style={{
                          writingMode: "vertical-rl",
                          textOrientation: "mixed",
                          transform: "rotate(180deg)",
                          whiteSpace: "nowrap",
                          letterSpacing: "0.05em",
                        }}
                      >
                        {faq.question}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      key="expanded"
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 16 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute inset-0 z-10 flex items-center justify-center px-7 py-7"
                    >
                      <div className="w-full max-w-sm text-center">
                        <span className="mb-4 inline-block rounded-full border border-white/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/75">
                          {faq.tag}
                        </span>

                        <h3 className="font-display mb-3 text-2xl font-bold leading-snug text-white">
                          {faq.question}
                        </h3>

                        <div className="mx-auto mb-4 h-0.5 w-10 rounded-full bg-[color:var(--accent)]" />

                        <p className="text-sm leading-relaxed text-white/85">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {!isActive && (
                  <div className="pointer-events-none absolute inset-0 z-10 rounded-2xl bg-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="mt-4 hidden text-center text-xs tracking-wide text-[color:var(--secondary)]/70 md:block"
      >
        Click any card to expand
      </motion.p>
    </section>
  );
}
