"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  BookOpenText,
  BriefcaseBusiness,
  Clock3,
  Microscope,
  Search,
} from "lucide-react";
import {
  brochureSourceNote,
  programCatalog,
  type Program,
  type ProgramCategory,
} from "@/app/data/programs";

type CategoryFilter = ProgramCategory | "All";

const categoryMeta: Array<{
  key: CategoryFilter;
  id: string;
  label: string;
  caption: string;
}> = [
  {
    key: "All",
    id: "all",
    label: "All Programs",
    caption: "Everything listed in the brochure",
  },
  {
    key: "Undergraduate",
    id: "undergraduate",
    label: "Undergraduate",
    caption: "Foundation and degree-starting pathways",
  },
  {
    key: "Postgraduate",
    id: "postgraduate",
    label: "Postgraduate",
    caption: "Advanced and specialization-focused study",
  },
  {
    key: "Doctoral",
    id: "doctoral",
    label: "Doctoral",
    caption: "Research-led terminal programs",
  },
  {
    key: "Diploma",
    id: "diploma",
    label: "Diploma",
    caption: "Shorter professional and applied tracks",
  },
];

const allPrograms = programCatalog.flatMap((faculty) =>
  faculty.programs.map((program) => ({
    ...program,
    discipline: faculty.discipline,
  })),
);

const categoryCountMap = categoryMeta.reduce<Record<CategoryFilter, number>>(
  (counts, category) => {
    counts[category.key] =
      category.key === "All"
        ? allPrograms.length
        : allPrograms.filter((program) => program.category === category.key).length;

    return counts;
  },
  {
    All: 0,
    Undergraduate: 0,
    Postgraduate: 0,
    Doctoral: 0,
    Diploma: 0,
  },
);

const hashToCategory = new Map(
  categoryMeta
    .filter((category) => category.key !== "All")
    .map((category) => [`#${category.id}`, category.key as ProgramCategory]),
);

function matchesSearch(program: Program, discipline: string, query: string) {
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) {
    return true;
  }

  const searchableText = [
    discipline,
    program.name,
    program.category,
    program.eligibility,
    program.duration,
    ...(program.specializations ?? []),
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  return searchableText.includes(normalizedQuery);
}

export default function ProgramsDirectory() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("All");

  useEffect(() => {
    const syncCategoryFromHash = () => {
      const category = hashToCategory.get(window.location.hash);
      setActiveCategory(category ?? "All");
    };

    syncCategoryFromHash();
    window.addEventListener("hashchange", syncCategoryFromHash);

    return () => window.removeEventListener("hashchange", syncCategoryFromHash);
  }, []);

  const visibleFaculties = programCatalog
    .map((faculty) => ({
      ...faculty,
      programs: faculty.programs.filter((program) => {
        const matchesCategory =
          activeCategory === "All" || program.category === activeCategory;

        return matchesCategory && matchesSearch(program, faculty.discipline, searchQuery);
      }),
    }))
    .filter((faculty) => faculty.programs.length > 0);

  const visibleProgramCount = visibleFaculties.reduce(
    (total, faculty) => total + faculty.programs.length,
    0,
  );

  return (
    <>
    <main className="bg-[#f7f3ee] pt-34 text-foreground md:pt-41">
      <section className="border-b border-black/8 bg-[radial-gradient(circle_at_top_left,rgba(246,195,68,0.2),transparent_34%),linear-gradient(180deg,#f7f3ee_0%,#fdfbf8_100%)]">
        <div className="mx-auto max-w-480 px-5 pb-14 pt-7 sm:px-8 lg:px-10">
          <div className="flex flex-wrap items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.26em] text-primary/70">
            <span className="rounded-full border border-primary/15 bg-white/80 px-3 py-1">
              TYS University
            </span>
            <span className="rounded-full border border-primary/15 bg-white/80 px-3 py-1">
              Programs Directory
            </span>
          </div>

          <div className="mt-6 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <h1 className="max-w-3xl font-display text-4xl font-black uppercase leading-[0.98] text-[#431417] sm:text-5xl lg:text-6xl">
                Explore Programmes Across Every Faculty
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-8 text-black/70 sm:text-lg">
                Search brochure-listed programs by level, faculty, eligibility,
                and specialization. This directory is built directly from the
                TYS brochure you shared.
              </p>
            </div>

            <div className="grid gap-4 rounded-[2rem] border border-black/8 bg-white/88 p-5 shadow-[0_18px_60px_rgba(40,20,10,0.08)] backdrop-blur">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-white">
                  <BookOpenText size={22} />
                </span>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary/70">
                    Brochure Snapshot
                  </p>
                  <p className="font-display text-3xl font-bold text-primary">
                    {allPrograms.length} programs
                  </p>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl bg-[#f7f3ee] p-4">
                  <p className="text-sm font-semibold text-black/55">
                    Faculties and schools
                  </p>
                  <p className="mt-1 font-display text-3xl font-bold text-black">
                    {programCatalog.length}
                  </p>
                </div>
                <div className="rounded-2xl bg-[#f7f3ee] p-4">
                  <p className="text-sm font-semibold text-black/55">
                    Levels covered
                  </p>
                  <p className="mt-1 font-display text-3xl font-bold text-black">
                    4
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-480 px-5 py-10 sm:px-8 lg:px-10">
        <div className="rounded-[2rem] border border-black/8 bg-white p-5 shadow-[0_18px_60px_rgba(40,20,10,0.07)] sm:p-7">
          <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary/70">
                Find Your Fit
              </p>
              <label className="mt-3 flex items-center gap-3 rounded-2xl border border-black/10 bg-[#f7f3ee] px-4 py-4">
                <Search size={18} className="shrink-0 text-primary" />
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  placeholder="Search by program, faculty, eligibility, or specialization"
                  className="w-full bg-transparent text-sm text-black outline-none placeholder:text-black/45 sm:text-base"
                />
              </label>
            </div>

            <div className="grid gap-3 rounded-[1.75rem] bg-[#f7f3ee] p-5">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#0b4b8a] text-white">
                  <Microscope size={18} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-black/55">
                    Filtered results
                  </p>
                  <p className="font-display text-2xl font-bold text-black">
                    {visibleProgramCount} programs
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-accent text-foreground">
                  <BriefcaseBusiness size={18} />
                </span>
                <p className="text-sm leading-7 text-black/65">
                  {brochureSourceNote}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-7 grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
            {categoryMeta.map((category) => {
              const isActive = activeCategory === category.key;

              return (
                <button
                  key={category.key}
                  id={category.id}
                  type="button"
                  className={`scroll-mt-48 rounded-[1.5rem] border px-4 py-4 text-left transition ${
                    isActive
                      ? "border-primary bg-primary text-white shadow-[0_16px_30px_rgba(90,31,34,0.2)]"
                      : "border-black/8 bg-[#fcfaf6] text-black hover:border-primary/35 hover:bg-white"
                  }`}
                  onClick={() => {
                    setActiveCategory(category.key);

                    if (typeof window === "undefined") {
                      return;
                    }

                    const nextHash = category.key === "All" ? "" : `#${category.id}`;
                    window.history.replaceState({}, "", `${window.location.pathname}${nextHash}`);
                  }}
                >
                  <p className="font-display text-xl font-bold">
                    {categoryCountMap[category.key]}
                  </p>
                  <p className="mt-2 text-sm font-bold uppercase tracking-[0.14em]">
                    {category.label}
                  </p>
                  <p
                    className={`mt-2 text-sm leading-6 ${
                      isActive ? "text-white/78" : "text-black/55"
                    }`}
                  >
                    {category.caption}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-480 px-5 pb-18 sm:px-8 lg:px-10">
        <div className="grid gap-10">
          {visibleFaculties.length > 0 ? (
            visibleFaculties.map((faculty) => (
              <section
                key={faculty.discipline}
                id={faculty.sectionId}
                className="scroll-mt-48 rounded-[2rem] border border-black/8 bg-white p-5 shadow-[0_18px_60px_rgba(40,20,10,0.07)] sm:p-7"
              >
                <div className="flex flex-col gap-4 border-b border-black/8 pb-5 lg:flex-row lg:items-end lg:justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary/70">
                      Brochure Page {faculty.brochurePage}
                    </p>
                    <h2 className="mt-3 font-display text-3xl font-black text-[#431417] sm:text-4xl">
                      {faculty.discipline}
                    </h2>
                    <p className="mt-3 max-w-3xl text-sm leading-7 text-black/65 sm:text-base">
                      {faculty.description}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f7f3ee] px-4 py-3 text-sm font-semibold text-black/65">
                    {faculty.programs.length} matching program
                    {faculty.programs.length === 1 ? "" : "s"}
                  </div>
                </div>

                <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                  {faculty.programs.map((program) => (
                    <article
                      key={`${faculty.discipline}-${program.name}`}
                      className="group relative overflow-hidden rounded-[1.75rem] border border-black/8 bg-[#fcfbf8] p-5 shadow-[0_12px_28px_rgba(30,20,10,0.05)] transition hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(30,20,10,0.1)]"
                    >
                      <div className="absolute left-0 top-5 h-16 w-1 rounded-r-full bg-primary" />
                      <div className="absolute right-0 top-0 h-0 w-0 border-l-[22px] border-t-[22px] border-l-transparent border-t-[#e4e1db]" />

                      <div className="pl-4">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="rounded-full bg-[#0b4b8a]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#0b4b8a]">
                            {program.category}
                          </span>
                          {program.duration ? (
                            <span className="inline-flex items-center gap-1 rounded-full bg-primary/8 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
                              <Clock3 size={12} />
                              {program.duration}
                            </span>
                          ) : null}
                        </div>

                        <h3 className="mt-4 font-display text-2xl font-bold leading-tight text-black">
                          {program.name}
                        </h3>

                        {program.specializations?.length ? (
                          <div className="mt-4">
                            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-black/45">
                              Specializations
                            </p>
                            <p className="mt-2 text-sm leading-7 text-black/72">
                              {program.specializations.join(", ")}
                            </p>
                          </div>
                        ) : null}

                        {program.eligibility ? (
                          <div className="mt-4">
                            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-black/45">
                              Eligibility
                            </p>
                            <p className="mt-2 text-sm leading-7 text-black/72">
                              {program.eligibility}
                            </p>
                          </div>
                        ) : null}

                        <div className="mt-5 flex items-center justify-between gap-3 border-t border-black/8 pt-4">
                          <p className="text-sm font-semibold text-black/55">
                            Tuition fee not visible in brochure
                          </p>
                          <span className="inline-flex items-center gap-2 text-sm font-bold text-primary">
                            Brochure detail
                            <ArrowRight size={16} />
                          </span>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            ))
          ) : (
            <div className="rounded-[2rem] border border-dashed border-black/15 bg-white px-6 py-16 text-center shadow-[0_18px_60px_rgba(40,20,10,0.05)]">
              <h2 className="font-display text-3xl font-bold text-[#431417]">
                No matching programs found
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-black/65 sm:text-base">
                Try a broader keyword or switch back to another program level to
                explore the full brochure listing.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
    </>
  );
}
