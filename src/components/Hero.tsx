"use client";

import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Video Background */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-40 pointer-events-none"
      >
        <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260319_055001_8e16d972-3b2b-441c-86ad-2901a54682f9.mp4" type="video/mp4" />
      </video>

      {/* Intense Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-[70vh] h-[70vh] bg-purple-600/50 rounded-full blur-[200px] mix-blend-screen pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-[80vh] h-[80vh] bg-blue-600/50 rounded-full blur-[250px] mix-blend-screen pointer-events-none z-0" />
      
      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black pointer-events-none z-0" />

      <div className="container relative z-10 mx-auto px-4 flex flex-col items-center text-center">
        <div className="max-w-5xl flex flex-col items-center justify-center">
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium tracking-wide text-gray-300">Premium Digital Agency</span>
          </motion.div>

          {/* Staggered Heading */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-medium tracking-tighter text-white leading-[0.9] mb-8 overflow-hidden flex flex-col items-center justify-center">
            <motion.span custom={1} initial="hidden" animate="visible" variants={textVariants} className="block">
              We build
            </motion.span>
            <motion.span custom={2} initial="hidden" animate="visible" variants={textVariants} className="block font-serif italic text-accent font-light mt-2 mb-2">
              digital assets
            </motion.span>
            <motion.span custom={3} initial="hidden" animate="visible" variants={textVariants} className="block">
              that matter.
            </motion.span>
          </h1>

          <motion.p 
            custom={4} 
            initial="hidden" 
            animate="visible" 
            variants={textVariants} 
            className="text-xl md:text-2xl text-gray-400 font-medium max-w-2xl mx-auto mb-12"
          >
            Elevating brands through strategic design and high-end engineering.
          </motion.p>

          <motion.div custom={5} initial="hidden" animate="visible" variants={textVariants}>
            <a 
              href="#work"
              className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-white text-black font-semibold text-lg hover:scale-105 transition-transform"
            >
              Explore our work
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
