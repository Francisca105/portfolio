export type ExperienceEntry = {
  title: string;
  org: string;
  period: string;
  situation: string;
  task: string;
  action: string[];
  result: string;
  stack?: string[];
};

export default function ExperienceList({
  entries,
}: {
  entries: ExperienceEntry[];
}) {
  return (
    <div className="space-y-12">
      {entries.map((e) => (
        <article
          key={`${e.org}-${e.period}-${e.title}`}
          className="relative rounded-lg border bg-card p-6 text-card-foreground shadow-sm"
        >
          <div className="flex items-start justify-between">
            <div>
              <div className="text-sm text-muted-foreground">{e.org}</div>
              <h2 className="mt-1 text-xl font-semibold">{e.title}</h2>
              <div className="mt-1 text-sm text-muted-foreground">{e.period}</div>

              {e.stack && e.stack.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {e.stack.map((s) => (
                    <span
                      key={s}
                      className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          <dl className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <dt className="text-xs font-medium text-muted-foreground">Situation</dt>
              <dd className="mt-1 text-sm text-foreground">{e.situation}</dd>
            </div>

            <div>
              <dt className="text-xs font-medium text-muted-foreground">Task</dt>
              <dd className="mt-1 text-sm text-foreground">{e.task}</dd>
            </div>

            <div className="sm:col-span-2">
              <dt className="text-xs font-medium text-muted-foreground">Action</dt>
              <dd className="mt-1 text-sm text-foreground">
                <ul className="list-disc list-inside space-y-2">
                  {e.action.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
              </dd>
            </div>

            <div className="sm:col-span-2">
              <dt className="text-xs font-medium text-muted-foreground">Result</dt>
              <dd className="mt-1 text-sm text-foreground">{e.result}</dd>
            </div>
          </dl>
        </article>
      ))}
    </div>
  );
}
