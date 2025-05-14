import { Route, Routes } from "react-router-dom";
import { PATHS } from "./PATHS";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Contact from "../pages/Contacts";
import Resume from "../pages/Resume";
import Skills from "../pages/Skills";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={PATHS.home} element={<Home />} />
      <Route path={PATHS.about} element={<About />} />
      <Route path={PATHS.projects} element={<Projects />} />
      <Route path={PATHS.contact} element={<Contact />} />
      <Route path={PATHS.resume} element={<Resume />} />
      <Route path={PATHS.skills} element={<Skills />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
