"use client";

interface OrnamentDividerProps {
  motif?: string;
  className?: string;
}

export default function OrnamentDivider({
  motif = "✦",
  className = "",
}: OrnamentDividerProps) {
  return (
    <div
      className={`flex items-center justify-center gap-4 py-6 ${className}`}
    >
      {/* Left line */}
      <div
        style={{
          width: "clamp(40px, 10vw, 100px)",
          height: "1px",
          background:
            "linear-gradient(to right, transparent, #C9A96E, transparent)",
        }}
        aria-hidden="true"
      />

      {/* Motif symbol */}
      <span
        style={{
          color: "#C9A96E",
          opacity: 0.7,
          fontSize: "1.2rem",
          lineHeight: 1,
        }}
        aria-hidden="true"
      >
        {motif}
      </span>

      {/* Right line */}
      <div
        style={{
          width: "clamp(40px, 10vw, 100px)",
          height: "1px",
          background:
            "linear-gradient(to right, transparent, #C9A96E, transparent)",
        }}
        aria-hidden="true"
      />
    </div>
  );
}
