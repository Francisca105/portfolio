"use client";

import { Calendar, ExternalLink, Github, User } from "lucide-react";
import { SkillIcon } from "@/components/skill-icon";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { Icons, Project } from "@/types/portfolio";

interface ProjectDialogProps {
  project: Project | null;
  onClose: () => void;
  getSkillIcon: (techName: string) => Icons | null | undefined;
  formatDate: (dateStr: string | null) => string;
}

export function ProjectDialog({
  project,
  onClose,
  getSkillIcon,
  formatDate,
}: ProjectDialogProps) {
  const metrics = project?.proof_of_competence?.metrics;
  const metricEntries = [
    metrics?.badge,
    metrics?.engagement,
    metrics?.analytics_impact,
  ].filter((m): m is string => !!m);

  return (
    <Dialog open={!!project} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-[calc(100%-2rem)] sm:max-w-2xl max-h-[85vh] overflow-y-auto">
        {project && (
          <>
            <DialogHeader>
              <Badge
                variant="outline"
                className="w-fit text-primary border-primary/30"
              >
                {project.context}
              </Badge>
              <DialogTitle className="text-2xl text-left">
                {project.title}
              </DialogTitle>
              <DialogDescription asChild>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
                  <span className="flex items-center gap-1.5">
                    <User className="h-4 w-4" />
                    {project.role}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4" />
                    {formatDate(project.start)} -{" "}
                    {project.is_current ? "Present" : formatDate(project.end)}
                  </span>
                </div>
              </DialogDescription>
            </DialogHeader>

            <p className="text-sm text-muted-foreground leading-relaxed">
              {project.description}
            </p>

            {project.proof_of_competence?.technical && (
              <div className="rounded-lg border border-border/50 bg-secondary/30 p-4">
                <h4 className="text-xs font-medium uppercase tracking-wider text-primary mb-2">
                  Technical Deep Dive
                </h4>
                <p className="text-sm text-muted-foreground">
                  {project.proof_of_competence.technical}
                </p>
              </div>
            )}

            {metricEntries.length > 0 && (
              <div>
                <h4 className="text-xs font-medium uppercase tracking-wider text-primary mb-2">
                  Impact
                </h4>
                <div className="flex flex-wrap gap-2">
                  {metricEntries.map((metric) => (
                    <Badge
                      key={metric}
                      className="bg-primary/15 text-primary border-0"
                    >
                      {metric}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {project.technologies.length > 0 && (
              <div>
                <h4 className="text-xs font-medium uppercase tracking-wider text-primary mb-2">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <div
                      key={tech}
                      className="flex items-center gap-1.5 px-2 py-1 bg-secondary/50 rounded-md text-xs"
                    >
                      {getSkillIcon(tech) && (
                        <SkillIcon
                          icons={getSkillIcon(tech) ?? null}
                          name={tech}
                          size={16}
                        />
                      )}
                      <span className="text-foreground">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {(project.links?.github || project.links?.live) && (
              <div className="flex gap-2 pt-2">
                {project.links?.github && (
                  <Button asChild variant="outline" size="sm">
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                )}
                {project.links?.live && (
                  <Button asChild size="sm">
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Visit Live Site
                    </a>
                  </Button>
                )}
              </div>
            )}
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
