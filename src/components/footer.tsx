import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { getPortfolioData } from "@/lib/get-portfolio-data";

export function Footer() {
  const data = getPortfolioData();

  const github = data.basics.links.github;
  const linkedin = data.basics.links.linkedin;
  const email = data.basics.contact.email;

  return (
    <footer className="border-t border-border/50 bg-secondary/20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <Link href="/" className="text-base font-semibold text-foreground">
              Francisca <span className="text-primary">Almeida</span>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
            )}
            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            )}
            {email && (
              <a
                href={`mailto:${email}`}
                aria-label="Email"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
