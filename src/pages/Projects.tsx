import PortfolioProjectCard from "@/components/portfolio-projects-page/PortfolioProjectCard";
import portfolioProjects from "@/constants/portfolioProjectsData";

const Projects = () => {
  return (
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10">
      {portfolioProjects.map((project) => (
        <PortfolioProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default Projects;
