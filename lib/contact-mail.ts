export const DEFAULT_CONTACT_EMAIL = "mrmatonski@icloud.com";
export const RESEND_TEST_FROM = "St. Mary OCIA <onboarding@resend.dev>";
export const SITE_ORIGIN = "stmary-ocia.com";

function serverEnv(name: string) {
  return process.env[name]?.trim() || "";
}

export const contactToEmail =
  serverEnv("CONTACT_EMAIL") ||
  serverEnv("CONTACT_TO_EMAIL") ||
  DEFAULT_CONTACT_EMAIL;

export type ContactFields = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export type ParseContactResult =
  | { ok: true; fields: ContactFields }
  | { ok: true; spam: true }
  | { ok: false; error: string };

export function parseContactBody(body: unknown): ParseContactResult {
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return { ok: false, error: "Invalid request." };
  }

  const record = body as Record<string, unknown>;

  for (const key of ["name", "email", "phone", "message", "website"] as const) {
    if (record[key] != null && typeof record[key] !== "string") {
      return { ok: false, error: "Invalid request." };
    }
  }

  const website = oneLine(asString(record.website)).slice(0, 200);
  if (website) {
    return { ok: true, spam: true };
  }

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

export function isResendSuccess(status: number, json: unknown) {
  if (status < 200 || status >= 300) return false;
  if (!json || typeof json !== "object") return false;
  return typeof (json as { id?: unknown }).id === "string";
}

export async function sendContactMessage(fields: ContactFields) {
  const to =
    serverEnv("CONTACT_EMAIL") ||
    serverEnv("CONTACT_TO_EMAIL") ||
    DEFAULT_CONTACT_EMAIL;
  const from = serverEnv("CONTACT_FROM_EMAIL") || RESEND_TEST_FROM;
  const subject = `New St. Mary OCIA Website Inquiry — ${fields.name}`;
  const submittedAt = formatSubmittedAt(new Date());
  const text = formatText(fields, submittedAt);
  const html = formatHtml(fields, submittedAt);
  const replyTo = fields.email;

  console.info(`Contact form: delivering via configured provider from ${from} to ${to}`);

  if (serverEnv("RESEND_API_KEY")) {
    await sendWithResend({ to, from, replyTo, subject, text, html });
    return;
  }

  if (serverEnv("SMTP_HOST")) {
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
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) && !value.includes(" ");
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function formatSubmittedAt(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
    timeStyle: "long",
    timeZone: "America/Los_Angeles",
  }).format(date);
}

function formatText(fields: ContactFields, submittedAt: string) {
  return [
    "NEW WEBSITE INQUIRY",
    "St. Mary, Star of the Sea OCIA",
    "",
    `Name:`,
    fields.name,
    "",
    `Email:`,
    fields.email,
    "",
    `Phone:`,
    fields.phone || "(not provided)",
    "",
    `Message:`,
    fields.message,
    "",
    `Submitted From:`,
    SITE_ORIGIN,
    "",
    `Submitted:`,
    submittedAt,
  ].join("\n");
}

function formatHtml(fields: ContactFields, submittedAt: string) {
  const rows = [
    ["Name", fields.name],
    ["Email", fields.email],
    ["Phone", fields.phone || "(not provided)"],
    ["Message", fields.message],
    ["Submitted From", SITE_ORIGIN],
    ["Submitted", submittedAt],
  ]
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:10px 0 4px;font-size:12px;letter-spacing:0.12em;text-transform:uppercase;color:#8a7340;font-family:Arial,Helvetica,sans-serif;">
            ${escapeHtml(label)}
          </td>
        </tr>
        <tr>
          <td style="padding:0 0 16px;font-size:16px;line-height:1.6;color:#1c1914;font-family:Georgia,'Times New Roman',serif;white-space:pre-wrap;">
            ${escapeHtml(value)}
          </td>
        </tr>`,
    )
    .join("");

  return `<!DOCTYPE html>
<html>
  <body style="margin:0;padding:0;background:#f4f1ea;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f1ea;padding:24px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border:1px solid #e6e0d4;padding:32px;">
            <tr>
              <td style="font-family:Arial,Helvetica,sans-serif;font-size:12px;letter-spacing:0.18em;text-transform:uppercase;color:#8a7340;">
                New website inquiry
              </td>
            </tr>
            <tr>
              <td style="padding:8px 0 24px;font-family:Georgia,'Times New Roman',serif;font-size:24px;color:#1c1914;">
                St. Mary, Star of the Sea OCIA
              </td>
            </tr>
            ${rows}
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
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
  const apiKey = serverEnv("RESEND_API_KEY");
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
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

  const raw = await response.text();
  let json: unknown = null;
  try {
    json = raw ? JSON.parse(raw) : null;
  } catch {
    json = null;
  }

  if (!isResendSuccess(response.status, json)) {
    console.error(
      "Contact form: Resend did not accept the message.",
      response.status,
      raw.slice(0, 500),
    );
    throw new Error(`Resend error ${response.status}`);
  }
}

async function sendWithSmtp(payload: MailPayload) {
  const nodemailer = await import("nodemailer");
  const port = Number(serverEnv("SMTP_PORT") || 587);
  const transporter = nodemailer.createTransport({
    host: serverEnv("SMTP_HOST"),
    port,
    secure: serverEnv("SMTP_SECURE") === "true" || port === 465,
    auth:
      serverEnv("SMTP_USER") && serverEnv("SMTP_PASS")
        ? { user: serverEnv("SMTP_USER"), pass: serverEnv("SMTP_PASS") }
        : undefined,
  });

  const info = await transporter.sendMail({
    from: serverEnv("SMTP_FROM") || payload.from,
    to: payload.to,
    replyTo: payload.replyTo,
    subject: payload.subject,
    text: payload.text,
    html: payload.html,
  });

  const rejected = info.rejected ?? [];
  if (rejected.length > 0) {
    console.error("Contact form: SMTP rejected the message.", rejected);
    throw new Error("SMTP rejected the message.");
  }
}
