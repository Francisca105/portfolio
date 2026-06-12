"use client";

import { motion } from "framer-motion";
import { Parallax } from "@/components/parallax";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { StarHighlight } from "@/types/portfolio";

interface HighlightsSectionProps {
  highlights: StarHighlight[];
}

export function HighlightsSection({ highlights }: HighlightsSectionProps) {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Impact Highlights
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Real results from real projects
          </p>
        </motion.div>

        <Parallax offset={30} className="grid md:grid-cols-2 gap-6">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">
                    {highlight.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <span className="text-xs font-medium uppercase tracking-wider text-primary">
                      Situation
                    </span>
                    <p className="mt-1 text-muted-foreground text-sm">
                      {highlight.situation}
                    </p>
                  </div>
                  <div>
                    <span className="text-xs font-medium uppercase tracking-wider text-primary">
                      Action
                    </span>
                    <p className="mt-1 text-muted-foreground text-sm">
                      {highlight.action}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-border/50">
                    <span className="text-xs font-medium uppercase tracking-wider text-primary">
                      Result
                    </span>
                    <p className="mt-1 text-foreground font-medium">
                      {highlight.result}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Parallax>
      </div>
    </section>
  );
}
