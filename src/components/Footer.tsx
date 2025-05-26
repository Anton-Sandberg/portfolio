import { FaGithub } from "react-icons/fa";
import WeatherForecast from "./WeatherForecast";

const Footer = () => {
  return (
    <footer className="w-full py-3 mt-4 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 items-center gap-2 md:gap-0 text-sm text-neutral-500 text-center md:text-left">
        <p className="md:text-left">Skapad av Anton Såndberg</p>

        <p className="md:text-center">
          Copyright &copy; {new Date().getFullYear()}
        </p>

        <div className="md:text-right">
          <a
            href="https://github.com/anton-sandberg"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Anton Såndbergs GitHub"
          >
            <FaGithub className="inline-block size-6 hover:text-white transition" />
          </a>
          <WeatherForecast /> {/* Ta bort efter rättning */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
