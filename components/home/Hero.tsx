"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { CathedralVault } from "@/components/ui/Ornament";

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export function Hero() {
  return (
    <section className="relative isolate flex flex-col items-center overflow-hidden">
      <div className="atmosphere atmosphere-hero" aria-hidden="true">
        <div className="light-shaft absolute inset-x-[8%] top-0 h-[78%] opacity-80" />
        <CathedralVault className="absolute inset-x-[-8%] top-[-6%] h-[92%] w-[116%] opacity-90" />
        <div className="vignette absolute inset-0" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-ink to-transparent" />
      </div>

      <div className="page-wrap relative z-10 flex w-full flex-col items-center pt-32 pb-16 text-center md:pt-40 md:pb-20">
        <motion.p
          {...fade(0.15)}
          className="font-serif text-lg tracking-[0.18em] text-gold/90 italic md:text-xl"
        >
          Venite et videte
        </motion.p>
        <motion.h1
          {...fade(0.32)}
          className="mt-6 max-w-5xl font-serif text-[3.15rem] leading-[0.96] font-medium tracking-tight text-ivory italic sm:text-6xl md:text-7xl lg:text-[5.75rem]"
        >
          Come and See.
        </motion.h1>
        <motion.p
          {...fade(0.5)}
          className="mt-8 max-w-2xl text-[0.98rem] leading-8 text-stone-light md:text-lg"
        >
          OCIA — the Order of Christian Initiation of Adults — is how adults at
          St. Mary, Star of the Sea learn the Catholic faith. You are welcome
          if you are curious, were baptized in another tradition, or are
          returning to the Church.
        </motion.p>
        <motion.div
          {...fade(0.66)}
          className="mt-11 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-4"
        >
          <Button href="#next-class">See the next class</Button>
          <Button href="/about" variant="secondary">
            What is OCIA?
          </Button>
        </motion.div>
      </div>

      <motion.a
        href="#next-class"
        className="relative z-10 mb-8 flex flex-col items-center gap-3 text-gold"
        aria-label="Scroll to the next class"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.15, duration: 0.9 }}
      >
        <span className="scroll-cue block h-8 w-px bg-gold/70" aria-hidden="true" />
        <span className="font-display text-[0.58rem] tracking-[0.28em]">
          Next class
        </span>
      </motion.a>
    </section>
  );
}
