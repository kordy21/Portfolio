import { SITE_CONFIG } from "@/lib/constants";

const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return Response.json({ error: "Server not configured" }, { status: 500 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const name = String(body.name ?? "").trim().slice(0, 100);
  const email = String(body.email ?? "").trim().slice(0, 200);
  const subject = String(body.subject ?? "").trim().slice(0, 200);
  const message = String(body.message ?? "").trim().slice(0, 5000);
  const honeypot = String(body.website ?? "");

  // Bots fill hidden fields: pretend success
  if (honeypot) return Response.json({ ok: true });

  if (!name || !subject || message.length < 10 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: "Invalid input" }, { status: 400 });
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [SITE_CONFIG.email],
      reply_to: email,
      subject: `[Portfolio] ${subject}`,
      html: `<p><b>Name:</b> ${escapeHtml(name)}</p>
<p><b>Email:</b> ${escapeHtml(email)}</p>
<p><b>Subject:</b> ${escapeHtml(subject)}</p>
<p><b>Message:</b></p>
<p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>`,
    }),
  });

  if (!res.ok) {
    return Response.json({ error: "Send failed" }, { status: 502 });
  }
  return Response.json({ ok: true });
}
