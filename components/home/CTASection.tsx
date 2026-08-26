"use client";

import Link from "next/link";
import { useChat } from "@/components/chat/ChatProvider";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { CathedralVault, Ornament } from "@/components/ui/Ornament";

export function CTASection() {
  const { openChat } = useChat();

  return (
    <Section tone="cta" className="py-32 md:py-40">
      <div className="atmosphere" aria-hidden="true">
        <div className="light-shaft absolute inset-x-[20%] top-0 h-full opacity-60" />
        <CathedralVault className="absolute inset-x-[-10%] -top-16 h-[90%] w-[120%] opacity-50" />
        <div className="vignette absolute inset-0" />
      </div>
      <div className="page-wrap relative text-center">
        <Reveal>
          <p className="font-serif text-lg tracking-[0.16em] text-gold/90 italic">
            Quaerite et invenietis
          </p>
          <h2 className="mx-auto mt-5 max-w-3xl font-serif text-5xl leading-[1.06] font-medium text-ivory italic md:text-7xl">
            You need not arrive certain.
          </h2>
          <Ornament className="mt-8" />
          <p className="mx-auto mt-7 max-w-lg text-lg leading-8 text-stone-light">
            Begin a conversation. Bring the questions you actually have.
          </p>
          <div className="mt-11 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Button href="/contact">Begin Your Journey</Button>
            <button
              type="button"
              onClick={() => openChat()}
              className="btn-secondary px-7 py-3.5 text-[0.7rem] font-medium uppercase tracking-[0.2em]"
            >
              Ask a question
            </button>
          </div>
          <p className="mt-8 text-sm text-stone">
            Or write to us on the{" "}
            <Link href="/contact" className="text-gold underline-offset-4 hover:underline">
              contact page
            </Link>
            .
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
