"use client";

import { useData } from "@/hooks/use-data";
import { Loading } from "@/components/loading";
import { PageTransition } from "@/components/page-transition";
import { HeroSection } from "@/components/home/hero-section";
import { HighlightsSection } from "@/components/home/highlights-section";
import { SkillsSection } from "@/components/home/skills-section";

export default function HomePage() {
  const { data, isLoading, isError } = useData();

  if (isLoading) return <Loading />;
  if (isError || !data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Failed to load data. Please try again later.</p>
      </div>
    );
  }

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
