import { FlaskConical } from "lucide-react";

export default function LabPage() {
  return (
    <div className="container px-4 py-12 md:py-24">
      <div className="flex flex-col items-center justify-center text-center gap-6 max-w-[600px] mx-auto mt-20">
        <div className="p-4 rounded-full bg-secondary text-primary">
          <FlaskConical className="h-12 w-12" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
          The Lab
        </h1>
        <p className="text-xl text-muted-foreground">
          Experimental projects, Three.js demos, and half-baked ideas. This
          section is a work in progress.
        </p>
        <div className="w-full h-40 border-2 border-dashed rounded-xl flex items-center justify-center text-muted-foreground mt-8">
          Experiments coming soon...
        </div>
      </div>
    </div>
  );
}
