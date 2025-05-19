import type { PortfolioProject } from "./PortfolioProject";

export interface UsePortfolioProjectsResult {
  projects: PortfolioProject[];
  error: string | null;
  loading: boolean;
}
