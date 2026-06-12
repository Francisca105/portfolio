"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

// Respects the OS-level "reduce motion" preference for all framer-motion
// animations across the site.
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
