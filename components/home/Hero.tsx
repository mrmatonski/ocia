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
    <section className="relative isolate flex min-h-svh items-center overflow-hidden">
      {/* TODO: Replace atmospheric placeholder with cathedral / sacred photography. */}
      <div className="atmosphere atmosphere-hero" aria-hidden="true">
        <div className="light-shaft absolute inset-x-[8%] top-0 h-[78%] opacity-80" />
        <CathedralVault className="absolute inset-x-[-8%] top-[-6%] h-[92%] w-[116%] opacity-90" />
        <div className="vignette absolute inset-0" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-ink to-transparent" />
      </div>

      <div className="page-wrap relative z-10 flex w-full flex-col items-center py-28 text-center md:py-32">
        <motion.p
          {...fade(0.15)}
          className="font-serif text-lg tracking-[0.18em] text-gold/90 italic md:text-xl"
        >
          Venite et videte
        </motion.p>
        <motion.h1
          {...fade(0.32)}
          className="mt-6 max-w-5xl font-serif text-[3.35rem] leading-[0.92] font-medium tracking-tight text-ivory italic sm:text-7xl md:text-8xl lg:text-[7.4rem]"
        >
          Come and See.
        </motion.h1>
        <motion.p
          {...fade(0.5)}
          className="mt-8 max-w-xl text-[0.98rem] leading-8 text-stone-light md:text-lg"
        >
          Explore the Catholic faith, encounter Christ, and discover what it
          means to enter into the life of the Church.
        </motion.p>
        <motion.div
          {...fade(0.66)}
          className="mt-11 flex flex-col items-center gap-3 sm:flex-row sm:gap-4"
        >
          <Button href="/about">Explore OCIA</Button>
          <Button href="/schedule" variant="secondary">
            View Class Schedule
          </Button>
        </motion.div>
      </div>

      <motion.a
        href="#introduction"
        className="absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 text-gold"
        aria-label="Scroll to explore"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.15, duration: 0.9 }}
      >
        <span className="scroll-cue block h-10 w-px bg-gold/70" aria-hidden="true" />
        <span className="font-display text-[0.58rem] tracking-[0.28em]">
          Scroll
        </span>
      </motion.a>
    </section>
  );
}
