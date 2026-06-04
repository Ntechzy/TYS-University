"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Menu,
  Phone,
  Search,
  X,
} from "lucide-react";

const announcements = [
  "Register Now for TYSU Joint Campus Placement Programme",
  "Admissions open for the 2026 academic session",
  "Explore programs, scholarships, placements, and campus life",
];

const utilityLinks = [
  { label: "CAMPUSES", href: "#campuses" },
  { label: "INTERNATIONAL", href: "#international" },
  { label: "LIBRARY", href: "#library" },
  { label: "STUDENT SERVICES", href: "#student-services" },
  { label: "CAREER", href: "#career" },
  { label: "BLOGS", href: "#blogs" },
  { label: "TYSU PODCAST", href: "#podcast" },
  { label: "CONTACT US", href: "#contact" },
];

const navItems = [
  {
    label: "ABOUT",
    links: [
      { label: "About TYS University", href: "#about" },
      { label: "Leadership", href: "#leadership" },
      { label: "Accreditations", href: "#accreditations" },
    ],
  },
  {
    label: "PROGRAMS",
    links: [
      { label: "Undergraduate Programs", href: "#undergraduate" },
      { label: "Postgraduate Programs", href: "#postgraduate" },
      { label: "Doctoral Programs", href: "#doctoral" },
    ],
  },
  {
    label: "ACADEMICS",
    links: [
      { label: "Academic Calendar", href: "#academic-calendar" },
      { label: "Departments", href: "#departments" },
      { label: "Examinations", href: "#examinations" },
    ],
  },
  {
    label: "ADMISSIONS",
    links: [
      { label: "Apply Now", href: "#apply" },
      { label: "Course Fees", href: "#course-fees" },
      { label: "Scholarships", href: "#scholarships" },
    ],
  },
  {
    label: "CAMPUS LIFE",
    links: [
      { label: "Infrastructure", href: "#infrastructure" },
      { label: "Clubs and Societies", href: "#clubs" },
      { label: "Hostel Life", href: "#hostel" },
    ],
  },
  {
    label: "PLACEMENTS",
    links: [
      { label: "Placement Overview", href: "#placements" },
      { label: "Recruiters", href: "#recruiters" },
      { label: "Student Success", href: "#success" },
    ],
  },
  {
    label: "RESEARCH & INNOVATION",
    links: [
      { label: "Research Centers", href: "#research" },
      { label: "Innovation Lab", href: "#innovation" },
      { label: "Publications", href: "#publications" },
    ],
  },
];

const socialLinks = [
  { label: "f", name: "Facebook", href: "https://www.facebook.com/" },
  { label: "X", name: "X", href: "https://x.com/" },
  { label: "in", name: "LinkedIn", href: "https://www.linkedin.com/" },
  { label: "ig", name: "Instagram", href: "https://www.instagram.com/" },
  { label: "yt", name: "YouTube", href: "https://www.youtube.com/" },
];

export default function Navbar() {
  const [announcementIndex, setAnnouncementIndex] = useState(0);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const activeNav = navItems.find((item) => item.label === activeMenu);
  const announcement = announcements[announcementIndex];

  const showPreviousAnnouncement = () => {
    setAnnouncementIndex((current) =>
      current === 0 ? announcements.length - 1 : current - 1,
    );
  };

  const showNextAnnouncement = () => {
    setAnnouncementIndex((current) => (current + 1) % announcements.length);
  };

  const closeMenus = () => {
    setActiveMenu(null);
    setIsMobileMenuOpen(false);
  };

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const query = searchQuery.trim();

    if (query.length > 0) {
      window.location.href = `https://www.google.com/search?q=${encodeURIComponent(
        `${query} TYS University`,
      )}`;
    }
  };

  return (
    <header className="absolute left-0 top-0 z-50 w-full text-white">
      <div className="border-b border-white/10 bg-black/30 px-2 py-1.5 backdrop-blur-sm sm:h-9 sm:py-0">
        <div className="mx-auto flex h-full max-w-[1920px] items-center justify-between sm:justify-center">
          <button
            type="button"
            aria-label="Previous announcement"
            className="hidden px-2 opacity-70 transition hover:opacity-100 sm:block md:px-4"
            onClick={showPreviousAnnouncement}
          >
            <ChevronLeft size={14} />
          </button>

          <div className="flex flex-1 flex-col items-center justify-center gap-1.5 text-center sm:flex-row sm:gap-4">
            <span className="text-[10px] font-medium leading-tight sm:text-xs">
              {announcement}
            </span>

            <a
              href="#apply"
              className="shrink-0 rounded bg-[#4A161A] px-3 py-1 text-[9px] font-bold tracking-wide transition hover:bg-red-700 sm:text-[10px]"
            >
              REGISTER NOW
            </a>
          </div>

          <button
            type="button"
            aria-label="Next announcement"
            className="hidden px-2 opacity-70 transition hover:opacity-100 sm:block md:px-4"
            onClick={showNextAnnouncement}
          >
            <ChevronRight size={14} />
          </button>
        </div>
      </div>

      <div className="border-b border-white/10 bg-black/30 backdrop-blur-sm">
        <div className="mx-auto flex max-w-[1920px] items-center justify-between p-3 md:h-20 md:px-4">
          <Link href="/" className="flex shrink-0 items-center gap-2">
            <Image
              src="/logo.png"
              alt="TYS University logo"
              width={80}
              height={120}
              className="h-10 w-auto shrink-0 object-contain md:h-15"
              priority
            />
            <span className="shrink-0">
              <span className="block text-base font-black uppercase leading-none md:text-xl">
                TYS
              </span>
              <span className="block text-base font-black uppercase leading-none md:text-xl">
                University
              </span>
              <span className="mt-0.5 block text-[8px] text-white/80 md:text-[10px]">
                Discover. Learn. Empower.
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-4 text-[11px] font-medium tracking-wide xl:flex">
            {utilityLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition-colors hover:text-red-300"
                onClick={closeMenus}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex shrink-0 items-center gap-3 md:gap-4">
            <div className="hidden items-center gap-3 text-white/90 2xl:flex">
              <a
                href="https://wa.me/911800121288800"
                className="text-xs transition-colors hover:text-red-300"
                target="_blank"
                rel="noreferrer"
              >
                Whatsapp
              </a>
              <a
                href="tel:1800121288800"
                aria-label="Call admission helpline"
                className="transition-colors hover:text-red-300"
              >
                <Phone size={14} />
              </a>
              <a
                href="tel:1800121288800"
                className="text-xs transition-colors hover:text-red-300"
              >
                Call Us
              </a>
              <a
                href="#virtual-tour"
                className="text-xs transition-colors hover:text-red-300"
              >
                360 deg
              </a>
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  aria-label={link.name}
                  className="min-w-4 text-center text-sm font-bold transition-colors hover:text-red-300"
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <a
              href="tel:1800121288800"
              className="hidden h-12 items-center justify-between rounded bg-[#4A161A] px-4 transition hover:bg-red-800 lg:flex"
            >
              <span className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-white">
                  <Phone size={14} />
                </span>
                <span>
                  <span className="block text-[10px]">Admission Helpline</span>
                  <span className="block text-sm font-extrabold leading-tight">
                    1800121288800
                  </span>
                </span>
              </span>
            </a>

            <button
              type="button"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded bg-[#4A161A] transition hover:bg-red-800"
              onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
            >
              {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>

            <button
              type="button"
              aria-label={isSearchOpen ? "Close search" : "Open search"}
              aria-expanded={isSearchOpen}
              className="hidden shrink-0 flex-col items-center gap-0.5 transition-colors hover:text-red-300 sm:flex"
              onClick={() => setIsSearchOpen((isOpen) => !isOpen)}
            >
              {isSearchOpen ? <X size={20} /> : <Search size={20} />}
              <span className="text-[10px]">Search</span>
            </button>
          </div>
        </div>
      </div>

      <nav className="hidden border-t border-white/10 bg-black/30 backdrop-blur-sm md:block">
        <div className="mx-auto flex h-[45px] max-w-[1920px] items-center overflow-x-auto whitespace-nowrap [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {navItems.map((item) => {
            const isActive = item.label === activeMenu;

            return (
              <div
                key={item.label}
                className="flex h-full shrink-0 items-center border-r border-white/20"
              >
                <button
                  type="button"
                  aria-expanded={isActive}
                  className="flex h-full items-center gap-1.5 px-4 text-xs font-bold tracking-[1px] transition-colors hover:text-red-300 lg:px-6 lg:text-sm"
                  onClick={() =>
                    setActiveMenu((current) =>
                      current === item.label ? null : item.label,
                    )
                  }
                >
                  {item.label}
                  <ChevronDown
                    size={14}
                    className={`transition-transform ${isActive ? "rotate-180" : ""}`}
                  />
                </button>
              </div>
            );
          })}
        </div>

        {activeNav ? (
          <div className="border-t border-white/10 bg-[#171313]/95 shadow-2xl">
            <div className="mx-auto grid max-w-[1920px] grid-cols-3 gap-3 px-8 py-5">
              {activeNav.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="rounded border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold transition hover:border-red-300/70 hover:bg-red-900/30"
                  onClick={closeMenus}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        ) : null}
      </nav>

      {isSearchOpen ? (
        <form
          className="border-t border-white/10 bg-[#171313]/95 px-3 py-4 shadow-2xl"
          onSubmit={handleSearch}
        >
          <div className="mx-auto flex max-w-3xl items-center gap-2">
            <input
              type="search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search TYS University"
              className="h-11 flex-1 rounded border border-white/15 bg-white px-4 text-sm text-zinc-950 outline-none focus:border-red-400"
              autoFocus
            />
            <button
              type="submit"
              className="flex h-11 items-center gap-2 rounded bg-[#4A161A] px-4 text-sm font-bold transition hover:bg-red-800"
            >
              <Search size={16} />
              Search
            </button>
          </div>
        </form>
      ) : null}

      {isMobileMenuOpen ? (
        <div className="max-h-[calc(100vh-88px)] overflow-y-auto border-t border-white/10 bg-[#171313]/98 px-4 py-5 shadow-2xl lg:hidden">
          <div className="grid gap-3">
            <a
              href="#apply"
              className="rounded bg-[#4A161A] px-4 py-3 text-center text-sm font-bold transition hover:bg-red-800"
              onClick={closeMenus}
            >
              Apply Now
            </a>
            <a
              href="tel:1800121288800"
              className="rounded border border-white/15 px-4 py-3 text-center text-sm font-bold transition hover:border-red-300"
              onClick={closeMenus}
            >
              Call Admission Helpline
            </a>
          </div>

          <div className="mt-5 grid gap-2">
            {navItems.map((item) => (
              <details key={item.label} className="rounded border border-white/10">
                <summary className="cursor-pointer px-4 py-3 text-sm font-bold">
                  {item.label}
                </summary>
                <div className="grid gap-1 border-t border-white/10 bg-white/5 p-2">
                  {item.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="rounded px-3 py-2 text-sm text-white/85 transition hover:bg-white/10 hover:text-white"
                      onClick={closeMenus}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </details>
            ))}
          </div>

          <div className="mt-5 grid grid-cols-2 gap-2">
            {utilityLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded border border-white/10 px-3 py-2 text-xs font-semibold transition hover:border-red-300"
                onClick={closeMenus}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 rounded border border-white/10 px-3 py-2 text-xs font-bold transition hover:border-red-300"
              >
                {link.name}
                <ExternalLink size={12} />
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
