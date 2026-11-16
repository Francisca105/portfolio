import type { Metadata } from "next";
import { PageTransition } from "@/components/page-transition";
import { ProjectsView } from "@/components/projects/projects-view";
import { getPortfolioData } from "@/lib/get-portfolio-data";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "SINFO website rebuild, NEIIST merch store and merged open-source pull requests by Francisca Almeida.",
};

export default function ProjectsPage() {
  const data = getPortfolioData();

  return (
    <PageTransition>
      <ProjectsView data={data} />
    </PageTransition>
  );
}
