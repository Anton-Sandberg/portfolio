import { PATHS } from "../router/PATHS";
import NavbarLink from "../components/navbar/NavbarLink";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center p-5">
      <h1 className="p-5 text-2xl font-bold">Page not found</h1>
      <NavbarLink label="Click here to return Home" path={PATHS.home} />
    </div>
  );
};

export default NotFound;
