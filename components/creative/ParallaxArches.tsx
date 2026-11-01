"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import OrnamentDivider from "@/components/ui/OrnamentDivider";

export default function ParallaxArches() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Layer 1: Foreground massive arch (moves up very fast)
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-150%"]);
  const scale1 = useTransform(scrollYProgress, [0, 1], [1, 1.4]);
  const opacity1 = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Layer 2: Middle arch (moves up moderately)
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);
  const scale2 = useTransform(scrollYProgress, [0, 1], [0.9, 1.1]);
  const opacity2 = useTransform(scrollYProgress, [0, 0.8], [0.8, 0]);

  // Layer 3: Text content (moves gently)
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  // Fade out the tutorial indicator as soon as user begins scrolling down
  const tutorialOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative h-[125vh] bg-[#FFF4E3] overflow-hidden"
    >
      {/* Sticky container holds everything in viewport while scrolling */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Background ambient glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,169,110,0.15)_0%,transparent_70%)]" />

        {/* Text Layer (Deepest) */}
        <motion.div 
          className="relative z-0 text-center px-6 w-full max-w-4xl"
          style={{ y: yText }}
        >
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="uppercase tracking-[0.4em] md:tracking-[0.6em] text-[0.65rem] md:text-[0.75rem] font-medium text-[#6B5D4F] mb-6 md:mb-8 font-sans"
          >
            The Wedding Celebration Of
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="my-3 sm:my-5 flex flex-col items-center gap-1 sm:gap-2"
          >
            <h1 className="font-cinzel text-[clamp(2.75rem,8.5vw,5.5rem)] text-[#6B1D2A] leading-tight drop-shadow-sm font-medium">
              Virinch
            </h1>
            <span className="font-script italic text-3xl md:text-5xl text-[#C9A96E] block opacity-80 -my-2">
              &
            </span>
            <h1 className="font-cinzel text-[clamp(2.75rem,8.5vw,5.5rem)] text-[#6B1D2A] leading-tight drop-shadow-sm font-medium">
              Nidhi
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-3 sm:mt-4"
          >
            <OrnamentDivider motif="❋" />
            <p className="font-serif italic text-[clamp(0.95rem,2.2vw,1.3rem)] text-[#8B7355] mt-3 tracking-wide px-4">
              Two souls, one journey — forever begins here.
            </p>
          </motion.div>
        </motion.div>

        {/* Arch Layer 2 (Middle) */}
        <motion.div 
          className="absolute inset-0 z-10 pointer-events-none flex items-start justify-center"
          style={{ y: y2, scale: scale2, opacity: opacity2 }}
        >
          <svg className="w-full h-full max-w-7xl mx-auto opacity-40" viewBox="0 0 1000 1000" preserveAspectRatio="none" fill="none">
            {/* Elegant multi-cusped arch */}
            <path d="M100 1000 V 400 Q 100 300 250 250 Q 300 230 400 150 Q 450 110 500 50 Q 550 110 600 150 Q 700 230 750 250 Q 900 300 900 400 V 1000" stroke="#C9A96E" strokeWidth="2" />
            <path d="M120 1000 V 410 Q 120 320 260 270 Q 310 250 410 170 Q 460 130 500 70 Q 540 130 590 170 Q 690 250 740 270 Q 880 320 880 410 V 1000" stroke="#C9A96E" strokeWidth="1" />
            
            {/* Hanging decorative lamps */}
            <path d="M250 250 V 400 M750 250 V 400" stroke="#C9A96E" strokeWidth="1.5" strokeDasharray="4 4" />
            <path d="M240 400 H 260 L 255 430 H 245 Z" fill="#C9A96E" />
            <path d="M740 400 H 760 L 755 430 H 745 Z" fill="#C9A96E" />
          </svg>
        </motion.div>

        {/* Arch Layer 1 (Foreground) */}
        <motion.div 
          className="absolute inset-0 z-20 pointer-events-none flex items-start justify-center"
          style={{ y: y1, scale: scale1, opacity: opacity1 }}
        >
          <svg className="w-[120%] h-[110%] md:w-full md:h-full max-w-[1400px] mx-auto opacity-70" viewBox="0 0 1000 1000" preserveAspectRatio="none" fill="none">
            {/* Massive thick arch framing the screen */}
            <path d="M0 1000 V 300 C 0 100 300 0 500 0 C 700 0 1000 100 1000 300 V 1000" stroke="#B8963E" strokeWidth="8" />
            <path d="M20 1000 V 310 C 20 120 310 20 500 20 C 690 20 980 120 980 310 V 1000" stroke="#C9A96E" strokeWidth="3" />
            <path d="M40 1000 V 320 C 40 140 320 40 500 40 C 680 40 960 140 960 320 V 1000" stroke="#C9A96E" strokeWidth="1" />
            
            {/* Foreground pillar bases */}
            <rect x="0" y="800" width="60" height="200" fill="#FFF4E3" stroke="#C9A96E" strokeWidth="2" />
            <rect x="940" y="800" width="60" height="200" fill="#FFF4E3" stroke="#C9A96E" strokeWidth="2" />
          </svg>
        </motion.div>

        {/* Sacred Deity Emblem directly touching the Scroll Down float */}
        <div className="absolute bottom-5 sm:bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center pointer-events-auto">
          {/* Sacred Deity Emblem */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
            className="mb-2 flex justify-center"
          >
            <div className="relative rounded-xl overflow-hidden shadow-md border border-[#C9A96E]/40 w-[105px] sm:w-[120px] md:w-[130px] bg-[#FFF4E3]">
              <img
                src="/karni-mata.jpg"
                alt="Shri Temda Rai & Maa Karni"
                className="w-full h-auto object-contain block"
              />
            </div>
          </motion.div>

          {/* Navigation Preview Tutorial (Scroll Down Float) */}
          <motion.div
            style={{ opacity: tutorialOpacity }}
            className="cursor-pointer select-none"
            onClick={() => {
              window.scrollBy({ top: window.innerHeight * 0.85, behavior: "smooth" });
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2, duration: 1, ease: "easeOut" }}
            >
              <motion.p
                animate={{ opacity: [0.4, 1, 0.4], y: [0, 4, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="font-sans uppercase tracking-[0.3em] text-[0.7rem] text-[#6B5D4F] font-medium drop-shadow-sm flex items-center justify-center gap-2 py-2 px-4 rounded-full bg-[#FFF4E3]/40 backdrop-blur-xs border border-[#C9A96E]/20"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M19 9l-7 7-7-7" />
                </svg>
                Swipe Down
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </motion.p>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
