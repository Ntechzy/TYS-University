"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Autoplay, EffectCoverflow, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

// Replace each src with your Cloudinary image URL.
const galleryItems = [
  { src: "https://res.cloudinary.com/dhlqc0ymy/image/upload/v1781325088/campus_dzb0ej.png", title: "Campus Life" },
  { src: "https://res.cloudinary.com/dhlqc0ymy/image/upload/v1781325086/smart_classrooms_xcf2ss.png", title: "Smart Classrooms" },
  { src: "https://res.cloudinary.com/dhlqc0ymy/image/upload/v1781325082/computer_labs_lmpb4g.png", title: "Computer Labs" },
  { src: "https://res.cloudinary.com/dhlqc0ymy/image/upload/v1781325081/conference_rooms_pzhs3s.png", title: "Conference Rooms" },
  { src: "https://res.cloudinary.com/dhlqc0ymy/image/upload/v1781325085/canteen_oju8zx.png", title: "Food Court" },
  { src: "https://res.cloudinary.com/dhlqc0ymy/image/upload/v1781325084/Hostel_cqcx90.png", title: "Hostel" },
  { src: "https://res.cloudinary.com/dhlqc0ymy/image/upload/v1781325085/mess_he5p5w.png", title: "Hostel Mess" },
  { src: "https://res.cloudinary.com/dhlqc0ymy/image/upload/v1781325087/playground_ymzy19.png", title: "Playground" },
  { src: "https://res.cloudinary.com/dhlqc0ymy/image/upload/v1781325090/parking_bstq4u.png", title: "Parking Facility" },
];

export default function GallerySection() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-[#F4F1EC] via-white to-[#E8F6FD] px-4 py-20 font-sans md:px-8 md:py-28">
      <div className="pointer-events-none absolute -left-44 top-20 h-96 w-96 rounded-full bg-[color:var(--primary)]/8 blur-[110px]" />
      <div className="pointer-events-none absolute -right-44 bottom-0 h-105 w-105 rounded-full bg-[color:var(--secondary)]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="relative z-10 mx-auto mb-14 max-w-3xl text-center md:mb-18">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[color:var(--primary)]/15 bg-white/75 px-5 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[color:var(--primary)] shadow-sm backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-[color:var(--accent)]" />
            Campus Gallery
          </span>

          <h2 className="font-display text-4xl font-black leading-[1.08] tracking-tight text-[color:var(--foreground)] md:text-6xl">
            Moments that shape our
            <span className="block text-[color:var(--primary)]">
              university experience
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[color:var(--foreground)]/65 md:text-lg">
            Discover the spaces, people, and experiences that make life at
            Thakur Yugraj Singh University memorable.
          </p>
        </div>

        <div className="group/gallery relative px-1 sm:px-8">
          <Swiper
            effect="coverflow"
            grabCursor
            centeredSlides
            slidesPerView="auto"
            loop
            speed={800}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            coverflowEffect={{
              rotate: 4,
              stretch: 0,
              depth: 110,
              modifier: 1.8,
              slideShadows: false,
            }}
            breakpoints={{
              320: {
                coverflowEffect: { depth: 55, modifier: 1.15 },
              },
              768: {
                coverflowEffect: { depth: 110, modifier: 1.8 },
              },
            }}
            navigation={{
              nextEl: ".campus-gallery-next",
              prevEl: ".campus-gallery-prev",
            }}
            modules={[EffectCoverflow, Navigation, Autoplay]}
            className="w-full !overflow-visible !pb-24"
          >
            {galleryItems.map((item, index) => (
              <SwiperSlide
                key={`${item.title}-${index}`}
                className="!w-[280px] sm:!w-[340px] md:!w-[410px]"
              >
                <article className="group/card relative aspect-[4/5] overflow-hidden rounded-[2rem] border-[5px] border-white bg-[color:var(--soft-background)] shadow-[0_24px_60px_rgba(14,13,15,0.18)] md:rounded-[2.5rem]">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 280px, (max-width: 768px) 340px, 410px"
                    className="object-cover transition-transform duration-1000 ease-out group-hover/card:scale-110"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-[#0E0D0F]/90 via-[#0E0D0F]/15 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-7 md:p-9">
                    <span className="mb-3 block text-[10px] font-bold uppercase tracking-[0.22em] text-[color:var(--accent)]">
                      TYSU Gallery
                    </span>
                    <h3 className="font-display text-xl font-bold leading-tight text-white md:text-2xl">
                      {item.title}
                    </h3>
                    <div className="mt-4 h-1 w-10 origin-left rounded-full bg-[color:var(--accent)] transition-transform duration-500 group-hover/card:scale-x-150" />
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="absolute inset-x-0 bottom-2 z-20 flex items-center justify-center gap-5">
            <button
              type="button"
              aria-label="Previous gallery image"
              className="campus-gallery-prev flex h-13 w-13 items-center justify-center rounded-full border border-[color:var(--primary)]/10 bg-white text-[color:var(--primary)] shadow-lg transition-all duration-300 hover:-translate-x-1 hover:bg-[color:var(--primary)] hover:text-white active:scale-95 md:h-14 md:w-14"
            >
              <ChevronLeft size={26} strokeWidth={2.25} />
            </button>
            <span className="h-px w-12 bg-[color:var(--primary)]/25" />
            <button
              type="button"
              aria-label="Next gallery image"
              className="campus-gallery-next flex h-13 w-13 items-center justify-center rounded-full border border-[color:var(--secondary)]/10 bg-white text-[color:var(--secondary)] shadow-lg transition-all duration-300 hover:translate-x-1 hover:bg-[color:var(--secondary)] hover:text-white active:scale-95 md:h-14 md:w-14"
            >
              <ChevronRight size={26} strokeWidth={2.25} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
