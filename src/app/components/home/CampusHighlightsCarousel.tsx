"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Swiper as SwiperInstance } from "swiper";
import { A11y, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import FilariaQuizSection from "./FilariaQuizSection";
import FreshersPartySection from "./FreshersPartySection";
import KisanMelaSection from "./KisanMelaSection";
import ViksitBharatSection from "./ViksitBharatSection";

import "swiper/css";

const highlights = [
  {
    id: "filaria-quiz",
    label: "Filaria Champions",
    title: "Kaun Banega Filaria Champion Quiz Competition",
    content: <FilariaQuizSection />,
  },
  {
    id: "kisan-mela",
    label: "Kisan Mela",
    title: "Uttar Kshetriya Kisan Mela & Krishi Udyog Pradarshini",
    content: <KisanMelaSection />,
  },
  {
    id: "youth-parliament",
    label: "Youth Parliament",
    title: "Viksit Bharat Youth Parliament 2026",
    content: <ViksitBharatSection />,
  },
  {
    id: "freshers-party",
    label: "Fresher’s Party",
    title: "TYS University Fresher’s Party 2026",
    content: <FreshersPartySection />,
  },
] as const;

export default function CampusHighlightsCarousel() {
  const [swiper, setSwiper] = useState<SwiperInstance | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeHighlight = highlights[activeIndex];

  return (
    <section
      aria-labelledby="campus-highlights-heading"
      className="overflow-hidden bg-white"
    >
      <div className="border-y border-[#D9D2C7] bg-[#FAF8F4] px-5 py-10 md:px-10 lg:px-16">
        <div className="mx-auto max-w-350">
          <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.28em] text-[#8B2C2C]">
                <span className="h-px w-8 bg-[#8B2C2C]" />
                News &amp; Events
              </p>
              <h2
                id="campus-highlights-heading"
                className="mt-3 font-display text-3xl font-black tracking-tight text-[#071F3A] sm:text-4xl"
              >
                Campus Highlights
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-[#6A6258] sm:text-base">
                Explore the latest achievements, celebrations and initiatives
                from the TYS University community.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="mr-1 text-xs font-bold tabular-nums text-[#6A6258]">
                {String(activeIndex + 1).padStart(2, "0")} / {String(highlights.length).padStart(2, "0")}
              </span>
              <button
                type="button"
                aria-label="Show previous campus highlight"
                disabled={activeIndex === 0}
                onClick={() => swiper?.slidePrev()}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#C8BFB2] text-[#071F3A] transition hover:border-[#8B2C2C] hover:bg-[#8B2C2C] hover:text-white disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:border-[#C8BFB2] disabled:hover:bg-transparent disabled:hover:text-[#071F3A]"
              >
                <ChevronLeft size={21} aria-hidden />
              </button>
              <button
                type="button"
                aria-label="Show next campus highlight"
                disabled={activeIndex === highlights.length - 1}
                onClick={() => swiper?.slideNext()}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#C8BFB2] text-[#071F3A] transition hover:border-[#8B2C2C] hover:bg-[#8B2C2C] hover:text-white disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:border-[#C8BFB2] disabled:hover:bg-transparent disabled:hover:text-[#071F3A]"
              >
                <ChevronRight size={21} aria-hidden />
              </button>
            </div>
          </div>

          <div
            className="mt-8 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:thin]"
            role="tablist"
            aria-label="Choose a campus highlight"
          >
            {highlights.map((highlight, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={highlight.id}
                  id={`${highlight.id}-tab`}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`${highlight.id}-panel`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => swiper?.slideTo(index)}
                  onKeyDown={(event) => {
                    let nextIndex = index;

                    if (event.key === "ArrowRight") {
                      nextIndex = Math.min(index + 1, highlights.length - 1);
                    } else if (event.key === "ArrowLeft") {
                      nextIndex = Math.max(index - 1, 0);
                    } else if (event.key === "Home") {
                      nextIndex = 0;
                    } else if (event.key === "End") {
                      nextIndex = highlights.length - 1;
                    } else {
                      return;
                    }

                    event.preventDefault();
                    swiper?.slideTo(nextIndex);
                    document.getElementById(`${highlights[nextIndex].id}-tab`)?.focus();
                  }}
                  className={`shrink-0 rounded-full border px-5 py-3 text-xs font-bold transition sm:text-sm ${
                    isActive
                      ? "border-[#071F3A] bg-[#071F3A] text-white shadow-md"
                      : "border-[#D4C9B8] bg-white text-[#5A5248] hover:border-[#8B2C2C] hover:text-[#8B2C2C]"
                  }`}
                >
                  <span className="mr-2 opacity-60">{String(index + 1).padStart(2, "0")}</span>
                  {highlight.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <Swiper
        autoHeight
        nested
        speed={650}
        slidesPerView={1}
        keyboard={{ enabled: true }}
        modules={[A11y, Keyboard]}
        onSwiper={setSwiper}
        onSlideChange={(instance) => setActiveIndex(instance.activeIndex)}
        className="w-full"
      >
        {highlights.map((highlight, index) => (
          <SwiperSlide
            key={highlight.id}
            id={`${highlight.id}-panel`}
            role="tabpanel"
            aria-labelledby={`${highlight.id}-tab`}
            aria-hidden={index !== activeIndex}
            inert={index !== activeIndex}
          >
            {highlight.content}
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="border-t border-[#D9D2C7] bg-[#FAF8F4] px-5 py-6 md:px-10 lg:px-16">
        <div className="mx-auto flex max-w-350 items-center justify-between gap-5">
          <div className="min-w-0">
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#8B2C2C]">
              Currently viewing
            </p>
            <p className="mt-1 truncate font-display text-sm font-bold text-[#071F3A] sm:text-base">
              {activeHighlight.title}
            </p>
          </div>
          <div className="flex shrink-0 gap-2">
            <button
              type="button"
              aria-label="Show previous campus highlight"
              disabled={activeIndex === 0}
              onClick={() => swiper?.slidePrev()}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C8BFB2] text-[#071F3A] transition hover:border-[#8B2C2C] hover:bg-[#8B2C2C] hover:text-white disabled:cursor-not-allowed disabled:opacity-35"
            >
              <ChevronLeft size={19} aria-hidden />
            </button>
            <button
              type="button"
              aria-label="Show next campus highlight"
              disabled={activeIndex === highlights.length - 1}
              onClick={() => swiper?.slideNext()}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C8BFB2] text-[#071F3A] transition hover:border-[#8B2C2C] hover:bg-[#8B2C2C] hover:text-white disabled:cursor-not-allowed disabled:opacity-35"
            >
              <ChevronRight size={19} aria-hidden />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
