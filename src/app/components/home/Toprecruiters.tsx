import Image from "next/image";

const recruiters = [
  { name: "Google", category: "Tech", image: "/recruiters/google.svg" },
  { name: "Microsoft", category: "Tech", image: "/recruiters/microsoft.svg" },
  { name: "Amazon", category: "Tech", image: "/recruiters/amazon.svg" },
  { name: "KPMG", category: "Finance", image: "/recruiters/kpmg.svg" },
  { name: "EY", category: "Finance", image: "/recruiters/ey.svg" },
  { name: "Cisco", category: "Tech", image: "/recruiters/cisco.svg" },
  { name: "Bosch", category: "Engineering", image: "/recruiters/bosch.svg" },
  { name: "TCS", category: "Tech", image: "/recruiters/tcs.svg" },
  { name: "Capgemini", category: "Tech", image: "/recruiters/capgemini.svg" },
  { name: "Cognizant", category: "Tech", image: "/recruiters/cognizant.svg" },
  { name: "Safeducate", category: "Education", image: "/recruiters/safeducate.svg" },
  { name: "ITC Hotels", category: "Hospitality", image: "/recruiters/itc-hotels.svg" },
];

const stats = [
  { label: "Hiring Partners", value: "800+" },
  { label: "Placed Students", value: "10,000+" },
  { label: "Industries", value: "20+" },
];

export default function TopRecruiters() {
  return (
    <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-600">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            Placement Partners
          </div>
          <h2 className="mb-3 text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl">
            Top Recruiters at{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              LPU
            </span>
          </h2>
          <p className="mx-auto max-w-xl text-sm leading-relaxed text-gray-500 sm:text-base">
            Renowned brands hiring LPU talent for dynamic roles across diverse fields.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-6">
          {recruiters.map((recruiter) => (
            <div
              key={recruiter.name}
              className="group rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-3 flex items-center justify-end">
                <span className="rounded-full bg-blue-50 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-500">
                  {recruiter.category}
                </span>
              </div>
              <div className="flex min-h-[80px] items-center justify-center">
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
