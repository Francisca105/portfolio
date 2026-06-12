"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { type ReactNode, useRef } from "react";

interface ParallaxProps {
  children: ReactNode;
  /** Total vertical travel in px while the element crosses the viewport. */
  offset?: number;
  className?: string;
}

// Moves its children slightly against the scroll direction for depth.
export function Parallax({ children, offset = 40, className }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}
