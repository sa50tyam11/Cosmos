"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

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
    <section id="faq" className="relative py-32 bg-black overflow-hidden pointer-events-none">
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none z-0" />
      
      <div className="container max-w-4xl mx-auto px-4 relative z-10 pointer-events-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-medium mb-4 text-white">Frequently Asked Questions</h2>
          <p className="text-gray-400 text-lg">Everything you need to know about partnering with us.</p>
        </motion.div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <motion.div 
              key={idx}
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: idx * 0.1 } }
              }}
              className="border border-white/10 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-md transition-colors hover:border-white/30"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
              >
                <span className="text-xl font-medium text-white">{faq.q}</span>
                <span className="text-gray-400 ml-4 flex-shrink-0">
                  {openIndex === idx ? <Minus className="w-5 h-5 text-accent" /> : <Plus className="w-5 h-5" />}
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
                    <div className="px-6 pb-6 text-gray-400 text-lg leading-relaxed border-t border-white/5 pt-4 mt-2">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
