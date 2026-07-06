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
        className="relative w-full max-w-4xl overflow-hidden rounded-3xl bg-white shadow-[0_30px_90px_rgba(0,0,0,0.35)]"
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

        <div className="relative aspect-[4/5] w-full sm:hidden">
          <Image
            src="/building/popup-mobile.png"
            alt="TYS University popup"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>

        <div className="relative hidden aspect-[16/10] w-full sm:block">
          <Image
            src="/building/popup-desktop.png"
            alt="TYS University popup"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 90vw, 900px"
          />
        </div>
      </div>
    </div>
  );
}
