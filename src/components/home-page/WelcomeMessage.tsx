import Highlight from "@components/common/Highlight";

const WelcomeMessage = () => {
  return (
    <div className="text-primary flex flex-col items-center text-center text-lg space-y-4 max-w-2xl ">
      <h1 className="text-6xl font-semibold pb-0">Hejsan!</h1>

      <h2 className="text-3xl font-semibold pb-4">Välkommen till min portfolio!</h2>

      <p>
        Jag heter <Highlight className="whitespace-nowrap">Anton Såndberg</Highlight> och
        är utbildad inom <Highlight className="whitespace-nowrap">.NET-utveckling</Highlight>.
      </p>

      <p>
        Just nu söker jag min första utvecklarroll och fortsätter samtidigt att bygga
        egna projekt inom webbutveckling och systemutveckling.
      </p>

      <p>
        Bland annat utvecklar jag just nu en webbaserad app för att lära ut stenografi
        med Plover.
      </p>
    </div>
  );
};

export default WelcomeMessage;
