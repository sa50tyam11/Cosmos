"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const SERVICES = [
  { id: "01", title: "Brand Identity", desc: "Crafting unique visual systems and strategic messaging that define how a business connects with the world." },
  { id: "02", title: "Digital Experiences", desc: "Designing immersive web environments tailored for high-end engagement and conversion." },
  { id: "03", title: "Product Engineering", desc: "Building scalable, robust application architecture leveraging the latest in tech stacks." },
  { id: "04", title: "Creative Direction", desc: "Guiding the creative overarching vision across all touchpoints, from photography to 3D motion." }
];

export default function ServicesRail() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-32 bg-black border-t border-white/5">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-4xl md:text-7xl font-display font-bold tracking-tighter text-white mb-20">
          Our <span className="font-serif italic font-normal text-accent mb-2">Services</span>
        </h2>

        <div className="flex flex-col border-t border-white/20">
          {SERVICES.map((srv, i) => (
            <div 
              key={srv.id}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative border-b border-white/20 overflow-hidden cursor-pointer"
            >
              {/* Hover Fill */}
              <motion.div 
                initial={{ height: 0 }}
                animate={{ height: hoveredIndex === i ? "100%" : "0%" }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="absolute bottom-0 left-0 w-full bg-white z-0"
              />

              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between py-10 px-4 md:px-8 transition-colors duration-300">
                <div className="flex items-center gap-8 mb-4 md:mb-0">
                  <span className={`text-xl font-mono transition-colors duration-300 ${hoveredIndex === i ? 'text-black' : 'text-gray-500'}`}>
                    {srv.id}
                  </span>
                  <h3 className={`text-4xl md:text-6xl font-display font-medium tracking-tight transition-colors duration-300 ${hoveredIndex === i ? 'text-black' : 'text-white'}`}>
                    {srv.title}
                  </h3>
                </div>
                
                <div className="flex items-center justify-between md:w-1/3">
                  <AnimatePresence>
                    {hoveredIndex === i && (
                      <motion.p 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="text-black text-sm md:text-base pr-8 max-w-sm hidden md:block"
                      >
                        {srv.desc}
                      </motion.p>
                    )}
                  </AnimatePresence>
                  
                  <div className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${hoveredIndex === i ? 'border-black text-black bg-black/5 -translate-y-1 translate-x-1' : 'border-white/20 text-white'}`}>
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
