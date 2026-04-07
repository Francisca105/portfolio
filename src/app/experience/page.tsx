"use client";

import { useData } from "@/hooks/use-data";
import { Loading } from "@/components/loading";
import { PageTransition } from "@/components/page-transition";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export default function ExperiencePage() {
  const { data, isLoading, isError } = useData();

  if (isLoading) return <Loading />;
  if (isError || !data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Failed to load data. Please try again later.</p>
      </div>
    );
  }

  const formatDate = (dateStr: string | null) => {
    if (!dateStr) return "Present";
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
  };

  return (
    <PageTransition>
      <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
              Industry Experience
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional roles and impactful contributions
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            {data.experience.industry.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative pl-8 md:pl-0 pb-12 ${
                  index % 2 === 0 ? "md:pr-[50%] md:text-right" : "md:pl-[50%]"
                }`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full bg-primary border-4 border-background md:-translate-x-1/2`}
                />

                <Card
                  className={`ml-0 ${
                    index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                  } border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-colors`}
                >
                  <CardHeader>
                    <div
                      className={`flex flex-col gap-2 ${
                        index % 2 === 0 ? "md:items-end" : "md:items-start"
                      }`}
                    >
                      <Badge variant="outline" className="w-fit text-primary border-primary/30">
                        {exp.context}
                      </Badge>
                      <CardTitle className="text-xl text-foreground">
                        {exp.company}
                      </CardTitle>
                      <div
                        className={`flex items-center gap-2 text-sm text-muted-foreground ${
                          index % 2 === 0 ? "md:flex-row-reverse" : ""
                        }`}
                      >
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {exp.roles.map((role, roleIndex) => (
                      <div key={roleIndex} className="space-y-3">
                        <div
                          className={`flex flex-col gap-1 ${
                            index % 2 === 0 ? "md:items-end" : "md:items-start"
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <Briefcase className="h-4 w-4 text-primary" />
                            <span className="font-semibold text-foreground">
                              {role.title}
                            </span>
                            {role.is_current && (
                              <Badge className="bg-primary/20 text-primary border-0">
                                Current
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            {formatDate(role.start)} - {formatDate(role.end)}
                          </div>
                        </div>

                        {role.description && (
                          <p
                            className={`text-sm text-muted-foreground ${
                              index % 2 === 0 ? "md:text-right" : "md:text-left"
                            }`}
                          >
                            {role.description}
                          </p>
                        )}

                        {/* Impact Badges */}
                        {role.proof_of_competence && (
                          <div
                            className={`flex flex-wrap gap-2 ${
                              index % 2 === 0 ? "md:justify-end" : "md:justify-start"
                            }`}
                          >
                            {role.proof_of_competence.impact && (
                              <Badge className="bg-primary text-primary-foreground">
                                {role.proof_of_competence.impact}
                              </Badge>
                            )}
                            {role.proof_of_competence.stack?.map((tech) => (
                              <Badge
                                key={tech}
                                variant="secondary"
                                className="text-xs"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
