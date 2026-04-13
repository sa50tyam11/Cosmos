"use client";

import { SectionWrapper } from "./SectionWrapper";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

const PILLARS = [
  {
    num: "01",
    title: "Brand Vision",
    desc: "We dive deep into your DNA to define positioning that resonates and differentiates in crowded markets."
  },
  {
    num: "02",
    title: "Digital Canvas",
    desc: "Crafting beautiful, intuitive interfaces that convert users and elevate your visual language."
  },
  {
    num: "03",
    title: "Future Forward",
    desc: "Scalable tech stacks and modern architectures ensuring your product grows alongside your ambition."
  }
];

export default function ProcessHighlights() {
  return (
    <SectionWrapper id="approach" stagger className="bg-surface">
      <div className="container mx-auto px-4">
        <motion.div variants={fadeUp} className="mb-16 md:mb-24">
          <h2 className="text-4xl md:text-6xl font-display font-medium tracking-tight max-w-2xl">
            A proven framework <br className="hidden md:block"/> for digital success.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {PILLARS.map((pillar, idx) => (
            <motion.div key={idx} variants={fadeUp} className="flex flex-col">
              <span className="text-accent text-sm font-mono tracking-wider mb-6 border-b border-border pb-4 block">
                {pillar.num}
              </span>
              <h3 className="text-2xl font-display mb-4">{pillar.title}</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
