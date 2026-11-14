"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Award,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  MapPin,
} from "lucide-react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const quizImages = [
  "/quiz-competition/quiz1.webp",
  "/quiz-competition/quiz2.webp",
  "/quiz-competition/quiz3.webp",
  "/quiz-competition/quiz4.webp",
  "/quiz-competition/quiz5.webp",
  "/quiz-competition/quiz6.webp",
  "/quiz-competition/quiz7.webp",
  "/quiz-competition/quiz8.webp",
  "/quiz-competition/quiz9.webp",
];

const teamMembers = [
  { name: "Grasima Mishra", course: "B.Sc. First Year" },
  { name: "Tanvi", course: "B.Sc. First Year" },
  { name: "Amrendra Pratap Singh", course: "B.Sc. (Hons.) Agriculture" },
  { name: "Shani Kumar", course: "B.Sc. (Hons.) Agriculture" },
  { name: "Nikhil", course: "B.A. LL.B. First Year" },
];

export default function FilariaQuizSection() {
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
      aria-labelledby="filaria-quiz-heading"
      className="relative overflow-hidden bg-[#F4F1EC] px-5 py-16 text-[#0A0905] md:px-10 md:py-22 lg:px-16"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-24 h-80 w-80 rounded-full bg-[#8B2C2C]/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-[#05316E]/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-350">
        <div className="grid items-end gap-8 border-b border-[#D4C9B8] pb-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-14">
          <div className="max-w-5xl">
            <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.28em] text-[#8B2C2C]">
              <span className="h-px w-8 bg-[#8B2C2C]" />
              Student Achievement &amp; Public Health Awareness
            </p>
            <h2
              id="filaria-quiz-heading"
              className="mt-5 font-display text-3xl font-black leading-[1.12] tracking-tight text-[#071F3A] sm:text-4xl md:text-5xl lg:text-6xl"
            >
              TYS University Students Secure Third Position in “Kaun Banega
              Filaria Champion” Quiz Competition
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-7 text-[#5A5248] sm:text-lg sm:leading-8">
              A proud achievement in public health awareness, knowledge and
              teamwork.
            </p>
          </div>

          <div className="flex flex-col gap-3 text-sm text-[#5A5248] sm:flex-row sm:gap-6 lg:flex-col lg:items-end">
            <span className="inline-flex items-center gap-2">
              <MapPin size={17} className="text-[#8B2C2C]" aria-hidden />
              Fatehpur, Uttar Pradesh
            </span>
            <time
              dateTime="2026-11-13"
              className="inline-flex items-center gap-2"
            >
              <CalendarDays size={17} className="text-[#8B2C2C]" aria-hidden />
              13 November 2026
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
                prevEl: ".filaria-quiz-prev",
                nextEl: ".filaria-quiz-next",
              }}
              modules={[Autoplay, Navigation, Pagination]}
              className="overflow-hidden rounded-3xl bg-[#071F3A] shadow-[0_24px_70px_rgba(7,31,58,0.18)] [--swiper-pagination-bullet-inactive-color:#ffffff] [--swiper-pagination-bullet-inactive-opacity:0.55] [--swiper-pagination-color:#F6C344]"
            >
              {quizImages.map((src, index) => (
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
                      alt={`TYS University students at the Kaun Banega Filaria Champion quiz competition, photo ${index + 1}`}
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
                aria-label="Show previous Filaria quiz competition photo"
                className="filaria-quiz-prev flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-[#071F3A]/75 text-white backdrop-blur-md transition hover:border-[#F6C344] hover:bg-[#F6C344] hover:text-[#071F3A] active:scale-95"
              >
                <ChevronLeft size={21} aria-hidden />
              </button>
              <button
                type="button"
                aria-label="Show next Filaria quiz competition photo"
                className="filaria-quiz-next flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-[#071F3A]/75 text-white backdrop-blur-md transition hover:border-[#F6C344] hover:bg-[#F6C344] hover:text-[#071F3A] active:scale-95"
              >
                <ChevronRight size={21} aria-hidden />
              </button>
            </div>
          </div>

          <article className="relative mt-8 overflow-hidden rounded-3xl bg-white p-6 text-[#4A4438] shadow-[0_24px_70px_rgba(14,13,15,0.10)] sm:p-8 lg:p-12">
            <div
              aria-hidden
              className="absolute right-0 top-0 h-40 w-40 rounded-bl-full bg-[#D4A96A]/18"
            />

            <div className="relative grid gap-7 lg:grid-cols-[minmax(0,1fr)_220px] lg:items-center lg:gap-12">
              <div className="max-w-5xl">
                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#8B2C2C]">
                  Kaun Banega Filaria Champion
                </p>
                <p className="mt-4 font-display text-xl font-semibold leading-relaxed text-[#0A0905] sm:text-2xl sm:leading-relaxed">
                  Thakur Yugraj Singh University proudly celebrates its
                  five-member student team, which secured Third Prize in the
                  Filaria Quiz Competition organised as part of the Filaria
                  Awareness and Elimination Campaign.
                </p>
              </div>

              <div className="hidden aspect-square items-center justify-center rounded-full border border-[#D4A96A]/45 bg-[#F4F1EC] shadow-lg lg:flex">
                <div className="text-center">
                  <Award size={32} className="mx-auto text-[#8B2C2C]" aria-hidden />
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
              The initiative was conducted in alignment with the public health
              awareness programme of the Directorate of Malaria, Uttar Pradesh,
              aimed at promoting awareness about Lymphatic Filariasis, commonly
              known as Elephantiasis, its symptoms, prevention, treatment and
              elimination.
            </p>

            <div className="relative mt-8 grid gap-9 border-t border-[#D4C9B8] pt-8 text-[15px] leading-7 sm:text-base sm:leading-8 lg:grid-cols-2 lg:gap-14">
              <div>
                <h3 className="font-display text-xl font-bold text-[#071F3A]">
                  Five-Member Team Brings Pride to TYS University
                </h3>
                <p className="mt-5">
                  Representing TYS University with enthusiasm, confidence and
                  excellent teamwork, the five-member student team delivered an
                  impressive performance in the group-based quiz competition and
                  secured the Third Prize among participating teams.
                </p>

                <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.24em] text-[#8B2C2C]">
                  The Achieving Team Members
                </p>
                <div className="mt-4 space-y-3">
                  {teamMembers.map((member, index) => (
                    <div
                      key={member.name}
                      className="flex items-center gap-4 rounded-2xl bg-[#F4F1EC] px-4 py-4 sm:px-5"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#071F3A] text-xs font-bold text-[#F6C344]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <p className="font-display font-bold text-[#0A0905]">
                          {member.name}
                        </p>
                        <p className="mt-0.5 text-xs text-[#6A6258] sm:text-sm">
                          {member.course}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="mt-5">
                  The students were felicitated with a trophy and certificates
                  in recognition of their outstanding performance and
                  contribution.
                </p>
              </div>

              <div className="lg:border-l lg:border-[#D4C9B8] lg:pl-14">
                <h3 className="font-display text-xl font-bold text-[#071F3A]">
                  In the Presence of University Leadership
                </h3>
                <p className="mt-5">
                  The achievement was celebrated in the esteemed presence of
                  Hon&apos;ble Chancellor Shri Abhay Pratap Singh Ji and Hon&apos;ble
                  Vice-Chancellor Prof. (Dr.) R. S. Singh, whose encouragement
                  and support continue to inspire students towards academic
                  excellence, active participation and meaningful social
                  engagement.
                </p>

                <h3 className="mt-8 font-display text-xl font-bold text-[#071F3A]">
                  Promoting Awareness for a Filaria-Free Society
                </h3>
                <div className="mt-5 space-y-5">
                  <p>
                    The competition served as an important platform for students
                    to enhance their understanding of Filaria, including its
                    transmission, symptoms, preventive measures and the
                    importance of mass drug administration (MDA).
                  </p>
                  <p>
                    The broader awareness campaign encourages educational
                    institutions and students to actively participate in
                    spreading accurate health information, motivating
                    communities to adopt preventive measures and supporting the
                    national mission of Filaria elimination.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative mt-9 rounded-2xl bg-[#071F3A] px-6 py-7 text-white sm:px-8 sm:py-8 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(260px,0.45fr)] lg:items-center lg:gap-12">
              <div>
                <p className="font-display text-xl font-bold leading-snug sm:text-2xl">
                  Beyond Classrooms, Towards Social Impact
                </p>
                <p className="mt-3 text-sm leading-7 text-white/70 sm:text-base">
                  This achievement reflects TYS University&apos;s commitment to
                  holistic education, experiential learning, public health
                  awareness and social responsibility. True education goes
                  beyond academic knowledge and empowers students to become
                  informed, responsible and proactive contributors to society.
                </p>
              </div>
              <p className="mt-6 font-display text-lg font-bold leading-relaxed text-[#F6C344] lg:mt-0 lg:text-right">
                Empowering Minds, Inspiring Excellence, Building a Healthier
                Tomorrow!
              </p>
            </div>

            <p className="relative mt-8 text-center text-[15px] leading-7 text-[#5A5248] sm:text-base sm:leading-8">
              TYS University congratulates all five team members on this proud
              achievement and wishes them continued success in their future
              endeavours.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
