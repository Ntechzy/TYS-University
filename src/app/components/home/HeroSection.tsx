"use client";

import { useEffect, useState } from "react";
import AdmissionForm from "@/app/components/home/AdmissionForm";

const heroBanners = [
  "/hero/hero1.webp",
  "/hero/hero2.webp",
  "/hero/hero-night.webp",
  "/building/Building1.png",
];

export default function HeroSection() {
  const [activeBanner, setActiveBanner] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveBanner((current) => (current + 1) % heroBanners.length);
    }, 4000);

    return () => window.clearInterval(intervalId);
  }, []);

  const scrollToApplicationForm = () => {
    document.querySelector("#apply")?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <main className="min-h-screen bg-background pt-16 md:pt-20">
      <section className="relative w-full overflow-hidden">
        {heroBanners.map((banner, index) => (
          <div
            key={banner}
            className={`absolute inset-0 bg-cover transition-opacity duration-1000 sm:bg-center md:bg-center ${
              activeBanner === index ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url('${banner}')` }}
          />
        ))}

        <div className="absolute inset-0 bg-black/50 md:bg-black/35" />

        <div className="relative z-10 mx-auto flex w-full max-w-350 flex-col items-center gap-10 px-5 py-12 sm:px-8 md:min-h-[calc(100vh-80px)] md:justify-center md:py-20 lg:flex-row lg:items-center lg:justify-between lg:gap-6 lg:px-10">
          <div className="w-full max-w-155 text-white">
            <h1
              className="mb-5 max-w-full wrap-break-word text-3xl font-semibold uppercase leading-tight tracking-[0.06em] text-white drop-shadow-[0_6px_20px_rgba(0,0,0,0.45)] sm:text-5xl sm:tracking-widest md:mb-8 md:text-6xl md:tracking-[0.12em]"
              style={{ fontFamily: '"Times New Roman", Times, serif' }}
            >
              <span className="mb-3 block h-1 w-16 rounded-full bg-accent sm:w-24" />
              <span className="block text-white/88">Best Private</span>
              <span className="block font-bold text-white">University in UP</span>
            </h1>

            <p className="mb-8 max-w-130 text-sm leading-relaxed text-white/85 sm:text-lg md:mb-10">
              TYS University is focused on innovation, sustainability, and
              academic excellence with world-class infrastructure.
            </p>

            <button
              type="button"
              onClick={scrollToApplicationForm}
              className="w-full rounded bg-accent px-7 py-3.5 text-sm font-semibold text-foreground transition hover:bg-soft-background sm:w-auto sm:px-10 sm:py-4 sm:text-base"
            >
              APPLY TODAY -&gt;
            </button>
          </div>

          <div className="w-full">
            <AdmissionForm formId="apply" />
          </div>
        </div>

        <div className="relative z-20 flex justify-center gap-2 pb-6 md:absolute md:bottom-10 md:left-1/2 md:-translate-x-1/2 md:pb-0">
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
