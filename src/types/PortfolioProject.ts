export interface PortfolioProject {
  id: number;
  name: string;
  description: string;
  programmingLanguages: string[];
  techStacks: string[];
  dateStarted?: string;
  dateCompleted?: string;
  githubLink?: string;
  liveDemoLink?: string;
  liveDemoLabel?: string;
  imageUrl: string;
}
