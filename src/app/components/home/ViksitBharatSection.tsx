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

const eventPhotos = [
  {
    src: "/vikshit-bharat/vb1.webp",
    alt: "Dignitaries at the Viksit Bharat Youth Parliament 2026 at TYS University",
  },
  {
    src: "/vikshit-bharat/vb2.webp",
    alt: "Memento presentation during the Viksit Bharat Youth Parliament at TYS University",
  },
  {
    src: "/vikshit-bharat/vb3.webp",
    alt: "Winner felicitated at the Viksit Bharat Youth Parliament district-level competition",
  },
];

const winners = [
  { position: "First Position", name: "Kamal Kumar" },
  { position: "Second Position", name: "Harsh Mishra" },
  { position: "Third Position", name: "Divyanshi Mishra" },
];

export default function ViksitBharatSection() {
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
      aria-labelledby="viksit-bharat-heading"
      className="relative overflow-hidden bg-[#F4F1EC] px-5 py-16 text-[#0A0905] md:px-10 md:py-22 lg:px-16"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-28 h-80 w-80 rounded-full bg-[#8B2C2C]/10 blur-3xl"
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
              Youth Leadership &amp; Social Responsibility
            </p>
            <h2
              id="viksit-bharat-heading"
              className="mt-5 font-display text-3xl font-black leading-[1.12] tracking-tight text-[#071F3A] sm:text-4xl md:text-5xl lg:text-6xl"
            >
              Viksit Bharat Youth Parliament 2026 Successfully Organised at
              TYS University, Fatehpur
            </h2>
            <p className="mt-5 max-w-3xl text-base font-semibold leading-7 text-[#8B2C2C] sm:text-lg sm:leading-8">
              Theme: Nasha Mukt Yuva for Viksit Bharat
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
              nested
              loop
              speed={850}
              slidesPerView={1}
              spaceBetween={20}
              grabCursor
              autoplay={
                allowAutoplay
                  ? {
                      delay: 4000,
                      disableOnInteraction: false,
                      pauseOnMouseEnter: true,
                    }
                  : false
              }
              pagination={{ clickable: true }}
              navigation={{
                prevEl: ".viksit-bharat-prev",
                nextEl: ".viksit-bharat-next",
              }}
              modules={[Autoplay, Navigation, Pagination]}
              className="overflow-hidden rounded-3xl bg-[#071F3A] shadow-[0_24px_70px_rgba(7,31,58,0.18)] [--swiper-pagination-bullet-inactive-color:#ffffff] [--swiper-pagination-bullet-inactive-opacity:0.55] [--swiper-pagination-color:#F6C344]"
            >
              {eventPhotos.map((photo) => (
                <SwiperSlide key={photo.src}>
                  <figure className="relative aspect-3/2 overflow-hidden bg-[#071F3A]">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 1400px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#071F3A]/45 via-transparent to-black/5" />
                  </figure>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="absolute right-4 top-4 z-20 flex gap-2 sm:right-6 sm:top-6">
              <button
                type="button"
                aria-label="Show previous Viksit Bharat Youth Parliament photo"
                className="viksit-bharat-prev flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-[#071F3A]/75 text-white backdrop-blur-md transition hover:border-[#F6C344] hover:bg-[#F6C344] hover:text-[#071F3A] active:scale-95"
              >
                <ChevronLeft size={21} aria-hidden />
              </button>
              <button
                type="button"
                aria-label="Show next Viksit Bharat Youth Parliament photo"
                className="viksit-bharat-next flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-[#071F3A]/75 text-white backdrop-blur-md transition hover:border-[#F6C344] hover:bg-[#F6C344] hover:text-[#071F3A] active:scale-95"
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

            <div className="relative max-w-5xl">
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#8B2C2C]">
                District-Level Competition
              </p>
              <p className="mt-4 font-display text-xl font-semibold leading-relaxed text-[#0A0905] sm:text-2xl sm:leading-relaxed">
                Thakur Yugraj Singh University, Fatehpur, successfully hosted
                the Viksit Bharat Youth Parliament 2026 in association with MY
                Bharat, Fatehpur, under the aegis of the Ministry of Youth
                Affairs and Sports, Government of India.
              </p>
              <p className="mt-5 text-[15px] leading-7 sm:text-base sm:leading-8">
                Organised around the theme “Nasha Mukt Yuva for Viksit Bharat,”
                the programme brought together enthusiastic young participants
                from across Fatehpur district to express their ideas, showcase
                their leadership abilities and spread awareness about building
                a drug-free India.
              </p>
            </div>

            <div className="relative mt-8 grid gap-9 border-t border-[#D4C9B8] pt-8 text-[15px] leading-7 sm:text-base sm:leading-8 lg:grid-cols-2 lg:gap-14">
              <div>
                <h3 className="font-display text-xl font-bold text-[#071F3A]">
                  Inauguration and Distinguished Dignitaries
                </h3>
                <div className="mt-5 space-y-5">
                  <p>
                    The programme commenced with a traditional lamp-lighting
                    ceremony in the presence of the Hon&apos;ble Vice-Chancellor,
                    Prof. (Dr.) R. S. Singh, and District Tuberculosis Officer,
                    Dr. A. K. Gupta, along with other distinguished guests.
                  </p>
                  <p>
                    The dignitaries encouraged young people to stay away from
                    substance abuse and actively contribute towards a healthier,
                    stronger and developed nation.
                  </p>
                </div>

                <h3 className="mt-8 font-display text-xl font-bold text-[#071F3A]">
                  Youth Participation and Oath-Taking Ceremony
                </h3>
                <div className="mt-5 space-y-5">
                  <p>
                    Participants delivered impactful three-minute speeches
                    highlighting the harmful effects of substance abuse, the
                    importance of social awareness, and the role of youth in
                    building a drug-free society.
                  </p>
                  <p>
                    A special highlight was the collective oath-taking ceremony,
                    led by Dr. A. K. Gupta, in which dignitaries, participants
                    and attendees pledged to stay away from drugs and work
                    together towards making India a Nasha Mukt Bharat.
                  </p>
                </div>
              </div>

              <div className="lg:border-l lg:border-[#D4C9B8] lg:pl-14">
                <h3 className="font-display text-xl font-bold text-[#071F3A]">
                  Winners of the Competition
                </h3>
                <p className="mt-5">
                  Following evaluation by an expert jury comprising academicians
                  and professionals from education and healthcare, the following
                  participants secured the top positions:
                </p>

                <div className="mt-6 space-y-3">
                  {winners.map((winner, index) => (
                    <div
                      key={winner.position}
                      className="flex items-center gap-4 rounded-2xl bg-[#F4F1EC] px-4 py-4 sm:px-5"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#071F3A] text-[#F6C344]">
                        <Award size={19} aria-hidden />
                      </span>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#8B2C2C]">
                          {winner.position}
                        </p>
                        <p className="mt-0.5 font-display font-bold text-[#0A0905]">
                          {winner.name}
                        </p>
                      </div>
                      <span className="ml-auto font-display text-2xl font-black text-[#D4A96A]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="mt-5">
                  The winners were felicitated with certificates and mementoes
                  in recognition of their achievements.
                </p>

                <h3 className="mt-8 font-display text-xl font-bold text-[#071F3A]">
                  Fatehpur Youth to Represent the District
                </h3>
                <p className="mt-5">
                  The selected district-level finalist will represent Fatehpur
                  at the Uttar Pradesh Legislative Assembly on 26 November 2026,
                  providing an opportunity to showcase their ideas and represent
                  the district at the state level.
                </p>
              </div>
            </div>

            <div className="relative mt-9 rounded-2xl bg-[#071F3A] px-6 py-7 text-white sm:px-8 sm:py-8">
              <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.45fr)] lg:items-center lg:gap-12">
                <div>
                  <p className="font-display text-xl font-bold leading-snug sm:text-2xl">
                    Valedictory Session and Address by Hon&apos;ble Chancellor
                  </p>
                  <p className="mt-3 text-sm leading-7 text-white/70 sm:text-base">
                    The concluding session was graced by Hon&apos;ble Chancellor of
                    TYS University and District Panchayat Chairperson, Shri Abhay
                    Pratap Singh Ji, along with other distinguished dignitaries.
                    He motivated the youth to embrace responsibility, promote a
                    drug-free society and actively participate in nation-building.
                  </p>
                  <p className="mt-3 text-sm leading-7 text-white/70 sm:text-base">
                    District Youth Officer Shri Prateek Sahu extended his
                    gratitude to all dignitaries, jury members, participants,
                    university management, organisers and volunteers for their
                    valuable contributions.
                  </p>
                </div>

                <div className="border-t border-white/15 pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#F6C344]">
                    TYS University
                  </p>
                  <p className="mt-3 font-display text-lg font-bold leading-relaxed">
                    Empowering Youth, Inspiring Leadership, Building a Viksit
                    Bharat!
                  </p>
                </div>
              </div>
            </div>

            <div className="relative mt-8 space-y-4 text-[15px] leading-7 sm:text-base sm:leading-8">
              <p>
                The successful organisation of Viksit Bharat Youth Parliament
                2026 reflects TYS University&apos;s commitment to youth empowerment,
                leadership development and social responsibility.
              </p>
              <p>
                The university congratulates all the winners and participants
                and extends its best wishes to the selected finalist for the
                upcoming state-level competition.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
