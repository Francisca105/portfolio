import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Project One",
    description: "Placeholder description for project one.",
    tags: ["Java", "Spring Boot", "React", "PostgreSQL"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Project Two",
    description: "Placeholder description for project two.",
    tags: ["Python", "FastAPI", "Docker"],
    github: "https://github.com",
  },
  {
    title: "Project Three",
    description: "Placeholder description for project three.",
    tags: ["TypeScript", "Next.js", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
];

export default function ProjectsPage() {
  return (
    <div className="container px-4 py-12 md:py-24">
      <div className="flex flex-col gap-4 mb-12">
        <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">Projects</h1>
        <p className="text-xl text-muted-foreground max-w-[700px]">
          A selection of my best work, spanning backend architecture, tools, and full-stack applications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.title} className="group flex flex-col rounded-xl border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow">
            <div className="p-6 flex flex-col flex-1 gap-2">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 rounded-md bg-secondary text-secondary-foreground text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-6 pt-0 flex gap-4 mt-auto">
              <Button asChild variant="outline" size="sm">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" /> Code
                </a>
              </Button>
              {project.demo && (
                <Button asChild size="sm">
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" /> Demo
                  </a>
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
