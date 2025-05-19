import { useEffect, useState } from "react";
import type { PortfolioProject } from "@/types/PortfolioProject";
import type { UsePortfolioProjectsResult } from "@/types/UsePortfolioProjectResult";

const API_BASE = import.meta.env.VITE_PORTFOLIO_API_URL;

export const usePortfolioProjects = (): UsePortfolioProjectsResult => {
  const [projects, setProjects] = useState<PortfolioProject[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProjects = async (): Promise<void> => {
      try {
        const response = await fetch(`${API_BASE}/api/PortfolioProjects`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setProjects(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return { projects, error, loading };
};
