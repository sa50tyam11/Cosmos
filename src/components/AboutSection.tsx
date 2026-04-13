"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function AboutSection() {
  return (
    <section id="about" className="relative py-32 bg-black overflow-hidden border-t border-white/5">
      {/* Intense Glow */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[150px] -translate-y-1/2 -translate-x-1/2 mix-blend-screen pointer-events-none z-0" />
      
      <div className="container relative z-10 mx-auto px-4 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        {/* Left text */}
        <div className="w-full lg:w-1/2 flex flex-col items-start">
          <motion.h2 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
            className="text-4xl md:text-6xl font-display font-medium tracking-tight mb-8 leading-[1.1] text-white"
          >
            At COSMOS, we transform <span className="font-serif italic font-light text-accent">bold ideas</span> into immersive digital experiences.
          </motion.h2>
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="space-y-6 text-xl text-gray-400 mb-10 leading-relaxed">
            <p>
              Founded in 2020, we believe that the best digital products sit at the intersection of beautiful design and robust engineering. We don&apos;t just build websites; we build scalable platforms that empower businesses.
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            <Link 
              href="#contact" 
              className="inline-flex items-center text-white font-medium hover:text-accent transition-colors gap-2 group"
            >
              <span className="border-b border-transparent group-hover:border-accent transition-colors">More about us</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Right visual */}
        <div className="w-full lg:w-1/2 relative h-[500px]">
          <motion.div
             initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }}
             className="w-full h-full rounded-[2rem] bg-white/5 border border-white/10 shadow-2xl relative overflow-hidden flex items-center justify-center p-8 backdrop-blur-sm"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent z-0" />
            <div className="relative z-10 w-full h-full border border-white/10 rounded-2xl flex flex-col gap-4 p-6 bg-black/50 backdrop-blur-md">
              <div className="w-1/3 h-4 rounded-full bg-accent/40" />
              <div className="w-3/4 h-8 rounded-lg bg-white/10" />
              <div className="w-full h-32 rounded-lg bg-gradient-to-r from-accent/30 to-blue-500/30" />
              <div className="w-1/2 h-8 rounded-lg bg-white/10 mt-auto" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
