 "use client";
 
 import React, { createContext, useContext, useMemo, useState } from "react";
 
 export type ActiveSection =
   | "home"
   | "hero"
   | "services"
   | "work"
   | "presence"
   | "contact";
 
 type SceneState = {
   activeSection: ActiveSection;
   setActiveSection: (s: ActiveSection) => void;
   servicesIndex: number;
   setServicesIndex: (i: number) => void;
   reducedMotion: boolean;
 };
 
 const SceneContext = createContext<SceneState | null>(null);
 
 export function SceneProvider({
   children,
   reducedMotion = false,
 }: {
   children: React.ReactNode;
   reducedMotion?: boolean;
 }) {
   const [activeSection, setActiveSection] = useState<ActiveSection>("home");
   const [servicesIndex, setServicesIndex] = useState(0);
 
   const value = useMemo<SceneState>(
     () => ({
       activeSection,
       setActiveSection,
       servicesIndex,
       setServicesIndex: (i) => setServicesIndex(Math.max(0, Math.min(4, i))),
       reducedMotion,
     }),
     [activeSection, servicesIndex, reducedMotion]
   );
 
   return <SceneContext.Provider value={value}>{children}</SceneContext.Provider>;
 }
 
 export function useScene() {
   const ctx = useContext(SceneContext);
   if (!ctx) throw new Error("useScene must be used within SceneProvider");
   return ctx;
 }
