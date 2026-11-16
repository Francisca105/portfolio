"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  type LucideIcon,
  MapPin,
  Users,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { PortfolioData } from "@/types/portfolio";

interface AboutSectionProps {
  data: PortfolioData;
}

interface Fact {
  icon: LucideIcon;
  label: string;
  detail: string;
}

// The "Right now" card is derived from whatever is marked `is_current` in
// me.json, so it cannot go stale on its own.
function currentFacts(data: PortfolioData): Fact[] {
  const facts: Fact[] = [];

  for (const company of data.experience.industry) {
    const role = company.roles.find((r) => r.is_current);
    if (role) {
      facts.push({
        icon: Briefcase,
        label: role.title,
        detail: company.company,
      });
      break;
    }
  }

  const study = data.education.find((e) => e.is_current);
  if (study) {
    facts.push({
      icon: GraduationCap,
      label: study.degree,
      detail: study.institution,
    });
  }

  for (const org of data.experience.student_organizations) {
    const role = org.roles.find((r) => r.is_current);
    if (role) {
      facts.push({ icon: Users, label: role.title, detail: org.organization });
      break;
    }
  }

  if (data.basics.contact.location) {
    facts.push({
      icon: MapPin,
      label: "Based in",
      detail: data.basics.contact.location,
    });
  }

  return facts;
}

export function AboutSection({ data }: AboutSectionProps) {
  const paragraphs = data.narratives.detailed
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
  const facts = currentFacts(data);

  if (paragraphs.length === 0 && facts.length === 0) return null;

  return (
    <section
      id="about"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-[3fr_2fr] md:gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            About
          </h2>
          <div className="mt-6 space-y-4">
            {paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="text-lg text-muted-foreground leading-relaxed text-pretty"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>

        {facts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent>
                <p className="text-xs font-medium uppercase tracking-wider text-primary">
                  Right now
                </p>
                <ul className="mt-4 space-y-4">
                  {facts.map((fact) => {
                    const Icon = fact.icon;
                    return (
                      <li
                        key={`${fact.label}-${fact.detail}`}
                        className="flex items-start gap-3"
                      >
                        <Icon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <div>
                          <p className="font-medium text-foreground">
                            {fact.label}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {fact.detail}
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>
    </section>
  );
}
