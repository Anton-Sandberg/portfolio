import type { ComponentType, SVGProps } from "react";
import { NavLink } from "react-router-dom";

type Props = {
  path: string;
  label: string;
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
  onClick?: () => void;
};

function NavbarLinkMobile({ path, label, icon: Icon, onClick }: Props) {
  return (
    <NavLink
      to={path}
      onClick={onClick}
      className="flex flex-row justify-center py-2 text-neutral-200 text-xl"
    >
      <div className="flex items-center gap-3">
        {Icon && <Icon className="size-7" />}
        {label}
      </div>
    </NavLink>
  );
}

export default NavbarLinkMobile;
