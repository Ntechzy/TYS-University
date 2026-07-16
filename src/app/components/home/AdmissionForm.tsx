"use client";

import { getAllStates, getDistricts } from "india-state-district";
import { useMemo, useState } from "react";
import { disciplines } from "@/app/data/programs";

type SubmitStatus = "idle" | "submitting" | "success" | "error";

type AdmissionFormProps = {
  formId?: string;
  className?: string;
  title?: string;
  eyebrow?: string;
  eyebrowClassName?: string;
  locationLabel?: string;
};

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

export default function AdmissionForm({
  formId,
  className = "mx-auto w-full max-w-107.5 scroll-mt-24 rounded-xl border border-black/10 bg-white p-5 shadow-2xl sm:p-8 md:scroll-mt-32",
  title = "TYS UNIVERSITY",
  eyebrow = "APPLY TODAY FOR",
  eyebrowClassName = "text-xs text-(--secondary)/80 sm:text-sm",
  locationLabel = "INDIA",
}: AdmissionFormProps) {
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
    <form id={formId} onSubmit={handleSubmit} className={className}>
      <div className="text-center">
        <p className={eyebrowClassName}>
          {eyebrow}
        </p>
        <h3 className="mt-2 text-lg font-bold text-primary sm:text-xl">
          {title}
        </h3>
        <p className="mt-1 text-sm font-semibold text-(--foreground)/70 sm:text-base">
          {locationLabel}
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
            onChange={(event) => handleDisciplineChange(event.target.value)}
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
  );
}
