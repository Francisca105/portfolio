import { z } from "zod";

/**
 * Schema for me.json. Every field has a fallback (.catch/.optional) so a
 * missing or malformed value degrades to an empty/safe default instead of
 * breaking the whole page.
 */

const safeString = z.string().catch("");
const dateString = z.string().nullable().catch(null);
const safeStringArray = z.array(z.string().catch("")).catch([]);

export const iconsSchema = z
  .object({
    light: safeString,
    dark: safeString,
  })
  .nullable()
  .catch(null);

const metricsSchema = z
  .object({
    badge: z.string().optional(),
    engagement: z.string().optional(),
    analytics_impact: z.string().optional(),
  })
  .optional()
  .catch(undefined);

const proofOfCompetenceSchema = z
  .object({
    impact: z.string().optional(),
    stack: safeStringArray.optional(),
    scope: z.string().optional(),
    scale: z.string().optional(),
    leadership: z.string().optional(),
    analytics: z.string().optional(),
    field: z.string().optional(),
    complexity: z.string().optional(),
    metrics: metricsSchema,
    technical: z.string().optional(),
    status: z.string().optional(),
  })
  .optional()
  .catch(undefined);

const linksSchema = z
  .object({
    github: z.string().optional(),
    live: z.string().optional(),
  })
  .optional()
  .catch(undefined);

const roleSchema = z.object({
  title: safeString,
  start: dateString,
  end: dateString,
  is_current: z.boolean().catch(false),
  description: z.string().optional().catch(undefined),
  highlights: safeStringArray.optional().catch(undefined),
  proof_of_competence: proofOfCompetenceSchema,
});

const metaSchema = z
  .object({
    last_updated: safeString,
    author: safeString,
    language: safeString,
  })
  .catch({ last_updated: "", author: "", language: "en" });

const basicsSchema = z
  .object({
    name: z.object({
      first: safeString,
      last: safeString,
      full: safeString,
      aka: safeString,
    }),
    label: safeString,
    birth: z
      .object({
        date: safeString,
        location: safeString,
      })
      .catch({ date: "", location: "" }),
    contact: z.object({
      email: safeString,
      location: safeString,
    }),
    links: z.object({
      website: safeString,
      github: safeString,
      linkedin: safeString,
    }),
  })
  .catch({
    name: { first: "", last: "", full: "", aka: "" },
    label: "",
    birth: { date: "", location: "" },
    contact: { email: "", location: "" },
    links: { website: "", github: "", linkedin: "" },
  });

const starHighlightSchema = z.object({
  id: safeString,
  title: safeString,
  situation: safeString,
  action: safeString,
  result: safeString,
});

const narrativesSchema = z
  .object({
    short: safeString,
    detailed: safeString,
    star_highlights: z.array(starHighlightSchema).catch([]),
  })
  .catch({ short: "", detailed: "", star_highlights: [] });

const industryExperienceSchema = z.object({
  company: safeString,
  context: safeString,
  location: safeString,
  roles: z.array(roleSchema).catch([]),
});

const universityRoleSchema = z.object({
  organization: safeString,
  context: safeString,
  project: safeString,
  roles: z.array(roleSchema).catch([]),
});

const studentOrganizationSchema = z.object({
  organization: safeString,
  context: safeString,
  type: safeString,
  roles: z.array(roleSchema).catch([]),
});

const experienceSchema = z
  .object({
    industry: z.array(industryExperienceSchema).catch([]),
    university_roles: z.array(universityRoleSchema).catch([]),
    student_organizations: z.array(studentOrganizationSchema).catch([]),
  })
  .catch({ industry: [], university_roles: [], student_organizations: [] });

const leadershipRoleSchema = z.object({
  title: safeString,
  period: safeString,
  description: safeString,
  highlight: z.string().optional(),
});

const educationSchema = z.object({
  degree: safeString,
  context: safeString,
  institution: safeString,
  location: safeString,
  start: dateString,
  end: dateString,
  is_current: z.boolean().catch(false),
  highlights: safeStringArray.optional().catch(undefined),
  leadership_roles: z.array(leadershipRoleSchema).optional().catch(undefined),
});

const projectSchema = z.object({
  title: safeString,
  context: safeString,
  role: safeString,
  start: dateString,
  end: dateString,
  is_current: z.boolean().catch(false),
  description: safeString,
  technologies: safeStringArray,
  proof_of_competence: proofOfCompetenceSchema,
  links: linksSchema,
});

const openSourceSchema = z.object({
  project: safeString,
  context: safeString,
  type: safeString,
  date: safeString,
  description: safeString,
  proof_of_competence: proofOfCompetenceSchema,
  links: linksSchema,
});

const languageSchema = z.object({
  name: safeString,
  level: safeString,
});

const technicalSkillSchema = z.object({
  name: safeString,
  category: z.string().catch("Other"),
  level: safeString,
  start_year: z.number().catch(0),
  is_featured: z.boolean().catch(false),
  icons: iconsSchema,
});

const skillsSchema = z
  .object({
    languages: z.array(languageSchema).catch([]),
    technical: z.array(technicalSkillSchema).catch([]),
  })
  .catch({ languages: [], technical: [] });

export const portfolioSchema = z.object({
  meta: metaSchema,
  basics: basicsSchema,
  narratives: narrativesSchema,
  experience: experienceSchema,
  education: z.array(educationSchema).catch([]),
  projects: z.array(projectSchema).catch([]),
  open_source: z.array(openSourceSchema).catch([]),
  skills: skillsSchema,
});

export type PortfolioData = z.infer<typeof portfolioSchema>;
export type Meta = z.infer<typeof metaSchema>;
export type Basics = z.infer<typeof basicsSchema>;
export type Narratives = z.infer<typeof narrativesSchema>;
export type StarHighlight = z.infer<typeof starHighlightSchema>;
export type ProofOfCompetence = NonNullable<
  z.infer<typeof proofOfCompetenceSchema>
>;
export type Role = z.infer<typeof roleSchema>;
export type IndustryExperience = z.infer<typeof industryExperienceSchema>;
export type UniversityRole = z.infer<typeof universityRoleSchema>;
export type StudentOrganization = z.infer<typeof studentOrganizationSchema>;
export type Experience = z.infer<typeof experienceSchema>;
export type LeadershipRole = z.infer<typeof leadershipRoleSchema>;
export type Education = z.infer<typeof educationSchema>;
export type Project = z.infer<typeof projectSchema>;
export type OpenSource = z.infer<typeof openSourceSchema>;
export type Icons = NonNullable<z.infer<typeof iconsSchema>>;
export type Language = z.infer<typeof languageSchema>;
export type TechnicalSkill = z.infer<typeof technicalSkillSchema>;
export type Skills = z.infer<typeof skillsSchema>;
