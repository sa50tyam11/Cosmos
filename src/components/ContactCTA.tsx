"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import { SectionWrapper } from "./SectionWrapper";
import { ArrowRight } from "lucide-react";

export default function ContactCTA() {
  return (
    <div id="contact" className="px-4 py-8">
      <SectionWrapper className="bg-accent text-white dark:bg-accent/20 dark:text-foreground rounded-[2.5rem] py-24 md:py-32 relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/10 dark:bg-accent/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        
        <div className="container mx-auto relative z-10 flex flex-col items-center text-center max-w-4xl">
          <motion.h2 
            variants={fadeUp}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-medium tracking-tight mb-8"
          >
            Ready to build <br/> what&apos;s next?
          </motion.h2>
          
          <motion.p 
            variants={fadeUp} 
            className="text-xl md:text-2xl text-white/80 dark:text-muted-foreground mb-12 max-w-2xl"
          >
            Let&apos;s discuss how we can help your brand stand out and achieve its digital goals.
          </motion.p>
          
          <motion.div variants={fadeUp}>
            <a 
              href="mailto:hello@softcampus.design"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-accent dark:bg-foreground dark:text-background rounded-full text-xl font-medium hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
              Start new project
              <ArrowRight className="w-6 h-6" />
            </a>
          </motion.div>
        </div>
      </SectionWrapper>
    </div>
  );
}
