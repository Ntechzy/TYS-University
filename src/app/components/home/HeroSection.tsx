"use client";

import { getAllStates, getDistricts } from "india-state-district";
import { useEffect, useMemo, useState } from "react";
import { disciplines } from "@/app/data/programs";

const heroBanners = ["/hero/hero1.webp", "/hero/hero2.webp","/hero/hero-night.webp"];

export default function HeroSection() {
  const [activeBanner, setActiveBanner] = useState(0);
  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedDiscipline, setSelectedDiscipline] = useState("");
  const [selectedProgram, setSelectedProgram] = useState("");

  const states = useMemo(() => getAllStates(), []);
  const districts = useMemo(
    () => (selectedState ? getDistricts(selectedState) : []),
    [selectedState],
  );

  const programs = useMemo(
    () =>
      disciplines.find((item) => item.discipline === selectedDiscipline)
        ?.programs ?? [],
    [selectedDiscipline],
  );

  const handleStateChange = (stateCode: string) => {
    setSelectedState(stateCode);
    setSelectedDistrict("");
  };

  const handleDisciplineChange = (discipline: string) => {
    setSelectedDiscipline(discipline);
    setSelectedProgram("");
  };

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveBanner((current) => (current + 1) % heroBanners.length);
    }, 4000);

    return () => window.clearInterval(intervalId);
  }, []);

  const scrollToApplicationForm = () => {
    document.querySelector("#hero-application-form")?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <main className="min-h-screen bg-background pt-16 md:pt-20">
      <section className="relative min-h-[calc(100vh-64px)] w-full overflow-hidden md:h-auto">
        {heroBanners.map((banner, index) => (
          <div
            key={banner}
            className={`absolute inset-0 bg-cover  transition-opacity duration-1000 sm:bg-center md:bg-center ${
              activeBanner === index ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url('${banner}')` }}
          />
        ))}

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/45 md:bg-black/35" />

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-64px)] w-full max-w-350 items-center px-5 py-16 sm:px-8 md:min-h-[calc(100vh-80px)] md:py-20 lg:justify-between lg:px-10">
          <div className="w-full max-w-155 text-white">
            <h1
              className="mb-5 max-w-full wrap-break-word text-4xl font-semibold uppercase leading-tight tracking-[0.08em] sm:text-5xl sm:tracking-widest md:mb-8 md:text-6xl md:tracking-[0.12em]"
              style={{ fontFamily: '"Poppins", Times, serif' }}
            >
              Best Private University in UP
            </h1>

            <p className="mb-8 max-w-130 text-base leading-relaxed text-white/85 sm:text-lg md:mb-10">
              TYS University is focused on innovation, sustainability, and
              academic excellence with world-class infrastructure.
            </p>

            <button
              type="button"
              onClick={scrollToApplicationForm}
              className="rounded bg-accent px-7 py-3 text-sm font-semibold text-foreground transition hover:bg-soft-background sm:px-10 sm:py-4 sm:text-base"
            >
              APPLY TODAY →
            </button>
          </div>

        <div className="hidden lg:block">
  <div
    id="hero-application-form"
    className="w-107.5 scroll-mt-32 rounded-xl border border-black/10 bg-white p-8 shadow-2xl"
  >
    <div className="text-center">
      <p className="text-sm text-(--secondary)/80">APPLY TODAY FOR</p>

      <h3 className="mt-2 text-xl font-bold text-primary">
        TYS UNIVERSITY
      </h3>

      <p className="mt-1 font-semibold text-(--foreground)/70">
        INDIA
      </p>
    </div>

    <div className="mt-6 space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <input
          placeholder="Student Name"
          className="border border-black/10 bg-white p-3 text-sm outline-none focus:border-secondary"
        />

        <input
          placeholder="Student Email"
          className="border border-black/10 bg-white p-3 text-sm outline-none focus:border-secondary"
        />
      </div>

      <input
        placeholder="Mobile Number"
        className="w-full border border-black/10 bg-white p-3 text-sm outline-none focus:border-secondary"
      />

      <div className="grid grid-cols-2 gap-3">
        <select
          value={selectedState}
          onChange={(event) => handleStateChange(event.target.value)}
          className="border border-black/10 bg-white p-3 text-sm outline-none focus:border-secondary"
        >
          <option value="">Select State</option>

          {states.map((state) => (
            <option key={state.code} value={state.code}>
              {state.name}
            </option>
          ))}
        </select>

        <select
          value={selectedDistrict}
          onChange={(event) => setSelectedDistrict(event.target.value)}
          disabled={!selectedState}
          className="border border-black/10 bg-white p-3 text-sm outline-none focus:border-secondary disabled:cursor-not-allowed disabled:bg-black/5 disabled:text-(--foreground)/40"
        >
          <option value="">Select District</option>

          {districts.map((district) => (
            <option key={district} value={district}>
              {district}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <select
          value={selectedDiscipline}
          onChange={(event) =>
            handleDisciplineChange(event.target.value)
          }
          className="border border-black/10 bg-white p-3 text-sm outline-none focus:border-secondary"
        >
          <option value="">Select Discipline</option>

          {disciplines.map((item) => (
            <option key={item.discipline} value={item.discipline}>
              {item.discipline}
            </option>
          ))}
        </select>

        <select
          value={selectedProgram}
          onChange={(event) => setSelectedProgram(event.target.value)}
          disabled={!selectedDiscipline}
          className="border border-black/10 bg-white p-3 text-sm outline-none focus:border-secondary disabled:cursor-not-allowed disabled:bg-black/5 disabled:text-(--foreground)/40"
        >
          <option value="">Select Program</option>

          {programs.map((program) => (
            <option key={program} value={program}>
              {program}
            </option>
          ))}
        </select>
      </div>

      <button className="w-full rounded bg-primary py-4 font-bold text-white transition hover:bg-secondary">
        APPLY NOW
      </button>
    </div>
  </div>
</div>
        </div>

        <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2 md:bottom-10">
          {heroBanners.map((banner, index) => (
            <button
              key={banner}
              type="button"
              aria-label={`Show hero slide ${index + 1}`}
              onClick={() => setActiveBanner(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeBanner === index
                  ? "w-9 bg-accent"
                  : "w-2.5 bg-white/55 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
