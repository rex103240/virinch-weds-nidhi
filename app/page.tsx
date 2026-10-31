"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import GoldParticles from "@/components/core/GoldParticles";
import RoyalDoors from "@/components/creative/RoyalDoors";
import ParallaxArches from "@/components/creative/ParallaxArches";
import BloomingLotus from "@/components/creative/BloomingLotus";
import ThreadTimeline from "@/components/creative/ThreadTimeline";
import LanternRSVP from "@/components/creative/LanternRSVP";
import MusicToggle from "@/components/ui/MusicToggle";

// Dynamic import for smooth scroll (client-side only)
const SmoothScroll = dynamic(() => import("@/components/core/SmoothScroll"), {
  ssr: false,
});

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* Ambient gold particle canvas — always visible behind everything */}
      <GoldParticles />

      {/* Screen 1: Interactive Royal Doors */}
      {!isOpen && <RoyalDoors onOpen={() => setIsOpen(true)} />}

      {/* Main scrollable content — visible after unlocking the doors */}
      {isOpen && (
        <SmoothScroll>
          <main
            id="main-content"
            style={{
              opacity: isOpen ? 1 : 0,
              transition: "opacity 2s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          >
            {/* Screen 2: 3D Parallax Archway */}
            <ParallaxArches />

            {/* Screen 3: Interactive Blooming Lotus Reveal */}
            <BloomingLotus />

            {/* Screen 4: Flowing Golden Thread Timeline */}
            <ThreadTimeline />

            {/* Screen 5: RSVP with Call & WhatsApp */}
            <LanternRSVP />
          </main>
        </SmoothScroll>
      )}

      {/* Fixed music toggle */}
      <MusicToggle visible={isOpen} />
    </>
  );
}
