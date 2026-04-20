 "use client";
 
import React, { Suspense, useEffect, useMemo, useRef } from "react";
 import { Canvas, useFrame, useThree } from "@react-three/fiber";
 import { OrbitControls } from "@react-three/drei";
 import * as THREE from "three";
 import { useScene } from "@/lib/scene/scene-store";
 
 function usePointerVec() {
   const v = useRef(new THREE.Vector2(0, 0));
   const { gl } = useThree();
 
  useEffect(() => {
     const onMove = (e: PointerEvent) => {
       const x = (e.clientX / window.innerWidth) * 2 - 1;
       const y = -((e.clientY / window.innerHeight) * 2 - 1);
       v.current.set(x, y);
     };
 
     gl.domElement.addEventListener("pointermove", onMove, { passive: true });
     return () => gl.domElement.removeEventListener("pointermove", onMove);
  }, [gl]);
 
   return v;
 }
 
 function Scene() {
   const { activeSection, servicesIndex, reducedMotion } = useScene();
   const group = useRef<THREE.Group>(null);
   const pointer = usePointerVec();
 
   const points = useMemo(() => {
     const count = 1400;
     const positions = new Float32Array(count * 3);
     const sizes = new Float32Array(count);
 
     for (let i = 0; i < count; i++) {
       const u = Math.random();
       const v = Math.random();
       const theta = 2 * Math.PI * u;
       const phi = Math.acos(2 * v - 1);
       const r = 1.35 + Math.random() * 0.35;
 
       const x = r * Math.sin(phi) * Math.cos(theta);
       const y = r * Math.cos(phi);
       const z = r * Math.sin(phi) * Math.sin(theta);
 
       positions[i * 3 + 0] = x;
       positions[i * 3 + 1] = y;
       positions[i * 3 + 2] = z;
       sizes[i] = 0.6 + Math.random() * 1.8;
     }
 
     const geo = new THREE.BufferGeometry();
     geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
     geo.setAttribute("size", new THREE.BufferAttribute(sizes, 1));
     return geo;
   }, []);
 
   useFrame((state) => {
     if (!group.current) return;
 
     const t = state.clock.elapsedTime;
 
     // Slow, cinematic base motion.
     group.current.rotation.y = THREE.MathUtils.lerp(
       group.current.rotation.y,
       t * 0.08,
       reducedMotion ? 0.02 : 0.06
     );
 
     // Section-driven camera choreography.
     const cameraTargetZ =
       activeSection === "services" ? 5.2 : activeSection === "presence" ? 4.4 : 4.9;
     state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, cameraTargetZ, 0.04);
 
     // Subtle parallax toward pointer, and services-driven perspective shift.
     const px = pointer.current.x;
     const py = pointer.current.y;
     const serviceBias = (servicesIndex - 2) * 0.12;
 
     group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, py * 0.12, 0.05);
     group.current.rotation.z = THREE.MathUtils.lerp(
       group.current.rotation.z,
       px * 0.06 + serviceBias,
       0.04
     );
   });
 
   return (
     <>
       <fog attach="fog" args={["#050505", 6, 16]} />
       <group ref={group}>
       <ambientLight intensity={0.25} />
       <directionalLight position={[4, 6, 3]} intensity={0.8} color="#ff3b3b" />
       <directionalLight position={[-6, -3, -2]} intensity={0.35} color="#ffffff" />
 
       <points geometry={points}>
         <pointsMaterial
           size={0.012}
           sizeAttenuation
           color="#ff2b2b"
           opacity={0.8}
           transparent
           depthWrite={false}
           blending={THREE.AdditiveBlending}
         />
       </points>
 
       {/* A core orb to sell "digital globe" depth */}
       <mesh>
         <sphereGeometry args={[0.86, 48, 48]} />
         <meshStandardMaterial
           color="#0a0a0a"
           roughness={0.25}
           metalness={0.55}
           emissive="#240000"
           emissiveIntensity={0.7}
         />
       </mesh>
       </group>
     </>
   );
 }
 
 export default function WebGLBackground({ className }: { className?: string }) {
   return (
     <div className={className}>
       <Canvas
         dpr={1.5}
         gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
         camera={{ position: [0, 0, 4.9], fov: 42, near: 0.1, far: 50 }}
       >
         <Suspense fallback={null}>
           <Scene />
           {/* Dev-only orbit in case you want to tweak quickly */}
           {process.env.NODE_ENV === "development" ? (
             <OrbitControls enablePan={false} enableZoom={false} />
           ) : null}
         </Suspense>
       </Canvas>
     </div>
   );
 }
