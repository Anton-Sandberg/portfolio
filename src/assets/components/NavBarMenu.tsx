import NavbarLink from "./NavbarLink";
import Logo from "./Logo";
import { NAV_LINKS } from "../constants/navLinksConfig";

const NavbarMenu = () => {
  return (
    <div className="flex justify-between items-center w-full">
      <Logo />
      <div className="flex gap-4">
        {NAV_LINKS.map(({ path, label, icon }) => (
          <NavbarLink key={path} path={path} label={label} icon={icon} />
        ))}
      </div>
    </div>
  );
};

export default NavbarMenu;
