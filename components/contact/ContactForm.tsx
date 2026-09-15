"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";
import { CheckIcon } from "@/components/icons";

const sendFailedMessage =
  "We weren't able to send your message. Please try again.";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending) return;

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      message: String(data.get("message") ?? ""),
      website: String(data.get("website") ?? ""),
    };

    setError(null);
    setSending(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      let result: { ok?: boolean; error?: string } = {};
      try {
        result = (await response.json()) as { ok?: boolean; error?: string };
      } catch {
        setError(sendFailedMessage);
        return;
      }
      if (!response.ok || result.ok !== true) {
        setError(result.error || sendFailedMessage);
        return;
      }
      setSubmitted(true);
    } catch {
      setError(sendFailedMessage);
    } finally {
      setSending(false);
    }
  }

  if (submitted) {
    return (
      <div
        className="flex min-h-[28rem] flex-col items-center justify-center border-y border-gold/20 px-8 py-16 text-center"
        role="status"
        aria-live="polite"
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full border border-gold text-gold">
          <CheckIcon className="h-6 w-6" />
        </span>
        <h3 className="mt-6 font-serif text-3xl text-ivory">Message received.</h3>
        <p className="mt-4 max-w-md text-sm leading-7 text-stone-light">
          Thank you. Your message has been sent successfully.
        </p>
        <button
          type="button"
          className="mt-8 text-[0.68rem] tracking-[0.22em] text-gold uppercase"
          onClick={() => {
            setSubmitted(false);
            setError(null);
          }}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="relative border-y border-gold/18 py-8 md:py-10"
      noValidate={false}
      aria-busy={sending}
    >
      <div aria-hidden="true" className="sr-only">
        <label>
          Website
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            defaultValue=""
          />
        </label>
      </div>
      <p className="eyebrow">Write to us</p>
      <h3 className="mt-4 font-serif text-3xl text-ivory">Begin a conversation</h3>
      <div className="mt-8 grid gap-6">
        <Field
          label="Name"
          name="name"
          required
          autoComplete="name"
          disabled={sending}
          maxLength={120}
        />
        <Field
          label="Email"
          name="email"
          type="email"
          required
          autoComplete="email"
          disabled={sending}
          maxLength={254}
        />
        <Field
          label="Phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          optional
          disabled={sending}
          maxLength={40}
        />
        <label className="block">
          <span className="mb-2 block text-[0.68rem] tracking-[0.2em] text-gold uppercase">
            Message
          </span>
          <textarea
            name="message"
            required
            rows={6}
            maxLength={5000}
            disabled={sending}
            suppressHydrationWarning
            className="w-full resize-y border border-gold/20 bg-ink/50 px-4 py-3 text-ivory outline-none transition-colors placeholder:text-stone/70 focus:border-gold disabled:opacity-60"
            placeholder="Share a little of what brings you here."
          />
        </label>
        {error ? (
          <p role="alert" className="text-sm leading-7 text-stone-light">
            {error}
          </p>
        ) : null}
        <Button type="submit" className="w-full sm:w-auto" disabled={sending}>
          {sending ? "Sending…" : "Send Message"}
        </Button>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  optional,
  autoComplete,
  disabled,
  maxLength,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  optional?: boolean;
  autoComplete?: string;
  disabled?: boolean;
  maxLength?: number;
}) {
  return (
    <label className="block">
      <span className="mb-2 flex items-baseline justify-between text-[0.68rem] tracking-[0.2em] text-gold uppercase">
        <span>{label}</span>
        {optional ? <span className="text-stone">Optional</span> : null}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        disabled={disabled}
        maxLength={maxLength}
        suppressHydrationWarning
        className="w-full border border-gold/20 bg-ink/50 px-4 py-3 text-ivory outline-none transition-colors placeholder:text-stone/70 focus:border-gold disabled:opacity-60"
      />
    </label>
  );
}
