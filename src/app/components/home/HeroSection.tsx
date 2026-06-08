"use client";

export default function HeroSection() {
  return (
    <main className="min-h-screen bg-black">

      {/* HERO SECTION */}
      <section
        className="relative h-screen w-full bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero/hero1.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Content */}
        <div className="relative z-10 mx-auto flex h-full max-w-[1400px] items-center justify-between px-8 pt-[180px]">
          {/* Left Content */}
          <div className="max-w-137.5 text-white">
            <h1 className="mb-8 text-6xl font-bold leading-tight">
              Best Private University in Punjab (India)
            </h1>

            <p className="mb-10 text-lg text-white/85">
              Chandigarh University is focused on innovation, sustainability,
              and academic excellence with world-class infrastructure.
            </p>

            <button className="rounded bg-red-600 px-10 py-4 font-semibold transition hover:bg-red-700">
              APPLY TODAY →
            </button>
          </div>

          {/* Right Form */}
          <div className="hidden lg:block">
            <div className="w-[430px] rounded-md bg-white p-8 shadow-2xl">
              <div className="text-center">
                <p className="text-sm text-gray-500">APPLY TODAY FOR</p>

                <h3 className="mt-2 text-xl font-bold text-gray-900">
                  TYS UNIVERSITY
                </h3>

                <p className="mt-1 font-semibold text-gray-600">INDIA</p>
              </div>

              <div className="mt-6 space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <input
                    placeholder="Student Name"
                    className="border p-3 text-sm outline-none"
                  />

                  <input
                    placeholder="Student Email"
                    className="border p-3 text-sm outline-none"
                  />
                </div>

                <input
                  placeholder="Mobile Number"
                  className="w-full border p-3 text-sm outline-none"
                />

                <div className="grid grid-cols-2 gap-3">
                  <select className="border p-3 text-sm">
                    <option>Select State</option>
                  </select>

                  <select className="border p-3 text-sm">
                    <option>Select City</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <select className="border p-3 text-sm">
                    <option>Select Discipline</option>
                  </select>

                  <select className="border p-3 text-sm">
                    <option>Select Program</option>
                  </select>
                </div>

                <button className="w-full rounded bg-red-600 py-4 font-bold text-white transition hover:bg-red-700">
                  APPLY NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}