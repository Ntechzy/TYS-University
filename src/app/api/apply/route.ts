import { NextResponse } from "next/server";

// Server-only env var — no NEXT_PUBLIC_ prefix, so it's never exposed to the browser.
const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL ?? "";

export async function POST(request: Request) {
  if (!GOOGLE_SCRIPT_URL) {
    return NextResponse.json(
      { result: "error", message: "Server is missing GOOGLE_SCRIPT_URL env var." },
      { status: 500 },
    );
  }

  try {
    const incomingForm = await request.formData();

    // Rebuild the form data to forward to Apps Script.
    const forwardForm = new FormData();
    for (const [key, value] of incomingForm.entries()) {
      forwardForm.append(key, value as string);
    }

    const scriptResponse = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      body: forwardForm,
    });

    const rawText = await scriptResponse.text();

    let parsed: { result?: string; message?: string };
    try {
      parsed = JSON.parse(rawText);
    } catch {
      parsed = { result: "error", message: `Unexpected response: ${rawText.slice(0, 200)}` };
    }

    if (!scriptResponse.ok || parsed.result !== "success") {
      return NextResponse.json(
        { result: "error", message: parsed.message ?? "Google Sheets rejected the submission." },
        { status: 502 },
      );
    }

    return NextResponse.json({ result: "success" });
  } catch (error) {
    console.error("Apply form submission failed:", error);
    return NextResponse.json(
      { result: "error", message: "Could not reach Google Sheets. Please try again." },
      { status: 502 },
    );
  }
}