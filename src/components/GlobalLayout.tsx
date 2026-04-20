 "use client";
 
 import React, { useMemo } from "react";
 import SmoothScroll from "@/lib/scroll/SmoothScroll";
 import { SceneProvider } from "@/lib/scene/scene-store";
 import WebGLBackground from "@/components/webgl/WebGLBackground";
 
 export default function GlobalLayout({ children }: { children: React.ReactNode }) {
   const reducedMotion = useMemo(() => {
     if (typeof window === "undefined") return false;
     return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
   }, []);
 
   return (
     <SceneProvider reducedMotion={reducedMotion}>
       <SmoothScroll>
         <div className="relative min-h-screen bg-background text-foreground">
           {/* Fixed WebGL backdrop */}
           <div className="pointer-events-none fixed inset-0 -z-10">
             <WebGLBackground className="h-full w-full" />
             <div className="absolute inset-0 bg-[radial-gradient(60%_55%_at_20%_10%,rgba(255,45,45,0.22),transparent_55%),radial-gradient(70%_60%_at_80%_20%,rgba(255,45,45,0.12),transparent_55%),linear-gradient(to_bottom,rgba(0,0,0,0.65),rgba(0,0,0,0.9))]" />
             <div className="absolute inset-0 opacity-[0.14] mix-blend-overlay [background-image:url('data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%22240%22%20height=%22240%22%3E%3Cfilter%20id=%22n%22%3E%3CfeTurbulence%20type=%22fractalNoise%22%20baseFrequency=%220.8%22%20numOctaves=%224%22%20stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect%20width=%22240%22%20height=%22240%22%20filter=%22url(%23n)%22%20opacity=%220.22%22/%3E%3C/svg%3E')]" />
           </div>
 
           {children}
         </div>
       </SmoothScroll>
     </SceneProvider>
   );
 }
