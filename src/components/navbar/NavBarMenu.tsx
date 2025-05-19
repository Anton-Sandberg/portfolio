import NavbarLink from "@components/navbar/NavbarLink";
import { NAV_LINKS } from "@constants/navLinksConfig";

const NavbarMenu = () => {
  return (
    <div className="flex justify-center items-center w-full">
      {NAV_LINKS.map(({ path, label, icon }) => (
        <div key={path} className="flex-1">
          <NavbarLink path={path} label={label} icon={icon} />
        </div>
      ))}
    </div>
  );
};

export default NavbarMenu;
