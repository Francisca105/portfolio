import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container px-4 py-12 md:py-24">
      <section className="flex flex-col items-start gap-6 max-w-[800px]">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Hi, I'm <span className="text-primary">Francisca</span>.
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Full-Stack Software Engineer based in Lisbon. I specialize in building scalable systems with 
          <span className="text-foreground font-medium"> Java</span>, 
          <span className="text-foreground font-medium"> Next.js</span>, and 
          <span className="text-foreground font-medium"> FastAPI</span>. 
          Focused on automation, performance, and clean architecture.
        </p>
        <div className="flex flex-wrap gap-4 pt-4">
          <Button asChild size="lg">
            <Link href="/projects">
              View My Work <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
        <div className="flex gap-4 pt-4 text-muted-foreground">
          <a href="https://github.com/Francisca105" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
            <Github className="h-6 w-6" />
          </a>
          <a href="https://linkedin.com/in/francisca105" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
            <Linkedin className="h-6 w-6" />
          </a>
          <a href="mailto:francisca@example.com" className="hover:text-foreground transition-colors">
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </section>

      <section className="mt-24 md:mt-32">
        <h2 className="text-2xl font-bold tracking-tight mb-8">Specializations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl border bg-card text-card-foreground shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Backend Systems</h3>
            <p className="text-sm text-muted-foreground">
              Designing robust APIs and microservices using Java (Spring Boot) and Python (FastAPI).
            </p>
          </div>
          <div className="p-6 rounded-xl border bg-card text-card-foreground shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Frontend Engineering</h3>
            <p className="text-sm text-muted-foreground">
              Crafting performant, accessible user interfaces with React, Next.js, and Tailwind CSS.
            </p>
          </div>
          <div className="p-6 rounded-xl border bg-card text-card-foreground shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Architecture & DX</h3>
            <p className="text-sm text-muted-foreground">
              Optimizing CI/CD pipelines and focusing on clean, maintainable code standards.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
