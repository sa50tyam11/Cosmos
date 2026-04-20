 "use client";
 
 import React, { useEffect, useMemo, useRef } from "react";
 import Lenis from "@studio-freight/lenis";
 import gsap from "gsap";
 import ScrollTrigger from "gsap/ScrollTrigger";
 
 type Props = {
   children: React.ReactNode;
   disabled?: boolean;
 };
 
 export default function SmoothScroll({ children, disabled }: Props) {
   const lenisRef = useRef<Lenis | null>(null);
 
   const shouldDisable = useMemo(() => {
     if (disabled) return true;
     if (typeof window === "undefined") return true;
     const prefersReduced =
       window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
     const isTouch =
       "ontouchstart" in window ||
       (navigator?.maxTouchPoints ?? 0) > 0 ||
       window.matchMedia?.("(pointer: coarse)")?.matches;
     return prefersReduced || isTouch;
   }, [disabled]);
 
   useEffect(() => {
     gsap.registerPlugin(ScrollTrigger);
     if (shouldDisable) return;
 
     const lenis = new Lenis({
       duration: 1.05,
       easing: (t) => 1 - Math.pow(1 - t, 3),
       smoothWheel: true,
       wheelMultiplier: 0.9,
     });
 
     lenisRef.current = lenis;
 
     const raf = (time: number) => {
       lenis.raf(time);
       requestAnimationFrame(raf);
     };
     requestAnimationFrame(raf);
 
     lenis.on("scroll", ScrollTrigger.update);
 
    const onRefreshInit = () => {
      // IMPORTANT: never call ScrollTrigger.refresh() from a refresh handler
      // (it will recurse). We only sync Lenis' measurements here.
      lenis.resize();
    };
    ScrollTrigger.addEventListener("refreshInit", onRefreshInit);
     ScrollTrigger.refresh();
 
     return () => {
      ScrollTrigger.removeEventListener("refreshInit", onRefreshInit);
       lenis.destroy();
       lenisRef.current = null;
     };
   }, [shouldDisable]);
 
   return <>{children}</>;
 }
