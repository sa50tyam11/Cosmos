"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { SectionWrapper } from "./SectionWrapper";
import { fadeUp } from "@/lib/motion";

const FAQS = [
  {
    q: "What kind of projects do you take on?",
    a: "We specialize in end-to-end digital product design, brand identity systems, and custom web experiences. Our ideal partners are forward-thinking businesses looking to create category-defining work."
  },
  {
    q: "What does your process look like?",
    a: "Our process is heavily collaborative. We start with a deep dive into your business (Discovery & Strategy), move to iterative design (Wireframing & Visuals), and finish with robust engineering and QA. We communicate daily and deliver in agile sprints."
  },
  {
    q: "Do you work with early-stage startups?",
    a: "Yes. While we often work with enterprise clients, we frequently partner with funded early-stage startups to help them establish their initial product vision and brand identity to attract users and investors."
  },
  {
    q: "What are your typical timelines?",
    a: "Timelines vary by scope. A comprehensive brand identity might take 4-6 weeks, while a full digital product design and development cycle can take 3-4 months. We provide clear schedules during our proposal phase."
  }
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <SectionWrapper id="faq" className="max-w-4xl mx-auto px-4">
      <motion.div variants={fadeUp} className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-display font-medium mb-4">Frequently Asked Questions</h2>
        <p className="text-muted-foreground text-lg">Everything you need to know about partnering with us.</p>
      </motion.div>

      <motion.div variants={fadeUp} className="space-y-4">
        {FAQS.map((faq, idx) => (
          <div 
            key={idx}
            className="border border-border rounded-2xl overflow-hidden bg-surface transition-colors hover:border-border/80"
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
            >
              <span className="text-xl font-medium">{faq.q}</span>
              <span className="text-muted-foreground ml-4 flex-shrink-0">
                {openIndex === idx ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {openIndex === idx && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="px-6 pb-6 text-muted-foreground text-lg leading-relaxed border-t border-border/50 pt-4 mt-2">
                    {faq.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
