"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { X } from "lucide-react";

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
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/70 px-4 py-6 backdrop-blur-sm"
      onClick={() => setIsOpen(false)}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Campus building announcement"
        className="relative w-full max-w-[min(92vw,56.67vh)] overflow-hidden rounded-3xl bg-white shadow-[0_30px_90px_rgba(0,0,0,0.35)]"
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

        <div className="w-full">
          <Image
            src="/building/popupimage.png"
            alt="TYS University popup"
            width={1024}
            height={1536}
            priority
            className="h-auto max-h-[85vh] w-full object-contain"
            sizes="(max-width: 640px) 92vw, 38vw"
          />
        </div>
      </div>
    </div>
  );
}
