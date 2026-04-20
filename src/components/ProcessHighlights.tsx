"use client";

import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

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
    <section id="approach" className="relative py-32 bg-black overflow-hidden border-t border-white/5">
      {/* Background Glows */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2 mix-blend-screen pointer-events-none z-0" />

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} 
          className="mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-display font-medium tracking-tight max-w-2xl text-white">
            A proven framework <br className="hidden md:block"/> for <span className="font-serif italic font-light text-accent">digital success.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {PILLARS.map((pillar, idx) => (
            <motion.div 
              key={idx} 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} 
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: idx * 0.1 } }
              }} 
              className="flex flex-col"
            >
              <span className="text-accent text-sm font-mono tracking-wider mb-6 border-b border-white/10 pb-4 block">
                {pillar.num}
              </span>
              <h3 className="text-2xl font-display mb-4 text-white">{pillar.title}</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
