export interface Project {
  name: string;
  description: string;
  teamSize?: number | string;
  role?: string;
  technology?: string;
  breakToNewPage?: boolean;
}
