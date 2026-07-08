"use client";

import { getAllStates, getDistricts } from "india-state-district";
import { useEffect, useMemo, useState } from "react";
import { disciplines } from "@/app/data/programs";

const heroBanners = ["/hero/hero1.webp", "/hero/hero2.webp","/hero/hero-night.webp","/building/Building1.png"];

type SubmitStatus = "idle" | "submitting" | "success" | "error";

function Spinner() {
  return (
    <svg
      className="h-4 w-4 animate-spin text-white"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-90"
        fill="currentColor"
        d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4Z"
      />
    </svg>
  );
}

export default function HeroSection() {
  const [activeBanner, setActiveBanner] = useState(0);
  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedDiscipline, setSelectedDiscipline] = useState("");
  const [selectedProgram, setSelectedProgram] = useState("");

  const [studentName, setStudentName] = useState("");
  const [studentEmail, setStudentEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");

  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const states = useMemo(() => getAllStates(), []);
  const districts = useMemo(
    () => (selectedState ? getDistricts(selectedState) : []),
    [selectedState],
  );

  const programs = useMemo(
    () =>
      disciplines.find((item) => item.discipline === selectedDiscipline)
        ?.programs ?? [],
    [selectedDiscipline],
  );

  const selectedStateName = useMemo(
    () => states.find((state) => state.code === selectedState)?.name ?? "",
    [states, selectedState],
  );

  const handleStateChange = (stateCode: string) => {
    setSelectedState(stateCode);
    setSelectedDistrict("");
  };

  const handleDisciplineChange = (discipline: string) => {
    setSelectedDiscipline(discipline);
    setSelectedProgram("");
  };

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveBanner((current) => (current + 1) % heroBanners.length);
    }, 4000);

    return () => window.clearInterval(intervalId);
  }, []);

  const scrollToApplicationForm = () => {
    document.querySelector("#hero-application-form")?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  const resetForm = () => {
    setStudentName("");
    setStudentEmail("");
    setMobileNumber("");
    setSelectedState("");
    setSelectedDistrict("");
    setSelectedDiscipline("");
    setSelectedProgram("");
  };

  const validate = () => {
    if (!studentName.trim()) return "Please enter the student's name.";
    if (!/^\S+@\S+\.\S+$/.test(studentEmail)) return "Please enter a valid email.";
    if (!/^\d{10}$/.test(mobileNumber)) return "Please enter a valid 10-digit mobile number.";
    if (!selectedState) return "Please select a state.";
    if (!selectedDistrict) return "Please select a district.";
    if (!selectedDiscipline) return "Please select a discipline.";
    if (!selectedProgram) return "Please select a program.";
    return "";
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const validationError = validate();
    if (validationError) {
      setStatus("error");
      setErrorMessage(validationError);
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    const payload = new FormData();
    payload.append("name", studentName.trim());
    payload.append("email", studentEmail.trim());
    payload.append("mobile", mobileNumber.trim());
    payload.append("state", selectedStateName);
    payload.append("district", selectedDistrict);
    payload.append("discipline", selectedDiscipline);
    payload.append("program", selectedProgram);

    try {
      // Same-origin call to our own API route — no CORS issues, and we
      // get a real success/failure response back instead of guessing.
      const response = await fetch("/api/apply", {
        method: "POST",
        body: payload,
      });

      const data: { result?: string; message?: string } = await response
        .json()
        .catch(() => ({ result: "error", message: "Unexpected server response." }));

      if (!response.ok || data.result !== "success") {
        throw new Error(data.message || "Submission failed. Please try again.");
      }

      setStatus("success");
      resetForm();
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong. Please try again.",
      );
    }
  };

  return (
    <main className="min-h-screen bg-background pt-16 md:pt-20">
      <section className="relative w-full overflow-hidden">
        {heroBanners.map((banner, index) => (
          <div
            key={banner}
            className={`absolute inset-0 bg-cover transition-opacity duration-1000 sm:bg-center md:bg-center ${
              activeBanner === index ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url('${banner}')` }}
          />
        ))}

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50 md:bg-black/35" />

        <div className="relative z-10 mx-auto flex w-full max-w-350 flex-col items-center gap-10 px-5 py-12 sm:px-8 md:min-h-[calc(100vh-80px)] md:justify-center md:py-20 lg:flex-row lg:items-center lg:justify-between lg:gap-6 lg:px-10">
          <div className="w-full max-w-155 text-white">
            <h1
              className="mb-5 max-w-full wrap-break-word text-3xl font-semibold uppercase leading-tight tracking-[0.06em] text-white drop-shadow-[0_6px_20px_rgba(0,0,0,0.45)] sm:text-5xl sm:tracking-widest md:mb-8 md:text-6xl md:tracking-[0.12em]"
              style={{ fontFamily: '"Times New Roman", Times, serif' }}
            >
              <span className="mb-3 block h-1 w-16 rounded-full bg-accent sm:w-24" />
              <span className="block text-white/88">Best Private</span>
              <span className="block font-bold text-white">University in UP</span>
            </h1>

            <p className="mb-8 max-w-130 text-sm leading-relaxed text-white/85 sm:text-lg md:mb-10">
              TYS University is focused on innovation, sustainability, and
              academic excellence with world-class infrastructure.
            </p>

            <button
              type="button"
              onClick={scrollToApplicationForm}
              className="w-full rounded bg-accent px-7 py-3.5 text-sm font-semibold text-foreground transition hover:bg-soft-background sm:w-auto sm:px-10 sm:py-4 sm:text-base"
            >
              APPLY TODAY →
            </button>
          </div>

          <div className="w-full">
            <form
              id="hero-application-form"
              onSubmit={handleSubmit}
              className="mx-auto w-full max-w-107.5 scroll-mt-24 rounded-xl border border-black/10 bg-white p-5 shadow-2xl sm:p-8 md:scroll-mt-32"
            >
              <div className="text-center">
                <p className="text-xs text-(--secondary)/80 sm:text-sm">
                  APPLY TODAY FOR
                </p>

                <h3 className="mt-2 text-lg font-bold text-primary sm:text-xl">
                  TYS UNIVERSITY
                </h3>

                <p className="mt-1 text-sm font-semibold text-(--foreground)/70 sm:text-base">
                  INDIA
                </p>
              </div>

              <div className="mt-5 space-y-3 sm:mt-6 sm:space-y-4">
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <input
                    required
                    value={studentName}
                    onChange={(event) => setStudentName(event.target.value)}
                    placeholder="Student Name"
                    disabled={status === "submitting"}
                    className="w-full border border-black/10 bg-white p-3 text-sm outline-none focus:border-secondary disabled:bg-black/5"
                  />

                  <input
                    required
                    type="email"
                    value={studentEmail}
                    onChange={(event) => setStudentEmail(event.target.value)}
                    placeholder="Student Email"
                    disabled={status === "submitting"}
                    className="w-full border border-black/10 bg-white p-3 text-sm outline-none focus:border-secondary disabled:bg-black/5"
                  />
                </div>

                <input
                  required
                  type="tel"
                  inputMode="numeric"
                  maxLength={10}
                  value={mobileNumber}
                  onChange={(event) =>
                    setMobileNumber(event.target.value.replace(/\D/g, ""))
                  }
                  placeholder="Mobile Number"
                  disabled={status === "submitting"}
                  className="w-full border border-black/10 bg-white p-3 text-sm outline-none focus:border-secondary disabled:bg-black/5"
                />

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <select
                    required
                    value={selectedState}
                    onChange={(event) => handleStateChange(event.target.value)}
                    disabled={status === "submitting"}
                    className="w-full border border-black/10 bg-white p-3 text-sm outline-none focus:border-secondary disabled:bg-black/5"
                  >
                    <option value="">Select State</option>

                    {states.map((state) => (
                      <option key={state.code} value={state.code}>
                        {state.name}
                      </option>
                    ))}
                  </select>

                  <select
                    required
                    value={selectedDistrict}
                    onChange={(event) => setSelectedDistrict(event.target.value)}
                    disabled={!selectedState || status === "submitting"}
                    className="w-full border border-black/10 bg-white p-3 text-sm outline-none focus:border-secondary disabled:cursor-not-allowed disabled:bg-black/5 disabled:text-(--foreground)/40"
                  >
                    <option value="">Select District</option>

                    {districts.map((district) => (
                      <option key={district} value={district}>
                        {district}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <select
                    required
                    value={selectedDiscipline}
                    onChange={(event) =>
                      handleDisciplineChange(event.target.value)
                    }
                    disabled={status === "submitting"}
                    className="w-full border border-black/10 bg-white p-3 text-sm outline-none focus:border-secondary disabled:bg-black/5"
                  >
                    <option value="">Select Discipline</option>

                    {disciplines.map((item) => (
                      <option key={item.discipline} value={item.discipline}>
                        {item.discipline}
                      </option>
                    ))}
                  </select>

                  <select
                    required
                    value={selectedProgram}
                    onChange={(event) => setSelectedProgram(event.target.value)}
                    disabled={!selectedDiscipline || status === "submitting"}
                    className="w-full border border-black/10 bg-white p-3 text-sm outline-none focus:border-secondary disabled:cursor-not-allowed disabled:bg-black/5 disabled:text-(--foreground)/40"
                  >
                    <option value="">Select Program</option>

                    {programs.map((program) => (
                      <option key={program} value={program}>
                        {program}
                      </option>
                    ))}
                  </select>
                </div>

                {status === "error" && (
                  <p className="text-sm font-medium text-red-600" role="alert">
                    {errorMessage}
                  </p>
                )}

                {status === "success" && (
                  <p className="text-sm font-medium text-green-600" role="status">
                    Application submitted! Our team will reach out soon.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="flex w-full items-center justify-center gap-2 rounded bg-primary py-3.5 font-bold text-white transition hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-70 sm:py-4"
                >
                  {status === "submitting" ? (
                    <>
                      <Spinner />
                      SUBMITTING...
                    </>
                  ) : (
                    "APPLY NOW"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="relative z-20 flex justify-center gap-2 pb-6 md:absolute md:bottom-10 md:left-1/2 md:-translate-x-1/2 md:pb-0">
          {heroBanners.map((banner, index) => (
            <button
              key={banner}
              type="button"
              aria-label={`Show hero slide ${index + 1}`}
              onClick={() => setActiveBanner(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeBanner === index
                  ? "w-9 bg-accent"
                  : "w-2.5 bg-white/55 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </section>
    </main>
  );
}