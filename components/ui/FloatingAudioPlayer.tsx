"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function FloatingAudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element
    const audio = new Audio("/bg-music.mp3");
    audio.loop = true;
    audioRef.current = audio;

    // Try to autoplay (most modern browsers will block this until interaction)
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          setIsPlaying(false);
        });
    }

    // Play on first interaction if autoplay was blocked
    const handleFirstInteraction = () => {
      if (audioRef.current && !isPlaying && !hasInteracted) {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
          setHasInteracted(true);
        }).catch(() => {});
      }
    };

    // Attach interaction listeners
    document.addEventListener("click", handleFirstInteraction, { once: true });
    document.addEventListener("scroll", handleFirstInteraction, { once: true });
    document.addEventListener("touchstart", handleFirstInteraction, { once: true });

    return () => {
      audio.pause();
      document.removeEventListener("click", handleFirstInteraction);
      document.removeEventListener("scroll", handleFirstInteraction);
      document.removeEventListener("touchstart", handleFirstInteraction);
    };
  }, []);

  const togglePlay = () => {
    setHasInteracted(true);
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 1 }}
      onClick={togglePlay}
      className="fixed bottom-6 left-6 md:bottom-10 md:left-10 z-[100] w-12 h-12 bg-[#FCFAF5] border border-[#EAE3D9] rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:scale-105 transition-transform group"
      aria-label={isPlaying ? "Pause music" : "Play music"}
    >
      {isPlaying ? (
        <div className="flex gap-[3px] items-end justify-center h-4">
          <motion.div animate={{ height: ["4px", "14px", "4px"] }} transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }} className="w-[2.5px] bg-[#6A1C28] rounded-full" />
          <motion.div animate={{ height: ["10px", "6px", "10px"] }} transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut" }} className="w-[2.5px] bg-[#6A1C28] rounded-full" />
          <motion.div animate={{ height: ["6px", "16px", "6px"] }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }} className="w-[2.5px] bg-[#6A1C28] rounded-full" />
          <motion.div animate={{ height: ["12px", "4px", "12px"] }} transition={{ repeat: Infinity, duration: 1.0, ease: "easeInOut" }} className="w-[2.5px] bg-[#6A1C28] rounded-full" />
        </div>
      ) : (
        <svg className="w-4 h-4 text-[#A29587] translate-x-[1px] group-hover:text-[#6A1C28] transition-colors" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="5 3 19 12 5 21 5 3" />
        </svg>
      )}
    </motion.button>
  );
}
