import { NextResponse } from "next/server";

function digitsOnly(value: string) {
  return value.replace(/\D/g, "");
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const payload = body as Record<string, unknown>;
  const name = String(payload.name ?? "").trim().slice(0, 120);
  const address = String(payload.address ?? "").trim().slice(0, 240);
  const phone = String(payload.phone ?? "").trim().slice(0, 40);
  const email = String(payload.email ?? "").trim().slice(0, 254);
  const notes = String(payload.notes ?? "").trim().slice(0, 1000);
  const phoneDigits = digitsOnly(phone);

  if (address.length < 8) {
    return NextResponse.json(
      { error: "Please enter the full property address." },
      { status: 400 },
    );
  }

  if (phoneDigits.length < 10 || phoneDigits.length > 15) {
    return NextResponse.json(
      { error: "Please enter a phone number we can call back." },
      { status: 400 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Please enter an email address we can reply to." },
      { status: 400 },
    );
  }

  const lead = {
    name: name || null,
    address,
    phone,
    email,
    notes: notes || null,
    receivedAt: new Date().toISOString(),
    source: "website-quote-form",
  };

  const webhook = process.env.QUOTE_WEBHOOK_URL;

  if (webhook) {
    const forwarded = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lead),
    });

    if (!forwarded.ok) {
      console.error("Quote webhook failed", forwarded.status);
      return NextResponse.json(
        { error: "We could not send your request. Please try again shortly." },
        { status: 502 },
      );
    }
  } else {
    console.info("Quote request (set QUOTE_WEBHOOK_URL to forward leads)", lead);
  }

  return NextResponse.json({ ok: true });
}
