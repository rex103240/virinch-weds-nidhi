"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import OrnamentDivider from "@/components/ui/OrnamentDivider";

export default function BloomingLotus() {
  const [isBlooming, setIsBlooming] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);
  const controls = useAnimation();
  const holdTimerRef = useRef<NodeJS.Timeout | null>(null);

  // SVG Paths for lotus petals
  const centerPetal = "M 50 100 C 30 70, 30 40, 50 10 C 70 40, 70 70, 50 100";
  const leftPetal1 = "M 50 100 C 20 80, 0 60, 10 30 C 25 50, 40 70, 50 100";
  const rightPetal1 = "M 50 100 C 80 80, 100 60, 90 30 C 75 50, 60 70, 50 100";
  const leftPetal2 = "M 45 95 C 10 85, -10 65, 0 45 C 20 65, 35 80, 45 95";
  const rightPetal2 = "M 55 95 C 90 85, 110 65, 100 45 C 80 65, 65 80, 55 95";

  const handlePointerDown = () => {
    if (isRevealed) return;
    setIsBlooming(true);
    
    // Animate path drawing over 2 seconds
    controls.start({
      pathLength: 1,
      opacity: 1,
      transition: { duration: 2, ease: "easeInOut" }
    });

    // If held for 2 seconds, trigger reveal
    holdTimerRef.current = setTimeout(() => {
      setIsRevealed(true);
      if (navigator.vibrate) navigator.vibrate(50);
    }, 2000);
  };

  const handlePointerUp = () => {
    if (isRevealed) return;
    setIsBlooming(false);
    
    // Cancel the timer
    if (holdTimerRef.current) clearTimeout(holdTimerRef.current);
    
    // Reverse animation back to 0
    controls.start({
      pathLength: 0,
      opacity: 0.3,
      transition: { duration: 0.8, ease: "easeOut" }
    });
  };

  useEffect(() => {
    return () => {
      if (holdTimerRef.current) clearTimeout(holdTimerRef.current);
    };
  }, []);

  return (
    <section className="relative py-32 px-6 bg-[#4E0F1A] text-[#FFF4E3] overflow-hidden min-h-[90svh] flex flex-col items-center justify-center select-none">
      
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cfilter id=\\'n\\'%3E%3CfeTurbulence type=\\'fractalNoise\\' baseFrequency=\\'0.65\\' numOctaves=\\'3\\' stitchTiles=\\'stitch\\'/%3E%3C/filter%3E%3Crect width=\\'100%25\\' height=\\'100%25\\' filter=\\'url(%23n)\\' opacity=\\'1\\'/%3E%3C/svg%3E')] opacity-5 mix-blend-overlay pointer-events-none" />

      <div className="text-center z-10 mb-12">
        <p className="uppercase tracking-[0.5em] text-[0.7rem] text-[#D4B87A] opacity-70 mb-4 font-sans">
          Save The Date
        </p>
        <OrnamentDivider motif="✦" />
      </div>

      <div className="relative w-full max-w-lg h-[400px] flex items-center justify-center">
        
        <AnimatePresence mode="wait">
          {!isRevealed ? (
            <motion.div
              key="lotus"
              className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer touch-none"
              onPointerDown={handlePointerDown}
              onPointerUp={handlePointerUp}
              onPointerLeave={handlePointerUp}
              exit={{ opacity: 0, scale: 1.2, filter: "blur(10px)" }}
              transition={{ duration: 1 }}
            >
              {/* Outer Glow that intensifies while holding */}
              <motion.div 
                className="absolute w-40 h-40 bg-[#C9A96E] rounded-full pointer-events-none blur-3xl"
                animate={{ opacity: isBlooming ? 0.3 : 0.05 }}
                transition={{ duration: 1 }}
              />

              <svg width="200" height="200" viewBox="-20 0 140 120" fill="none" className="overflow-visible z-10">
                {/* Closed faint version */}
                <g stroke="#C9A96E" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" opacity="0.2">
                  <path d={centerPetal} />
                  <path d={leftPetal1} />
                  <path d={rightPetal1} />
                  <path d={leftPetal2} />
                  <path d={rightPetal2} />
                </g>

                {/* Animated blooming version */}
                <g stroke="#D4A548" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" filter="drop-shadow(0 0 8px rgba(201,169,110,0.5))">
                  <motion.path d={centerPetal} initial={{ pathLength: 0, opacity: 0 }} animate={controls} />
                  <motion.path d={leftPetal1} initial={{ pathLength: 0, opacity: 0 }} animate={controls} />
                  <motion.path d={rightPetal1} initial={{ pathLength: 0, opacity: 0 }} animate={controls} />
                  <motion.path d={leftPetal2} initial={{ pathLength: 0, opacity: 0 }} animate={controls} />
                  <motion.path d={rightPetal2} initial={{ pathLength: 0, opacity: 0 }} animate={controls} />
                </g>
              </svg>

              <motion.p 
                className="mt-12 text-[#C9A96E] font-sans uppercase tracking-[0.3em] text-[0.75rem]"
                animate={{ opacity: isBlooming ? 0.2 : 0.8 }}
              >
                Press and hold to let love bloom
              </motion.p>
            </motion.div>
          ) : (
            <motion.div
              key="reveal"
              className="absolute inset-0 flex flex-col items-center justify-center"
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,169,110,0.2)_0%,transparent_70%)]" />
              
              <h2 className="font-cinzel text-[clamp(1.5rem,3vw,2rem)] text-[#D4B87A] mb-3 relative z-10 tracking-widest">
                Save The Date
              </h2>
              <p className="font-cinzel text-[clamp(2.2rem,6vw,3.5rem)] text-[#FFF4E3] drop-shadow-[0_2px_15px_rgba(201,169,110,0.4)] mb-4 relative z-10 leading-tight max-w-[95%] md:max-w-2xl text-center">
                Saturday, 12 Dec 2026
              </p>
              <p className="font-sans uppercase tracking-[0.4em] text-[0.7rem] text-[#C9A96E] opacity-70 mb-8 relative z-10">
                Jodhpur, Rajasthan
              </p>

              <p className="font-serif italic text-[#D9CDB8] text-center max-w-sm mt-6 opacity-80 leading-relaxed px-4">
                "Two souls, one destiny — blessed with timeless joy under the golden skies of the Sun City."
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
