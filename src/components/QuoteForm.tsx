"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

export function QuoteForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);

    const response = await fetch("/api/quote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: data.get("name"),
        address: data.get("address"),
        phone: data.get("phone"),
        email: data.get("email"),
        notes: data.get("notes"),
      }),
    });

    const result = (await response.json().catch(() => null)) as
      | { error?: string }
      | null;

    if (!response.ok) {
      setStatus("error");
      setMessage(result?.error ?? "Please check your details and try again.");
      return;
    }

    form.reset();
    setStatus("success");
    setMessage(
      "Thank you. We received your request and will call you to discuss a quote.",
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl bg-white p-6 shadow-[0_20px_50px_-24px_rgba(28,45,28,0.45)] ring-1 ring-stone-200 sm:p-8"
    >
      <div className="grid gap-4">
        <label className="grid gap-1.5 text-sm font-medium text-stone-800">
          Name <span className="font-normal text-stone-500">(optional)</span>
          <input
            name="name"
            type="text"
            autoComplete="name"
            className="h-11 rounded-lg border border-stone-300 bg-stone-50 px-3 text-base font-normal text-stone-900 outline-none ring-emerald-700/30 focus:border-emerald-700 focus:bg-white focus:ring-2"
          />
        </label>
        <label className="grid gap-1.5 text-sm font-medium text-stone-800">
          Property address
          <input
            name="address"
            type="text"
            required
            autoComplete="street-address"
            placeholder="123 Oak Lane, Springfield"
            className="h-11 rounded-lg border border-stone-300 bg-stone-50 px-3 text-base font-normal text-stone-900 outline-none ring-emerald-700/30 focus:border-emerald-700 focus:bg-white focus:ring-2"
          />
        </label>
        <label className="grid gap-1.5 text-sm font-medium text-stone-800">
          Phone number
          <input
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            inputMode="tel"
            placeholder="(555) 123-4567"
            className="h-11 rounded-lg border border-stone-300 bg-stone-50 px-3 text-base font-normal text-stone-900 outline-none ring-emerald-700/30 focus:border-emerald-700 focus:bg-white focus:ring-2"
          />
        </label>
        <label className="grid gap-1.5 text-sm font-medium text-stone-800">
          Email address
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            inputMode="email"
            placeholder="example@example.com"
            className="h-11 rounded-lg border border-stone-300 bg-stone-50 px-3 text-base font-normal text-stone-900 outline-none ring-emerald-700/30 focus:border-emerald-700 focus:bg-white focus:ring-2" 
          />
        </label>
        <label className="grid gap-1.5 text-sm font-medium text-stone-800">
          What do you need?{" "}
          <span className="font-normal text-stone-500">(optional)</span>
          <textarea
            name="notes"
            rows={3}
            placeholder="Mowing, new beds, a full redesign…"
            className="rounded-lg border border-stone-300 bg-stone-50 px-3 py-2 text-base font-normal text-stone-900 outline-none ring-emerald-700/30 focus:border-emerald-700 focus:bg-white focus:ring-2"
          />
        </label>
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-lg bg-emerald-800 px-4 text-sm font-semibold tracking-wide text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "sending" ? "Sending…" : "Request a callback"}
      </button>
      {message ? (
        <p
          role="status"
          className={`mt-4 text-sm ${status === "error" ? "text-red-700" : "text-emerald-800"}`}
        >
          {message}
        </p>
      ) : (
        <p className="mt-4 text-sm text-stone-500">
          We use your address, number, and email only to reach you about this quote.
        </p>
      )}
    </form>
  );
}
