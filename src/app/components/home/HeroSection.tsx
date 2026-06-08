"use client";

import { useEffect, useState } from "react";

const heroBanners = ["/hero/hero1.png", "/hero/hero2.png"];

export default function HeroSection() {
  const [activeBanner, setActiveBanner] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveBanner((current) => (current + 1) % heroBanners.length);
    }, 4000);

    return () => window.clearInterval(intervalId);
  }, []);

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

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-64px)] w-full max-w-[1400px] items-center px-5 py-16 sm:px-8 md:min-h-[calc(100vh-80px)] md:py-20 lg:justify-between lg:px-10">
          <div className="w-full max-w-[620px] text-white">
            <h1 className="mb-5 text-4xl font-bold leading-tight sm:text-5xl md:mb-8 md:text-6xl">
              Best Private University in Punjab (India)
            </h1>

            <p className="mb-8 max-w-[520px] text-base leading-relaxed text-white/85 sm:text-lg md:mb-10">
              Chandigarh University is focused on innovation, sustainability,
              and academic excellence with world-class infrastructure.
            </p>

            <button className="rounded bg-[color:var(--accent)] px-7 py-3 text-sm font-semibold text-[color:var(--foreground)] transition hover:bg-[color:var(--soft-background)] sm:px-10 sm:py-4 sm:text-base">
              APPLY TODAY →
            </button>
          </div>

          <div className="hidden lg:block">
            <div className="w-[430px] rounded-md bg-[color:var(--soft-background)] p-8 shadow-2xl">
              <div className="text-center">
                <p className="text-sm text-[color:var(--secondary)]/80">
                  APPLY TODAY FOR
                </p>

                <h3 className="mt-2 text-xl font-bold text-[color:var(--primary)]">
                  TYS UNIVERSITY
                </h3>

                <p className="mt-1 font-semibold text-[color:var(--foreground)]/70">
                  INDIA
                </p>
              </div>

              <div className="mt-6 space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <input
                    placeholder="Student Name"
                    className="border border-[color:var(--secondary)]/20 bg-white p-3 text-sm outline-none focus:border-[color:var(--secondary)]"
                  />

                  <input
                    placeholder="Student Email"
                    className="border border-[color:var(--secondary)]/20 bg-white p-3 text-sm outline-none focus:border-[color:var(--secondary)]"
                  />
                </div>

                <input
                  placeholder="Mobile Number"
                  className="w-full border border-[color:var(--secondary)]/20 bg-white p-3 text-sm outline-none focus:border-[color:var(--secondary)]"
                />

                <div className="grid grid-cols-2 gap-3">
                  <select className="border border-[color:var(--secondary)]/20 bg-white p-3 text-sm">
                    <option>Select State</option>
                  </select>

                  <select className="border border-[color:var(--secondary)]/20 bg-white p-3 text-sm">
                    <option>Select City</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <select className="border border-[color:var(--secondary)]/20 bg-white p-3 text-sm">
                    <option>Select Discipline</option>
                  </select>

                  <select className="border border-[color:var(--secondary)]/20 bg-white p-3 text-sm">
                    <option>Select Program</option>
                  </select>
                </div>

                <button className="w-full rounded bg-[color:var(--primary)] py-4 font-bold text-white transition hover:bg-[color:var(--secondary)]">
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
                  ? "w-9 bg-[color:var(--accent)]"
                  : "w-2.5 bg-white/55 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </section>
    </main>
  );
}