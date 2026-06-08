"use client";

import React from "react";

interface CtaBannerProps {
  backgroundImageUrl: string;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ backgroundImageUrl }) => {
  const handleApply = () => {
    console.log("Redirecting to admissions portal...");
  };

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8">
      <div
        className="relative flex min-h-[160px] items-center overflow-hidden rounded-xl bg-[color:var(--primary)] bg-cover bg-center shadow-lg md:min-h-[200px]"
        style={{ backgroundImage: `url('${backgroundImageUrl}')` }}
      >
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-[color:var(--primary)]/95 via-[color:var(--secondary)]/82 to-[color:var(--secondary)]/45" />

        <div className="relative z-10 flex w-full flex-col items-center justify-between gap-6 px-6 py-6 md:flex-row md:px-12 md:py-8">
          <div className="max-w-xl select-none text-left">
            <h2 className="text-xl font-light italic tracking-wide text-white sm:text-2xl md:text-3xl">
              Education That Empowers
            </h2>
            <p className="mt-1 text-lg font-black uppercase tracking-wider text-[color:var(--accent)] sm:text-xl md:text-2xl">
              Opportunities That Transform
            </p>
          </div>

          <div className="w-full flex-shrink-0 md:w-auto">
            <button
              onClick={handleApply}
              className="group flex w-full items-center justify-center gap-3 rounded-md bg-[color:var(--accent)] px-8 py-3 font-extrabold uppercase tracking-wider text-[color:var(--foreground)] shadow-md transition-all duration-200 active:scale-95 hover:bg-[color:var(--soft-background)] md:w-auto"
            >
              Apply Now
              <svg
                className="h-5 w-5 transform transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaBanner;
