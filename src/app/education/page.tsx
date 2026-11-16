import type { Metadata } from "next";
import { EducationView } from "@/components/education/education-view";
import { PageTransition } from "@/components/page-transition";
import { getPortfolioData } from "@/lib/get-portfolio-data";

export const metadata: Metadata = {
  title: "Education & Leadership",
  description:
    "MSc and BSc in Computer Science and Engineering at Instituto Superior Técnico, university roles and student organisations.",
};

export default function EducationPage() {
  const data = getPortfolioData();

  return (
    <PageTransition>
      <EducationView data={data} />
    </PageTransition>
  );
}
