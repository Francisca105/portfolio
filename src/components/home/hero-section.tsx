"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Check, ChevronDown, Copy } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import type { Basics, Narratives } from "@/types/portfolio";

interface HeroSectionProps {
  basics: Basics;
  narratives: Narratives;
}

const headingContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.15 },
  },
};

const headingWord = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const edgeWords = "Full-stack developer driven by technical challenges."
  .split(" ")
  .map((text) => ({ text, primary: false }));

export function HeroSection({ basics, narratives }: HeroSectionProps) {
  const [copied, setCopied] = useState(false);

  // Parallax: as the hero scrolls out, the content drifts down and fades
  // while the background blobs move at different speeds for depth.
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const blobOneY = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const blobTwoY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(basics.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <motion.div
          style={{ y: blobOneY }}
          className="absolute top-1/4 left-1/4"
        >
          <motion.div
            animate={{
              x: [0, 40, -25, 0],
              y: [0, -30, 20, 0],
              scale: [1, 1.15, 0.95, 1],
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            className="w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          />
        </motion.div>
        <motion.div
          style={{ y: blobTwoY }}
          className="absolute bottom-1/4 right-1/4"
        >
          <motion.div
            animate={{
              x: [0, -35, 25, 0],
              y: [0, 25, -30, 0],
              scale: [1, 0.9, 1.1, 1],
            }}
            transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
            className="w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          />
        </motion.div>
      </div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="max-w-4xl mx-auto text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-primary bg-primary/10 rounded-full border border-primary/20">
            {basics.label}
          </span>
        </motion.div>

        <motion.h1
          variants={headingContainer}
          initial="hidden"
          animate="visible"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground text-balance"
        >
          {[
            { text: "I'm", primary: false },
            { text: `${basics.name.first},`, primary: true },
            ...edgeWords,
          ].map((word, index) => (
            <motion.span
              // biome-ignore lint/suspicious/noArrayIndexKey: static word list
              key={index}
              variants={headingWord}
              className={`inline-block mr-[0.25em] ${
                word.primary ? "text-primary" : ""
              }`}
            >
              {word.text}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty"
        >
          {narratives.short}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button asChild size="lg" className="gap-2 group">
            <Link href="/projects">
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>

          <Button
            variant="outline"
            size="lg"
            onClick={copyEmail}
            className="gap-2"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" />
                Copy Email
              </>
            )}
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="mt-16 flex items-center justify-center gap-6"
        >
          <a
            href={basics.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <title>GitHub</title>
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a
            href={basics.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <title>LinkedIn</title>
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-6 w-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}
