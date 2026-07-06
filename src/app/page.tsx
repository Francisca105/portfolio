import { HeroSection } from "@/components/home/hero-section";
import { HighlightsSection } from "@/components/home/highlights-section";
import { SkillsSection } from "@/components/home/skills-section";
import { PageTransition } from "@/components/page-transition";
import { getPortfolioData } from "@/lib/get-portfolio-data";

export default function HomePage() {
  const data = getPortfolioData();

  return (
    <PageTransition>
      <div className="min-h-screen">
        <HeroSection basics={data.basics} narratives={data.narratives} />
        <HighlightsSection highlights={data.narratives.star_highlights} />
        <SkillsSection skills={data.skills} />
      </div>
    </PageTransition>
  );
}
