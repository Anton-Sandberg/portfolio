import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { PATHS } from "@/router/PATHS";

const Footer = () => {
  return (
    <footer className="w-full py-3 mt-4 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 items-center gap-2 md:gap-0 text-sm text-neutral-500 text-center md:text-left">
        <p className="md:text-left">Skapad av Anton Såndberg</p>

        <div className="flex flex-col items-center gap-1 md:flex-row md:justify-center md:gap-2">
          <p>Copyright &copy; {new Date().getFullYear()}</p>
          <span className="hidden md:inline" aria-hidden="true">
            ·
          </span>
          <Link to={PATHS.privacy} className="hover:text-white hover:underline transition">
            Integritetspolicy
          </Link>
        </div>

        <div className="md:text-right">
          <a
            href="https://github.com/anton-sandberg"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Anton Såndbergs GitHub"
          >
            <FaGithub className="inline-block size-6 hover:text-white transition" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
