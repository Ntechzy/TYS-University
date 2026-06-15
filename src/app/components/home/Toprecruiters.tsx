import Image from "next/image";

const recruiters = [
  { name: "Ntechzy", category: "Tech", image: "/recruiters/ntechzy.png" },
  { name: "Accenture", category: "Tech", image: "/recruiters/accenture.png" },
  { name: "Cognizant", category: "Tech", image: "/recruiters/cognizant.png" },
  { name: "TCS", category: "Tech", image: "/recruiters/tcs.png" },
  { name: "Wipro", category: "Tech", image: "/recruiters/wipro.png" },
  { name: "Infosys", category: "Tech", image: "/recruiters/infosys.png" },
  { name: "HCL", category: "Tech", image: "/recruiters/hcl.png" },
  { name: "IBM", category: "Tech", image: "/recruiters/ibm.png" },
  { name: "JSW", category: "Engineering", image: "/recruiters/jsw.png" },
  { name: "Tech Mahindra", category: "Tech", image: "/recruiters/tech-mahindar.png" },
  { name: "CareerKick", category: "Education", image: "/recruiters/careerkick.png" },
  { name: "Time Now Navbharat", category: "Media", image: "/recruiters/timenownavbharat.png" },
];

const stats = [
  { label: "Hiring Partners", value: "200+" },
  { label: "Placed Students", value: "1000+" },
  { label: "Industries", value: "10+" },
];

export default function TopRecruiters() {
  return (
    <section className="bg-[linear-gradient(135deg,color-mix(in_srgb,var(--accent)_12%,white),white_55%,color-mix(in_srgb,var(--secondary)_10%,white))] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-(--secondary)/15 bg-(--accent)/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-secondary">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Placement Partners
          </div>
          <h2 className="mb-3 text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl">
            Top Recruiters at{" "}
            <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
              TYS University
            </span>
          </h2>
          <p className="mx-auto max-w-xl text-sm leading-relaxed text-gray-500 sm:text-base">
            Renowned brands hiring TYS talent for dynamic roles across diverse fields.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-6">
          {recruiters.map((recruiter) => (
            <div
              key={recruiter.name}
              className="group rounded-2xl border border-(--secondary)/10 bg-white p-4 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:border-(--accent)/60 hover:shadow-md"
            >
              <div className="mb-3 flex items-center justify-end">
                {/* <span className="rounded-full bg-[color:var(--accent)]/15 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-[color:var(--primary)]">
                  {recruiter.category}
                </span> */}
              </div>
              <div className="flex min-h-20 items-center justify-center">
                <Image
                  src={recruiter.image}
                  alt={`${recruiter.name} logo`}
                  width={160}
                  height={72}
                  className="h-14 w-auto object-contain"
                />
              </div>
              <p className="mt-3 text-center text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                {recruiter.name}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 text-center sm:flex-row sm:gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span className="text-2xl font-black text-gray-900 sm:text-3xl">{stat.value}</span>
              <span className="text-xs font-medium uppercase tracking-widest text-gray-400">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
