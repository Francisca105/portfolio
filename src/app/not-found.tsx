"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Compass } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-8xl sm:text-9xl font-bold tracking-tight text-primary/20 select-none"
        >
          404
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, type: "spring", bounce: 0.4 }}
          className="mx-auto -mt-8 mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary"
        >
          <motion.div
            animate={{ rotate: [0, 12, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Compass className="h-8 w-8" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <h1 className="text-2xl font-semibold text-foreground">
            This page wandered off
          </h1>
          <p className="mt-2 text-muted-foreground max-w-md mx-auto">
            The page you are looking for does not exist or has been moved.
          </p>
          <Button asChild className="mt-8 gap-2">
            <Link href="/">
              <ArrowLeft className="h-4 w-4" />
              Back to home
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
