"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { StarHighlight } from "@/types/portfolio";

interface HighlightsSectionProps {
  highlights: StarHighlight[];
}

export function HighlightsSection({ highlights }: HighlightsSectionProps) {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Impact Highlights
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Real results from real projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-colors">
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
        </div>
      </div>
    </section>
  );
}
