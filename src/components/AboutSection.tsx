"use client";

import { SectionWrapper } from "./SectionWrapper";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  return (
    <SectionWrapper id="about">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        {/* Left text */}
        <div className="w-full lg:w-1/2 flex flex-col items-start">
          <motion.h2 
            variants={fadeUp}
            className="text-3xl md:text-5xl font-display font-medium tracking-tight mb-8 leading-[1.2]"
          >
            At Soft Campus, we transform bold ideas into immersive digital experiences.
          </motion.h2>
          
          <motion.div variants={fadeUp} className="space-y-6 text-lg text-muted-foreground mb-10">
            <p>
              Founded in 2020, we believe that the best digital products sit at the intersection of beautiful design and robust engineering. We don&apos;t just build websites; we build scalable platforms that empower businesses to lead their industries.
            </p>
            <p>
              Our team of strategists, designers, and developers work cohesively to deliver premium quality at speed.
            </p>
          </motion.div>

          <motion.div variants={fadeUp}>
            <Link 
              href="#contact" 
              className="inline-flex items-center text-foreground font-medium hover:text-accent transition-colors gap-2 group"
            >
              <span className="border-b border-transparent group-hover:border-accent transition-colors">More about us</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Right visual */}
        <div className="w-full lg:w-1/2 relative h-[500px]">
          <motion.div
             animate={{ y: [0, -15, 0] }}
             transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
             className="w-full h-full rounded-3xl bg-surface border border-border shadow-2xl relative overflow-hidden flex items-center justify-center p-8"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-transparent z-0" />
            <div className="relative z-10 w-full h-full border border-border/50 rounded-2xl flex flex-col gap-4 p-6 bg-background/50 backdrop-blur-sm">
              {/* Abstract lines representing code / design */}
              <div className="w-1/3 h-4 rounded-full bg-accent/20" />
              <div className="w-3/4 h-8 rounded-lg bg-foreground/5" />
              <div className="w-full h-32 rounded-lg bg-gradient-to-r from-accent/20 to-blue-500/20" />
              <div className="w-1/2 h-8 rounded-lg bg-foreground/5 mt-auto" />
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
