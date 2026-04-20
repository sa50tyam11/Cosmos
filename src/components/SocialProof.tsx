"use client";

import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

const METRICS = [
  { value: "3x Faster", label: "Time to launch compared to traditional agencies." },
  { value: "+280%", label: "Average increase in engagement for key clients." },
  { value: "Top 1%", label: "Ranked among elite digital experience studios globally." },
];

const LOGOS = ["Nextura", "Novahq", "Arclight", "Meridian", "Quantum"];

export default function SocialProof() {
  return (
    <section className="relative py-24 bg-black border-t border-white/5 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[150px] -translate-y-1/2 mix-blend-screen pointer-events-none z-0" />

      <div className="container relative z-10 mx-auto px-4">
        {/* Logos */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="flex flex-wrap justify-center gap-12 md:gap-24 mb-24 opacity-50">
          {LOGOS.map((logo, idx) => (
            <span key={idx} className="text-xl md:text-3xl font-display font-medium text-white uppercase tracking-widest">
              {logo}
            </span>
          ))}
        </motion.div>

        {/* Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/10 pt-16">
          {METRICS.map((metric, idx) => (
            <motion.div 
              key={idx} 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} 
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: idx * 0.1 } }
              }}
              className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-white/5 transition-colors"
            >
              <h4 className="text-5xl md:text-6xl font-display font-medium text-white mb-4">
                {metric.value}
              </h4>
              <p className="text-gray-400 text-lg max-w-xs">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
