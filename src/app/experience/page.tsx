import type { Metadata } from "next";
import { ExperienceView } from "@/components/experience/experience-view";
import { PageTransition } from "@/components/page-transition";
import { getPortfolioData } from "@/lib/get-portfolio-data";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Industry experience of Francisca Almeida: Odoo ERP migrations at ThinkOpen Solutions and workflow automation at Micro Harvest.",
};

export default function ExperiencePage() {
  const data = getPortfolioData();

  return (
    <PageTransition>
      <ExperienceView data={data} />
    </PageTransition>
  );
}
