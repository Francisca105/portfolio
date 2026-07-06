import { ExperienceView } from "@/components/experience/experience-view";
import { PageTransition } from "@/components/page-transition";
import { getPortfolioData } from "@/lib/get-portfolio-data";

export default function ExperiencePage() {
  const data = getPortfolioData();

  return (
    <PageTransition>
      <ExperienceView data={data} />
    </PageTransition>
  );
}
