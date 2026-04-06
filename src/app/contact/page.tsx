import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="container px-4 py-12 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="flex flex-col gap-6">
          <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground">
            I'm always open to discussing new projects, backend architecture, or
            full-stack opportunities.
          </p>

          <div className="flex flex-col gap-4 mt-4">
            <a
              href="mailto:francisca04almeida@outlook.com"
              className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors text-lg"
            >
              <Mail className="h-6 w-6" /> francisca04almeida@outlook.com
            </a>
            <a
              href="https://www.linkedin.com/in/francisca-105-almeida/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors text-lg"
            >
              <Linkedin className="h-6 w-6" /> LinkedIn Profile
            </a>
            <a
              href="https://github.com/Francisca105"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors text-lg"
            >
              <Github className="h-6 w-6" /> GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
