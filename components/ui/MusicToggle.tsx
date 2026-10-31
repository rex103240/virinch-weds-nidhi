"use client";
import { useState, useEffect, useRef } from "react";

interface MusicToggleProps {
  visible: boolean;
}

const BAR_HEIGHTS = [12, 8, 14, 6];
const BAR_DELAYS = [0, 0.15, 0.3, 0.45];

export default function MusicToggle({ visible }: MusicToggleProps) {
  const [playing, setPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio("/bg-music.mp3");
    audio.loop = true;
    audioRef.current = audio;

    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => setPlaying(true))
        .catch(() => setPlaying(false));
    }

    const handleFirstInteraction = () => {
      if (audioRef.current && !hasInteracted && audioRef.current.paused) {
        audioRef.current.play().then(() => {
          setPlaying(true);
          setHasInteracted(true);
        }).catch(() => {});
      }
    };

    document.addEventListener("click", handleFirstInteraction, { once: true });
    document.addEventListener("scroll", handleFirstInteraction, { once: true });
    document.addEventListener("touchstart", handleFirstInteraction, { once: true });

    return () => {
      audio.pause();
      document.removeEventListener("click", handleFirstInteraction);
      document.removeEventListener("scroll", handleFirstInteraction);
      document.removeEventListener("touchstart", handleFirstInteraction);
    };
  }, [hasInteracted]);

  const togglePlay = () => {
    setHasInteracted(true);
    if (audioRef.current) {
      if (playing) {
        audioRef.current.pause();
        setPlaying(false);
      } else {
        audioRef.current.play();
        setPlaying(true);
      }
    }
  };

  return (
    <>
      <style jsx>{`
        @keyframes soundWave {
          0%,
          100% {
            height: 3px;
          }
          50% {
            height: var(--bar-height);
          }
        }
      `}</style>

      <button
        onClick={togglePlay}
        aria-label={playing ? "Pause music" : "Play music"}
        style={{
          position: "fixed",
          bottom: "1.5rem",
          right: "1.5rem",
          zIndex: 100,
          width: 44,
          height: 44,
          borderRadius: "50%",
          border: "1px solid #C9A96E",
          background: "rgba(255, 244, 227, 0.6)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 3,
          cursor: "pointer",
          transition: "all 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
          opacity: visible ? 1 : 0,
          pointerEvents: visible ? "auto" : "none",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "rgba(201, 169, 110, 0.25)";
          e.currentTarget.style.transform = "scale(1.08)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "rgba(255, 244, 227, 0.6)";
          e.currentTarget.style.transform = "scale(1)";
        }}
      >
        {BAR_HEIGHTS.map((maxH, i) => (
          <span
            key={i}
            style={{
              display: "block",
              width: 2.5,
              borderRadius: 1.25,
              backgroundColor: "#C9A96E",
              height: playing ? undefined : 3,
              animation: playing
                ? `soundWave 0.6s ease-in-out ${BAR_DELAYS[i]}s infinite`
                : "none",
              transition: "height 0.3s ease",
              // @ts-expect-error CSS custom property
              "--bar-height": `${maxH}px`,
            }}
          />
        ))}
      </button>
    </>
  );
}
