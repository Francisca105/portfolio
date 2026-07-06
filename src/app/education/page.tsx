import { EducationView } from "@/components/education/education-view";
import { PageTransition } from "@/components/page-transition";
import { getPortfolioData } from "@/lib/get-portfolio-data";

export default function EducationPage() {
  const data = getPortfolioData();

  return (
    <PageTransition>
      <EducationView data={data} />
    </PageTransition>
  );
}
