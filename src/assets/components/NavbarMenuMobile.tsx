import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NAV_LINKS } from "../constants/navLinksConfig";
import Logo from "./Logo";
import NavbarLinkMobile from "./NavbarLinkMobile";

const NavbarMenuMobile = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="flex justify-between items-center p-4">
        <Logo />
        <button onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <XMarkIcon className="size-10" /> : <Bars3Icon className="size-10" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden flex flex-col gap-6 px-4 pb-4"
          >
            {NAV_LINKS.map(({ path, label, icon }) => (
              <NavbarLinkMobile
                key={path}
                path={path}
                label={label}
                icon={icon}
                onClick={() => setOpen(false)}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavbarMenuMobile;
