import Image from "next/image";
import Link from "next/link";
import {
  Globe2,
  Mail,
  MapPin,
  Phone,
  Send,
  Share2,
  Video,
} from "lucide-react";

const quickLinks = [
  { label: "About University", href: "#about" },
  { label: "Admissions", href: "#apply" },
  { label: "Programs", href: "#programs" },
  { label: "Campus Life", href: "#campus-life" },
];

const studentLinks = [
  { label: "Student Support", href: "#support" },
  { label: "Latest Updates", href: "#updates" },
  { label: "Scholarships", href: "#scholarships" },
  { label: "Placement Cell", href: "#placements" },
];

const featuredUpdates = [
  {
    title: "Admissions open for the 2026 academic session.",
    image: "/about/college-1.png",
    href: "#admissions",
  },
  {
    title: "Explore campus learning, labs, and student growth opportunities.",
    image: "/about/classroom.png",
    href: "#campus",
  },
];

const socialLinks = [
  { label: "Fb", href: "https://www.facebook.com/", icon: Share2 },
  { label: "Ig", href: "https://www.instagram.com/", icon: Globe2 },
  { label: "In", href: "https://www.linkedin.com/", icon: Share2 },
  { label: "Yt", href: "https://www.youtube.com/", icon: Video },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#070d33] pt-0 text-white">
      <div className="mx-auto max-w-480 overflow-hidden  rounded-b-xl border border-white/10 bg-[#0a1245] shadow-[0_20px_70px_rgba(2,8,30,0.35)]">
        <div className="h-1.5 w-full bg-[linear-gradient(90deg,#3558e6_0%,#3558e6_48%,#22c7a8_48%,#22c7a8_100%)]" />

        <div className="border-b border-white/10 px-5 py-10 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <p className="font-display text-3xl font-bold leading-tight text-white">
                Signup for latest news and insights from TYS University
              </p>
            </div>

            <form className="flex w-full max-w-xl flex-col gap-3 sm:flex-row">
              <label className="relative flex-1">
                <Mail
                  size={18}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/45"
                />
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full rounded-xl border border-white/10 bg-white/6 px-12 py-4 text-sm text-white outline-none placeholder:text-white/40 focus:border-[#3558e6] focus:bg-white/10"
                />
              </label>
              <button
                type="submit"
                className="rounded-xl bg-[#3558e6] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#4a6cf7]"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="grid gap-10 px-5 py-10 sm:px-8 lg:grid-cols-[1.2fr_1fr_0.8fr_0.8fr_1fr] lg:px-10">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="TYS University logo"
                width={54}
                height={54}
                className="h-12 w-auto object-contain"
              />
              <div>
                <p className="font-display text-2xl font-bold leading-none">
                  TYS University
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.28em] text-[#f6c344]">
                  Discover. Learn. Empower.
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-xs text-sm leading-7 text-white/68">
              We create transformative learning experiences with strong academics,
              future-ready skills, and a student-first campus environment.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition hover:border-[#f6c344]/40 hover:text-[#f6c344]"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-white">
              Latest updates
            </h3>
            <div className="mt-6 space-y-4">
              {featuredUpdates.map((post) => (
                <a
                  key={post.title}
                  href={post.href}
                  className="group flex items-center gap-3 rounded-2xl border border-white/8 bg-white/4 p-2.5 transition hover:border-[#3558e6]/40 hover:bg-white/7"
                >
                  <div className="relative h-16 w-20 shrink-0 overflow-hidden rounded-xl">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <p className="text-sm leading-6 text-white/75 transition group-hover:text-white">
                    {post.title}
                  </p>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-white">
              University
            </h3>
            <ul className="mt-6 space-y-3 text-sm text-white/70">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <a className="transition hover:text-[#f6c344]" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-white">
              Students
            </h3>
            <ul className="mt-6 space-y-3 text-sm text-white/70">
              {studentLinks.map((item) => (
                <li key={item.label}>
                  <a className="transition hover:text-[#f6c344]" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-white">
              Contact info
            </h3>
            <div className="mt-6 space-y-4 text-sm text-white/72">
              <a
                href="mailto:admissions@tysuniversity.edu.in"
                className="flex items-start gap-3 transition hover:text-white"
              >
                <Mail size={17} className="mt-0.5 shrink-0 text-[#f6c344]" />
                <span>admissions@tysuniversity.edu.in</span>
              </a>
              <a
                href="tel:1800121288800"
                className="flex items-start gap-3 transition hover:text-white"
              >
                <Phone size={17} className="mt-0.5 shrink-0 text-[#f6c344]" />
                <span>1800 121 288 800</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin size={17} className="mt-0.5 shrink-0 text-[#f6c344]" />
                <span>Shanti Nagar, Fatehpur, Uttar Pradesh, India</span>
              </div>
              <a
                href="https://wa.me/911800121288800"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#22c7a8]/25 bg-[#22c7a8]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#8df0de] transition hover:bg-[#22c7a8]/18"
              >
                <Send size={14} />
                WhatsApp Support
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 bg-white/4 px-5 py-5 text-sm text-white/55 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
  <p>&copy; {year} TYS University. All rights reserved.</p>
  
  <p className="text-white/55 lg:text-center">
    Developed &amp; Managed by{" "}
    <a 
      href="https://ntechzy.in" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="font-medium text-white transition-colors hover:text-[#f6c344] hover:underline"
    >
      Ntechzy
    </a>
  </p>

  <div className="flex flex-wrap gap-5">
    <a href="#privacy" className="transition hover:text-white">
      Privacy policy
    </a>
    <a href="#legal" className="transition hover:text-white">
      Legal notice
    </a>
    <a href="#terms" className="transition hover:text-white">
      Terms of service
    </a>
  </div>
</div>
      </div>
    </footer>
  );
}
