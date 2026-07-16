import Link from "next/link";

const aboutNavItems = [
  { label: "About", href: "/about" },
  { label: "Mission & Vision", href: "/about/mission-vision" },
  {
    label: "Message from the Chancellor",
    href: "/about/message-from-chancellor",
  },
];

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="bg-[#f7f3ee] pt-24 md:pt-28">
      <section className="border-b border-black/8 bg-white/92 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl gap-3 overflow-x-auto px-5 py-4 sm:px-8 lg:px-10">
          {aboutNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="shrink-0 rounded-full border border-[#8B2C2C]/15 bg-[#f8f4ee] px-4 py-2 text-sm font-semibold text-[#2c2417] transition hover:border-[#8B2C2C]/35 hover:bg-[#fff7e7] hover:text-[#8B2C2C]"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </section>

      {children}
    </main>
  );
}
