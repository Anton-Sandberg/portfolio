import PortfolioProjectCard from "@/components/portfolio-projects-page/PortfolioProjectCard";
import { usePortfolioProjects } from "@/hooks/usePortfolioProject";

const Projects = () => {
  const result = usePortfolioProjects();

  if (result.error) return <div className="pt-10">Error: {result.error}</div>;
  if (result.loading) return <div className="pt-10">Loading...</div>;

  return (
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10">
      {result.projects.map((project) => (
        <PortfolioProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default Projects;
