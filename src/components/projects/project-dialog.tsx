"use client";

import {
  Calendar,
  ExternalLink,
  GitCommitHorizontal,
  Github,
  User,
} from "lucide-react";
import { ProjectGallery } from "@/components/projects/project-gallery";
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
import { formatMonth } from "@/lib/format-date";
import type { Icons, Project } from "@/types/portfolio";

interface ProjectDialogProps {
  project: Project | null;
  onClose: () => void;
  getSkillIcon: (techName: string) => Icons | null | undefined;
}

export function ProjectDialog({
  project,
  onClose,
  getSkillIcon,
}: ProjectDialogProps) {
  const metrics = project?.proof_of_competence?.metrics;
  const metricEntries = [
    metrics?.badge,
    metrics?.engagement,
    metrics?.analytics_impact,
  ].filter((m): m is string => !!m);

  // Problem -> Solution -> Result, shown only for the parts that exist.
  const story = [
    { label: "Problem", text: project?.problem, emphasis: false },
    { label: "Solution", text: project?.solution, emphasis: false },
    { label: "Result", text: project?.result, emphasis: true },
  ].flatMap((step) => (step.text ? [{ ...step, text: step.text }] : []));

  return (
    <Dialog open={!!project} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-[calc(100%-2rem)] sm:max-w-2xl max-h-[85vh] overflow-y-auto">
        {project && (
          <>
            <ProjectGallery
              key={project.title}
              images={[
                ...(project.image ? [project.image] : []),
                ...project.gallery,
              ]}
            />

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
                    {formatMonth(project.start)} -{" "}
                    {project.is_current ? "Present" : formatMonth(project.end)}
                  </span>
                </div>
              </DialogDescription>
            </DialogHeader>

            <p className="text-sm text-muted-foreground leading-relaxed">
              {project.description}
            </p>

            {story.length > 0 && (
              <div className="space-y-4 rounded-lg border border-border/50 bg-secondary/30 p-4">
                {story.map((step) => (
                  <div key={step.label}>
                    <h4 className="text-xs font-medium uppercase tracking-wider text-primary mb-1">
                      {step.label}
                    </h4>
                    <p
                      className={
                        step.emphasis
                          ? "text-sm font-medium text-foreground"
                          : "text-sm text-muted-foreground"
                      }
                    >
                      {step.text}
                    </p>
                  </div>
                ))}
              </div>
            )}

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
                  {project.technologies.map((tech) => {
                    const icons = getSkillIcon(tech);
                    return (
                      <div
                        key={tech}
                        className="flex items-center gap-1.5 px-2 py-1 bg-secondary/50 rounded-md text-xs"
                      >
                        {icons && (
                          <SkillIcon icons={icons} name={tech} size={16} />
                        )}
                        <span className="text-foreground">{tech}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {(project.links?.github ||
              project.links?.commits ||
              project.links?.live) && (
              <div className="flex flex-wrap gap-2 pt-2">
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
                {project.links?.commits && (
                  <Button asChild variant="outline" size="sm">
                    <a
                      href={project.links.commits}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GitCommitHorizontal className="h-4 w-4 mr-2" />
                      My commits
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
