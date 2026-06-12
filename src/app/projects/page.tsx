"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  Check,
  ExternalLink,
  Github,
  GitPullRequest,
} from "lucide-react";
import { useState } from "react";
import { ErrorState } from "@/components/error-state";
import { Loading } from "@/components/loading";
import { PageTransition } from "@/components/page-transition";
import { ProjectDialog } from "@/components/projects/project-dialog";
import { SkillIcon } from "@/components/skill-icon";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useData } from "@/hooks/use-data";
import type { Project } from "@/types/portfolio";

export default function ProjectsPage() {
  const { data, isLoading, isError, retry } = useData();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  if (isLoading) return <Loading />;
  if (isError || !data) return <ErrorState onRetry={retry} />;

  const formatDate = (dateStr: string | null) => {
    if (!dateStr) return "Present";
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  };

  // Find matching skill icons for technologies
  const getSkillIcon = (techName: string) => {
    const skill = data.skills.technical.find(
      (s) => s.name.toLowerCase() === techName.toLowerCase(),
    );
    return skill?.icons;
  };

  return (
    <PageTransition>
      <div className="min-h-screen py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10 sm:mb-16"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
              Projects & Contributions
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Code that makes an impact
            </p>
          </motion.div>

          {/* Projects Grid */}
          <section className="mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-foreground mb-8"
            >
              Featured Projects
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-6">
              {data.projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* biome-ignore lint/a11y/useSemanticElements: the card contains nested links, which are invalid inside a native button */}
                  <Card
                    role="button"
                    tabIndex={0}
                    data-cursor="pointer"
                    onClick={() => setSelectedProject(project)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setSelectedProject(project);
                      }
                    }}
                    className="h-full cursor-pointer border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 active:scale-[0.98]"
                  >
                    <CardHeader>
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <Badge
                            variant="outline"
                            className="mb-2 text-primary border-primary/30"
                          >
                            {project.context}
                          </Badge>
                          <CardTitle className="text-xl text-foreground">
                            {project.title}
                          </CardTitle>
                          <p className="text-sm text-muted-foreground mt-1">
                            {project.role}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground shrink-0">
                          <Calendar className="h-4 w-4" />
                          {formatDate(project.start)} -{" "}
                          {project.is_current
                            ? "Present"
                            : formatDate(project.end)}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => {
                          const icons = getSkillIcon(tech);
                          return (
                            <div
                              key={tech}
                              className="flex items-center gap-1.5 px-2 py-1 bg-secondary/50 rounded-md text-xs"
                            >
                              {icons && (
                                <SkillIcon
                                  icons={icons}
                                  name={tech}
                                  size={16}
                                />
                              )}
                              <span className="text-foreground">{tech}</span>
                            </div>
                          );
                        })}
                      </div>

                      {/* Metrics */}
                      {project.proof_of_competence?.metrics && (
                        <div className="pt-3 border-t border-border/50">
                          <Badge className="bg-primary text-primary-foreground">
                            {project.proof_of_competence.metrics.badge}
                          </Badge>
                        </div>
                      )}

                      {/* Links */}
                      {project.links && (
                        <div className="flex gap-2 pt-2">
                          {project.links.github && (
                            <Button asChild variant="outline" size="sm">
                              <a
                                href={project.links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <Github className="h-4 w-4 mr-2" />
                                Code
                              </a>
                            </Button>
                          )}
                          {project.links.live && (
                            <Button asChild size="sm">
                              <a
                                href={project.links.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <ExternalLink className="h-4 w-4 mr-2" />
                                Live
                              </a>
                            </Button>
                          )}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Open Source Contributions */}
          <section>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3"
            >
              <GitPullRequest className="h-6 w-6 text-primary" />
              Open Source Contributions
            </motion.h2>

            <div className="space-y-4">
              {data.open_source.map((contribution, index) => (
                <motion.div
                  key={`${contribution.project}-${contribution.date}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10">
                    <CardContent className="py-6">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-lg font-semibold text-foreground">
                              {contribution.project}
                            </h3>
                            {contribution.proof_of_competence?.status && (
                              <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                                <Check className="h-3 w-3 mr-1" />
                                {contribution.proof_of_competence.status}
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">
                            {contribution.description}
                          </p>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {formatDate(contribution.date)}
                            </span>
                            <Badge variant="outline" className="text-xs">
                              {contribution.type}
                            </Badge>
                          </div>
                          {contribution.proof_of_competence?.impact && (
                            <Badge className="mt-3 bg-primary/20 text-primary border-0">
                              {contribution.proof_of_competence.impact}
                            </Badge>
                          )}
                        </div>

                        {contribution.links?.github && (
                          <Button asChild variant="outline" size="sm">
                            <a
                              href={contribution.links.github}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github className="h-4 w-4 mr-2" />
                              View PR
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </div>

      <ProjectDialog
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        getSkillIcon={getSkillIcon}
        formatDate={formatDate}
      />
    </PageTransition>
  );
}
