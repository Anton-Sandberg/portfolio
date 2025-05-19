import clsx from "clsx";
import { motion } from "motion/react";
import type { ComponentType, SVGProps } from "react";
import { NavLink, useMatch } from "react-router-dom";

type Props = {
  path: string;
  label: string;
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
};

const baseClass = "flex flex-col items-center gap-0.5 p-1 lg:p-0 lg:mt-0";
const hoverClass = "transition-colors duration-200 ease-in-out hover:text-white";
const activeClass = " text-neutral-300";

function NavbarLink({ path, label, icon: Icon }: Props) {
  const match = useMatch(path);
  const isActive = !!match;

  return (
    <NavLink
      to={path}
      className={clsx("group", baseClass, hoverClass, isActive && activeClass)}
    >
      <div className="flex flex-col items-center gap-0.5 px-1 py-2 lg:px-4 xl:px-6">
        {Icon && <Icon className="size-7" />}

        <span className="relative">
          <span className="whitespace-nowrap">{label}</span>
          <span className="absolute left-0 top-5 my-1 w-0 h-0.5 rounded-full bg-white transition-all duration-300 ease-out group-hover:w-full" />
        </span>

        {isActive && (
          <div className="size-2 mt-1">
            {isActive && (
              <motion.div
                className="size-full rounded-full bg-current"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 600,
                  damping: 15,
                }}
              />
            )}
          </div>
        )}
      </div>
    </NavLink>
  );
}

export default NavbarLink;
