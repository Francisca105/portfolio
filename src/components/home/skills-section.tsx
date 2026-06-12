"use client";

import { motion } from "framer-motion";
import { Parallax } from "@/components/parallax";
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

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Technical Skills
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies I work with daily
          </p>
        </motion.div>

        <Parallax
          offset={25}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-6"
        >
          {visibleSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8, y: 12 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 px-6 py-4 bg-secondary/50 rounded-xl border border-border/50 hover:border-primary/30 transition-colors"
            >
              <SkillIcon icons={skill.icons} name={skill.name} size={32} />
              <span className="text-base font-medium text-foreground">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </Parallax>
      </div>
    </section>
  );
}
