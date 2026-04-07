"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  Award,
  Code,
  GraduationCap,
  Rocket,
  MapPin,
  Users,
} from "lucide-react";
import { Loading } from "@/components/loading";
import { PageTransition } from "@/components/page-transition";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useData } from "@/hooks/use-data";

export default function EducationPage() {
  const { data, isLoading, isError } = useData();

  if (isLoading) return <Loading />;
  if (isError || !data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">
          Failed to load data. Please try again later.
        </p>
      </div>
    );
  }

  const formatDate = (dateStr: string | null) => {
    if (!dateStr) return "Present";
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  };

  return (
    <PageTransition>
      <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
              Education & Leadership
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Academic journey and community involvement at IST
            </p>
          </motion.div>

          {/* Academic Education */}
          <section className="mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3"
            >
              <GraduationCap className="h-6 w-6 text-primary" />
              Academic Background
            </motion.h2>

            <div className="space-y-6">
              {data.education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-colors">
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                        <div>
                          <Badge
                            variant="outline"
                            className="mb-2 text-primary border-primary/30"
                          >
                            {edu.context}
                          </Badge>
                          <CardTitle className="text-xl text-foreground">
                            {edu.degree}
                          </CardTitle>
                          <p className="text-lg text-muted-foreground mt-1">
                            {edu.institution}
                          </p>
                        </div>
                        <div className="flex flex-col gap-1 text-sm text-muted-foreground sm:text-right">
                          <div className="flex items-center gap-2 sm:flex-row-reverse">
                            <MapPin className="h-4 w-4" />
                            {edu.location}
                          </div>
                          <div className="flex items-center gap-2 sm:flex-row-reverse">
                            <Calendar className="h-4 w-4" />
                            {formatDate(edu.start)} - {formatDate(edu.end)}
                            {edu.is_current && (
                              <Badge className="bg-primary/20 text-primary border-0 ml-2">
                                Current
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Highlights */}
                      {edu.highlights && edu.highlights.length > 0 && (
                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-3">
                            Key Projects & Achievements
                          </h4>
                          <ul className="space-y-2">
                            {edu.highlights.map((highlight, hIndex) => (
                              <li
                                key={hIndex}
                                className="text-sm text-muted-foreground flex items-start gap-2"
                              >
                                <span className="text-primary mt-1">•</span>
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Leadership Roles */}
                      {edu.leadership_roles &&
                        edu.leadership_roles.length > 0 && (
                          <div className="pt-4 border-t border-border/50">
                            <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                              <Award className="h-4 w-4 text-primary" />
                              Leadership Roles
                            </h4>
                            <div className="space-y-3">
                              {edu.leadership_roles.map((role, rIndex) => (
                                <div
                                  key={rIndex}
                                  className="bg-secondary/30 rounded-lg p-3"
                                >
                                  <div className="flex items-center justify-between">
                                    <span className="font-medium text-foreground">
                                      {role.title}
                                    </span>
                                    <span className="text-xs text-muted-foreground">
                                      {role.period}
                                    </span>
                                  </div>
                                  <p className="text-sm text-muted-foreground mt-1">
                                    {role.description}
                                  </p>
                                  {role.highlight && (
                                    <Badge className="mt-2 bg-primary text-primary-foreground">
                                      {role.highlight}
                                    </Badge>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          {/* University Roles */}
          <section className="mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3"
            >
              <Code className="h-6 w-6 text-primary" />
              University Roles
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-6">
              {data.experience.university_roles.map((role, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-colors">
                    <CardHeader>
                      <Badge
                        variant="outline"
                        className="w-fit mb-2 text-primary border-primary/30"
                      >
                        {role.context}
                      </Badge>
                      <CardTitle className="text-lg text-foreground">
                        {role.organization}
                      </CardTitle>
                      <p className="text-sm text-primary">{role.project}</p>
                    </CardHeader>
                    <CardContent>
                      {role.roles.map((r, rIndex) => (
                        <div key={rIndex} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="font-medium text-foreground">
                              {r.title}
                            </span>
                            {r.is_current && (
                              <Badge className="bg-primary/20 text-primary border-0">
                                Current
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            {formatDate(r.start)} - {formatDate(r.end)}
                          </div>
                          {r.description && (
                            <p className="text-sm text-muted-foreground">
                              {r.description}
                            </p>
                          )}
                          {r.proof_of_competence?.scope && (
                            <Badge variant="secondary" className="mt-2">
                              {r.proof_of_competence.scope}
                            </Badge>
                          )}
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Student Organizations */}
          <section>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3"
            >
              <Users className="h-6 w-6 text-primary" />
              Student Organizations
            </motion.h2>

            <div className="space-y-6">
              {data.experience.student_organizations.map((org, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-colors">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            {org.organization === "SINFO" && (
                              <Rocket className="h-5 w-5 text-primary" />
                            )}
                            {org.organization === "AeroTéc" && (
                              <Rocket className="h-5 w-5 text-primary" />
                            )}
                            {org.organization === "NEIIST" && (
                              <Code className="h-5 w-5 text-primary" />
                            )}
                            <CardTitle className="text-xl text-foreground">
                              {org.organization}
                            </CardTitle>
                          </div>
                          <Badge
                            variant="outline"
                            className="text-primary border-primary/30"
                          >
                            {org.type}
                          </Badge>
                        </div>

                        {/* Scale Metrics */}
                        {org.roles.some(
                          (r) => r.proof_of_competence?.scale,
                        ) && (
                          <div className="text-right">
                            {org.roles
                              .filter((r) => r.proof_of_competence?.scale)
                              .map((r, i) => (
                                <Badge
                                  key={i}
                                  className="bg-primary text-primary-foreground text-lg px-3 py-1"
                                >
                                  {r.proof_of_competence?.scale}
                                </Badge>
                              ))}
                          </div>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {org.roles.map((role, rIndex) => (
                          <div
                            key={rIndex}
                            className="border-l-2 border-primary/30 pl-4"
                          >
                            <div className="flex items-center gap-2 mb-2">
                              <span className="font-semibold text-foreground">
                                {role.title}
                              </span>
                              {role.is_current && (
                                <Badge className="bg-primary/20 text-primary border-0">
                                  Current
                                </Badge>
                              )}
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                              <Calendar className="h-4 w-4" />
                              {formatDate(role.start)} - {formatDate(role.end)}
                            </div>
                            {role.highlights && (
                              <ul className="space-y-1">
                                {role.highlights.map((h, hIndex) => (
                                  <li
                                    key={hIndex}
                                    className="text-sm text-muted-foreground flex items-start gap-2"
                                  >
                                    <span className="text-primary">•</span>
                                    {h}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </PageTransition>
  );
}
