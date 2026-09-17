import type { PortfolioProject } from "@/types/PortfolioProject";
import myPortfolioImage from "@assets/images/my-portfolio-image.png";
import bankSystemImage from "@assets/images/bank-system-image.png";
import annonsApiImage from "@assets/images/annons-api-image.png";
import shapesCalculatorRpsImage from "@assets/images/shapes-calculator-rps-image.png";
import stenoTypeTrainerImage from "@assets/images/steno-type-trainer-image.svg";
import gameJamProjectsImage from "@assets/images/game-jam-projects-image.svg";

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 5,
    name: "Steno Type Trainer",
    description:
      "En träningsapp för stenografi med Plover, skapad för nybörjare och som ett sätt att utveckla mina kunskaper inom webbutveckling.",
    programmingLanguages: ["TypeScript", "HTML", "CSS"],
    techStacks: ["React", "Vite", "Vercel"],
    dateStarted: "2026-09-11",
    liveDemoLink: "https://steno-type-trainer.vercel.app/",
    imageUrl: stenoTypeTrainerImage,
  },
  {
    id: 6,
    name: "Game Jam Projects",
    description:
      "En samling mindre Unity/C#-spel från game jams och hobbyprojekt, med fokus på problemlösning, snabb iteration och att färdigställa spelbara idéer.",
    programmingLanguages: ["C#"],
    techStacks: ["Unity"],
    dateStarted: "2020",
    liveDemoLink: "https://saondberg.itch.io/",
    liveDemoLabel: "Itch.io",
    imageUrl: gameJamProjectsImage,
  },
  {
    id: 1,
    name: "Mitt Portfolio",
    description:
      "Det här är mitt portfolio, alltså den här hemsidan du är på just nu. Byggd med React och Tailwind.",
    programmingLanguages: ["HTML", "CSS", "TypeScript"],
    techStacks: ["React", "Tailwind CSS"],
    dateCompleted: "2025-05-27",
    githubLink: "https://github.com/Anton-Sandberg/portfolio",
    liveDemoLink: "https://portfolio-antonsandberg.vercel.app/",
    imageUrl: myPortfolioImage,
  },
  {
    id: 2,
    name: "Bank System",
    description:
      "Det här är en administrationsapp för bankanställda, byggd med Razor Pages och Entity Framework.",
    programmingLanguages: ["C#", "HTML", "CSS", "JavaScript"],
    techStacks: ["Razor Pages", "Entity Framework", "Bootstrap"],
    dateCompleted: "2025-05-08",
    githubLink: "https://github.com/Anton-Sandberg/BankSystem",
    imageUrl: bankSystemImage,
  },
  {
    id: 3,
    name: "Annons Web API",
    description:
      "Ett simpelt annons-API byggt med ASP.NET Core Web API. Stöd för CRUD-operationer inklusive PATCH.",
    programmingLanguages: ["C#"],
    techStacks: ["ASP.NET Core Web API"],
    dateCompleted: "2025-04-25",
    githubLink: "https://github.com/Anton-Sandberg/AnnonsAPI",
    imageUrl: annonsApiImage,
  },
  {
    id: 4,
    name: "Calculator RPS",
    description:
      "En console app med en formberäknare, miniräknare och sten-sax-påse spel.",
    programmingLanguages: ["C#"],
    techStacks: ["Console App"],
    dateCompleted: "2025-01-17",
    githubLink: "https://github.com/Anton-Sandberg/ShapesCalculatorRps",
    imageUrl: shapesCalculatorRpsImage,
  },
];

export default portfolioProjects;
