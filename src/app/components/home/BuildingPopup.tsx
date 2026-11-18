"use client";

import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import AdmissionForm from "@/app/components/home/AdmissionForm";

export default function BuildingPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 767px)");
    const updateMobileState = () => setIsMobile(mobileQuery.matches);
    const openTimer = window.setTimeout(() => setIsOpen(true), 500);

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    updateMobileState();
    mobileQuery.addEventListener("change", updateMobileState);
    window.addEventListener("keydown", handleEscape);

    return () => {
      window.clearTimeout(openTimer);
      mobileQuery.removeEventListener("change", updateMobileState);
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-10000 flex items-center justify-center bg-black/70 p-2 backdrop-blur-sm sm:px-4 sm:py-6"
      onClick={() => setIsOpen(false)}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="admission-popup-title"
        className="relative max-h-[calc(100dvh-1rem)] w-full max-w-6xl overflow-y-auto rounded-2xl bg-white shadow-[0_30px_90px_rgba(0,0,0,0.35)] sm:max-h-[calc(100dvh-3rem)] sm:rounded-3xl"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={() => setIsOpen(false)}
          className="absolute right-2.5 top-2.5 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/65 text-white shadow-lg backdrop-blur-sm transition hover:bg-black/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:right-3 sm:top-3 sm:h-10 sm:w-10"
          aria-label="Close popup"
        >
          <X size={20} strokeWidth={2.5} aria-hidden />
        </button>

        <div className="grid lg:grid-cols-[minmax(0,1.08fr)_minmax(390px,0.92fr)]">
          <div className="relative flex items-center justify-center overflow-hidden bg-[#071F3A] px-3 pb-4 pt-14 sm:min-h-80 sm:p-6 sm:pt-16 lg:min-h-full lg:p-8">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(246,195,68,0.2),transparent_44%),radial-gradient(circle_at_bottom_right,rgba(139,44,44,0.28),transparent_48%)]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-[#F6C344]/50 to-transparent lg:hidden"
            />
            <video
              className="relative z-10 h-auto max-h-[43dvh] w-auto max-w-full rounded-xl bg-black shadow-[0_18px_45px_rgba(0,0,0,0.35)] sm:max-h-[48dvh] lg:h-full lg:max-h-[calc(100dvh-8rem)] lg:w-full lg:rounded-2xl lg:object-contain"
              controls
              autoPlay={!isMobile}
              muted={!isMobile}
              loop
              playsInline
              preload="metadata"
              aria-label="TYS University campus and admissions video"
            >
              <source src="/video_popup.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <AdmissionForm
            eyebrow="ADMISSION OPEN"
            eyebrowClassName="inline-block rounded-full bg-accent px-4 py-1 text-xs font-bold tracking-[0.18em] text-foreground shadow-sm sm:text-sm"
            titleId="admission-popup-title"
            locationLabel="FATEHPUR, UTTAR PRADESH"
            className="w-full border-t border-black/8 bg-white p-4 shadow-none sm:p-8 lg:flex lg:flex-col lg:justify-center lg:border-l lg:border-t-0 lg:p-9"
          />
        </div>
      </div>
    </div>
  );
}
