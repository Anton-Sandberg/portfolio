import type { PortfolioProject } from "@/types/PortfolioProject";
import Highlight from "@components/common/Highlight";
import { FaGithub, FaPlayCircle } from "react-icons/fa";
interface Props {
  project: PortfolioProject;
}

const formatProjectDate = (date: string) => {
  if (/^\d{4}$/.test(date)) return date;

  return new Date(date).toLocaleDateString("sv-SE");
};

const PortfolioProjectCard = ({ project }: Props) => {
  const {
    name,
    description,
    programmingLanguages,
    techStacks,
    dateStarted,
    dateCompleted,
    githubLink,
    liveDemoLink,
    liveDemoLabel,
    imageUrl,
  } = project;

  return (
    <div className="rounded-2xl bg-neutral-900 p-4 flex flex-col h-full">
      <div className="flex justify-between items-start mb-4">
        <div>
          <Highlight className="text-2xl">
            <h3>{name}</h3>
          </Highlight>
          <p className="text-sm italic">
            {dateStarted && `${formatProjectDate(dateStarted)} – `}
            {dateCompleted ? formatProjectDate(dateCompleted) : "Pågående"}
          </p>
        </div>
        <div className="size-12">
          <img src={imageUrl} alt={`Preview of ${name}`} className="w-full h-full" />
        </div>
      </div>
      <Highlight>Beskrivning:</Highlight>
      <p className=" mb-4">{description}</p>

      <div className="text-sm mb-4">
        <p>
          <Highlight>Språk:</Highlight> {programmingLanguages.join(", ")}
        </p>
        <p>
          <Highlight>Tech Stack:</Highlight> {techStacks.join(", ")}
        </p>
      </div>

      <div className="flex gap-6 mt-auto">
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:text-white"
          >
            <div className="flex items-center gap-2">
              <FaGithub className="size-10" />
              <p>Github</p>
            </div>
          </a>
        )}

        {liveDemoLink && (
          <a
            href={liveDemoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:text-white"
          >
            <div className="flex items-center gap-2">
              <FaPlayCircle className="size-10" />
              <p>{liveDemoLabel ?? "Live Demo"}</p>
            </div>
          </a>
        )}
      </div>
    </div>
  );
};

export default PortfolioProjectCard;
