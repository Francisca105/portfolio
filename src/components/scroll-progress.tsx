"use client";

import { motion, useScroll, useSpring } from "framer-motion";

// Thin reading-progress bar pinned just below the fixed navbar.
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 40,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-16 left-0 right-0 z-50 h-0.5 origin-left bg-primary/70"
      aria-hidden="true"
    />
  );
}
