"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const PROJECTS = [
  { title: "Aura", category: "Brand Identity", src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop" },
  { title: "Nova", category: "Web Platform", src: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=800&auto=format&fit=crop" },
  { title: "Zenith", category: "Mobile App", src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop" },
];

export default function WorksPreview() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const xText = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  
  return (
    <section ref={containerRef} style={{ position: 'relative' }} id="work" className="relative py-32 bg-black overflow-hidden pointer-events-none">
      {/* Massive Background Text */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[200%] whitespace-nowrap opacity-[0.03] pointer-events-none select-none z-0">
        <motion.h2 
          style={{ x: xText }}
          className="text-[20vw] font-display font-bold tracking-tighter text-white inline-block"
        >
          SELECTED <span className="font-serif italic font-normal">WORK</span> SELECTED <span className="font-serif italic font-normal">WORK</span>
        </motion.h2>
      </div>

      <div className="container relative z-10 mx-auto px-4 lg:px-8 pointer-events-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div>
            <h2 className="text-4xl md:text-6xl font-display font-semibold tracking-tight text-white mb-4">
              Featured projects.
            </h2>
            <p className="text-xl text-gray-400">A selection of our recent endeavor.</p>
          </div>
          <a href="#" className="hidden md:inline-flex mt-8 mb-2 items-center gap-2 text-white border-b border-white/30 pb-1 hover:border-white transition-colors">
            View all work
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group flex flex-col ${i === 1 ? 'lg:mt-16' : ''}`}
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[2rem] bg-white/5 mb-6">
                <Image 
                  src={project.src} 
                  alt={project.title} 
                  fill 
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110" 
                />
              </div>
              <h3 className="text-2xl font-display font-medium text-white tracking-tight">{project.title}</h3>
              <p className="text-gray-400">{project.category}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
