"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, MapPin, Trophy } from "lucide-react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const kisanMelaImages = [
  "/kisan-mela/kisan-mela1.webp",
  "/kisan-mela/kisan-mela2.webp",
  "/kisan-mela/kisan-mela3.webp",
  "/kisan-mela/kisan-mela4.webp",
  "/kisan-mela/kisan-mela5.webp",
  "/kisan-mela/kisan-mela6.webp",
  "/kisan-mela/kisan-mela7.webp",
  "/kisan-mela/kisan-mela8.webp",
];

export default function KisanMelaSection() {
  const [allowAutoplay, setAllowAutoplay] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateAutoplay = () => setAllowAutoplay(!mediaQuery.matches);

    updateAutoplay();
    mediaQuery.addEventListener("change", updateAutoplay);

    return () => mediaQuery.removeEventListener("change", updateAutoplay);
  }, []);

  return (
    <section
      aria-labelledby="kisan-mela-heading"
      className="relative overflow-hidden bg-[#071F3A] px-5 py-16 text-white md:px-10 md:py-22 lg:px-16"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-36 top-24 h-96 w-96 rounded-full bg-[#8B2C2C]/28 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-36 bottom-16 h-96 w-96 rounded-full bg-[#F6C344]/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-350">
        <div className="grid items-end gap-8 border-b border-white/15 pb-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-14">
          <div className="max-w-5xl">
            <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.28em] text-[#F6C344]">
              <span className="h-px w-8 bg-[#F6C344]" />
              University Achievement
            </p>
            <h2
              id="kisan-mela-heading"
              className="mt-5 font-display text-3xl font-black leading-[1.12] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl"
            >
              TYS University Secures Third Prize at Uttar Kshetriya Kisan Mela
              &amp; Krishi Udyog Pradarshini – CSA 2026, Kanpur
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-7 text-white/68 sm:text-lg sm:leading-8">
              Celebrating excellence, innovation and educational awareness.
            </p>
          </div>

          <div className="flex items-center gap-4 lg:flex-col lg:items-end">
            <div className="inline-flex items-center gap-3 rounded-2xl border border-[#F6C344]/30 bg-[#F6C344]/10 px-4 py-3">
              <Trophy size={24} className="text-[#F6C344]" aria-hidden />
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F6C344]">
                  Award
                </p>
                <p className="font-display text-lg font-bold">Third Prize</p>
              </div>
            </div>
            <span className="hidden items-center gap-2 text-sm text-white/65 sm:inline-flex">
              <MapPin size={17} className="text-[#F6C344]" aria-hidden />
              CSA University, Kanpur
            </span>
          </div>
        </div>

        <div className="mt-10">
          <div className="relative min-w-0">
            <Swiper
              nested
              loop
              speed={850}
              slidesPerView={1}
              spaceBetween={20}
              grabCursor
              autoplay={
                allowAutoplay
                  ? {
                      delay: 3800,
                      disableOnInteraction: false,
                      pauseOnMouseEnter: true,
                    }
                  : false
              }
              pagination={{ clickable: true }}
              navigation={{
                prevEl: ".kisan-mela-prev",
                nextEl: ".kisan-mela-next",
              }}
              modules={[Autoplay, Navigation, Pagination]}
              className="overflow-hidden rounded-3xl bg-[#020D19] [--swiper-pagination-bullet-inactive-color:#ffffff] [--swiper-pagination-bullet-inactive-opacity:0.55] [--swiper-pagination-color:#F6C344]"
            >
              {kisanMelaImages.map((src, index) => (
                <SwiperSlide key={src}>
                  <figure className="relative aspect-[4/3] overflow-hidden bg-[#020D19] sm:aspect-[16/10] lg:aspect-video">
                    <Image
                      src={src}
                      alt=""
                      fill
                      sizes="(max-width: 1024px) 100vw, 1400px"
                      className="scale-110 object-cover opacity-35 blur-2xl"
                      aria-hidden
                    />
                    <Image
                      src={src}
                      alt={`TYS University exhibition at Uttar Kshetriya Kisan Mela and Krishi Udyog Pradarshini, photo ${index + 1}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 1400px"
                      className="relative z-10 object-contain"
                    />
                    <div className="absolute inset-0 z-10 bg-linear-to-t from-[#071F3A]/50 via-transparent to-black/5" />
                  </figure>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="absolute right-4 top-4 z-20 flex gap-2 sm:right-6 sm:top-6">
              <button
                type="button"
                aria-label="Show previous Kisan Mela exhibition photo"
                className="kisan-mela-prev flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-[#071F3A]/75 text-white backdrop-blur-md transition hover:border-[#F6C344] hover:bg-[#F6C344] hover:text-[#071F3A] active:scale-95"
              >
                <ChevronLeft size={21} aria-hidden />
              </button>
              <button
                type="button"
                aria-label="Show next Kisan Mela exhibition photo"
                className="kisan-mela-next flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-[#071F3A]/75 text-white backdrop-blur-md transition hover:border-[#F6C344] hover:bg-[#F6C344] hover:text-[#071F3A] active:scale-95"
              >
                <ChevronRight size={21} aria-hidden />
              </button>
            </div>
          </div>

          <article className="relative mt-8 overflow-hidden rounded-3xl bg-[#F4F1EC] p-6 text-[#4A4438] shadow-[0_24px_70px_rgba(0,0,0,0.18)] sm:p-8 lg:p-12">
            <div
              aria-hidden
              className="absolute right-0 top-0 h-40 w-40 rounded-bl-full bg-[#D4A96A]/18"
            />

            <div className="relative grid gap-7 lg:grid-cols-[minmax(0,1fr)_220px] lg:items-center lg:gap-12">
              <div className="max-w-5xl">
                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#8B2C2C]">
                  A Proud Milestone
                </p>
                <p className="mt-4 font-display text-xl font-semibold leading-relaxed text-[#0A0905] sm:text-2xl sm:leading-relaxed">
                  Thakur Yugraj Singh University, Fatehpur, proudly achieved a
                  remarkable milestone by securing Third Prize among
                  participating universities at the prestigious Uttar Kshetriya
                  Kisan Mela Evam Krishi Udyog Pradarshini – CSA 2026.
                </p>
              </div>

              <div className="hidden aspect-square items-center justify-center rounded-full border border-[#D4A96A]/45 bg-white shadow-lg lg:flex">
                <div className="text-center">
                  <Trophy size={32} className="mx-auto text-[#8B2C2C]" aria-hidden />
                  <p className="mt-3 font-display text-6xl font-black leading-none text-[#071F3A]">
                    03
                  </p>
                  <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[#8B2C2C]">
                    Third Prize
                  </p>
                </div>
              </div>
            </div>

            <p className="relative mt-6 max-w-5xl text-[15px] leading-7 sm:text-base sm:leading-8">
              The university participated through an informative and
              interactive exhibition stall designed to promote educational
              awareness, highlight academic opportunities and showcase its
              diverse range of professional courses.
            </p>

            <div className="relative mt-8 grid gap-9 border-t border-[#D4C9B8] pt-8 text-[15px] leading-7 sm:text-base sm:leading-8 lg:grid-cols-2 lg:gap-14">
              <div>
                <h3 className="font-display text-xl font-bold text-[#071F3A]">
                  Promoting Education Through an Interactive Stall
                </h3>
                <div className="mt-5 space-y-5">
                  <p>
                    The TYS University stall attracted visitors, students,
                    farmers, education enthusiasts and distinguished guests. The
                    university team actively engaged with visitors, providing
                    information about its academic programmes, career
                    opportunities and learning environment.
                  </p>
                  <p>
                    The stall served as an effective platform to create
                    awareness about higher education and encourage young
                    aspirants to explore professional courses and career-oriented
                    learning opportunities.
                  </p>
                </div>
              </div>

              <div className="lg:border-l lg:border-[#D4C9B8] lg:pl-14">
                <h3 className="font-display text-xl font-bold text-[#071F3A]">
                  A Proud Achievement for TYS University
                </h3>
                <div className="mt-5 space-y-5">
                  <p>
                    Among the participating universities, TYS University was
                    honoured with the Third Prize for its stall presentation and
                    participation at the exhibition.
                  </p>
                  <p>
                    This recognition reflects the dedication, teamwork,
                    creativity and efforts of the university&apos;s entire team in
                    representing the institution at this prestigious regional
                    event.
                  </p>
                </div>

                <h3 className="mt-8 font-display text-xl font-bold text-[#071F3A]">
                  Celebrating Teamwork and Excellence
                </h3>
                <p className="mt-5">
                  The achievement stands as a proud moment for the entire TYS
                  University family. The university extends its heartfelt
                  congratulations to all team members whose collective efforts
                  and commitment contributed to this success.
                </p>
              </div>
            </div>

            <div className="relative mt-9 rounded-2xl bg-[#071F3A] px-6 py-7 text-white sm:px-8 sm:py-8 lg:flex lg:items-center lg:justify-between lg:gap-12">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#F6C344]">
                  TYS University – Creating Opportunities, Inspiring Futures
                </p>
                <p className="mt-3 max-w-4xl text-sm leading-7 text-white/70 sm:text-base">
                  Through active participation in educational exhibitions,
                  awareness initiatives and public engagement programmes, TYS
                  University continues to strengthen its commitment to
                  accessible education, skill development and career-oriented
                  learning.
                </p>
              </div>
              <p className="mt-6 max-w-sm shrink-0 font-display text-xl font-bold leading-snug text-[#F6C344] lg:mt-0 lg:text-right">
                Third Prize, One Proud Achievement, Countless Opportunities!
              </p>
            </div>

            <p className="relative mt-8 text-center font-display text-sm font-semibold tracking-wide text-[#5A5248] sm:text-base">
              Thakur Yugraj Singh University, Fatehpur – Empowering Knowledge,
              Inspiring Innovation, Building Futures.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
