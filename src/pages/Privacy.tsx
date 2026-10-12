import Highlight from "@/components/common/Highlight";
import { CONTACT_EMAIL } from "@/constants/contact";

const Privacy = () => {
  return (
    <article className="max-w-3xl mx-auto py-10 text-lg leading-relaxed">
      <header className="mb-8">
        <Highlight>
          <h1 className="text-4xl font-bold">Integritetspolicy</h1>
        </Highlight>
        <p className="mt-2 text-sm italic">Senast uppdaterad: 12 oktober 2026</p>
      </header>

      <p className="mb-8">
        Den här integritetspolicyn beskriver hur uppgifter behandlas när du besöker
        webbplatsen eller använder kontaktformuläret.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-highlight mb-3">Vercel Web Analytics</h2>
        <p className="mb-3">
          Webbplatsen använder Vercel Web Analytics för att samla in anonym statistik om
          hur webbplatsen används. Informationen kan bland annat omfatta:
        </p>
        <ul className="list-disc pl-6 mb-3 space-y-1">
          <li>besökta sidor</li>
          <li>hänvisande webbplats</li>
          <li>ungefärlig geografisk plats</li>
          <li>webbläsare och operativsystem</li>
          <li>enhetstyp</li>
        </ul>
        <p className="mb-3">
          Statistiken används för att förstå hur webbplatsen används och för att förbättra
          innehåll och användarupplevelse.
        </p>
        <p className="mb-3">
          Vercel Web Analytics använder inga tredjepartscookies. Besökare skiljs
          tillfälligt åt med hjälp av ett hashvärde som skapas från den inkommande
          förfrågan. Besökssessionen raderas automatiskt efter 24 timmar och informationen
          används i aggregerad form.
        </p>
        <a
          href="https://vercel.com/docs/analytics/privacy-policy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-highlight underline hover:text-white transition"
        >
          Läs mer om integritet i Vercel Web Analytics
        </a>
        .
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-highlight mb-3">Kontaktformulär</h2>
        <p className="mb-3">
          Om du använder kontaktformuläret behandlas ditt namn, din e-postadress och ditt
          meddelande.
        </p>
        <p className="mb-3">
          Uppgifterna används endast för att ta emot och besvara din förfrågan. Formuläret
          skickas genom EmailJS, som fungerar som teknisk leverantör för
          e-postöverföringen.
        </p>
        <p className="mb-3">
          EmailJS uppger att data kan behandlas i USA och att lämpliga skyddsåtgärder
          används för överföringar från Europa.
        </p>
        <a
          href="https://www.emailjs.com/legal/privacy-policy/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-highlight underline hover:text-white transition"
        >
          Läs mer i EmailJS integritetspolicy
        </a>
        .
        <p className="mt-3">
          Meddelanden sparas endast så länge de behövs för att hantera kommunikationen.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-highlight mb-3">Dina rättigheter</h2>
        <p className="mb-3">
          Du kan kontakta mig om du vill veta vilka personuppgifter som behandlas, begära
          rättelse eller begära att uppgifter från ett skickat meddelande raderas.
        </p>
        <p>
          Kontakt:{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-highlight underline hover:text-white transition"
          >
            {CONTACT_EMAIL}
          </a>
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-highlight mb-3">
          Personuppgiftsansvarig
        </h2>
        <p>
          Anton Såndberg är personuppgiftsansvarig för behandlingen som beskrivs på den
          här sidan.
        </p>
      </section>
    </article>
  );
};

export default Privacy;
