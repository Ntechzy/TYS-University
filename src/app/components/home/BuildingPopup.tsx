"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import AdmissionForm from "@/app/components/home/AdmissionForm";

export default function BuildingPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const openTimer = window.setTimeout(() => setIsOpen(true), 500);

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.clearTimeout(openTimer);
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-10000 flex items-center justify-center bg-black/70 px-4 py-6 backdrop-blur-sm"
      onClick={() => setIsOpen(false)}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="TYS University admission form"
        className="relative w-full max-w-4xl overflow-y-auto rounded-3xl shadow-[0_30px_90px_rgba(0,0,0,0.35)]"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white transition hover:bg-black/80"
          aria-label="Close popup"
        >
          <X size={20} strokeWidth={2.5} />
        </button>

        <AdmissionForm
          eyebrow="ADMISSION OPEN"
          eyebrowClassName="inline-block rounded-full bg-accent px-4 py-1 text-xs font-bold tracking-[0.18em] text-foreground shadow-sm sm:text-sm"
          locationLabel="FATEHPUR, UTTAR PRADESH"
          className="w-full rounded-3xl border border-black/10 bg-white p-5 shadow-none sm:p-8"
        />
      </div>
    </div>
  );
}
