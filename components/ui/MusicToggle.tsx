"use client";

import { useEffect, useRef } from "react";

interface MusicToggleProps {
  visible?: boolean;
}

export default function MusicToggle({}: MusicToggleProps = {}) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 1.0;

    let isPlaying = false;

    const attemptPlay = () => {
      if (isPlaying) return;
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            isPlaying = true;
            removeInteractionListeners();
          })
          .catch(() => {
            // Autoplay blocked by browser policy without user gesture yet;
            // interaction listeners below will start it on the very first touch/click
          });
      }
    };

    const handleInteraction = () => {
      attemptPlay();
    };

    const interactionEvents = [
      "pointerdown",
      "touchstart",
      "touchend",
      "mousedown",
      "click",
      "keydown",
      "scroll",
      "wheel",
    ];

    const removeInteractionListeners = () => {
      interactionEvents.forEach((evt) => {
        window.removeEventListener(evt, handleInteraction, true);
        document.removeEventListener(evt, handleInteraction, true);
      });
    };

    interactionEvents.forEach((evt) => {
      window.addEventListener(evt, handleInteraction, { capture: true, passive: true });
      document.addEventListener(evt, handleInteraction, { capture: true, passive: true });
    });

    // Attempt autoplay immediately as soon as website loads
    attemptPlay();

    return () => {
      removeInteractionListeners();
      audio.pause();
    };
  }, []);

  return (
    <audio
      ref={audioRef}
      src="/bg-music.mp3"
      loop
      preload="auto"
      autoPlay
      playsInline
      style={{ display: "none" }}
    />
  );
}
