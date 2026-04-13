"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
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

      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-[50vh] h-[50vh] bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-[60vh] h-[60vh] bg-blue-600/20 rounded-full blur-[150px] mix-blend-screen pointer-events-none z-0" />
      
      {/* Subtle overlay (grain can be applied via global CSS or an SVG filter, using a soft gradient here to simulate depth mapping) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black pointer-events-none z-0" />

      <div className="container relative z-10 mx-auto px-4 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium tracking-wide text-gray-300">Premium Digital Agency</span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-medium tracking-tighter text-white leading-[0.9] mb-8">
            We build <br />
            <span className="font-serif italic text-accent font-light">digital assets</span> <br />
            that matter.
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 font-medium max-w-2xl mx-auto mb-12">
            Elevating brands through strategic design and high-end engineering.
          </p>

          <a 
            href="#work"
            className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-white text-black font-semibold text-lg hover:scale-105 transition-transform"
          >
            Explore our work
          </a>
        </motion.div>
      </div>
    </section>
  );
}
