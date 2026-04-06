import { ExperienceEntry } from '@/types/experience';

export const experienceEntries: ExperienceEntry[] = [
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

export default experienceEntries;
