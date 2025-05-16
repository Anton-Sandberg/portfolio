import Highlight from "@components/common/Highlight";

const WelcomeMessage = () => {
  return (
    <div className="text-primary flex flex-col items-center text-center text-lg px-4 space-y-6 max-w-2xl mx-auto">
      <h1 className="text-6xl font-semibold">Hejsan!</h1>

      <h2 className="text-3xl font-semibold">Välkommen till min portfolio!</h2>

      <p>
        Jag heter <Highlight>Anton Såndberg</Highlight> och studerar just nu
        <Highlight>.NET-utveckling</Highlight> på KYH.
      </p>

      <p>
        Jag söker just nu efter en <Highlight>praktikplats</Highlight> och är taggad på
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
