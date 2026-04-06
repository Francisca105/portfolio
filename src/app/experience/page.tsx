const experienceEntries = [
  {
    title: "Full-Stack Developer (Research Initiation Grant)",
    org: "DSI - Instituto Superior Técnico",
    period: "Jun 2025 - Present",
    situation:
      "University administration relied on manual workflows for course withdrawal and related processes.",
    task: "Deliver an automated digital system with a robust state machine to replace manual steps and improve reliability.",
    stack: ["Java", "Spring Boot", "Postgres", "TypeScript", "Vue.js"],
    action: [
      "Designed the overall architecture using Java and Spring Boot with an explicit state-machine to model workflow stages.",
      "Implemented backend services, validation, and integrations with internal administrative systems.",
      "Collaborated directly with administrative staff to iterate requirements and ensure the solution mapped to real operational needs.",
    ],
    result:
      "Replaced the manual workflow with an automated system that reduces human error and enables reliable, auditable state transitions.",
  },

  {
    title: "Data Management Intern",
    org: "Micro Harvest - Lisbon",
    period: "Aug 2024 - Nov 2024",
    situation:
      "Fermentation operations relied on Excel files to plan and record data, spreadsheets were manually created.",
    task: "Automate generation of Excel files and migrate the Streamlit prototype to a production stack to centralize and scale operations.",
    stack: ["FastAPI", "Next.js", "Docker", "Postgres", "Python"],
    action: [
      "Reimplemented the Streamlit prototype as a Next.js frontend with a FastAPI backend and containerized the stack with Docker.",
      "Automated creation and validation of Excel files used by the fermentation operations team, replacing manual spreadsheet work.",
      "Built SQL-backed workflows to replace ad-hoc spreadsheets and validated edge cases with operations users.",
    ],
    result:
      "Delivered a centralized dashboard and automated Excel generation, reducing manual work and cutting data processing latency.",
  },
];

export default function ExperiencePage() {
  return (
    <div className="container px-4 py-12 md:py-24">
      <div className="flex flex-col gap-4 mb-12">
        <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
          Experience
        </h1>
        <p className="text-xl text-muted-foreground max-w-[700px]">
          Selected roles presented using the STAR method (Situation, Task,
          Action, Result).
        </p>
      </div>

      <div className="space-y-12">
        {experienceEntries.map((e, idx) => (
          <article
            key={idx}
            className="relative rounded-lg border bg-card p-6 text-card-foreground shadow-sm"
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="text-sm text-muted-foreground">{e.org}</div>
                <h2 className="mt-1 text-xl font-semibold">{e.title}</h2>
                <div className="mt-1 text-sm text-muted-foreground">
                  {e.period}
                </div>
              </div>
            </div>

            <dl className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <dt className="text-xs font-medium text-muted-foreground">
                  Situation
                </dt>
                <dd className="mt-1 text-sm text-foreground">{e.situation}</dd>
              </div>

              <div>
                <dt className="text-xs font-medium text-muted-foreground">
                  Task
                </dt>
                <dd className="mt-1 text-sm text-foreground">{e.task}</dd>
              </div>

              <div className="sm:col-span-2">
                <dt className="text-xs font-medium text-muted-foreground">
                  Action
                </dt>
                <dd className="mt-1 text-sm text-foreground">
                  <ul className="list-disc list-inside space-y-2">
                    {e.action.map((a, i) => (
                      <li key={i}>{a}</li>
                    ))}
                  </ul>
                </dd>
              </div>

              <div className="sm:col-span-2">
                <dt className="text-xs font-medium text-muted-foreground">
                  Result
                </dt>
                <dd className="mt-1 text-sm text-foreground">{e.result}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </div>
  );
}
