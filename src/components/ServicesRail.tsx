"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Section from "@/components/Section";
import { cn } from "@/lib/utils";
import { useScene } from "@/lib/scene/scene-store";

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
  {
    id: "01",
    short: "Custom Software",
    title: "Custom Software Development",
    desc: "We design and develop tailor-made software systems built exactly to your business requirements — no off-the-shelf compromises.",
    bullets: [
      "Scalable, maintainable codebase",
      "Full documentation and knowledge transfer",
      "Post-launch support and iterations",
      "Modern stacks (React, Node.js, Python, Java)",
    ],
  },
  {
    id: "02",
    short: "Web & Mobile Apps",
    title: "Web & Mobile App Development",
    desc: "Fast, beautiful web apps and mobile apps for iOS and Android — pixel-perfect experiences backed by robust APIs.",
    bullets: [
      "Responsive web apps (React, Next.js, Vue)",
      "Native & cross-platform (Flutter, React Native)",
      "API design and third-party integrations",
      "App Store & Play Store deployment",
    ],
  },
  {
    id: "03",
    short: "AI / ML",
    title: "AI & Machine Learning Solutions",
    desc: "From intelligent automation to LLM integrations and computer vision — we translate complex AI into real products with ROI.",
    bullets: [
      "Custom ML model development and training",
      "LLM integration (OpenAI, Gemini, Claude)",
      "Chatbots and virtual assistants",
      "Data pipelines and analytics dashboards",
    ],
  },
  {
    id: "04",
    short: "Cloud & DevOps",
    title: "Cloud Infrastructure & DevOps",
    desc: "Secure, scalable cloud setups with modern CI/CD and infrastructure-as-code — so your team ships faster with confidence.",
    bullets: [
      "AWS / GCP / Azure setup and migration",
      "Kubernetes and Docker orchestration",
      "CI/CD pipeline setup",
      "Infrastructure as Code (Terraform, Ansible)",
    ],
  },
  {
    id: "05",
    short: "IT Consulting",
    title: "IT Consulting & Strategy",
    desc: "Senior consultants audit your systems, identify gaps, and map a technology roadmap aligned to your business goals.",
    bullets: [
      "Technology audit and gap analysis",
      "Digital transformation roadmaps",
      "Vendor selection and evaluation",
      "CTO-as-a-Service for early-stage startups",
    ],
  },
];

export default function ServicesRail() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const pinRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);
  const { setServicesIndex } = useScene();

  const reduce = useMemo(() => {
    if (typeof window === "undefined") return false;
    const prefers = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
    const isTouch =
      "ontouchstart" in window ||
      (navigator?.maxTouchPoints ?? 0) > 0 ||
      window.matchMedia?.("(pointer: coarse)")?.matches;
    return prefers || !!isTouch;
  }, []);

  useEffect(() => {
    if (reduce) return;
    if (!wrapRef.current || !pinRef.current || !trackRef.current) return;

    const wrap = wrapRef.current;
    const sections = SERVICES.length;

    const st = ScrollTrigger.create({
      trigger: wrap,
      start: "top top",
      end: () => `+=${window.innerHeight * (sections + 0.65)}`,
      pin: pinRef.current,
      scrub: 0.85,
      onUpdate(self) {
        const idx = Math.round(self.progress * (sections - 1));
        setActive(idx);
        setServicesIndex(idx);
      },
    });

    return () => st.kill();
  }, [reduce, setServicesIndex]);

  return (
    <Section id="services" className="relative border-t border-white/10">
      <div ref={wrapRef} className="relative">
        <div ref={pinRef} className="relative">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
            <div className="mb-10 flex items-end justify-between gap-8">
              <div>
                <div className="text-xs font-medium tracking-wide text-white/60">What We Do Best</div>
                <h2 className="mt-3 max-w-2xl font-display text-4xl font-semibold tracking-[-0.03em] text-white md:text-6xl">
                  End-to-End Technology Services,
                  <br />
                  Built Around Your Goals.
                </h2>
                <p className="mt-5 max-w-2xl text-white/65">
                  We don&apos;t just write code — we solve problems. Every engagement starts with understanding your business,
                  then building the right solution to match.
                </p>
              </div>
              <div className="hidden md:block">
                <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white/70 backdrop-blur-md">
                  Scroll to cycle services
                  <div className="mt-2 h-[1px] w-40 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
                  <div className="mt-2 text-xs text-white/50">Background scene subtly shifts per service</div>
                </div>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:gap-10">
              {/* Sticky detail */}
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md md:p-8">
                <div className="flex items-center gap-4">
                  <div className="rounded-full border border-white/12 bg-black/35 px-3 py-1 text-xs font-mono text-white/65">
                    {SERVICES[active]?.id}
                  </div>
                  <div className="h-[1px] flex-1 bg-gradient-to-r from-white/15 via-white/0 to-white/0" />
                </div>

                <motion.h3
                  key={SERVICES[active]?.title}
                  initial={reduce ? undefined : { opacity: 0, y: 10 }}
                  animate={reduce ? undefined : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] as const }}
                  className="mt-5 text-2xl font-semibold tracking-tight text-white md:text-3xl"
                >
                  {SERVICES[active]?.title}
                </motion.h3>

                <motion.p
                  key={SERVICES[active]?.desc}
                  initial={reduce ? undefined : { opacity: 0, y: 8 }}
                  animate={reduce ? undefined : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.05, ease: [0.16, 1, 0.3, 1] as const }}
                  className="mt-4 text-white/70"
                >
                  {SERVICES[active]?.desc}
                </motion.p>

                <div className="mt-6 grid gap-2">
                  {SERVICES[active]?.bullets.map((b) => (
                    <div key={b} className="flex items-start gap-3 rounded-xl border border-white/10 bg-black/25 px-4 py-3">
                      <span className="mt-1 inline-flex h-2 w-2 flex-none rounded-full bg-[#ff2b2b] shadow-[0_0_18px_rgba(255,45,45,0.55)]" />
                      <div className="text-sm text-white/70">{b}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#contact"
                    className="inline-flex h-11 flex-1 items-center justify-center rounded-full bg-white px-5 text-sm font-semibold text-black"
                  >
                    Discuss a Service →
                  </a>
                  <a
                    href="#work"
                    className="inline-flex h-11 flex-1 items-center justify-center rounded-full border border-white/12 bg-white/5 px-5 text-sm font-semibold text-white/85 backdrop-blur-md hover:bg-white/8"
                  >
                    See Related Work
                  </a>
                </div>
              </div>

              {/* Radial navigator */}
              <div className="relative">
                <div className="absolute -inset-10 -z-10 rounded-[44px] bg-[radial-gradient(55%_55%_at_50%_40%,rgba(255,45,45,0.18),transparent_65%)] blur-2xl" />
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md md:p-8">
                  <div className="relative mx-auto aspect-square max-w-[420px]">
                    <div className="absolute inset-0 rounded-full border border-white/10 bg-[radial-gradient(circle_at_center,rgba(255,45,45,0.12),transparent_58%)]" />
                    <div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/12 bg-black/45 backdrop-blur-md">
                      <div className="flex h-full w-full items-center justify-center text-center text-xs font-medium text-white/70">
                        Soft
                        <br />
                        Campus
                      </div>
                    </div>

                    {SERVICES.map((s, i) => {
                      const angle = (i / SERVICES.length) * Math.PI * 2 - Math.PI / 2;
                      const r = 46;
                      const x = 50 + Math.cos(angle) * r;
                      const y = 50 + Math.sin(angle) * r;
                      const isActive = i === active;
                      return (
                        <button
                          key={s.id}
                          type="button"
                          onClick={() => {
                            setActive(i);
                            setServicesIndex(i);
                          }}
                          className={cn(
                            "absolute -translate-x-1/2 -translate-y-1/2 rounded-2xl border px-4 py-3 text-left backdrop-blur-md transition",
                            isActive
                              ? "border-white/18 bg-white/10 shadow-[0_20px_70px_rgba(255,45,45,0.12)]"
                              : "border-white/10 bg-black/30 hover:bg-white/7"
                          )}
                          style={{ left: `${x}%`, top: `${y}%` }}
                        >
                          <div className="flex items-center gap-3">
                            <span
                              className={cn(
                                "inline-flex h-2.5 w-2.5 rounded-full",
                                isActive ? "bg-[#ff2b2b]" : "bg-white/25"
                              )}
                            />
                            <div className="text-xs font-semibold tracking-wide text-white/85">{s.short}</div>
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  <div ref={trackRef} className="mt-8 grid gap-2">
                    {SERVICES.map((s, i) => (
                      <div
                        key={s.id}
                        className={cn(
                          "flex items-center justify-between rounded-2xl border px-4 py-3 text-sm transition",
                          i === active ? "border-white/16 bg-white/7" : "border-white/10 bg-black/20"
                        )}
                      >
                        <div className="text-white/70">
                          <span className="font-mono text-white/45">{s.id}</span>{" "}
                          <span className="ml-2 font-medium text-white/85">{s.title}</span>
                        </div>
                        <div className="text-xs text-white/40">{i === active ? "Active" : " "}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile fallback: no pinning, still looks premium */}
            <div className="mt-14 block md:hidden">
              <div className="text-xs font-medium tracking-wide text-white/50">On mobile we keep it lightweight.</div>
              <div className="mt-2 text-sm text-white/70">
                Swipe/scroll normally — sections still animate subtly and the WebGL stays optimized.
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
