import { Project } from "./project";

export interface Experience {
  companyName: string;
  period: string;
  projects: Project[];
  hidden?: boolean;
}
