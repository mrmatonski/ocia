"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";
import { CheckIcon } from "@/components/icons";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
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
          Thank you. This form does not send email by itself. Please also call
          the parish office at (503) 325-3671 or write to
          marty@stmaryastoria.com so we can reply.
        </p>
        <button
          type="button"
          className="mt-8 text-[0.68rem] tracking-[0.22em] text-gold uppercase"
          onClick={() => setSubmitted(false)}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="border-y border-gold/18 py-8 md:py-10"
      noValidate={false}
    >
      <p className="eyebrow">Write to us</p>
      <h3 className="mt-4 font-serif text-3xl text-ivory">Begin a conversation</h3>
      <div className="mt-8 grid gap-6">
        <Field label="Name" name="name" required autoComplete="name" />
        <Field label="Email" name="email" type="email" required autoComplete="email" />
        <Field label="Phone" name="phone" type="tel" autoComplete="tel" optional />
        <label className="block">
          <span className="mb-2 block text-[0.68rem] tracking-[0.2em] text-gold uppercase">
            Message
          </span>
          <textarea
            name="message"
            required
            rows={6}
            suppressHydrationWarning
            className="w-full resize-y border border-gold/20 bg-ink/50 px-4 py-3 text-ivory outline-none transition-colors placeholder:text-stone/70 focus:border-gold"
            placeholder="Share a little of what brings you here."
          />
        </label>
        <Button type="submit" className="w-full sm:w-auto">
          Send Message
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
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  optional?: boolean;
  autoComplete?: string;
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
        suppressHydrationWarning
        className="w-full border border-gold/20 bg-ink/50 px-4 py-3 text-ivory outline-none transition-colors placeholder:text-stone/70 focus:border-gold"
      />
    </label>
  );
}
