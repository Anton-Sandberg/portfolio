import Highlight from "@components/common/Highlight";

const WelcomeMessage = () => {
  return (
    <div className="text-primary flex flex-col items-center text-center text-lg space-y-4 max-w-2xl ">
      <h1 className="text-6xl font-semibold pb-0">Hejsan!</h1>

      <h2 className="text-3xl font-semibold pb-4">Välkommen till min portfolio!</h2>

      <p>
        Jag heter <Highlight className="whitespace-nowrap">Anton Såndberg</Highlight> och
        studerar <Highlight className="whitespace-nowrap">.NET-utveckling</Highlight> på
        KYH.
      </p>

      <p>
        Just nu söker jag efter en <Highlight>praktikplats</Highlight> och är taggad på
        att lära mig ännu mer.
      </p>

      <div>
        <p>
          Min <Highlight>LIA</Highlight> (Lärande i arbete) period är från:
        </p>

        <div>
          <Highlight>8 December 2025</Highlight>
          <div>till</div>
          <Highlight>24 April 2026</Highlight>
        </div>
      </div>
    </div>
  );
};

export default WelcomeMessage;
