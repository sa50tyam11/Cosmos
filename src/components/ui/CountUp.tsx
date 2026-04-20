 "use client";
 
 import React, { useEffect, useMemo, useState } from "react";
 
 function formatNumber(n: number) {
   return n.toLocaleString("en-IN");
 }
 
 export default function CountUp({
   to,
   durationMs = 1200,
   suffix = "",
   prefix = "",
   className,
 }: {
   to: number;
   durationMs?: number;
   suffix?: string;
   prefix?: string;
   className?: string;
 }) {
   const [value, setValue] = useState(0);
 
   const reduce = useMemo(() => {
     if (typeof window === "undefined") return false;
     return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
   }, []);
 
   useEffect(() => {
     if (reduce) {
       setValue(to);
       return;
     }
 
     let raf = 0;
     const start = performance.now();
 
     const tick = (now: number) => {
       const p = Math.min(1, (now - start) / durationMs);
       const eased = 1 - Math.pow(1 - p, 3);
       setValue(Math.round(to * eased));
       if (p < 1) raf = requestAnimationFrame(tick);
     };
 
     raf = requestAnimationFrame(tick);
     return () => cancelAnimationFrame(raf);
   }, [to, durationMs, reduce]);
 
   return (
     <span className={className}>
       {prefix}
       {formatNumber(value)}
       {suffix}
     </span>
   );
 }
