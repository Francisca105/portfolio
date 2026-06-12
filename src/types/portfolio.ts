// All portfolio types are inferred from the Zod schema in
// src/lib/portfolio-schema.ts so the runtime validation and the static types
// can never drift apart.
export type {
  Basics,
  Education,
  Experience,
  Icons,
  IndustryExperience,
  Language,
  LeadershipRole,
  Meta,
  Narratives,
  OpenSource,
  PortfolioData,
  Project,
  ProofOfCompetence,
  Role,
  Skills,
  StarHighlight,
  StudentOrganization,
  TechnicalSkill,
  UniversityRole,
} from "@/lib/portfolio-schema";
