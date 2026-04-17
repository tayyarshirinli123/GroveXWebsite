import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

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

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildEmailHtml(data: ContactPayload): string {
  const fullName = [data.firstName, data.lastName].filter(Boolean).join(" ");
  const timestamp = new Date().toLocaleString("az-AZ", {
    timeZone: "Asia/Baku",
    dateStyle: "long",
    timeStyle: "short",
  });

  const rows: [string, string][] = [
    ["Tarix", timestamp],
    ["Ad", escapeHtml(fullName)],
    ["Şirkət / İstixana adı", escapeHtml(data.company)],
    ["Telefon", escapeHtml(data.phone)],
    ["E-poçt", escapeHtml(data.email)],
    ["İstixana həcmi", escapeHtml(data.area)],
    ["Yerləşmə", escapeHtml(data.location)],
    ["Qısa qeyd", escapeHtml(data.note)],
    ["Dil", data.locale.toUpperCase()],
    ["Səhifə", escapeHtml(data.sourcePage)],
  ];

  const rowsHtml = rows
    .filter(([, val]) => val.trim() !== "")
    .map(
      ([label, val]) =>
        `<tr>
          <td style="padding:10px 16px;font-weight:600;color:#4a4a4a;border-bottom:1px solid #f0f0f0;white-space:nowrap;vertical-align:top">${label}</td>
          <td style="padding:10px 16px;color:#1a1a1a;border-bottom:1px solid #f0f0f0">${val}</td>
        </tr>`
    )
    .join("\n");

  return `
<!DOCTYPE html>
<html lang="az">
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background:#f5f5f5">
  <div style="max-width:600px;margin:32px auto;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.06)">
    <div style="background:#7b0c30;padding:24px 32px">
      <h1 style="margin:0;color:#ffffff;font-size:20px;font-weight:700">GroveX — Yeni Müraciət</h1>
    </div>
    <div style="padding:24px 32px">
      <table style="width:100%;border-collapse:collapse;font-size:14px;line-height:1.6">
        ${rowsHtml}
      </table>
    </div>
    <div style="padding:16px 32px;background:#fafafa;border-top:1px solid #eee;font-size:12px;color:#9a9a9a;text-align:center">
      Bu mesaj grovex.az saytından avtomatik göndərilib
    </div>
  </div>
</body>
</html>`;
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

    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT || "465");
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const toEmail = process.env.CONTACT_TO_EMAIL;
    const fromEmail = process.env.CONTACT_FROM_EMAIL;

    if (!host || !user || !pass || !toEmail || !fromEmail) {
      console.error("Missing SMTP environment variables");
      return NextResponse.json(
        { error: "Server konfiqurasiya xətası" },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });

    const fullName = [body.firstName, body.lastName].filter(Boolean).join(" ");

    await transporter.sendMail({
      from: `"GroveX Website" <${fromEmail}>`,
      to: toEmail,
      subject: `Yeni müraciət — ${fullName || body.phone}`,
      html: buildEmailHtml(body),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact email error:", err);
    return NextResponse.json(
      { error: "E-poçt göndərilə bilmədi" },
      { status: 500 }
    );
  }
}
