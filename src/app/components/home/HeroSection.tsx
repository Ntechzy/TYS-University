"use client";

import { useEffect, useState } from "react";

const heroBanners = [
  "/hero/hero1.png",
  "/hero/hero2.png",
];

export default function HeroSection() {
  const [activeBanner, setActiveBanner] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveBanner((current) => (current + 1) % heroBanners.length);
    }, 4000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <main className="min-h-screen bg-[color:var(--background)]">
      <section className="relative h-screen w-full overflow-hidden">
        {heroBanners.map((banner, index) => (
          <div
            key={banner}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              activeBanner === index ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url('${banner}')` }}
          />
        ))}

        {/* <div className="absolute inset-0 bg-gradient-to-br from-amber-950/90 via-amber-900/70 to-black/80" /> */}

        <div className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 gap-2">
          {heroBanners.map((banner, index) => (
            <button
              key={banner}
              type="button"
              aria-label={`Show hero slide ${index + 1}`}
              onClick={() => setActiveBanner(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeBanner === index
                  ? "w-10 bg-[color:var(--accent)]"
                  : "w-2.5 bg-white/55 hover:bg-white/80"
              }`}
            />
          ))}
        </div>

        <div className="relative z-10 mx-auto flex h-full max-w-[1400px] items-center justify-between px-8 pt-[180px]">
          <div className="max-w-137.5 text-white">
            <h1 className="mb-8 text-6xl font-bold leading-tight">
              Best Private University in Punjab (India)
            </h1>

            <p className="mb-10 text-lg text-white/85">
              Chandigarh University is focused on innovation, sustainability,
              and academic excellence with world-class infrastructure.
            </p>

            <button className="rounded bg-[color:var(--accent)] px-10 py-4 font-semibold text-[color:var(--foreground)] transition hover:bg-[color:var(--soft-background)]">
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
      </section>
    </main>
  );
}
