import { contactPlaceholders, site } from "@/lib/site";

export const contactToEmail =
  process.env.CONTACT_TO_EMAIL?.trim() || contactPlaceholders.email;

const defaultFrom = `${site.fullName} at ${site.parish} <noreply@stmaryastoria.com>`;

export type ContactFields = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export function parseContactBody(body: unknown):
  | { ok: true; fields: ContactFields }
  | { ok: false; error: string } {
  if (!body || typeof body !== "object") {
    return { ok: false, error: "Invalid request." };
  }

  const record = body as Record<string, unknown>;
  const name = oneLine(asString(record.name)).slice(0, 120);
  const email = oneLine(asString(record.email)).slice(0, 254);
  const phone = oneLine(asString(record.phone)).slice(0, 40);
  const message = asString(record.message).trim().slice(0, 5000);

  if (!name || !email || !message) {
    return {
      ok: false,
      error: "Please include your name, email, and a message.",
    };
  }

  if (!isEmail(email)) {
    return { ok: false, error: "Please enter a valid email address." };
  }

  return { ok: true, fields: { name, email, phone, message } };
}

export async function sendContactMessage(fields: ContactFields) {
  const to = contactToEmail;
  const from = process.env.CONTACT_FROM_EMAIL?.trim() || defaultFrom;
  const subject = `OCIA inquiry from ${fields.name}`;
  const text = formatText(fields);
  const html = formatHtml(fields);
  const replyTo = fields.email;

  if (process.env.RESEND_API_KEY) {
    await sendWithResend({ to, from, replyTo, subject, text, html });
    return;
  }

  if (process.env.SMTP_HOST) {
    await sendWithSmtp({ to, from, replyTo, subject, text, html });
    return;
  }

  throw new Error(
    "Email is not configured. Set RESEND_API_KEY or SMTP_HOST (see .env.example).",
  );
}

function asString(value: unknown) {
  return typeof value === "string" ? value : "";
}

function oneLine(value: string) {
  return value.replace(/[\r\n\u0000]+/g, " ").trim();
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function formatText({ name, email, phone, message }: ContactFields) {
  const lines = [
    `Name: ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : "Phone: (not provided)",
    "",
    message,
  ];
  return lines.join("\n");
}

function formatHtml({ name, email, phone, message }: ContactFields) {
  const rows = [
    ["Name", name],
    ["Email", email],
    ["Phone", phone || "(not provided)"],
  ]
    .map(
      ([label, value]) =>
        `<p><strong>${escapeHtml(label)}:</strong> ${escapeHtml(value)}</p>`,
    )
    .join("");

  return `${rows}<p>${escapeHtml(message).replaceAll("\n", "<br />")}</p>`;
}

type MailPayload = {
  to: string;
  from: string;
  replyTo: string;
  subject: string;
  text: string;
  html: string;
};

async function sendWithResend(payload: MailPayload) {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: payload.from,
      to: [payload.to],
      reply_to: payload.replyTo,
      subject: payload.subject,
      text: payload.text,
      html: payload.html,
    }),
  });

  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`Resend error ${response.status}: ${detail.slice(0, 500)}`);
  }
}

async function sendWithSmtp(payload: MailPayload) {
  const nodemailer = await import("nodemailer");
  const port = Number(process.env.SMTP_PORT ?? 587);
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure: process.env.SMTP_SECURE === "true" || port === 465,
    auth:
      process.env.SMTP_USER && process.env.SMTP_PASS
        ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
        : undefined,
  });

  await transporter.sendMail({
    from: process.env.SMTP_FROM?.trim() || payload.from,
    to: payload.to,
    replyTo: payload.replyTo,
    subject: payload.subject,
    text: payload.text,
    html: payload.html,
  });
}
