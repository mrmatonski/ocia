"use client";

import { motion } from "framer-motion";
import { journeyStages } from "@/lib/journey";

export function JourneyTimeline() {

  return (
    <div>
      <div className="hidden lg:block">
        <div className="relative">
          <div className="absolute top-8 right-0 left-0 h-px bg-gold/25" aria-hidden="true" />
          <ol className="grid grid-cols-5 gap-4">
            {journeyStages.map((stage, index) => (
              <motion.li
                key={stage.number}
                className="relative pt-4"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="absolute top-6 left-0 h-4 w-4 -translate-y-1/2 rounded-full border border-gold bg-navy" />
                <p className="pt-8 font-display text-xs tracking-[0.28em] text-gold">
                  {stage.number}
                </p>
                <h3 className="mt-3 font-serif text-2xl text-ivory italic xl:text-3xl">
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
      </div>

      <div className="relative lg:hidden">
        <div className="absolute top-2 bottom-2 left-3 w-px bg-gold/25" aria-hidden="true" />
        <ol className="space-y-8">
        {journeyStages.map((stage, index) => (
          <motion.li
            key={stage.number}
            className="relative pl-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="absolute top-1.5 left-1.5 h-3.5 w-3.5 rounded-full border border-gold bg-navy" />
            <p className="font-display text-xs tracking-[0.28em] text-gold">
              {stage.number}
            </p>
            <h3 className="mt-2 font-serif text-3xl text-ivory italic">{stage.title}</h3>
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
    </div>
  );
}
