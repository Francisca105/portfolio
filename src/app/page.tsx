"use client";

import { ErrorState } from "@/components/error-state";
import { HeroSection } from "@/components/home/hero-section";
import { HighlightsSection } from "@/components/home/highlights-section";
import { SkillsSection } from "@/components/home/skills-section";
import { Loading } from "@/components/loading";
import { PageTransition } from "@/components/page-transition";
import { useData } from "@/hooks/use-data";

export default function HomePage() {
  const { data, isLoading, isError, retry } = useData();

  if (isLoading) return <Loading />;
  if (isError || !data) return <ErrorState onRetry={retry} />;

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
