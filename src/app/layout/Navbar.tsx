"use client";

import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Facebook,
  Instagram,
  Linkedin,
  Menu,
  Phone,
  Search,
  Youtube,
} from "lucide-react";

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 z-50 w-full text-white">
      {/* Top Announcement Bar */}
      <div className="h-11 border-b border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="mx-auto flex h-full max-w-[1920px] items-center">
          <button className="px-6 opacity-70 hover:opacity-100">
            <ChevronLeft size={18} />
          </button>

          <div className="flex flex-1 items-center justify-center gap-6">
            <span className="text-[15px] font-medium">
              Register Now for CU Joint Campus Placement Programme
            </span>

            <button className="rounded bg-red-600 px-5 py-2 text-xs font-bold tracking-wide transition hover:bg-red-700">
              REGISTER NOW
            </button>
          </div>

          <button className="px-6 opacity-70 hover:opacity-100">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Main Header */}
      <div className="border-b border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="flex h-[108px] items-center justify-between px-5">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center gap-3">
              <div className="h-[92px] w-[60px] bg-red-700" />

              <div>
                <h1 className="text-[30px] font-black uppercase leading-none">
                  Chandigarh
                </h1>
                <h1 className="text-[30px] font-black uppercase leading-none">
                  University
                </h1>

                <p className="mt-1 text-[12px] text-white/80">
                  Discover. Learn. Empower.
                </p>
              </div>
            </div>
          </div>

          {/* Center Links */}
          <div className="hidden xl:flex items-center gap-8 text-[14px] font-medium">
            <a href="#">CAMPUSES</a>
            <a href="#">INTERNATIONAL</a>
            <a href="#">LIBRARY</a>
            <a href="#">STUDENT SERVICES</a>
            <a href="#">CAREER</a>
            <a href="#">BLOGS</a>
            <a href="#">CU PODCAST</a>
            <a href="#">CONTACT US</a>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-6">
            {/* Social Icons */}
            <div className="hidden lg:flex items-center gap-5 text-white/90">
              <span className="text-sm">Whatsapp</span>

              <Phone size={16} />

              <span className="text-sm">Call Us</span>

              <span className="text-sm">360°</span>

              <Facebook size={18} />
              <span className="text-lg font-bold">𝕏</span>
              <Linkedin size={18} />
              <Instagram size={18} />
              <Youtube size={18} />
            </div>

            {/* Helpline Box */}
            <div className="flex h-[86px] w-[400px] items-center justify-between rounded bg-[#ff0f0f] px-8">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-white">
                  <Phone size={24} />
                </div>

                <div>
                  <p className="text-sm">Admission Helpline</p>

                  <p className="text-[18px] font-extrabold">
                    1800121288800
                  </p>
                </div>
              </div>

              <Menu size={38} />
            </div>

            {/* Search */}
            <div className="flex flex-col items-center gap-2">
              <Search size={36} />
              <span className="text-sm">Search</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="border-t border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="flex h-[72px] items-center">
          {[
            "ABOUT",
            "PROGRAMS",
            "ACADEMICS",
            "ADMISSIONS",
            "CAMPUS LIFE",
            "PLACEMENTS",
            "RESEARCH & INNOVATION",
          ].map((item) => (
            <div
              key={item}
              className="flex h-full items-center border-r border-white/20 px-10"
            >
              <button className="flex items-center gap-3 text-[18px] font-bold tracking-[1px]">
                {item}
                <ChevronDown size={20} />
              </button>
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
}