import { NextResponse } from "next/server";

const SHEETS_WEBHOOK_URL =
  "https://script.google.com/macros/s/AKfycbw3egJHMGgPnUZgsE0hKKweGlllw2ofnkzpf8OOAyIGgsR1FA0ce2ALFLrdowo7tXxJ/exec";

interface ContactPayload {
  firstName: string;
  lastName: string;
  company: string;
  phone: string;
  email: string;
  area: string;
  location: string;
  note: string;
  locale: string;
  sourcePage: string;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    if (!body.firstName?.trim() || !body.phone?.trim()) {
      return NextResponse.json(
        { error: "Ad və Telefon tələb olunur" },
        { status: 400 }
      );
    }

    const fullName = [body.firstName, body.lastName].filter(Boolean).join(" ");

    const payload = {
      name: body.firstName?.trim() || "",
      surname: body.lastName?.trim() || "",
      company: body.company?.trim() || "",
      phone: body.phone?.trim() || "",
      email: body.email?.trim() || "",
      greenhouseSize: body.area?.trim() || "",
      location: body.location?.trim() || "",
      note: body.note?.trim() || "",
      locale: body.locale || "az",
      source: body.sourcePage || "/",
      timestamp: new Date().toISOString(),
      fullName,
    };

    const res = await fetch(SHEETS_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok && res.status !== 302 && res.status !== 301) {
      console.error("Google Sheets webhook error:", res.status, await res.text().catch(() => ""));
      return NextResponse.json(
        { error: "Göndərmə xətası" },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact submission error:", err);
    return NextResponse.json(
      { error: "Göndərilə bilmədi" },
      { status: 500 }
    );
  }
}
