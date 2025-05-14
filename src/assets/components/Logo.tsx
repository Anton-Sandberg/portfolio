import { FaceSmileIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
import { PATHS } from "../router/PATHS";

const Logo = () => (
  <NavLink to={PATHS.home} className="flex items-center justify-center">
    <FaceSmileIcon className="size-10" />
    <span className="ml-2 leading-tight">
      Anton <br /> Såndberg
    </span>
  </NavLink>
);

export default Logo;
