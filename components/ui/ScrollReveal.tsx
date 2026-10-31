"use client";
import { useRef, ReactNode } from "react";
import { motion, useInView, Variants } from "framer-motion";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
}

const getTranslate = (
  direction: "up" | "down" | "left" | "right"
): { x?: number; y?: number } => {
  switch (direction) {
    case "up":
      return { y: 30 };
    case "down":
      return { y: -30 };
    case "left":
      return { x: 30 };
    case "right":
      return { x: -30 };
  }
};

export default function ScrollReveal({
  children,
  delay = 0,
  className = "",
  direction = "up",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const translate = getTranslate(direction);

  const variants: Variants = {
    hidden: {
      opacity: 0,
      filter: "blur(4px)",
      ...translate,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      x: 0,
      y: 0,
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
