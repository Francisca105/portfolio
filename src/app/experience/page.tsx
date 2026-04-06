import ExperienceList from '@/components/ExperienceList';
import { experienceEntries } from '@/lib/data/experiences';

export default function ExperiencePage() {
  return (
    <div className="container px-4 py-12 md:py-24">
      <div className="flex flex-col gap-4 mb-12">
        <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
          Experience
        </h1>
      </div>

      <ExperienceList entries={experienceEntries} />
    </div>
  );
}
