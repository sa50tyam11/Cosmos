"use client";

import { SectionWrapper } from "./SectionWrapper";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

const METRICS = [
  { value: "3x Faster", label: "Time to launch compared to traditional agencies." },
  { value: "+280%", label: "Average increase in engagement for key clients." },
  { value: "Top 1%", label: "Ranked among elite digital experience studios globally." },
];

const LOGOS = ["Nextura", "Novahq", "Arclight", "Meridian", "Quantum"];

export default function SocialProof() {
  return (
    <SectionWrapper className="bg-surface py-24">
      <div className="container mx-auto px-4">
        {/* Logos */}
        <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-12 md:gap-24 mb-24 opacity-60">
          {LOGOS.map((logo, idx) => (
            <span key={idx} className="text-xl md:text-3xl font-display font-bold text-muted-foreground uppercase tracking-widest">
              {logo}
            </span>
          ))}
        </motion.div>

        {/* Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-border pt-16">
          {METRICS.map((metric, idx) => (
            <motion.div 
              key={idx} 
              variants={fadeUp}
              className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-muted/50 transition-colors"
            >
              <h4 className="text-5xl md:text-6xl font-display font-medium text-foreground mb-4">
                {metric.value}
              </h4>
              <p className="text-muted-foreground text-lg max-w-xs">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
