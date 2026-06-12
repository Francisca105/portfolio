"use client";

import { motion } from "framer-motion";
import type { CSSProperties } from "react";
import { SkillIcon } from "@/components/skill-icon";
import type { Skills } from "@/types/portfolio";

interface SkillsSectionProps {
  skills: Skills;
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  const visibleSkills = skills.technical.filter(
    (skill) => skill.show_in_website,
  );

  if (visibleSkills.length === 0) return null;

  // Repeat the visible skills until each marquee half is wide enough to
  // loop seamlessly on large screens.
  const copies = Math.max(2, Math.ceil(10 / visibleSkills.length));
  const half = Array.from({ length: copies }, () => visibleSkills).flat();
  const marqueeStyle = {
    "--marquee-duration": `${half.length * 3}s`,
  } as CSSProperties;

  return (
    <section className="py-16 sm:py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Technical Skills
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies I work with daily
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="marquee marquee-mask overflow-hidden"
      >
        <div className="marquee-track flex w-max" style={marqueeStyle}>
          {[0, 1].map((halfIndex) => (
            <div
              key={halfIndex}
              aria-hidden={halfIndex === 1}
              className="flex gap-4 sm:gap-6 pr-4 sm:pr-6"
            >
              {half.map((skill, index) => (
                <div
                  key={`${skill.name}-${index}`}
                  className="flex items-center gap-3 px-4 py-3 sm:px-6 sm:py-4 bg-secondary/50 rounded-xl border border-border/50 hover:border-primary/30 hover:scale-105 transition-all duration-300"
                >
                  <SkillIcon icons={skill.icons} name={skill.name} size={28} />
                  <span className="text-sm sm:text-base font-medium text-foreground whitespace-nowrap">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
