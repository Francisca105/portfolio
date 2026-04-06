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

export default ExperienceEntry;
