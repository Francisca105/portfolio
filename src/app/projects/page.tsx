import { PageTransition } from "@/components/page-transition";
import { ProjectsView } from "@/components/projects/projects-view";
import { getPortfolioData } from "@/lib/get-portfolio-data";

export default function ProjectsPage() {
  const data = getPortfolioData();

  return (
    <PageTransition>
      <ProjectsView data={data} />
    </PageTransition>
  );
}
