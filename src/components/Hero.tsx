"use client";

import React, { useEffect, useMemo, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import SplitType from "split-type";
import Section from "@/components/Section";
import CountUp from "@/components/ui/CountUp";

export default function Hero() {
  const labelRef = useRef<HTMLDivElement | null>(null);
  const headlineRef = useRef<HTMLHeadingElement | null>(null);
  const subRef = useRef<HTMLParagraphElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);

  const reduce = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
  }, []);

  useEffect(() => {
    if (reduce) return;
    if (!headlineRef.current) return;

    const split = new SplitType(headlineRef.current, { types: "lines,words", lineClass: "split-line" });
    const words = split.words ?? [];

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo(labelRef.current, { y: 10, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, 0);
    tl.fromTo(
      words,
      { yPercent: 110, opacity: 0 },
      { yPercent: 0, opacity: 1, duration: 1.05, stagger: 0.018 },
      0.05
    );
    tl.fromTo(subRef.current, { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.85 }, 0.55);
    tl.fromTo(ctaRef.current, { y: 14, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, 0.72);

    return () => split.revert();
  }, [reduce]);

  return (
    <Section id="hero" className="min-h-[92vh] overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 pt-16 md:pt-20">
        <div className="relative">
          <div className="absolute -inset-x-10 -top-8 -z-10 h-[520px] rounded-[48px] bg-[radial-gradient(55%_65%_at_40%_30%,rgba(255,45,45,0.20),transparent_60%),radial-gradient(50%_50%_at_80%_10%,rgba(255,45,45,0.12),transparent_60%)] blur-2xl" />

          <div
            ref={labelRef}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium tracking-wide text-white/80 backdrop-blur-md"
          >
            <span className="inline-flex h-2 w-2 rounded-full bg-[#ff2b2b] shadow-[0_0_24px_rgba(255,45,45,0.6)]" />
            <span>🏆 Award-Winning IT Company · Est. 2012 · Trusted Globally</span>
          </div>

          <h1
            ref={headlineRef}
            className="mt-8 max-w-4xl text-balance font-display text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-white md:text-7xl"
          >
            We Build Software That
            <br />
            Moves Your Business Forward.
          </h1>

          <p ref={subRef} className="mt-6 max-w-3xl text-pretty text-lg text-white/70 md:text-xl">
            From custom web apps to enterprise AI systems — Soft Campus delivers production-ready digital solutions for
            startups, enterprises, and governments across India, USA, Russia, and Armenia.
          </p>

          <div ref={ctaRef} className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <motion.a
              whileHover={reduce ? undefined : { scale: 1.02 }}
              whileTap={reduce ? undefined : { scale: 0.98 }}
              href="#contact"
              className="group inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-black shadow-[0_18px_60px_rgba(255,45,45,0.12)]"
            >
              Start Your Project <span className="ml-2 transition-transform group-hover:translate-x-0.5">→</span>
            </motion.a>
            <motion.a
              whileHover={reduce ? undefined : { scale: 1.02 }}
              whileTap={reduce ? undefined : { scale: 0.98 }}
              href="#work"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/14 bg-white/5 px-6 text-sm font-semibold text-white/90 backdrop-blur-md hover:bg-white/8"
            >
              See Our Work
            </motion.a>
            <div className="text-sm text-white/55 sm:ml-4">Headquartered in New Delhi · Pan-India Operations · Global Delivery</div>
          </div>

          <div className="mt-12 grid gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md md:grid-cols-3 md:gap-4 md:p-5">
            <div className="rounded-xl bg-black/30 p-4">
              <div className="text-3xl font-semibold tracking-tight text-white">
                <CountUp to={12} suffix="+" />{" "}
                <span className="text-base font-medium text-white/60">Years</span>
              </div>
              <div className="mt-1 text-sm text-white/60">Of Delivering Excellence</div>
            </div>
            <div className="rounded-xl bg-black/30 p-4">
              <div className="text-3xl font-semibold tracking-tight text-white">
                <CountUp to={500} suffix="+" />{" "}
                <span className="text-base font-medium text-white/60">Projects</span>
              </div>
              <div className="mt-1 text-sm text-white/60">Successfully Delivered</div>
            </div>
            <div className="rounded-xl bg-black/30 p-4">
              <div className="text-3xl font-semibold tracking-tight text-white">
                <CountUp to={1000} suffix="+" />{" "}
                <span className="text-base font-medium text-white/60">Clients</span>
              </div>
              <div className="mt-1 text-sm text-white/60">Across 4 Countries</div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
