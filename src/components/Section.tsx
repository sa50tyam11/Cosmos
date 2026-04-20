 "use client";
 
 import React, { useEffect, useRef } from "react";
 import { ActiveSection, useScene } from "@/lib/scene/scene-store";
 import { cn } from "@/lib/utils";
 
 export default function Section({
   id,
   className,
   children,
 }: {
   id: ActiveSection;
   className?: string;
   children: React.ReactNode;
 }) {
   const ref = useRef<HTMLElement | null>(null);
   const { setActiveSection } = useScene();
 
   useEffect(() => {
     const el = ref.current;
     if (!el) return;
 
     const io = new IntersectionObserver(
       (entries) => {
         for (const e of entries) {
           if (e.isIntersecting) setActiveSection(id);
         }
       },
       { root: null, threshold: 0.45 }
     );
 
     io.observe(el);
     return () => io.disconnect();
   }, [id, setActiveSection]);
 
   return (
     <section
       ref={(n) => {
         ref.current = n;
       }}
       data-section={id}
       className={cn("relative", className)}
     >
       {children}
     </section>
   );
 }
