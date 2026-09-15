#!/usr/bin/env node
/**
 * Hits /api/contact with representative payloads.
 * Usage: node scripts/verify-contact.mjs [baseUrl]
 */
const base = process.argv[2] || "http://127.0.0.1:3001";

async function post(body, extra = {}) {
  const response = await fetch(`${base}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...extra.headers },
    body: typeof body === "string" ? body : JSON.stringify(body),
  });
  let json = null;
  try {
    json = await response.json();
  } catch {
    json = null;
  }
  return { status: response.status, json };
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

async function main() {
  const missing = await post({ name: "", email: "", message: "" });
  assert(missing.status === 400, `missing fields expected 400, got ${missing.status}`);
  assert(!missing.json?.ok, "missing fields must not report ok");

  const invalidEmail = await post({
    name: "Test User",
    email: "not-an-email",
    phone: "503-555-1234",
    message: "Hello",
  });
  assert(
    invalidEmail.status === 400,
    `invalid email expected 400, got ${invalidEmail.status}`,
  );
  assert(!invalidEmail.json?.ok, "invalid email must not report ok");

  const malformed = await post("{not-json");
  assert(malformed.status === 400, `malformed JSON expected 400, got ${malformed.status}`);

  const typedWrong = await post({
    name: ["array"],
    email: "person@example.com",
    message: "Hello",
  });
  assert(typedWrong.status === 400, `malformed fields expected 400, got ${typedWrong.status}`);

  const honeypot = await post({
    name: "Bot",
    email: "bot@example.com",
    message: "spam",
    website: "https://spam.example",
  });
  assert(honeypot.status === 200 && honeypot.json?.ok === true, "honeypot should look successful");

  const valid = await post({
    name: "Website Form Test",
    email: "ocia-form-test@example.com",
    phone: "503-555-1234",
    message:
      "This is a production-path test of the St. Mary OCIA contact form. Please ignore if received.",
    website: "",
  });

  console.log(
    JSON.stringify(
      {
        missing: missing.status,
        invalidEmail: invalidEmail.status,
        malformed: malformed.status,
        typedWrong: typedWrong.status,
        honeypot: { status: honeypot.status, ok: honeypot.json?.ok },
        valid: { status: valid.status, ok: valid.json?.ok, error: valid.json?.error },
      },
      null,
      2,
    ),
  );

  if (valid.status === 200 && valid.json?.ok === true) {
    console.log("VALID_SEND_ACCEPTED");
  } else if (valid.status === 503) {
    console.log("VALID_SEND_PROVIDER_REJECTED");
  } else {
    throw new Error(`unexpected valid submission result: ${valid.status} ${JSON.stringify(valid.json)}`);
  }
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
