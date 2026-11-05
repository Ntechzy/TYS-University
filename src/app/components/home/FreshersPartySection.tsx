"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { CalendarDays, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Replace these paths with the five official event photographs when available.
const freshersPartyPhotos = [
  {
    src: "/freshers26/freshers26-1.jpeg",
    alt: "Students at Thakur Yugraj Singh University",
  },
  {
    src: "/freshers26/freshers26-2.jpeg",
    alt: "Thakur Yugraj Singh University campus",
  },
  {
    src: "/freshers26/freshers26-3.jpeg",
    alt: "Campus life at Thakur Yugraj Singh University",
  },
  {
    src: "/freshers26/freshers26-4.jpeg",
    alt: "Students learning at Thakur Yugraj Singh University",
  },
];

const storyParagraphs = [
  "Thakur Yugraj Singh University (TYS University), Fatehpur, hosted a spectacular Fresher’s Party 2026, marking a memorable beginning for the newly admitted students as they embarked on an exciting journey of academic excellence, personal growth and professional development.",
  "The grand celebration was graced by the esteemed presence of Mr. Raj Thakur, Managing Director, TYS University, and Dr. R. S. Singh, Hon’ble Vice-Chancellor, TYS University. Their presence added prestige to the occasion and inspired students to pursue their aspirations with confidence, commitment and determination.",
  "The event witnessed the enthusiastic participation of all Heads of Departments (HODs), faculty members, university officials, staff members and students representing various academic disciplines, including the Faculty of Engineering & Technology, Faculty of Management, Faculty of Science and Faculty of Agriculture.",
  "The celebration transformed the university campus into a vibrant hub of creativity, cultural expression and youthful energy. Students captivated the audience through spectacular dance performances, musical presentations, engaging activities and entertaining cultural performances. The occasion provided an excellent platform for freshers to showcase their talents, express their creativity and build meaningful connections with their peers and mentors.",
  "Addressing the gathering, the university leadership extended a warm welcome to the new students and encouraged them to make the most of their university experience. They emphasised the importance of academic excellence, innovation, discipline, leadership, practical learning and active participation in extracurricular activities. Students were motivated to explore new opportunities, develop professional competencies and emerge as responsible individuals capable of contributing positively to society.",
  "The presence and support of all HODs and faculty members reflected the university’s commitment to creating an inclusive, supportive and student-centric learning environment.",
  "The celebration concluded on a high note, leaving students with cherished memories, strengthened friendships and renewed enthusiasm for the journey ahead.",
];

export default function FreshersPartySection() {
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
      aria-labelledby="freshers-party-heading"
      className="relative overflow-hidden bg-[#071F3A] px-5 py-16 text-white md:px-10 md:py-22 lg:px-16"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-24 h-80 w-80 rounded-full bg-[#8B2C2C]/30 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-[#D4A96A]/12 blur-3xl"
      />

      <div className="relative mx-auto max-w-350">
        <div className="grid items-end gap-8 border-b border-white/15 pb-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-14">
          <div className="max-w-5xl">
            <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.28em] text-[#F6C344]">
              <span className="h-px w-8 bg-[#F6C344]" />
              Campus News
            </p>
            <h2
              id="freshers-party-heading"
              className="mt-5 font-display text-3xl font-black leading-[1.12] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl"
            >
              TYS University Celebrates Fresher’s Party 2026 with Grandeur,
              Enthusiasm and New Beginnings
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-7 text-white/68 sm:text-lg sm:leading-8">
              A celebration of talent, togetherness and the spirit of new
              beginnings.
            </p>
          </div>

          <div className="flex flex-col gap-3 text-sm text-white/72 sm:flex-row sm:gap-6 lg:flex-col lg:items-end">
            <span className="inline-flex items-center gap-2">
              <MapPin size={17} className="text-[#F6C344]" aria-hidden />
              Fatehpur, Uttar Pradesh
            </span>
            <time
              dateTime="2026-10-31"
              className="inline-flex items-center gap-2"
            >
              <CalendarDays size={17} className="text-[#F6C344]" aria-hidden />
              31 October 2026
            </time>
          </div>
        </div>

        <div className="mt-10">
          <div className="relative min-w-0">
            <Swiper
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
                prevEl: ".freshers-party-prev",
                nextEl: ".freshers-party-next",
              }}
              modules={[Autoplay, Navigation, Pagination]}
              className="overflow-hidden rounded-3xl [--swiper-pagination-bullet-inactive-color:#ffffff] [--swiper-pagination-bullet-inactive-opacity:0.55] [--swiper-pagination-color:#F6C344]"
            >
              {freshersPartyPhotos.map((photo, index) => (
                <SwiperSlide key={photo.src}>
                  <figure className="relative aspect-video overflow-hidden bg-[#0D3157]">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 1400px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#071F3A]/80 via-transparent to-black/10" />
                    
                  </figure>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="absolute right-4 top-4 z-20 flex gap-2 sm:right-6 sm:top-6">
              <button
                type="button"
                aria-label="Show previous Freshers’ Party photo"
                className="freshers-party-prev flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-[#071F3A]/70 text-white backdrop-blur-md transition hover:border-[#F6C344] hover:bg-[#F6C344] hover:text-[#071F3A] active:scale-95"
              >
                <ChevronLeft size={21} aria-hidden />
              </button>
              <button
                type="button"
                aria-label="Show next Freshers’ Party photo"
                className="freshers-party-next flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-[#071F3A]/70 text-white backdrop-blur-md transition hover:border-[#F6C344] hover:bg-[#F6C344] hover:text-[#071F3A] active:scale-95"
              >
                <ChevronRight size={21} aria-hidden />
              </button>
            </div>
          </div>

          <article className="relative mt-8 overflow-hidden rounded-3xl bg-[#F4F1EC] p-6 text-[#4A4438] shadow-[0_24px_70px_rgba(0,0,0,0.18)] sm:p-8 lg:p-12">
            <div
              aria-hidden
              className="absolute right-0 top-0 h-40 w-40 rounded-bl-full bg-[#D4A96A]/16"
            />

            <div className="relative max-w-5xl">
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#8B2C2C]">
                Celebrating new beginnings
              </p>
              <p className="mt-4 font-display text-xl font-semibold leading-relaxed text-[#0A0905] sm:text-2xl sm:leading-relaxed">
                {storyParagraphs[0]}
              </p>
            </div>

            <div className="relative mt-8 grid gap-8 border-t border-[#D4C9B8] pt-8 text-[15px] leading-7 sm:text-base sm:leading-8 lg:grid-cols-2 lg:gap-14">
              <div>
                <h3 className="font-display text-xl font-bold text-[#071F3A]">
                  A celebration of talent and togetherness
                </h3>
                <div className="mt-5 space-y-5">
                  {storyParagraphs.slice(1, 4).map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <div className="lg:border-l lg:border-[#D4C9B8] lg:pl-14">
                <h3 className="font-display text-xl font-bold text-[#071F3A]">
                  Inspiring the journey ahead
                </h3>
                <div className="mt-5 space-y-5">
                  {storyParagraphs.slice(4).map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative mt-9 rounded-2xl bg-[#071F3A] px-6 py-7 text-white sm:px-8 sm:py-8 lg:flex lg:items-center lg:justify-between lg:gap-10">
              <div>
                <p className="font-display text-xl font-bold leading-snug sm:text-2xl">
                  A New Chapter. A New Vision. Endless Possibilities.
                </p>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-white/68 sm:text-base">
                  Through such vibrant initiatives, TYS University continues to
                  foster a culture of excellence, innovation, leadership and
                  holistic student development.
                </p>
              </div>
              <p className="mt-5 shrink-0 font-display text-base font-bold text-[#F6C344] lg:mt-0 lg:text-right lg:text-lg">
                Welcome to the TYS Family!
              </p>
            </div>
          </article>
        </div>

        <p className="mt-12 text-center font-display text-sm font-semibold tracking-wide text-white/55 sm:text-base">
          Thakur Yugraj Singh University, Fatehpur — Empowering Minds, Shaping
          Futures.
        </p>
      </div>
    </section>
  );
}
