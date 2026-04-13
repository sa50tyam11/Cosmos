"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function ContactCTA() {
  return (
    <div id="contact" className="px-4 py-8 bg-black">
      <section className="bg-white/5 border border-white/10 rounded-[2.5rem] py-24 md:py-32 relative overflow-hidden backdrop-blur-sm">
        {/* Intense Glow Effects */}
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-purple-600/30 rounded-full blur-[150px] -translate-y-1/2 -translate-x-1/2 mix-blend-screen pointer-events-none" />
        
        <div className="container mx-auto relative z-10 flex flex-col items-center text-center max-w-4xl px-4">
          <motion.h2 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-medium tracking-tight mb-8 text-white"
          >
            Ready to build <br/> <span className="font-serif italic font-light text-accent">what&apos;s next?</span>
          </motion.h2>
          
          <motion.p 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} 
            className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl"
          >
            Let&apos;s discuss how we can help your brand stand out and achieve its digital goals.
          </motion.p>
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            <a 
              href="mailto:hello@cosmos.design"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-black rounded-full text-xl font-medium hover:scale-105 hover:bg-gray-200 shadow-2xl transition-all duration-300"
            >
              Start new project
              <ArrowRight className="w-6 h-6" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
