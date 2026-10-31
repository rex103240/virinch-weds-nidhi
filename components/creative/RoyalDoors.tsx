"use client";

import { useState } from "react";
import { motion, useAnimation, useDragControls } from "framer-motion";

interface RoyalDoorsProps {
  onOpen: () => void;
}

export default function RoyalDoors({ onOpen }: RoyalDoorsProps) {
  const [isOpen, setIsOpen] = useState(false);
  const leftControls = useAnimation();
  const rightControls = useAnimation();
  const dragControls = useDragControls();

  const handleDragEnd = async (event: any, info: any) => {
    // If dragged enough to the left or right, trigger the opening sequence
    if (Math.abs(info.offset.x) > 50 || info.velocity.x > 200) {
      setIsOpen(true);
      
      // Animate doors opening fully
      leftControls.start({ x: "-100%", transition: { duration: 1.5, ease: [0.22, 1, 0.36, 1] } });
      rightControls.start({ x: "100%", transition: { duration: 1.5, ease: [0.22, 1, 0.36, 1] } });
      
      // Call parent onOpen after animation completes
      setTimeout(onOpen, 1000);
    } else {
      // Snap back if not dragged enough
      leftControls.start({ x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } });
      rightControls.start({ x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } });
    }
  };

  // Door pattern SVG
  const DoorPattern = () => (
    <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden flex items-center justify-center">
      <svg width="100%" height="100%" viewBox="0 0 400 800" preserveAspectRatio="none" fill="none">
        {/* Intricate door paneling */}
        <rect x="40" y="40" width="320" height="200" rx="10" stroke="#C9A96E" strokeWidth="2" />
        <rect x="50" y="50" width="300" height="180" rx="6" stroke="#C9A96E" strokeWidth="1" />
        
        <rect x="40" y="280" width="320" height="200" rx="10" stroke="#C9A96E" strokeWidth="2" />
        <rect x="50" y="290" width="300" height="180" rx="6" stroke="#C9A96E" strokeWidth="1" />
        
        <rect x="40" y="520" width="320" height="240" rx="10" stroke="#C9A96E" strokeWidth="2" />
        <rect x="50" y="530" width="300" height="220" rx="6" stroke="#C9A96E" strokeWidth="1" />
        
        {/* Decorative corner motifs */}
        <path d="M40 70 A30 30 0 0 1 70 40" stroke="#C9A96E" strokeWidth="2" />
        <path d="M360 70 A30 30 0 0 0 330 40" stroke="#C9A96E" strokeWidth="2" />
      </svg>
    </div>
  );

  if (isOpen && false) return null; // Keep in DOM for exit animation

  return (
    <motion.div 
      className="fixed inset-0 z-[9999] flex overflow-hidden touch-none"
      style={{ 
        background: "#000",
        pointerEvents: isOpen ? "none" : "auto" 
      }}
      animate={{ opacity: isOpen ? 0 : 1 }}
      transition={{ duration: 0.5, delay: 1.2 }}
    >
      {/* Light bloom effect behind doors */}
      <div className="absolute inset-0 bg-[#FFF4E3] z-0 opacity-100" />

      {/* Left Door */}
      <motion.div 
        className="relative w-1/2 h-full border-r border-[#C9A96E] flex items-center justify-end z-10 shadow-[5px_0_25px_rgba(0,0,0,0.15)] origin-left"
        style={{ background: "#FFF4E3" }}
        animate={leftControls}
      >
        <DoorPattern />
        
        {/* Left half of the seal */}
        <div className="absolute right-0 translate-x-1/2 w-[clamp(120px,30vw,180px)] h-[clamp(120px,30vw,180px)] overflow-hidden">
          <div className="w-[clamp(120px,30vw,180px)] h-[clamp(120px,30vw,180px)] rounded-full border-2 border-[#C9A96E] bg-[#FAF0E4] flex items-center justify-center -translate-x-1/2 shadow-lg relative">
             {/* We only show the left half of the image by clipping it */}
             <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                <img src="/ganpati.png" alt="Ganpati" className="w-[80%] h-[80%] object-contain translate-x-1/4 opacity-80" />
             </div>
          </div>
        </div>
      </motion.div>

      {/* Right Door */}
      <motion.div 
        className="relative w-1/2 h-full border-l border-[#C9A96E] flex items-center justify-start z-10 shadow-[-5px_0_25px_rgba(0,0,0,0.15)] origin-right"
        style={{ background: "#FFF4E3" }}
        animate={rightControls}
      >
        <DoorPattern />
        
        {/* Right half of the seal */}
        <div className="absolute left-0 -translate-x-1/2 w-[clamp(120px,30vw,180px)] h-[clamp(120px,30vw,180px)] overflow-hidden">
          <div className="w-[clamp(120px,30vw,180px)] h-[clamp(120px,30vw,180px)] rounded-full border-2 border-[#C9A96E] bg-[#FAF0E4] flex items-center justify-center translate-x-1/2 shadow-lg relative">
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                <img src="/ganpati.png" alt="Ganpati" className="w-[80%] h-[80%] object-contain -translate-x-1/4 opacity-80" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Invisible Interactive Drag Layer spanning the center seal */}
      {!isOpen && (
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[clamp(160px,40vw,220px)] h-[clamp(160px,40vw,220px)] z-30 flex flex-col items-center justify-center cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: -100, right: 100 }}
          dragElastic={0.1}
          onDragEnd={handleDragEnd}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Instruction Text */}
          <motion.div 
            className="absolute -bottom-16 w-full text-center"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <p className="font-sans uppercase tracking-[0.3em] text-[0.7rem] text-[#6B5D4F] font-medium drop-shadow-sm flex items-center justify-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M15 18l-6-6 6-6"/></svg>
              Swipe to Enter
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 18l6-6-6-6"/></svg>
            </p>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
}
