"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  stagger?: boolean;
}

export function SectionWrapper({ children, className, id, stagger = false }: SectionProps) {
  return (
    <motion.section
      id={id}
      className={cn("py-20 md:py-32 w-full", className)}
      variants={stagger ? staggerContainer : fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {children}
    </motion.section>
  );
}
