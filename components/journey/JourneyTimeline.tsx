"use client";

import { motion } from "framer-motion";
import { journeyStages } from "@/lib/journey";

export function JourneyTimeline() {
  return (
    <div className="relative">
      <div
        className="absolute top-2 bottom-2 left-3 w-px bg-gold/25 lg:hidden"
        aria-hidden="true"
      />
      <div
        className="absolute top-8 right-0 left-0 hidden h-px bg-gold/25 lg:block"
        aria-hidden="true"
      />
      <ol className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-4">
        {journeyStages.map((stage, index) => (
          <motion.li
            key={stage.number}
            className="relative pl-10 lg:pl-0 lg:pt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.7,
              delay: index * 0.07,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span className="absolute top-1.5 left-1.5 h-3.5 w-3.5 rounded-full border border-gold bg-navy lg:top-6 lg:left-0 lg:h-4 lg:w-4 lg:-translate-y-1/2" />
            <p className="font-display text-xs tracking-[0.28em] text-gold lg:pt-8">
              {stage.number}
            </p>
            <h3 className="mt-2 font-serif text-3xl text-ivory italic lg:mt-3 lg:text-2xl xl:text-3xl">
              {stage.title}
            </h3>
            <p className="mt-1 text-[0.68rem] tracking-[0.16em] text-stone-light uppercase">
              {stage.latin}
            </p>
            <p className="mt-4 text-sm leading-7 text-stone-light">
              {stage.description}
            </p>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}
